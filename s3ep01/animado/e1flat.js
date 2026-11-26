// ===== cenários no estilo flat (sem gradiente/brilho, formas simples) — sobrescreve os antigos =====
function fRect(x,y,w,h,c,r){ctx.fillStyle=c;if(r){rr(x,y,w,h,r);ctx.fill()}else ctx.fillRect(x,y,w,h)}
function fCirc(x,y,r,c){ctx.fillStyle=c;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill()}
function fPoly(p,c){ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(p[0][0],p[0][1]);for(const q of p.slice(1))ctx.lineTo(q[0],q[1]);ctx.closePath();ctx.fill()}
function tzStudio(top,bot){fRect(0,0,W,H,'#1c2350');fRect(0,1380,W,H-1380,'#151a3c');
  ctx.fillStyle='rgba(255,255,255,.03)';for(let x=0;x<W;x+=120)ctx.fillRect(x,0,60,1380)}
function tzSpot(x,y,a){ctx.save();ctx.globalAlpha=.10*a;fPoly([[x-90,0],[x+90,0],[x+320,y],[x-320,y]],'#fff3dc');ctx.globalAlpha=.18*a;ctx.fillStyle='#fff3dc';ctx.beginPath();ctx.ellipse(x,y,320,46,0,0,7);ctx.fill();ctx.restore()}
function fPlant(x,y,s,dark){ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  const L=dark?['#2f6b52','#3c8463']:['#3f9b6e','#56b585'];
  for(const [a,l,c] of [[-.9,90,0],[-.4,110,1],[0,120,0],[.45,105,1],[.9,85,0]]){ctx.save();ctx.rotate(a);ctx.fillStyle=L[c];ctx.beginPath();ctx.ellipse(0,-l/2-30,18,l/2,0,0,7);ctx.fill();ctx.restore()}
  fPoly([[-40,-30],[40,-30],[30,40],[-30,40]],dark?'#8a4a35':'#d0704a');fRect(-44,-40,88,16,dark?'#9b5640':'#e07f57',6);ctx.restore()}
function e1Apto(u,o){o=o||{};const N=!o.day;
  const wall=N?'#2c3264':'#f3d9b9',wall2=N?'#262b58':'#e9caa5',floor=N?'#3b3152':'#c99566',floor2=N?'#342b49':'#ba8758';
  fRect(0,0,W,1300,wall);fRect(0,1040,W,260,wall2);fRect(0,1036,W,8,N?'#343b72':'#f8e6cf');
  fRect(0,1300,W,H-1300,floor);ctx.fillStyle=floor2;for(let y=1340;y<H;y+=70)ctx.fillRect(0,y,W,6);fRect(0,1290,W,14,N?'#20244a':'#a87a4d');
  // janela
  fRect(60,320,350,490,N?'#3d4685':'#ffffff',16);fRect(80,340,310,450,N?'#18204f':'#9fd6f6',8);
  ctx.save();rr(80,340,310,450,8);ctx.clip();
  if(N){fCirc(330,410,30,'#f5f0d6');fCirc(316,400,26,'#18204f');for(const [x,y,r] of [[130,380,2],[200,430,2],[270,370,2.5],[160,470,2]])fCirc(x,y,r,'rgba(255,255,255,.7)')}
  else{for(const [x,y] of [[150,420],[300,470]]){fCirc(x,y,26,'#fff');fCirc(x+28,y+6,20,'#fff');fCirc(x-26,y+8,18,'#fff')}}
  const r=rng(12);for(let i=0;i<10;i++){const bx=80+i*32,bh=90+r()*220;fRect(bx,790-bh,30,bh,N?'#10163c':'#bcd3e6');if(N)for(let j=0;j<6;j++)if(r()<.45)fRect(bx+7+(j%2)*10,790-bh+16+j*24,6,9,'#ffd27a')}
  ctx.restore();fRect(229,340,12,450,N?'#3d4685':'#ffffff');fRect(80,560,310,12,N?'#3d4685':'#ffffff');
  // cortina
  fPoly([[40,300],[110,300],[96,840],[40,840]],N?'#6b4f9c':'#e8875a');fPoly([[360,300],[430,300],[430,840],[372,840]],N?'#6b4f9c':'#e8875a');fRect(30,292,420,14,N?'#4a3770':'#b7653f',7);
  // quadro
  fRect(560,420,190,140,N?'#4a5294':'#ffffff',10);fRect(572,432,166,116,N?'#5d69b8':'#ffd9a8',6);fPoly([[580,540],[640,470],[690,520],[730,486],[730,540]],N?'#7d88d6':'#ff9a5e');fCirc(708,462,12,N?'#f5f0d6':'#fff3c4');
  // TV + rack (com o sofá de lado: TV baixa na frente dele, à direita)
  if(o.noSofa){const TX=880;fRect(TX-10,1180,210,120,N?'#4a3550':'#9a6a46',10);fRect(TX+5,1200,80,10,N?'#5a4262':'#b07e57',5);fRect(TX+105,1200,80,10,N?'#5a4262':'#b07e57',5);
    fRect(TX+80,1150,30,30,'#1a1d2e');fRect(TX,1010,190,140,'#1a1d2e',10);fRect(TX+10,1020,170,120,o.tvOn?(Math.floor(u*2)%2?'#5b74e0':'#6a62d9'):'#262a3e',6);
    if(o.tvOn){ctx.save();ctx.globalAlpha=.10;fPoly([[TX,1030],[TX,1140],[300,1500],[300,900]],'#8fa0ff');ctx.restore()}}
  else{  fRect(800,640,250,160,'#1a1d2e',12);fRect(814,654,222,132,o.tvOn?(Math.floor(u*2)%2?'#5b74e0':'#6a62d9'):'#262a3e',6);
  if(o.tvOn){ctx.save();ctx.globalAlpha=.12;fPoly([[814,786],[1036,786],[1080,1290],[700,1290]],'#8fa0ff');ctx.restore()}
  fRect(780,800,290,90,N?'#4a3550':'#9a6a46',10);fRect(800,820,110,10,N?'#5a4262':'#b07e57',5);fRect(940,820,110,10,N?'#5a4262':'#b07e57',5);
  if(!o.noSofa){
  }
  // sofá
  fRect(640,1000,450,190,N?'#4e4184':'#5b7fd6',46);fRect(612,1080,500,150,N?'#5d4f9a':'#6f92e6',46);fRect(660,1060,190,70,N?'#6b5cab':'#86a6f0',30);fRect(870,1060,190,70,N?'#6b5cab':'#86a6f0',30);
  fRect(640,1226,26,64,N?'#3a2f63':'#4565b8');fRect(1060,1226,26,64,N?'#3a2f63':'#4565b8');
  }
  // abajur
  if(N){ctx.save();ctx.globalAlpha=.10;fPoly([[530,860],[590,860],[680,1290],[440,1290]],'#ffd58a');ctx.restore()}
  fPoly([[520,860],[600,860],[584,796],[536,796]],N?'#ffd27a':'#f2c46b');fRect(556,860,8,300,'#3a2a20');fRect(526,1156,68,12,'#3a2a20',6);
  // tapete + planta
  ctx.fillStyle=N?'#4a3d6e':'#e3a46f';ctx.beginPath();ctx.ellipse(700,1500,360,70,0,0,7);ctx.fill();
  fPlant(470,1290,.9,N)}
