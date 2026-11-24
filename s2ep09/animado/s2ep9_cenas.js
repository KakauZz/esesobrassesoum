// ===================== SÉRIE 2 · EP. 9 — NO CORPO DA AVÓ DO LUCAS =====================
// Faixa 3600–3799 (cartão final 3790–3793.2). Consequência do voto B do EP. 8 (remarcar e ele mesmo pedir desculpa):
// o Lucas ficou bravo ("Fugiu de novo? Quarta, 19h. Última chance."). A conversa ficou pra QUARTA (EP. 10, o final).
// Hoje (terça) o Matheus acorda no corpo da dona Cida, avó que criou o Lucas; ela está no corpo do Matheus.
// Elementos novos (máx. 2): a dona Cida + a mensagem do "M.": "Amanhã, a última vida. A sua." (prepara o final).
// Pista escondida: relógio do quarto da avó parado em 00:00 (10º relógio) — e o da cozinha também.
// Ambiente (não falado): gato laranja na janela da cozinha; vapor/fumacinha do bolo.

const CIDA={skin:'#8d5a3b',skinS:'#6e4429',hair:'#ecebe8',hairL:'#ffffff',hood:'#2a3a6a',hoodS:'#1f2c54',pants:'#2a3a6a',pantsS:'#1f2c54'};
// cabelo branco curtinho e cacheado, com BOBES rosa, e óculos vermelhos no rosto (coordenadas do face())
function cidaTop(o){o=o||{};ctx.lineJoin='round';
  ctx.fillStyle=CIDA.hair;ctx.strokeStyle=OUT;ctx.lineWidth=10;
  const R=[];for(let i=0;i<17;i++){const a=Math.PI*(1.04+i/16*.92);R.push([Math.cos(a)*305,Math.sin(a)*320-40])}
  R.forEach(([x,y],i)=>{ctx.fillStyle=i%2?CIDA.hair:'#d8d6d2';ctx.beginPath();ctx.arc(x,y,58,0,7);ctx.fill();ctx.stroke()});
  ctx.fillStyle=CIDA.hair;ctx.beginPath();ctx.moveTo(-300,-30);R.forEach(([x,y])=>ctx.lineTo(x,y));ctx.lineTo(300,-30);ctx.quadraticCurveTo(220,-200,0,-215);ctx.quadraticCurveTo(-220,-200,-300,-30);ctx.closePath();ctx.fill();
  // bobes (rolinhos rosa) em cima da cabeça
  const BB=[[-190,-290,-.5],[-70,-340,-.15],[60,-342,.15],[185,-292,.5],[-130,-210,-.3],[130,-210,.3]];
  BB.forEach(([x,y,r],i)=>{ctx.save();ctx.translate(x,y);ctx.rotate(r);ctx.fillStyle=i%2?'#ff8ab8':'#ff6aa2';ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.beginPath();rr(-62,-38,124,76,30);ctx.fill();ctx.stroke();
    ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=6;for(let k=-1;k<=1;k++){ctx.beginPath();ctx.moveTo(k*30,-30);ctx.lineTo(k*30,30);ctx.stroke()}ctx.restore()});
  // óculos vermelhos no rosto
  if(o.noGlasses)return;
  ctx.strokeStyle='#d0303a';ctx.lineWidth=14;for(const sx of[-1,1]){ctx.fillStyle='rgba(220,240,255,.28)';ctx.beginPath();ctx.ellipse(sx*125,12,98,74,0,0,7);ctx.fill();ctx.stroke()}
  ctx.beginPath();ctx.moveTo(-28,4);ctx.quadraticCurveTo(0,-14,28,4);ctx.stroke();ctx.beginPath();ctx.moveTo(-222,0);ctx.lineTo(-280,-10);ctx.moveTo(222,0);ctx.lineTo(280,-10);ctx.stroke();
  ctx.strokeStyle='rgba(255,255,255,.75)';ctx.lineWidth=7;for(const sx of[-1,1]){ctx.beginPath();ctx.arc(sx*125-30,-10,40,3.6,4.5);ctx.stroke()}
  // brincos de pérola
  ctx.fillStyle='#fffaf0';ctx.strokeStyle=OUT;ctx.lineWidth=5;for(const sx of[-1,1]){ctx.beginPath();ctx.arc(sx*296,112,18,0,7);ctx.fill();ctx.stroke()}}
// vestido azul-marinho de bolinhas brancas + golinha branca (coordenadas do face(), corpo -560..560 × 380..980)
function cidaDress(){ctx.save();ctx.beginPath();ctx.moveTo(-560,980);ctx.quadraticCurveTo(-520,430,-180,380);ctx.lineTo(180,380);ctx.quadraticCurveTo(520,430,560,980);ctx.closePath();ctx.clip();
  ctx.fillStyle='rgba(255,255,255,.9)';for(let i=0;i<38;i++){const r=rng(i+3600);ctx.beginPath();ctx.arc(-540+r()*1080,420+r()*560,14,0,7);ctx.fill()}ctx.restore();
  ctx.fillStyle='#fffaf0';ctx.strokeStyle=OUT;ctx.lineWidth=9;for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(0,440);ctx.quadraticCurveTo(sx*120,520,sx*250,420);ctx.quadraticCurveTo(sx*140,400,0,410);ctx.closePath();ctx.fill();ctx.stroke()}}
function cidaFace(cx,cy,s,o){o=o||{};withP(CIDA,()=>face(cx,cy,s,o));ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);if(!o.headOnly)cidaDress();cidaTop(o);ctx.restore()}
function cidaFront(x,y,s,pose){pose=pose||{};withP(CIDA,()=>personFront(x,y,s,pose));
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='rgba(255,255,255,.9)';for(let i=0;i<10;i++){const r=rng(i+3620);ctx.beginPath();ctx.arc(-26+r()*52,-100+r()*100,3,0,7);ctx.fill()}
  ctx.fillStyle='#fffaf0';ctx.strokeStyle=OUT;ctx.lineWidth=2;for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(0,-112);ctx.lineTo(sx*20,-100);ctx.lineTo(sx*26,-114);ctx.closePath();ctx.fill();ctx.stroke()}ctx.restore();
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.translate((pose.look||0)*8,-196);ctx.scale(.16,.16);cidaTop(pose);ctx.restore()}
// selo "DENTRO: A AVÓ" (a dona Cida está no corpo do Matheus)
function cidaInside(x,y){ctx.save();ctx.translate(x,y);ctx.fillStyle='rgba(255,255,255,.95)';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-180,-60,360,120,30);ctx.fill();ctx.stroke();
  ctx.save();ctx.beginPath();ctx.arc(-120,0,44,0,7);ctx.clip();ctx.fillStyle='#ffe0ec';ctx.fillRect(-170,-50,100,100);cidaFace(-120,22,.09,{headOnly:true,smile:6});ctx.restore();
  ctx.fillStyle='#16161c';ctx.font='900 32px Inter';ctx.textAlign='left';ctx.fillText('DENTRO:',-66,-8);ctx.fillStyle='#c8356a';ctx.fillText('A VÓ CIDA',-66,30);ctx.restore()}
// selo "DENTRO: O MATHEUS" (o Matheus está no corpo da avó)
function mtInside(x,y){ctx.save();ctx.translate(x,y);ctx.fillStyle='rgba(255,255,255,.95)';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-180,-60,360,120,30);ctx.fill();ctx.stroke();
  ctx.save();ctx.beginPath();ctx.arc(-120,0,44,0,7);ctx.clip();ctx.fillStyle='#ffe0c8';ctx.fillRect(-170,-50,100,100);face(-120,22,.09,{headOnly:true,smile:6});ctx.restore();
  ctx.fillStyle='#16161c';ctx.font='900 32px Inter';ctx.textAlign='left';ctx.fillText('DENTRO:',-66,-8);ctx.fillStyle='#e2683c';ctx.fillText('O MATHEUS',-66,30);ctx.restore()}
