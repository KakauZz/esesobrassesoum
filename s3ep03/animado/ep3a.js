// ===== S3 EP3 — "A manga amarela" (venceu A: ele ficou longe da 303) — cenários e personagens =====
// usa teaser.js, m6/m7, e1flat.js, ep1.js e ep2.js (e2Chat, e2Box, e2Note, e2CatSleep, e2Window...)
function tzLock(u,hh){ctx.fillStyle=lg(-440,440,['#1b2a6b','#3a1f6e','#0e1433']);ctx.fillRect(-210,-440,420,880);
  glow(80,-200,380,'rgba(120,140,255,A)',.35);
  txtC(hh,0,-250,'700 120px Oswald','#ffffff');txtC(hh.startsWith('00:')?'domingo, 29 de novembro':'sábado, 28 de novembro',0,-165,'600 24px Inter','rgba(255,255,255,.8)')}
// Júlia (303) — SEMPRE de costas: moletom amarelo, cabelo comprido escuro, fone de ouvido
const JPAL={hood:'#f2c230',hoodS:'#e0ae1c',hoodD:'#c9970f',hoodL:'#ffd75a',hair:'#2a1a14',hairD:'#1c110c',hairM:'#3a2418',hairL:'#4d3122',jean:'#3b3f58',jeanS:'#30344a',jeanD:'#262a3c',skin:'#e8b48c',skinS:'#d99d76'};
function e3Julia(x,y,s,o){o=o||{};const t=o.t||0;const wk=o.walk,bob=wk==null?0:Math.abs(Math.cos(wk))*8;
  matheusView(x,y,s,'back',Object.assign({t,pal:JPAL},o));
  ctx.save();ctx.translate(x,y-bob*s);ctx.scale(s,s);const sw=Math.sin(t*1.6)*3+(wk==null?0:Math.sin(wk)*4);
  // cabelo comprido por cima (cobre o cabelo do modelo)
  ctx.fillStyle='#22150f';ctx.beginPath();ctx.moveTo(-98,-520);ctx.quadraticCurveTo(-104,-610,0,-614);ctx.quadraticCurveTo(104,-610,98,-520);
  ctx.quadraticCurveTo(100,-420,72+sw,-352);ctx.quadraticCurveTo(0,-330,-72+sw,-352);ctx.quadraticCurveTo(-100,-420,-98,-520);ctx.fill();
  ctx.strokeStyle='#3a2418';ctx.lineWidth=5;ctx.lineCap='round';for(const k of[-56,-22,14,48]){ctx.beginPath();ctx.moveTo(k,-596);ctx.quadraticCurveTo(k*1.1,-470,k*.85+sw,-356);ctx.stroke()}
  ctx.strokeStyle='rgba(110,80,60,.6)';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(-60,-590);ctx.quadraticCurveTo(-10,-608,40,-596);ctx.stroke();
  // fone de ouvido (arco por cima + conchas)
  ctx.strokeStyle='#1b1d26';ctx.lineWidth=16;ctx.beginPath();ctx.arc(0,-520,104,Math.PI*1.08,Math.PI*1.92);ctx.stroke();
  for(const sd of[-1,1]){fRect(sd*104-22,-548,44,66,'#1b1d26',18);fRect(sd*104-14,-540,28,50,'#f2c230',12)}
  // notas saindo do fone
  if(o.notes){for(let j=0;j<4;j++){const q=(t*.55+j/4)%1;ctx.save();ctx.globalAlpha=Math.min(1,(1-q)*1.6)*o.notes;txtC(j%2?'♪':'♫',120+q*120+Math.sin(q*9+j)*20,-560-q*260,`900 ${46+q*20}px Inter`,'#ffe27a');ctx.restore()}}
  ctx.restore()}
