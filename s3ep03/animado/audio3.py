import json,subprocess,numpy as np,wave,os
SR=48000;R='/home/claude/esesobrassesoum/s3ep03/'
V=subprocess.run(['ffmpeg','-v','error','-i',R+'saida/voz_nivelada.wav','-ac','1','-ar',str(SR),'-f','f32le','-'],capture_output=True).stdout
v=np.frombuffer(V,np.float32).astype(np.float64)
L=json.load(open(R+'animado/lines.json'))
T=float(os.environ.get('DUR','120.68'));N=int(T*SR);rng=np.random.default_rng(3)
voice=np.zeros(N);voice[:len(v)]=v[:N]
src=voice.copy()
for li in (17,22,27,29,31):
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
M0=Dl(0)*.55;WIN=st(1)+Dl(1)*.48;T0=L[36]['b']+.1
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
import subprocess as _sp
def SF(nome):
    raw=_sp.run(['ffmpeg','-loglevel','error','-i',f'/home/claude/esesobrassesoum/s3ep02/sfx/{nome}.mp3','-ac','1','-ar',str(SR),'-f','s16le','-'],capture_output=True).stdout
    return np.frombuffer(raw,np.int16).astype(float)/32768

# ===== A MELODIA (o tema da Júlia / do caderno): Ré menor =====
MOT=[(62,.5),(65,.5),(69,.75),(67,.25),(65,.5),(64,.5),(62,1.0),(57,1.0)]
def pluck(m,d=1.6):
    f=mtof(m);n=int(SR/f);buf=rng.uniform(-1,1,n);out=np.zeros(int(d*SR))
    for k in range(len(out)):out[k]=buf[k%n];buf[k%n]=.5*(buf[k%n]+buf[(k+1)%n])*.996
    return lpf(out,3500)
def hum(m,d):
    tt=t_(d);f=mtof(m)*(1+.006*np.sin(2*np.pi*5.5*tt));ph=2*np.pi*np.cumsum(f)/SR;x=np.sin(ph)+.35*np.sin(2*ph)+.15*np.sin(3*ph)
    return lpf(x,1800)*np.minimum(1,tt/.06)*np.minimum(1,(d-tt)/.08)
def melodia(at,kind,g,bt=.42,reps=1,pan=0):
    tq=at
    for r in range(reps):
        for m,b in MOT:
            d=b*bt
            if kind=='hum':add(sfx,hum(m,d*.95),tq,g)
            elif kind=='violao':add(sfx,pluck(m,max(.9,d*2)),tq,g);add(sfx,pluck(m-12,max(.9,d*2)),tq,g*.35) if b>=1 else None
            else:piano2(m+12,tq,g,pan=pan)
            tq+=d
    return tq
# GANCHO
brass(.30,2.6,.4);tom(.30,.6,55)
strings2(.6,M0-.5,.3,(62,65,69,74),att=M0-1.0,trem=True)
for k_,tk in enumerate(np.linspace(.9,M0-.15,7)):tom(tk,.2+k_*.04,60+k_*4)
brass(M0,3.0,.8,(26,33,38,41));tom(M0,.9,50);sub(M0,1.5,.6,26)
secao(M0+.05,st(2),1.3,drums=2)
secao(st(2),st(4),.55,low=False)          # sábado de manhã (leve)
secao(st(4),st(8),1.0,drums=1)
secao(st(8),st(10),.45,arp=False,low=False) # ela cantarola: música quase some
secao(st(10),st(14),1.15,drums=1)
secao(st(14),st(16),.55,low=False)         # alívio cômico (correndo / gato)
secao(st(16),st(19),1.1,drums=1)
secao(st(19),st(24),.45,arp=False)         # o violão atravessa a parede
secao(st(24),st(26),.8)
secao(st(26),st(33),1.15,drums=1)
secao(st(33),T-.8,1.5,drums=2)
glass(st(9),3,.05);glass(st(31),4,.06,(85,92))
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
def elevding(at,g=.45):add(sfx,ding(1046,1.2)+np.pad(ding(830,1.0),(int(.35*SR),0))[:int(1.2*SR)],at,g)
def doors(at,d=1.2,g=.35):
    tt=t_(d);x=lpf(rng.standard_normal(len(tt)),700)*np.sin(np.pi*tt/d)**.6;add(sfx,x,at,g)
