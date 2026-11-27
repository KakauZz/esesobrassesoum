import json,subprocess,numpy as np
SR=48000
v=np.frombuffer(subprocess.run(['ffmpeg','-v','error','-i','saida/voz_full.wav','-ac','1','-ar',str(SR),'-f','f32le','-'],capture_output=True).stdout,np.float32).astype(float)
ts=[[a/1.05,b/1.05] for a,b in json.load(open('saida/ts_raw.json'))]
exec(open('plano.py').read())
hop=int(.01*SR);env=20*np.log10(np.sqrt(np.convolve(v**2,np.ones(hop)/hop,'same'))[::hop]+1e-9)
q=env<-36
# silences >= 0.18s
S=[];i=0
while i<len(q):
    if q[i]:
        j=i
        while j<len(q) and q[j]:j+=1
        if (j-i)>=18:S.append((i/100,j/100))
        i=j
    else:i+=1
# para cada fronteira ts, pega o silêncio mais próximo
B=[]
for k in range(1,len(ts)):
    x=ts[k][0];best=min(S,key=lambda s:0 if s[0]<=x<=s[1] else min(abs(s[0]-x),abs(s[1]-x)))
    d=0 if best[0]<=x<=best[1] else min(abs(best[0]-x),abs(best[1]-x));B.append((best,d))
L=[];start=S[0][1] if S and S[0][0]<=0.05 else 0
for k in range(len(ts)):
    end=B[k][0][0] if k<len(B) else (S[-1][0] if S[-1][1]>=len(q)/100-.05 else len(q)/100)
    x=v[int(start*SR):int(end*SR)];db=20*np.log10(np.sqrt(np.mean(x**2))+1e-9)
    L.append({'a':round(start,2),'b':round(end,2),'txt':FALAS[k],'db':round(db,1)})
    if k<len(B):start=B[k][0][1]
for k,l in enumerate(L):print(k,l['a'],l['b'],round(l['b']-l['a'],2),round(len(l['txt'])/(l['b']-l['a']),1),'d=%.2f'%(B[k][1] if k<len(B) else 0),l['db'],l['txt'][:34])
json.dump(L,open('animado/lines_raw.json','w'),ensure_ascii=False)