// palheta com estrelinha amarela
function e3Pick(x,y,s,rot){ctx.save();ctx.translate(x,y);ctx.rotate(rot||0);ctx.scale(s,s);
  ctx.fillStyle='rgba(0,0,0,.25)';ctx.beginPath();ctx.moveTo(-58,-46);ctx.quadraticCurveTo(6,-80,70,-42);ctx.quadraticCurveTo(64,30,8,84);ctx.quadraticCurveTo(-52,30,-58,-46);ctx.fill();
  ctx.fillStyle='#6a3fb5';ctx.strokeStyle='#3e2370';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-64,-52);ctx.quadraticCurveTo(0,-86,64,-52);ctx.quadraticCurveTo(58,24,0,78);ctx.quadraticCurveTo(-58,24,-64,-52);ctx.fill();ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,.25)';ctx.beginPath();ctx.ellipse(-24,-42,22,8,-.3,0,7);ctx.fill();
  e3Star(0,-8,26,'#f2c230');ctx.restore()}
function e3Star(x,y,r,c){ctx.fillStyle=c;ctx.beginPath();for(let j=0;j<10;j++){const rr_=j%2?r*.43:r,a=j*Math.PI/5-Math.PI/2;ctx.lineTo(x+Math.cos(a)*rr_,y+Math.sin(a)*rr_)}ctx.closePath();ctx.fill()}
// corredor de lado (câmera acompanha). cx = posição do mundo no centro da tela
const E3DOORS=[[300,'301'],[1100,'302'],[1900,'303'],[2700,'ELEV']];
function e3HallSide(cx,o){o=o||{};const ox=540-cx;fRect(0,0,W,H,'#d9c9a0');fRect(0,1180,W,22,'#b7a679');fRect(0,1600,W,H-1600,'#8c7553');
  ctx.fillStyle='#7e6849';for(let x=((ox%160)+160)%160-160;x<W;x+=160)ctx.fillRect(x,1600,6,H-1600);fRect(0,1592,W,16,'#6b5a3c');
  for(let k=0;k<6;k++){const lx=ox+k*500+100;if(lx<-200||lx>1300)continue;fRect(lx-40,120,80,24,'#efe6cf',8);glow(lx,150,260,'rgba(255,240,200,A)',.35)}
  for(const [dx,n] of E3DOORS){const x=ox+dx;if(x<-400||x>1500)continue;
    if(n==='ELEV'){fRect(x-200,640,400,960,'#7d8794');fRect(x-180,660,360,940,'#a9b3bf');fRect(x-2,660,4,940,'#7d8794');fRect(x+210,1000,40,80,'#5a6370',8);fCirc(x+230,1040,10,'#ffd23f');fRect(x-60,580,120,46,'#1b1d26',8);txtC('5',x,604,'800 30px Inter','#ff4d4d');continue}
    fRect(x-150,700,300,900,'#6b5a3c');fRect(x-130,720,260,880,n==='303'?'#7a5a3a':'#8a6a48');fCirc(x+100,1180,12,'#d8b35a');
    fRect(x-46,820,92,42,'#d8b35a',6);txtC(n,x,842,'900 30px Inter','#3a2418');fRect(x-130,1596,260,8,'#3e3022');
    if(n==='303'&&o.glow303)glow(x,1150,300,'rgba(255,210,80,A)',o.glow303)}
  // capacho 303 com estrelinha
  {const x=ox+1900;if(x>-300&&x<1400){fRect(x-120,1600,240,26,'#5e4a30',8);e3Star(x,1613,12,'#f2c230')}}}