function e1Door(u,o){o=o||{};const N=o.night!==false;
  fRect(0,0,W,1500,N?'#2c3264':'#f3d9b9');fRect(0,1500,W,H-1500,N?'#3b3152':'#c99566');fRect(0,1490,W,14,N?'#20244a':'#a87a4d');
  const sh=o.knock?Math.sin(u*90)*7*o.knock:0;ctx.save();ctx.translate(sh,0);
  fRect(240,250,600,1260,N?'#4a3122':'#7a4a2c',14);fRect(276,286,528,1220,N?'#7a4a2e':'#a5683f',8);
  fRect(330,350,420,450,N?'#6c4128':'#955c36',12);fRect(330,860,420,560,N?'#6c4128':'#955c36',12);
  fRect(340,360,400,14,N?'#86563a':'#b77a4e',7);fRect(340,870,400,14,N?'#86563a':'#b77a4e',7);
  fCirc(720,880,26,'#e0b85a');fRect(700,900,40,90,'#c99a3e',12);
  fCirc(540,560,18,'#2a1a10');fCirc(540,560,10,'#0d0906');
  if(o.under)fRect(286,1500,508,10,'#ffd98f');
  if(o.feet){fRect(440,1500,50,10,'#140d08');fRect(590,1500,50,10,'#140d08')}
  ctx.restore();
  fRect(870,1300,140,200,N?'#262b58':'#e9caa5',10);fRect(880,1300,120,20,N?'#343b72':'#f8e6cf',8)}
function tzRoom(u,clock){const N=true;
  fRect(0,0,W,1380,'#262c5e');fRect(0,1120,W,260,'#21265a');fRect(0,1380,W,H-1380,'#33294a');fRect(0,1372,W,12,'#1b1f44');
  // janela
  fRect(590,320,400,540,'#3d4685',16);fRect(610,340,360,500,'#141b48',8);ctx.save();rr(610,340,360,500,8);ctx.clip();
  fCirc(880,420,40,'#f5f0d6');fCirc(864,410,36,'#141b48');
  const r=rng(9);for(let i=0;i<12;i++){const bx=610+i*32,bh=80+r()*200;fRect(bx,840-bh,30,bh,'#0d1236');for(let j=0;j<6;j++)if(r()<.4)fRect(bx+7+(j%2)*10,840-bh+14+j*22,6,8,'#ffd27a')}
  ctx.restore();fRect(784,340,12,500,'#3d4685');fRect(610,584,360,12,'#3d4685');
  fPoly([[560,300],[620+Math.sin(u*1.3)*10,300],[600+Math.sin(u*1.1)*8,880],[560,880]],'#5c4890');fRect(550,292,460,14,'#3f3170',7);
  // pôster
  fRect(140,420,200,260,'#ff7a33',10);fCirc(240,520,50,'#ffd23f');fRect(170,610,140,16,'#fff',8);fRect(190,640,100,10,'#fff',5);
  // cama
  fRect(640,1100,440,280,'#3b4590',26);fRect(700,1060,200,90,'#eceaf6',36);fRect(640,1170,440,210,'#5866c2',22);fRect(640,1170,440,30,'#6c79d0',14);
  // criado-mudo + relógio
  fRect(430,1180,170,200,'#6b4630',12);fRect(444,1270,142,8,'#573826',4);fCirc(515,1320,7,'#e0b85a');
  fRect(450,1100,130,80,'#14141c',14);txtC(clock,515,1142,'700 50px Oswald','#ff4d4d')}
function e1Table(x,y,s,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  fRect(-176,0,24,190,'#6b4630',8);fRect(152,0,24,190,'#6b4630',8);fRect(-204,-26,408,36,'#9a6a46',14);fRect(-196,-24,392,8,'#b07e57',4);
  if(o.bowl)e1Bowl(-90,-24,.9,o.u||0);if(o.phone)e1PhoneSmall(-10,-28,1.1,o.phoneLit,o.buzz);
  ctx.restore()}
function vignette(a){/* estilo flat: sem vinheta */}
