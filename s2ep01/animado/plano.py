# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Imagine acordar... no corpo do seu chefe.', 'Esse é o Matheus. Vinte e quatro anos.', 'Trabalha num escritório no centro de São Paulo.', 'E esse é o chefe dele: seu Roberto.', 'Ontem, o Matheus pediu um aumento.', 'E o seu Roberto carimbou: negado. De novo.', 'Matheus foi dormir chateado.', 'E o relógio do quarto parou. Meia-noite.', 'Sete da manhã. O despertador toca.', 'Só que esse não é o quarto dele.', 'Cama enorme. Vista pra cidade inteira.', 'Ele corre pro banheiro, se olha no espelho...', 'E quem olha de volta é o seu Roberto!', 'Bigode, gravata e trinta anos a mais.', 'E você? O que faria primeiro?', 'No celular, uma mensagem sem nome:', 'Só até você dormir. Escolha bem.', 'Ele vai pro trabalho no carrão do chefe.', 'Todo mundo se levanta: bom dia, chefe!', 'Na mesa do chefe, uma pasta azul.', 'Escrito: aumentos do mês.', 'E lá está ele: Matheus. Negado.', 'Mas aí, pela porta de vidro...', 'Ele vê... ele mesmo. Chegando pro trabalho.', 'O Matheus de lá senta e grita: cadê meu café?', 'Ninguém entende nada.', 'Então é isso: o chefe tá no corpo dele.', 'Eles trocaram de vida. Só por hoje.', 'O telefone toca. É o diretor.', 'Roberto, quero os aumentos assinados até as seis!', 'Falta uma assinatura. E a caneta tá na mão dele.', 'Ele pode aumentar o próprio salário...', 'Ou dar aumento pra equipe inteira.', 'Mas cuidado: toda escolha tem consequência.', 'A: o próprio salário. B: aumento pra todo mundo.', 'Comenta A ou B! A mais votada vira o episódio dois.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[[(2000, 2003.5, 1, '')], [(2004, 2007.5, 1, 'ONTEM · 14:10')], [(2008, 2011.5, 1, 'ONTEM · 14:12')], [(2012, 2015.5, 1, 'ONTEM · 14:15')], [(2016, 2019.5, 1, 'ONTEM · 14:20')], [(2020, 2023.5, 1, 'ONTEM · 14:21')], [(2024, 2027.5, 1, 'ONTEM · 23:58')], [(2028, 2031.5, 1, 'MEIA-NOITE · 00:00')], [(2032, 2035.5, 1, 'HOJE · 07:00')], [(2036, 2039.6, 1, 'HOJE · 07:01')], [(2039.6, 2043.5, 1, 'HOJE · 07:01', 'cont')], [(2044, 2047.5, 1, 'HOJE · 07:02')], [(2048, 2051.5, 1, 'HOJE · 07:02')], [(2052, 2055.5, 1, 'HOJE · 07:03')], [(2056, 2059.5, 1, 'HOJE · 07:03')], [(2060, 2063, 1, 'HOJE · 07:04')], [(2063, 2066, 1, 'HOJE · 07:04', 'cont')], [(2068, 2071.5, 1, 'HOJE · 08:10')], [(2072, 2075.5, 1, 'HOJE · 08:40')], [(2076, 2079.5, 1, 'HOJE · 08:45')], [(2080, 2083.5, 1, 'HOJE · 08:46')], [(2083.5, 2087, 1, 'HOJE · 08:46', 'cont')], [(2088, 2091.5, 1, 'HOJE · 09:00')], [(2092, 2095.5, 1, 'HOJE · 09:00')], [(2100, 2103.5, 1, 'HOJE · 09:05')], [(2103.5, 2107, 1, 'HOJE · 09:05', 'cont')], [(2108, 2111.5, 1, 'HOJE · 09:06')], [(2111.5, 2115, 1, 'HOJE · 09:06', 'cont')], [(2116, 2119.5, 1, 'HOJE · 17:40')], [(2119.5, 2123, 1, 'HOJE · 17:40', 'cont')], [(2124, 2127.5, 1, 'HOJE · 17:50')], [(2128, 2131.5, 1, 'HOJE · 17:51')], [(2132, 2135.5, 1, 'HOJE · 17:52')], [(2136, 2139.5, 1, 'HOJE · 17:59')], [(2140, 2143.5, 1, 'HOJE · 17:59')], [(2143.5, 2147, 1, 'HOJE · 17:59', 'cont')]]
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
shots.append({"a":2096,"b":2099.2,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
