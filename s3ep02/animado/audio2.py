import json,subprocess,numpy as np,wave,os
SR=48000;R='/home/claude/esesobrassesoum/s3ep02/'
V=subprocess.run(['ffmpeg','-v','error','-i',R+'saida/voz_nivelada.wav','-ac','1','-ar',str(SR),'-f','f32le','-'],capture_output=True).stdout
v=np.frombuffer(V,np.float32).astype(np.float64)
L=json.load(open(R+'animado/lines.json'))
T=float(os.environ.get('DUR','120.68'));N=int(T*SR);rng=np.random.default_rng(3)
voice=np.zeros(N);voice[:len(v)]=v[:N]
src=voice.copy()
for li in (13,21,24,25,29):
    a,b=int((L[li]['a']-.05)*SR),int((L[li]['b']+.1)*SR);seg_=src[a:b].copy()
    for d,g in [(.16,.34),(.32,.18),(.48,.09)]:
        i=a+int(d*SR);j=min(N,i+len(seg_));voice[i:j]+=seg_[:j-i]*g
def t_(d):return np.arange(int(d*SR))/SR
def add(buf,x,at,g=1.):
    i=int(at*SR)
    if i<0:x=x[-i:];i=0
    j=min(len(buf),i+len(x));buf[i:j]+=x[:j-i]*g
def lpf(x,fc):
    X=np.fft.rfft(x);f=np.fft.rfftfreq(len(x),1/SR);X*=1/(1+(f/fc)**4);return np.fft.irfft(X,len(x))
def hpf(x,fc):
    X=np.fft.rfft(x);f=np.fft.rfftfreq(len(x),1/SR);X*=1-1/(1+(f/fc)**4);return np.fft.irfft(X,len(x))
def mtof(m):return 440*2**((m-69)/12)
def saw(f,d):
    tt=t_(d);x=np.zeros(len(tt))
    for det in (-.08,0,.08):
        ph=(f*2**(det/12)*tt)%1;x+=2*ph-1
    return x/3
def env(n,a,r):
    e=np.ones(n);A=int(a*SR);R=int(r*SR)
    if A:e[:A]=np.linspace(0,1,A)
    if R:e[-R:]*=np.linspace(1,0,R)**2
    return e

st=lambda i:0 if i==0 else L[i]['a']-.12
Dl=lambda i:(st(i+1) if i<len(L)-1 else T)-st(i)
M0=Dl(0)*.55;WIN=st(1)+Dl(1)*.48;T0=L[35]['b']+.1
# ================= TRILHA V4: orquestral quente (Ré menor) =================
musL=np.zeros(N);musR=np.zeros(N)
bpm=100;beat=60/bpm
def addS(x,at,g=1.,pan=0.):
    add(musL,x,at,g*(1-max(0,pan)));add(musR,x,at+.011*abs(pan),g*(1+min(0,pan)))
def sstr(f,d,vib=5.2,bright=6):
    tt=t_(d);ph=2*np.pi*f*tt+(f*.004/vib)*np.sin(2*np.pi*vib*tt+rng.random()*6)
    x=np.zeros(len(tt))
    for h in range(1,bright+1):x+=np.sin(h*ph)/h**1.6
    return x
def strings2(at,d,g,notes,att=.8,rel=1.,trem=False,pan=.35):
    if d<=0:return
    tt=t_(d);x=sum(sstr(mtof(n)*(1+.0015*(k-1)),d) for k,n in enumerate(notes))/len(notes)
    if trem:x*=.65+.35*np.sin(2*np.pi*11*tt)**2
    e=np.minimum(1,tt/att)*np.minimum(1,np.maximum(0,(d-tt))/rel);x*=e
    addS(x,at,g,-pan);addS(x,at+.013,g*.9,pan)
def cello(at,d,g,m):strings2(at,d,g,(m,m+12),att=.25,rel=.4,pan=.1)
def piano2(m,at,g,d=2.8,pan=0):
    tt=t_(d);f=mtof(m);x=np.zeros(len(tt))
    for h in range(1,7):fh=f*h*np.sqrt(1+.0004*h*h);x+=np.sin(2*np.pi*fh*tt)*np.exp(-tt*(1.2+h*.9))/h**1.1
    x*=np.minimum(1,tt/.004);addS(x,at,g,pan)
def sub(at,d,g,m):
    tt=t_(d);x=np.sin(2*np.pi*mtof(m)*tt)*np.minimum(1,tt/.01)*np.exp(-tt*3);addS(x,at,g)
def tom(at,g,f0=70):
    tt=t_(1.2);f=f0+70*np.exp(-tt*14);x=np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-tt*3.2)+lpf(rng.standard_normal(len(tt)),500)*np.exp(-tt*14)*.4;addS(x,at,g)
