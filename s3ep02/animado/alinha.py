import json,subprocess,numpy as np
SR=48000
v=np.frombuffer(subprocess.run(['ffmpeg','-v','error','-i','saida/voz_full.wav','-ac','1','-ar',str(SR),'-f','f32le','-'],capture_output=True).stdout,np.float32).astype(float)
ts=[[a/1.05,b/1.05] for a,b in json.load(open('saida/ts_raw.json'))]
exec(open('plano.py').read())
hop=int(.01*SR);env=np.sqrt(np.convolve(v**2,np.ones(hop)/hop,'same'))[::hop]
thr=10**(-38/20)
L=[]
for i,(a,b) in enumerate(ts):
    ia,ib=int(a*100),min(len(env),int(b*100)+1);seg=env[ia:ib];idx=np.where(seg>thr)[0]
    s=(ia+idx[0])/100 if len(idx) else a; e=(ia+idx[-1])/100 if len(idx) else b
    x=v[int(s*SR):int(e*SR)];db=20*np.log10(np.sqrt(np.mean(x**2))+1e-9)
    L.append({'a':round(s,2),'b':round(e,2),'txt':FALAS[i],'db':round(db,1)})
med=np.median([l['db'] for l in L])
for i,l in enumerate(L):
    g=L[i+1]['a']-l['b'] if i<len(L)-1 else 0
    print(i,l['a'],l['b'],round(l['b']-l['a'],2),'gap',round(g,2),l['db'],'BAIXA' if l['db']<med-4 else '',l['txt'][:40])
print('mediana',med)
json.dump(L,open('animado/lines_raw.json','w'),ensure_ascii=False)
