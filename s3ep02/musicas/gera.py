import numpy as np,wave,subprocess
SR=44100;rng=np.random.default_rng(7)
def t_(d):return np.arange(int(d*SR))/SR
def mtof(m):return 440*2**((m-69)/12)
def lpf(x,fc):
    a=np.exp(-2*np.pi*fc/SR);y=np.empty_like(x);s=0.
    # filtro 1 polo vetorizado via scipy se houver
    from scipy.signal import lfilter
    return lfilter([1-a],[1,-a],lfilter([1-a],[1,-a],x))
def hpf(x,fc):return x-lpf(x,fc)
def saw(f,d):tt=t_(d);return 2*((tt*f)%1)-1
def sq(f,d):tt=t_(d);return np.sign(np.sin(2*np.pi*f*tt))
class Trk:
    def __init__(s,d):s.N=int(d*SR);s.L=np.zeros(s.N);s.R=np.zeros(s.N);s.d=d
    def add(s,x,at,g=1.,pan=0.):
        i=int(at*SR)
        if i<0:x=x[-i:];i=0
        n=min(len(x),s.N-i)
        if n<=0:return
        s.L[i:i+n]+=x[:n]*g*(1-max(0,pan));s.R[i:i+n]+=x[:n]*g*(1+min(0,pan))
    # instrumentos
    def kick(s,at,g=1.):tt=t_(.5);f=45+110*np.exp(-tt*30);s.add(np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-tt*7),at,g)
    def snare(s,at,g=.5):tt=t_(.3);s.add(hpf(rng.standard_normal(len(tt)),1200)*np.exp(-tt*16)+np.sin(2*np.pi*190*tt)*np.exp(-tt*25)*.5,at,g)
    def hat(s,at,g=.15,pan=.3):tt=t_(.06);s.add(hpf(rng.standard_normal(len(tt)),7000)*np.exp(-tt*70),at,g,pan)
    def taiko(s,at,g=1.):tt=t_(.9);f=55+80*np.exp(-tt*16);s.add(np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-tt*4.5)+lpf(rng.standard_normal(len(tt)),600)*np.exp(-tt*16)*.7,at,g)
    def braam(s,at,d,g,notes=(26,33,38)):
        tt=t_(d);x=sum(saw(mtof(n)*(1+.003*k),d) for k,n in enumerate(notes))/len(notes);x=np.tanh(2.5*x);x=lpf(x,800)*np.minimum(1,tt/.03)*np.exp(-tt*1.0);s.add(x,at,g,-.15);s.add(x,at+.012,g*.9,.15)
    def strings(s,at,d,g,notes,trem=True,swell=True):
        tt=t_(d);x=sum(saw(mtof(n)*(1+.002*np.sin(tt*5+k)),d) for k,n in enumerate(notes))/len(notes)
        x=lpf(x,2400);
        if trem:x*= .6+.4*(np.sin(2*np.pi*11*tt)>0)
        e=np.linspace(.1,1,len(tt))**1.6 if swell else np.minimum(1,tt/.4)
        e*=np.minimum(1,(d-tt)/.3);s.add(x*e,at,g,-.3);s.add(x*e,at+.015,g,.3)
    def pad(s,at,d,g,notes,fc=1200):
        tt=t_(d);x=sum(saw(mtof(n)*(1+.004*np.sin(tt*.7+k)),d)+saw(mtof(n)*1.006,d) for k,n in enumerate(notes))/(2*len(notes))
        x=lpf(x,fc)*np.minimum(1,tt/1.5)*np.minimum(1,(d-tt)/1.5);s.add(x,at,g,-.4);s.add(x,at+.02,g,.4)
    def pluck(s,m,at,g=.3,d=.4,pan=0):tt=t_(d);x=(saw(mtof(m),d)*.6+sq(mtof(m)*2,d)*.2);s.add(lpf(x,3000)*np.exp(-tt*9),at,g,pan)
    def piano(s,m,at,g=.35,d=2.5):tt=t_(d);f=mtof(m);x=sum(np.sin(2*np.pi*f*h*tt)*np.exp(-tt*(1.5+h))/h for h in (1,2,3,4));s.add(x*np.minimum(1,tt/.005),at,g)
    def bass(s,m,at,d,g=.5):tt=t_(d);x=np.tanh(1.8*saw(mtof(m),d));s.add(lpf(x,300)*np.minimum(1,tt/.01)*np.exp(-tt*2.5),at,g)
    def drone(s,at,d,g,notes,fc=400):
        tt=t_(d);x=sum(saw(mtof(n),d) for n in notes)/len(notes);x=lpf(x,fc)*(1+.3*np.sin(tt*.9));e=np.minimum(1,tt/3)*np.minimum(1,(d-tt)/3);s.add(x*e,at,g,-.2);s.add(x*e,at+.03,g,.2)
    def heart(s,at,g=.6):
        for o,gg in((0,1),(.22,.7)):tt=t_(.25);s.add(np.sin(2*np.pi*50*tt)*np.exp(-tt*18),at+o,g*gg)
    def tick(s,at,g=.15,pan=.2):tt=t_(.03);s.add(hpf(rng.standard_normal(len(tt)),4500)*np.exp(-tt*220),at,g,pan)
    def riser(s,at,d,g=.4):n=int(d*SR);tt=t_(d);x=hpf(rng.standard_normal(n),900)*.6+np.sin(2*np.pi*np.cumsum(np.linspace(120,1400,n))/SR)*.4;s.add(x*(tt/d)**2.4,at,g)
    def revsw(s,at,d,g=.4):tt=t_(d);x=lpf(hpf(rng.standard_normal(len(tt)),300),5000)*(tt/d)**3;s.add(x,at-d,g)
    def boom(s,at,g=1.):tt=t_(2);f=32+70*np.exp(-tt*5);s.add(np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-tt*1.8)+lpf(rng.standard_normal(len(tt)),300)*np.exp(-tt*4)*.6,at,g)
    def knock(s,at,g=.8):tt=t_(.2);s.add(np.sin(2*np.pi*np.cumsum(140*np.exp(-tt*10)+60)/SR)*np.exp(-tt*26)+lpf(rng.standard_normal(len(tt)),1200)*np.exp(-tt*40)*.6,at,g)
    def save(s,name):
        # reverb simples
        ir=rng.standard_normal(int(1.8*SR))*np.exp(-t_(1.8)*3.2);ir=lpf(ir,5000);ir/=np.abs(ir).sum()**.5*8
        from scipy.signal import fftconvolve
        L=s.L+fftconvolve(s.L,ir)[:s.N]*.35;R=s.R+fftconvolve(s.R,ir[::-1].copy()*0+np.roll(ir,300))[:s.N]*.35
        fo=int(1.2*SR);L[-fo:]*=np.linspace(1,0,fo);R[-fo:]*=np.linspace(1,0,fo)
        m=max(np.abs(L).max(),np.abs(R).max())*1.05;st=np.stack([L/m,R/m],1)
        w=wave.open(f'/tmp/s3/mus2/{name}_raw.wav','wb');w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes((st*32767).astype(np.int16).tobytes());w.close()
        subprocess.run(['ffmpeg','-y','-loglevel','error','-i',f'/tmp/s3/mus2/{name}_raw.wav','-af','loudnorm=I=-14:TP=-1','-ar','44100','-b:a','256k',f'/tmp/s3/mus2/{name}.mp3'],check=True)

