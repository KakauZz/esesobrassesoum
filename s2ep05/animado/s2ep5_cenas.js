// ===================== SÉRIE 2 · EP. 5 — NO CORPO DA SÍNDICA =====================
// Faixa 2800–2999 (cartão final 2990–2993.2). Consequência do voto B do EP. 4 (o Zé pagou o fiado pelo celular do Matheus):
// a padaria pagou o aluguel (salva!), mas o Zé viu o salário de R$ 9.900 e de manhã a rua inteira sabia.
// Hoje (sexta-feira) o Matheus acorda no corpo da dona Rosa, a síndica do prédio dele (apto 301, vizinha do 302).
// Elementos novos (máx. 2): a dona Rosa e o grupo do prédio (cobrando o portão de R$ 1.800 só dele; ela é ADMIN).
// Pista escondida: o relógio do quarto da dona Rosa parado em 00:00. Ambiente (não falado): folhas voando no portão.

const ROSA={skin:'#f1c6a4',skinS:'#d4a07e',hair:'#e4e4ec',hairL:'#ffffff',hood:'#8a4fa8',hoodS:'#6a3888',pants:'#4a3a5a',pantsS:'#3a2c48'};
// coque branco, óculos e brincos de pérola (coordenadas do face())
function rosaTop(o){o=o||{};ctx.lineJoin='round';
  ctx.fillStyle=ROSA.hair;ctx.strokeStyle=OUT;ctx.lineWidth=11;ctx.beginPath();ctx.ellipse(0,-470,150,115,0,0,7);ctx.fill();ctx.stroke();
  ctx.strokeStyle=ROSA.hairL;ctx.lineWidth=16;ctx.lineCap='round';ctx.beginPath();ctx.arc(0,-470,90,-2.7,-1.4);ctx.stroke();
  ctx.fillStyle='#8a4fa8';ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.beginPath();rr(-90,-382,180,40,20);ctx.fill();ctx.stroke();
  // ruguinhas
  ctx.strokeStyle='rgba(150,90,60,.45)';ctx.lineWidth=7;for(const sx of[-1,1]){for(let k=0;k<2;k++){ctx.beginPath();ctx.moveTo(sx*222,-8+k*26);ctx.lineTo(sx*250,-18+k*34);ctx.stroke()}}
  // brincos
  ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=6;for(const sx of[-1,1]){ctx.beginPath();ctx.arc(sx*292,128,20,0,7);ctx.fill();ctx.stroke()}
  if(o.noGlasses)return;
  ctx.save();ctx.translate(0,8);ctx.rotate(o.tilt||0);
  ctx.fillStyle='rgba(210,235,255,.22)';ctx.strokeStyle='#7a4a2a';ctx.lineWidth=14;
  for(const sx of[-1,1]){ctx.beginPath();ctx.arc(sx*125,0,96,0,7);ctx.fill();ctx.stroke();ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=8;ctx.beginPath();ctx.arc(sx*125,0,66,-2.6,-1.9);ctx.stroke();ctx.strokeStyle='#7a4a2a';ctx.lineWidth=14}
  ctx.beginPath();ctx.moveTo(-30,-6);ctx.quadraticCurveTo(0,-30,30,-6);ctx.stroke();
  ctx.beginPath();ctx.moveTo(-221,-8);ctx.lineTo(-288,12);ctx.moveTo(221,-8);ctx.lineTo(288,12);ctx.stroke();ctx.restore()}
function rosaFace(cx,cy,s,o){o=o||{};withP(ROSA,()=>face(cx,cy,s,o));ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);rosaTop(o);ctx.restore()}
function rosaFront(x,y,s,pose){pose=pose||{};withP(ROSA,()=>personFront(x,y,s,pose));if(pose.back)return;const p=pose.walk;const bob=p!=null?-5*Math.abs(Math.cos(p)):0;
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.translate((pose.look||0)*8,-196+bob);ctx.scale(.16,.16);rosaTop(pose);ctx.restore()}
// selo "DENTRO: DONA ROSA" (a dona Rosa está no corpo do Matheus)
function rosaInside(x,y){ctx.save();ctx.translate(x,y);ctx.fillStyle='rgba(255,255,255,.95)';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-60,340,120,30);ctx.fill();ctx.stroke();
  ctx.save();ctx.beginPath();ctx.arc(-110,0,44,0,7);ctx.clip();ctx.fillStyle='#ead8f2';ctx.fillRect(-160,-50,100,100);rosaFace(-110,20,.1,{headOnly:true,smile:6});ctx.restore();
  ctx.fillStyle='#16161c';ctx.font='900 32px Inter';ctx.textAlign='left';ctx.fillText('DENTRO:',-56,-8);ctx.fillStyle='#8a4fa8';ctx.fillText('DONA ROSA',-56,30);ctx.restore()}
// placar de todas as redes (estilo EP. 10) — EP. 4: venceu B
function s5Placar(u,win){ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(90,140,255,A)',.25);
  txtC('PLACAR DO EP. 4',W/2,300,'900 86px Inter','#fff',16);txtC('somando todas as redes',W/2,390,'700 46px Inter','#bcd',0);
  const NET=[['TikTok','#111','#25f4ee'],['Instagram','#c13584','#fff'],['YouTube','#e62117','#fff']];const TX=['B','bbbbb','B 💸','BBBBB','b!!','é a B','bbb','B 👀','Bbbbb','B'];
  ctx.save();ctx.beginPath();ctx.rect(0,460,W,860);ctx.clip();
  const n=Math.floor(u*6);for(let i=0;i<n;i++){const r=rng(i+2804);const age=u-i/6;const y=1300-age*560;if(y<420)continue;const side=i%2===0;const nt=NET[i%3];const txt=TX[Math.floor(r()*TX.length)];
    ctx.save();ctx.globalAlpha=Math.min(1,age*4);ctx.translate(side?70:590,y);ctx.fillStyle='rgba(255,255,255,.95)';rr(0,-46,420,92,30);ctx.fill();
    ctx.fillStyle=nt[1];ctx.beginPath();ctx.arc(46,0,30,0,7);ctx.fill();ctx.fillStyle=nt[2];ctx.font='900 28px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nt[0][0],46,2);
    ctx.textAlign='left';ctx.fillStyle='#777';ctx.font='700 24px Inter';ctx.fillText(nt[0],90,-16);ctx.fillStyle='#2f55c8';ctx.font='900 40px Inter';ctx.fillText(txt,90,22);ctx.restore()}
  ctx.restore();
  const c=Math.floor(Math.pow(clamp(u/2.9),2.2)*9999);const k=easeBack(seg(u,.1,.4));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-470,-90,940,180,36);ctx.fill();txtC(c>=9999?'+9999 COMENTÁRIOS':'💬 '+c.toLocaleString('pt-BR')+' comentários',0,0,'900 66px Oswald','#16161c');ctx.restore();
  if(win){const k2=easeBack(clamp(win));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(k2,k2);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(-W,-H,W*2,H*2);ctx.fillStyle='rgba(50,85,200,.97)';rr(-470,-260,940,520,46);ctx.fill();
    txtC('VENCEU B',0,-160,'900 110px Inter','#fff');txtC('PAGAR O FIADO 💸',0,-50,'900 60px Inter','#fff');
    ctx.fillStyle='rgba(0,0,0,.22)';rr(-430,10,860,220,26);ctx.fill();txtC('INSTAGRAM B 2 × A 0',0,55,'800 40px Inter','#fff');txtC('TIKTOK B 0 × A 0',0,110,'800 40px Inter','#fff');txtC('TOTAL: B 2 × A 0',0,180,'900 52px Oswald','#ffd84a');ctx.restore()}}
