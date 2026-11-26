import numpy as np,wave,subprocess
from scipy.signal import lfilter,fftconvolve
SR=44100;rng=np.random.default_rng(11)
def t_(d):return np.arange(int(d*SR))/SR
def lpf(x,fc):a=np.exp(-2*np.pi*fc/SR);return lfilter([1-a],[1,-a],lfilter([1-a],[1,-a],x))
def hpf(x,fc):return x-lpf(x,fc)
def bp(x,lo,hi):return hpf(lpf(x,hi),lo)
def noise(d):return rng.standard_normal(int(d*SR))
def pad(x,d):y=np.zeros(int(d*SR));n=min(len(x),len(y));y[:n]=x[:n];return y
def mix(d,*parts):
    y=np.zeros(int(d*SR))
    for x,at,g in parts:
        i=int(at*SR);n=min(len(x),len(y)-i)
        if n>0:y[i:i+n]+=x[:n]*g
    return y
def room(x,size=.5,wet=.25):
    ir=noise(size)*np.exp(-t_(size)*(7/size));ir=lpf(ir,4000);ir/=np.sqrt((ir**2).sum())*6
    return x+fftconvolve(x,ir)[:len(x)]*wet
def save(name,x,stereo_w=.0):
    x=np.concatenate([x,np.zeros(int(.15*SR))]);x/=np.abs(x).max()*1.12
    L=x;R=np.roll(x,int(stereo_w*SR)) if stereo_w else x
    st=np.stack([L,R],1);fn=f'/tmp/s3/sfx2/{name}'
    w=wave.open(fn+'.wav','wb');w.setnchannels(2);w.setsampwidth(2);w.setframerate(SR);w.writeframes((st*32767).astype(np.int16).tobytes());w.close()
    subprocess.run(['ffmpeg','-y','-loglevel','error','-i',fn+'.wav','-b:a','256k',fn+'.mp3'],check=True)

def knock1(h=1.):
    tt=t_(.25);body=np.sin(2*np.pi*np.cumsum(120*np.exp(-tt*12)+70)/SR)*np.exp(-tt*30)
    wood=bp(noise(.25),300,2500)*np.exp(-tt*45)*.8;ring=np.sin(2*np.pi*230*tt)*np.exp(-tt*22)*.3
    return (body+wood+ring)*h
# 1 toc toc (3 batidas)
save('01_toc_toc_toc',room(mix(1.6,(knock1(),0,1),(knock1(.9),.3,1),(knock1(1.1),.6,1)),.6,.35))
# 2 batida forte/insistente
save('02_batida_forte',room(mix(2.2,*[(knock1()*1.3*np.tanh(1),k*.22,1) for k in range(6)],(lpf(noise(.3),200)*np.exp(-t_(.3)*10),0,.6)),.7,.4))
# 3 campainha (ding-dong)
def tone(f,d,dec=2.5):tt=t_(d);return sum(np.sin(2*np.pi*f*h*tt)*np.exp(-tt*dec*h**.5)/h for h in(1,2.76,5.4))*np.minimum(1,tt/.004)
save('03_campainha',room(mix(2.8,(tone(659,1.6),0,1),(tone(523,2.2),.55,1)),.8,.3))
# 4 porta rangendo abrindo
def creak(d):
    tt=t_(d);f=95+40*np.sin(2*np.pi*.7*tt)+25*np.cumsum(rng.standard_normal(len(tt)))/SR*8
    pulses=np.sign(np.sin(2*np.pi*np.cumsum(f)/SR));x=bp(pulses,250,3000)*(.5+.5*np.sin(np.pi*tt/d)**.6)
    return x*np.minimum(1,tt/.05)*np.minimum(1,(d-tt)/.15)
save('04_porta_rangendo',room(creak(2.2),.9,.35))
# 5 fechadura / chave girando + trinco
tt=t_(.05);click=lambda f:bp(noise(.05),f,f*3)*np.exp(-tt*120)
key=mix(1.4,(bp(noise(.35),2000,7000)*np.linspace(.2,1,int(.35*SR))*.3,0,1),(click(1500),.35,1),(click(2200),.42,.8),(click(900),.8,1.2),(knock1(.3),.82,1))
save('05_fechadura_trinco',room(key,.4,.2))
# 6 olho mágico (tampinha deslizando)
sl=bp(noise(.25),1500,6000)*np.sin(np.pi*t_(.25)/.25)**2*.5
save('06_olho_magico',room(mix(.7,(sl,0,1),(click(3000),.25,1)),.3,.2))
# 7 passos no corredor (aproximando)
def step(g):tt=t_(.18);return (lpf(noise(.18),900)*np.exp(-tt*35)+np.sin(2*np.pi*80*tt)*np.exp(-tt*40)*.6)*g
save('07_passos_corredor',room(mix(4.2,*[(step(.25+.75*k/8),k*.48,1) for k in range(9)]),1.0,.45))
# 8 celular vibrando
tt=t_(.4);buzz=lpf(np.sign(np.sin(2*np.pi*160*tt)),700)*np.minimum(1,tt/.01)*np.minimum(1,(.4-tt)/.02)*(1+.3*np.sin(2*np.pi*14*tt))
save('08_celular_vibrando',mix(1.9,(buzz,0,1),(buzz,.6,1),(buzz,1.2,1)))
# 9 notificação de mensagem
def bell(f,d=.5):tt=t_(d);return (np.sin(2*np.pi*f*tt)+.4*np.sin(2*np.pi*f*2*tt))*np.exp(-tt*9)
save('09_notificacao',room(mix(.9,(bell(1318),0,1),(bell(1760),.11,1)),.4,.2))
# 10 mensagem do futuro (notificação glitch)
g=mix(1.6,(bell(1318),0,1),(bell(1760),.11,1),(bell(880)*np.sign(np.sin(2*np.pi*30*t_(.5))),.25,.7))
gl=np.zeros_like(g)
for k in range(14):
    i=int(rng.uniform(.2,1.2)*SR);n=int(rng.uniform(.02,.08)*SR);gl[i:i+n]+=bp(rng.standard_normal(n),rng.uniform(500,3000),8000)*.5
