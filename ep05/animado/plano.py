# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Alguém deixou esse desenho pro Matheus... e ele tá nele.', 'Vocês escolheram A: ele entrou no vagão aceso.', 'E as portas se fecharam atrás dele.', 'Ele empurra com força. Trancadas.', 'Aí vem um tranco. O trem anda. Sozinho.', 'Sem ninguém na cabine.', 'A lanterna do túnel passa... e fica pra trás.', 'O celular vibra de novo no banco.', 'Não precisa ter medo. Vem pro último vagão.', 'E você? Teria coragem de ir?', 'Ele foi. Vagão por vagão.', 'Um vagão vazio atrás do outro.', 'O último tá escuro. Só as luzinhas do chão.', 'E no chão... um tênis. De criança.', 'Dentro dele, um papel dobrado.', 'É um desenho. Três pessoas de mãos dadas.', 'Na frente de uma porta.', 'E embaixo, escrito:', 'Eu, você... e o moço da câmera.', 'O moço que tirou as fotos dele?', 'No verso: dia sessenta.', 'Hoje é o dia quarenta e oito.', 'Faltam doze dias... pra quê?', 'Aí o trem freia com tudo.', 'E todas as luzes se apagam.', 'No escuro, o alto-falante chia...', 'Matheus... não confia no que você vê.', 'É a mesma voz do rádio.', 'Como ela sabe o nome dele?', 'As luzes voltam. O trem parou.', 'Ele lê a placa... Estação Sé.', 'O trem deu uma volta inteira...', 'e voltou pro mesmo lugar.', 'As portas se abrem.', 'E lá no fundo... a criança! Subindo a escada.', 'No chão, a lanterna do túnel. Acesa.', 'Apontando pra saída de emergência.', 'Repara na porta... o mesmo desenho.', 'E agora? Segue a criança... ou abre a saída de emergência?', 'Comenta A ou B! A mais votada vira o episódio 6.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[
       [(800, 801.8, 1, '')],
       [(802, 803.6, 1, '')],
       [(804, 806.6, 1, 'DIA 48 · 21:03')],
       [(806.6, 809.6, 1, 'DIA 48 · 21:03', 'cont')],
       [(810, 813, 1, 'DIA 48 · 21:04')],
       [(813.2, 816.2, 1, 'DIA 48 · 21:04')],
       [(816.4, 819.4, 1, 'DIA 48 · 21:04')],
       [(819.6, 821.6, 1, 'DIA 48 · 21:05')],
       [(821.6, 823.6, 1, 'DIA 48 · 21:05', 'cont')],
       [(823.6, 825, 1, 'DIA 48 · 21:05', 'cont')],
       [(825.2, 828.2, 1, 'DIA 48 · 21:06')],
       [(828.2, 831, 1, 'DIA 48 · 21:06', 'cont')],
       [(831.2, 834, 1, 'DIA 48 · 21:06')],
       [(834.2, 839.8, 1, 'DIA 48 · 21:07')],
       [(840, 842, 1, 'DIA 48 · 21:07')],
       [(842, 846, 1, 'DIA 48 · 21:07', 'cont')],
       [(846, 847, 1, 'DIA 48 · 21:07', 'cont')],
       [(847, 848.6, 1, 'DIA 48 · 21:07', 'cont')],
       [(848.6, 850, 1, 'DIA 48 · 21:07', 'cont')],
       [(850.2, 853, 1, 'DIA 48 · 21:08')],
       [(853.2, 856, 1, 'DIA 48 · 21:08')],
       [(856, 857.6, 1, 'DIA 48 · 21:08', 'cont')],
       [(857.6, 858.8, 1, 'DIA 48 · 21:08', 'cont')],
       [(859, 861.8, 1, 'DIA 48 · 21:09')],
       [(861.8, 864.6, 1, 'DIA 48 · 21:09', 'cont')],
       [(864.8, 867.2, 1, 'DIA 48 · 21:09')],
       [(867.2, 870.4, 1, 'DIA 48 · 21:09', 'cont')],
       [(870.6, 872, 1, 'DIA 48 · 21:09')],
       [(872, 873.4, 1, 'DIA 48 · 21:09', 'cont')],
       [(873.6, 875.6, 1, 'DIA 48 · 21:10')],
       [(875.6, 879.2, 1, 'DIA 48 · 21:10', 'cont')],
       [(879.4, 881.2, 1, 'DIA 48 · 21:10')],
       [(881.2, 882.6, 1, 'DIA 48 · 21:10', 'cont')],
       [(882.8, 884.6, 1, 'DIA 48 · 21:10')],
       [(884.6, 888.4, 1, 'DIA 48 · 21:10', 'cont')],
       [(888.6, 890, 1, 'DIA 48 · 21:10')],
       [(890, 891.8, 1, 'DIA 48 · 21:10', 'cont')],
       [(891.8, 893.2, 1, 'DIA 48 · 21:10', 'cont')],
       [(893.4, 895, 1, 'DIA 48 · 21:10')],
       [(895, 896.4, 1, 'DIA 48 · 21:10', 'cont')]]
dur=float(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",VOZ]))
out=subprocess.run(["ffmpeg","-i",VOZ,"-af","silencedetect=noise=-38dB:d=0.16","-f","null","-"],capture_output=True,text=True).stderr
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
shots.append({"a":896.6,"b":899.8,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
