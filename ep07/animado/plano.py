# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Pegadas molhadas... entrando na casa dele.', 'Pra quem chegou agora: dia um. Matheus acorda...', 'e todos os jornais dão a mesma notícia:', 'as pessoas estão sumindo. No mundo inteiro.', 'Até sobrar só ele. Sozinho em São Paulo.', 'No dia quarenta e oito, ele acha uma carta...', 'e descobre que alguém fotografa ele desde o dia um.', 'E uma criança de capa amarela se esconde dele.', 'No episódio seis, vocês escolheram B: seguir as pegadas.', 'Da praça, saem pegadas novas. Dois tênis.', 'Ele segue a trilha pela rua, na chuva.', 'Uma rua... outra rua... e ele para.', 'Ele conhece essa rua. É a rua dele!', 'As pegadas entram direto no prédio dele.', 'Ele sobe a escada. As marcas molhadas vão na frente.', 'No andar dele... a porta do apartamento tá aberta.', 'E você? Entraria na sua casa agora?', 'Ele entra devagar. Tudo escuro.', 'As pegadas atravessam a sala... até o quarto.', 'O quarto onde ele acordou no dia um.', 'E em cima do travesseiro... uma foto.', 'É ele, dormindo. No dia um.', 'A mesma foto da parede do fotógrafo!', 'Mas alguém trouxe ela até aqui.', 'No verso, em giz de cera, letra de criança:', 'VOLTA AQUI NO DIA 60.', 'E a assinatura: uma capa amarela. Foi ela!', 'Hoje é dia quarenta e oito. Faltam doze dias... pra quê?', 'Repara no relógio do quarto: sete e treze.', 'O tempo tá voltando aqui também. Tic... tac.', 'Aí, um rangido. Atrás dele.', 'A porta do armário abre um pouquinho...', 'e lá dentro, a pontinha de uma capa amarela!', 'E pela janela, lá no décimo terceiro andar... um flash!', 'Alguém fotografou o quarto. Agora.', 'E agora? Abre o armário... ou vai atrás do flash?', 'Comenta A ou B! A mais votada vira o episódio 8.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[[(1000, 1001.8, 1, '')], [(0, 4, 1, 'DIA 1 · 07:12')], [(110, 112, 0.5, 'DIA 1 · 07:20'), (112, 114, 0.5, 'DIA 1 · 07:20', 'cont')], [(114, 117, 0.45, 'DIA 1 · 07:20'), (120, 123, 0.55, 'DIA 1 · 07:20')], [(123, 125, 0.4, 'DIA 1 · 07:30'), (7, 11, 0.6, 'DIA 1 · 07:30')], [(41, 46, 1, 'DIA 48 · 17:30')], [(560, 570, 1, 'DIA 48 · 20:52')], [(941.2, 946.6, 1, 'DIA 48 · 21:25')], [(1002, 1003.6, 1, '')], [(971.8, 975, 1, 'DIA 48 · 21:34')], [(1004, 1007.2, 1, 'DIA 48 · 21:36')], [(1007.2, 1010.4, 1, 'DIA 48 · 21:41', 'cont')], [(1010.6, 1014.6, 1, 'DIA 48 · 21:41')], [(1014.8, 1018.6, 1, 'DIA 48 · 21:42')], [(1018.8, 1025, 1, 'DIA 48 · 21:43')], [(1025.2, 1030.4, 1, 'DIA 48 · 21:44')], [(1030.6, 1033.4, 1, 'DIA 48 · 21:44')], [(1033.6, 1036.6, 1, 'DIA 48 · 21:45')], [(1036.8, 1040, 1, 'DIA 48 · 21:45')], [(1040.2, 1043.4, 1, 'DIA 48 · 21:46')], [(1043.6, 1046.6, 1, 'DIA 48 · 21:46')], [(1046.8, 1050, 1, 'DIA 48 · 21:46')], [(575, 576.5, 1, 'DIA 48 · 21:46')], [(1040.2, 1043.4, 1, 'DIA 48 · 21:46')], [(1050.2, 1052.8, 1, 'DIA 48 · 21:47')], [(1052.8, 1055, 1, 'DIA 48 · 21:47', 'cont')], [(1055, 1057, 1, 'DIA 48 · 21:47', 'cont')], [(1057.2, 1063, 1, 'DIA 48 · 21:47')], [(1063.2, 1066, 1, 'DIA 48 · 21:47')], [(1066, 1069.6, 1, 'DIA 48 · 21:47', 'cont')], [(1069.8, 1073.4, 1, 'DIA 48 · 21:48')], [(1073.6, 1076.2, 1, 'DIA 48 · 21:48')], [(1076.2, 1080, 1, 'DIA 48 · 21:48', 'cont')], [(1080.2, 1083.4, 1, 'DIA 48 · 21:48')], [(1083.4, 1086, 1, 'DIA 48 · 21:48', 'cont')], [(1086.2, 1090, 1, 'DIA 48 · 21:49')], [(1090, 1093, 1, 'DIA 48 · 21:49', 'cont')]]
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
shots.append({"a":1095,"b":1098.2,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