// placar de todas as redes (igual ao EP. 10): comentários subindo, contador passa de +9999 → VENCEU B (sem números reais)
function s9Placar(u,win){ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(90,140,255,A)',.25);
  txtC('PLACAR DO EP. 8',W/2,300,'900 86px Inter','#fff',16);txtC('somando todas as redes',W/2,390,'700 46px Inter','#bcd',0);
  const NET=[['TikTok','#111','#25f4ee'],['Instagram','#c13584','#fff'],['YouTube','#e62117','#fff']];const TX=['B','bbbb','B 💬','BBBB','b!!','ele mesmo!','B','B 👀','Bbbb','a','B','B B B'];
  ctx.save();ctx.beginPath();ctx.rect(0,460,W,860);ctx.clip();
  const n=Math.floor(u*6);for(let i=0;i<n;i++){const r=rng(i+3604);const age=u-i/6;const y=1300-age*560;if(y<420)continue;const side=i%2===0;const nt=NET[i%3];const txt=TX[Math.floor(r()*TX.length)];
    ctx.save();ctx.globalAlpha=Math.min(1,age*4);ctx.translate(side?70:590,y);ctx.fillStyle='rgba(255,255,255,.95)';rr(0,-46,420,92,30);ctx.fill();
    ctx.fillStyle=nt[1];ctx.beginPath();ctx.arc(46,0,30,0,7);ctx.fill();ctx.fillStyle=nt[2];ctx.font='900 28px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nt[0][0],46,2);
    ctx.textAlign='left';ctx.fillStyle='#777';ctx.font='700 24px Inter';ctx.fillText(nt[0],90,-16);ctx.fillStyle=txt.toUpperCase().startsWith('A')&&txt.length<3?'#1a8a4a':'#2f55c8';ctx.font='900 40px Inter';ctx.fillText(txt,90,22);ctx.restore()}
  ctx.restore();
  const c=Math.floor(Math.pow(clamp(u/2.9),2.2)*9999);const k=easeBack(seg(u,.1,.4));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-470,-90,940,180,36);ctx.fill();txtC(c>=9999?'+9999 COMENTÁRIOS':'💬 '+c.toLocaleString('pt-BR')+' comentários',0,0,'900 66px Oswald','#16161c');ctx.restore();
  if(win){const k2=easeBack(clamp(win));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(k2,k2);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(-W,-H,W*2,H*2);ctx.fillStyle='rgba(60,90,200,.97)';rr(-470,-150,940,300,46);ctx.fill();
    txtC('VENCEU B',0,-50,'900 110px Inter','#fff');txtC('ELE MESMO PEDIR 💬',0,60,'900 56px Inter','#fff');ctx.restore()}}
