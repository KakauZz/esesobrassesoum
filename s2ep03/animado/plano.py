# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Imagine acordar no corpo do seu melhor amigo.', 'Somando todas as redes, venceu a A.', 'Ontem, no corpo da diretora, ele arquivou tudo.', 'E o salário de quase dez mil ficou.', 'Mas, por causa da escolha de vocês...', 'a verba do mês acabou.', 'E uma promoção foi cancelada.', 'De quem? Do Lucas. O melhor amigo dele.', 'Meia-noite. O relógio parou de novo.', 'Sete da manhã. Um quarto cheio de pôsteres.', 'Na janela, o gato laranja de novo.', 'O gato olha pra ele... e mia.', 'No espelho: o Lucas!', 'Hoje ele acordou no corpo do melhor amigo.', 'Aí o celular toca. É o número dele mesmo.', 'Matheus? Sou eu, o Lucas! Tô no seu corpo!', 'E eu vi o seu holerite. Dez mil?!', 'Silêncio na linha.', 'Foi por isso que cortaram minha promoção?', 'E agora? Ele conta a verdade?', 'Antes de responder, chega um e-mail.', 'Lucas: entrevista hoje, às dez. Empresa nova!', 'Um emprego melhor... pro Lucas.', 'Só que fica do outro lado da cidade.', 'Se o Lucas for, ele sai da empresa.', 'Sem almoço junto. Sem café das três.', 'Nove e meia. Ele chega na porta.', 'E repara: o relógio da recepção.', 'Parado na meia-noite. Igual ao do quarto!', 'A recepcionista chama: Lucas? É a sua vez!', 'E o celular vibra. É o Lucas de novo.', 'Faz o que achar certo. Eu confio em você.', 'Agora a escolha é toda dele.', 'Ele pode faltar e manter o amigo pertinho.', 'Ou entrar e dar ao Lucas o emprego novo.', 'Às vezes, gostar é deixar a pessoa ir.', 'E você? Seguraria seu amigo ou deixaria ir?', 'A: faltar e manter o amigo. B: entrar e ajudar.', 'Comenta A ou B! A mais votada vira o episódio quatro.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[[(2400, 2403.5, 1, '')], [(2404, 2409.5, 1, '')], [(2410, 2413.5, 1, 'ONTEM · 10:06')], [(2414, 2417.5, 1, 'ONTEM · 10:07')], [(2418, 2419.75, 1, 'ONTEM · 18:00')], [(2419.75, 2421.5, 1, 'ONTEM · 18:00', 'cont')], [(2422, 2425.5, 1, 'ONTEM · 18:01')], [(2426, 2429.5, 1, 'ONTEM · 18:02')], [(2028, 2031.5, 1, 'MEIA-NOITE · 00:00')], [(2432, 2435.5, 1, 'HOJE · 07:00')], [(2436, 2439.5, 1, 'HOJE · 07:01')], [(2440, 2443.5, 1, 'HOJE · 07:01')], [(2444, 2447.5, 1, 'HOJE · 07:02')], [(2448, 2451.5, 1, 'HOJE · 07:03')], [(2452, 2455.5, 1, 'HOJE · 07:06')], [(2456, 2459.5, 1, 'HOJE · 07:06')], [(2460, 2463.5, 1, 'HOJE · 07:07')], [(2464, 2467.5, 1, 'HOJE · 07:07')], [(2468, 2471.5, 1, 'HOJE · 07:08')], [(2472, 2475.5, 1, 'HOJE · 07:08')], [(2476, 2479.5, 1, 'HOJE · 07:09')], [(2480, 2483.5, 1, 'HOJE · 07:10')], [(2484, 2487.5, 1, 'HOJE · 07:10')], [(2488, 2491.5, 1, 'HOJE · 07:11')], [(2492, 2495.5, 1, 'HOJE · 07:11')], [(2496, 2499.5, 1, 'HOJE · 07:12')], [(2500, 2503.5, 1, 'HOJE · 09:30')], [(2504, 2507.5, 1, 'HOJE · 09:40')], [(2508, 2511.5, 1, 'HOJE · 09:41')], [(2512, 2515.5, 1, 'HOJE · 09:57')], [(2516, 2519.5, 1, 'HOJE · 09:58')], [(2520, 2523.5, 1, 'HOJE · 09:58')], [(2524, 2527.5, 1, 'HOJE · 09:59')], [(2528, 2531.5, 1, 'HOJE · 09:59')], [(2532, 2535.5, 1, 'HOJE · 09:59')], [(2536, 2539.5, 1, 'HOJE · 09:59')], [(2540, 2543.5, 1, 'HOJE · 09:59')], [(2544, 2547.5, 1, 'HOJE · 10:00')], [(2547.5, 2551, 1, 'HOJE · 10:00', 'cont')]]
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
shots.append({"a":2590,"b":2593.2,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
