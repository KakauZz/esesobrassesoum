# Monta o plano do vídeo a partir da narração contínua (saida/voz_full.wav):
# acha onde cada fala começa (pelos silêncios), define os cortes, a legenda e o HUD. Saída: saida/plano.json
import json, os, re, subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); O=os.path.join(HERE,"saida")
VOZ=os.path.join(O,"voz_full.wav")
FALAS=['Imagine acordar, depois de nove vidas... na sua.', 'Somando todas as redes, venceu a B.', 'Ontem, no corpo da avó, ele pediu pro Lucas:', 'Vai na quarta. E escuta o Matheus.', 'E o Lucas prometeu: tá bom, vó. Eu vou.', 'Por causa de vocês, hoje ele fala com a própria voz!', 'Meia-noite. O relógio para pela última vez.', 'Quarta, sete da manhã. Ele abre os olhos...', 'O quartinho dele. A cama dele!', 'No espelho: o próprio rosto! Ele voltou!', 'Hoje ele é... ele mesmo!', 'E o gato laranja tá ali, no pé da cama.', 'Mas o relógio da parede continua parado.', 'Embaixo dele, um envelope. Com a letra dele: M.', 'Oi, Matheus. Sou eu. Você, daqui a dez anos.', 'Fui eu que te mandei todas aquelas vidas.', 'O chefe. A diretora. O Lucas. O seu Zé.', 'A síndica. A Bia. Sua mãe. A professora. A avó.', 'Todas tinham uma coisa em comum.', 'O aumento que ele escondeu do melhor amigo.', 'Eu não contei. E fiquei dez anos longe do Lucas.', 'Por isso eu parei os relógios. Pra te dar tempo.', 'Hoje, às sete, a escolha é sua. Assinado, M.', 'Então era isso! O M. era ele mesmo... do futuro!', 'E você? O que diria pra você de dez anos atrás?', 'O dia inteiro, ele ensaia na frente do espelho.', 'Seis e meia. Ele vai até a pracinha da escola.', 'Sete horas. E nada do Lucas.', 'Sete e cinco. Sete e dez... Será que ele não vem?', 'Aí, passos no caminho. É o Lucas!', 'Minha vó pediu pra eu vir. E escutar.', 'Sem corpo trocado. Agora é a voz dele mesmo.', 'Lucas, o aumento foi meu. E cortaram a sua promoção.', 'Eu escondi por vergonha. Me desculpa.', 'Silêncio. O Lucas olha pro chão.', 'Por que você não me contou?', 'Porque eu tinha medo de perder você.', 'O Lucas respira fundo... e sorri.', 'Era só isso que eu queria. A verdade.', 'Os dois se abraçam. Amigos de novo!', 'E o relógio da praça, parado na meia-noite, volta a andar!', 'E todos os outros relógios também!', 'Aí o celular vibra uma última vez.', 'Obrigado. Agora o meu futuro também mudou. M.', 'Lá no fim da praça, alguém de moletom laranja vai embora.', 'A gente esconde as coisas pra não perder quem ama.', 'Mas é a verdade que deixa quem a gente ama por perto.', 'Se você acordasse na vida de alguém, quem seria?', 'Comenta! Fim da temporada. Amanhã, uma história nova.']
# tomadas por fala: (inicio_anim, fim_anim, fração da fala, HUD)
SHOTS=[[(3800, 3803.5, 1, '')], [(3804, 3807.5, 1, '')], [(3808, 3811.5, 1, 'TERÇA · 12:25')], [(3812, 3815.5, 1, 'TERÇA · 12:25')], [(3816, 3819.5, 1, 'TERÇA · 12:26')], [(3626, 3629.5, 1, 'TERÇA · 12:26')], [(2028, 2031.5, 1, 'MEIA-NOITE · 00:00')], [(3828, 3831.5, 1, 'QUARTA · 07:00')], [(3832, 3835.5, 1, 'QUARTA · 07:01')], [(3836, 3839.5, 1, 'QUARTA · 07:02')], [(3840, 3843.5, 1, 'QUARTA · 07:02')], [(3844, 3847.5, 1, 'QUARTA · 07:03')], [(3848, 3851.5, 1, 'QUARTA · 07:03')], [(3852, 3855.5, 1, 'QUARTA · 07:04')], [(3856, 3859.5, 1, 'QUARTA · 07:05')], [(3860, 3863.5, 1, 'QUARTA · 07:05')], [(3864, 3867.5, 1, 'QUARTA · 07:06')], [(3868, 3871.5, 1, 'QUARTA · 07:06')], [(3872, 3875.5, 1, 'QUARTA · 07:07')], [(3876, 3879.5, 1, 'QUARTA · 07:07')], [(3880, 3883.5, 1, 'QUARTA · 07:08')], [(3884, 3887.5, 1, 'QUARTA · 07:08')], [(3888, 3891.5, 1, 'QUARTA · 07:09')], [(3892, 3895.5, 1, 'QUARTA · 07:10')], [(3896, 3899.5, 1, 'QUARTA · 07:10')], [(3900, 3903.5, 1, 'QUARTA · 15:00')], [(3904, 3907.5, 1, 'QUARTA · 18:30')], [(3908, 3911.5, 1, 'QUARTA · 19:00')], [(3912, 3915.5, 1, 'QUARTA · 19:10')], [(3916, 3919.5, 1, 'QUARTA · 19:11')], [(3920, 3923.5, 1, 'QUARTA · 19:11')], [(3924, 3927.5, 1, 'QUARTA · 19:12')], [(3928, 3931.5, 1, 'QUARTA · 19:12')], [(3932, 3935.5, 1, 'QUARTA · 19:12')], [(3936, 3939.5, 1, 'QUARTA · 19:13')], [(3940, 3943.5, 1, 'QUARTA · 19:13')], [(3944, 3947.5, 1, 'QUARTA · 19:13')], [(3948, 3951.5, 1, 'QUARTA · 19:13')], [(3952, 3955.5, 1, 'QUARTA · 19:14')], [(3956, 3959.5, 1, 'QUARTA · 19:14')], [(3960, 3963.5, 1, 'QUARTA · 19:14')], [(3964, 3967.5, 1, 'QUARTA · 19:14')], [(3968, 3971.5, 1, 'QUARTA · 19:15')], [(3972, 3975.5, 1, 'QUARTA · 19:15')], [(3976, 3979.5, 1, 'QUARTA · 19:16')], [(3980, 3983.5, 1, 'QUARTA · 19:16')], [(3984, 3987.5, 1, 'QUARTA · 19:16')], [(3988, 3991.5, 1, 'QUARTA · 19:17')], [(3992, 3995.5, 1, 'QUARTA · 19:17')]]
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
shots.append({"a":4000,"b":4003.2,"start":round(total,3),"dur":2.8,"hud":""}); total=total+2.8
plano={"total":round(total,3),"voz":dur,"falas":[{"i":i,"start":starts[i],"end":ends[i]} for i in range(len(FALAS))],"shots":shots,"caps":caps}
json.dump(plano,open(os.path.join(O,"plano.json"),"w"),ensure_ascii=False,indent=1)
print("voz",round(dur,2),"total",round(total,2))
for i in range(len(FALAS)): print(i,round(starts[i],2),round(ends[i],2),FALAS[i][:40])