# ===== FAIXA 1: "QUEM BATE?" — abertura/gancho (trailer) 62s, 100bpm, Ré menor =====
b=60/100;T=Trk(62)
T.braam(0,3,1.0,(26,33,38,41));T.taiko(0,1);T.boom(0,.8)
for k in range(int(8/ (b/2))):T.tick(.2+k*b/2,.12+.1*k/16)
T.strings(.5,7.5,.35,(62,65,69));T.riser(4,4,.35)
for k,tk in enumerate([3,4.5,5.5,6.2,6.8,7.2,7.5,7.7]):T.taiko(tk,.5+k*.06)
T.revsw(8,.8,.5);T.braam(8,3,1,(21,28,33,40));T.taiko(8,1);T.kick(8,1)
prog=[(38,(62,65,69)),(34,(58,62,65)),(41,(60,65,69)),(36,(60,64,67))]  # Dm Bb F C
t=8.0;bar=0
while t<52:
    root,ch=prog[bar%4]
    T.bass(root,t,b*4,.45)
    for q in range(16):
        tt=t+q*b/4;T.pluck(ch[q%3]+(12 if q%8>5 else 0),tt,.16,pan=(-.4 if q%2 else .4))
    for q in range(4):
        T.kick(t+q*b,.85);T.hat(t+q*b+b/2,.18)
        if q in(1,3):T.snare(t+q*b,.4)
    if bar%2==1:T.taiko(t+b*3.5,.5)
    T.strings(t,b*4,.18,ch,trem=True,swell=False)
    if bar in(3,7):T.revsw(t+b*4,.8,.4);T.braam(t+b*4,2,.7,(root-12,root-5,root))
    t+=b*4;bar+=1