x=g+gl;x+=np.sin(2*np.pi*np.cumsum(np.linspace(2000,200,len(x)))/SR)*np.exp(-t_(len(x)/SR)*3)*.3
save('10_mensagem_do_futuro',room(x,.9,.4),stereo_w=.012)
# 11 batida de coração (acelerando)
def beat(g):tt=t_(.3);return np.sin(2*np.pi*48*tt)*np.exp(-tt*18)*g
bt=[];t=0;p=.9
while t<5.5:bt+=[(beat(1),t,1),(beat(.7),t+.2,1)];t+=p;p=max(.42,p*.93)
save('11_coracao_acelerando',mix(6,*bt))
# 12 impacto (hit cinematográfico)
tt=t_(3);f=30+80*np.exp(-tt*5);hit=np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-tt*1.5)+lpf(noise(3),500)*np.exp(-tt*5)*.6+bp(noise(3),3000,9000)*np.exp(-tt*12)*.3
save('12_impacto',room(np.tanh(1.5*hit),1.6,.5),stereo_w=.01)
# 13 whoosh (transição)
d=.7;w=bp(noise(d),400,3500)*np.sin(np.pi*t_(d)/d)**2;save('13_whoosh',w,stereo_w=.008)
# 14 riser (subida de tensão, 4s)
d=4;tt=t_(d);r=hpf(noise(d),900)*.5+np.sin(2*np.pi*np.cumsum(np.linspace(100,1600,len(tt)))/SR)*.4+np.sin(2*np.pi*np.cumsum(np.linspace(103,1650,len(tt)))/SR)*.3
save('14_riser_tensao',room(r*(tt/d)**2.3,1,.3),stereo_w=.01)
# 15 stinger de susto (cordas dissonantes + grave)
from math import pi
saw=lambda f,d:2*((t_(d)*f)%1)-1
st=sum(saw(440*2**((n-69)/12),2.2) for n in (84,85,90))/3;st=hpf(st,1200)*np.exp(-t_(2.2)*2)*np.minimum(1,t_(2.2)/.015)
save('15_stinger_susto',room(st*.7+np.tanh(hit[:len(st)])*.8,1.3,.4),stereo_w=.01)
# 16 reverse (puxada antes do impacto)
d=1.2;rv=lpf(hpf(noise(d),300),6000)*(t_(d)/d)**3;save('16_reverse_puxada',room(rv,.6,.3)[:len(rv)],stereo_w=.006)
# 17 caixa (entregador colocando no chão)
tt=t_(.6);box=lpf(noise(.6),700)*np.exp(-tt*14)+np.sin(2*np.pi*95*tt)*np.exp(-tt*20)*.8+bp(noise(.6),1500,5000)*np.exp(-tt*30)*.3
save('17_caixa_no_chao',room(box,.5,.3))
# 18 glitch de tela
x=np.zeros(int(1.2*SR))
for k in range(22):
    i=int(rng.uniform(0,1.1)*SR);n=int(rng.uniform(.01,.06)*SR);f=rng.uniform(200,4000)
    x[i:i+n]+=np.sign(np.sin(2*np.pi*f*np.arange(n)/SR))*rng.uniform(.3,1)
save('18_glitch_tela',bp(x,150,9000),stereo_w=.005)
# 19 relógio tique-taque (8s)
tk=[]
for k in range(16):tk.append((bp(noise(.03),(3000 if k%2 else 2200),9000)*np.exp(-t_(.03)*200),k*.5,1))
save('19_relogio_tique_taque',room(mix(8.2,*tk),.4,.2))
# 20 silêncio tenso (ambiente grave de prédio, 8s)
d=8;tt=t_(d);amb=lpf(noise(d),120)*3+lpf(noise(d),900)*.08+np.sin(2*np.pi*55*tt)*.15
amb*=np.minimum(1,tt/1.5)*np.minimum(1,(d-tt)/1.5)
save('20_ambiente_tenso',amb)
print('ok')
