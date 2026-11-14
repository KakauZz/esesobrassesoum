# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Lá no décimo terceiro andar, alguém esperava.', 'Pra quem chegou agora: dia um.', 'Matheus acorda numa cidade vazia.', 'Nos jornais: as pessoas estão sumindo.', 'Até sobrar só ele em São Paulo.', 'Alguém fotografa ele desde o primeiro dia.', 'E no armário, ele achou uma menina.', 'No episódio oito, vocês escolheram B: subir até o fotógrafo.', 'Pela janela, o flash pisca lá longe.', 'A menina puxa a mão dele, com medo.', 'Ele diz: vem comigo. A gente vai junto.', 'E os dois saem pela rua escura.', 'Lá está o prédio. Uma janela acesa.', 'O elevador continua quebrado.', 'Então é escada. Treze andares.', 'A menina sobe atrás, pertinho dele.', 'Décimo terceiro andar. E você, entraria?', 'A porta da sala das fotos tá entreaberta.', 'Ele empurra devagar... e a luz invade.', 'As fotos dele continuam na parede.', 'Dia um, dia três, dia quarenta e oito...', 'Mas tem uma foto nova.', 'São eles dois, na janela. Agora há pouco.', 'Na mesa, a câmera... e um caderno aberto.', 'É um diário. Do moço da câmera.', 'Na primeira página, está escrito:', 'Dia um. Acordei, e todo mundo tinha sumido.', 'A letra é a mesma da carta da praça!', 'Ele também acordou sozinho. Igual ao Matheus.', 'Na última página: dia quarenta e oito.', 'Ela achou ele. Agora somos três.', 'Ele não tava caçando ninguém. Ele tava esperando.', 'E você? Confiaria nesse moço?', 'De repente, passos no corredor.', 'Na porta, um homem alto, com uma câmera.', 'Ele baixa a câmera, bem devagar.', 'Ouvir o fotógrafo... ou pegar o diário e fugir?', 'Comenta A ou B! A mais votada vira o episódio 10.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[[(1200, 1201.8, 1, '')], [(0, 4, 1, 'DIA 1 · 07:12')], [(7, 11, 1, 'DIA 1 · 07:30')], [(110, 112, 0.5, 'DIA 1 · 07:20'), (112, 114, 0.5, 'DIA 1 · 07:20', 'cont')], [(120, 123, 0.5, 'DIA 1 · 07:30'), (123, 125, 0.5, 'DIA 1 · 07:30', 'cont')], [(560, 570, 1, 'DIA 48 · 20:52')], [(1111.6, 1114, 1, 'DIA 48 · 21:51')], [(1202, 1203.6, 1, '')], [(1081.6, 1085, 1, 'DIA 48 · 21:59')], [(1270, 1272.4, 1, 'DIA 48 · 21:59')], [(1204, 1206.4, 1, 'DIA 48 · 22:00')], [(1206.6, 1210, 1, 'DIA 48 · 22:02')], [(510, 514, 1, 'DIA 48 · 22:09')], [(520, 523.5, 1, 'DIA 48 · 22:10')], [(530, 533.4, 1, 'DIA 48 · 22:11')], [(1210.2, 1213, 1, 'DIA 48 · 22:13')], [(540, 544, 1, 'DIA 48 · 22:15')], [(544, 548, 1, 'DIA 48 · 22:15', 'cont')], [(550, 554, 1, 'DIA 48 · 22:16')], [(560, 565, 1, 'DIA 48 · 22:16')], [(575, 578.2, 0.6, 'DIA 48 · 22:17'), (581.4, 583, 0.4, 'DIA 48 · 22:17')], [(1213.2, 1215.6, 1, 'DIA 48 · 22:17')], [(1215.8, 1219, 1, 'DIA 48 · 22:17')], [(1219.2, 1222, 1, 'DIA 48 · 22:18')], [(1222.2, 1225, 1, 'DIA 48 · 22:18')], [(1225.2, 1227.4, 1, 'DIA 48 · 22:18')], [(1227.4, 1232, 1, 'DIA 48 · 22:19', 'cont')], [(1232.2, 1235, 1, 'DIA 48 · 22:19')], [(1235.2, 1238, 1, 'DIA 48 · 22:19')], [(1238.2, 1241, 1, 'DIA 48 · 22:20')], [(1241, 1245, 1, 'DIA 48 · 22:20', 'cont')], [(1245.2, 1248, 1, 'DIA 48 · 22:21')], [(1248.2, 1251, 1, 'DIA 48 · 22:21')], [(1251.2, 1254, 1, 'DIA 48 · 22:22')], [(1254.2, 1257, 1, 'DIA 48 · 22:22')], [(1257.2, 1260, 1, 'DIA 48 · 22:22')], [(1260.2, 1263.6, 1, '')], [(1263.6, 1267, 1, '')]]
dur=float(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",VOZ]))
out=subprocess.run(["ffmpeg","-i",VOZ,"-af","silencedetect=noise=-32dB:d=0.16","-f","null","-"],capture_output=True,text=True).stderr
ss=[float(x) for x in re.findall(r"silence_start: ([\d.]+)",out)]; se=[float(x) for x in re.findall(r"silence_end: ([\d.]+)",out)]
gaps=[(a,b) for a,b in zip(ss,se) if a>0.3]
# alinhamento ótimo (programação dinâmica): escolhe os silêncios que deixam cada fala com a duração mais próxima do esperado
L=[len(f) for f in FALAS]; tot=sum(L); n=len(FALAS)
G=len(gaps); mids=[(a+b)/2 for a,b in gaps]; pts=[0.0]+mids+[dur]
expd=[l/tot*dur for l in L]
INF=1e18; best=[[INF]*(G+2) for _ in range(n+1)]; back=[[-1]*(G+2) for _ in range(n+1)]
best[0][0]=0
for i in range(1,n+1):
    for j in range(1,G+2):
        if i<n and j==G+1: continue
        if i==n and j!=G+1: continue
        gl=0 if j==G+1 else (gaps[j-1][1]-gaps[j-1][0])
        for k in range(0,j):
            if best[i-1][k]>=INF: continue
            d=pts[j]-pts[k]; c=best[i-1][k]+(d-expd[i-1])**2/expd[i-1]-2.0*gl
            if c<best[i][j]: best[i][j]=c; back[i][j]=k
idx=[]; j=G+1
for i in range(n,0,-1):
    k=back[i][j]; 
    if i>1: idx.append(k)
    j=k
idx=idx[::-1]; bounds=[gaps[k-1] for k in idx]
starts=[0.0]+[b-0.05 for a,b in bounds]; ends=[a for a,b in bounds]+[dur]
WTS=None
tsp=os.path.join(O,"ts_raw.json")
if os.path.exists(tsp):  # posição aproximada (transcrição) + pausas reais do áudio, alinhadas por DP
    TS=json.load(open(tsp)); SP=1.05; ex=[a0/SP for a0,b0 in TS][1:]
    # cada início vem da transcrição; só "encaixa" numa pausa real se ela estiver bem perto (<0.7s)
    starts=[0.0]; ends=[]; last=0.0
    for e in ex:
        cand=[g for g in gaps if abs(g[1]-e)<0.7 and g[1]-0.05>last+0.3]
        if cand:
            g=min(cand,key=lambda g:abs(g[1]-e)); s=g[1]-0.05; en=g[0]
        else:
            s=max(e,last+0.3); en=s-0.05
        ends.append(round(en,3)); starts.append(round(s,3)); last=s
    ends.append(round(dur,3))
rp=os.path.join(O,"roger_ts.json")
if os.path.exists(rp):  # tempos exatos por palavra (ElevenLabs /with-timestamps, voz Roger)
    R=json.load(open(rp)); starts=[];ends=[];WTS=[]
    for i,(s0,e0,ws) in enumerate(R):
        ws=list(ws); nf=len(FALAS[i].split())
        # números falados por extenso ("vinte e quatro" = "24"): junta as palavras extras
        if len(ws)==nf+2:
            k=[j for j,w in enumerate(FALAS[i].split()) if re.match(r"^\d",w)][0]; del ws[k+1:k+3]
        starts.append(s0); ends.append(e0); WTS.append(ws)
    starts[0]=0.0
mp=os.path.join(O,"el_meta.json")
if os.path.exists(mp):  # tempos exatos do ElevenLabs
    M=json.load(open(mp)); st=M["st"]; en=M["en"]; ch=M["chars"]; starts=[];ends=[];WTS=[]
    for i,(o,l) in enumerate(zip(M["offs"],M["lens"])):
        idx=[k for k in range(o,o+l) if ch[k].strip()]
        starts.append(st[idx[0]]); ends.append(en[idx[-1]])
        ws=[];k=o;txt="".join(ch[o:o+l])
        for w in txt.split():
            j=txt.index(w,k-o)+o; ws.append(st[j]); k=j+len(w)
        WTS.append(ws)
    starts[0]=0.0

# fala começa de fato após silêncio inicial
total=dur+0.5
shots=[];caps=[]
for i,f in enumerate(FALAS):
    s0=starts[i]; s1=starts[i+1] if i+1<len(FALAS) else total
    caps.append({"start":round(s0+0.05,3),"end":round(ends[i],3),"words":f.split(),"wts":(WTS[i] if WTS and len(WTS[i])==len(f.split()) else None)})
    t=s0
    for k,sp in enumerate(SHOTS[i]):
        a,b,fr,h=sp[:4]; cont=len(sp)>4
        d=(s1-s0)*fr; shots.append({"a":a,"b":b,"start":round(t,3),"dur":round(d,3),"hud":h,"glitch":(i<=1),"cont":cont}); t+=d
# cartão final de 2.8s depois da última fala
shots[-1]["dur"]=round(total-shots[-1]["start"],3)
# legendas nunca se sobrepõem: cada uma termina antes da próxima começar
for _i in range(len(caps)-1):
    caps[_i]["end"]=round(min(caps[_i]["end"],caps[_i+1]["start"]-0.04),3)
shots.append({"a":1285,"b":1288.2,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