// quarto da dona Rosa (manhã): parede lilás, janela com sol, relógio parado em 00:00 (pista escondida), porta-retrato
function s5Room(u,o){o=o||{};const pan=o.pan||0;ctx.fillStyle=lg(0,H,['#e9d8ef','#dcc6e6','#c3a8d2']);ctx.fillRect(0,0,W,H);
  ctx.save();ctx.translate(-pan,0);
  ctx.strokeStyle='rgba(140,90,160,.12)';ctx.lineWidth=4;for(let x=-200;x<W+600;x+=90){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,1250);ctx.stroke()}
  // janela com sol da manhã
  ctx.save();ctx.beginPath();rr(620,300,420,560,14);ctx.clip();ctx.fillStyle=lg(300,860,['#ffd9a0','#ffeccc','#cfe6f5']);ctx.fillRect(620,300,420,560);semBlur(()=>buildings(71,860,90,260,'#b9c6d8','#fff6dc',.1,0,1));ctx.restore();
  ctx.strokeStyle='#fffdf6';ctx.lineWidth=18;ctx.beginPath();rr(620,300,420,560,14);ctx.stroke();ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(830,300);ctx.lineTo(830,860);ctx.moveTo(620,580);ctx.lineTo(1040,580);ctx.stroke();
  ctx.fillStyle='#c25b8f';ctx.fillRect(570,270,60,620);ctx.fillRect(1030,270,60,620);
  // relógio parado em 00:00
  clockFace(150,400,64,0,0);
  // porta-retrato
  ctx.save();ctx.translate(250,760);ctx.rotate(-.05);ctx.fillStyle='#c9a46a';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(-90,-110,180,220);ctx.strokeRect(-90,-110,180,220);ctx.fillStyle='#bfe0d0';ctx.fillRect(-70,-90,140,180);ctx.fillStyle='#e88a3a';ctx.beginPath();ctx.ellipse(0,40,44,30,0,0,7);ctx.fill();ctx.beginPath();ctx.arc(0,0,26,0,7);ctx.fill();ctx.restore();
  ctx.restore();
  beams(830,320,1.9,4,1500,.06);
  ctx.fillStyle=lg(1250,H,['#a7849a','#80607a']);ctx.fillRect(0,1250,W,H-1250)}
// celular com o grupo do prédio. o:{msgs:[[nome,texto,cor,k]], mine:[texto,k], admin:k, count, bg}
function s5Chat(u,o){o=o||{};ctx.fillStyle=lg(0,H,o.bg||['#ead8f2','#d6bfe4','#b79bcc']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,700,'rgba(255,240,230,A)',.35);
  const vb=o.buzz?Math.sin(u*80)*6:0;ctx.save();ctx.translate(W/2+vb,H*.48);ctx.rotate(-.03);softShadow(30,580,380,60,.4);
  ctx.fillStyle='#0d0e12';rr(-300,-580,600,1160,80);ctx.fill();ctx.strokeStyle='#5a5e6a';ctx.lineWidth=6;ctx.stroke();
  ctx.save();rr(-280,-560,560,1120,64);ctx.clip();ctx.fillStyle='#efe7d8';ctx.fillRect(-280,-560,560,1120);
  ctx.fillStyle='rgba(0,0,0,.035)';for(let i=0;i<40;i++){const r=rng(i+2850);ctx.beginPath();ctx.arc(-280+r()*560,-560+r()*1120,6+r()*10,0,7);ctx.fill()}
  // mensagens (sobem com o scroll)
  let y=-300-(o.scroll||0);(o.msgs||[]).forEach(([nm,tx,col,k])=>{if(!(k>0)){return}const L=tx.split('|');const h=70+L.length*50;ctx.save();ctx.globalAlpha=clamp(k*3);ctx.translate((1-easeOut(clamp(k)))*-40,0);
    ctx.fillStyle='#fff';rr(-250,y,430,h,24);ctx.fill();ctx.fillStyle=col;ctx.font='800 28px Inter';ctx.textAlign='left';ctx.fillText(nm,-224,y+38);ctx.fillStyle='#16161c';ctx.font='700 38px Inter';L.forEach((l,i)=>ctx.fillText(l,-224,y+86+i*50));ctx.restore();y+=h+22});
  if(o.mine&&o.mine[1]>0){const [tx,k]=o.mine;const L=tx.split('|');const h=50+L.length*52;ctx.save();ctx.globalAlpha=clamp(k*3);ctx.fillStyle='#d4f5c0';rr(-170,y,420,h,24);ctx.fill();ctx.fillStyle='#16161c';ctx.font='800 40px Inter';ctx.textAlign='left';L.forEach((l,i)=>ctx.fillText(l,-146,y+64+i*52));ctx.restore()}
  // cabeçalho do grupo
  ctx.fillStyle='#1f7a5c';ctx.fillRect(-280,-560,560,240);ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(-190,-420,50,0,7);ctx.fill();txtC('🏢',-190,-416,'900 54px Inter','#000');
  ctx.textAlign='left';ctx.fillStyle='#fff';ctx.font='900 46px Inter';ctx.fillText('PRÉDIO 🏢',-120,-430);ctx.fillStyle='#bff0dc';ctx.font='700 28px Inter';ctx.fillText('32 vizinhos · '+(o.count||'99+')+' novas',-120,-382);
  if(o.admin>0){const k=easeBack(clamp(o.admin));ctx.save();ctx.translate(0,-250);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.strokeStyle=OUT;ctx.lineWidth=6;rr(-250,-50,500,100,28);ctx.fill();ctx.stroke();txtC('Dona Rosa · ADMIN 👑',0,2,'900 40px Inter','#16161c');ctx.restore()}
  ctx.restore();ctx.restore()}