// elevador visto do corredor (de frente). o:{open 0..1, inside(fn), hand 0..1, floorTxt}
function e3ElevOut(t,o){o=o||{};fRect(0,0,W,H,'#d9c9a0');fRect(0,1600,W,H-1600,'#8c7553');fRect(0,1592,W,16,'#6b5a3c');glow(540,200,500,'rgba(255,240,200,A)',.3);
  fRect(200,420,680,1190,'#7d8794',10);fRect(230,450,620,1150,'#5a6370');
  ctx.save();ctx.beginPath();ctx.rect(240,460,600,1140);ctx.clip();
  fRect(240,460,600,1140,'#e6dcc4');fRect(240,1480,600,120,'#b9ab8c');fRect(240,1100,600,14,'#c9b98f');fRect(300,1000,480,12,'#b8bec8',6);
  glow(540,520,360,'rgba(255,250,230,A)',.4);if(o.inside)o.inside();
  const op=clamp(o.open??1),dw=300*(1-op);fRect(240,460,dw,1140,'#a9b3bf');fRect(840-dw,460,dw,1140,'#a9b3bf');
  if(dw>4){fRect(240+dw-6,460,6,1140,'#8d99a8');fRect(840-dw,460,6,1140,'#8d99a8')}
  ctx.restore();
  fRect(470,340,140,56,'#1b1d26',10);txtC(o.floorTxt||'3',540,369,'800 36px Inter','#ff4d4d');fRect(900,940,46,96,'#5a6370',10);fCirc(923,988,13,'#ffd23f');
  if(o.hand>0){const q=easeOut(clamp(o.hand));const dw=300*(1-clamp(o.open??1));const hx=lerp(-80,240+dw-14,q),hy=1060;
    ctx.strokeStyle='#e0ae1c';ctx.lineWidth=96;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-200,1180);ctx.lineTo(hx-30,hy);ctx.stroke();ctx.strokeStyle='#f2c230';ctx.lineWidth=80;ctx.stroke();
    fRect(hx-70,hy-48,40,96,'#c9970f',16);ctx.fillStyle='#e8b48c';ctx.beginPath();ctx.ellipse(hx,hy,42,50,0,0,7);ctx.fill();for(let k=0;k<4;k++)fRect(hx+18,hy-44+k*24,40,20,'#e8b48c',10)}}
// elevador visto de dentro (de costas, olhando pras portas). o:{open, floorTxt, lobby}
function e3ElevIn(t,o){o=o||{};fRect(0,0,W,H,'#cfc4a8');fRect(0,1560,W,H-1560,'#a39577');ctx.fillStyle='rgba(0,0,0,.06)';for(let x=0;x<W;x+=120)ctx.fillRect(x,1560,4,H-1560);
  fRect(0,0,W,90,'#e8e0cc');glow(540,60,600,'rgba(255,250,230,A)',.35);
  fRect(250,300,580,1270,'#7d8794',8);
  ctx.save();ctx.beginPath();ctx.rect(270,320,540,1250);ctx.clip();
  // térreo / corredor por trás das portas
  if(o.lobby){fRect(270,320,540,1250,'#f4ecd8');fRect(270,1300,540,270,'#d8c7a2');glow(540,700,500,'rgba(255,255,230,A)',.6);fRect(640,900,90,400,'#8a6a48',6);fCirc(330,1180,70,'#4f9a5a');fCirc(300,1120,50,'#5cae66');fRect(316,1230,40,70,'#a0623c',6);txtC('TÉRREO',540,420,'900 44px Inter','#8a7a5a')}
  else fRect(270,320,540,1250,'#d9c9a0');
  const op=clamp(o.open||0),dw=270*(1-op);fRect(270,320,dw,1250,'#a9b3bf');fRect(810-dw,320,dw,1250,'#a9b3bf');if(dw>4){fRect(270+dw-6,320,6,1250,'#8d99a8');fRect(810-dw,320,6,1250,'#8d99a8')}
  ctx.restore();
  fRect(440,200,200,80,'#1b1d26',12);txtC(o.floorTxt||'3',540,242,'800 52px Oswald','#ff4d4d');
  if(o.arrow)txtC('▼',610,240,'800 30px Inter','#ff4d4d');
  fRect(880,700,110,330,'#9aa3ae',14);for(let k=0;k<6;k++){const on=o.btn===k;fCirc(935,750+k*48,16,on?'#ffd23f':'#e0e4ea')}
  fRect(0,1160,120,18,'#b8bec8',8);fRect(960,1160,120,18,'#b8bec8',8)}
// close no Matheus dentro do elevador (fundo de metal)
function e3ElevBack(t){fRect(0,0,W,H,'#b9bec6');ctx.fillStyle='rgba(255,255,255,.12)';for(let x=-200;x<W;x+=180){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x+120,0);ctx.lineTo(x+420,H);ctx.lineTo(x+300,H);ctx.fill()}
  fRect(0,1200,W,24,'#d8dce2',10);glow(540,0,700,'rgba(255,250,230,A)',.35)}
