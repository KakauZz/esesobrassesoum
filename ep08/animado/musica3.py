# Trilha de SUSPENSE (lê saida/plano.json). Saída: saida/musica.wav
import numpy as np, json, os
from scipy.signal import fftconvolve, butter, sosfilt
from scipy.io import wavfile
HERE=os.path.dirname(os.path.abspath(__file__)); PL=json.load(open(os.path.join(HERE,"saida","plano.json")))
SR=44100; T=PL["total"]; N=int(SR*T); t=np.arange(N)/SR; L=np.zeros(N); R=np.zeros(N)
F=[f["start"] for f in PL["falas"]]; HOOK_END=F[1]; CALM_END=F[5]; SAD_END=F[len(F)-6]; BUILD_END=F[len(F)-2]
hz=lambda m:440*2**((m-69)/12); rng=np.random.default_rng(2)
def add(sig,st,g,pan=0.0):
    i=int(st*SR); n=min(len(sig),N-i)
    if n<=0 or i<0: return
    L[i:i+n]+=sig[:n]*g*(1-pan); R[i:i+n]+=sig[:n]*g*(1+pan)
def env(a,b,fa=1.0,fb=1.0): return np.clip((t-a)/fa,0,1)*np.clip((b-t)/fb,0,1)
lp=lambda x,f: sosfilt(butter(2,f,'lp',fs=SR,output='sos'),x)
# drone grave dissonante o tempo todo (Lá + Si bemol), mais forte no gancho e na carta
dr=sum(np.sin(2*np.pi*f*t+np.sin(2*np.pi*.1*t)*2) for f in (hz(33),hz(34)*1.001,hz(45)))
drv=.18+.10*env(0,HOOK_END,.3,1.5)+.12*env(SAD_END,BUILD_END,2,.5)
L+=dr*drv*.5; R+=dr*drv*.5
# corda aguda arrepiante (vibrato)
st_=np.sin(2*np.pi*hz(76)*t+3*np.sin(2*np.pi*5.5*t))*(.025*env(0,HOOK_END,1,1)+.035*env(SAD_END,BUILD_END,2,.3))
L+=st_; R+=st_*.8
# vento nas cenas vazias
wind=lp(rng.standard_normal(N),500)*(.5+.5*np.sin(2*np.pi*.15*t))*.6
L+=wind*env(HOOK_END,SAD_END,1,1); R+=np.roll(wind,500)*env(HOOK_END,SAD_END,1,1)
def heart(g):
    tt=np.arange(int(.35*SR))/SR; b=np.sin(2*np.pi*(45+40*np.exp(-tt*25))*tt)*np.exp(-tt*12); return b*g
def tick():
    tt=np.arange(int(.03*SR))/SR; return sosfilt(butter(2,3000,'hp',fs=SR,output='sos'),rng.standard_normal(len(tt)))*np.exp(-tt*200)
# gancho: coração + relógio
x=0.0
while x<HOOK_END:
    add(heart(1),x,.55); add(heart(.7),x+.28,.4); x+=0.95
x=0.0
while x<HOOK_END: add(tick(),x,.10,pan=.5*np.sin(x)); x+=0.5
# rua/mercado/noite: piano solitário em menor
def piano(f,d=3): 
    tt=np.arange(int(d*SR))/SR; return sum(a*np.sin(2*np.pi*f*k*tt)*np.exp(-tt*(1.4+k)) for k,a in((1,1),(2,.4),(3,.15)))*np.minimum(1,tt/.005)
