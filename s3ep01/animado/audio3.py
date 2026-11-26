import json,subprocess,numpy as np,wave
SR=48000
V=subprocess.run(['ffmpeg','-v','error','-i','/home/claude/esesobrassesoum/s3ep01/saida/voz_full.wav','-ac','1','-ar',str(SR),'-f','f32le','-'],capture_output=True).stdout
v=np.frombuffer(V,np.float32).astype(np.float64)
L=json.load(open('/tmp/s3/lines3.json'))
T=float(__import__('os').environ.get('DUR','100.4'));N=int(T*SR);rng=np.random.default_rng(3)
voice=np.zeros(N);voice[:len(v)]=v[:N]
# eco na mensagem (linha 7)
src=voice.copy()
for li in (8,10,15,16,29):
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

MK=json.load(open('/tmp/s3/mk3.json'))
mus=np.zeros(N);bpm=100;beat=60/bpm
def pad(notes,start,d,g,fc=1800):
    x=sum(saw(mtof(n),d) for n in notes)/len(notes);x=lpf(x,fc);add(mus,x*env(len(x),.3,.5),start,g)
def pluck(m,at,g,d=.35):
    tt=t_(d);x=(np.sin(2*np.pi*mtof(m)*tt)+.4*np.sin(4*np.pi*mtof(m)*tt))*np.exp(-tt*9);add(mus,x,at,g)
def kick(at,g=1.):
    tt=t_(.45);f=50+110*np.exp(-tt*28);x=np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-tt*7);add(mus,x,at,g)
def hat(at,g=.15):
    tt=t_(.06);x=hpf(rng.standard_normal(len(tt)),7000)*np.exp(-tt*70);add(mus,x,at,g)
def snare(at,g=.35):
    tt=t_(.25);x=hpf(rng.standard_normal(len(tt)),1500)*np.exp(-tt*18)+.5*np.sin(2*np.pi*190*tt)*np.exp(-tt*20);add(mus,x,at,g)
def tic(at,g=.16):
    tt=t_(.03);add(mus,hpf(rng.standard_normal(len(tt)),3000)*np.exp(-tt*200),at,g)
def heart(at,g=.5):
    for o in (0,.18):
        tt=t_(.2);x=np.sin(2*np.pi*55*tt)*np.exp(-tt*22);add(mus,x,at+o,g*(1 if o==0 else .7))
st=lambda i:L[i]['a']-.12
FLASH=st(2)+(L[3]['a']-L[2]['a'])*.80
SCAN0=st(2)+(L[3]['a']-L[2]['a'])*.42
P1,P2,P3,P4,P5=st(4),st(19),st(21),st(33),T
# parte 1 (intro brilhante)
chords1=[[48,55,64,67],[45,52,60,64],[41,48,57,65],[43,50,59,67]]
# ===== GANCHO DOS 5 PRIMEIROS SEGUNDOS: trilha de trailer =====
I0=st(1);FUT=MK['fut0']
def braam(at,d,g,notes=(26,33,38)):
    tt=t_(d);x=sum(saw(mtof(n),d) for n in notes)/len(notes);x=np.tanh(2.2*x);x=lpf(x,900)*np.minimum(1,tt/.04)*np.exp(-tt*1.1);add(mus,x,at,g)
def taiko(at,g):
    tt=t_(.7);f=60+90*np.exp(-tt*18);x=np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-tt*5)+lpf(rng.standard_normal(len(tt)),700)*np.exp(-tt*18)*.6;add(mus,x,at,g)
def strings(at,d,g,notes):
    tt=t_(d);x=sum(saw(mtof(n),d) for n in notes)/len(notes);trem=.6+.4*np.sign(np.sin(2*np.pi*12*tt));x=lpf(x,2600)*trem*np.linspace(.15,1,len(tt))**1.5;add(mus,x,at,g)
