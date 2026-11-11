# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Lá no alto da escada... uma criança olha pra trás.', 'Pra quem chegou agora: dia um. Matheus acorda...', 'e todos os jornais dão a mesma notícia:', 'as pessoas estão sumindo. No mundo inteiro.', 'Até sobrar só ele. Sozinho em São Paulo.', 'No dia quarenta e oito, ele acha uma carta...', 'e descobre que alguém fotografa ele desde o dia um.', 'E no metrô, um desenho de criança: ele não tá sozinho.', 'No episódio cinco, vocês escolheram A: seguir a criança.', 'Ele sobe a escada correndo, atrás dela.', 'Lá em cima, a rua tá vazia. A criança sumiu de novo.', 'Mas no chão molhado... pegadas pequenas.', 'Repara: um pé de tênis... e o outro, só de meia.', 'Claro! O outro tênis ficou no trem...', 'e agora tá na mão do Matheus.', 'Ele segue as pegadas pela rua vazia.', 'Até que ele reconhece o lugar.', 'A velha praça do relógio. Onde ele achou a carta.', 'O relógio continua parado: sete e doze.', 'A hora exata em que todo mundo sumiu.', 'E as pegadas terminam... bem no pé do relógio.', 'Atrás do relógio, aparece a ponta de uma capa amarela.', 'É a criança. Escondida, com medo.', 'Ei... eu trouxe o seu tênis.', 'Ele deixa o tênis no chão... e se afasta.', 'E você? Teria paciência de esperar?', 'Uma mãozinha sai de trás do relógio...', 'e puxa o tênis. Rapidinho!', 'Aí, um som que ninguém ouve há quarenta e oito dias:', 'tic... tac.', 'O ponteiro andou! Sete e treze!', 'O relógio parado desde o dia um... voltou a andar.', 'E a criança fugiu de novo. Agora, com os dois tênis.', 'Lá longe, a janela do décimo terceiro andar acende.', 'A sala das fotos. O moço da câmera voltou?', 'E agora? Vai até a janela acesa... ou segue as pegadas da criança?', 'Comenta A ou B! A mais votada vira o episódio 7.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[[(900, 901.8, 1, '')], [(0, 4, 1, 'DIA 1 · 07:12')], [(110, 112, 0.5, 'DIA 1 · 07:20'), (112, 114, 0.5, 'DIA 1 · 07:20', 'cont')], [(114, 117, 0.45, 'DIA 1 · 07:20'), (120, 123, 0.55, 'DIA 1 · 07:20')], [(123, 125, 0.4, 'DIA 1 · 07:30'), (7, 11, 0.6, 'DIA 1 · 07:30')], [(41, 46, 1, 'DIA 48 · 17:30')], [(560, 570, 1, 'DIA 48 · 20:52')], [(844, 849.6, 1, 'DIA 48 · 21:07')], [(902, 903.6, 1, '')], [(904, 907, 1, 'DIA 48 · 21:10')], [(907.2, 911, 1, 'DIA 48 · 21:11')], [(911.2, 914, 1, 'DIA 48 · 21:11')], [(914, 917, 1, 'DIA 48 · 21:11', 'cont')], [(917.2, 918.8, 1, 'DIA 48 · 21:12')], [(918.8, 920.4, 1, 'DIA 48 · 21:12', 'cont')], [(920.6, 926.6, 1, 'DIA 48 · 21:13')], [(926.8, 929.6, 1, 'DIA 48 · 21:24')], [(929.6, 932.6, 1, 'DIA 48 · 21:24', 'cont')], [(932.8, 935.6, 1, 'DIA 48 · 21:25')], [(935.6, 938.4, 1, 'DIA 48 · 21:25', 'cont')], [(938.6, 941.2, 1, 'DIA 48 · 21:25')], [(941.2, 944.2, 1, 'DIA 48 · 21:25', 'cont')], [(944.2, 946.6, 1, 'DIA 48 · 21:26', 'cont')], [(946.8, 949.6, 1, 'DIA 48 · 21:26')], [(949.8, 954, 1, 'DIA 48 · 21:26')], [(954.2, 957, 1, 'DIA 48 · 21:28')], [(957.2, 959.6, 1, 'DIA 48 · 21:31')], [(959.6, 962, 1, 'DIA 48 · 21:31', 'cont')], [(962.2, 965, 1, 'DIA 48 · 21:31')], [(965, 966.6, 1, 'DIA 48 · 21:31', 'cont')], [(966.6, 969, 1, 'DIA 48 · 21:31', 'cont')], [(969, 971.6, 1, 'DIA 48 · 21:31', 'cont')], [(971.8, 975, 1, 'DIA 48 · 21:32')], [(975.2, 979.6, 1, 'DIA 48 · 21:32')], [(979.6, 983, 1, 'DIA 48 · 21:32', 'cont')], [(983.2, 986.4, 1, 'DIA 48 · 21:33')], [(986.4, 990, 1, 'DIA 48 · 21:33', 'cont')]]
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
shots.append({"a":990.2,"b":993.4,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
