function cTx(l,x,y,sz,c){ctx.save();ctx.translate(x-540,0);cT(l,y,sz,c);ctx.restore()}
function pSky(c0,c1,c2,seed){const g=ctx.createLinearGradient(0,0,5400,0);g.addColorStop(0,c0);g.addColorStop(.6,c1);g.addColorStop(1,c2);ctx.fillStyle=g;ctx.fillRect(0,0,5400,1350);
  const r=rng(seed||9);for(let k=0;k<200;k++){ctx.fillStyle=`rgba(255,255,255,${(.15+.4*r()).toFixed(2)})`;ctx.beginPath();ctx.arc(r()*5400,r()*1350,1+r()*2,0,7);ctx.fill()}}
function pCard(x0,withPfp){ctx.save();ctx.fillStyle='rgba(255,255,255,.96)';rr(x0+60,480,960,760,40);ctx.fill();ctx.restore();
  if(withPfp){ctx.fillStyle='#ff7a33';ctx.beginPath();ctx.arc(x0+180,600,84,0,7);ctx.fill()}
  txtC('@matheusvoce.decide',x0+520,570,'900 36px Inter','#14161f');txtC('Série interativa • você decide',x0+520,620,'600 28px Inter','#666');
  ctx.fillStyle='#ff2d55';rr(x0+330,660,380,64,16);ctx.fill();txtC('SEGUIR',x0+520,694,'900 32px Inter','#fff')}
function pStreak(x,y,n,len,a){ctx.save();ctx.strokeStyle=`rgba(255,255,255,${a||.5})`;ctx.lineWidth=6;ctx.lineCap='round';for(let k=0;k<n;k++){ctx.beginPath();ctx.moveTo(x-len,y-60+k*40);ctx.lineTo(x-len*.3,y-60+k*40);ctx.stroke()}ctx.restore()}
// ===== NÃO ARRASTA! =====
function NAOARRASTA(i){ctx.setTransform(1,0,0,1,0,0);ctx.save();ctx.translate(-i*1080,0);const t=.3;
  pSky('#2a1f6e','#7a1f4a','#ff7a33',5);
  // S1
  tzKicker('AVISO IMPORTANTE',130,1,'#e0463d');cT(['NÃO','ARRASTA!'],290,150,['#fff','#ffd23f']);
  matheus5(540,1210,1.0,{expr:'assustado',t,blink:0,armL:[100,10,'open'],armR:[100,10,'open']});txtC('sério... não arrasta 😰',540,1275,'800 40px Inter','#fff');
  // S2: ele segura a borda direita do slide (emenda 2160)
  cTx(['EU AVISEI...'],1620,220,110,'#fff');txtC('volta pro começo 🥺',1620,420,'800 44px Inter','#ffd23f');
  matheusView(1950,1210,1.05,'side',{t,lean:.12,expr:'assustado',walk:0,stride:0});
  // mãos segurando a borda
  ctx.fillStyle='#f5c9a5';[[2140,760],[2140,840]].forEach(([x,y])=>{ctx.beginPath();ctx.ellipse(x,y,22,30,0,0,7);ctx.fill()});
  // S3/S4: escorregando pela emenda 3240 (atravessa os dois slides)
  cTx(['PARA!!!'],2700,220,130,'#ffd23f');
  ctx.save();ctx.translate(3240,820);ctx.rotate(-.5);matheus5(0,330,1.05,{expr:'assustado',t,blink:0,armL:[150,20,'open'],armR:[150,20,'open']});ctx.restore();
  pStreak(3000,820,4,260,.45);
  cTx(['AAAAAAAA'],3780,220,130,'#fff');
  ctx.save();ctx.translate(4000,900);ctx.rotate(.9);ctx.globalAlpha=.55;matheus5(0,300,.8,{expr:'assustado',t,blink:0,armL:[150,20,'open'],armR:[150,20,'open']});ctx.restore();ctx.globalAlpha=1;
  pStreak(3900,900,4,300,.4);
  // S5: cai em cima do perfil
  pCard(4320,1);
  matheus5(5200,560,.5,{sit:1,expr:'rindo',t,blink:0});
  txtC('tá... já que chegou,',4760,250,'700 70px Oswald','#fff');txtC('segue aí 😅',4760,350,'700 80px Oswald','#ffd23f');
  txtC('Em qual slide você ficou com dó dele? 👇',4860,1290,'900 32px Inter','#fff');
  ctx.restore()}