// caderno velho
function e3Notebook(x,y,s,rot,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.rotate(rot||0);ctx.scale(s,s);
  ctx.fillStyle='rgba(0,0,0,.3)';rr(-210,-270,440,560,18);ctx.fill();fRect(-220,-280,440,560,'#2f5aa8',16);fRect(-220,-280,40,560,'#24488a',12);
  for(let k=0;k<9;k++)fCirc(-200,-240+k*60,9,'#d8dce2');
  fRect(-150,-200,330,170,'#fbf6e6',8);ctx.textAlign='left';ctx.textBaseline='alphabetic';ctx.font='700 54px Caveat';ctx.fillStyle='#1f2f6b';ctx.fillText('Músicas do',-130,-135);ctx.fillText('Matheus',-130,-75);
  ctx.font='700 46px Caveat';ctx.fillStyle='#c0392b';ctx.fillText('14 anos',-40,30);
  e3Star(110,120,34,'#f2c230');txtC('♫',-80,170,'900 80px Inter','#fbf6e6');fCirc(120,200,26,'#ff7a33');txtC(':)',120,203,'800 24px Inter','#fff');
  ctx.restore()}
// página com partitura escrita à mão
function e3Page(cx,cy,s,k,glowK){ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);
  ctx.fillStyle='rgba(0,0,0,.35)';rr(-330,-430,680,880,10);ctx.fill();fRect(-340,-440,680,880,'#fbf6e6',6);
  ctx.textAlign='left';ctx.font='700 64px Caveat';ctx.fillStyle='#1f2f6b';ctx.fillText('Música nº 1',-280,-340);ctx.font='700 40px Caveat';ctx.fillText('(sem nome ainda)',-280,-290);
  const N=[[0,2],[1,4],[2,3],[3,5],[4,4],[5,2],[6,3],[7,1]];
  for(let r=0;r<3;r++){const y0=-200+r*210;ctx.strokeStyle='#333';ctx.lineWidth=2.5;for(let l=0;l<5;l++){ctx.beginPath();ctx.moveTo(-290,y0+l*20);ctx.lineTo(290,y0+l*20);ctx.stroke()}
    N.forEach(([i,h],j)=>{const q=clamp((k||1)*3-r-j/8);if(q<=0)return;const nx=-240+i*68,ny=y0+80-h*10-(r*7+j)%3*10;ctx.globalAlpha=q;ctx.fillStyle='#1f2f6b';ctx.beginPath();ctx.ellipse(nx,ny,13,10,-.4,0,7);ctx.fill();ctx.fillRect(nx+10,ny-62,4,62);ctx.globalAlpha=1;
      if(glowK>0){ctx.save();ctx.globalAlpha=glowK*(.5+.5*Math.sin(cx+j+r));glow(nx,ny,40,'rgba(255,210,60,A)',.9);ctx.restore()}})}
  ctx.font='700 44px Caveat';ctx.fillStyle='#c0392b';ctx.fillText('não mostrar pra ninguém!!',-260,400);ctx.restore()}
// placar do EP. 2 (sem números reais)
eval(e2Placar.toString().replace('function e2Placar','function e3Placar_').replace('RESULTADO DO EP. 1','RESULTADO DO EP. 2').replace("'NÃO ABRIU A PORTA',0,60,'900 64px Inter'","'FICOU LONGE DA 303',0,60,'900 60px Inter'"));
function e3Placar(u,w){e3Placar_(u,w)}
// parede da sala com o som do violão atravessando
function e3WallNotes(t,k){for(let j=0;j<7;j++){const q=(t*.35+j/7)%1;const x=120+q*700,y=900+Math.sin(q*7+j)*160-j*30;ctx.save();ctx.globalAlpha=k*Math.sin(q*Math.PI);txtC(j%2?'♪':'♫',x,y,`900 ${60+20*Math.sin(j)}px Inter`,'#ffe27a');ctx.restore()}}
