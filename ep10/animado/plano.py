# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Daqui a um minuto, uma porta vai se abrir...', 'e um segredo de sessenta dias vai ser revelado.', 'Dia sessenta. Hoje, tudo termina.', 'Pra quem chegou agora: dia um.', 'Matheus acorda... e todo mundo sumiu.', 'Até sobrar só ele em São Paulo.', 'Uma carta. Uma menina. E um fotógrafo.', 'No episódio nove, somando todas as redes...', 'Venceu a A: ouvir o fotógrafo!', 'Matheus respira fundo... e fica.', 'A menina segura a mão dele, bem forte.', 'O fotógrafo abre o diário na mesa.', 'Ele só diz, calmo: lê a última página.', 'Matheus pega o diário, com as mãos tremendo.', 'Dia sessenta. Volta pro quarto. Os três juntos.', 'Mas hoje ainda é dia quarenta e oito.', 'Faltam doze dias.', 'E pela primeira vez... ele não espera sozinho.', 'Os três ficam juntos. Dia após dia.', 'Até que chega a manhã do dia sessenta.', 'Os três descem juntos até o prédio dele.', 'O quarto onde tudo começou.', 'Lá dentro, o fotógrafo fecha a porta.', 'Calma. Eu vou te contar tudo.', 'Ele tira o chapéu. Pela primeira vez.', 'E o rosto... é o rosto do Matheus. Mais velho.', 'O fotógrafo é ele. No futuro.', 'E você? Desconfiava?', 'Matheus olha pra menina. O tênis vermelho...', 'O mesmo tênis que ele usava quando criança.', 'Ele se abaixa... e tira o capuz amarelo.', 'O cabelo. Os olhos. O mesmo jeito de sorrir.', 'Não era uma menina. Era um menino!', 'Era ele. Com sete anos de idade.', 'A criança... é ele. No passado.', 'Por isso tinha tanto medo: era o medo dele, pequeno.', 'Os três são o mesmo Matheus.', 'De três pontos diferentes do multiverso.', 'Por isso o desenho: eu, você e o moço da câmera.', 'E a carta da praça?', 'A letra é a mesma do diário.', 'Quem escreveu foi o Matheus do futuro.', 'Você não está sozinho. Nunca esteve.', 'Mas por que o dia sessenta?', 'Sessenta dias atrás, às sete e doze...', 'o relógio parou. E o mundo se dividiu.', 'Hoje, às sete e treze, ele anda de novo.', 'E a passagem se abre. Só por um minuto.', 'O calendário vira: sessenta!', 'Uma luz enorme sai do armário.', 'Mas a passagem só deixa passar um de cada vez.', 'O pequeno vai primeiro. Pro passado dele.', 'Mas ele trava. Ele tem medo de voltar.', 'Faltam trinta segundos!', 'Matheus se ajoelha na frente dele.', 'Ei... eu sou você, lembra? Eu cresci.', 'E deu tudo certo. Pode ir.', 'Ele acena: até logo, eu grande!', 'Depois, o fotógrafo. Pro futuro.', 'Ele sorri: a gente se vê lá na frente.', 'Faltam cinco segundos!', 'Agora é a vez do Matheus.', 'Ele respira fundo... e atravessa.', 'Silêncio. E então... buzinas!', 'Ele está em casa. Dia sessenta e um.', 'Na mesa, uma foto nova.', 'Os três juntos. De mãos dadas.', 'E do lado da foto... a câmera do fotógrafo.', 'Com um bilhete.', 'Agora é a sua vez de cuidar de quem você foi.', 'Matheus entende: um dia, o fotógrafo vai ser ele.', 'Não eram estranhos. Eram ele mesmo.', 'A criança que ele foi. E o homem que ele vai ser.', 'Os dois voltaram pra dizer uma coisa:', 'Enquanto você lembrar de quem já foi...', 'e acreditar em quem ainda vai ser...', 'você nunca vai estar sozinho.', 'E você? O que o seu eu criança diria de você hoje?', 'Fim. Segunda começa uma história nova!', 'Segue pra não perder. E comenta aí embaixo!']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[[(1600, 1603.5, 1, '')], [(1604, 1607.5, 1, '')], [(1300, 1302.5, 1, '')], [(0, 4, 1, 'DIA 1 · 07:12')], [(110, 112, 0.5, 'DIA 1 · 07:20'), (112, 114, 0.5, 'DIA 1 · 07:20', 'cont')], [(120, 123, 0.5, 'DIA 1 · 07:30'), (123, 125, 0.5, 'DIA 1 · 07:30', 'cont')], [(1303, 1306.5, 1, '')], [(1307, 1310, 1, '')], [(1310, 1312.5, 1, '', 'cont')], [(1313, 1316.5, 1, 'DIA 48 · 22:23')], [(1317, 1320.5, 1, 'DIA 48 · 22:23')], [(1321, 1324.5, 1, 'DIA 48 · 22:24')], [(1325, 1328.5, 1, 'DIA 48 · 22:24')], [(1329, 1332.5, 1, 'DIA 48 · 22:25')], [(1333, 1336.5, 1, 'DIA 48 · 22:25')], [(1520, 1523.5, 1, 'DIA 48 · 22:26')], [(1524, 1527.5, 1, 'DIA 48 · 22:26')], [(1528, 1531.5, 1, 'DIA 49 · 20:10')], [(1532, 1535.5, 1, '')], [(1341, 1344.5, 1, 'DIA 60 · 07:05')], [(1345, 1348.5, 1, 'DIA 60 · 07:07')], [(1349, 1352.5, 1, 'DIA 60 · 07:09')], [(1353, 1356.5, 1, 'DIA 60 · 07:09')], [(1357, 1360.5, 1, 'DIA 60 · 07:10')], [(1361, 1364.5, 1, 'DIA 60 · 07:10')], [(1365, 1368.5, 1, 'DIA 60 · 07:10')], [(1369, 1372.5, 1, 'DIA 60 · 07:10')], [(1373, 1376.5, 1, '')], [(1377, 1380.5, 1, 'DIA 60 · 07:10')], [(1381, 1384.5, 1, 'DIA 60 · 07:10')], [(1536, 1539.5, 1, 'DIA 60 · 07:10')], [(1540, 1543.5, 1, 'DIA 60 · 07:11')], [(1544, 1547.5, 1, 'DIA 60 · 07:11')], [(1548, 1551.5, 1, 'DIA 60 · 07:11')], [(1385, 1388.5, 1, 'DIA 60 · 07:11')], [(1552, 1555.5, 1, 'DIA 60 · 07:11')], [(1389, 1392.5, 1, 'DIA 60 · 07:11')], [(1393, 1396.5, 1, '')], [(1397, 1400.5, 1, 'DIA 60 · 07:11')], [(41, 44.5, 1, 'DIA 48 · 18:40')], [(1409, 1412.5, 1, 'DIA 60 · 07:12')], [(1413, 1416.5, 1, 'DIA 60 · 07:12')], [(1417, 1420.5, 1, 'DIA 60 · 07:12')], [(1421, 1424.5, 1, 'DIA 60 · 07:12')], [(1425, 1428.5, 1, 'DIA 1 · 07:12')], [(1429, 1432.5, 1, '')], [(1433, 1436.5, 1, 'DIA 60 · 07:13')], [(1437, 1440.5, 1, 'DIA 60 · 07:13')], [(1441, 1444.5, 1, 'DIA 60 · 07:13')], [(1445, 1448.5, 1, 'DIA 60 · 07:13')], [(1449, 1452.5, 1, 'DIA 60 · 07:13')], [(1457, 1460.5, 1, 'DIA 60 · 07:13')], [(1608, 1611.5, 1, 'DIA 60 · 07:13')], [(1612, 1615.5, 1, 'DIA 60 · 07:13')], [(1616, 1619.5, 1, 'DIA 60 · 07:13')], [(1620, 1623.5, 1, 'DIA 60 · 07:13')], [(1624, 1627.5, 1, 'DIA 60 · 07:13')], [(1461, 1464.5, 1, 'DIA 60 · 07:13')], [(1465, 1468.5, 1, 'DIA 60 · 07:13')], [(1469, 1472.5, 1, 'DIA 60 · 07:13')], [(1628, 1631.5, 1, 'DIA 60 · 07:13')], [(1473, 1476.5, 1, 'DIA 60 · 07:13')], [(1477, 1480.5, 1, 'DIA 60 · 07:13')], [(1481, 1484.5, 1, '')], [(1489, 1492.5, 1, 'DIA 61 · 08:00')], [(1493, 1495.9, 1, 'DIA 61 · 08:01')], [(1500, 1503.5, 1, 'DIA 61 · 08:02')], [(1632, 1635.5, 1, 'DIA 61 · 08:03')], [(1636, 1639.5, 1, 'DIA 61 · 08:03')], [(1640, 1643.5, 1, 'DIA 61 · 08:04')], [(1644, 1648, 1, 'DIA 61 · 08:04')], [(1504, 1507.5, 1, 'DIA 61 · 08:03')], [(1556, 1559.5, 1, '')], [(1560, 1563.5, 1, '')], [(1564, 1567.5, 1, '')], [(1568, 1571.5, 1, '')], [(1572, 1575.5, 1, '')], [(1576, 1580, 1, '')], [(1512, 1515.5, 1, '')], [(1515.5, 1519, 1, '', 'cont')]]
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
shots.append({"a":1496,"b":1499.2,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