// ===== ESCONDE-ESCONDE =====
function ESCONDE(i){ctx.setTransform(1,0,0,1,0,0);ctx.save();ctx.translate(-i*1080,0);const t=.3;
  // sala contínua
  fRect(0,0,5400,1350,'#2c3264');fRect(0,1080,5400,270,'#3b3152');for(let x=0;x<5400;x+=180){ctx.fillStyle='rgba(0,0,0,.12)';ctx.fillRect(x,1080,4,270)}
  fRect(0,1070,5400,14,'#262b58');
  // quadros e janela pelas paredes
  fRect(700,520,240,170,'#3d4a8a',10);fPoly([[730,670],[800,590],[850,640],[880,610],[910,670]],'#5b6bbf');
  
  tzKicker('BRINCADEIRA',130,1,'#4f5bd5');cT(['ACHA O','MATHEUS 👀'],270,130,['#fff','#ffd23f']);txtC('ele está em TODOS os slides',540,520,'800 40px Inter','#fff');
  // S1: atrás da planta (só cabelo e olhos)
  matheus5(790,1240,1.0,{expr:'desconfiado',t,blink:0,look:-1});
  ctx.save();ctx.translate(560,1260);ctx.scale(2.4,2.4);ctx.fillStyle='#8a5a3b';rr(-60,-90,120,90,14);ctx.fill();
  const leaf=(x,y,a,l,c)=>{ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(0,-l/2,l*.28,l/2,0,0,7);ctx.fill();ctx.restore()};
  [[-.9,150],[-.55,175],[-.25,190],[0,200],[.25,190],[.55,175],[.9,150],[-.4,120],[.4,120],[0,140]].forEach(([a,l],k)=>leaf(0,-85,a,l,k%2?'#3f9a5c':'#4fb36b'));ctx.restore();
  // S2/S3: sofa atravessando a emenda 2160 — ele agachado atrás (só o topo do cabelo)
  matheus5(1900,1250,.95,{expr:'desconfiado',t,blink:0});
  e1SofaF(1500,2500,1250,1.25);
  txtC('...e aqui? 🤔',1620,520,'700 90px Oswald','#fff');
  // S3/S4: cortina atravessando 3240 — tênis aparecendo embaixo
  matheus5(3250,1240,.95,{expr:'feliz',t,blink:0});
  ctx.save();const cg=ctx.createLinearGradient(3020,0,3480,0);cg.addColorStop(0,'#c0392b');cg.addColorStop(.5,'#e0563f');cg.addColorStop(1,'#a83226');ctx.fillStyle=cg;
  ctx.beginPath();ctx.moveTo(3000,200);ctx.lineTo(3500,200);ctx.lineTo(3520,1185);ctx.quadraticCurveTo(3260,1215,2990,1185);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(0,0,0,.18)';ctx.lineWidth=8;for(let x=3060;x<3480;x+=70){ctx.beginPath();ctx.moveTo(x,210);ctx.lineTo(x+6,1180);ctx.stroke()}ctx.restore();
  fRect(2960,180,580,26,'#5a3a2a',13);
  txtC('hmm... esses tênis 👟',2700,520,'700 80px Oswald','#ffd23f');
  // S4: caixa do entregador com olhos no buraco
  ctx.save();ctx.translate(3900,1250);fRect(-210,-330,420,330,'#c79a5e',10);fRect(-210,-330,420,40,'#a87c42');fRect(60,-150,110,60,'#fff',4);
  fCirc(-40,-200,62,'#1a1410');fCirc(-62,-205,13,'#fff');fCirc(-18,-205,13,'#fff');fCirc(-58,-203,6,'#1a1410');fCirc(-14,-203,6,'#1a1410');ctx.restore();
  // mecha de cabelo saindo da caixa
  ctx.save();ctx.fillStyle='#6b3d1f';ctx.beginPath();ctx.ellipse(3880,925,26,46,-.4,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(3920,930,22,38,.4,0,7);ctx.fill();ctx.restore();
  txtC('pssst... 📦',3780,520,'700 90px Oswald','#fff');
  // S5: dentro da foto de perfil
  pCard(4320,0);
  ctx.save();ctx.beginPath();ctx.arc(4500,600,84,0,7);ctx.clip();fRect(4400,500,200,200,'#4f6bdc');matheus5(4500,790,.42,{expr:'feliz',t,blink:0,armR:[128,42,'open']});ctx.restore();
  ctx.strokeStyle='#ffd23f';ctx.lineWidth=8;ctx.beginPath();ctx.arc(4500,600,90,0,7);ctx.stroke();
  txtC('ME ACHOU?',4860,280,'700 110px Oswald','#ffd23f');txtC('agora me segue 😎',4860,390,'700 70px Oswald','#fff');
  txtC('Em quantos slides você me achou? 👀',4860,1290,'900 32px Inter','#fff');
  ctx.restore()}