T.riser(t-4,4,.4);T.revsw(t,.9,.5);T.braam(t,5,1,(26,33,38,41));T.taiko(t,1);T.boom(t,.9);T.strings(t,6,.3,(74,75,81),swell=False)
T.save('faixa1_quem_bate')

# ===== FAIXA 2: "OLHO MÁGICO" — suspense tenso 72s, 76bpm =====
b=60/76;T=Trk(72)
T.drone(0,72,.5,(26,33),350)
for k in range(int(70/b)):
    tk=k*b
    if k%2==0:T.heart(tk,.5+.25*min(1,tk/60))
    if tk>8:T.tick(tk+b/2,.08)
mot=[74,75,74,70, 74,75,77,75]   # Ré-Mib dissonante
for r in range(8):
    for i,m in enumerate(mot):T.piano(m-(12 if r%2 else 0),4+r*8*b+i*b,.22+.02*r)
for st,d,ch in((10,14,(62,63,69)),(26,14,(65,66,72)),(42,16,(67,68,74))):T.strings(st,d,.28,ch);T.revsw(st+d,.9,.35)
for st in(24,40,58):T.braam(st,3,.8,(26,27,33));T.boom(st,.6)
for k in(31,31.3,31.6, 49,49.3,49.6):T.knock(k,.55)  # toc toc no ritmo da música
t=50
while t<66:T.bass(26,t,b,.4);T.kick(t,.6);t+=b
T.riser(62,4,.45);T.strings(58,8,.35,(74,75,80,81))
T.revsw(66,1,.5);T.braam(66,5,1,(21,22,28));T.taiko(66,1);T.boom(66,1)
T.save('faixa2_olho_magico')

# ===== FAIXA 3: "A VERDADE" — revelação/virada épica 64s, 128bpm =====
b=60/128;T=Trk(64)
T.pad(0,8,.35,(50,57,62,65),900)
for k in range(16):T.piano([62,65,69,74][k%4]+(0 if k<8 else 12),k*b*2,.22,1.6)
T.riser(4,4,.4);T.revsw(8,.8,.5);T.braam(8,3,1,(26,33,38));T.taiko(8,1)
prog=[(38,(62,65,69,74)),(34,(58,62,65,70)),(29,(57,60,65,69)),(33,(57,61,64,69))]  # Dm Bb F A
t=8;bar=0
while t<56:
    root,ch=prog[bar%4];full=bar>=4
    T.bass(root,t,b*4,.5);T.bass(root,t+b*2,b*2,.35)
    for q in range(16):T.pluck(ch[(q*3)%4]+12,t+q*b/4,.14,.25,pan=(-.5 if q%2 else .5))
    for q in range(4):
        T.kick(t+q*b,.9 if full else .7)
        if full:T.hat(t+q*b+b/2,.2);T.hat(t+q*b+b/4,.08,-.3)
        if q in(1,3):T.snare(t+q*b,.5 if full else .3)
    T.strings(t,b*4,.25 if full else .15,ch,trem=full,swell=not full)
    if bar%4==3:T.taiko(t+b*3,.7);T.taiko(t+b*3.5,.8)
    if bar in(3,7,11):T.revsw(t+b*4,.6,.4);T.braam(t+b*4,2,.8,(root-12,root-5,root))
    t+=b*4;bar+=1
# final suspenso: corta tudo + nota sustentada (cliffhanger)
T.revsw(t,1.2,.6);T.boom(t,1);T.braam(t,6,1,(26,33,38,40));T.strings(t,7,.3,(74,76,81),swell=False);T.piano(88,t+1.5,.3,4)
T.save('faixa3_a_verdade')
print('ok')
