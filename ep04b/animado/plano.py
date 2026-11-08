# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Vocês escolheram: B. Ele ficou pra descobrir quem é.', 'Ele não corre. Ele fecha a porta... e volta pra sala das fotos.', 'Se alguém montou tudo isso... deixou pistas.', 'Ele revira a mesa. O calendário. As fotos. A câmera.', 'Nada fora do lugar. Nada... a não ser um detalhe.', 'Embaixo da câmera, colada com fita... uma chave.', 'E na etiqueta, escrito à mão: treze B.', 'A chave entra direitinho na gaveta trancada da mesa.', 'Lá dentro... um caderno velho.', 'Na capa: Diário. Dia um.', 'E aquela letra... ele conhece.', 'É a mesma letra da carta que ele achou na praça.', 'Ele abre na primeira página.', 'Dia um. Ele acordou. Eu também.', 'Mas ele ainda não sabe que eu existo.', 'Cada página... é um dia dele.', 'O mercado. O estádio. As letras pintadas no asfalto.', 'Tudo desenhado... visto de longe.', 'Ele vai direto pra última página.', 'Dia quarenta e oito. Ele achou a minha sala. Agora ele precisa escolher.', 'Escolher... o quê?', 'Na contracapa, um envelope lacrado.', 'Escrito: só abra no dia sessenta.', 'De repente... a câmera apita.', 'Três... dois... um...', 'Flash!', 'Ele pega a câmera. Na tela, a foto que ela acabou de tirar.', 'Ele, no meio da sala...', 'E na janela atrás dele, no prédio da frente... uma luz acesa.', 'Alguém tava olhando.', 'Ele corre pra janela.', 'No prédio da frente, a luz pisca.', 'E no vidro embaçado aparece, letra por letra...', 'Treze... B.', 'E a luz se apaga.', 'Treze B. Igualzinho à etiqueta da chave.', 'E agora, Matheus? Vai até o apartamento treze B... ou abre o envelope agora?', 'Comenta A ou B! A mais votada vira o episódio 5.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[
       [(700, 703.8, 1, '')],
       [(704, 706, 1, 'DIA 48 · 20:59')],
       [(706, 707.8, 1, 'DIA 48 · 20:59', 'cont')],
       [(708, 711, 1, 'DIA 48 · 21:00')],
       [(711, 713.8, 1, 'DIA 48 · 21:00', 'cont')],
       [(714, 716, 1, 'DIA 48 · 21:00')],
       [(716, 717.8, 1, 'DIA 48 · 21:00', 'cont')],
       [(718, 720, 1, 'DIA 48 · 21:01')],
       [(720, 721.8, 1, 'DIA 48 · 21:01', 'cont')],
       [(722, 723.4, 1, 'DIA 48 · 21:01')],
       [(723.4, 724.6, 1, 'DIA 48 · 21:01', 'cont')],
       [(724.6, 725.8, 1, 'DIA 48 · 21:01', 'cont')],
       [(726, 727, 1, 'DIA 48 · 21:01')],
       [(727, 729, 1, 'DIA 48 · 21:01', 'cont')],
       [(729, 731.8, 1, 'DIA 48 · 21:01', 'cont')],
       [(732, 733.6, 1, 'DIA 48 · 21:02')],
       [(733.6, 736, 1, 'DIA 48 · 21:02', 'cont')],
       [(736, 737.8, 1, 'DIA 48 · 21:02', 'cont')],
       [(738, 739.2, 1, 'DIA 48 · 21:02')],
       [(739.2, 742.8, 1, 'DIA 48 · 21:02', 'cont')],
       [(743, 744, 1, 'DIA 48 · 21:03')],
       [(744, 745.5, 1, 'DIA 48 · 21:03', 'cont')],
       [(745.5, 746.8, 1, 'DIA 48 · 21:03', 'cont')],
       [(747, 748, 1, 'DIA 48 · 21:03')],
       [(748, 750.8, 1, 'DIA 48 · 21:03', 'cont')],
       [(751, 752.8, 1, 'DIA 48 · 21:04')],
       [(753, 755, 1, 'DIA 48 · 21:04')],
       [(755, 756.4, 1, 'DIA 48 · 21:04', 'cont')],
       [(756.4, 758.8, 1, 'DIA 48 · 21:04', 'cont')],
       [(759, 762.8, 1, 'DIA 48 · 21:04')],
       [(763, 765.4, 1, 'DIA 48 · 21:04')],
       [(765.4, 768.8, 1, 'DIA 48 · 21:04', 'cont')],
       [(769, 772.4, 1, 'DIA 48 · 21:05')],
       [(772.4, 773.8, 1, 'DIA 48 · 21:05', 'cont')],
       [(773.8, 774.8, 1, 'DIA 48 · 21:05', 'cont')],
       [(775, 778.8, 1, 'DIA 48 · 21:05')],
       [(779, 782.6, 1, 'DIA 48 · 21:05')],
       [(782.6, 784.8, 1, 'DIA 48 · 21:05', 'cont')]]
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
shots.append({"a":785,"b":788.2,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
