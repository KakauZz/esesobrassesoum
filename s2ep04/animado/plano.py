# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Imagine acordar no corpo do padeiro da sua rua.', 'Somando todas as redes, venceu a B.', 'Ontem, no corpo do Lucas, ele entrou.', 'E o emprego novo foi pro Lucas!', 'Por causa da escolha de vocês, o Lucas mandou:', 'Consegui! Te devo uma, amigo!', 'Agora o Lucas é um aliado.', 'Mas saiu da empresa. A mesa dele ficou vazia.', 'Meia-noite. O relógio parou de novo.', 'Cinco da manhã. Cheiro de pão.', 'Ele acorda com farinha no nariz!', 'Na vitrine: bigode e chapéu de padeiro!', 'Hoje ele é o seu Zé, o padeiro da rua dele.', 'O mesmo que vende pão pra ele todo dia.', 'Na porta, o gato laranja mia.', 'Aí o telefone toca.', 'Menino! Sou eu, o Zé! Tô no seu corpo!', 'Abre a gaveta do balcão!', 'É o caderno do fiado: compra agora, paga depois.', 'E nele, um nome conhecido.', 'Matheus: trezentos e quarenta reais!', 'Seis meses de pão de queijo!', 'E repara no relógio.', 'Parado na meia-noite. Igual aos outros!', 'Embaixo do caixa, um papel.', 'Aluguel: mil e duzentos. Vence hoje.', 'No caixa, só oitocentos e sessenta.', 'Falta exatamente... trezentos e quarenta.', 'É a dívida dele!', 'E você? Já esqueceu uma conta assim?', 'Ele pode rasgar a página. Ninguém ia saber.', 'Ou o Zé paga pelo celular do Matheus.', 'Só que aí o Zé vê o salário de quase dez mil!', 'E o Zé é o maior fofoqueiro da rua!', 'O que ninguém vê... também conta.', 'A: rasgar a página. B: pagar e a rua saber.', 'Comenta A ou B! A mais votada vira o episódio cinco.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[[(2600, 2603.5, 1, '')], [(2604, 2609.5, 1, '')], [(2610, 2613.5, 1, 'ONTEM · 09:59')], [(2614, 2617.5, 1, 'ONTEM · 10:40')], [(2618, 2621.5, 1, 'ONTEM · 18:30')], [(2622, 2625.5, 1, 'ONTEM · 18:30')], [(2626, 2629.5, 1, 'ONTEM · 18:31')], [(2630, 2633.5, 1, 'ONTEM · 18:32')], [(2028, 2031.5, 1, 'MEIA-NOITE · 00:00')], [(2634, 2637.5, 1, 'HOJE · 05:00')], [(2638, 2641.5, 1, 'HOJE · 05:01')], [(2642, 2645.5, 1, 'HOJE · 05:02')], [(2646, 2649.5, 1, 'HOJE · 05:02')], [(2650, 2653.5, 1, 'HOJE · 05:03')], [(2654, 2657.5, 1, 'HOJE · 05:04')], [(2658, 2661.5, 1, 'HOJE · 05:05')], [(2662, 2665.5, 1, 'HOJE · 05:05')], [(2666, 2669.5, 1, 'HOJE · 05:06')], [(2670, 2673.5, 1, 'HOJE · 05:07')], [(2674, 2677.5, 1, 'HOJE · 05:08')], [(2678, 2681.5, 1, 'HOJE · 05:08')], [(2682, 2685.5, 1, 'HOJE · 05:09')], [(2686, 2689.5, 1, 'HOJE · 05:10')], [(2690, 2693.5, 1, 'HOJE · 05:10')], [(2694, 2697.5, 1, 'HOJE · 05:20')], [(2698, 2701.5, 1, 'HOJE · 05:21')], [(2702, 2705.5, 1, 'HOJE · 05:23')], [(2706, 2709.5, 1, 'HOJE · 05:24')], [(2710, 2713.5, 1, 'HOJE · 05:24')], [(2714, 2717.5, 1, 'HOJE · 05:25')], [(2718, 2721.5, 1, 'HOJE · 05:26')], [(2722, 2725.5, 1, 'HOJE · 05:40')], [(2726, 2729.5, 0.5, 'HOJE · 05:41'), (2730, 2733.5, 0.5, 'HOJE · 05:41')], [(2734, 2737.5, 1, 'HOJE · 05:42')], [(2738, 2741.5, 1, 'HOJE · 05:43')], [(2742, 2745.5, 1, 'HOJE · 05:44')], [(2745.5, 2749, 1, 'HOJE · 05:44', 'cont')]]
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
shots.append({"a":2790,"b":2793.2,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
