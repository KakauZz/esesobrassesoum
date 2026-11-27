import json,subprocess,numpy as np,wave
SR=48000
v=np.frombuffer(subprocess.run(['ffmpeg','-v','error','-i','saida/voz_full.wav','-ac','1','-ar',str(SR),'-f','f32le','-'],capture_output=True).stdout,np.float32).astype(float)
L=json.load(open('animado/lines_raw.json'));T=-12.0
out=[];t=0.25;N=[]
pad=.06
for k,l in enumerate(L):
    a=max(0,l['a']-pad);b=min(len(v)/SR,l['b']+pad);x=v[int(a*SR):int(b*SR)].copy()
    g=np.clip(T-l['db'],-6,6);x*=10**(g/20)
    f=int(.01*SR);x[:f]*=np.linspace(0,1,f);x[-f:]*=np.linspace(1,0,f)
    if k>0:
        gap=L[k]['a']-L[k-1]['b'];gap=min(max(gap,.30),.40);t+=gap
    out.append((t,x));N.append({'a':round(t+pad,3),'b':round(t+len(x)/SR-pad,3),'txt':l['txt']});t+=len(x)/SR-2*pad
tot=int((t+.3)*SR);y=np.zeros(tot)
for s,x in out:i=int(s*SR);y[i:i+len(x)]+=x
pk=np.max(np.abs(y));y*=min(1,.95/pk)
w=wave.open('saida/voz_nivelada.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes((y*32767).astype(np.int16).tobytes());w.close()
json.dump(N,open('animado/lines.json','w'),ensure_ascii=False)
for k,l in enumerate(N):
    x=y[int(l['a']*SR):int(l['b']*SR)];print(k,l['a'],l['b'],round(20*np.log10(np.sqrt(np.mean(x**2))+1e-9),1))
print('dur',tot/SR)
