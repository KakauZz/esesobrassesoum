# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Vocês escolheram: A. Ele correu atrás da sombra.', 'Treze andares de escada. Ele desce pulando os degraus.', 'O coração batendo na garganta. Doze, onze, dez...', 'Ele chega no térreo e empurra a porta de vidro.', 'A porta ainda tava balançando. Ela tinha acabado de passar por ali.', 'Lá fora, a rua tá deserta.', 'Na avenida vazia... a sombra. Correndo.', 'Ele grita: ESPERA!', 'Ela não olha pra trás.', 'Mas deixa cair alguma coisa no asfalto.', 'Um rádio. Daqueles de segurança. Ainda ligado.', 'Do chiado, sai uma voz:', 'Não confia... no que você vê.', 'E o rádio morre.', 'A sombra desce a escada do metrô.', 'Um metrô que não funciona há quarenta e oito dias.', 'Lá embaixo, as catracas.', 'Uma delas... ainda girando.', 'Alguém acabou de passar por aqui.', 'A escada rolante tá parada. E tem pegadas na poeira.', 'Pegadas pequenas. Indo pra plataforma.', 'Ele segue as pegadas até lá embaixo.', 'Na plataforma... um trem parado.', 'Só um vagão tá aceso. E as portas... se abrem.', 'Na parede, o mapa do metrô.', 'Alguém circulou a Estação Sé de vermelho e escreveu: você está aqui.', 'E embaixo, a data: dia quarenta e oito.', 'No chão, uma foto.', 'É ele. Correndo na avenida. Dois minutos atrás.', 'Mas a sombra tava NA FRENTE dele.', 'Então... quem tirou essa foto?', 'Dentro do vagão aceso, um celular vibra no banco.', 'Na tela, uma mensagem: não entra no vagão.', 'Do fundo do túnel, uma lanterna pisca. Duas vezes.', 'Alguém tá chamando ele.', 'E agora, Matheus? Entra no vagão aceso... ou segue a luz no túnel?', 'Comenta A ou B! A mais votada vira o episódio 5.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[[(700,704,1,"")],
       [(710,713,1,"DIA 48 · 20:59")],
       [(713,716,1,"DIA 48 · 20:59","cont")],
       [(705,707.6,1,"DIA 48 · 21:00")],
       [(707.6,709.5,1,"DIA 48 · 21:00","cont")],
       [(720,721.6,1,"DIA 48 · 21:00")],
       [(721.6,724,1,"DIA 48 · 21:00","cont")],
       [(724,725.8,1,"DIA 48 · 21:00","cont")],
       [(725.8,728,1,"DIA 48 · 21:00","cont")],
       [(716.2,717.8,1,"DIA 48 · 21:00")],
       [(717.8,719.8,1,"DIA 48 · 21:00","cont")],
       [(736.2,737.2,1,"DIA 48 · 21:00")],
       [(737.2,738.9,1,"DIA 48 · 21:00","cont")],
       [(738.9,739.8,1,"DIA 48 · 21:00","cont")],
       [(730,733,1,"DIA 48 · 21:01")],
       [(733,736,1,"DIA 48 · 21:01","cont")],
       [(746.2,747.4,1,"DIA 48 · 21:01")],
       [(747.4,748.7,1,"DIA 48 · 21:01","cont")],
       [(748.7,749.8,1,"DIA 48 · 21:01","cont")],
       [(756.2,757.9,1,"DIA 48 · 21:01")],
       [(757.9,759,1,"DIA 48 · 21:01","cont")],
       [(759,759.8,1,"DIA 48 · 21:01","cont")],
       [(740,743,1,"DIA 48 · 21:02")],
       [(743,746,1,"DIA 48 · 21:02","cont")],
       [(764.2,766,1,"DIA 48 · 21:02")],
       [(766,768.2,1,"DIA 48 · 21:02","cont")],
       [(768.2,769.8,1,"DIA 48 · 21:02","cont")],
       [(750,752.5,1,"DIA 48 · 21:02")],
       [(752.5,756,1,"DIA 48 · 21:02","cont")],
       [(760,762,1,"DIA 48 · 21:02")],
       [(762,764,1,"DIA 48 · 21:02","cont")],
       [(776.2,777.6,1,"DIA 48 · 21:03")],
       [(777.6,779.8,1,"DIA 48 · 21:03","cont")],
       [(770,773.5,1,"DIA 48 · 21:03")],
       [(773.5,776,1,"DIA 48 · 21:03","cont")],
       [(780,783.5,1,"DIA 48 · 21:03")],
       [(783.5,786,1,"DIA 48 · 21:03","cont")]]
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
shots.append({"a":790,"b":793.2,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