notas=[69,72,76,74,72,69,68,64]; x=HOOK_END+.3;j=0
while x<SAD_END: add(piano(hz(notas[j%8])),x,.10,pan=.3*np.sin(j)); x+=1.3 if x<CALM_END else 1.8; j+=1
# carta: coração acelerando + riser
x=SAD_END; gap=1.0
while x<BUILD_END: add(heart(1),x,.6); add(heart(.7),x+.24,.45); gap=max(.45,gap*.93); x+=gap
tt=np.arange(int(3.5*SR))/SR; add(sosfilt(butter(2,[200,6000],'band',fs=SR,output='sos'),rng.standard_normal(len(tt)))*(tt/3.5)**2.5,BUILD_END-3.5,.18)
sh=np.sin(2*np.pi*(hz(45)*(1+tt/3.5))*tt)*(tt/3.5)**2; add(sh,BUILD_END-3.5,.12)
# BRAAM (impacto de trailer)
def braam(d=4):
    tt=np.arange(int(d*SR))/SR; s=sum(np.sin(2*np.pi*hz(33)*k*tt+rng.random()*6)/k for k in range(1,18))
    s=s+sum(np.sin(2*np.pi*hz(45)*k*1.002*tt)/k for k in range(1,12))*.6
    return lp(s,900)*np.minimum(1,tt/.02)*np.exp(-tt*.7)
def hit():
    tt=np.arange(int(1.6*SR))/SR; return np.sin(2*np.pi*(38+80*np.exp(-tt*14))*tt)*np.exp(-tt*2.4)+.3*rng.standard_normal(len(tt))*np.exp(-tt*22)
add(braam(5),BUILD_END,.5); add(hit(),BUILD_END,.6)
x=BUILD_END+1.2
while x<T-.5: add(tick(),x,.08); x+=.5
# efeitos por tomada
def whoosh(d=.5):
    tt=np.arange(int(d*SR))/SR; s=sosfilt(butter(2,[300,3000],'band',fs=SR,output='sos'),rng.standard_normal(len(tt))); return s*np.sin(np.pi*tt/d)**2
for s in PL["shots"][1:]:
    if not s.get("cont"): add(whoosh(),s["start"]-.28,.13)
for s in PL["shots"]:
    a=s["a"]; s0=s["start"]; d=s["dur"]
    if 100<=a<104 or a<3.5:
        tt=np.arange(int(d*SR))/SR; buzz=np.sign(np.sin(2*np.pi*150*tt))*(np.sin(2*np.pi*2.2*tt)>0)*.5; add(lp(buzz,600),s0,.08)
    if 110<=a<117: tt=np.arange(int(.18*SR))/SR; add(rng.standard_normal(len(tt))*np.exp(-tt*10),s0,.10)
    if a==120: add(braam(3),s0+d*.9,.4); add(hit(),s0+d*.9,.5)
    if a==130: add(hit(),s0+d*(1.15/4.4),.5)
    if a==41: add(hit(),s0+d*(2.05/5.9),.4)
    if a==250: add(hit(),s0+d*(2.98/3.8),.75); add(braam(2.5),s0+d*(2.98/3.8),.4)
    if a==220: add(hit(),s0+d*(1.0/4),.35)
    if a==640: add(braam(3),s0,.45); add(hit(),s0,.55)
    if a==560: add(hit(),s0,.6); add(braam(3),s0,.4)
    if a==575: [add(hit(),s0+k*d/ (583-575)*1.6,.35) for k in range(5)]
    if a==600: add(braam(2.5),s0,.35)
    if a==603: add(hit(),s0+d*.3,.6)
    if a==610: add(hit(),s0,.8); add(braam(3),s0,.5)
    if a==620: add(hit(),s0+d*(1.2/7),.5)
ir=np.arange(int(3*SR))/SR; irL=rng.standard_normal(len(ir))*np.exp(-ir*2); irR=rng.standard_normal(len(ir))*np.exp(-ir*2); irL[:300]=0; irR[:300]=0
wL=fftconvolve(L,irL)[:N]; wR=fftconvolve(R,irR)[:N]; k=np.abs(L).max()/max(np.abs(wL).max(),1e-9)
oL=L+wL*k*.35; oR=R+wR*k*.35; fade=np.clip((T-t)/1.5,0,1)*np.clip(t/.15,0,1)
st=np.stack([oL*fade,oR*fade],1); st=st/np.abs(st).max()*.85
wavfile.write(os.path.join(HERE,"saida","musica.wav"),SR,(st*32767).astype(np.int16)); print("ok")
