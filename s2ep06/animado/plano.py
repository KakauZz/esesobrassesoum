# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Imagine acordar no corpo da maior fofoqueira do prédio.', 'Somando todas as redes, venceu a A.', 'Ontem, como síndica, ele disse no grupo: era mentira do Zé!', 'A cobrança sumiu. Ninguém mais falou do salário.', 'Mas, por causa de vocês, o Zé virou o mentiroso da rua.', 'Meia-noite. O relógio parou de novo.', 'Sábado, sete da manhã. Cílios enormes! Cabelo cacheado!', 'No espelho: argolas douradas e moletom rosa!', 'Hoje ele é a Bia, do apartamento cento e quatro.', 'Foi ela quem espalhou a fofoca no grupo.', 'E repara no relógio. Meia-noite. O sétimo!', 'No celular dela, um perfil: Fofoca da Rua.', 'Vinte mil seguidores! Tudo que ela posta, viraliza.', 'Na janela, o gato laranja. Só ele reconhece o Matheus.', 'Ele desce até a padaria do seu Zé.', 'Sábado de manhã... e nenhum cliente.', 'O Zé tá sozinho. Os pães sobrando.', 'Ninguém quer comprar do mentiroso da rua.', 'Aí o telefone toca. É o número do Matheus.', 'Sou eu, a Bia! Tô no seu corpo!', 'Posta a dancinha das nove, senão eu perco seguidor!', 'Ele abre a câmera. Tudo pronto.', 'Mas chega uma mensagem de um número desconhecido.', 'Toda mentira muda de lugar. Assinado: M.', 'É o mesmo número do primeiro dia!', 'E você? Já deixou alguém levar a culpa no seu lugar?', 'Pela vitrine, ele vê o Zé. Cabisbaixo.', 'Ele pode postar só a dancinha.', 'A Bia ganha seguidores. E o salário continua segredo.', 'Mas o Zé continua sendo o mentiroso da rua.', 'Ou ele faz uma live na padaria e limpa o nome do Zé.', 'Só que todo mundo vai perguntar: o salário é verdade?', 'Uma mentira não some. Ela só muda de lugar.', 'A: postar a dancinha. B: limpar o nome do Zé.', 'Comenta A ou B! A mais votada vira o episódio sete.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[[(3000, 3003.5, 1, '')], [(3004, 3009.5, 1, '')], [(3010, 3013.5, 1, 'ONTEM · 19:10')], [(2906, 2909.5, 1, 'ONTEM · 19:12')], [(2910, 2913.5, 1, 'ONTEM · 21:00')], [(2028, 2031.5, 1, 'MEIA-NOITE · 00:00')], [(3014, 3017.5, 1, 'SÁBADO · 07:00')], [(3018, 3021.5, 1, 'SÁBADO · 07:01')], [(3022, 3025.5, 1, 'SÁBADO · 07:02')], [(3026, 3029.5, 1, 'SÁBADO · 07:03')], [(3030, 3033.5, 1, 'SÁBADO · 07:04')], [(3034, 3037.5, 1, 'SÁBADO · 07:05')], [(3038, 3041.5, 1, 'SÁBADO · 07:06')], [(3042, 3045.5, 1, 'SÁBADO · 07:08')], [(3046, 3049.5, 1, 'SÁBADO · 07:30')], [(3050, 3053.5, 1, 'SÁBADO · 07:38')], [(3054, 3057.5, 1, 'SÁBADO · 07:39')], [(3058, 3061.5, 1, 'SÁBADO · 07:40')], [(3062, 3065.5, 1, 'SÁBADO · 07:42')], [(3066, 3069.5, 1, 'SÁBADO · 07:42')], [(3070, 3073.5, 1, 'SÁBADO · 07:43')], [(3074, 3077.5, 1, 'SÁBADO · 07:45')], [(3078, 3081.5, 1, 'SÁBADO · 07:46')], [(3082, 3085.5, 1, 'SÁBADO · 07:46')], [(3086, 3089.5, 1, 'SÁBADO · 07:47')], [(3090, 3093.5, 1, 'SÁBADO · 07:47')], [(3094, 3097.5, 1, 'SÁBADO · 07:48')], [(3098, 3101.5, 1, 'SÁBADO · 07:48')], [(3102, 3105.5, 1, 'SÁBADO · 07:49')], [(3106, 3109.5, 1, 'SÁBADO · 07:49')], [(3110, 3113.5, 1, 'SÁBADO · 07:50')], [(3114, 3117.5, 1, 'SÁBADO · 07:50')], [(3118, 3121.5, 1, 'SÁBADO · 07:51')], [(3122, 3125.5, 1, 'SÁBADO · 07:51')], [(3125.5, 3129, 1, 'SÁBADO · 07:51', 'cont')]]
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
for _i,_v in {}.items(): starts[_i]=_v; ends[_i-1]=round(_v-0.05,3)
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
shots.append({"a":3190,"b":3193.2,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