def brass(at,d,g,notes=(26,33,38)):  # braam mais quente (sem estourar)
    tt=t_(d);x=sum(saw(mtof(n),d) for n in notes)/len(notes);x=lpf(np.tanh(1.3*x),1100)
    x*=np.minimum(1,tt/.06)*np.exp(-tt*.9);addS(x,at,g,-.2);addS(x,at+.01,g*.9,.2)
def glass(at,d,g,notes=(86,93)):  # brilho tenso agudo (taça)
    tt=t_(d);x=sum(np.sin(2*np.pi*mtof(n)*tt+.3*np.sin(2*np.pi*.4*tt)) for n in notes)/len(notes)
    x*=np.minimum(1,tt/(d*.6))**2*np.minimum(1,(d-tt)/.3);addS(x,at,g,.4)
PROG=[(38,(62,65,69)),(34,(58,62,65)),(31,(55,58,62)),(33,(57,61,64))]   # Dm Bb Gm A
ARP=[0,1,2,1,0,2,1,2]
def secao(a,b,inten,arp=True,drums=0,low=True):
    fast=inten>1.3;step=beat/2 if fast else beat;per=16 if fast else 8
    tq=a;k=0
    while tq<b-.05:
        root,ch=PROG[(k//per)%4]
        if k%per==0:
            d=min(step*per,b-tq)
            strings2(tq,d+.6,.34*inten,ch,att=1.2 if inten<1 else .5,trem=inten>1.2)
            if low:cello(tq,d+.4,.14*inten,root+12);sub(tq,beat*2,.16*inten,root)
        if arp:piano2(ch[ARP[k%8]]+12,tq,.20+.05*inten,pan=(-.25 if k%2 else .25))
        if drums and k%(8 if fast else 4)==0:tom(tq,.20*drums)
        if drums>1 and k%16==12:tom(tq,.22*drums,95);tom(tq+step,.22*drums,95)
        tq+=step;k+=1
# GANCHO
brass(.30,2.6,.75);tom(.30,.9,55)
strings2(.6,M0-.5,.55,(62,65,69,74),att=M0-1.0,trem=True)
for k_,tk in enumerate(np.linspace(.9,M0-.15,7)):tom(tk,.35+k_*.06,60+k_*4)
glass(1.0,M0-1.0,.16)
brass(M0,3.0,.9,(26,33,38,41));tom(M0,1.0,50);sub(M0,1.5,.7,26)
secao(M0+.05,st(2),1.4,drums=2)
secao(st(2),st(12),1.2,drums=1)
secao(st(12),st(17),.9)
secao(st(17),st(20),.6,low=False)
secao(st(20),st(30),1.2,drums=1)
secao(st(30),st(33),1.0)
secao(st(33),T-.8,1.6,drums=2)
glass(st(9),4,.06);glass(st(27),5,.07,(85,92))
mus=(musL+musR)/2
# ---------- SFX ----------
sfx=np.zeros(N)
def whoosh(d=.5):
    x=rng.standard_normal(int(d*SR));x=lpf(x,2500)*np.sin(np.linspace(0,np.pi,len(x)))**1.5;return x/np.abs(x).max()
def riser(d):
    n=int(d*SR);x=hpf(rng.standard_normal(n),800)*.5+np.sin(2*np.pi*np.cumsum(np.linspace(150,1200,n))/SR)*.4;return x*np.linspace(0,1,n)**2.2
def boom(d=1.6):
    tt=t_(d);f=35+80*np.exp(-tt*6);x=np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-tt*2.2)+lpf(rng.standard_normal(len(tt)),400)*np.exp(-tt*5)*.8;return x/1.5
def shimmer(d=1.4):
    tt=t_(d);return sum(np.sin(2*np.pi*f*tt+np.sin(tt*7+i))*np.exp(-tt*2.5) for i,f in enumerate([1568,2093,2637,3136]))/4
def ding(f=1320,d=.6):
    tt=t_(d);return (np.sin(2*np.pi*f*tt)+.5*np.sin(2*np.pi*f*2.01*tt))*np.exp(-tt*8)/1.5
def buzz(d=.35):
    tt=t_(d);x=np.sign(np.sin(2*np.pi*150*tt))*.3;return lpf(x,600)*env(len(tt),.01,.05)
def pop(f0=900,f1=300,d=.09):
    tt=t_(d);return np.sin(2*np.pi*np.cumsum(np.linspace(f0,f1,len(tt)))/SR)*np.exp(-tt*30)
def typing(d):
    x=np.zeros(int(d*SR))
    for k in range(int(d*9)):
        tt=t_(.02);c=hpf(rng.standard_normal(len(tt)),2500)*np.exp(-tt*300);i=int((k/9+rng.random()*.03)*SR)
        if i+len(c)<len(x):x[i:i+len(c)]+=c
    return x
def knock():
    tt=t_(.18);x=np.sin(2*np.pi*np.cumsum(140*np.exp(-tt*10)+60)/SR)*np.exp(-tt*28)+lpf(rng.standard_normal(len(tt)),1200)*np.exp(-tt*40)*.6;return x
def meow():
    tt=t_(.55);f=500+300*np.sin(np.pi*tt/.55)**.7;x=(np.sin(2*np.pi*np.cumsum(f)/SR)+.4*np.sin(4*np.pi*np.cumsum(f)/SR))*np.sin(np.pi*tt/.55)**.8;return lpf(x,2500)*.7
def clink():
    tt=t_(.5);return sum(np.sin(2*np.pi*f*tt)*np.exp(-tt*(12+i*4)) for i,f in enumerate([2100,3150,4400]))/3
def splash():
    tt=t_(.5);return lpf(rng.standard_normal(len(tt)),3000)*np.exp(-tt*8)
def msg(at):add(sfx,pop(1100,1400,.07),at,.35);add(sfx,ding(1760,.4),at+.05,.2)
add(sfx,whoosh(.4),0,.5);add(sfx,boom(1.6),.30,1.0);add(sfx,clink()*.4,.31,.4)
add(sfx,buzz(),.7,.6);msg(Dl(0)*.3);msg(Dl(0)*.7)
add(sfx,riser(M0-1.2),1.2,.35);add(sfx,boom(1.8),M0,1.0);add(sfx,shimmer(1.4),M0+.02,.35)
for k in range(13):add(sfx,pop(1500,1100,.04),st(1)+.3+k/7,.18)
add(sfx,boom(1.2),WIN,.7);add(sfx,shimmer(1.2),WIN,.35)
for i in (2,6,12,14,17,20,27,30,31):add(sfx,whoosh(.45),st(i)-.15,.12)
for k in (Dl(3)*.25,Dl(3)*.25+.32,Dl(3)*.62,Dl(3)*.62+.32):add(sfx,knock(),st(3)+k,1.0)
add(sfx,pop(),st(13)+.1,.3);add(sfx,pop(1000,500),st(33)+.1,.45);add(sfx,pop(1100,500),st(34)+.1,.45)
add(sfx,typing(Dl(22)*.75),st(22)+.1,.3);add(sfx,typing(.8),st(23)+.1,.15)
for i in (21,24,25,29):msg(st(i)+.3)
add(sfx,buzz(),st(20)+Dl(20)*.45,.7);add(sfx,buzz(),st(20)+Dl(20)*.45+.45,.7)
for h in range(3):add(sfx,ding(1320,.5),st(18)+Dl(18)*h/3,.3)
add(sfx,pop(300,80,.15),st(26)+.15,.5)
add(sfx,riser(1.0),T0-1.0,.25);add(sfx,boom(1.4),T0,.8);add(sfx,shimmer(1.4),T0,.3)
# ===== suspense (V4: menos e melhor) =====
def stinger(at,g):
    tt=t_(1.8);x=sum(sstr(mtof(n),1.8,vib=7,bright=4) for n in (81,82,88))/3
    x*=.7+.3*np.sin(2*np.pi*13*tt)**2;x*=np.minimum(1,tt/.03)*np.exp(-tt*1.8);add(sfx,x,at,g*.35)
def reverse_swell(at,d,g):
    tt=t_(d);x=hpf(rng.standard_normal(len(tt)),300)*(tt/d)**3;add(sfx,lpf(x,5000),at-d,g)
def rumble(at,d,g):
    x=lpf(rng.standard_normal(int(d*SR)),80);x/=np.abs(x).max()+1e-9;e=np.minimum(1,t_(d)/2)*np.minimum(1,(d-t_(d))/2);add(sfx,x*e,at,g)
rumble(st(2),st(17)-st(2),.08);rumble(st(20),st(33)-st(20),.10)
for i_ in (10,13,24,27):reverse_swell(st(i_)+.1,.8,.18);stinger(st(i_)+.1,.5)
import subprocess as _sp
def SF(nome):
    raw=_sp.run(['ffmpeg','-loglevel','error','-i',f'/home/claude/esesobrassesoum/s3ep02/sfx/{nome}.mp3','-ac','1','-ar',str(SR),'-f','s16le','-'],capture_output=True).stdout
    return np.frombuffer(raw,np.int16).astype(float)/32768
add(sfx,SF('11_coracao_acelerando'),st(2)+.1,.7)
add(sfx,SF('07_passos_corredor'),st(5)+Dl(5)*.35,.45)
add(sfx,SF('06_olho_magico'),st(6)+Dl(6)*.72,.7)
add(sfx,SF('07_passos_corredor'),st(7)+.1,.3);add(sfx,SF('07_passos_corredor')[:int(2*SR)],st(8)+.3,.2)
add(sfx,SF('04_porta_rangendo'),st(8)+.05,.45);add(sfx,ding(880,.8),st(8)+Dl(8)*.6,.25)
add(sfx,SF('17_caixa_no_chao'),st(9)+Dl(9)*.4,.5)
add(sfx,SF('05_fechadura_trinco'),st(11)+.3,.6)
add(sfx,lpf(whoosh(.7),1500),st(12)+Dl(12)*.2,.5)
add(sfx,SF('19_relogio_tique_taque')[:int(Dl(18)*SR)],st(18),.3)
add(sfx,SF('19_relogio_tique_taque')[:int(Dl(20)*.45*SR)],st(20),.35)
add(sfx,SF('08_celular_vibrando'),st(20)+Dl(20)*.5,.6)
add(sfx,SF('10_mensagem_do_futuro'),st(25)+.05,.45);add(sfx,SF('10_mensagem_do_futuro'),st(29)+.1,.5)
add(sfx,SF('18_glitch_tela'),st(26)+.3,.4);add(sfx,SF('18_glitch_tela'),st(29)+.1,.35);add(sfx,SF('18_glitch_tela'),M0-.1,.35)
add(sfx,SF('08_celular_vibrando'),st(28)+Dl(28)*.3-.2,.75)
add(sfx,SF('04_porta_rangendo'),T0+.3,.4)
_r=lpf(hpf(rng.standard_normal(int(Dl(31)*SR)),400),3000);_r*=np.minimum(1,t_(Dl(31))/.6)*np.minimum(1,(Dl(31)-t_(Dl(31)))/.6);add(sfx,_r,st(31),.06)
mg=np.ones(N);hitwin=np.zeros(N)
def impacto(at,g):
    a=int(at*SR);pre=int(.4*SR);post=int(2.4*SR)
    if a-pre>0:mg[a-pre:a]=np.minimum(mg[a-pre:a],np.linspace(1,.25,pre))
    e=min(N,a+post);mg[a:e]=1+(.5*g)*np.exp(-np.arange(e-a)/SR*1.6)
    hitwin[a:min(N,a+int(1.2*SR))]=1
    brass(at,2.6,.6*g,(38,45,50));tom(at,.7*g,52);sub(at,1.2,.3*g,26);strings2(at,1.8,.35*g,(74,77,81),att=.03,rel=1.2,trem=True);glass(at,1.6,.08*g)
    tt=t_(.5);add(sfx,lpf(hpf(rng.standard_normal(len(tt)),300)*(tt/.5)**3,5000),at-.5,.25*g)
for at in [M0,WIN,st(9)+Dl(9)*.4,st(13)+.1,st(24)+.1,st(28)+Dl(28)*.3,st(30)+.1,T0]:impacto(at,1.0)

# ===== MIX ESTÉREO com reverb =====
def reverb(x,dur=2.2,wet=.22):
    ir=rng.standard_normal(int(dur*SR))*np.exp(-t_(dur)*3.0);ir=lpf(ir,6000);ir/=np.sqrt((ir**2).sum())
    n=len(x)+len(ir);F=np.fft.rfft(x,n)*np.fft.rfft(ir,n);return x+np.fft.irfft(F,n)[:len(x)]*wet
venv=np.convolve(np.abs(voice),np.ones(int(.08*SR))/int(.08*SR),'same');duck=1-.6*np.clip(venv/(venv.max()*.25),0,1)
ig=np.ones(N);ig[:int(st(1)*SR)]=1.5;ig[int(st(1)*SR):int((st(1)+.6)*SR)]=np.linspace(1.5,1,int(.6*SR))
duck=np.maximum(duck,.5*hitwin);G=duck*ig*mg
mL=reverb(musL*G,2.6,.30);mR=reverb(musR*G,2.6,.30)
sx=reverb(sfx,1.4,.18)
vo=reverb(voice,.6,.06)
Lc=vo+mL*.32+sx*.34;Rc=vo+mR*.32+sx*.34
for c in (Lc,Rc):c[-int(.8*SR):]*=np.linspace(1,0,int(.8*SR))
m=max(np.abs(Lc).max(),np.abs(Rc).max())*1.05
st2=np.stack([Lc/m,Rc/m],1)
w=wave.open(''+R+'saida/mix2.wav','wb');w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes((st2*32767).astype(np.int16).tobytes());w.close()
print('ok',T)
