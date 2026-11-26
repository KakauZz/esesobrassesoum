import json,subprocess,numpy as np,wave
SR=48000
v=np.frombuffer(subprocess.run(['ffmpeg','-v','error','-i','/home/claude/esesobrassesoum/serie2/ep01/saida/voz_full.wav','-ac','1','-ar',str(SR),'-f','f32le','-'],capture_output=True).stdout,np.float32).astype(np.float64)
L=json.load(open('/tmp/s3/lines_s2.json'));MK=json.load(open('/tmp/s3/mk_s2.json'))
T=44.0;N=int(T*SR);rng=np.random.default_rng(7)
voice=np.zeros(N);voice[:len(v)]=v[:N]
# eco leve na mensagem do celular
a,b=int(35.6*SR),int(37.2*SR);sg=voice[a:b].copy()
for d,g in [(.16,.3),(.32,.15)]:i=a+int(d*SR);voice[i:i+len(sg)]+=sg[:N-i]*g
def t_(d):return np.arange(int(d*SR))/SR
def add(buf,x,at,g=1.):
    i=int(at*SR)
    if i<0:x=x[-i:];i=0
    j=min(len(buf),i+len(x));buf[i:j]+=x[:j-i]*g
def lpf(x,fc):X=np.fft.rfft(x);f=np.fft.rfftfreq(len(x),1/SR);X*=1/(1+(f/fc)**4);return np.fft.irfft(X,len(x))
def hpf(x,fc):X=np.fft.rfft(x);f=np.fft.rfftfreq(len(x),1/SR);X*=1-1/(1+(f/fc)**4);return np.fft.irfft(X,len(x))
def mtof(m):return 440*2**((m-69)/12)
def pluck(m,at,g,d=.5):
    tt=t_(d);f=mtof(m);x=(np.sin(2*np.pi*f*tt)+.5*np.sin(4*np.pi*f*tt)+.25*np.sin(6*np.pi*f*tt))*np.exp(-tt*7);add(mus,x,at,g)
def bass(m,at,g,d=.4):
    tt=t_(d);x=np.sin(2*np.pi*mtof(m)*tt)*np.exp(-tt*5);add(mus,x,at,g)
def kick(at,g):tt=t_(.35);f=50+100*np.exp(-tt*30);add(mus,np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-tt*8),at,g)
def clap(at,g):
    tt=t_(.15);x=hpf(rng.standard_normal(len(tt)),1200)*np.exp(-tt*25);add(mus,x,at,g)
def shaker(at,g):tt=t_(.06);add(mus,hpf(rng.standard_normal(len(tt)),6000)*np.exp(-tt*60),at,g)
def pad(notes,at,d,g):
    tt=t_(d);x=sum(np.sin(2*np.pi*mtof(n)*tt)+.3*np.sin(4*np.pi*mtof(n)*tt) for n in notes)/len(notes);e=np.minimum(1,tt/.3)*np.minimum(1,(d-tt)/.4);add(mus,x*e,at,g)
mus=np.zeros(N);bpm=112;beat=60/bpm
prog=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]]
q0,q1=L[3]['a']-.12,L[5]['a']-.12  # pausa de suspense (a última / todo mundo olhou)
t=0.;k=0
while t<T-1.2:
    ch=prog[(k//4)%4]
    sus=q0<=t<q1
    if sus:
        if k%4==0:pad([45,52,57],t,beat*4,.25)
        tt=t_(.03);add(mus,hpf(rng.standard_normal(len(tt)),3000)*np.exp(-tt*200),t,.15)
    else:
        if k%4==0:pad(ch,t,beat*4,.12)
        bass(ch[0]-12,t,.35)
        for s_ in range(2):pluck(ch[(k*2+s_)%3]+12,t+s_*beat/2,.12)
        if k%2==0:kick(t,.45)
        else:clap(t,.3)
        shaker(t+beat/2,.12)
    t+=beat;k+=1
sfx=np.zeros(N)
def whoosh(d=.4):x=rng.standard_normal(int(d*SR));x=lpf(x,2500)*np.sin(np.linspace(0,np.pi,len(x)))**1.5;return x/np.abs(x).max()
def pop(f0=900,f1=300,d=.09):tt=t_(d);return np.sin(2*np.pi*np.cumsum(np.linspace(f0,f1,len(tt)))/SR)*np.exp(-tt*30)
def boom(d=1.2):tt=t_(d);f=35+80*np.exp(-tt*6);return (np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-tt*2.5))
def bell(f,d=1.0):tt=t_(d);return (np.sin(2*np.pi*f*tt)+.4*np.sin(2*np.pi*f*2.7*tt))*np.exp(-tt*3)
def buzz(d=.35):tt=t_(d);return lpf(np.sign(np.sin(2*np.pi*150*tt))*.3,600)
def crunch(at):
    for k in range(4):
        tt=t_(.07);add(sfx,lpf(hpf(rng.standard_normal(len(tt)),800),5000)*np.exp(-tt*50),at+k*.18+rng.random()*.03,.35)
def shimmer(d=1.2):tt=t_(d);return sum(np.sin(2*np.pi*f*tt+i)*np.exp(-tt*2.5) for i,f in enumerate([1568,2093,2637,3136]))/4
st=lambda i:L[i]['a']-.12
for i in range(1,len(L)):add(sfx,whoosh(),st(i)-.15,.2)
for k in range(6):add(sfx,pop(900,1300,.06),st(1)+.4+k*1.2,.25)
add(sfx,boom(),MK['ultima'],.7);add(sfx,shimmer(),MK['ultima'],.2)
for k in range(4):add(sfx,pop(700,700,.05),st(4)+.05+k*.12,.3)
crunch(MK['nhac'])
add(sfx,bell(880),MK['ding'],.5);add(sfx,bell(698),MK['ding']+.45,.5)
add(sfx,shimmer(1.4),31.2,.35);[add(sfx,pop(1000,1500,.06),31.0+k*.08,.2) for k in range(8)]
for at in (st(9)+.05,st(9)+.5,st(9)+.95):add(sfx,buzz(),at,.6)
add(sfx,boom(1.0),35.65,.5)
add(sfx,pop(1100,500),st(10)+.1,.4);add(sfx,pop(1100,500),st(10)+.35,.4)
add(sfx,boom(1.3),MK['fim'],.7);add(sfx,shimmer(1.3),MK['fim'],.3)
venv=np.convolve(np.abs(voice),np.ones(int(.08*SR))/int(.08*SR),'same');duck=1-.55*np.clip(venv/(venv.max()*.25),0,1)
mix=voice+mus*.45*duck+sfx*.6;mix[-int(.8*SR):]*=np.linspace(1,0,int(.8*SR));mix/=np.abs(mix).max()*1.05
w=wave.open('/tmp/s3/mix_s2_raw.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes((mix*32767).astype(np.int16).tobytes());w.close()