braam(.30,2.2,.9)                                   # impacto do celular caindo
strings(.6,FUT-.6,.35,(57,60,64,69))                # cordas tremendo subindo até "do futuro"
for k_,tk in enumerate([1.1,1.8,2.4,2.9,3.3,3.6,3.8]):taiko(tk,.55+k_*.05)  # tambores acelerando
for k_ in range(int((FUT-.5)/.25)):tt=t_(.03);add(mus,hpf(rng.standard_normal(len(tt)),5000)*np.exp(-tt*250),.5+k_*.25,.18)  # tique-taque 23:59
braam(FUT,2.6,1.0,(21,28,33,40));taiko(FUT,1.0);kick(FUT,1.0)  # DROP em "do futuro"
# batida pesada até "esse é você"
tq=FUT+beat
while tq<I0:kick(tq,.7);hat(tq+beat/2,.2);tq+=beat
# ===== TRILHA DE SUSPENSE (depois do gancho) =====
def drone(at,d,g,notes,fc=500):
    if d<=0:return
    tt=t_(d);x=sum(saw(mtof(n),d) for n in notes)/len(notes);x=lpf(x,fc)*(0.75+0.25*np.sin(2*np.pi*.15*tt));e=np.minimum(1,tt/1.2)*np.minimum(1,(d-tt)/1.0);add(mus,x*e,at,g)
def piano(m,at,g,d=2.2):
    tt=t_(d);f=mtof(m);x=(np.sin(2*np.pi*f*tt)+.35*np.sin(4*np.pi*f*tt)+.12*np.sin(6*np.pi*f*tt))*np.exp(-tt*2.2);
    y=x.copy();
    for dl,gg in [(.23,.35),(.47,.2),(.71,.1)]:i=int(dl*SR);y[i:]+=x[:len(x)-i]*gg
    add(mus,y,at,g)
def pulse(at,d,g,m):  # baixo pulsando em colcheias
    tq=at
    while tq<at+d:tt=t_(.22);x=lpf(saw(mtof(m),.22),300)*np.exp(-tt*9);add(mus,x,tq,g);tq+=beat/2
def tick(at,g=.14):tt=t_(.025);add(mus,hpf(rng.standard_normal(len(tt)),4000)*np.exp(-tt*260),at,g)
def heart2(at,g):
    for o_,gg in ((0,1),(.2,.7)):tt=t_(.22);add(mus,np.sin(2*np.pi*48*tt)*np.exp(-tt*20),at+o_,g*gg)