// quarto da avó (manhã): cortina de renda, cesta de tricô, relógio parado (pista escondida), cama com colcha de crochê
function s9Room(u,o){o=o||{};ctx.fillStyle=lg(0,H,['#fde6ee','#f6d2de','#ecbccc']);ctx.fillRect(0,0,W,H);
  // papel de parede de florzinhas
  ctx.fillStyle='rgba(200,90,130,.18)';for(let i=0;i<40;i++){const r=rng(i+3630);ctx.beginPath();ctx.arc(r()*W,200+r()*1150,10,0,7);ctx.fill()}
  // janela com cortina de renda
  ctx.save();ctx.beginPath();rr(620,250,380,470,14);ctx.clip();ctx.fillStyle=lg(250,720,['#a8d8f4','#e0f2fa']);ctx.fillRect(620,250,380,470);semBlur(()=>buildings(86,720,60,220,'#b8c8d4','#eef4f8',.08,0,1));ctx.restore();
  ctx.strokeStyle='#fffdf6';ctx.lineWidth=16;ctx.beginPath();rr(620,250,380,470,14);ctx.stroke();
  for(const sx of[0,1]){ctx.fillStyle='rgba(255,255,255,.75)';ctx.beginPath();const x0=sx?1000:620;ctx.moveTo(x0,230);ctx.lineTo(sx?880:740,230);ctx.quadraticCurveTo(sx?900:720,480,sx?960:660,760);ctx.lineTo(x0,760);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(200,180,190,.8)';ctx.lineWidth=3;ctx.stroke()}
  // quadro na parede + relógio parado (pista escondida)
  ctx.fillStyle='#c98f5e';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(110,300,220,170);ctx.strokeRect(110,300,220,170);ctx.fillStyle='#9fd0f0';ctx.fillRect(126,316,188,138);ctx.fillStyle='#7cc46a';ctx.fillRect(126,400,188,54);
  clockFace(220,610,66,0,0);
  ctx.fillStyle=lg(1400,H,['#a8744a','#8a5a34']);ctx.fillRect(0,1400,W,H-1400)}
// chinelos de pelúcia (coelhinho rosa)
function s9Slipper(x,y,s,flip){ctx.save();ctx.translate(x,y);ctx.scale(s*(flip?-1:1),s);ctx.fillStyle='#ffb6d0';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();ctx.ellipse(0,0,110,52,0,0,7);ctx.fill();ctx.stroke();
  for(const ox of[-30,30]){ctx.beginPath();ctx.ellipse(-60+ox*.6,-60,18,52,ox<0?-.3:.2,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#ff8ab8';ctx.beginPath();ctx.ellipse(-60+ox*.6,-60,8,34,ox<0?-.3:.2,0,7);ctx.fill();ctx.fillStyle='#ffb6d0'}
  ctx.fillStyle='#16161c';for(const ox of[-82,-46]){ctx.beginPath();ctx.arc(ox,-8,7,0,7);ctx.fill()}ctx.fillStyle='#ff5a8a';ctx.beginPath();ctx.arc(-64,8,7,0,7);ctx.fill();ctx.restore()}
// cozinha da avó: azulejo verde, janela (gato), relógio parado, mesa. o:{cat, flour, book}
function s9Kitchen(u,o){o=o||{};ctx.fillStyle=lg(0,H,['#eaf6ea','#d6ecd8','#c2e0c6']);ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='rgba(60,120,80,.16)';ctx.lineWidth=3;for(let y=820;y<1240;y+=70){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}for(let x=0;x<W;x+=70){ctx.beginPath();ctx.moveTo(x,820);ctx.lineTo(x,1240);ctx.stroke()}
  ctx.save();ctx.beginPath();rr(560,300,400,430,14);ctx.clip();ctx.fillStyle=lg(300,730,['#a8d8f4','#e0f2fa']);ctx.fillRect(560,300,400,430);ctx.fillStyle='#7cc46a';ctx.beginPath();ctx.arc(640,730,140,0,7);ctx.arc(860,750,160,0,7);ctx.fill();if(o.cat)o.cat();ctx.restore();
  ctx.strokeStyle='#fffdf6';ctx.lineWidth=16;ctx.beginPath();rr(560,300,400,430,14);ctx.stroke();ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(760,300);ctx.lineTo(760,730);ctx.stroke();ctx.fillStyle='#fffdf6';ctx.fillRect(540,724,440,26);ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.strokeRect(540,724,440,26);
  // vaso de violeta no parapeito
  ctx.fillStyle='#c8602a';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(870,724);ctx.lineTo(930,724);ctx.lineTo(922,680);ctx.lineTo(878,680);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#4a9040';ctx.beginPath();ctx.arc(900,664,26,0,7);ctx.fill();ctx.fillStyle='#9a5ad8';for(let i=0;i<4;i++){ctx.beginPath();ctx.arc(886+i*10,652-(i%2)*8,8,0,7);ctx.fill()}
  // relógio da cozinha parado em 00:00
  clockFace(200,480,62,0,0);
  // armário e fogão
  ctx.fillStyle='#f4f0e6';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(60,560,340,220,12);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(230,560);ctx.lineTo(230,780);ctx.stroke();
  ctx.fillStyle='#d9dde2';ctx.beginPath();rr(60,960,340,380,16);ctx.fill();ctx.stroke();ctx.fillStyle='#2a2e36';rr(90,1080,280,200,12);ctx.fill();ctx.fillStyle='rgba(255,150,70,.5)';rr(100,1090,260,180,10);ctx.fill();
  for(let i=0;i<3;i++){ctx.fillStyle='#16161c';ctx.beginPath();ctx.arc(120+i*110,1010,15,0,7);ctx.fill()}
  ctx.fillStyle=lg(1340,H,['#c8b090','#a89070']);ctx.fillRect(0,1340,W,H-1340)}
// bolo de fubá (forma redonda). burnt: 0..1 (topo queimado), smoke
function s9Cake(x,y,s,u,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle=OUT;ctx.lineWidth=7;
  ctx.fillStyle='#fffdf6';ctx.beginPath();ctx.ellipse(0,60,210,50,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle='#e8b84a';ctx.beginPath();ctx.moveTo(-160,40);ctx.lineTo(-160,-40);ctx.quadraticCurveTo(0,-90,160,-40);ctx.lineTo(160,40);ctx.quadraticCurveTo(0,80,-160,40);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle=o.burnt?'#4a2c18':'#c8902a';ctx.beginPath();ctx.ellipse(0,-42,160,44,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#fffdf6';ctx.beginPath();ctx.ellipse(0,-42,30,10,0,0,7);ctx.fill();
  if(o.smoke){for(let i=0;i<5;i++){const ph=(u*.6+i/5)%1;ctx.save();ctx.globalAlpha=(1-ph)*.6;ctx.fillStyle='#8a8a92';ctx.beginPath();ctx.arc(Math.sin(ph*6+i)*40-40+i*20,-80-ph*260,26+ph*40,0,7);ctx.fill();ctx.restore()}}
  ctx.restore()}
// porta de entrada vista de dentro, abrindo (p 0..1). fn = quem está do lado de fora
function s9Door(u,p,fn){ctx.fillStyle=lg(0,H,['#fde6ee','#f6d2de','#ecbccc']);ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#fff7e0';ctx.fillRect(280,420,520,1000);ctx.save();ctx.beginPath();ctx.rect(280,420,520,1000);ctx.clip();ctx.fillStyle=lg(420,1420,['#a8d8f4','#e8f4f8']);ctx.fillRect(280,420,520,1000);ctx.fillStyle='#8fbf6a';ctx.fillRect(280,1180,520,240);fn&&fn();ctx.restore();
  ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(280,420,520,1000);
  // folha da porta girando pra dentro (fica mais estreita)
  const w=520*(1-easeOut(clamp(p))*.86);ctx.fillStyle='#a8744a';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(280,420);ctx.lineTo(280+w,420-40*clamp(p));ctx.lineTo(280+w,1420+40*clamp(p));ctx.lineTo(280,1420);ctx.closePath();ctx.fill();ctx.stroke();
  if(w>80){ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.arc(280+w-50,930,18,0,7);ctx.fill();ctx.stroke()}
  ctx.fillStyle=lg(1420,H,['#a8744a','#8a5a34']);ctx.fillRect(0,1420,W,H-1420)}
// mesa do almoço: avó (esq.) e Lucas (dir.), bolo queimado no meio. o:{cm, lm, cs, ls, cpx, lpx, cake}
function s9Table(u,o){o=o||{};ctx.fillStyle=lg(0,H,['#eaf6ea','#d6ecd8','#c2e0c6']);ctx.fillRect(0,0,W,H);
  ctx.save();ctx.beginPath();rr(380,260,320,360,14);ctx.clip();ctx.fillStyle=lg(260,620,['#a8d8f4','#e0f2fa']);ctx.fillRect(380,260,320,360);ctx.restore();ctx.strokeStyle='#fffdf6';ctx.lineWidth=14;ctx.beginPath();rr(380,260,320,360,14);ctx.stroke();
  cidaFace(260,1020,.5,{smile:o.cs??4,mouthO:o.cm||0,px:o.cpx??18,brow:o.cb||0,open:o.co??1});
  luFace(820,1020,.5,{smile:o.ls??0,mouthO:o.lm||0,px:o.lpx??-18,brow:o.lb||0,open:o.lo??1});
  // mesa com toalha xadrez
  ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-20,1300,W+40,700,10);ctx.fill();ctx.stroke();
  ctx.fillStyle='rgba(220,60,70,.35)';for(let i=0;i<14;i++){ctx.fillRect(i*80,1300,40,700)}for(let j=0;j<9;j++){ctx.fillRect(0,1300+j*80,W,40)}
  if(o.cake!==false)s9Cake(W/2,1300,.9,u,{burnt:1,smoke:o.smoke});
  // xícaras de café
  for(const x of[200,880]){ctx.fillStyle='#fff';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(x-50,1330,100,80,14);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(x+58,1366,22,-1.4,1.4);ctx.stroke()}
  if(o.phone){const vb=o.buzz?Math.sin(u*80)*8:0;ctx.save();ctx.translate(W/2+260+vb,1500);ctx.rotate(-.15);ctx.fillStyle='#0d0e12';rr(-70,-120,140,240,24);ctx.fill();ctx.fillStyle='#7a5cff';rr(-58,-106,116,212,16);ctx.fill();txtC('?',0,-10,'900 70px Inter','#fff',0);ctx.restore()}}

// =============================== CENAS ===============================
// 0. GANCHO: o espelho — a avó de bobes em choque (3600–3603.5)
scene(3600,3603.5,(t)=>{const u=t-3600;const z=lerp(1.18,1.04,easeOut(seg(u,0,.6)))+u*.02,sh=u<.3?Math.sin(u*90)*12:0;
  CAM(W/2+sh,H*.52,z,()=>{ctx.fillStyle=lg(0,H,['#ffe0ec','#f8c8dc','#e9a8c4']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,245,250,A)',.4);
    cidaFace(540,1030,.9,{open:1.4,brow:1,mouthO:.9,pupil:.6});
    for(let i=0;i<14;i++){const r=rng(i+3600);ctx.fillStyle='rgba(255,255,255,.6)';ctx.beginPath();ctx.arc(r()*W,(r()*H+u*80)%H,3+r()*4,0,7);ctx.fill()}});
  ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,110,W,430);
  hookTitle('IMAGINE...|ACORDAR NA|AVÓ DO AMIGO 😳',seg(u,0,.35),240);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.85*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(3600.05);
// 1. placar → VENCEU B (3604–3609.5)
scene(3604,3609.5,(t)=>{const u=t-3604;s9Placar(u,seg(u,3.2,3.6));letterIn(u)});
// 2. ontem, no corpo da professora, ele remarcou a conversa (3610–3613.5)
scene(3610,3613.5,(t)=>{const u=t-3610;ctx.fillStyle=lg(0,H,['#d9a43a','#f2c46a','#b0832a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,250,220,A)',.3);
  CAM(W/2,H*.55,lerp(1.0,1.06,seg(u,0,3.5)),()=>neideFace(W/2,H*.64,.8,{open:1.05,brow:.3,smile:4,py:10}));
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('ONTEM',W/2,300,'800 70px Oswald','#fff',12);ctx.restore();
  if(u>.8){const k=easeBack(seg(u,.8,1.1));ctx.save();ctx.translate(W/2,430);ctx.scale(k,k);ctx.fillStyle='rgba(22,22,28,.92)';rr(-430,-60,860,120,30);ctx.fill();txtC('ELE, NO CORPO DA PROFESSORA',0,2,'900 46px Inter','#fff');ctx.restore()}
  if(u>1.7){const k=easeBack(seg(u,1.7,2.0));ctx.save();ctx.translate(W/2,1480);ctx.scale(k,k);ctx.fillStyle='#2f55c8';rr(-400,-64,800,128,34);ctx.fill();txtC('REMARCOU A CONVERSA 📅',0,2,'900 56px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 3. [carta] "Quero te pedir desculpa eu mesmo." — a mensagem enviada (3614–3617.5)
scene(3614,3617.5,(t)=>{const u=t-3614;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(140,170,255,A)',.3);
  CAM(W/2,H*.5,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>s6Phone(u,{bg:false,rot:0},()=>s8Type(u,seg(u,.1,1.8),'Remarca pra amanhã?|Quero te pedir|desculpa EU MESMO.')));
  if(u>2.2){const k=easeBack(seg(u,2.2,2.5));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);ctx.fillStyle='#2fbf71';rr(-280,-60,560,120,30);ctx.fill();txtC('ENVIADO ✓✓',0,2,'900 60px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 4. mas o Lucas não gostou nada (3618–3621.5)
scene(3618,3621.5,(t)=>{const u=t-3618;ctx.fillStyle=lg(0,H,['#3a0f14','#6a1f24','#2a0a0e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,120,120,A)',.2);
  const sh=u>.4&&u<.8?Math.sin(u*80)*8:0;CAM(W/2+sh,H*.55,lerp(1.08,1.0,easeOut(seg(u,0,1))),()=>luFace(W/2,H*.64,.78,{open:lerp(1,1.15,seg(u,.2,.5)),brow:lerp(0,-.8,seg(u,.3,.7)),smile:-16,py:10}));
  if(u>.5){const k=easeBack(seg(u,.5,.8));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#fff';rr(-380,-64,760,128,34);ctx.fill();txtC('NÃO GOSTOU NADA 😠',0,2,'900 62px Inter','#c8352b');ctx.restore()}
  letterIn(u);
});
SHAKE.push(3618.45);
// 5. [carta] "Fugiu de novo? Quarta, sete da noite. Última chance." (3622–3625.5)
scene(3622,3625.5,(t)=>{const u=t-3622;ctx.fillStyle=lg(0,H,['#0f2a22','#1f4a3c','#0a1e18']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,190,A)',.22);
  CAM(W/2,H*.46,lerp(1.2,1.3,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.4);s7LucasMsg(seg(u,.1,.4),'Fugiu de novo? 😒|Quarta, 19h.|Última chance.');ctx.restore()});
  if(u>2.0){const k=easeBack(seg(u,2.0,2.3));ctx.save();ctx.translate(W/2,1470);ctx.scale(k,k);txtC('ÚLTIMA CHANCE ⏰',0,0,'900 96px Inter','#ffd84a',18);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3624.1);
// 6. por causa de vocês, ele vai ter que falar com a própria voz: Matheus 🧡 — QUARTA 19H — Lucas 💚 (3626–3629.5)
scene(3626,3629.5,(t)=>{const u=t-3626;ctx.fillStyle=lg(0,H,['#ff9a6a','#ffc48a','#ffe0b0']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(255,250,220,A)',.4);
  CAM(W/2,H*.55,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{
    const circ=(x,fn,col)=>{ctx.save();ctx.beginPath();ctx.arc(x,1000,190,0,7);ctx.fillStyle=col;ctx.fill();ctx.clip();fn();ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.arc(x,1000,190,0,7);ctx.stroke()};
    const p=easeOut(seg(u,.2,1.0));circ(lerp(120,260,p),()=>face(lerp(120,260,p),1090,.4,{smile:-2,brow:.3}),'#ffe0c8');circ(lerp(960,820,p),()=>luFace(lerp(960,820,p),1090,.4,{smile:-6,brow:-.5}),'#cfeee0');
    const k=easeBack(seg(u,.9,1.2));ctx.save();ctx.translate(540,1000);ctx.scale(k,k);ctx.fillStyle='#16161c';ctx.beginPath();ctx.arc(0,0,120,0,7);ctx.fill();txtC('QUARTA',0,-30,'900 40px Oswald','#fff');txtC('19H',0,30,'900 66px Oswald','#ffd84a');ctx.restore()});
  txtC('POR CAUSA DE VOCÊS 👆',W/2,320,'900 66px Inter','#fff',16);
  if(u>1.6){const k=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#2f55c8';rr(-420,-64,840,128,34);ctx.fill();txtC('COM A PRÓPRIA VOZ 🗣️',0,2,'900 60px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 8. terça, sete da manhã: bobes no cabelo e chinelo de pelúcia (3630–3633.5)
scene(3630,3633.5,(t)=>{const u=t-3630;const op=u<.4?0:u<.6?.3:easeOut(seg(u,.7,1.1));const m=easeIO(seg(u,1.4,2.6));
  CAM(W/2,lerp(H*.5,H*.42,m),1.0+m*.04,()=>{s9Room(u);
    // cama com colcha de crochê
    ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(90,1120,900,340,90);ctx.fill();ctx.stroke();
    cidaFace(380,1210,.62,{headOnly:true,open:op*1.1,lid:op>.3?lerp(.4,0,seg(u,.9,1.4)):0,brow:op>.9?.7:0,mouthO:op>.9?.4:0,px:op>.9?30:0});
    ctx.fillStyle='#f6a8c4';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-20,1360,W+40,160,40);ctx.fill();ctx.stroke();
    ctx.strokeStyle='rgba(255,255,255,.6)';ctx.lineWidth=5;for(let i=0;i<10;i++){ctx.beginPath();ctx.arc(60+i*105,1430,34,0,7);ctx.stroke()}
    s9Slipper(400,1610,1.0,false);s9Slipper(660,1620,1.0,true)});
  if(u>.9&&u<2.0){const k=easeBack(seg(u,.9,1.2));ctx.save();ctx.translate(W/2,330);ctx.scale(k,k);ctx.fillStyle='#c8356a';rr(-340,-64,680,128,34);ctx.fill();txtC('BOBES?! 😳',0,2,'900 70px Inter','#fff');ctx.restore()}
  if(u>2.0){const k=easeBack(seg(u,2.0,2.3));ctx.save();ctx.translate(W/2,330);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-440,-64,880,128,34);ctx.fill();txtC('CHINELO DE PELÚCIA 🐰',0,2,'900 58px Inter','#ffd84a');ctx.restore()}
  grade('rgba(255,220,230,.18)','rgba(120,60,80,.12)');letterIn(u);
});
// 9. no espelho: uma vovozinha de óculos vermelhos (3634–3637.5)
scene(3634,3637.5,(t)=>{const u=t-3634;const z=lerp(1.0,1.12,easeOut(seg(u,.3,.7)));const sh=(u>.3&&u<.8)?Math.sin(u*80)*10:0;
  CAM(W/2+sh,H*.5,z,()=>{ctx.fillStyle=lg(0,H,['#ffe0ec','#f8c8dc','#e9a8c4']);ctx.fillRect(0,0,W,H);
    ctx.save();ctx.beginPath();rr(150,260,780,1300,380);ctx.clip();ctx.fillStyle=lg(260,1560,['#cfe2ee','#a9c4d6']);ctx.fillRect(150,260,780,1300);
    cidaFront(540,1430,3.0,{look:0,eye:1.3,brow:1,mouthO:.7});
    ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.moveTo(150,260);ctx.lineTo(480,260);ctx.lineTo(150,900);ctx.closePath();ctx.fill();ctx.restore();
    ctx.strokeStyle='#c98f5e';ctx.lineWidth=28;ctx.beginPath();rr(150,260,780,1300,380);ctx.stroke()});
  if(u>.3&&u<.5){ctx.fillStyle=`rgba(255,255,255,${.6*(1-seg(u,.3,.5))})`;ctx.fillRect(0,0,W,H)}
  if(u>.8){const k=easeBack(seg(u,.8,1.1));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);txtC('VOVOZINHA?! 😱',0,0,'900 92px Inter','#ffd84a',18);ctx.restore()}
  if(u>1.6){const k=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(W/2,1700);ctx.scale(k,k);ctx.fillStyle='#d0303a';rr(-380,-60,760,120,30);ctx.fill();txtC('ÓCULOS VERMELHOS 👓',0,2,'900 54px Inter','#fff');ctx.restore()}
});
SHAKE.push(3634.32);
// 10. "HOJE ELE É: DONA CIDA" — crachá girando (3638–3641.5)
scene(3638,3641.5,(t)=>{const u=t-3638;ctx.fillStyle=lg(0,H,['#5a1a3a','#a8305a','#3a0a24']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,190,220,A)',.28);
  const sp=lerp(Math.PI*2,0,easeOut(seg(u,0,1.0)));CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{ctx.save();ctx.translate(W/2,H*.52);ctx.scale(Math.cos(sp),1);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-330,-430,660,860,30);ctx.fill();ctx.stroke();
    ctx.fillStyle='#c8356a';ctx.beginPath();rr(-330,-430,660,150,30);ctx.fill();ctx.fillRect(-330,-320,660,40);ctx.fillStyle='#fff';ctx.font='800 50px Oswald';ctx.textAlign='center';ctx.fillText('HOJE ELE É',0,-335);
    ctx.save();ctx.beginPath();rr(-170,-240,340,340,20);ctx.clip();ctx.fillStyle='#ffe0ec';ctx.fillRect(-170,-240,340,340);cidaFace(0,-10,.27,{smile:12});ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-240,340,340,20);ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 66px Inter';ctx.fillText('DONA',0,180);ctx.fillText('CIDA',0,250);ctx.fillStyle='#c8356a';ctx.font='800 46px Inter';ctx.fillText('a avó do Lucas 💚',0,325);ctx.restore()});
  letterIn(u);
});
// 11. foi ela que criou o Lucas: foto antiga, a avó com o Lucas pequeno no colo (3642–3645.5)
scene(3642,3645.5,(t)=>{const u=t-3642;ctx.fillStyle=lg(0,H,['#ffd9a0','#ffb88a','#f08a7a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,250,220,A)',.4);
  CAM(W/2,H*.5,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.47);ctx.rotate(-.03);softShadow(8,470,380,20,.3);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillRect(-380,-460,760,920);ctx.strokeRect(-380,-460,760,920);
    ctx.save();ctx.beginPath();ctx.rect(-340,-420,680,680);ctx.clip();ctx.fillStyle=lg(-420,260,['#f4e0b0','#e8c890']);ctx.fillRect(-340,-420,680,680);
    withP(Object.assign({},CIDA,{hair:'#5a4a44',hairL:'#7a6a64'}),()=>face(-90,-40,.42,{smile:16}));ctx.save();ctx.translate(-90,-40);ctx.scale(.42,.42);cidaDress();ctx.restore();
    luFace(150,140,.26,{smile:20});
    ctx.fillStyle='rgba(160,110,60,.18)';ctx.fillRect(-340,-420,680,680);ctx.restore();ctx.strokeRect(-340,-420,680,680);
    ctx.fillStyle='#3a3a48';ctx.font='600 76px Caveat';ctx.textAlign='center';ctx.fillText('eu e o Lucas · 2006',0,370);ctx.restore()});
  if(u>.4){const k=easeBack(seg(u,.4,.7));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-400,-64,800,128,34);ctx.fill();txtC('A VÓ QUE CRIOU ELE 💚',0,2,'900 56px Inter','#ffd84a');ctx.restore()}
  letterIn(u);
});
// 12. "E repara no relógio. Meia-noite. O décimo!" — câmera vai até o relógio do quarto (3646–3649.5)
scene(3646,3649.5,(t)=>{const u=t-3646;const m=easeIO(seg(u,.2,1.8));CAM2(...((z)=>[Math.min(Math.max(lerp(W/2,220,m),540/z),W-540/z),Math.min(Math.max(lerp(H*.5,610,m),960/z),H-960/z),z])(lerp(1.0,2.4,m)),()=>s9Room(u));
  if(u>1.9){const k=seg(u,1.9,2.2);ctx.fillStyle=`rgba(20,16,40,${.96*k})`;ctx.fillRect(0,0,W,H);
    const L=['QUARTO','DIRETORA','LUCAS','RECEPÇÃO','PADARIA','PORTARIA','BIA','MÃE','PROFESSORA','AVÓ'];L.forEach((l,i)=>{const kk=easeBack(seg(u,2.0+i*.06,2.25+i*.06));if(kk<=0)return;const x=i<9?190+(i%3)*350:540,y=640+Math.floor(i/3)*260;ctx.save();ctx.translate(x,y);ctx.scale(kk,kk);clockFace(0,0,70,0,0);txtC(l,0,112,'900 28px Inter',i===9?'#ffd84a':'#cbb8ff',0);ctx.restore()});
    const k2=easeBack(seg(u,2.5,2.8));ctx.save();ctx.translate(W/2,380);ctx.scale(k2,k2);txtC('10º RELÓGIO',0,-60,'900 96px Inter','#ffd84a',16);txtC('PARADO! 00:00',0,50,'900 76px Inter','#fff',14);ctx.restore()}
  else{ctx.save();ctx.globalAlpha=seg(u,.1,.5);txtC('REPARA... 👀',W/2,1460,'900 90px Inter','#ffd84a',16);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3648.5);
// 13. aí o celular toca: o número do Matheus (3650–3653.5)
scene(3650,3653.5,(t)=>{const u=t-3650;ctx.fillStyle=lg(0,H,['#fde6ee','#f6d2de','#ecbccc']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,700,'rgba(255,120,150,A)',.15);
  const vb=Math.sin(u*70)*(u%1<.6?6:0);CAM(W/2+vb,H*.55,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>cidaFace(W/2,H*.64,.8,{open:1.25,brow:.9,mouthO:.35}));
  s2cCall(u,'MATHEUS','chamada recebida',seg(u,.1,.4));
  if(u%1<.6){ctx.save();ctx.translate(W/2,560);const k=1+.06*Math.sin(u*30);ctx.scale(k,k);txtC('TRIIIM! 📞',0,0,'900 110px Inter','#c8352b',18);ctx.restore()}
  letterIn(u);
});
// 14. [telefone] "Matheus, é a Cida! Seu corpo não sabe fazer crochê!" — o rosto do Matheus com a avó dentro, novelo embolado (3654–3657.5)
scene(3654,3657.5,(t)=>{const u=t-3654;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.6,lerp(1.0,1.06,seg(u,0,3.5)),()=>{face(W/2,H*.64,.85,{open:1.3,brow:1,mouthO:.4+.3*Math.abs(Math.sin(u*9)),px:Math.sin(u*3)*8});
    // novelo de lã embolado na frente do moletom
    ctx.save();ctx.translate(300,1720);ctx.fillStyle='#ff6aa2';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.arc(0,0,90,0,7);ctx.fill();ctx.stroke();ctx.strokeStyle='#c8356a';ctx.lineWidth=6;for(let i=0;i<6;i++){ctx.beginPath();ctx.arc(0,0,30+i*10,i,i+2.4);ctx.stroke()}
    ctx.strokeStyle='#ff6aa2';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(80,-30);for(let i=0;i<9;i++)ctx.quadraticCurveTo(140+i*50,-120+Math.sin(i*2+u*3)*70,160+i*52,-40+Math.cos(i*3)*60);ctx.stroke();ctx.restore()});
  s2cCall(u,'MATHEUS','chamada · 00:0'+Math.min(9,Math.floor(u*2+1)),1);
  s2bBubble(W/2,640,860,200,seg(u,.4,.7),'É A CIDA! SEU CORPO|NÃO SABE CROCHÊ! 🧶','#c8356a',-80);
  cidaInside(W-210,1460);letterIn(u);
});
// 15. [telefone] "O Lucas vem almoçar! Faz o bolo de fubá!" (3658–3661.5)
scene(3658,3661.5,(t)=>{const u=t-3658;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.62,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>{face(W/2,H*.68,.8,{open:1.15,brow:.5,mouthO:.3+.3*Math.abs(Math.sin(u*8)),px:-14});
    for(let i=0;i<4;i++){const k=seg(u,.4+i*.3,1.8+i*.3);if(k<=0||k>=1)continue;ctx.save();ctx.globalAlpha=1-k;txtC(i%2?'🍰':'🌽',220+i*220,1250-k*400,'900 90px Inter','#fff');ctx.restore()}});
  s2cCall(u,'MATHEUS','chamada · 00:1'+Math.min(9,Math.floor(u*2)),1);
  s2bBubble(W/2,640,860,200,seg(u,.3,.6),'O LUCAS VEM ALMOÇAR!|FAZ O BOLO DE FUBÁ! 🍰','#c8356a',-80);
  cidaInside(W-210,1460);letterIn(u);
});
// 16. ele nunca fez um bolo na vida: a avó (Matheus dentro) olhando a receita, confusa (3662–3665.5)
scene(3662,3665.5,(t)=>{const u=t-3662;CAM(W/2,H*.55,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{s9Kitchen(u);
    cidaFront(720,1440,2.7,{look:-.4,eye:1.2,brow:.9,mouthO:.25});
    // bancada na frente (esconde as pernas) com o caderno de receitas
    ctx.fillStyle='#c98f5e';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillRect(-20,1380,W+40,140);ctx.strokeRect(-20,1380,W+40,140);ctx.fillStyle='#a8744a';ctx.fillRect(-20,1520,W+40,420);
    ctx.save();ctx.translate(330,1330);ctx.rotate(-.06);ctx.fillStyle='#fffdf2';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(-190,-90,380,150);ctx.strokeRect(-190,-90,380,150);ctx.beginPath();ctx.moveTo(0,-90);ctx.lineTo(0,60);ctx.stroke();
    ctx.fillStyle='#c8356a';ctx.font='700 40px Caveat';ctx.textAlign='center';ctx.fillText('Bolo de fubá',-95,-40);ctx.fillStyle='#3a3a48';ctx.font='600 28px Caveat';['3 ovos','2 xíc. fubá','1 xíc. açúcar'].forEach((l,i)=>ctx.fillText(l,95,-46+i*34));ctx.restore();
    for(let i=0;i<3;i++){const k=seg(u,.5+i*.35,1.2+i*.35);if(k<=0)continue;ctx.save();ctx.globalAlpha=clamp(k*3);txtC('?',590+i*150,560-easeOut(clamp(k))*60+(i%2)*40,'900 110px Inter','#2f55c8',12);ctx.restore()}});
  if(u>1.4){const k=easeBack(seg(u,1.4,1.7));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-420,-64,840,128,34);ctx.fill();txtC('NUNCA FEZ UM BOLO 😅',0,2,'900 60px Inter','#ffd84a');ctx.restore()}
  letterIn(u);
});
// 17. farinha pra todo lado! (3666–3669.5)
scene(3666,3669.5,(t)=>{const u=t-3666;const sh=u>.3&&u<.8?Math.sin(u*90)*12:0;
  CAM(W/2+sh,H*.55,lerp(1.1,1.0,easeOut(seg(u,.3,1))),()=>{s9Kitchen(u);
    const fl=seg(u,.3,1.2);cidaFace(W/2,1200,.7,{open:u>.4?.25:1.1,brow:u>.4?1:.2,mouthO:u>.4?.7:0,smile:u>.4?-6:0});
    // rosto e óculos empoeirados de farinha
    if(u>.35){ctx.save();ctx.globalAlpha=clamp((u-.35)*3)*.75;ctx.fillStyle='#fffdf6';for(let i=0;i<60;i++){const r=rng(i+3666);ctx.beginPath();ctx.arc(W/2+(r()-.5)*400,1200+(r()-.6)*420,8+r()*16,0,7);ctx.fill()}ctx.restore()}
    // nuvem de farinha explodindo
    if(u>.3){for(let i=0;i<46;i++){const r=rng(i+3670);const a=r()*6.283,d=easeOut(fl)*(250+r()*520);ctx.save();ctx.globalAlpha=(1-seg(u,1.6,3.4))*.85;ctx.fillStyle='#fffdf6';ctx.beginPath();ctx.arc(W/2+Math.cos(a)*d,1500+Math.sin(a)*d*.7-u*40,22+r()*40,0,7);ctx.fill();ctx.restore()}}
    // tigela e pacote de fubá na frente
    ctx.fillStyle='#c98f5e';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillRect(-20,1560,W+40,400);ctx.strokeRect(-20,1560,W+40,400);
    ctx.fillStyle='#8fc6e8';ctx.beginPath();ctx.moveTo(380,1540);ctx.lineTo(700,1540);ctx.quadraticCurveTo(680,1680,540,1690);ctx.quadraticCurveTo(400,1680,380,1540);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.save();ctx.translate(820,1500);ctx.rotate(.5);ctx.fillStyle='#ffd84a';rr(-60,-90,120,180,10);ctx.fill();ctx.stroke();txtC('FUBÁ',0,0,'900 30px Inter','#c8352b',0);ctx.restore()});
  if(u>.6){const k=easeBack(seg(u,.6,.9));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#c8352b';rr(-450,-64,900,128,34);ctx.fill();txtC('FARINHA PRA TODO LADO 💨',0,2,'900 56px Inter','#fff');ctx.restore()}
  if(u>.3&&u<.45){ctx.fillStyle=`rgba(255,255,255,${.7*(1-seg(u,.3,.45))})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(3666.32);
// 18. na janela, o gato laranja: ele sabe quem é (3670–3673.5)
scene(3670,3673.5,(t)=>{const u=t-3670;CAM2(...((z)=>[Math.min(Math.max(660,540/z),W-540/z),Math.min(Math.max(560,960/z),H-960/z),z])(lerp(1.9,2.05,easeIO(seg(u,0,3.5)))),()=>s9Kitchen(u,{cat:()=>s2bCatFace(650,600,.34,u,{blink:u<.4||(u>2.6&&u<2.72),meow:u>1.0&&u<1.8?Math.sin(seg(u,1.0,1.8)*Math.PI):0,tilt:Math.sin(u*1.2)*.06})}));
  for(let i=0;i<5;i++){const k=seg(u,1.3+i*.25,2.6+i*.25);if(k<=0||k>=1)continue;const x=i%2?110:970,y=1500-k*500-i*40;ctx.save();ctx.globalAlpha=1-k;txtC('💙',x,y,'900 70px Inter','#fff');ctx.restore()}
  if(u>1.0)s2bBubble(W/2,1420,560,160,seg(u,1.0,1.3),'MIAU! (é você!)','#e8752a',-60);
  letterIn(u);
});
// 19. meio-dia: a campainha toca, a porta abre — é o Lucas (3674–3677.5)
scene(3674,3677.5,(t)=>{const u=t-3674;const p=seg(u,1.2,2.0);
  CAM(W/2,H*.55,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>s9Door(u,p,()=>luFront(560,1330,2.6,{look:0,smile:10})));
  if(u<1.3&&u%.5<.3){ctx.save();ctx.translate(W/2,330);const k=1+.05*Math.sin(u*30);ctx.scale(k,k);txtC('DING DONG! 🔔',0,0,'900 100px Inter','#c8352b',16);ctx.restore()}
  if(u>2.0){const k=easeBack(seg(u,2.0,2.3));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#2c6c5b';rr(-300,-64,600,128,34);ctx.fill();txtC('O LUCAS! 💚',0,2,'900 70px Inter','#fff');ctx.restore()}
  ctx.save();ctx.globalAlpha=seg(u,0,.4)*(1-seg(u,1.0,1.3));txtC('MEIO-DIA',W/2,1560,'800 76px Oswald','#fff',12);ctx.restore();
  letterIn(u);
});
// 20. "Oi, vó! Que cheiro de bolo... queimado?" — o Lucas de perto, fumacinha atrás (3678–3681.5)
scene(3678,3681.5,(t)=>{const u=t-3678;ctx.fillStyle=lg(0,H,['#eaf6ea','#d6ecd8','#c2e0c6']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,255,240,A)',.3);
  for(let i=0;i<6;i++){const ph=(u*.5+i/6)%1;ctx.save();ctx.globalAlpha=(1-ph)*.45;ctx.fillStyle='#8a8a92';ctx.beginPath();ctx.arc(120+i*170+Math.sin(ph*6+i)*30,1500-ph*900,40+ph*60,0,7);ctx.fill();ctx.restore()}
  CAM(W/2,H*.55,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>luFace(W/2,H*.66,.78,{smile:u<1.6?14:-4,brow:u<1.6?.2:.6,open:u<1.6?1:1.2,px:u>1.6?-20:0,py:u>1.6?-10:0}));
  s2bBubble(W/2,560,860,200,seg(u,.2,.5),'OI, VÓ! QUE CHEIRO DE|BOLO... QUEIMADO? 😅','#2c6c5b',-60);
  letterIn(u);
});
// 21. na mesa, o Lucas desabafa (3682–3685.5)
scene(3682,3685.5,(t)=>{const u=t-3682;CAM(W/2,lerp(H*.58,H*.6,seg(u,0,3.5)),lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>s9Table(u,{smoke:true,ls:-8,lb:-.2,lpx:-10,lm:u>1.0?.2+.15*Math.abs(Math.sin(u*8)):0}));
  if(u>.5){const k=easeBack(seg(u,.5,.8));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-320,-64,640,128,34);ctx.fill();txtC('O DESABAFO 💬',0,2,'900 66px Inter','#ffd84a');ctx.restore()}
  mtInside(W/2,1560);letterIn(u);
});
// 22. "Vó, o Matheus remarcou. Acho que eu nem vou." (3686–3689.5)
scene(3686,3689.5,(t)=>{const u=t-3686;ctx.fillStyle=lg(0,H,['#1f4a3c','#2c6c5b','#163a2e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(160,255,200,A)',.2);
  CAM(W/2,H*.55,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>luFace(W/2,H*.66,.78,{smile:-10,brow:-.3,py:16,px:-6,mouthO:u<2.6?.18+.2*Math.abs(Math.sin(u*8)):0}));
  s2bBubble(W/2,560,880,200,seg(u,.2,.5),'O MATHEUS REMARCOU.|ACHO QUE NEM VOU. 😔','#2c6c5b',-60);
  letterIn(u);
});
// 23. "Não é o dinheiro. É que ele não me contou." (3690–3693.5)
scene(3690,3693.5,(t)=>{const u=t-3690;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(140,170,255,A)',.25);
  const m=easeIO(seg(u,0,3.5));CAM(W/2,H*.58,lerp(1.0,1.12,m),()=>luFace(W/2,H*.68,.78,{smile:-14,brow:.4,py:20,open:.9,mouthO:u<2.6?.15+.2*Math.abs(Math.sin(u*8)):0}));
  ctx.save();ctx.globalAlpha=seg(u,.2,.5);ctx.fillStyle='rgba(255,255,255,.95)';rr(70,330,940,130,34);ctx.fill();txtC('NÃO É O DINHEIRO.',W/2,398,'900 64px Inter','#16161c',0);ctx.restore();
  if(u>1.3){const k=easeBack(seg(u,1.3,1.6));ctx.save();ctx.translate(W/2,560);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-470,-64,940,128,34);ctx.fill();txtC('É QUE ELE NÃO ME CONTOU.',0,2,'900 56px Inter','#16161c');ctx.restore()}
  letterIn(u);
});
SHAKE.push(3691.35);
// 24. ele tá ouvindo o melhor amigo... sem o amigo saber: a avó (Matheus dentro), olhos marejados (3694–3697.5)
scene(3694,3697.5,(t)=>{const u=t-3694;ctx.fillStyle=lg(0,H,['#5a1a3a','#8a3060','#3a0a24']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(255,200,230,A)',.3);
  CAM(W/2,H*.56,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{cidaFace(W/2,H*.66,.8,{open:1.05,brow:.7,smile:-4,py:6});
    // lágrima brilhando no canto do olho (sem choro forte)
    const k=seg(u,.8,1.6);if(k>0){ctx.save();ctx.translate(W/2-100*.8,H*.66+60*.8+k*30);ctx.fillStyle='rgba(160,210,255,.9)';ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(0,-20);ctx.quadraticCurveTo(16,6,0,16);ctx.quadraticCurveTo(-16,6,0,-20);ctx.fill();ctx.stroke();ctx.restore()}});
  txtC('ELE TÁ OUVINDO TUDO 😶',W/2,320,'900 64px Inter','#fff',16);
  if(u>1.6){const k=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(W/2,450);ctx.scale(k,k);txtC('...SEM O LUCAS SABER',0,0,'900 60px Inter','#ffd84a',14);ctx.restore()}
  mtInside(W/2,600);letterIn(u);
});
// 25. "E você? Já ouviu o que alguém sente por você?" (3698–3701.5)
scene(3698,3701.5,(t)=>{const u=t-3698;ctx.fillStyle=lg(0,H,['#c8356a','#ff7ab0','#a8306a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,230,250,A)',.3);
  CAM(W/2,H*.52,lerp(1.12,1.0,easeOut(seg(u,0,.8))),()=>cidaFace(W/2,H*.64,.8,{open:1.15,brow:.6,smile:lerp(0,6,seg(u,.6,1)),px:0,py:6}));
  const k=easeBack(seg(u,.2,.6));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);txtC('E VOCÊ? 👀',0,0,'900 120px Inter','#fff',20);ctx.restore();
  if(u>1.0){ctx.save();ctx.globalAlpha=seg(u,1.0,1.4);txtC('JÁ OUVIU O QUE ALGUÉM',W/2,440,'900 58px Inter','#ffd84a',14);txtC('SENTE POR VOCÊ? 🤔',W/2,520,'900 58px Inter','#ffd84a',14);ctx.restore()}
  letterIn(u);
});
// 26. aí o celular vibra na mesa: número desconhecido (3702–3705.5)
scene(3702,3705.5,(t)=>{const u=t-3702;
  CAM(W/2,H*.62,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>s9Table(u,{phone:true,buzz:u%1<.6,cpx:30,lpx:20,cs:0,ls:-6,cb:.6,lb:.4}));
  if(u%1<.6){ctx.save();ctx.translate(W/2,320);const k=1+.06*Math.sin(u*30);ctx.scale(k,k);txtC('BZZZ! 📳',0,0,'900 100px Inter','#c8352b',16);ctx.restore()}
  if(u>1.6){const k=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(W/2,460);ctx.scale(k,k);ctx.fillStyle='#7a5cff';rr(-430,-60,860,120,30);ctx.fill();txtC('NÚMERO DESCONHECIDO ❓',0,2,'900 52px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 27. [carta] "Amanhã, a última vida. A sua." — assinado M. (3706–3709.5)
scene(3706,3709.5,(t)=>{const u=t-3706;ctx.fillStyle=lg(0,H,['#1a1430','#2e2450','#120e22']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(180,150,255,A)',.3);
  CAM(W/2,H*.5,lerp(1.15,1.3,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.42);s6Msg(seg(u,.1,.4),'Amanhã, a última|vida. A sua.',u>2.2?'— M.':'');ctx.restore()});
  if(u>2.4){const k=easeBack(seg(u,2.4,2.7));ctx.save();ctx.translate(W/2,1480);ctx.scale(k,k);txtC('O MESMO "M."! 😳',0,0,'900 90px Inter','#ffd84a',18);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3708.4);
// 28. amanhã ele volta a ser ele mesmo?! — o Matheus de verdade, com brilho (3710–3713.5)
scene(3710,3713.5,(t)=>{const u=t-3710;ctx.fillStyle=lg(0,H,['#ff9a6a','#ffc48a','#ffe0b0']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(255,250,220,A)',.5);beams(W/2,200,1.57,5,1500,.08);
  const k0=easeBack(seg(u,.1,.6));CAM(W/2,H*.56,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.66);ctx.scale(k0,k0);face(0,0,.72,{open:1.3,brow:1,mouthO:.5,smile:10});ctx.restore()});
  txtC('AMANHÃ...',W/2,300,'900 80px Inter','#fff',16);
  if(u>1.0){const k=easeBack(seg(u,1.0,1.3));ctx.save();ctx.translate(W/2,430);ctx.scale(k,k);txtC('ELE MESMO?! 🧡',0,0,'900 100px Inter','#ffd84a',18);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3711.05);
// 29. mas agora o Lucas espera a resposta da vó (3714–3717.5)
scene(3714,3717.5,(t)=>{const u=t-3714;CAM(W/2,H*.6,lerp(1.0,1.05,easeIO(seg(u,0,3.5))),()=>s9Table(u,{cake:true,ls:-2,lb:.5,lpx:-24,cpx:22,cs:0,cb:.5}));
  s2bBubble(820,560,520,170,seg(u,.3,.6),'E AÍ, VÓ? 🥺','#2c6c5b',60);
  if(u>1.4){const k=easeBack(seg(u,1.4,1.7));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-430,-60,860,120,30);ctx.fill();txtC('O QUE A VÓ RESPONDE?',0,2,'900 54px Inter','#ffd84a');ctx.restore()}
  letterIn(u);
});
// 30. A?: ela manda o Lucas perdoar (3718–3721.5)
scene(3718,3721.5,(t)=>{const u=t-3718;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.25);
  CAM(W/2,H*.56,lerp(1.0,1.06,seg(u,0,3.5)),()=>cidaFace(W/2,H*.68,.78,{brow:-.2,smile:2,mouthO:u>.5&&u<2.4?.25+.2*Math.abs(Math.sin(u*9)):0,px:-10}));
  txtC('A?',W/2,300,'900 110px Inter','#7dffa8',20);
  s2bBubble(W/2,560,800,170,seg(u,.5,.8),'PERDOA ELE, LUCAS!','#1f8a4a',-60);
  letterIn(u);
});
// 31. ele obedece a vó... mas o perdão não é de verdade (3722–3725.5)
scene(3722,3725.5,(t)=>{const u=t-3722;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.25);
  CAM(W/2,H*.55,lerp(1.0,1.06,seg(u,0,3.5)),()=>luFace(W/2,H*.64,.78,{smile:u<1.6?4:-6,brow:u<1.6?.3:-.2,open:u<1.6?1:.85,px:u<1.6?0:24}));
  if(u>.3&&u<1.6){const k=easeBack(seg(u,.3,.6));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#fff';rr(-300,-64,600,128,34);ctx.fill();txtC('TÁ BOM, VÓ...',0,2,'900 66px Inter','#1f8a4a');ctx.restore()}
  if(u>1.6){const k=easeBack(seg(u,1.6,1.85));ctx.save();ctx.translate(W/2,330);ctx.rotate(-.06);ctx.scale(k,k);ctx.strokeStyle='#ffd84a';ctx.lineWidth=12;rr(-460,-80,920,160,20);ctx.stroke();txtC('NÃO É DE VERDADE 😶',0,4,'900 70px Inter','#ffd84a',8);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3723.65);
// 32. B?: pedir só que ele vá na quarta e escute o Matheus (3726–3729.5)
scene(3726,3729.5,(t)=>{const u=t-3726;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(140,170,255,A)',.3);
  CAM(W/2,H*.56,lerp(1.0,1.06,seg(u,0,3.5)),()=>cidaFace(W/2,H*.68,.78,{brow:.4,smile:8,mouthO:u>.5&&u<2.4?.22+.2*Math.abs(Math.sin(u*8)):0,px:10}));
  txtC('B?',W/2,300,'900 110px Inter','#ffd84a',20);
  s2bBubble(W/2,580,800,200,seg(u,.5,.8),'VAI NA QUARTA|E ESCUTA ELE. 👂','#2f55c8',-60);
  letterIn(u);
});
// 33. mas aí o Lucas pode não perdoar (3730–3733.5)
scene(3730,3733.5,(t)=>{const u=t-3730;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);
  const sh=u>1.2&&u<1.5?Math.sin(u*80)*8:0;CAM(W/2+sh,H*.55,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>luFace(W/2,H*.64,.78,{open:lerp(1,1.15,seg(u,.2,.6)),brow:lerp(0,.6,seg(u,1.0,1.4)),smile:-8,px:-16}));
  s2bBubble(W/2,600,760,220,seg(u,.3,.6),'E SE EU NÃO|PERDOAR? 🤔','#2c6c5b',-60);
  letterIn(u);
});
SHAKE.push(3731.2);
// 34. "Perdão de verdade não se manda. Se conquista." — Matheus e Lucas se aproximando, luz entre eles (3734–3737.5)
scene(3734,3737.5,(t)=>{const u=t-3734;ctx.fillStyle=lg(0,H,['#2a1a40','#5a3a6a','#ffb88a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,900,'rgba(255,230,180,A)',.45);beams(W/2,200,1.57,5,1500,.07);
  CAM(W/2,H*.56,lerp(1.0,1.05,easeIO(seg(u,0,3.5))),()=>{
    const circ=(x,fn,col)=>{ctx.save();ctx.beginPath();ctx.arc(x,1100,190,0,7);ctx.fillStyle=col;ctx.fill();ctx.clip();fn();ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.arc(x,1100,190,0,7);ctx.stroke()};
    const p=easeOut(seg(u,.3,2.4));circ(lerp(160,320,p),()=>face(lerp(160,320,p),1190,.4,{smile:6,px:14}),'#ffe0c8');circ(lerp(920,760,p),()=>luFace(lerp(920,760,p),1190,.4,{smile:2,px:-14}),'#cfeee0');
    if(u>2.2){const k=easeBack(seg(u,2.2,2.5));ctx.save();ctx.translate(540,1100);ctx.scale(k,k);txtC('💚',0,0,'900 110px Inter','#fff');ctx.restore()}});
  txtC('PERDÃO NÃO SE MANDA...',W/2,300,'900 64px Inter','#fff',16);
  if(u>1.5){const k=easeBack(seg(u,1.5,1.8));ctx.save();ctx.translate(W/2,430);ctx.scale(k,k);txtC('...SE CONQUISTA 💚',0,0,'900 80px Inter','#ffd84a',14);ctx.restore()}
  letterIn(u);
});
// 35/36. ESCOLHA: A (verde) x B — sobre o rosto da avó (3738–3745)
scene(3738,3745,(t)=>{const u=t-3738;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  cidaFace(W/2,H*.72,.75,{open:1,brow:.5,px:-20,py:10});ctx.fillStyle='rgba(10,8,14,.68)';ctx.fillRect(0,0,W,H);
  txtC('O QUE A VÓ DIZ?',W/2,320,'900 86px Inter','#fff',18);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));ctx.textAlign='left';
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,140,80,.95)';rr(70,430,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('A',120,590);ctx.font='800 50px Inter';ctx.fillText('mandar o Lucas',250,530);ctx.fillText('PERDOAR ☝️',250,595);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(60,90,200,.95)';rr(70,690,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('B',120,850);ctx.font='800 50px Inter';ctx.fillText('pedir que ele vá',250,790);ctx.fillText('E ESCUTE 👂',250,855);ctx.restore();
  if(u>1.4){const k=.5+.5*Math.sin(u*5);ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('COMENTA A OU B 👇',W/2,1080,'900 74px Inter',`rgb(255,${200+55*k},74)`,16);ctx.restore()}
});
// FINAL: cartela da série (3790–3793.2)
scene(3790,3793.2,(t)=>{const u=t-3790;ctx.fillStyle='#07070c';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,50,W/2,H*.42,900);g.addColorStop(0,'rgba(255,190,90,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.36);ctx.scale(k,k);ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='900 92px Inter';ctx.fillText('E SE VOCÊ',0,0);ctx.fillText('ACORDASSE NA',0,110);ctx.fillStyle='#ffd84a';ctx.font='900 128px Inter';ctx.fillText('VIDA DE OUTRA',0,250);ctx.fillText('PESSOA?',0,390);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 52px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 10 · O FINAL · AMANHÃ 18H',W/2,H*.36+560);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.36+660);ctx.restore()});
