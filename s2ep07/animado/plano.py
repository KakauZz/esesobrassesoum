# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Imagine acordar no corpo da sua própria mãe.', 'Somando todas as redes, venceu a B.', 'Ontem, como Bia, ele fez uma live na padaria.', 'E contou pra todo mundo: o Zé não mentiu.', 'Só que, na live, perguntaram do salário.', 'E ele teve que dizer: é verdade.', 'Mas, por causa de vocês, a fila da padaria voltou!', 'Meia-noite. O relógio parou de novo.', 'Domingo, oito da manhã. Cheiro de café.', 'No espelho: óculos na cabeça, avental florido!', 'Hoje ele é a dona Célia. A mãe do Matheus!', 'E repara no relógio. Meia-noite. O oitavo!', 'Na geladeira, uma foto: Matheus e Lucas, crianças.', 'Melhores amigos desde os sete anos.', 'Na janela, o gato laranja. Só ele reconhece o Matheus.', 'Aí o celular toca. É o número do Matheus.', 'Filho, sou eu! Tô no seu corpo!', 'Tem almoço hoje! Não deixa a lasanha queimar!', 'Ele corre pro forno. A lasanha tá salva!', 'Mas o grupo da família não para de apitar.', 'Todo mundo viu a live da Fofoca da Rua.', 'Tio Juca: então o Matheus paga o churrasco!', 'E aí chega uma mensagem do Lucas.', 'Dona Célia, cortaram minha promoção por causa do Matheus?', 'É a pergunta que o Matheus nunca respondeu.', 'E você? Contaria a verdade pro seu amigo?', 'Ele olha de novo a foto dos dois.', 'Ele pode responder: não foi ele, querido.', 'O Lucas fica tranquilo. A amizade, em paz.', 'Mas a mentira muda de lugar: agora é a mãe que mente.', 'Ou ele conta: foi sim. Ele mesmo vai te explicar.', 'O Lucas vai saber de tudo. E pode ficar bravo.', 'A verdade dói uma vez. A mentira pesa todo dia.', 'A: dizer que não foi ele. B: contar a verdade.', 'Comenta A ou B! A mais votada vira o episódio oito.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[[(3200, 3203.5, 1, '')], [(3204, 3209.5, 1, '')], [(3210, 3213.5, 1, 'ONTEM · 07:55')], [(3214, 3217.5, 1, 'ONTEM · 07:56')], [(3222, 3225.5, 1, 'ONTEM · 07:58')], [(3226, 3229.5, 1, 'ONTEM · 07:59')], [(3218, 3221.5, 1, 'ONTEM · 10:00')], [(2028, 2031.5, 1, 'MEIA-NOITE · 00:00')], [(3230, 3233.5, 1, 'DOMINGO · 08:00')], [(3234, 3237.5, 1, 'DOMINGO · 08:01')], [(3238, 3241.5, 1, 'DOMINGO · 08:02')], [(3242, 3245.5, 1, 'DOMINGO · 08:03')], [(3246, 3249.5, 1, 'DOMINGO · 08:04')], [(3250, 3253.5, 1, 'DOMINGO · 08:04')], [(3254, 3257.5, 1, 'DOMINGO · 08:05')], [(3258, 3261.5, 1, 'DOMINGO · 08:06')], [(3262, 3265.5, 1, 'DOMINGO · 08:06')], [(3266, 3269.5, 1, 'DOMINGO · 08:07')], [(3270, 3273.5, 1, 'DOMINGO · 08:08')], [(3274, 3277.5, 1, 'DOMINGO · 08:10')], [(3278, 3281.5, 1, 'DOMINGO · 08:11')], [(3282, 3285.5, 1, 'DOMINGO · 08:11')], [(3286, 3289.5, 1, 'DOMINGO · 08:12')], [(3290, 3293.5, 1, 'DOMINGO · 08:12')], [(2468, 2471.5, 1, 'QUARTA · 07:08')], [(3294, 3297.5, 1, 'DOMINGO · 08:13')], [(3298, 3301.5, 1, 'DOMINGO · 08:13')], [(3302, 3305.5, 1, 'DOMINGO · 08:14')], [(3306, 3309.5, 1, 'DOMINGO · 08:14')], [(3310, 3313.5, 1, 'DOMINGO · 08:14')], [(3314, 3317.5, 1, 'DOMINGO · 08:15')], [(3318, 3321.5, 1, 'DOMINGO · 08:15')], [(3322, 3325.5, 1, 'DOMINGO · 08:15')], [(3326, 3329.5, 1, 'DOMINGO · 08:16')], [(3329.5, 3333, 1, 'DOMINGO · 08:16', 'cont')]]
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
        cand=[g for g in gaps if abs(g[1]-e)<0.9 and g[1]-0.05>last+0.3]
        if cand:
            g=min(cand,key=lambda g:abs(g[1]-e)); s=g[1]-0.05; en=g[0]
        else:
            s=max(e,last+0.3); en=s-0.05
        ends.append(round(en,3)); starts.append(round(s,3)); last=s
    ends.append(round(dur,3))
# ajuste manual (checado pelo ritmo de letras/s): início da fala 24
for _i,_v in {25:70.49}.items(): starts[_i]=_v; ends[_i-1]=round(_v-0.05,3)
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
shots.append({"a":3390,"b":3393.2,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
