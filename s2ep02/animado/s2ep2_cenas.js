// ===================== SÉRIE 2 · EP. 2 — NO CORPO DA DIRETORA =====================
// Faixa 2200–2399 (cartão final 2390–2393.2). Consequência do voto A do EP. 1 (aumentou o PRÓPRIO salário):
// o sistema detecta, a diretora abre auditoria. Hoje ele acorda no corpo DELA (dona Helena) e ela no corpo dele.
// Elementos novos (máx. 2): dona Helena e a pasta vermelha da auditoria. Pista escondida: o relógio da parede dela parado em 00:00.
// Ambiente (não falado): luz da manhã com poeirinha, folhas das plantas mexendo. O gato laranja é o mascote que reconhece o Matheus.

// ---------- dona Helena (58 anos, cabelo chanel prateado, óculos vermelhos, blazer vinho, brinco de pérola) ----------
const HL={blz:'#7a2238',blzS:'#58172a',blzL:'#9a3450',blouse:'#f4ead8',skin:'#efc29e',skinS:'#cf9f7b',hair:'#cfd2db',hairS:'#9da1ae',glass:'#d63a3a',pants:'#2a2430',pantsS:'#1d1922'};
// close do rosto (mesma escala do face()/rbFace). o:{open,px,py,brow,mouthO,smile,pupil,headOnly,sweat,pj}
function hlFace(cx,cy,s,o){o=o||{};ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';
  const OL=(w)=>{ctx.strokeStyle=OUT;ctx.lineWidth=w||12;ctx.stroke()};
  // cabelo de trás (chanel)
  ctx.fillStyle=HL.hairS;ctx.beginPath();ctx.moveTo(-330,-60);ctx.quadraticCurveTo(-360,-400,0,-410);ctx.quadraticCurveTo(360,-400,330,-60);ctx.lineTo(345,250);ctx.quadraticCurveTo(250,300,180,250);ctx.lineTo(-180,250);ctx.quadraticCurveTo(-250,300,-345,250);ctx.closePath();ctx.fill();OL();
  if(!o.headOnly){const top=o.pj?'#8fb3d9':HL.blz,topL=o.pj?'#a9c6e6':HL.blzL;
    ctx.fillStyle=top;ctx.beginPath();ctx.moveTo(-600,1000);ctx.quadraticCurveTo(-570,440,-200,385);ctx.lineTo(200,385);ctx.quadraticCurveTo(570,440,600,1000);ctx.closePath();ctx.fill();OL();
    {const g=ctx.createLinearGradient(-600,0,600,0);g.addColorStop(0,'rgba(255,255,255,.08)');g.addColorStop(.5,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.25)');ctx.fillStyle=g;ctx.fill();}
    ctx.fillStyle=o.pj?'#eef4fb':HL.blouse;ctx.beginPath();ctx.moveTo(-170,388);ctx.lineTo(0,700);ctx.lineTo(170,388);ctx.closePath();ctx.fill();OL(9);
    if(!o.pj){for(const sx of[-1,1]){ctx.fillStyle=topL;ctx.beginPath();ctx.moveTo(sx*175,392);ctx.lineTo(sx*290,480);ctx.lineTo(sx*200,560);ctx.lineTo(sx*245,610);ctx.lineTo(sx*40,900);ctx.lineTo(sx*10,760);ctx.closePath();ctx.fill();OL(9);}
      ctx.fillStyle='#e9d48a';ctx.beginPath();ctx.arc(-230,640,26,0,7);ctx.fill();OL(6);} // broche dourado
    ctx.fillStyle=HL.skinS;ctx.beginPath();ctx.rect(-105,240,210,170);ctx.fill();OL();
    // colar de pérolas
    for(let i=-5;i<=5;i++){ctx.fillStyle='#fbf6ee';ctx.beginPath();ctx.arc(i*30,410+Math.abs(i)*-6+40-Math.abs(i)*Math.abs(i)*1.2,14,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.stroke()}
  }
  // orelhas com brinco de pérola
  for(const sx of[-1,1]){ctx.fillStyle=HL.skin;ctx.beginPath();ctx.ellipse(sx*292,40,50,70,0,0,7);ctx.fill();OL();ctx.fillStyle='#fbf6ee';ctx.beginPath();ctx.arc(sx*296,118,18,0,7);ctx.fill();OL(5)}
  const hp=()=>{ctx.beginPath();ctx.moveTo(-290,-60);ctx.quadraticCurveTo(-300,-340,0,-350);ctx.quadraticCurveTo(300,-340,290,-60);ctx.quadraticCurveTo(280,200,150,290);ctx.quadraticCurveTo(0,350,-150,290);ctx.quadraticCurveTo(-280,200,-290,-60);ctx.closePath()};
  hp();ctx.fillStyle=HL.skin;ctx.fill();ctx.save();hp();ctx.clip();
  {const g=ctx.createLinearGradient(-300,0,300,0);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(.6,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(120,50,30,.3)');ctx.fillStyle=g;ctx.fillRect(-330,-360,660,760);}
  ctx.fillStyle='rgba(255,255,255,.12)';ctx.beginPath();ctx.ellipse(-140,-120,90,140,-.3,0,7);ctx.fill();
  if(o.sweat){ctx.fillStyle='rgba(190,230,255,.95)';ctx.beginPath();ctx.ellipse(220,-150,14,22,0,0,7);ctx.ellipse(-230,-90,11,17,0,0,7);ctx.fill()}
  ctx.restore();hp();OL();
  ctx.fillStyle='rgba(235,120,120,.3)';ctx.beginPath();ctx.ellipse(-175,125,62,36,0,0,7);ctx.ellipse(175,125,62,36,0,0,7);ctx.fill();
  // franja do chanel (repartida de lado)
  ctx.fillStyle=HL.hair;ctx.beginPath();ctx.moveTo(-320,120);ctx.quadraticCurveTo(-360,-260,-120,-350);ctx.quadraticCurveTo(80,-410,250,-310);ctx.quadraticCurveTo(350,-220,322,120);ctx.quadraticCurveTo(300,-40,250,-150);ctx.quadraticCurveTo(120,-250,-60,-200);ctx.quadraticCurveTo(-200,-160,-262,-40);ctx.quadraticCurveTo(-290,40,-320,120);ctx.closePath();ctx.fill();OL(10);
  ctx.strokeStyle='#eef0f5';ctx.lineWidth=14;ctx.beginPath();ctx.moveTo(-180,-300);ctx.quadraticCurveTo(0,-370,160,-320);ctx.stroke();
  ctx.strokeStyle=HL.hairS;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(-250,-180);ctx.quadraticCurveTo(-280,-40,-290,90);ctx.moveTo(260,-200);ctx.quadraticCurveTo(290,-60,296,80);ctx.stroke();
  // olhos com cílios
  const op=clamp(o.open??1,0,1.5);
  for(const sx of[-1,1]){const ex=sx*122,ey=10;
    if(op>.05){ctx.save();ctx.beginPath();ctx.ellipse(ex,ey,66,44*op,0,0,7);ctx.clip();ctx.fillStyle='#fbf8f2';ctx.fillRect(ex-80,ey-80,160,160);
      ctx.fillStyle='#5b7a4a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+(o.py||0),30,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+(o.py||0),14*(o.pupil||1),0,7);ctx.fill();
      ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+10,ey+(o.py||0)-10,8,0,7);ctx.fill();ctx.restore()}
    ctx.strokeStyle=OUT;ctx.lineWidth=11;ctx.beginPath();if(op>.05)ctx.ellipse(ex,ey,66,44*op,0,Math.PI*1.02,Math.PI*1.98);else{ctx.moveTo(ex-60,ey);ctx.quadraticCurveTo(ex,ey+20,ex+60,ey)}ctx.stroke();
    ctx.lineWidth=7;for(let k=0;k<3;k++){const a=Math.PI*(1.15+k*.18);const bx=ex+Math.cos(a)*66*(sx>0?1:1),by=ey+Math.sin(a)*44*op;ctx.beginPath();ctx.moveTo(bx,by);ctx.lineTo(bx+(sx>0?14:-14)*(k-1)-sx*6,by-20);ctx.stroke()}
    const by=-82-(o.brow||0)*30;ctx.strokeStyle=HL.hairS;ctx.lineWidth=14;ctx.beginPath();ctx.moveTo(ex-56*sx*-1,by+12+(o.brow||0)*-6);ctx.quadraticCurveTo(ex,by-12,ex+56*sx,by+6);ctx.stroke();}
  // óculos vermelhos (gatinho)
  ctx.strokeStyle=HL.glass;ctx.lineWidth=12;for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(sx*30,-30);ctx.quadraticCurveTo(sx*120,-60,sx*215,-58);ctx.quadraticCurveTo(sx*212,40,sx*170,64);ctx.quadraticCurveTo(sx*110,80,sx*48,56);ctx.quadraticCurveTo(sx*24,20,sx*30,-30);ctx.closePath();ctx.stroke()}
  ctx.beginPath();ctx.moveTo(-30,-14);ctx.quadraticCurveTo(0,-30,30,-14);ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,.2)';for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(sx*120-60,-40);ctx.lineTo(sx*120-24,-44);ctx.lineTo(sx*120-56,48);ctx.lineTo(sx*120-76,44);ctx.closePath();ctx.fill()}
  // nariz e boca (batom)
  ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(10,60);ctx.quadraticCurveTo(44,124,-4,140);ctx.stroke();
  if(o.mouthO){ctx.fillStyle='#4a1c18';ctx.beginPath();ctx.ellipse(0,215,34,46*o.mouthO,0,0,7);ctx.fill();ctx.strokeStyle='#b8323e';ctx.lineWidth=10;ctx.stroke();ctx.fillStyle='#e66';ctx.beginPath();ctx.ellipse(0,215+30*o.mouthO,18,10*o.mouthO,0,0,7);ctx.fill()}
  else{ctx.strokeStyle='#b8323e';ctx.lineWidth=13;ctx.beginPath();ctx.moveTo(-58,210);ctx.quadraticCurveTo(0,222+(o.smile||0),58,206);ctx.stroke()}
  ctx.restore()}
// corpo inteiro de frente (mesma escala do personFront/rbFront). o:{arms:'down'|'folder'|'point', walk, look, brow, mouthO, smile, sweat}
function hlFront(x,y,s,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';
  const p=o.walk;let lL=0,lR=0,bob=0,sw=0;if(p!=null){lL=16*Math.max(0,Math.sin(p));lR=16*Math.max(0,Math.sin(p+Math.PI));bob=-5*Math.abs(Math.cos(p));sw=Math.sin(p)}
  if(!o.noShadow)softShadow(0,142,100,20,.4);
  ctx.translate(0,bob);
  for(const [lx,lift,c] of [[-20,lL,HL.pantsS],[20,lR,HL.pants]]){const fy=130-lift;ctx.strokeStyle=OUT;ctx.lineWidth=40;ctx.beginPath();ctx.moveTo(lx,0);ctx.lineTo(lx,fy);ctx.stroke();ctx.strokeStyle=c;ctx.lineWidth=31;ctx.stroke();
    ctx.fillStyle='#5a1a24';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.beginPath();ctx.ellipse(lx,fy+10,22,12,0,0,7);ctx.fill();ctx.stroke()}
  const tp=()=>{ctx.beginPath();ctx.moveTo(-50,-128);ctx.quadraticCurveTo(-74,-60,-58,12);ctx.quadraticCurveTo(0,24,58,12);ctx.quadraticCurveTo(74,-60,50,-128);ctx.quadraticCurveTo(0,-140,-50,-128);ctx.closePath()};
  tp();ctx.fillStyle=HL.blz;ctx.fill();ctx.save();tp();ctx.clip();{const g=ctx.createLinearGradient(-70,0,70,0);g.addColorStop(0,'rgba(255,255,255,.07)');g.addColorStop(1,'rgba(0,0,0,.3)');ctx.fillStyle=g;ctx.fillRect(-90,-150,180,180);}
  ctx.fillStyle=HL.blouse;ctx.beginPath();ctx.moveTo(-24,-130);ctx.lineTo(0,-50);ctx.lineTo(24,-130);ctx.closePath();ctx.fill();
  ctx.strokeStyle=HL.blzL;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(-24,-128);ctx.lineTo(-4,-40);ctx.moveTo(24,-128);ctx.lineTo(4,-40);ctx.stroke();
  ctx.fillStyle='#e9d48a';ctx.beginPath();ctx.arc(-30,-80,5,0,7);ctx.fill();ctx.restore();tp();ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.stroke();
  const arm=(sx,sy,ex,ey,c)=>{ctx.strokeStyle=OUT;ctx.lineWidth=30;ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(ex,ey);ctx.stroke();ctx.strokeStyle=c;ctx.lineWidth=21;ctx.stroke();ctx.fillStyle=HL.skin;ctx.strokeStyle=OUT;ctx.lineWidth=4.5;ctx.beginPath();ctx.ellipse(ex,ey+4,12,14,0,0,7);ctx.fill();ctx.stroke()};
  const A=o.arms||'down';
  arm(-54,-112,-66+sw*6,-16,HL.blzS);
  if(A==='folder'){arm(54,-112,30,-60,HL.blz);ctx.fillStyle='#c8352b';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.save();ctx.translate(14,-70);ctx.rotate(-.15);rr(-40,-56,80,104,8);ctx.fill();ctx.stroke();ctx.restore()}
  else if(A==='point'){arm(54,-112,132,-150,HL.blz)}
  else arm(54,-112,66-sw*6,-16,HL.blz);
  ctx.fillStyle=HL.skinS;ctx.fillRect(-12,-150,24,26);
  hlFace((o.look||0)*8,-200,.16,{headOnly:true,open:o.eye??1,px:(o.look||0)*24,py:o.py||0,brow:o.brow||0,mouthO:o.mouthO||0,smile:o.smile||0,sweat:o.sweat});
  ctx.restore()}

// gato laranja de frente (o mascote, coleira azul), olhinhos abertos. o:{blink, meow, tilt}
function s2bCatFace(x,y,s,u,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.rotate(o.tilt||0);ctx.lineJoin='round';ctx.strokeStyle=OUT;ctx.lineWidth=9;
  ctx.fillStyle='#e88a3a';ctx.beginPath();ctx.ellipse(0,330,250,190,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle='#f6efe2';ctx.beginPath();ctx.ellipse(0,350,130,140,0,0,7);ctx.fill();
  ctx.fillStyle='#2f6fd6';ctx.beginPath();rr(-170,150,340,44,22);ctx.fill();ctx.stroke();ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.arc(0,210,22,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle='#e88a3a';for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(sx*80,-150);ctx.lineTo(sx*200,-280);ctx.lineTo(sx*230,-90);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#f4a7a0';ctx.beginPath();ctx.moveTo(sx*110,-150);ctx.lineTo(sx*195,-235);ctx.lineTo(sx*205,-120);ctx.closePath();ctx.fill();ctx.fillStyle='#e88a3a'}
  ctx.beginPath();ctx.ellipse(0,0,250,200,0,0,7);ctx.fill();ctx.stroke();
  ctx.strokeStyle='#c96a22';ctx.lineWidth=12;for(const k of[-1,0,1]){ctx.beginPath();ctx.moveTo(k*50,-190);ctx.lineTo(k*44,-130);ctx.stroke()}
  ctx.fillStyle='#f6efe2';ctx.beginPath();ctx.ellipse(0,90,120,80,0,0,7);ctx.fill();
  const bl=o.blink?.1:1;for(const sx of[-1,1]){ctx.fillStyle='#9fd05a';ctx.beginPath();ctx.ellipse(sx*95,-10,46,48*bl,0,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();if(bl>.5){ctx.fillStyle='#111';ctx.beginPath();ctx.ellipse(sx*95,-10,14,40,0,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(sx*95+12,-28,9,0,7);ctx.fill()}}
  ctx.fillStyle='#e87a8a';ctx.beginPath();ctx.moveTo(-22,52);ctx.lineTo(22,52);ctx.lineTo(0,74);ctx.closePath();ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.stroke();
  if(o.meow){ctx.fillStyle='#4a1c18';ctx.beginPath();ctx.ellipse(0,112,30,30*o.meow,0,0,7);ctx.fill();ctx.stroke()}else{ctx.beginPath();ctx.moveTo(-40,96);ctx.quadraticCurveTo(-18,116,0,86);ctx.quadraticCurveTo(18,116,40,96);ctx.stroke()}
  ctx.strokeStyle='rgba(40,25,15,.7)';ctx.lineWidth=5;for(const sx of[-1,1])for(let k=0;k<3;k++){ctx.beginPath();ctx.moveTo(sx*110,70+k*22);ctx.lineTo(sx*260,40+k*34);ctx.stroke()}
  ctx.restore()}

// apartamento da dona Helena (manhã): janela grande, estante com livros, plantas, relógio IGUAL parado em 00:00. o:{pan, dark}
function s2bFlat(u,o){o=o||{};const pan=o.pan||0;
  ctx.fillStyle=lg(0,H,['#e6efe9','#d5e3da','#a9bfb1']);ctx.fillRect(0,0,W,H);
  ctx.save();ctx.translate(-pan,0);
  // janela
  ctx.save();ctx.beginPath();rr(120,260,620,820,16);ctx.clip();sky('#86bde8','#cfe5f2','#ffe2b6');sun(560,520,56,'#fff6dc','rgba(255,220,150,.7)');buildings(64,1080,240,560,'#a7bcd0','#fff0c0',.1,300,1);ctx.restore();
  ctx.strokeStyle='#f4f1ea';ctx.lineWidth=20;ctx.beginPath();rr(120,260,620,820,16);ctx.stroke();ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(430,260);ctx.lineTo(430,1080);ctx.stroke();
  beams(560,420,2.0,6,1400,.07);
  // relógio de parede IGUAL ao do Matheus, parado em 00:00 (pista escondida)
  clockFace(900,420,72,0,0);
  // estante com livros
  ctx.fillStyle='#8a6446';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(1100,240,620,1000);ctx.strokeRect(1100,240,620,1000);
  const r=rng(12);for(let sh=0;sh<4;sh++){const y=300+sh*240;ctx.fillStyle='#6a4a32';ctx.fillRect(1110,y+190,600,16);let x=1120;while(x<1690){const w=26+r()*30,h=110+r()*70;ctx.fillStyle=['#c8352b','#2f6fc9','#e2b23c','#3f8f7a','#8a5cc4','#f4ead8'][Math.floor(r()*6)];ctx.fillRect(x,y+190-h,w,h);ctx.strokeStyle='rgba(0,0,0,.35)';ctx.lineWidth=3;ctx.strokeRect(x,y+190-h,w,h);x+=w+4}}
  // plantas (folhas balançando de leve)
  for(const [px,py,sc] of [[820,1240,1.2],[1050,1260,.9],[1780,1250,1.1]]){ctx.save();ctx.translate(px,py);ctx.scale(sc,sc);ctx.fillStyle='#c9774a';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-60,0);ctx.lineTo(60,0);ctx.lineTo(44,110);ctx.lineTo(-44,110);ctx.closePath();ctx.fill();ctx.stroke();
    for(let i=0;i<7;i++){const a=-Math.PI/2+(i-3)*.32+Math.sin(u*2+i+px)*.05;ctx.fillStyle=i%2?'#4f9a55':'#3f8547';ctx.save();ctx.rotate(a+Math.PI/2);ctx.beginPath();ctx.ellipse(0,-110,26,90,0,0,7);ctx.fill();ctx.stroke();ctx.restore()}ctx.restore()}
  ctx.restore();
  ctx.fillStyle=lg(1280,H,['#c7a983','#a18560']);ctx.fillRect(0,1280,W,H-1280);
  ctx.strokeStyle='rgba(80,50,30,.18)';ctx.lineWidth=3;for(let i=-8;i<16;i++){const x0=W/2+(i*130-pan%130);ctx.beginPath();ctx.moveTo(W/2+(x0-W/2)*.4,1280);ctx.lineTo(W/2+(x0-W/2)*2.2,H);ctx.stroke()}
  dust(u,21,26,'rgba(255,240,200,A)');
  if(o.dark){ctx.fillStyle=`rgba(10,12,30,${o.dark})`;ctx.fillRect(0,0,W,H)}}

// sala de reunião, câmera de frente: parede, janela, mesa comprida. o:{pan}
function s2bMeeting(u,o){o=o||{};const pan=o.pan||0;
  ctx.fillStyle=lg(0,H,['#e9e4da','#dcd4c6','#bfb3a0']);ctx.fillRect(0,0,W,H);
  ctx.save();ctx.beginPath();ctx.rect(560-pan*.3,300,440,620);ctx.clip();sky('#8fc0ea','#cfe3f0','#ffe2b8');buildings(33,920,200,500,'#9fb3c9','#fff2c4',.12,500,1);ctx.restore();
  ctx.strokeStyle='#5e5148';ctx.lineWidth=16;ctx.strokeRect(560-pan*.3,300,440,620);
  // quadro branco com "AUDITORIA 10H"
  ctx.fillStyle='#fbfbf7';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(70-pan*.3,360,420,300,10);ctx.fill();ctx.stroke();ctx.fillStyle='#c8352b';ctx.font='800 50px Caveat';ctx.textAlign='left';ctx.fillText('Auditoria · 10h',100-pan*.3,440);ctx.strokeStyle='#2f6fc9';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(100-pan*.3,500);ctx.lineTo(420-pan*.3,520);ctx.moveTo(100-pan*.3,560);ctx.lineTo(360-pan*.3,570);ctx.stroke();
  ctx.fillStyle=lg(1180,H,['#8e7a64','#6b5a48']);ctx.fillRect(0,1180,W,H-1180);
  for(let i=0;i<4;i++){const x=(i*320+160-pan*.6%320+W)%(W+320)-160;glow(x,140,200,'rgba(255,230,180,A)',.35);ctx.fillStyle='#3a3230';ctx.fillRect(x-70,100,140,16)}}
function s2bTable(y,s){ctx.save();softShadow(W/2,y+260*s,560,40,.45);ctx.fillStyle='#6a4a32';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-40,y,W+80,70*s,12);ctx.fill();ctx.stroke();ctx.fillStyle='#4f3624';ctx.fillRect(-40,y+70*s,W+80,300*s);ctx.strokeRect(-40,y+70*s,W+80,300*s);ctx.fillStyle='rgba(255,255,255,.1)';ctx.fillRect(-40,y+8,W+80,10);ctx.restore()}
// balão de fala
function s2bBubble(x,y,w,h,k,txt,col,tail){if(k<=0)return;ctx.save();ctx.translate(x,y);const s=easeBack(clamp(k));ctx.scale(s,s);ctx.fillStyle='#fff';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-w/2,-h/2,w,h,44);ctx.fill();ctx.stroke();
  const tx=tail||0;ctx.beginPath();ctx.moveTo(tx-40,h/2-4);ctx.lineTo(tx-10+(tx>0?60:-60),h/2+80);ctx.lineTo(tx+40,h/2-4);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#fff';ctx.fillRect(tx-36,h/2-14,72,14);
  const L=txt.split('|');L.forEach((l,i)=>txtC(l,0,(i-(L.length-1)/2)*70,'900 62px Inter',col||'#16161c'));ctx.restore()}
// celular com mensagem grande (bolha). o:{time, tag, l1, l2, col, bg, screen, k}
function s2bPhoneMsg(u,o){s2Phone(u,{time:o.time,screen:o.screen,bg:o.bg,msgs:o.msgs||[]});
  const k=o.k;if(!(k>0))return;ctx.save();ctx.translate(W/2,H*.48);ctx.rotate(-.04);ctx.globalAlpha=clamp(k*2);ctx.translate(0,120+(1-easeBack(clamp(k)))*-40);
  ctx.fillStyle='rgba(250,250,252,.97)';rr(-260,-30,520,o.l3?400:330,30);ctx.fill();
  ctx.fillStyle=o.col||'#7a5cff';ctx.beginPath();ctx.arc(-200,40,34,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 40px Inter';ctx.textAlign='center';ctx.fillText(o.icon||'?',-200,54);
  ctx.textAlign='left';ctx.fillStyle=o.col||'#7a5cff';ctx.font='800 32px Inter';ctx.fillText(o.tag,-150,52);
  ctx.fillStyle='#16161c';ctx.font='700 44px Inter';ctx.fillText(o.l1,-220,150);ctx.fillText(o.l2,-220,212);if(o.l3)ctx.fillText(o.l3,-220,274);ctx.restore()}
// placar de TODAS as redes (estilo EP. 10): comentários das 3 redes entrando, contador até +9999 → VENCEU A
function s2bPlacar(u,winA){ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(90,140,255,A)',.25);
  txtC('PLACAR DO EP. 1',W/2,300,'900 86px Inter','#fff',16);txtC('somando todas as redes',W/2,390,'700 46px Inter','#bcd',0);
  const NET=[['TikTok','#111','#25f4ee'],['Instagram','#c13584','#fff'],['YouTube','#e62117','#fff']];const TX=['A','Aaaa','A!!','B','A 💰','A','B 🎉','Aaaaaa','A A A','b','A 👀','A'];
  ctx.save();ctx.beginPath();ctx.rect(0,460,W,860);ctx.clip();
  const n=Math.floor(u*6);for(let i=0;i<n;i++){const r=rng(i+1900);const t0=i/6;const age=u-t0;const y=1300-age*560;if(y<420)continue;const side=i%2===0;const nt=NET[i%3];const txt=TX[Math.floor(r()*TX.length)];
    ctx.save();ctx.globalAlpha=Math.min(1,age*4);ctx.translate(side?70:590,y);ctx.fillStyle='rgba(255,255,255,.95)';rr(0,-46,420,92,30);ctx.fill();
    ctx.fillStyle=nt[1];ctx.beginPath();ctx.arc(46,0,30,0,7);ctx.fill();ctx.fillStyle=nt[2];ctx.font='900 28px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nt[0][0],46,2);
    ctx.textAlign='left';ctx.fillStyle='#777';ctx.font='700 24px Inter';ctx.fillText(nt[0],90,-16);ctx.fillStyle=txt.toUpperCase().startsWith('B')?'#c33':'#1a8a4a';ctx.font='900 40px Inter';ctx.fillText(txt,90,22);ctx.restore()}
  ctx.restore();
  const c=Math.floor(Math.pow(clamp(u/2.9),2.2)*9999);const k=easeBack(seg(u,.1,.4));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-470,-90,940,180,36);ctx.fill();txtC(c>=9999?'+9999 COMENTÁRIOS':'💬 '+c.toLocaleString('pt-BR')+' comentários',0,0,'900 66px Oswald','#16161c');ctx.restore();
  if(winA){const k2=easeBack(clamp(winA));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(k2,k2);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(-W,-H,W*2,H*2);ctx.fillStyle='rgba(30,150,80,.97)';rr(-470,-230,940,460,46);ctx.fill();
    txtC('VENCEU A',0,-130,'900 110px Inter','#fff');txtC('O PRÓPRIO SALÁRIO 💰',0,-20,'900 60px Inter','#fff');
    ctx.fillStyle='rgba(0,0,0,.22)';rr(-430,40,860,160,26);ctx.fill();txtC('TIKTOK A 3 × B 0  ·  INSTAGRAM A 9 × B 5',0,85,'800 36px Inter','#fff');txtC('TOTAL: A 12 × B 5',0,150,'900 52px Oswald','#ffd84a');ctx.restore()}}

// =============================== CENAS ===============================
// 0. GANCHO: no espelho, o rosto da diretora — a mão dela no rosto, em choque (2200–2203.5)
scene(2200,2203.5,(t)=>{const u=t-2200;const z=lerp(1.18,1.04,easeOut(seg(u,0,.6)))+u*.02,sh=u<.3?Math.sin(u*90)*12:0;
  CAM(W/2+sh,H*.5,z,()=>s2Mirror(u,()=>{ctx.fillStyle=lg(250,1400,['#a9c0b4','#86a092']);ctx.fillRect(110,250,860,1150);hlFace(540,880,1.0,{open:1.4,brow:1,mouthO:.9,pupil:.6,px:-6,py:6,pj:1});
    ctx.save();ctx.translate(820,1060);ctx.rotate(-.3);ctx.fillStyle=HL.skin;ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.beginPath();ctx.ellipse(0,0,86,124,0,0,7);ctx.fill();ctx.stroke();for(let k=0;k<4;k++){ctx.beginPath();ctx.ellipse(-40+k*28,-116,17,46,0,0,7);ctx.fill();ctx.stroke()}ctx.restore()}));
  ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,110,W,430);
  hookTitle('IMAGINE...|NO CORPO DE QUEM|TE INVESTIGA 😳',seg(u,0,.35),240);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.85*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(2200.05);

// 1. placar de todas as redes → VENCEU A (2204–2209.5)
scene(2204,2209.5,(t)=>{const u=t-2204;placar2(u);letterIn(u)});
function placar2(u){s2bPlacar(u,seg(u,3.2,3.6))}

// 2. ontem: no corpo do chefe, a caneta assina (2210–2213.5)
scene(2210,2213.5,(t)=>{const u=t-2210;ctx.fillStyle='#fffdf6';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(0,0,0,.06)';for(let y=200;y<H;y+=90)ctx.fillRect(80,y,W-160,4);
  CAM(W/2,H*.55,lerp(1.15,1.0,easeOut(seg(u,0,3.5))),()=>{ctx.fillStyle='#16161c';ctx.font='900 64px Inter';ctx.textAlign='center';ctx.fillText('AUMENTOS DO MÊS',W/2,560);ctx.textAlign='left';ctx.fillStyle='#22222a';ctx.font='700 56px Inter';ctx.fillText('Matheus',140,820);ctx.textAlign='right';ctx.fillStyle='#2a8a4a';ctx.font='900 54px Inter';ctx.fillText(u>1.6?'APROVADO':'',940,820);ctx.textAlign='left';
    ctx.fillStyle='#555';ctx.font='600 60px Inter';ctx.fillText('Assinatura:',80,1150);ctx.strokeStyle='#333';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(420,1160);ctx.lineTo(1000,1160);ctx.stroke();
    // rabisco da assinatura aparecendo atrás da ponta da caneta
    const k=seg(u,.3,1.5);ctx.strokeStyle='#1c3b8a';ctx.lineWidth=8;ctx.lineCap='round';ctx.beginPath();let px=460,py=1120;for(let a=0;a<=k*1;a+=.01){const x=460+a*480,y=1120+Math.sin(a*26)*34*(1-a*.4)-a*20;a?ctx.lineTo(x,y):ctx.moveTo(x,y);px=x;py=y}ctx.stroke();
    ctx.save();ctx.translate(px,py-60);ctx.rotate(-.7);ctx.fillStyle='#d8b04a';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-24,-420,48,420,20);ctx.fill();ctx.stroke();ctx.fillStyle='#2a2a30';ctx.beginPath();ctx.moveTo(-24,0);ctx.lineTo(24,0);ctx.lineTo(0,70);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle=RB.skin;ctx.beginPath();ctx.ellipse(10,-160,90,110,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle=RB.suit;ctx.beginPath();rr(-80,-330,180,160,30);ctx.fill();ctx.stroke();ctx.fillStyle=RB.shirt;ctx.fillRect(-80,-200,180,30);ctx.restore();
    if(u>1.6){const s=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(700,720);ctx.rotate(-.12);ctx.scale(s,s);ctx.strokeStyle='#2a8a4a';ctx.lineWidth=12;ctx.strokeRect(-230,-70,460,140);ctx.fillStyle='#2a8a4a';ctx.font='900 92px Inter';ctx.textAlign='center';ctx.fillText('OK ✓',0,34);ctx.restore()}});
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('ONTEM',W/2,330,'800 64px Oswald','#c8352b',0);ctx.restore();letterIn(u);
});

// 3. o salário dele subindo de 2.100 para 9.900 (2214–2217.5)
scene(2214,2217.5,(t)=>{const u=t-2214;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.3);
  for(let i=0;i<14;i++){const r=rng(i+260);const x=r()*W,y=((r()*H+u*(300+r()*200))%(H+200))-100;ctx.save();ctx.translate(x,y);ctx.rotate(u*2+i);ctx.fillStyle='#8fd18f';ctx.strokeStyle='#2f6a3a';ctx.lineWidth=4;ctx.beginPath();rr(-60,-30,120,60,6);ctx.fill();ctx.stroke();ctx.fillStyle='#2f6a3a';ctx.font='900 30px Inter';ctx.textAlign='center';ctx.fillText('R$',0,10);ctx.restore()}
  CAM(W/2,H*.48,lerp(1.0,1.08,seg(u,0,3.5)),()=>{softShadow(W/2,H*.48+420,380,40,.4);ctx.save();ctx.translate(W/2,H*.48);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-380,-400,760,800,20);ctx.fill();ctx.stroke();
  ctx.fillStyle='#16161c';ctx.font='900 60px Inter';ctx.textAlign='center';ctx.fillText('HOLERITE · MATHEUS',0,-300);ctx.fillStyle='#777';ctx.font='600 44px Inter';ctx.fillText('SALÁRIO',0,-160);
  const v=Math.round(lerp(2100,9900,easeIO(seg(u,.3,2.8)))/100)*100;ctx.fillStyle='#1f8a4a';ctx.font='900 150px Oswald';ctx.fillText('R$ '+v.toLocaleString('pt-BR'),0,20);
  ctx.fillStyle='#1f8a4a';ctx.font='900 120px Inter';ctx.fillText('⬆',0,220);ctx.restore()});
  letterIn(u);
});

// 4. "por causa da escolha de vocês": o sistema da empresa apita — aumento de 371% (2218–2221.5)
scene(2218,2221.5,(t)=>{const u=t-2218;ctx.fillStyle=lg(0,H,['#1a1f2e','#2a3148','#121521']);ctx.fillRect(0,0,W,H);const al=(Math.floor(u*4)%2)?1:.4;glow(W/2,H*.45,900,'rgba(255,70,70,A)',.18*al);
  CAM(W/2,H*.5,lerp(1.0,1.14,easeIO(seg(u,0,3.5))),()=>{softShadow(W/2,1420,460,40,.5);ctx.fillStyle='#22252e';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(110,560,860,620,26);ctx.fill();ctx.stroke();ctx.fillRect(500,1180,80,140);ctx.beginPath();rr(360,1310,360,30,10);ctx.fill();ctx.stroke();
    ctx.fillStyle=lg(580,1160,['#f4f6fa','#dde3ee']);ctx.fillRect(140,590,800,560);
    ctx.fillStyle='#2b3452';ctx.fillRect(140,590,800,70);ctx.fillStyle='#fff';ctx.font='800 34px Inter';ctx.textAlign='left';ctx.fillText('SISTEMA DE RH · ALMEIDA & CIA',170,638);
    const k=easeBack(seg(u,.4,.8));ctx.save();ctx.translate(540,880);ctx.scale(k,k);ctx.fillStyle=`rgba(210,40,40,${.9+.1*al})`;rr(-360,-170,720,340,28);ctx.fill();ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='900 80px Inter';ctx.fillText('⚠ ALERTA',0,-60);ctx.font='800 46px Inter';ctx.fillText('Aumento de 371%',0,20);ctx.fillText('Funcionário: Matheus',0,90);ctx.restore()});
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('ONTEM · 18:05',W/2,330,'800 60px Oswald','#ff8a8a',0);ctx.restore();letterIn(u);
});
SHAKE.push(2218.45);

// 5. à noite, chega um e-mail da diretora (2222–2225.5)
scene(2222,2225.5,(t)=>{const u=t-2222;CAM(W/2,H*.48,lerp(1.0,1.06,seg(u,0,3.5)),()=>s2Phone(u,{time:'22:10',date:'segunda-feira',screen:['#141a33','#24305c','#0d1124'],bg:['#1b1d36','#262a4a','#15172b'],msgs:[['E-MAIL · DIRETORIA','Helena Prado: AUDITORIA','agora',seg(u,.3,.7),'#c8352b']]}));letterIn(u)});
// 6. o e-mail aberto: auditoria amanhã, aumento suspeito: Matheus (2226–2229.5)
scene(2226,2229.5,(t)=>{const u=t-2226;CAM(W/2,H*.5,lerp(1.05,1.16,easeIO(seg(u,0,3.5))),()=>s2bPhoneMsg(u,{time:'22:11',screen:['#141a33','#24305c','#0d1124'],bg:['#1b1d36','#262a4a','#15172b'],k:seg(u,.15,.5),tag:'Helena Prado · Diretora',col:'#c8352b',icon:'✉',l1:'AUDITORIA amanhã, 10h.',l2:'Aumento suspeito:',l3:'MATHEUS.'}));letterIn(u)});

// 7. ele vai dormir preocupado: na cama gigante do chefe, de olhos abertos, suando (2230–2233.5)
scene(2230,2233.5,(t)=>{const u=t-2230;CAM(W/2,1200,lerp(1.06,1.0,easeOut(seg(u,0,3.5))),()=>{s2LuxRoom(u,{pan:0});ctx.fillStyle='rgba(12,16,48,.72)';ctx.fillRect(0,0,W,H);
  glow(1000,420,300,'rgba(190,210,255,A)',.25);
  // cabeça do seu Roberto (o corpo em que ele está hoje) no travesseiro, olhando pro teto
  ctx.save();ctx.translate(120,1200);ctx.rotate(-Math.PI/2);rbFace(0,0,.24,{headOnly:true,open:1.1,py:-20,brow:.6,sweat:1});ctx.restore();
  ctx.fillStyle='#3b4470';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(60,1290);ctx.quadraticCurveTo(380,1250+Math.sin(u*1.6)*6,740,1290);ctx.lineTo(740,1570);ctx.lineTo(-80,1570);ctx.lineTo(-80,1300);ctx.closePath();ctx.fill();ctx.stroke();});
  grade('rgba(60,80,200,.25)','rgba(255,140,60,.12)');letterIn(u);
});

// 9. sete da manhã: outra cama, outra casa — alguém de cabelo prateado se senta (de costas) (2234–2237.5)
scene(2234,2237.5,(t)=>{const u=t-2234;CAM(W/2,1200,lerp(1.12,1.0,easeOut(seg(u,0,1.5))),()=>{s2bFlat(u,{pan:0});
  // cama de casal com manta verde
  ctx.fillStyle='#f6f2ea';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(160,1240,760,330,34);ctx.fill();ctx.stroke();
  const k=easeOut(seg(u,.3,1.4));ctx.save();ctx.translate(540,1330-k*110);ctx.fillStyle='#8fb3d9';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.ellipse(0,0,140,160,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle=HL.skin;ctx.beginPath();ctx.ellipse(0,-190,78,88,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle=HL.hair;ctx.beginPath();ctx.moveTo(-92,-150);ctx.quadraticCurveTo(-104,-290,0,-292);ctx.quadraticCurveTo(104,-290,92,-150);ctx.lineTo(96,-120);ctx.lineTo(-96,-120);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();
  ctx.fillStyle='#4f8a6a';ctx.beginPath();ctx.moveTo(150,1340);ctx.quadraticCurveTo(540,1300,930,1340);ctx.lineTo(930,1570);ctx.lineTo(150,1570);ctx.closePath();ctx.fill();ctx.stroke();});
  grade('rgba(255,190,120,.22)','rgba(60,110,90,.15)');letterIn(u);
});
// 10. a câmera passa pelas plantas e pelos livros… e acha o gato laranja na cama (2238–2241.5)
scene(2238,2241.5,(t)=>{const u=t-2238;const pan=lerp(760,0,easeIO(seg(u,0,3.0)));CAM(W/2,1200,1.02,()=>{s2bFlat(u,{pan});
  ctx.save();ctx.translate(-pan*.0,0);ctx.fillStyle='#f6f2ea';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(160-pan,1240,760,330,34);ctx.fill();ctx.stroke();ctx.fillStyle='#4f8a6a';ctx.beginPath();ctx.moveTo(150-pan,1340);ctx.quadraticCurveTo(540-pan,1300,930-pan,1340);ctx.lineTo(930-pan,1570);ctx.lineTo(150-pan,1570);ctx.closePath();ctx.fill();ctx.stroke();
  e6Cat(560-pan,1336,1.2,u);ctx.restore();});
  grade('rgba(255,190,120,.2)','rgba(60,110,90,.15)');letterIn(u);
});
// 11. close no gato: ele abre os olhos, olha pra câmera e mia (2242–2245.5)
scene(2242,2245.5,(t)=>{const u=t-2242;ctx.fillStyle=lg(0,H,['#f3e6cf','#e6d2b0','#c9ad86']);ctx.fillRect(0,0,W,H);glow(W*.3,H*.25,800,'rgba(255,240,200,A)',.5);dust(u,33,20,'rgba(255,240,200,A)');
  CAM(W/2,H*.5,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{s2bCatFace(W/2,H*.5,1.2,u,{blink:u<.5||(u>2.6&&u<2.72),meow:u>1.3&&u<2.2?Math.sin(seg(u,1.3,2.2)*Math.PI):0,tilt:Math.sin(u*1.2)*.06})});
  if(u>1.3){s2bBubble(W/2,520,420,160,seg(u,1.3,1.6),'MIAU! 💙','#e8752a',-60)}
  letterIn(u);
});
// 12. o espelho: o vapor some e quem olha de volta é a dona Helena (2246–2249.5)
scene(2246,2249.5,(t)=>{const u=t-2246;const z=lerp(1.0,1.2,easeOut(seg(u,.3,.7)));const sh=(u>.3&&u<.8)?Math.sin(u*80)*10:0;
  CAM(W/2+sh,H*.45,z,()=>s2Mirror(u,()=>{ctx.fillStyle=lg(250,1400,['#a9c0b4','#86a092']);ctx.fillRect(110,250,860,1150);hlFace(540,900,1.0,{open:lerp(1,1.45,seg(u,.25,.45)),brow:seg(u,.25,.45),mouthO:seg(u,.3,.5)*.9,pupil:.65,pj:1})},{fog:lerp(.85,0,easeOut(seg(u,0,.35)))}));
  if(u>.3&&u<.5){ctx.fillStyle=`rgba(255,255,255,${.6*(1-seg(u,.3,.5))})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(2246.32);
// 13. o crachá na mesinha: HELENA PRADO · DIRETORA (2250–2253.5)
scene(2250,2253.5,(t)=>{const u=t-2250;ctx.fillStyle='#8a6446';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(255,255,255,.05)';for(let y=0;y<H;y+=46)ctx.fillRect(0,y,W,3);glow(W*.7,H*.25,900,'rgba(255,230,180,A)',.4);
  CAM(W/2,H*.5,lerp(1.2,1.0,easeOut(seg(u,0,2.5))),()=>{ctx.strokeStyle='#2f6fc9';ctx.lineWidth=18;ctx.beginPath();ctx.moveTo(540,0);ctx.quadraticCurveTo(470,300,540,560);ctx.stroke();
    softShadow(W/2+20,1420,420,50,.45);ctx.save();ctx.translate(W/2,H*.52);ctx.rotate(-.05);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-330,-430,660,860,30);ctx.fill();ctx.stroke();
    ctx.fillStyle='#2b3452';ctx.beginPath();rr(-330,-430,660,150,30);ctx.fill();ctx.fillRect(-330,-320,660,40);ctx.fillStyle='#d8c27a';ctx.font='800 50px Oswald';ctx.textAlign='center';ctx.fillText('ALMEIDA & CIA',0,-335);
    ctx.save();ctx.beginPath();rr(-170,-240,340,340,20);ctx.clip();ctx.fillStyle='#cfe0f0';ctx.fillRect(-170,-240,340,340);hlFace(0,-40,.42,{smile:6,brow:-.2});ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-240,340,340,20);ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 62px Inter';ctx.fillText('HELENA PRADO',0,200);ctx.fillStyle='#c8352b';ctx.font='900 58px Inter';ctx.fillText('DIRETORA',0,280);ctx.restore()});
  const k=easeBack(seg(u,.6,1.0));ctx.save();ctx.translate(lerp(-460,90,k),330);ctx.fillStyle='rgba(200,53,80,.95)';rr(0,0,460,120,20);ctx.fill();ctx.fillStyle='#fff';ctx.font='800 34px Inter';ctx.textAlign='left';ctx.fillText('A DIRETORA',30,46);ctx.font='900 50px Inter';ctx.fillText('DONA HELENA',30,100);ctx.restore();
  letterIn(u);
});
// 14. "a mesma que mandou o e-mail!": close dela em choque + o e-mail descendo (2254–2257.5)
scene(2254,2257.5,(t)=>{const u=t-2254;ctx.fillStyle=lg(0,H,['#5a1a2a','#7a2238','#3a0e1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(255,170,170,A)',.25);
  CAM(W/2,H*.6,lerp(1.12,1.0,easeOut(seg(u,0,.8))),()=>hlFace(W/2,H*.66,.82,{open:1.35,brow:1,mouthO:.7,pupil:.6,pj:1,px:lerp(0,-20,seg(u,.8,1.2)),py:-14}));
  const k=seg(u,.3,.7);ctx.save();ctx.translate(0,lerp(-300,0,easeBack(k)));notif(90,300,900,'#c8352b','E-MAIL · HELENA PRADO','AUDITORIA amanhã: MATHEUS','ontem',k);ctx.restore();
  if(u>1.2){const k2=easeBack(seg(u,1.2,1.5));ctx.save();ctx.translate(W/2,620);ctx.scale(k2,k2);txtC('FOI ELA! 😳',0,0,'900 110px Inter','#ffd84a',20);ctx.restore()}
  letterIn(u);
});
// 15/16. a mesma mensagem sem nome: "Toda escolha volta. Hoje, você decide de novo." (2258–2264)
scene(2258,2264,(t)=>{const u=t-2258;CAM(W/2,H*.48,lerp(1.0,1.15,easeIO(seg(u,0,6))),()=>s2bPhoneMsg(u,{time:'07:04',screen:['#1b1430','#3a2a66','#120c22'],bg:['#2a2440','#3c3260','#1a1630'],k:seg(u,.3,.8),tag:'Número desconhecido',l1:'Toda escolha volta.',l2:'Hoje, você decide',l3:'de novo.'}));
  if(u<.6){glow(W/2,H*.55,500,'rgba(160,120,255,A)',.4*(1-u/.6))}letterIn(u)});

// 17. na empresa, a diretora (ele) passa pelo corredor e todo mundo fica quieto (2266–2269.5)
scene(2266,2269.5,(t)=>{const u=t-2266;CAM(W/2,1300,lerp(1.0,1.06,seg(u,0,3.5)),()=>{s2Office(u,{pan:200});
  const sink=easeOut(seg(u,.4,1.0));
  [[0,170,1230],[1,400,1200],[2,690,1200],[0,910,1230]].forEach(([i,x,y],j)=>{coworker(i,x,y+sink*20,1.05,{look:x<540?.6:-.6,brow:-.6*sink,eye:1});s2Desk(x,y+160,.62,{})});
  const k=seg(u,0,3.5);hlFront(540,lerp(1320,1500,k),lerp(1.2,1.8,k),{walk:u*7,arms:'down',brow:-.3,look:Math.sin(u*2)*.3});});
  if(u>.9){const k=easeBack(seg(u,.9,1.2));ctx.save();ctx.translate(W/2,420);ctx.scale(k,k);txtC('. . . SILÊNCIO',0,0,'900 96px Inter','#fff',18);ctx.restore()}
  grade('rgba(255,170,90,.2)','rgba(40,60,120,.18)');letterIn(u);
});
// 18. na mesa dela, uma pasta vermelha: AUDITORIA (vista de cima) (2270–2273.5)
scene(2270,2273.5,(t)=>{const u=t-2270;ctx.fillStyle='#3a3040';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(255,255,255,.04)';for(let y=0;y<H;y+=46)ctx.fillRect(0,y,W,3);glow(W*.7,H*.2,900,'rgba(255,220,170,A)',.35);
  CAM(W/2,H*.5,lerp(.9,1.1,easeIO(seg(u,0,3.5))),()=>{
    ctx.save();ctx.translate(210,420);ctx.fillStyle='#f4ead8';ctx.beginPath();ctx.arc(0,0,70,0,7);ctx.fill();ctx.fillStyle='#3a1e14';ctx.beginPath();ctx.arc(0,0,52,0,7);ctx.fill();ctx.restore();
    ctx.save();ctx.translate(880,1500);ctx.rotate(.4);ctx.strokeStyle=HL.glass;ctx.lineWidth=10;ctx.beginPath();ctx.ellipse(-50,0,44,30,0,0,7);ctx.ellipse(50,0,44,30,0,0,7);ctx.stroke();ctx.restore();
    softShadow(W/2+20,H*.5+40,460,380,.45);
    ctx.save();ctx.translate(W/2,H*.5);ctx.rotate(-.06);ctx.fillStyle='#c8352b';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-340,-460,680,920,22);ctx.fill();ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(-340,-460,680,40);ctx.fillStyle='#fffdf6';ctx.beginPath();rr(-230,-260,460,140,12);ctx.fill();ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 62px Inter';ctx.textAlign='center';ctx.fillText('AUDITORIA',0,-168);ctx.restore();});
  letterIn(u);
});
// 19. a pasta abre: funcionário Matheus, de R$ 2.100 para R$ 9.900, reunião 10h (2274–2277.5)
scene(2274,2277.5,(t)=>{const u=t-2274;ctx.fillStyle='#3a3040';ctx.fillRect(0,0,W,H);glow(W*.7,H*.2,900,'rgba(255,220,170,A)',.35);
  CAM(W/2,H*.5,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>{softShadow(W/2,H*.52+520,460,50,.45);
    ctx.save();ctx.translate(W/2,H*.5);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-400,-560,800,1120,12);ctx.fill();ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 72px Inter';ctx.textAlign='center';ctx.fillText('AUDITORIA',0,-440);ctx.fillStyle='#c8352b';ctx.fillRect(-300,-410,600,8);
    const L=[['Funcionário:','Matheus','#16161c'],['Antes:','R$ 2.100','#16161c'],['Agora:','R$ 9.900','#d22'],['Reunião:','HOJE, 10H','#2f6fc9']];
    L.forEach(([a,b,c],i)=>{const y=-280+i*170;const al=seg(u,.2+i*.35,.5+i*.35);ctx.globalAlpha=al;ctx.textAlign='left';ctx.fillStyle='#666';ctx.font='700 48px Inter';ctx.fillText(a,-340,y);ctx.textAlign='right';ctx.fillStyle=c;ctx.font='900 60px Inter';ctx.fillText(b,340,y);ctx.globalAlpha=1;ctx.fillStyle='rgba(0,0,0,.1)';ctx.fillRect(-340,y+34,680,3)});
    ctx.restore();});
  letterIn(u);
});
// 20. "E você? Já tava suando, né?": ela (ele) olha pra câmera, suando (2278–2281.5)
scene(2278,2281.5,(t)=>{const u=t-2278;ctx.fillStyle=lg(0,H,['#2b3452','#3f4b74','#1d2439']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,210,150,A)',.35);
  CAM(W/2,H*.5,lerp(1.12,1.0,easeOut(seg(u,0,.8))),()=>hlFace(W/2,H*.5,.9,{open:1.15,brow:.7,smile:lerp(0,-10,seg(u,.6,1)),sweat:1,px:0,py:0}));
  const k=easeBack(seg(u,.4,.8));ctx.save();ctx.translate(W/2,330);ctx.scale(k,k);txtC('E VOCÊ? 😅',0,0,'900 110px Inter','#ffd84a',20);ctx.restore();
  letterIn(u);
});
// 21/22/23. dez horas, sala de reunião: o seu Roberto suando — "EU NÃO ASSINEI ISSO!" (2282–2289)
scene(2282,2289,(t)=>{const u=t-2282;CAM(W/2,1250,lerp(1.0,1.1,easeIO(seg(u,0,7))),()=>{s2bMeeting(u,{pan:u*12});
  const yell=seg(u,2.4,2.7)*(1-seg(u,5.0,5.3));const shk=yell>0?Math.sin(u*60)*4*yell:0;
  rbFront(540+shk,1240,1.6,{arms:yell>0?'point':'down',brow:yell>0?1:.6,mouthO:yell*.9,look:Math.sin(u*1.5)*.3});s2bTable(1250,1.0);
  ctx.fillStyle='#c8352b';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.save();ctx.translate(380,1262);ctx.rotate(-.05);rr(-90,-14,180,30,6);ctx.fill();ctx.stroke();ctx.restore();});
  // gotas de suor voando
  for(let i=0;i<3;i++){const ph=((u*1.3+i/3)%1);ctx.fillStyle=`rgba(170,215,255,${1-ph})`;ctx.beginPath();ctx.ellipse(540+(i-1)*120+ph*(i-1)*60,700-ph*80,10,16,0,0,7);ctx.fill()}
  if(u>2.4&&u<5.2)s2bBubble(W/2,520,820,200,seg(u,2.4,2.7),'EU NÃO ASSINEI|ISSO! 😰','#c8352b',-120);
  if(u>5.3){const k=easeBack(seg(u,5.3,5.6));ctx.save();ctx.translate(W/2,480);ctx.scale(k,k);ctx.fillStyle='rgba(20,20,30,.85)';rr(-430,-110,860,220,40);ctx.fill();txtC('TROCA DE CORPO?',0,-30,'900 70px Inter','#fff');txtC('NINGUÉM IA ACREDITAR 🤷',0,45,'800 50px Inter','#ffd84a');ctx.restore()}
  ctx.save();ctx.globalAlpha=seg(u,0,.4)*(1-seg(u,2.2,2.5));txtC('10:00 · SALA DE REUNIÃO',W/2,330,'800 60px Oswald','#2b3452',0);ctx.restore();
  grade('rgba(255,170,90,.15)','rgba(40,60,120,.15)');letterIn(u);
});
// 24. a porta abre e entra o Matheus — andando para a DIREITA, olhando para a direita (câmera de lado) (2290–2293.5)
scene(2290,2293.5,(t)=>{const u=t-2290;CAM(W/2,1300,lerp(1.0,1.06,seg(u,0,3.5)),()=>{ctx.fillStyle=lg(0,H,['#e9e4da','#dcd4c6','#bfb3a0']);ctx.fillRect(0,0,W,H);
  // porta à esquerda abrindo
  ctx.fillStyle='#fff8ea';ctx.fillRect(60,560,300,760);glow(210,940,500,'rgba(255,250,230,A)',.5);
  const op=easeOut(seg(u,0,.6));ctx.fillStyle='#8a6446';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(60,560);ctx.lineTo(60+300*(1-op*.75),560+40*op);ctx.lineTo(60+300*(1-op*.75),1320-40*op);ctx.lineTo(60,1320);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.strokeStyle='#5e5148';ctx.lineWidth=16;ctx.strokeRect(60,560,300,760);
  ctx.fillStyle=lg(1320,H,['#8e7a64','#6b5a48']);ctx.fillRect(0,1320,W,H-1320);
  const x=lerp(200,700,easeIO(seg(u,.4,3.3)));person(x,1330,1.6,{f:1,walk:u*8,look:.05});
  // ponta da mesa à direita
  ctx.fillStyle='#6a4a32';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(860,1180,300,60,10);ctx.fill();ctx.stroke();ctx.fillStyle='#4f3624';ctx.fillRect(880,1240,40,200);ctx.strokeRect(880,1240,40,200);});
  grade('rgba(255,170,90,.15)','rgba(40,60,120,.15)');letterIn(u);
});
// 25/26. ele senta e fala todo formal: "BOM DIA. VAMOS DIRETO À PAUTA." (2294–2299)
scene(2294,2299,(t)=>{const u=t-2294;CAM(W/2,1250,lerp(1.0,1.08,easeIO(seg(u,0,5))),()=>{s2bMeeting(u,{pan:200+u*10});
  personFront(540,1240,1.55,{brow:-.2,smile:4,look:0,eye:(u>1.0&&u<1.12)?.1:1});s2bTable(1250,1.0);
  // pasta e papéis alinhadíssimos
  ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=5;for(let i=0;i<3;i++){ctx.beginPath();rr(420+i*8,1262-i*4,240,22,4);ctx.fill();ctx.stroke()}});
  if(u>1.6)s2bBubble(W/2,560,860,210,seg(u,1.6,1.9),'BOM DIA. VAMOS|DIRETO À PAUTA. 🧐','#2b3452',0);
  ctx.save();ctx.globalAlpha=seg(u,.2,.6)*(1-seg(u,1.4,1.6));txtC('SÓ QUE...',W/2,420,'900 90px Inter','#c8352b',16);ctx.restore();
  grade('rgba(255,170,90,.15)','rgba(40,60,120,.15)');letterIn(u);
});
// 27/28. peraí! esse é o jeitinho da dona Helena — ela acordou no corpo do Matheus (cartões trocando) (2300–2307)
scene(2300,2307,(t)=>{const u=t-2300;ctx.fillStyle=lg(0,H,['#1d1a3a','#3a2a6a','#120f26']);ctx.fillRect(0,0,W,H);glow(W/2,H/2,900,'rgba(170,120,255,A)',.35);
  const sw=easeIO(seg(u,2.6,3.6));const a=sw*Math.PI;
  const pos=(s)=>[W/2+Math.cos(a+s)*260,H*.5+Math.sin(a+s)*140];
  const [x1,y1]=pos(Math.PI),[x2,y2]=pos(0);
  const card=(x,y,lab,fn)=>{ctx.save();ctx.translate(x,y);ctx.fillStyle='rgba(255,255,255,.95)';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-210,-260,420,520,40);ctx.fill();ctx.stroke();ctx.save();ctx.beginPath();rr(-190,-240,380,400,30);ctx.clip();ctx.fillStyle='#cfe0f0';ctx.fillRect(-190,-240,380,400);fn();ctx.restore();txtC(lab,0,210,'900 44px Inter','#16161c');ctx.restore()};
  card(x1,y1,'DENTRO: ELA',()=>{face(0,0,.5,{open:1.2,brow:.6,mouthO:.4});ctx.save();ctx.globalAlpha=.9;hlFace(120,-130,.16,{headOnly:true,smile:6});ctx.restore()});
  card(x2,y2,'DENTRO: ELE',()=>{hlFace(0,-10,.5,{open:1.3,brow:.8,mouthO:.5});ctx.save();ctx.globalAlpha=.9;face(120,-130,.16,{headOnly:true,smile:6});ctx.restore()});
  if(u>2.6){ctx.save();ctx.translate(W/2,H*.5);ctx.rotate(u*2);ctx.strokeStyle='#ffd84a';ctx.lineWidth=14;ctx.lineCap='round';for(const s of[0,Math.PI]){ctx.beginPath();ctx.arc(0,0,420,s+.3,s+1.4);ctx.stroke();const e=s+1.4;ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.moveTo(Math.cos(e)*420,Math.sin(e)*420);ctx.lineTo(Math.cos(e-.12)*470,Math.sin(e-.12)*470);ctx.lineTo(Math.cos(e-.12)*370,Math.sin(e-.12)*370);ctx.closePath();ctx.fill()}ctx.restore()}
  txtC(u<2.6?'PERAÍ... 🤔':'TROCARAM DE NOVO!',W/2,360,'900 90px Inter','#fff',18);
  letterIn(u);
});
// 29. quem está sendo investigada… é ela! (o corpo do Matheus, com a pasta vermelha) (2308–2311.5)
scene(2308,2311.5,(t)=>{const u=t-2308;CAM(W/2,1250,lerp(1.12,1.0,easeOut(seg(u,0,1.0))),()=>{s2bMeeting(u,{pan:240});
  const pan=seg(u,.6,1.0);personFront(540,1240,1.55,{brow:1.1*pan,mouthO:.7*pan,eye:1.25,look:-.3});s2bTable(1250,1.0);
  ctx.save();ctx.translate(540,1262);ctx.rotate(.04);ctx.fillStyle='#c8352b';ctx.strokeStyle=OUT;ctx.lineWidth=6;rr(-160,-18,320,40,6);ctx.fill();ctx.stroke();ctx.fillStyle='#fff';ctx.font='900 26px Inter';ctx.textAlign='center';ctx.fillText('AUDITORIA · MATHEUS',0,10);ctx.restore();});
  if(u>.6){const k=easeBack(seg(u,.6,.9));ctx.save();ctx.translate(W/2,480);ctx.scale(k,k);ctx.rotate(-.06);ctx.fillStyle='#c8352b';rr(-380,-90,760,180,30);ctx.fill();txtC('INVESTIGADA 😱',0,0,'900 90px Inter','#fff');ctx.restore()}
  letterIn(u);
});
SHAKE.push(2308.62);
// 30. ela olha pra ele, desesperada: "ME AJUDA!" (close no rosto do Matheus) (2312–2315.5)
scene(2312,2315.5,(t)=>{const u=t-2312;ctx.fillStyle=lg(0,H,['#2a3a5a','#3a4f7a','#1a2440']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,220,180,A)',.3);
  CAM(W/2,H*.6,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>face(W/2,H*.62,.9,{open:1.25,brow:1.2,mouthO:.5+.2*Math.sin(u*8),px:Math.sin(u*2)*10,py:-8}));
  s2bBubble(W/2,470,640,180,seg(u,.5,.8),'ME AJUDA! 🙏','#c8352b',60);letterIn(u);
});
// 31. a caneta da auditoria na mão dele (mão da diretora, manga vinho) sobre o parecer (2316–2319.5)
scene(2316,2319.5,(t)=>{const u=t-2316;ctx.fillStyle='#fffdf6';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(0,0,0,.06)';for(let y=200;y<H;y+=90)ctx.fillRect(80,y,W-160,4);
  CAM(W/2,H*.5,lerp(1.0,1.15,easeIO(seg(u,0,3.5))),()=>{ctx.fillStyle='#16161c';ctx.font='900 64px Inter';ctx.textAlign='center';ctx.fillText('PARECER DA AUDITORIA',W/2,520);ctx.fillStyle='#c8352b';ctx.fillRect(160,560,760,8);
    ctx.textAlign='left';ctx.font='800 54px Inter';ctx.strokeStyle='#333';ctx.lineWidth=6;ctx.strokeRect(140,700,70,70);ctx.fillStyle='#1f8a4a';ctx.fillText('A · ARQUIVAR',240,756);ctx.strokeRect(140,860,70,70);ctx.fillStyle='#2f5fc9';ctx.fillText('B · DEVOLVER',240,916);
    ctx.fillStyle='#555';ctx.font='600 50px Inter';ctx.fillText('Assinatura:',80,1150);ctx.strokeStyle='#333';ctx.beginPath();ctx.moveTo(380,1160);ctx.lineTo(1000,1160);ctx.stroke();
    const hov=Math.sin(u*3)*30;ctx.save();ctx.translate(560+hov,880);ctx.rotate(-.7);softShadow(40,120,160,20,.25);ctx.fillStyle='#d8b04a';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-24,-420,48,420,20);ctx.fill();ctx.stroke();ctx.fillStyle='#2a2a30';ctx.beginPath();ctx.moveTo(-24,0);ctx.lineTo(24,0);ctx.lineTo(0,70);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle=HL.skin;ctx.beginPath();ctx.ellipse(10,-160,84,104,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle=HL.blz;ctx.beginPath();rr(-80,-330,180,160,30);ctx.fill();ctx.stroke();ctx.fillStyle=HL.blouse;ctx.fillRect(-80,-200,180,30);ctx.restore();});
  glow(W*.8,H*.2,700,'rgba(255,220,170,A)',.25);letterIn(u);
});
// 32. tentação A: carimbo ARQUIVADO e o salário fica em 9.900 (2320–2323.5)
scene(2320,2323.5,(t)=>{const u=t-2320;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.3);
  for(let i=0;i<14;i++){const r=rng(i+360);const x=r()*W,y=((r()*H+u*(300+r()*200))%(H+200))-100;ctx.save();ctx.translate(x,y);ctx.rotate(u*2+i);ctx.fillStyle='#8fd18f';ctx.strokeStyle='#2f6a3a';ctx.lineWidth=4;ctx.beginPath();rr(-60,-30,120,60,6);ctx.fill();ctx.stroke();ctx.fillStyle='#2f6a3a';ctx.font='900 30px Inter';ctx.textAlign='center';ctx.fillText('R$',0,10);ctx.restore()}
  CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>{softShadow(W/2,H*.5+420,380,40,.4);ctx.save();ctx.translate(W/2,H*.5);ctx.fillStyle='#c8352b';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-360,-420,720,840,20);ctx.fill();ctx.stroke();ctx.fillStyle='#fffdf6';ctx.beginPath();rr(-230,-300,460,130,12);ctx.fill();ctx.stroke();ctx.fillStyle='#16161c';ctx.font='900 58px Inter';ctx.textAlign='center';ctx.fillText('AUDITORIA',0,-214);
    ctx.fillStyle='#fff';ctx.font='900 120px Oswald';ctx.fillText('R$ 9.900',0,80);
    if(u>.9){const k=seg(u,.9,1.15);ctx.save();ctx.translate(0,260);ctx.rotate(-.14);const sc=lerp(2.2,1,easeOut(k));ctx.scale(sc,sc);ctx.globalAlpha=clamp(k*3);ctx.strokeStyle='#ffd84a';ctx.lineWidth=14;ctx.strokeRect(-300,-80,600,160);ctx.fillStyle='#ffd84a';ctx.font='900 104px Inter';ctx.fillText('ARQUIVADO',0,38);ctx.restore()}
    ctx.restore()});
  txtC('A?',W/2,330,'900 120px Inter','#7dffa8',20);letterIn(u);
});
SHAKE.push(2320.92);
// 33. ou B: o salário volta para 2.100 e a mão levanta — "FUI EU" (2324–2327.5)
scene(2324,2327.5,(t)=>{const u=t-2324;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,170,255,A)',.3);
  CAM(W/2,H*.48,lerp(1.0,1.08,seg(u,0,3.5)),()=>{softShadow(W/2,H*.48+420,380,40,.4);ctx.save();ctx.translate(W/2,H*.48);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-380,-400,760,800,20);ctx.fill();ctx.stroke();
  ctx.fillStyle='#16161c';ctx.font='900 60px Inter';ctx.textAlign='center';ctx.fillText('HOLERITE · MATHEUS',0,-300);ctx.fillStyle='#777';ctx.font='600 44px Inter';ctx.fillText('SALÁRIO',0,-160);
  const v=Math.round(lerp(9900,2100,easeIO(seg(u,.3,2.4)))/100)*100;ctx.fillStyle='#2f5fc9';ctx.font='900 150px Oswald';ctx.fillText('R$ '+v.toLocaleString('pt-BR'),0,20);
  ctx.fillStyle='#2f5fc9';ctx.font='900 120px Inter';ctx.fillText('⬇',0,220);ctx.restore()});
  if(u>1.4){const k=easeBack(seg(u,1.4,1.8));ctx.save();ctx.translate(W/2,1640);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-300,-80,600,150,30);ctx.fill();txtC('"FUI EU." ✋',0,0,'900 76px Inter','#16161c');ctx.restore()}
  txtC('B?',W/2,330,'900 120px Inter','#ffd84a',20);letterIn(u);
});
// 34. a mensagem para pensar: uma balança — "a conta dos outros" x "a sua conta" (2328–2331.5)
scene(2328,2331.5,(t)=>{const u=t-2328;ctx.fillStyle=lg(0,H,['#0c0a14','#1a1530','#08070c']);ctx.fillRect(0,0,W,H);beams(W/2,0,Math.PI/2,5,1600,.08);glow(W/2,H*.45,800,'rgba(255,220,160,A)',.2);
  const tilt=lerp(-.22,.22,easeIO(seg(u,1.2,2.6)));CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>{ctx.save();ctx.translate(W/2,1000);ctx.strokeStyle='#d8b04a';ctx.fillStyle='#d8b04a';ctx.lineWidth=16;ctx.beginPath();ctx.moveTo(0,-300);ctx.lineTo(0,420);ctx.stroke();ctx.beginPath();rr(-160,410,320,40,12);ctx.fill();
    ctx.save();ctx.translate(0,-300);ctx.rotate(tilt);ctx.beginPath();ctx.moveTo(-380,0);ctx.lineTo(380,0);ctx.stroke();
    for(const sx of[-1,1]){ctx.save();ctx.translate(sx*380,0);ctx.rotate(-tilt);ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-110,260);ctx.moveTo(0,0);ctx.lineTo(110,260);ctx.stroke();ctx.beginPath();ctx.ellipse(0,270,150,34,0,0,7);ctx.fill();
      ctx.font='900 42px Inter';ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText(sx<0?'DOS OUTROS':'A SUA',0,350);ctx.font='900 90px Inter';ctx.fillText(sx<0?'⚖️':'💸',0,230);ctx.fillStyle='#d8b04a';ctx.restore()}
    ctx.restore();ctx.restore()});
  txtC('FÁCIL SER JUSTO...',W/2,340,'900 90px Inter','#fff',16);if(u>1.8){ctx.save();ctx.globalAlpha=seg(u,1.8,2.2);txtC('...QUANDO NÃO É COM VOCÊ',W/2,450,'800 60px Inter','#ffd84a',12);ctx.restore()}
  letterIn(u);
});
// 35. no espelho da sala: a diretora olha… e o reflexo é o próprio Matheus, pensativo (2332–2335.5)
scene(2332,2335.5,(t)=>{const u=t-2332;const z=lerp(1.0,1.12,easeIO(seg(u,0,3.5)));
  CAM(W/2,H*.45,z,()=>s2Mirror(u,()=>{ctx.fillStyle=lg(250,1400,['#7c8a9a','#5c6878']);ctx.fillRect(110,250,860,1150);const m=easeIO(seg(u,.8,1.8));
    ctx.save();ctx.globalAlpha=1-m;hlFace(540,900,1.0,{open:1,brow:.3});ctx.restore();ctx.save();ctx.globalAlpha=m;withP({},()=>face(540,900,1.0,{open:.9,brow:.4,py:6,lid:.25}));ctx.restore()}));
  if(u>2){ctx.save();ctx.globalAlpha=seg(u,2,2.4);ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,1460,W,200);txtC('E SE FOSSE VOCÊ? 🪞',W/2,1560,'900 80px Inter','#ffd84a',14);ctx.restore()}
});
// 36/37. ESCOLHA: A (verde) x B — sobre o rosto da diretora, com a caneta (2336–2343)
scene(2336,2343,(t)=>{const u=t-2336;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=.5;hlFace(W/2,H*.7,.8,{open:1,brow:.5,px:-20,py:10});ctx.restore();ctx.fillStyle='rgba(10,8,14,.42)';ctx.fillRect(0,0,W,H);
  txtC('O QUE ELE FAZ?',W/2,320,'900 92px Inter','#fff',18);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));
  ctx.textAlign='left';
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,140,80,.95)';rr(70,430,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('A',120,590);ctx.font='800 50px Inter';ctx.fillText('ARQUIVAR e ficar',250,530);ctx.fillText('com o aumento 💰',250,595);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(60,90,200,.95)';rr(70,690,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('B',120,850);ctx.font='800 50px Inter';ctx.fillText('DEVOLVER e',250,790);ctx.fillText('assumir o erro ✋',250,855);ctx.restore();
  if(u>1.4){const k=.5+.5*Math.sin(u*5);ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('COMENTA A OU B 👇',W/2,1080,'900 74px Inter',`rgb(255,${200+55*k},74)`,16);ctx.restore()}
});
// FINAL: cartela da série (2390–2393.2)
scene(2390,2393.2,(t)=>{const u=t-2390;ctx.fillStyle='#07070c';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,50,W/2,H*.42,900);g.addColorStop(0,'rgba(120,90,255,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.36);ctx.scale(k,k);ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='900 92px Inter';ctx.fillText('E SE VOCÊ',0,0);ctx.fillText('ACORDASSE NA',0,110);ctx.fillStyle='#ffd84a';ctx.font='900 128px Inter';ctx.fillText('VIDA DE OUTRA',0,250);ctx.fillText('PESSOA?',0,390);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 3 · AMANHÃ 18H',W/2,H*.36+560);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.36+660);ctx.restore()});