def steps(at,d,rate=2.2,g=.35):
    for k in range(int(d*rate)):
        tt=t_(.12);c=lpf(rng.standard_normal(len(tt)),900)*np.exp(-tt*40);add(sfx,c,at+k/rate,g*(1 if k%2 else .8))
def thud(at,g):
    tt=t_(.4);x=np.sin(2*np.pi*np.cumsum(90*np.exp(-tt*12)+40)/SR)*np.exp(-tt*14)+lpf(rng.standard_normal(len(tt)),1500)*np.exp(-tt*30)*.7;add(sfx,x,at,g)
add(sfx,whoosh(.4),0,.5);add(sfx,boom(1.6),.30,.6);add(sfx,buzz(),.7,.3);msg(Dl(0)*.3);msg(Dl(0)*.7)
add(sfx,riser(M0-1.2),1.2,.3);doors(M0-.1,.6,.4);thud(M0+.3,1.0);add(sfx,boom(1.8),M0+.3,.9);add(sfx,shimmer(1.4),M0+.32,.3)
for k in range(13):add(sfx,pop(1500,1100,.04),st(1)+.3+k/7,.18)
add(sfx,boom(1.2),WIN,.6);add(sfx,shimmer(1.2),WIN,.35)
for i in (2,3,4,9,11,12,14,16,19,21,22,25,30,32):add(sfx,whoosh(.45),st(i)-.15,.12)
steps(st(2)+Dl(2)*.12,Dl(2)*.8,2.2,.3);add(sfx,SF('04_porta_rangendo')[:int(1.2*SR)],st(2)+Dl(2)*.85,.25)
steps(st(3),Dl(3),2.6,.35)
elevding(st(4)+.1,.4);doors(st(4)+Dl(4)*.25,Dl(4)*.7,.35)
thud(st(5)+.35,.7);doors(st(5)+.4,1.0,.4)
steps(st(6),Dl(6)*.6,2.4,.3);doors(st(6)+Dl(6)*.68,Dl(6)*.3,.35)
add(sfx,ding(660,.6),st(7)+Dl(7)*.55,.25)
melodia(st(8)+.15,'hum',.16,bt=.36)
add(sfx,ding(660,.6),st(10)-.2,.2);elevding(st(10)+.1,.45);doors(st(10)+Dl(10)*.06,Dl(10)*.3,.35);steps(st(10)+Dl(10)*.3,Dl(10)*.6,2.2,.28)
add(sfx,clink()*.5,st(10)+Dl(10)*.46,.35)
add(sfx,shimmer(1.4),st(12)+.1,.35);add(sfx,pop(900,1300,.08),st(13)+.25,.35);add(sfx,pop(900,1300,.08),st(13)+.45,.35)
steps(st(14),Dl(14),4.5,.4);add(sfx,meow(),st(15)+Dl(15)*.75,.45)
add(sfx,SF('08_celular_vibrando'),st(16)+.1,.2);add(sfx,SF('18_glitch_tela'),st(16)+.2,.2);msg(st(16)+Dl(16)*.35)
add(sfx,SF('10_mensagem_do_futuro'),st(17)+.1,.45)
add(sfx,typing(Dl(18)*.75),st(18)+.1,.3)
melodia(st(19)+Dl(19)*.35,'violao',.33,bt=.4)
melodia(st(20)+.1,'violao',.42,bt=.4)
add(sfx,SF('04_porta_rangendo'),st(21)+.1,.45);add(sfx,lpf(whoosh(.6),1800),st(22)+.1,.35)
melodia(st(23)+Dl(23)*.45,'piano',.22,bt=.32)
add(sfx,SF('19_relogio_tique_taque')[:int(Dl(26)*.45*SR)],st(26),.3);add(sfx,SF('08_celular_vibrando'),st(26)+Dl(26)*.5,.2)
for i in (27,29):msg(st(i)+.3)
add(sfx,typing(Dl(28)*.75),st(28)+.1,.3)
add(sfx,SF('08_celular_vibrando'),st(30)+Dl(30)*.25-.2,.2)
add(sfx,SF('10_mensagem_do_futuro'),st(31)+.05,.5);add(sfx,SF('18_glitch_tela'),st(31)+.1,.35)
add(sfx,pop(1000,500),st(34)+.1,.45);add(sfx,pop(1100,500),st(35)+.1,.45)
add(sfx,riser(1.0),T0-1.0,.22);add(sfx,boom(1.4),T0,.7);add(sfx,shimmer(1.4),T0,.3)
def stinger(at,g):
    tt=t_(1.8);x=sum(sstr(mtof(n),1.8,vib=7,bright=4) for n in (81,82,88))/3
    x*=.7+.3*np.sin(2*np.pi*13*tt)**2;x*=np.minimum(1,tt/.03)*np.exp(-tt*1.8);add(sfx,x,at,g*.35)
