# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Imagine acordar no corpo da avó do seu melhor amigo.', 'Somando todas as redes, venceu a B.', 'Ontem, ele remarcou a conversa com o Lucas.', 'Quero te pedir desculpa eu mesmo.', 'Mas o Lucas não gostou nada.', 'Fugiu de novo? Quarta, sete da noite. Última chance.', 'Por causa de vocês, ele vai ter que falar com a própria voz!', 'Meia-noite. O relógio parou de novo.', 'Terça, sete da manhã. Bobes no cabelo e chinelo de pelúcia!', 'No espelho: uma vovozinha de óculos vermelhos!', 'Hoje ele é a dona Cida, a avó do Lucas!', 'Foi ela que criou o Lucas desde pequeno.', 'E repara no relógio. Meia-noite. O décimo!', 'Aí o celular toca. É o número do Matheus.', 'Matheus, é a Cida! Seu corpo não sabe fazer crochê!', 'O Lucas vem almoçar! Faz o bolo de fubá!', 'Ele nunca fez um bolo na vida.', 'Farinha pra todo lado!', 'Na janela, o gato laranja. Ele sabe quem é.', 'Meio-dia. A campainha toca. É o Lucas!', 'Oi, vó! Que cheiro de bolo... queimado?', 'Na mesa, o Lucas desabafa.', 'Vó, o Matheus remarcou. Acho que eu nem vou.', 'Não é o dinheiro. É que ele não me contou.', 'Ele tá ouvindo o melhor amigo... sem o amigo saber.', 'E você? Já ouviu o que alguém sente por você?', 'Aí o celular vibra. O número desconhecido.', 'Amanhã, a última vida. A sua. Assinado, M.', 'Amanhã ele volta a ser ele mesmo?!', 'Mas agora o Lucas espera a resposta da vó.', 'Ela pode mandar o Lucas perdoar.', 'Ele obedece a vó. Mas o perdão não é de verdade.', 'Ou pedir só que ele vá, e escute o Matheus.', 'Mas aí o Lucas pode não perdoar.', 'Perdão de verdade não se manda. Se conquista.', 'A: mandar o Lucas perdoar. B: pedir que ele vá e escute.', 'Comenta A ou B! A mais votada vira o episódio final.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[[(3600, 3603.5, 1, '')], [(3604, 3609.5, 1, '')], [(3610, 3613.5, 1, 'SEGUNDA · 18:40')], [(3614, 3617.5, 1, 'SEGUNDA · 18:40')], [(3618, 3621.5, 1, 'SEGUNDA · 18:41')], [(3622, 3625.5, 1, 'SEGUNDA · 18:42')], [(3626, 3629.5, 1, 'SEGUNDA · 18:42')], [(2028, 2031.5, 1, 'MEIA-NOITE · 00:00')], [(3630, 3633.5, 1, 'TERÇA · 07:00')], [(3634, 3637.5, 1, 'TERÇA · 07:01')], [(3638, 3641.5, 1, 'TERÇA · 07:02')], [(3642, 3645.5, 1, 'TERÇA · 07:02')], [(3646, 3649.5, 1, 'TERÇA · 07:03')], [(3650, 3653.5, 1, 'TERÇA · 07:05')], [(3654, 3657.5, 1, 'TERÇA · 07:05')], [(3658, 3661.5, 1, 'TERÇA · 07:06')], [(3662, 3665.5, 1, 'TERÇA · 09:30')], [(3666, 3669.5, 1, 'TERÇA · 09:40')], [(3670, 3673.5, 1, 'TERÇA · 09:41')], [(3674, 3677.5, 1, 'TERÇA · 12:00')], [(3678, 3681.5, 1, 'TERÇA · 12:01')], [(3682, 3685.5, 1, 'TERÇA · 12:10')], [(3686, 3689.5, 1, 'TERÇA · 12:11')], [(3690, 3693.5, 1, 'TERÇA · 12:12')], [(3694, 3697.5, 1, 'TERÇA · 12:12')], [(3698, 3701.5, 1, 'TERÇA · 12:13')], [(3702, 3705.5, 1, 'TERÇA · 12:20')], [(3706, 3709.5, 1, 'TERÇA · 12:20')], [(3710, 3713.5, 1, 'TERÇA · 12:21')], [(3714, 3717.5, 1, 'TERÇA · 12:22')], [(3718, 3721.5, 1, 'TERÇA · 12:22')], [(3722, 3725.5, 1, 'TERÇA · 12:22')], [(3726, 3729.5, 1, 'TERÇA · 12:23')], [(3730, 3733.5, 1, 'TERÇA · 12:23')], [(3734, 3737.5, 1, 'TERÇA · 12:23')], [(3738, 3741.5, 1, 'TERÇA · 12:24')], [(3741.5, 3745, 1, 'TERÇA · 12:24', 'cont')]]
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
shots.append({"a":3790,"b":3793.2,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