# 1) "esse é você" + remodelagem: cinematográfico em menor (Lá menor), sem alegria
drone(I0,P1-I0,.28,(33,40,45),700)
tq=I0;k=0
for m in [57,60,64,62,60,59,57,64]:pass
while tq<P1:
    if tq<FLASH-.1 or tq>FLASH+.4:pulse(tq,beat,.35,33 if (k//8)%2==0 else 29)
    if k%4==0:piano([69,72,76,71][(k//4)%4],tq,.12)
    if tq>=L[2]['a'] and (tq<FLASH-.05 or tq>FLASH+beat*2) and k%2==0:kick(tq,.45)
    tq+=beat;k+=1
# 2) noite: drone grave, piano esparso, relógio, coração nos momentos tensos
drone(P1,P2-P1,.32,(33,40,44),420)   # Lá menor com 6ª menor (inquietante)
tq=P1;k=0;notes=[69,68,64,65,69,72,71,68]
while tq<P2:
    tick(tq,.12)
    if k%6==0:piano(notes[(k//6)%len(notes)],tq+.1,.10)
    hot=any(st(i)<=tq<st(i+1) for i in (7,8,13,15,16))
    if hot and k%2==0:heart2(tq,.45)
    tq+=beat;k+=1
# 3) dia seguinte: calmo mas desconfortável
drone(P2,P3-P2,.2,(40,47,52),900)
tq=P2;k=0
while tq<P3:
    tick(tq,.08)
    if k%4==0:piano([76,75,71,72][(k//4)%4],tq,.08)
    tq+=beat;k+=1
# 4) porta: drone pesado, batida de coração acelerando, cordas tensas
drone(P3,P4-P3,.4,(28,35,36),360)
tq=P3;k=0
while tq<P4:
    rate=1-.35*min(1,max(0,(tq-P3)/(P4-P3)))
    heart2(tq,.5);tick(tq+.05,.08)
    if k%8==0:drone(tq,beat*8,.08,(64,65,71),2400)
    tq+=beat*rate*1.0;k+=1
# 5) escolha: ostinato tenso e tambores
drone(P4,P5-P4,.3,(33,40,45),600)
tq=P4;k=0
while tq<P5-.8:
    pulse(tq,beat,.4,33 if (k//4)%2==0 else 34)
    if k%2==0:kick(tq,.5)
    if k%4==3:taiko(tq,.45)
    tick(tq+beat/2,.1);tq+=beat;k+=1
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
# intro
add(sfx,whoosh(.4),0,.5);add(sfx,boom(1.6),.30,1.0);add(sfx,clink()*.4,.31,.4)
for k in range(6):add(sfx,pop(2400,1800,.03),.45+k*.09,.12)
add(sfx,buzz(),1.05,.6);add(sfx,buzz(),1.5,.6);add(sfx,ding(1480,.7),1.1,.35)
add(sfx,riser(MK['fut0']-2.0),2.0,.35);add(sfx,boom(1.8),MK['fut0'],1.0);add(sfx,shimmer(1.4),MK['fut0']+.02,.35)
add(sfx,whoosh(.5),st(1)-.25,.4);add(sfx,boom(.8),st(1)+.02,.45)
_sw=int((FLASH-SCAN0)*SR);_x=hpf(rng.standard_normal(_sw),600)*np.linspace(.2,1,_sw);add(sfx,lpf(_x,4000)*.5,SCAN0,.5)
for k in range(10):add(sfx,hpf(rng.standard_normal(int(.05*SR)),2000)*np.exp(-np.arange(int(.05*SR))/SR*60),st(2)+.2+k*(SCAN0-st(2))/10,.25)
add(sfx,riser(FLASH-st(2)),st(2),.4);add(sfx,boom(),FLASH-.02,1.0);add(sfx,shimmer(),FLASH,.45);add(sfx,whoosh(.7),FLASH-.3,.4)
add(sfx,pop(1200,500),L[3]['a']-.1,.4);add(sfx,shimmer(1.0),L[3]['a'],.3)
# transições de cena
for i in range(1,36):add(sfx,whoosh(.4),st(i)-.15,.18)
# relógio
add(sfx,pop(600,600,.05),st(6)+(L[7]['a']-L[6]['a'])*.5,.5);add(sfx,boom(1.0),st(6)+(L[7]['a']-L[6]['a'])*.5,.35)
# celulares
for at in (st(7)+.05,st(7)+.5,st(7)+.95):add(sfx,buzz(),at,.6)
msg(st(7)+.3)
add(sfx,typing(.5),st(8),.25);msg(st(8)+.5)
add(sfx,buzz(),st(10),.6);add(sfx,typing(.35),st(10),.2);msg(st(10)+.35)
# gato + copo
J=MK['cai'];add(sfx,meow(),J-1.75,.5);add(sfx,whoosh(.5),J-1.6,.3);add(sfx,knock()*.5,J-.5,.4);add(sfx,clink(),J+.05,.55);add(sfx,splash(),J+.1,.4);add(sfx,boom(.8),J+.05,.4)
add(sfx,buzz(),st(14),.6);add(sfx,typing(1.0),st(14)+.1,.22)
msg(st(15)+.05);msg(st(16)+.05);add(sfx,boom(1.2),st(16)+.1,.5)
add(sfx,pop(300,80,.15),st(17)+.15,.5)
# dia
add(sfx,typing(1.4),st(20)+.2,.18)
# toc toc
for k in ('toc1','toc2','toc3'):add(sfx,knock(),MK[k],1.0)
add(sfx,boom(1.0),MK['naoabre'],.4)
add(sfx,knock(),st(26)+.5,1.0);add(sfx,knock(),st(26)+.8,1.0)
for at in (st(27)+.2,st(27)+.65,st(27)+1.1):add(sfx,buzz(),at,.7)
add(sfx,buzz(),st(28),.6);add(sfx,ding(990,.6),st(28)+.1,.3)
msg(st(29)+.3);add(sfx,boom(1.2),MK['futuro2'],.7);add(sfx,shimmer(1.0),MK['futuro2'],.25)
add(sfx,pop(),st(31)+.1,.35);add(sfx,pop(1000,500),st(31)+.7,.35)
add(sfx,pop(1100,500),st(33)+.1,.45);add(sfx,pop(1100,500),st(34)+.1,.45)
add(sfx,riser(1.0),MK.get('fim',97.7)-1.0,.25);add(sfx,boom(1.4),MK.get('fim',97.7),.8);add(sfx,shimmer(1.4),MK.get('fim',97.7),.3)
# ---------- mix ----------
# ===== barulhos de suspense =====
def stinger(at,g):  # cordas dissonantes agudas + sub
    tt=t_(1.6);x=sum(saw(mtof(n),1.6) for n in (84,85,90))/3;x=hpf(x,1500)*np.exp(-tt*2.2)*np.minimum(1,tt/.02);add(sfx,x,at,g*.5);add(sfx,boom(1.4),at,g*.8)
def creak(at,g):
    tt=t_(.9);f=180+60*np.sin(2*np.pi*1.3*tt)+30*rng.standard_normal(len(tt)).cumsum()/SR*40;x=np.sign(np.sin(2*np.pi*np.cumsum(f)/SR))*.4*np.exp(-((tt-.45)/.3)**2);add(sfx,lpf(x,1800),at,g)
def rumble(at,d,g):
    x=lpf(rng.standard_normal(int(d*SR)),90);x/=np.abs(x).max()+1e-9;e=np.minimum(1,t_(d)/1.5)*np.minimum(1,(d-t_(d))/1.5);add(sfx,x*e,at,g)
def reverse_swell(at,d,g):
    tt=t_(d);x=hpf(rng.standard_normal(len(tt)),300)*(tt/d)**3;add(sfx,lpf(x,5000),at-d,g)
# ambiente: ronco grave da cidade/quarto durante a noite e na porta
rumble(st(4),st(19)-st(4),.25);rumble(st(21),st(33)-st(21),.3)
# stingers nos momentos de virada
for i_ in (7,9,12,13,16,17,29):reverse_swell(st(i_)+.1,.9,.25);stinger(st(i_)+.1,.55)
stinger(MK['cai']+.05,.6);stinger(MK['naoabre'],.6);stinger(MK['futuro2'],.7)
stinger(st(28)+.15,.6)   # fora do horário
creak(st(22)+.4,.35);creak(st(24)+.6,.3);creak(st(26)+.3,.35)   # rangidos no corredor/porta
reverse_swell(st(32)+.05,1.2,.3)
# ===== MÚSICA ACOMPANHA O IMPACTO =====
# antes do impacto a trilha "puxa o ar" (some), no impacto entra um hit musical forte e a trilha volta crescendo
mg=np.ones(N);hitwin=np.zeros(N)
def impacto(at,g,notes=(26,33,38),hi=(62,63,69)):
    a=int(at*SR);pre=int(.45*SR);post=int(2.6*SR)
    if a-pre>0:mg[a-pre:a]=np.minimum(mg[a-pre:a],np.linspace(1,.2,pre))
    e=min(N,a+post);mg[a:e]=np.maximum(mg[a:e]*0+1,1+(.7*g)*np.exp(-np.arange(e-a)/SR*1.4))
    hitwin[a:min(N,a+int(1.4*SR))]=1
    braam(at,2.4,.95*g,notes);taiko(at,.9*g);kick(at,.8*g);strings(at,1.6,.35*g,hi)
    add(sfx,reverse_swell_x(.5),at-.5,.3*g)
def reverse_swell_x(d):
    tt=t_(d);return lpf(hpf(rng.standard_normal(len(tt)),300)*(tt/d)**3,5000)
FORTES=[FLASH,st(7)+.1,MK['cai']+.05,st(16)+.1,MK['toc1'],MK['naoabre'],MK['futuro2'],st(28)+.15,st(32),MK['fim']]
MEDIOS=[st(1),st(9)+.1,st(12)+.1,st(13)+.1,st(17)+.1,st(29)+.1]
for at in FORTES:impacto(at,1.0,(21,28,33,40))
for at in MEDIOS:impacto(at,.6)
venv=np.convolve(np.abs(voice),np.ones(int(.08*SR))/int(.08*SR),'same');duck=1-.55*np.clip(venv/(venv.max()*.25),0,1)
ig=np.ones(N);ig[:int(st(1)*SR)]=1.7;ig[int(st(1)*SR):int((st(1)+.6)*SR)]=np.linspace(1.7,1,int(.6*SR))
duck=np.maximum(duck,.8*hitwin);mix=voice*1.0+mus*.5*duck*ig*mg+sfx*.6
mix[-int(.8*SR):]*=np.linspace(1,0,int(.8*SR))
mix/=np.abs(mix).max()*1.05
w=wave.open('/tmp/s3/mix3_raw.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes((mix*32767).astype(np.int16).tobytes());w.close()
print('dur',T)