def reverse_swell(at,d,g):
    tt=t_(d);x=hpf(rng.standard_normal(len(tt)),300)*(tt/d)**3;add(sfx,lpf(x,5000),at-d,g)
def rumble(at,d,g):
    x=lpf(rng.standard_normal(int(d*SR)),80);x/=np.abs(x).max()+1e-9;e=np.minimum(1,t_(d)/2)*np.minimum(1,(d-t_(d))/2);add(sfx,x*e,at,g)

rumble(st(4),st(14)-st(4),.06);rumble(st(26),st(34)-st(26),.08)
for i_ in (12,17,23,31):reverse_swell(st(i_)+.1,.8,.15);stinger(st(i_)+.1,.45)
mg=np.ones(N);hitwin=np.zeros(N)
sfx[:int(st(1)*SR)]*=.6;musL[:int(st(1)*SR)]*=.7;musR[:int(st(1)*SR)]*=.7;sfx[int(st(16)*SR):int(st(17)*SR)]*=.6
def impacto(at,g):
    a=int(at*SR);pre=int(.4*SR);post=int(2.4*SR)
    if a-pre>0:mg[a-pre:a]=np.minimum(mg[a-pre:a],np.linspace(1,.25,pre))
    e=min(N,a+post);mg[a:e]=1+(.5*g)*np.exp(-np.arange(e-a)/SR*1.6)
    hitwin[a:min(N,a+int(1.2*SR))]=1
    brass(at,2.6,.6*g,(38,45,50));tom(at,.7*g,52);sub(at,1.2,.3*g,26);strings2(at,1.8,.35*g,(74,77,81),att=.03,rel=1.2,trem=True);glass(at,1.6,.08*g)
    tt=t_(.5);add(sfx,lpf(hpf(rng.standard_normal(len(tt)),300)*(tt/.5)**3,5000),at-.5,.25*g)
for at in [M0+.3,st(5)+.35,st(12)+.1,st(13)+.1,st(16)+.1,st(23)+Dl(23)*.45,st(31)+.1,T0]:impacto(at,.9)

# ===== MIX ESTÉREO com reverb =====
def reverb(x,dur=2.2,wet=.22):
    ir=rng.standard_normal(int(dur*SR))*np.exp(-t_(dur)*3.0);ir=lpf(ir,6000);ir/=np.sqrt((ir**2).sum())
    n=len(x)+len(ir);F=np.fft.rfft(x,n)*np.fft.rfft(ir,n);return x+np.fft.irfft(F,n)[:len(x)]*wet
venv=np.convolve(np.abs(voice),np.ones(int(.08*SR))/int(.08*SR),'same');duck=1-.75*np.clip(venv/(venv.max()*.25),0,1)
ig=np.ones(N);ig[:int(st(1)*SR)]=1.15;ig[int(st(1)*SR):int((st(1)+.6)*SR)]=np.linspace(1.15,1,int(.6*SR))
duck=np.maximum(duck,.4*hitwin);G=duck*ig*mg
mL=reverb(musL*G,2.6,.30);mR=reverb(musR*G,2.6,.30)
dS=1-.6*np.clip(venv/(venv.max()*.25),0,1);dS=np.maximum(dS,.55*hitwin);sx=reverb(sfx*dS,1.4,.18)
vo=reverb(voice,.6,.06)
Lc=vo+mL*.16+sx*.24;Rc=vo+mR*.16+sx*.24
for c in (Lc,Rc):c[-int(.8*SR):]*=np.linspace(1,0,int(.8*SR))
m=max(np.abs(Lc).max(),np.abs(Rc).max())*1.05
st2=np.stack([Lc/m,Rc/m],1)
w=wave.open(''+R+'saida/mix3.wav','wb');w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes((st2*32767).astype(np.int16).tobytes());w.close()
w=wave.open(R+'saida/voz_eco.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes((np.clip(vo/m,-1,1)*32767).astype(np.int16).tobytes());w.close()
print('ok',T)
