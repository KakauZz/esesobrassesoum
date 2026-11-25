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
t=0.;k=0
while t<P1:
    ch=chords1[(k//4)%4]
    if k%4==0:pad(ch,t,beat*4+.3,.22)
    for s in range(4):pluck(ch[(s+k)%4]+12,t+s*beat/2,.10)
    if t>=L[2]['a']:
        if t<FLASH-.05 or t>FLASH+beat*2:kick(t,.55)
        hat(t+beat/2)
        if k%2==1:snare(t,.25)
    t+=beat;k+=1
# parte 2 (noite, mistério leve, tique-taque)
chords2=[[45,52,57,60],[41,48,53,57],[43,50,55,59],[40,47,52,56]];t=P1;k=0
while t<P2:
    ch=chords2[(k//4)%4]
    if k%4==0:pad(ch,t,beat*4+.3,.18,1400)
    tic(t)
    if k%2==0:pluck(ch[3]+24,t+beat*.5,.05,.6)
    if st(13)<=t<st(14):heart(t,.35)
    t+=beat;k+=1
# parte 3 (dia, leve)
chords3=[[48,52,55,60],[53,57,60,65]];t=P2;k=0
while t<P3:
    ch=chords3[(k//4)%2]
    if k%4==0:pad(ch,t,beat*4+.3,.16,2200)
    pluck(ch[k%4]+12,t,.08);pluck(ch[(k+2)%4]+12,t+beat/2,.06)
    t+=beat;k+=1
# parte 4 (tensão na porta): drone grave + batimento
t=P3;k=0
dr=saw(mtof(33),P4-P3)*.6+saw(mtof(40),P4-P3)*.4;dr=lpf(dr,300)*env(len(dr),1.5,1.0);add(mus,dr,P3,.35)
while t<P4:
    if k%2==0:heart(t,.45)
    if k%4==0:pad([45,48,52],t,beat*4+.3,.12,900)
    tic(t,.1);t+=beat;k+=1
# parte 5 (escolha, pegada)
chords5=[[45,52,57,64],[41,48,57,65],[48,55,64,67],[43,50,59,67]];t=P4;k=0
while t<P5-.8:
    ch=chords5[(k//4)%4]
    if k%4==0:pad(ch,t,beat*4+.3,.24)
    kick(t,.6);hat(t+beat/2,.18)
    if k%2==1:snare(t,.3)
    for s in range(2):pluck(ch[(s+k)%4]+12,t+s*beat/2,.09)
    t+=beat;k+=1
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
venv=np.convolve(np.abs(voice),np.ones(int(.08*SR))/int(.08*SR),'same');duck=1-.55*np.clip(venv/(venv.max()*.25),0,1)
mix=voice*1.0+mus*.5*duck+sfx*.6
mix[-int(.8*SR):]*=np.linspace(1,0,int(.8*SR))
mix/=np.abs(mix).max()*1.05
w=wave.open('/tmp/s3/mix3_raw.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes((mix*32767).astype(np.int16).tobytes());w.close()
print('dur',T)