// corredor do 3º andar: portas 301 (dona Rosa) e 302 (Matheus), de frente
function s5Hall(u,o){o=o||{};ctx.fillStyle=lg(0,H,['#d9cbb8','#cbb9a2','#a8957e']);ctx.fillRect(0,0,W,H);glow(W/2,200,700,'rgba(255,240,200,A)',.35);
  ctx.fillStyle='#fffdf0';ctx.beginPath();rr(420,150,240,50,20);ctx.fill();
  const door=(x,num,col)=>{ctx.fillStyle=col;ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(x,560,300,700);ctx.strokeRect(x,560,300,700);ctx.strokeStyle='rgba(0,0,0,.2)';ctx.lineWidth=5;ctx.strokeRect(x+40,620,220,260);ctx.strokeRect(x+40,920,220,280);
    ctx.fillStyle='#e9d48a';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.beginPath();ctx.arc(x+255,920,16,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#fffdf6';rr(x+90,480,120,60,10);ctx.fill();ctx.stroke();txtC(num,x+150,511,'900 40px Inter','#16161c')};
  door(90,'301','#8a5fa0');door(690,'302','#5a7aa8');
  ctx.fillStyle='#c25b8f';ctx.beginPath();rr(130,1265,220,30,12);ctx.fill();
  ctx.fillStyle=lg(1260,H,['#9a8064','#7a6248']);ctx.fillRect(0,1260,W,H-1260);
  ctx.strokeStyle='rgba(60,40,20,.2)';ctx.lineWidth=3;for(let i=-6;i<14;i++){const x0=W/2+i*120;ctx.beginPath();ctx.moveTo(W/2+(x0-W/2)*.4,1260);ctx.lineTo(W/2+(x0-W/2)*2.2,H);ctx.stroke()}}

// =============================== CENAS ===============================
// 0. GANCHO: o espelho — óculos, coque branco, cara de choque (2800–2803.5)
scene(2800,2803.5,(t)=>{const u=t-2800;const z=lerp(1.18,1.04,easeOut(seg(u,0,.6)))+u*.02,sh=u<.3?Math.sin(u*90)*12:0;
  CAM(W/2+sh,H*.52,z,()=>{ctx.fillStyle=lg(0,H,['#ead8f2','#d6bfe4','#b79bcc']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,230,240,A)',.4);
    rosaFace(540,1010,.92,{open:1.4,brow:1,mouthO:.9,pupil:.6,tilt:.1});
    for(let i=0;i<14;i++){const r=rng(i+2800);ctx.fillStyle='rgba(255,255,255,.6)';ctx.beginPath();ctx.arc(r()*W,(r()*H+u*80)%H,3+r()*4,0,7);ctx.fill()}});
  ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,110,W,430);
  hookTitle('IMAGINE...|ACORDAR NA|SÍNDICA 😳',seg(u,0,.35),240);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.85*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(2800.05);
// 1. placar → VENCEU B (2804–2809.5)
scene(2804,2809.5,(t)=>{const u=t-2804;s5Placar(u,seg(u,3.2,3.6));letterIn(u)});
// 2. ontem: o Zé pagou o fiado pelo celular do Matheus — PIX PAGO (2810–2813.5)
scene(2810,2813.5,(t)=>{const u=t-2810;CAM(W/2,H*.48,lerp(1.0,1.06,seg(u,0,3.5)),()=>{s2Phone(u,{time:'05:45',date:'quinta-feira',screen:['#1a2a6a','#2f4bb0','#121c4a'],bg:['#f6e7cc','#efd8b2','#d9b98a']});
    ctx.save();ctx.translate(W/2,H*.48);ctx.rotate(-.04);ctx.fillStyle='rgba(250,250,252,.97)';rr(-250,-120,500,520,36);ctx.fill();
    txtC('PIX 💸',0,-50,'900 58px Inter','#2f4bb0');txtC('Padaria do Zé',0,40,'800 44px Inter','#16161c');txtC('R$ 340',0,150,'900 100px Oswald','#16161c');
    const p=seg(u,.9,1.2);ctx.fillStyle=p>0?'#1f8a4a':'#2f4bb0';rr(-200,250,400,100,30);ctx.fill();txtC(p>0?'PAGO ✓':'PAGAR',0,302,'900 50px Inter','#fff');ctx.restore()});
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('ONTEM',W/2,300,'800 64px Oswald','#ff8a8a',12);ctx.restore();
  if(u>1.3)zeInside(W-180,1480);letterIn(u);
});
// 3. a padaria pagou o aluguel: carimbo PAGO + confete, o seu Zé feliz (2814–2817.5)
scene(2814,2817.5,(t)=>{const u=t-2814;ctx.fillStyle=lg(0,H,['#ffd27a','#ffb44a','#e08a2a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,250,210,A)',.35);
  for(let i=0;i<36;i++){const r=rng(i+2814);const x=r()*W,y=((r()*H*.6+u*(380+r()*240))%(H+100))-80;ctx.save();ctx.translate(x,y);ctx.rotate(u*5+i);ctx.fillStyle=['#ffd84a','#ff7a5c','#7dffa8','#8fc0ff'][i%4];ctx.fillRect(-12,-6,24,12);ctx.restore()}
  CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{ctx.save();ctx.translate(W/2,820);ctx.rotate(-.03);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-360,-300,720,600,20);ctx.fill();ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 58px Inter';ctx.textAlign='center';ctx.fillText('ALUGUEL DA PADARIA',0,-190);ctx.fillStyle='#b5651d';ctx.fillRect(-300,-160,600,8);ctx.fillStyle='#16161c';ctx.font='900 90px Oswald';ctx.fillText('R$ 1.200',0,-30);
    if(u>.6){const k=seg(u,.6,.85);ctx.save();ctx.translate(0,140);ctx.rotate(-.12);const sc=lerp(2.2,1,easeOut(k));ctx.scale(sc,sc);ctx.globalAlpha=clamp(k*3);ctx.strokeStyle='#1f8a4a';ctx.lineWidth=14;ctx.strokeRect(-230,-80,460,160);ctx.fillStyle='#1f8a4a';ctx.font='900 110px Inter';ctx.fillText('PAGO',0,38);ctx.restore()}ctx.restore();
    zeFront(540,1560,1.3,{smile:16,look:0})});
  if(u>1.2){const k=easeBack(seg(u,1.2,1.5));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);txtC('PADARIA SALVA! 🥖',0,0,'900 96px Inter','#fff',18);ctx.restore()}
  letterIn(u);
});
SHAKE.push(2814.75);
// 5. por causa da escolha de vocês, de manhã a rua inteira sabia: janelas acendendo com balões (2818–2821.5)
scene(2818,2821.5,(t)=>{const u=t-2818;sky('#7fb0e0','#cde2f0','#ffdcb0');sun(960,180,60,'#fff6dc','rgba(255,220,150,.7)');
  CAM(W/2,1100,lerp(1.0,1.06,seg(u,0,3.5)),()=>{
    const hs=[[60,'#e9a27a'],[400,'#9fc0d8'],[740,'#c9d68a']];hs.forEach(([x,c],i)=>{ctx.fillStyle=c;ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(x,560,300,700);ctx.strokeRect(x,560,300,700);ctx.fillStyle='#8a4a3a';ctx.beginPath();ctx.moveTo(x-20,570);ctx.lineTo(x+150,430);ctx.lineTo(x+320,570);ctx.closePath();ctx.fill();ctx.stroke();
      for(let w=0;w<2;w++)for(let f=0;f<2;f++){const on=u>.3+i*.3+w*.12+f*.2;ctx.fillStyle=on?'#ffe9a0':'#5a6a80';ctx.fillRect(x+40+w*130,660+f*240,90,110);ctx.strokeRect(x+40+w*130,660+f*240,90,110)}});
    ctx.fillStyle='#8c8f98';ctx.fillRect(0,1260,W,60);ctx.fillStyle=lg(1320,H,['#3e4048','#2c2e34']);ctx.fillRect(0,1320,W,H-1320)});
  const B=[['DEZ MIL?! 😱',300,560,.5],['O MATHEUS?!',780,700,.9],['VOCÊ SOUBE?!',320,980,1.3],['QUE RICO! 🤑',770,1180,1.7]];B.forEach(([s,x,y,a])=>{if(u>a)s2bBubble(x,y,480,130,seg(u,a,a+.3),s,'#c8352b',0)});
  txtC('POR CAUSA DE VOCÊS...',W/2,300,'900 66px Inter','#16161c',0);letterIn(u);
});
// 7. sete da manhã: ela acorda — óculos tortos, coque (2822–2825.5)
scene(2822,2825.5,(t)=>{const u=t-2822;const op=u<.4?0:u<.6?.3:easeOut(seg(u,.7,1.1));
  CAM(lerp(W/2,W/2+40,easeIO(seg(u,0,3.5))),H*.5,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{s5Room(u,{pan:0});
    // travesseiro
    ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(90,1180,900,360,90);ctx.fill();ctx.stroke();
    rosaFace(W/2,1250,.72,{headOnly:true,open:op*1.1,lid:op>.3?lerp(.4,0,seg(u,.9,1.4)):0,brow:op>.9?.7:0,tilt:.28,mouthO:op>.9?.4:0});
    ctx.fillStyle='#c25b8f';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-20,1480,W+40,500,40);ctx.fill();ctx.stroke()});
  if(u>1.3)s2bBubble(W/2,520,620,160,seg(u,1.3,1.6),'ÓCULOS? COQUE?! 😵','#8a4fa8',-60);
  grade('rgba(255,210,170,.18)','rgba(80,40,100,.15)');letterIn(u);
});
// 8. no espelho: cabelo branco e xale roxo — ela inteira de frente (2826–2829.5)
scene(2826,2829.5,(t)=>{const u=t-2826;const z=lerp(1.0,1.12,easeOut(seg(u,.3,.7)));const sh=(u>.3&&u<.8)?Math.sin(u*80)*10:0;
  CAM(W/2+sh,H*.5,z,()=>{ctx.fillStyle=lg(0,H,['#e9d8ef','#dcc6e6','#c3a8d2']);ctx.fillRect(0,0,W,H);
    ctx.save();ctx.beginPath();rr(150,260,780,1300,380);ctx.clip();ctx.fillStyle=lg(260,1560,['#cfe2ee','#a9c4d6']);ctx.fillRect(150,260,780,1300);
    rosaFront(540,1430,3.0,{look:0,eye:1.3,brow:1,mouthO:.7});
    ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.moveTo(150,260);ctx.lineTo(480,260);ctx.lineTo(150,900);ctx.closePath();ctx.fill();ctx.restore();
    ctx.strokeStyle='#c9a46a';ctx.lineWidth=28;ctx.beginPath();rr(150,260,780,1300,380);ctx.stroke()});
  if(u>.3&&u<.5){ctx.fillStyle=`rgba(255,255,255,${.6*(1-seg(u,.3,.5))})`;ctx.fillRect(0,0,W,H)}
  if(u>.9){const k=easeBack(seg(u,.9,1.2));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);txtC('XALE ROXO?! 😱',0,0,'900 92px Inter','#ffd84a',18);ctx.restore()}
});
SHAKE.push(2826.32);
// 9. "HOJE ELE É: DONA ROSA" — crachá girando (2830–2833.5)
scene(2830,2833.5,(t)=>{const u=t-2830;ctx.fillStyle=lg(0,H,['#3a1f52','#6a3888','#24123a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(230,180,255,A)',.28);
  const sp=lerp(Math.PI*2,0,easeOut(seg(u,0,1.0)));CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{ctx.save();ctx.translate(W/2,H*.52);ctx.scale(Math.cos(sp),1);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-330,-430,660,860,30);ctx.fill();ctx.stroke();
    ctx.fillStyle='#8a4fa8';ctx.beginPath();rr(-330,-430,660,150,30);ctx.fill();ctx.fillRect(-330,-320,660,40);ctx.fillStyle='#fff';ctx.font='800 50px Oswald';ctx.textAlign='center';ctx.fillText('HOJE ELE É',0,-335);
    ctx.save();ctx.beginPath();rr(-170,-240,340,340,20);ctx.clip();ctx.fillStyle='#ead8f2';ctx.fillRect(-170,-240,340,340);rosaFace(0,40,.3,{smile:10});ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-240,340,340,20);ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 78px Inter';ctx.fillText('DONA ROSA',0,210);ctx.fillStyle='#8a4fa8';ctx.font='800 46px Inter';ctx.fillText('síndica do prédio',0,290);ctx.restore()});
  letterIn(u);
});
// 10. ela mora bem do lado: corredor com as portas 301 e 302 (2834–2837.5)
scene(2834,2837.5,(t)=>{const u=t-2834;CAM(lerp(420,620,easeIO(seg(u,0,3.5))),1000,lerp(1.05,1.0,easeIO(seg(u,0,3.5))),()=>{s5Hall(u);
  rosaFront(240,1420,1.55,{look:lerp(0,1,seg(u,.8,1.4)),smile:4})});
  // seta 302 = Matheus
  if(u>1.3){const k=easeBack(seg(u,1.3,1.6));ctx.save();ctx.translate(780,420);ctx.scale(k,k);ctx.fillStyle='rgba(30,60,140,.95)';rr(-230,-60,460,120,30);ctx.fill();txtC('302 = MATHEUS',0,2,'900 50px Inter','#fff');ctx.restore()}
  ctx.save();ctx.globalAlpha=seg(u,0,.4);ctx.fillStyle='rgba(120,70,150,.95)';rr(70,360,340,110,30);ctx.fill();txtC('ROSA: 301',240,416,'900 54px Inter','#fff');ctx.restore();letterIn(u);
});
// 11. na janela, o gato laranja: só ele reconhece o Matheus (2838–2841.5)
scene(2838,2841.5,(t)=>{const u=t-2838;ctx.fillStyle=lg(0,H,['#e9d8ef','#dcc6e6','#c3a8d2']);ctx.fillRect(0,0,W,H);
  ctx.save();ctx.beginPath();rr(140,300,800,1200,20);ctx.clip();ctx.fillStyle=lg(300,1500,['#ffd9a0','#ffeccc','#cfe6f5']);ctx.fillRect(140,300,800,1200);semBlur(()=>buildings(72,1500,200,600,'#b9c6d8','#fff6dc',.1,u*6,1));ctx.restore();
  ctx.strokeStyle='#fffdf6';ctx.lineWidth=30;ctx.beginPath();rr(140,300,800,1200,20);ctx.stroke();
  CAM(W/2,H*.5,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{s2bCatFace(W/2,H*.56,1.15,u,{blink:u<.4||(u>2.6&&u<2.72),meow:u>1.0&&u<1.8?Math.sin(seg(u,1.0,1.8)*Math.PI):0,tilt:Math.sin(u*1.2)*.06})});
  for(let i=0;i<5;i++){const k=seg(u,1.3+i*.25,2.6+i*.25);if(k<=0||k>=1)continue;const x=300+i*120,y=1000-k*500;ctx.save();ctx.globalAlpha=1-k;txtC('💙',x,y,'900 70px Inter','#fff');ctx.restore()}
  if(u>1.0)s2bBubble(W/2,480,560,160,seg(u,1.0,1.3),'MIAU! (é você!)','#e8752a',-60);
  grade('rgba(255,200,150,.18)','rgba(80,40,100,.12)');letterIn(u);
});
// 12. aí o celular da dona Rosa vibra (2842–2845.5)
scene(2842,2845.5,(t)=>{const u=t-2842;CAM(W/2,H*.48,lerp(1.0,1.06,seg(u,0,3.5)),()=>s2Phone(u,{time:'07:12',date:'sexta-feira',ring:u%1<.6,screen:['#3a1f52','#6a3888','#24123a'],bg:['#ead8f2','#d6bfe4','#b79bcc'],msgs:[['PRÉDIO 🏢','99+ mensagens','agora',seg(u,.3,.7),'#1f7a5c']]}));
  if(u%1<.6){ctx.save();ctx.translate(W/2,300);const k=1+.06*Math.sin(u*30);ctx.scale(k,k);txtC('BZZZ! 📳',0,0,'900 110px Inter','#8a4fa8',18);ctx.restore()}
  letterIn(u);
});
// 13. é o grupo do prédio: cem mensagens (as mensagens sobem) (2846–2849.5)
const S5M=[['Bia · 104','gente, vocês viram?? 😱','#c13584'],['Seu Nico · 201','o Zé da padaria contou','#2f55c8'],['Carla · 303','não acredito 😳','#b5651d'],['Bia · 104','o do 302!!!','#c13584'],['Seu Nico · 201','quem diria 👀','#2f55c8'],['Carla · 303','tô chocada','#b5651d']];
scene(2846,2849.5,(t)=>{const u=t-2846;const n=Math.min(99,Math.floor(easeOut(seg(u,.2,3.0))*99)+1);
  CAM(W/2,H*.48,lerp(1.04,1.0,easeOut(seg(u,0,1))),()=>s5Chat(u,{count:n,scroll:easeIO(seg(u,.4,3.4))*420,msgs:S5M.map((m,i)=>[m[0],m[1],m[2],seg(u,.1+i*.3,.3+i*.3)])}));
  const k=easeBack(seg(u,.4,.7));ctx.save();ctx.translate(W/2,250);ctx.scale(k,k);ctx.fillStyle='#c8352b';rr(-300,-70,600,140,36);ctx.fill();txtC('💬 '+n+' MENSAGENS',0,2,'900 60px Inter','#fff');ctx.restore();
  letterIn(u);
});
// 14. [carta] "O Matheus do 302 ganha dez mil!" (2850–2853.5)
scene(2850,2853.5,(t)=>{const u=t-2850;CAM(W/2,H*.5,lerp(1.02,1.12,easeIO(seg(u,0,3.5))),()=>s5Chat(u,{count:'99+',scroll:420,msgs:S5M.map(m=>[m[0],m[1],m[2],1]).concat([['Bia · 104','O MATHEUS DO 302|GANHA DEZ MIL! 🤑','#c13584',seg(u,.15,.45)]])}));
  letterIn(u);
});
// 15. [carta] "Então ele paga o portão novo sozinho!" (2854–2857.5)
scene(2854,2857.5,(t)=>{const u=t-2854;CAM(W/2,H*.52,lerp(1.12,1.04,easeIO(seg(u,0,3.5))),()=>s5Chat(u,{count:'99+',scroll:lerp(420,700,easeIO(seg(u,0,.8))),msgs:S5M.map(m=>[m[0],m[1],m[2],1]).concat([['Bia · 104','O MATHEUS DO 302|GANHA DEZ MIL! 🤑','#c13584',1],['Seu Nico · 201','ENTÃO ELE PAGA O|PORTÃO SOZINHO! 🚪','#2f55c8',seg(u,.15,.45)],['Carla · 303','apoiado 👍👍','#b5651d',seg(u,1.4,1.7)]])}));
  letterIn(u);
});
// 16. o portão quebrado custa mil e oitocentos: o portão do prédio torto + etiqueta; folhas voando (ambiente) (2858–2861.5)
scene(2858,2861.5,(t)=>{const u=t-2858;sky('#8fbbe6','#d6e8f4','#f6e2c4');
  CAM(W/2,1050,lerp(1.08,1.0,easeOut(seg(u,0,1.5))),()=>{
    ctx.fillStyle='#d9c8b0';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(80,200,920,900);ctx.strokeRect(80,200,920,900);
    for(let r=0;r<3;r++)for(let c=0;c<3;c++){ctx.fillStyle=(r===2&&c===0)?'#ffe9a0':'#8fb0c8';ctx.fillRect(150+c*300,260+r*230,180,150);ctx.strokeRect(150+c*300,260+r*230,180,150)}
    ctx.fillStyle='#8c8f98';ctx.fillRect(0,1100,W,60);ctx.fillStyle=lg(1160,H,['#a9a49c','#8a857e']);ctx.fillRect(0,1160,W,H-1160);
    // portão: folha esquerda em pé, folha direita caída de lado
    const bars=(x,w,h)=>{ctx.strokeStyle='#2a2e36';ctx.lineWidth=14;ctx.strokeRect(x,0,w,h);ctx.lineWidth=10;for(let i=1;i<6;i++){ctx.beginPath();ctx.moveTo(x+i*w/6,0);ctx.lineTo(x+i*w/6,h);ctx.stroke()}};
    ctx.save();ctx.translate(200,780);bars(0,330,520);ctx.restore();
    const wob=Math.sin(u*3)*.02;ctx.save();ctx.translate(560,1300);ctx.rotate(.34+wob);ctx.translate(0,-520);bars(0,330,520);ctx.restore();
    ctx.fillStyle='#2a2e36';ctx.fillRect(170,760,30,560);ctx.fillRect(890,760,30,560);
    // folhas voando para a direita
    for(let i=0;i<6;i++){const r=rng(i+2858);const f=((u*.35+r())%1);const x=-60+f*(W+120),y=900+r()*500+Math.sin(u*3+i)*40;ctx.save();ctx.translate(x,y);ctx.rotate(u*4+i);ctx.fillStyle=['#e3963a','#c8652a','#e8c04a'][i%3];ctx.strokeStyle=OUT;ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(0,0,22,11,0,0,7);ctx.fill();ctx.stroke();ctx.restore()}});
  if(u>.8){const k=easeBack(seg(u,.8,1.1));ctx.save();ctx.translate(W/2,330);ctx.rotate(-.04);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.strokeStyle=OUT;ctx.lineWidth=8;rr(-340,-90,680,180,30);ctx.fill();ctx.stroke();txtC('PORTÃO: R$ 1.800',0,2,'900 74px Oswald','#16161c');ctx.restore()}
  letterIn(u);
});
// 17. no elevador, um aviso: reunião hoje às 19h (2862–2865.5)
scene(2862,2865.5,(t)=>{const u=t-2862;CAM(W/2,lerp(1000,880,easeIO(seg(u,0,3.5))),lerp(1.0,1.18,easeIO(seg(u,0,3.5))),()=>{ctx.fillStyle=lg(0,H,['#9aa2ae','#c3c9d2','#8a929e']);ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='rgba(255,255,255,.35)';ctx.lineWidth=4;for(let x=40;x<W;x+=60){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x+30,H);ctx.stroke()}
    ctx.fillStyle='#2a2e36';ctx.fillRect(W/2-6,0,12,H);
    ctx.fillStyle='#1f2a20';ctx.strokeStyle=OUT;ctx.lineWidth=6;rr(W/2-120,180,240,90,14);ctx.fill();ctx.stroke();txtC('3 ▼',W/2,226,'900 54px Inter','#ff6a4a');
    ctx.save();ctx.translate(W/2,900);ctx.rotate(-.03);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(-330,-380,660,760);ctx.strokeRect(-330,-380,660,760);
    ctx.fillStyle='#c8352b';ctx.beginPath();ctx.arc(0,-370,18,0,7);ctx.fill();
    txtC('⚠ AVISO ⚠',0,-270,'900 74px Inter','#c8352b');txtC('REUNIÃO',0,-130,'900 92px Oswald','#16161c');txtC('HOJE · 19H',0,0,'900 92px Oswald','#16161c');
    ctx.fillStyle='#8a4fa8';ctx.fillRect(-260,70,520,6);txtC('assunto: O PORTÃO',0,150,'800 48px Inter','#16161c');txtC('— a síndica, Rosa',0,250,'700 56px Caveat','#8a4fa8');ctx.restore()});
  letterIn(u);
});
// 18. "E repara no relógio da portaria." — a câmera vai até o relógio (2866–2869.5)
scene(2866,2869.5,(t)=>{const u=t-2866;const m=easeIO(seg(u,.4,3.0));CAM(lerp(W/2,780,m),lerp(1000,520,m),lerp(1.0,2.0,m),()=>{
  ctx.fillStyle=lg(0,H,['#d9cbb8','#cbb9a2','#a8957e']);ctx.fillRect(0,0,W,H);glow(W/2,200,700,'rgba(255,240,200,A)',.3);
  // caixas de correio
  for(let r=0;r<3;r++)for(let c=0;c<3;c++){ctx.fillStyle='#b08a5a';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.fillRect(110+c*130,520+r*120,110,100);ctx.strokeRect(110+c*130,520+r*120,110,100);txtC(String(100*(r+1)+c+1),165+c*130,560+r*120,'800 30px Inter','#fff')}
  clockFace(780,520,80,0,0);txtC('PORTARIA',780,680,'900 40px Inter','#5a4636',0);
  ctx.fillStyle='#7a5a3a';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(560,1000,480,300);ctx.strokeRect(560,1000,480,300);
  ctx.fillStyle=lg(1300,H,['#b0a08a','#8a7a64']);ctx.fillRect(0,1300,W,H-1300);
  rosaFront(330,1500,1.5,{look:.8,brow:.4})});
  if(u>.2){ctx.save();ctx.globalAlpha=seg(u,.2,.6)*(1-seg(u,2.6,3.0));txtC('REPARA... 👀',W/2,1480,'900 90px Inter','#ffd84a',16);ctx.restore()}
  letterIn(u);
});
// 19. meia-noite: o sexto relógio parado (2870–2873.5)
scene(2870,2873.5,(t)=>{const u=t-2870;ctx.fillStyle=lg(0,H,['#1a1530','#2e2558','#0f0c20']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(170,140,255,A)',.3);
  CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{clockFace(W/2,600,210,0,0);txtC('PORTARIA',W/2,880,'900 54px Inter','#cbb8ff',0);
    const L=['QUARTO','DIRETORA','LUCAS','RECEPÇÃO','PADARIA'];L.forEach((l,i)=>{const k=easeBack(seg(u,.8+i*.22,1.1+i*.22));if(k<=0)return;const x=130+i*205;ctx.save();ctx.translate(x,1140);ctx.scale(k,k);clockFace(0,0,74,0,0);txtC(l,0,120,'900 28px Inter','#cbb8ff',0);ctx.restore()})});
  txtC('00:00',W/2,300,'900 110px Oswald','#ffd84a',16);
  if(u>2.0){const k=easeBack(seg(u,2.0,2.3));ctx.save();ctx.translate(W/2,1480);ctx.scale(k,k);txtC('6º RELÓGIO PARADO!',0,0,'900 76px Inter','#fff',14);ctx.restore()}
  letterIn(u);
});
SHAKE.push(2872.05);
// 20. aí o telefone toca: chamada de MATHEUS no celular da dona Rosa (2874–2877.5)
scene(2874,2877.5,(t)=>{const u=t-2874;ctx.fillStyle=lg(0,H,['#ead8f2','#d6bfe4','#b79bcc']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,700,'rgba(255,120,150,A)',.15);
  const vb=Math.sin(u*70)*(u%1<.6?6:0);CAM(W/2+vb,H*.55,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>rosaFace(W/2,H*.64,.8,{open:1.25,brow:.9,mouthO:.35,tilt:.04}));
  s2cCall(u,'MATHEUS (302)','chamada recebida',seg(u,.1,.4));
  if(u%1<.6){ctx.save();ctx.translate(W/2,560);const k=1+.06*Math.sin(u*30);ctx.scale(k,k);txtC('TRIIIM! 📞',0,0,'900 110px Inter','#c8352b',18);ctx.restore()}
  letterIn(u);
});
// 21. [telefone] "Menino! Sou eu, a Rosa! Tô no seu corpo!" — o rosto do Matheus (com a Rosa dentro) (2878–2881.5)
scene(2878,2881.5,(t)=>{const u=t-2878;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.6,lerp(1.0,1.06,seg(u,0,3.5)),()=>face(W/2,H*.64,.85,{open:1.3,brow:1,mouthO:.4+.3*Math.abs(Math.sin(u*9)),px:Math.sin(u*3)*8}));
  s2cCall(u,'MATHEUS (302)','chamada · 00:0'+Math.min(9,Math.floor(u*2+1)),1);
  s2bBubble(W/2,640,820,200,seg(u,.4,.7),'MENINO! SOU EU,|A ROSA! 😱','#8a4fa8',-80);
  rosaInside(W-200,1480);letterIn(u);
});
// 22. [telefone] "Os vizinhos tão me cobrando o portão!" — o Matheus (Rosa dentro) cercado de bilhetes de cobrança (2882–2885.5)
scene(2882,2885.5,(t)=>{const u=t-2882;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.62,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>{face(W/2,H*.68,.8,{open:1.15,brow:.8,mouthO:.3+.3*Math.abs(Math.sin(u*8)),px:-14,sweat:1});
    const N=[[200,900,-.2,.3],[880,760,.18,.6],[230,1350,.15,.9],[880,1150,-.16,1.2]];N.forEach(([x,y,r,a])=>{const k=easeBack(seg(u,a,a+.3));if(k<=0)return;ctx.save();ctx.translate(x,y);ctx.rotate(r);ctx.scale(k,k);ctx.fillStyle='#fff7a8';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.fillRect(-120,-80,240,160);ctx.strokeRect(-120,-80,240,160);txtC('PORTÃO',0,-20,'900 40px Inter','#c8352b');txtC('R$ 1.800',0,32,'900 42px Oswald','#16161c');ctx.restore()})});
  s2cCall(u,'MATHEUS (302)','chamada · 00:1'+Math.min(9,Math.floor(u*2)),1);
  s2bBubble(W/2,620,800,200,seg(u,.3,.6),'TÃO ME COBRANDO|O PORTÃO! 😩','#8a4fa8',-80);
  rosaInside(W-200,1480);letterIn(u);
});
// 23. ele olha o grupo de novo — e vê um detalhe (lupa passando) (2886–2889.5)
scene(2886,2889.5,(t)=>{const u=t-2886;CAM(W/2,H*.48,1.0,()=>s5Chat(u,{count:'99+',scroll:700,msgs:S5M.map(m=>[m[0],m[1],m[2],1]).concat([['Bia · 104','O MATHEUS DO 302|GANHA DEZ MIL! 🤑','#c13584',1],['Seu Nico · 201','ENTÃO ELE PAGA O|PORTÃO SOZINHO! 🚪','#2f55c8',1],['Carla · 303','apoiado 👍👍','#b5651d',1]])}));
  const p=easeIO(seg(u,.3,2.6));const lx=lerp(800,420,p),ly=lerp(1300,500,p);ctx.save();ctx.strokeStyle=OUT;ctx.lineWidth=14;ctx.fillStyle='rgba(220,240,255,.25)';ctx.beginPath();ctx.arc(lx,ly,110,0,7);ctx.fill();ctx.stroke();ctx.lineWidth=26;ctx.beginPath();ctx.moveTo(lx+80,ly+80);ctx.lineTo(lx+190,ly+190);ctx.stroke();ctx.restore();
  if(u>2.4){ctx.save();ctx.globalAlpha=seg(u,2.4,2.8);txtC('UM DETALHE... 👀',W/2,260,'900 76px Inter','#16161c',12);ctx.restore()}
  letterIn(u);
});
// 24. embaixo do nome dela: ADMIN 👑 (2890–2893.5)
scene(2890,2893.5,(t)=>{const u=t-2890;CAM(W/2,lerp(H*.48,H*.3,easeIO(seg(u,0,1.2))),lerp(1.0,1.6,easeIO(seg(u,0,1.2))),()=>s5Chat(u,{count:'99+',scroll:250,admin:seg(u,.9,1.3),msgs:S5M.map(m=>[m[0],m[1],m[2],1])}));
  if(u>1.6){const k=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-380,-80,760,160,36);ctx.fill();txtC('ELA É A ADMIN! 👑',0,2,'900 70px Inter','#ffd84a');ctx.restore()}
  letterIn(u);
});
SHAKE.push(2891.0);
// 25. a síndica escreve o que quiser e todo mundo acredita: ela digitando + vizinhos concordando (2894–2897.5)
scene(2894,2897.5,(t)=>{const u=t-2894;ctx.fillStyle=lg(0,H,['#3a1f52','#6a3888','#24123a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(230,180,255,A)',.3);
  CAM(W/2,H*.55,lerp(1.0,1.06,seg(u,0,3.5)),()=>{rosaFace(W/2,H*.5,.62,{open:1,brow:-.2,smile:8,py:20,px:0});
    // celular na frente (só o aparelho, sem braços extras)
    ctx.save();ctx.translate(W/2,1340);ctx.rotate(-.04);ctx.fillStyle='#0d0e12';ctx.strokeStyle='#5a5e6a';ctx.lineWidth=6;rr(-200,-160,400,320,40);ctx.fill();ctx.stroke();ctx.fillStyle='#efe7d8';rr(-180,-140,360,280,30);ctx.fill();
    const dots=Math.floor(u*3)%4;txtC('digitando'+'.'.repeat(dots),0,0,'800 44px Inter','#1f7a5c');ctx.restore()});
  const V=[['👍',200,760,.6],['👍',880,820,.9],['🙏',170,1200,1.2],['✅',900,1260,1.5],['👍',230,1460,1.8],['👍',850,1480,2.1]];V.forEach(([e,x,y,a])=>{if(u>a)s2bBubble(x,y,170,140,seg(u,a,a+.25),e,'#16161c',0)});
  txtC('O QUE A SÍNDICA DISSER...',W/2,300,'900 62px Inter','#fff',14);if(u>1.4){ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('...TODO MUNDO ACREDITA',W/2,400,'900 60px Inter','#ffd84a',14);ctx.restore()}
  letterIn(u);
});
// 26. "E você? Acreditaria na síndica?" — a dona Rosa (Matheus dentro) olha pra câmera (2898–2901.5)
scene(2898,2901.5,(t)=>{const u=t-2898;ctx.fillStyle=lg(0,H,['#8a4fa8','#a86cc4','#5a2c78']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,230,250,A)',.3);
  CAM(W/2,H*.52,lerp(1.12,1.0,easeOut(seg(u,0,.8))),()=>rosaFace(W/2,H*.6,.8,{open:1.15,brow:.6,smile:lerp(0,10,seg(u,.6,1)),px:0,py:6}));
  const k=easeBack(seg(u,.3,.7));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);txtC('E VOCÊ? 👀',0,0,'900 120px Inter','#fff',20);ctx.restore();
  if(u>1.1){ctx.save();ctx.globalAlpha=seg(u,1.1,1.5);txtC('ACREDITARIA NA SÍNDICA?',W/2,430,'900 60px Inter','#ffd84a',14);ctx.restore()}
  letterIn(u);
});
// 27. A?: "Gente, era MENTIRA do Zé!" (2902–2905.5)
scene(2902,2905.5,(t)=>{const u=t-2902;CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>s5Chat(u,{bg:['#0f3a24','#1f6a42','#0b2a1a'],count:'99+',scroll:0,msgs:S5M.slice(3).map(m=>[m[0],m[1],m[2],1]),mine:['Gente, era MENTIRA|do Zé! 🙄 — Rosa',seg(u,.4,.7)]}));
  txtC('A?',W/2,300,'900 120px Inter','#7dffa8',20);if(u>1.2){ctx.save();ctx.globalAlpha=seg(u,1.2,1.6);txtC('DIZER QUE ERA MENTIRA 🤫',W/2,420,'900 58px Inter','#fff',14);ctx.restore()}
  letterIn(u);
});
// 28. a cobrança some, ninguém mais fala do salário: o bilhete do portão some + "ufa" (2906–2909.5)
scene(2906,2909.5,(t)=>{const u=t-2906;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.3);
  CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{const f=easeIO(seg(u,.6,1.8));ctx.save();ctx.translate(W/2+f*700,900-f*300);ctx.rotate(-.05+f*1.4);ctx.globalAlpha=1-f*.6;ctx.fillStyle='#fff7a8';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(-300,-200,600,400);ctx.strokeRect(-300,-200,600,400);txtC('PORTÃO',0,-60,'900 90px Inter','#c8352b');txtC('R$ 1.800',0,70,'900 100px Oswald','#16161c');ctx.restore();
    if(u>1.9){const k=easeBack(seg(u,1.9,2.2));ctx.save();ctx.translate(W/2,1000);ctx.scale(k,k);txtC('🔇',0,-60,'200px Inter','#fff');txtC('salário? que salário?',0,120,'900 60px Inter','#fff',12);ctx.restore()}});
  txtC('A COBRANÇA SOME',W/2,300,'900 80px Inter','#7dffa8',16);letterIn(u);
});
// 29. mas o Zé fica de mentiroso na rua inteira: o seu Zé envergonhado na padaria, vizinhos apontando (balões) (2910–2913.5)
scene(2910,2913.5,(t)=>{const u=t-2910;CAM(W/2,1050,lerp(1.06,1.0,easeOut(seg(u,0,1.5))),()=>{s4Bakery(u,{pan:0});zeFront(540,1360,1.7,{smile:-8,look:Math.sin(u*2)*.3,brow:.6});s4Counter(1300,0)});
  const B=[['MENTIROSO! 😤',300,620,.5],['FOFOQUEIRO!',790,760,.9],['QUE FEIO, ZÉ!',330,960,1.3]];B.forEach(([s,x,y,a])=>{if(u>a)s2bBubble(x,y,480,130,seg(u,a,a+.3),s,'#c8352b',0)});
  txtC('MAS O ZÉ...',W/2,1470,'900 90px Inter','#fff',16);letterIn(u);
});
// 30. B?: contar a verdade no grupo (2914–2917.5)
scene(2914,2917.5,(t)=>{const u=t-2914;CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>s5Chat(u,{bg:['#14204a','#24357a','#0d1534'],count:'99+',scroll:0,msgs:S5M.slice(3).map(m=>[m[0],m[1],m[2],1]),mine:['É verdade, ele ganha.|E tem mais... 😬',seg(u,.4,.7)]}));
  txtC('B?',W/2,300,'900 120px Inter','#ffd84a',20);if(u>1.2){ctx.save();ctx.globalAlpha=seg(u,1.2,1.6);txtC('CONTAR A VERDADE',W/2,420,'900 62px Inter','#fff',14);ctx.restore()}
  letterIn(u);
});
// 31. até a parte que ninguém sabe: o aumento custou a promoção do Lucas (2918–2921.5)
scene(2918,2921.5,(t)=>{const u=t-2918;ctx.fillStyle=lg(0,H,['#5a1f1a','#8a2e24','#3a1410']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,170,120,A)',.3);
  const card=(x,y,rot,k,fn)=>{if(k<=0)return;ctx.save();ctx.translate(x,lerp(y+400,y,easeOut(clamp(k))));ctx.rotate(rot);ctx.globalAlpha=clamp(k*3);ctx.fillStyle='#fffaf0';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-220,-260,440,520,18);ctx.fill();ctx.stroke();fn();ctx.restore()};
  CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{
    card(280,950,-.06,seg(u,.1,.5),()=>{txtC('AUMENTO',0,-170,'900 50px Inter','#555');txtC('MATHEUS',0,-100,'900 46px Inter','#16161c');txtC('R$ 9.900',0,10,'900 90px Oswald','#1f8a4a');txtC('⬆',0,140,'900 110px Inter','#1f8a4a')});
    card(800,950,.06,seg(u,.6,1.0),()=>{ctx.save();ctx.beginPath();rr(-120,-230,240,240,20);ctx.clip();ctx.fillStyle='#cfe0f0';ctx.fillRect(-120,-230,240,240);luFace(0,-100,.3,{smile:-6,brow:.5});ctx.restore();txtC('LUCAS',0,60,'900 56px Inter','#16161c');txtC('promoção',0,130,'800 44px Inter','#555');
      if(u>1.2){const k=seg(u,1.2,1.45);ctx.save();ctx.translate(0,200);ctx.rotate(-.12);ctx.scale(lerp(2,1,easeOut(k)),lerp(2,1,easeOut(k)));ctx.globalAlpha=clamp(k*3);ctx.strokeStyle='#c8352b';ctx.lineWidth=8;ctx.strokeRect(-190,-40,380,80);txtC('CANCELADA',0,2,'900 54px Inter','#c8352b');ctx.restore()}});
    if(u>1.6){const k=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(540,950);ctx.scale(k,k);txtC('→',0,0,'900 140px Inter','#ffd84a',14);ctx.restore()}});
  txtC('O QUE NINGUÉM SABE...',W/2,300,'900 72px Inter','#fff',16);letterIn(u);
});
SHAKE.push(2919.25);
// 32. a mensagem: "Uma mentira resolve hoje... mas cobra amanhã." (2922–2925.5)
scene(2922,2925.5,(t)=>{const u=t-2922;ctx.fillStyle=lg(0,H,['#2a1a40','#5a3a6a','#ffb88a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,900,'rgba(255,230,180,A)',.45);beams(W/2,200,1.57,5,1500,.07);
  CAM(W/2,H*.55,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{clockFace(W/2,1050,260,0,0)});
  txtC('UMA MENTIRA',W/2,300,'900 90px Inter','#fff',16);txtC('RESOLVE HOJE...',W/2,410,'900 84px Inter','#fff',16);
  if(u>1.5){const k=easeBack(seg(u,1.5,1.8));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);txtC('...MAS COBRA AMANHÃ',0,0,'900 76px Inter','#ffd84a',16);ctx.restore()}
  letterIn(u);
});
// 33/34. ESCOLHA: A (verde) x B — sobre o rosto da dona Rosa (2926–2933)
scene(2926,2933,(t)=>{const u=t-2926;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  rosaFace(W/2,H*.72,.75,{open:1,brow:.5,px:-20,py:10});ctx.fillStyle='rgba(10,8,14,.68)';ctx.fillRect(0,0,W,H);
  txtC('O QUE ELE FAZ?',W/2,320,'900 92px Inter','#fff',18);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));ctx.textAlign='left';
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,140,80,.95)';rr(70,430,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('A',120,590);ctx.font='800 50px Inter';ctx.fillText('dizer que era',250,530);ctx.fillText('MENTIRA do Zé 🤫',250,595);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(60,90,200,.95)';rr(70,690,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('B',120,850);ctx.font='800 50px Inter';ctx.fillText('contar a VERDADE',250,790);ctx.fillText('(até do Lucas) 😬',250,855);ctx.restore();
  if(u>1.4){const k=.5+.5*Math.sin(u*5);ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('COMENTA A OU B 👇',W/2,1080,'900 74px Inter',`rgb(255,${200+55*k},74)`,16);ctx.restore()}
});
// FINAL: cartela da série (2990–2993.2)
scene(2990,2993.2,(t)=>{const u=t-2990;ctx.fillStyle='#07070c';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,50,W/2,H*.42,900);g.addColorStop(0,'rgba(180,120,230,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.36);ctx.scale(k,k);ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='900 92px Inter';ctx.fillText('E SE VOCÊ',0,0);ctx.fillText('ACORDASSE NA',0,110);ctx.fillStyle='#ffd84a';ctx.font='900 128px Inter';ctx.fillText('VIDA DE OUTRA',0,250);ctx.fillText('PESSOA?',0,390);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 6 · AMANHÃ 18H',W/2,H*.36+560);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.36+660);ctx.restore()});
