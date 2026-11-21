# Trilha LEVE E DIVERTIDA (série 2: comédia, não suspense). Lê saida/plano.json. Saída: saida/musica.wav
# 112 BPM, Dó maior: pizzicato saltitante + baixo + palmas/shaker suaves. Fica baixinha (a voz manda).
import numpy as np, json, os
from scipy.signal import butter, sosfilt
from scipy.io import wavfile
HERE=os.path.dirname(os.path.abspath(__file__)); PL=json.load(open(os.path.join(HERE,"saida","plano.json")))
SR=44100; T=PL["total"]; N=int(SR*T); L=np.zeros(N); R=np.zeros(N); rng=np.random.default_rng(7)
hz=lambda m:440*2**((m-69)/12); BPM=112; b=60/BPM
def add(sig,st,g,pan=0.0):
    i=int(st*SR); n=min(len(sig),N-i)
    if n<=0 or i<0: return
    L[i:i+n]+=sig[:n]*g*(1-pan); R[i:i+n]+=sig[:n]*g*(1+pan)
def pluck(m,d=.35):
    n=int(d*SR); tt=np.arange(n)/SR; f=hz(m)
    return (np.sin(2*np.pi*f*tt)+.35*np.sin(4*np.pi*f*tt)+.12*np.sin(6*np.pi*f*tt))*np.exp(-tt*9)
def bass(m,d):
    n=int(d*SR); tt=np.arange(n)/SR; f=hz(m)
    return (np.sin(2*np.pi*f*tt)+.2*np.sin(4*np.pi*f*tt))*np.exp(-tt*3)*np.clip(tt/.01,0,1)
def noise(d,lo,hi,dec):
    n=int(d*SR); tt=np.arange(n)/SR; x=sosfilt(butter(2,[lo,hi],'band',fs=SR,output='sos'),rng.standard_normal(n))
    return x*np.exp(-tt*dec)
# C  G  Am  F (acordes: raízes e arpejos)
PROG=[(48,[60,64,67,72]),(43,[59,62,67,71]),(45,[60,64,69,72]),(41,[60,65,69,72])]
FALAS=[f["start"] for f in PL["falas"]]; END=FALAS[-1]+4
beat=0; t0=0.0
while t0<T:
    bar=int(beat//4); root,ch=PROG[bar%len(PROG)]; pos=beat%4
    if pos==0: add(bass(root,b*1.9),t0,.30)
    if pos==2: add(bass(root+7,b*1.9),t0,.22)
    # pizzicato em colcheias, padrão saltitante
    for k,ofs in enumerate((0,.5)):
        nt=ch[(int(beat*2)+k)%4]
        add(pluck(nt),t0+ofs*b,.10,pan=(-.3 if k==0 else .3))
    # palma nos tempos 2 e 4, shaker nas colcheias
    if pos in (1,3): add(noise(.12,900,3500,30),t0,.05)
    add(noise(.05,5000,10000,80),t0+.5*b,.025,pan=.4)
    # assobio/glock alegre a cada 4 compassos
    if pos==0 and bar%4==3:
        for j,m in enumerate((84,88,91)): add(pluck(m,.5),t0+j*b*.5,.05)
    beat+=1; t0+=b
mix=np.stack([L,R],1)
fade=np.ones(N); fi=int(.4*SR); fo=int(2.5*SR); fade[:fi]=np.linspace(0,1,fi); fade[-fo:]=np.linspace(1,0,fo)
mix*=fade[:,None]; mix=mix/np.abs(mix).max()*.55
wavfile.write(os.path.join(HERE,"saida","musica.wav"),SR,(mix*32767).astype(np.int16))
print("musica ok",round(T,1),"s")
