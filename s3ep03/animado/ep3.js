// ===== S3 EP3 — "A manga amarela" — cenas =====
const G1={l:['Ela deixou cair','de propósito.','Devolve.'],red:1,time:'12:00'},ME2={l:['Eu prometi','ficar longe.'],me:1,time:'12:01'},
  H1={l:['Joga essa palheta','fora. Hoje.']},ME3={l:['Por quê? Ela tá tocando','a minha música!'],me:1},H2={l:['Porque eu sei como','isso termina.']},
  G2={l:['Ele tem medo.','Eu não tenho mais.'],red:1,time:'00:01'};
const HUD3=['','','DIA 3 · 09:00','DIA 3 · 09:01','DIA 3 · 09:01','DIA 3 · 09:01','DIA 3 · 09:02','DIA 3 · 09:02','DIA 3 · 09:02','DIA 3 · 09:02','DIA 3 · 09:03','DIA 3 · 09:03','DIA 3 · 09:03','DIA 3 · 09:03','DIA 3 · 09:04','DIA 3 · 09:05',
  'DIA 3 · 12:00','DIA 3 · 12:00','DIA 3 · 12:01','DIA 3 · 21:00','DIA 3 · 21:02','DIA 3 · 21:10','DIA 3 · 21:10','DIA 3 · 21:11','DIA 3 · 21:12','',
  'DIA 3 · 23:59','DIA 3 · 23:59','DIA 3 · 23:59','DIA 3 · 23:59','DIA 4 · 00:01','DIA 4 · 00:01','DIA 4 · 00:02','DIA 4 · 00:02','','',''];
// Matheus segurando algo na frente do peito (mão em X+7S, Y-330S)
function e3Hold(X,Y,S,o,draw){matheus5(X,Y,S,Object.assign({armR:[22,-128,'fist']},o));ctx.save();ctx.translate(X+7*S,Y-330*S);draw();ctx.restore()}
function e3Open(t,u,D){const M=D*.52;
  if(u<M){ctx.fillStyle='#03040a';ctx.fillRect(0,0,W,H);const slam=seg(u,.05,.3),imp=u>.3?Math.max(0,1-(u-.3)*4):0;ctx.save();ctx.translate(Math.sin(t*90)*imp*24,0);
    tzRays(540,900,t*1.4,'rgba(80,140,255,1)',.08);glow(540,900,700,'rgba(70,110,255,A)',.3+.3*imp);
    if(slam>0){const s=lerp(2.2,1.12,easeOut(slam)),y=lerp(-500,880,easeOut(slam));ctx.save();ctx.translate(540,y);ctx.rotate(lerp(-.4,-.04,easeOut(slam)));
      tzPhone(0,0,s,0,()=>e2Chat(u,[{l:['E fica LONGE','da 303.'],red:1,k:seg(u,.3,.5)},{l:['Tá bom. Prometo.'],me:1,time:'00:00',k:seg(u,.7,.9)}]));ctx.restore()}
    ctx.restore();tzKicker('IMAGINE...',230,seg(u,.1,.4),'#e0463d');
    const fl=Math.max(0,1-Math.abs(u-.31)/.08);if(fl>0){ctx.fillStyle=`rgba(255,255,255,${fl.toFixed(2)})`;ctx.fillRect(0,0,W,H)}}
  else{const v=u-M,hk=seg(v,.05,.3),imp=v>.3?Math.max(0,1-(v-.3)*3.5):0;ctx.save();ctx.translate(Math.sin(t*90)*imp*30,Math.cos(t*77)*imp*30);
    e3ElevOut(t,{open:lerp(.5,.2,seg(v,0,.3))+.35*seg(v,.3,.8),hand:hk,inside:()=>matheus5(540,1500,.95,{t,expr:v>.3?'assustado':'desconfiado',blink:0})});ctx.restore();
    tzTitle('E MESMO ASSIM...',230,seg(v,.05,.25),96,'#fff');tzTitle('ELA VEIO 😳',370,seg(v,.35,.55),130,'#f2c230');
    const fl=Math.max(0,1-Math.abs(v-.3)/.07)*.8;if(fl>0){ctx.fillStyle=`rgba(255,240,180,${fl.toFixed(2)})`;ctx.fillRect(0,0,W,H)}if(v>.3&&v<.55)e1Glitch(5,Math.floor(t*30))}}
function e3Wardrobe(t,k){fRect(0,0,W,H,'#2c3264');fRect(0,1300,W,H-1300,'#3b3152');
  fRect(180,260,720,1060,'#6b4a2e',14);fRect(200,280,680,1020,'#2a1d14');
  for(const y of[560,860])fRect(200,y,680,18,'#6b4a2e');
  fRect(240,330,160,220,'#c0392b',8);fRect(420,380,180,170,'#4f5bd5',8);fRect(630,300,200,250,'#8a6a48',8);txtC('FOTOS',730,430,'800 26px Inter','#fbf6e6');
  for(let j=0;j<6;j++)fRect(240+j*34,600,28,240,['#ff7a33','#3ddc97','#7fd3ff','#ffd23f','#e0463d','#9aa1ad'][j],8);
  fRect(560,700,280,150,'#d8c7a2',8);txtC('CABOS',700,780,'800 26px Inter','#6b4a2e');
  {const q=k||0;ctx.save();ctx.translate(lerp(540,540,q),lerp(1060,980,q));ctx.rotate(lerp(.12,0,q));glow(0,0,260,'rgba(255,220,120,A)',.25+.35*q);fRect(-150,-100,300,200,'#2f5aa8',10);fRect(-150,-100,26,200,'#24488a',8);e3Star(100,60,22,'#f2c230');ctx.restore()}
  fPoly([[180,260],[40,200],[40,1380],[180,1320]],'#7a5636');fPoly([[900,260],[1040,200],[1040,1380],[900,1320]],'#7a5636');fCirc(150,800,10,'#d8b35a');fCirc(930,800,10,'#d8b35a')}
function EP3(t){const L=window.LINES;const st=i=>i===0?0:L[i].a-.12;const en=i=>i<L.length-1?L[i+1].a-.12:L[i].b+3.4;
  let i=0;for(let k=0;k<L.length;k++)if(t>=st(k))i=k;const a=st(i),b=en(i),u=t-a,D=b-a,p=clamp(u/D);let hud=HUD3[i];
  const bl=(sd)=>tzBlink(t,sd);const sala=(day)=>{e1Apto(t,{noSofa:1,noTV:1,day});e1SofaF(250,830,1500,1.3,day)};
  ctx.save();
  switch(i){
  case 0:{e3Open(t,u,D);break}
  case 1:{e3Placar(u,seg(u,D*.48,D*.48+.35));break}
  case 2:{sala(1);const q=seg(p,.12,.9),e=eIO(q),sd=Math.sin(Math.PI*clamp(q*1.1));
    if(p<.12)matheus5(330,1500,1.3,{t,expr:'feliz',blink:bl(2)});else matheusView(lerp(330,1250,e),1500,1.3,'side',{t,walk:t*6.5,stride:Math.max(.15,sd),expr:'feliz'});
    e1TableFront(t,{cup:1});tzKicker('SÁBADO DE MANHÃ ☀️',330,seg(u,.1,.4),'#ff7a33');break}
  case 3:{const cx=lerp(700,2450,p);e3HallSide(cx,{glow303:.25*Math.sin(Math.PI*clamp((cx-1500)/800))});const near=clamp(1-Math.abs(cx-1900)/500);
    ctx.save();ctx.translate(540,0);ctx.rotate(0);ctx.restore();matheusView(540,1600,1.15,'side',{t,walk:t*7.5,stride:1,expr:near>.3?'desconfiado':'pensativo'});
    if(near>.3){ctx.save();ctx.globalAlpha=near;fCirc(640,880,8,'rgba(140,200,255,.9)');ctx.restore()}
    tzKicker('SEM NEM OLHAR 🙈',330,seg(p,.35,.5),'#c0392b');break}
  case 4:{e3ElevOut(t,{open:1-.75*eIO(seg(p,.2,1)),inside:()=>matheus5(540,1500,.95,{t,expr:'feliz',blink:bl(3),head:Math.sin(t*1.3)*2})});tzKicker('ELEVADOR',300,seg(u,.1,.4),'#5a6178');break}
  case 5:{const hk=seg(u,.1,.35),bk=seg(u,.35,.9);const imp=u>.35?Math.max(0,1-(u-.35)*3):0;ctx.translate(Math.sin(t*80)*imp*20,0);const z=1+.12*easeOut(hk);ctx.translate(300,1060);ctx.scale(z,z);ctx.translate(-300,-1060);
    e3ElevOut(t,{open:.25+.75*easeOut(bk),hand:hk,inside:()=>matheus5(540,1500,.95,{t,expr:u>.35?'surpreso':'feliz',blink:0})});ctx.setTransform(1,0,0,1,0,0);
    tzTitle('MANGA AMARELA!',330,seg(u,.4,.65),110,'#f2c230');break}
  case 6:{const w=seg(p,0,.62),e=eIO(w),cl=seg(p,.68,.95);const jx=lerp(380,470,e),jy=lerp(2150,1500,e),js=lerp(2.0,.92,e);
    const inside=()=>{matheus5(lerp(540,660,seg(p,.1,.5)),1500,.95,{t,expr:'surpreso',blink:0,look:-1});if(w>=1)e3Julia(jx,jy,js,{t})};
    e3ElevOut(t,{open:1-cl,inside});if(w<1)e3Julia(jx,jy,js,{t,walk:t*6.5});
    const ks=['DE COSTAS','DE FONE','NÃO FALA NADA'];ks.forEach((k,j)=>{const t0=D*(.18+j*.24);if(u>t0)tzKicker(k,200+j*90,seg(u,t0,t0+.25),['#f2c230','#5a6178','#c0392b'][j])});break}
  case 7:{const f=p<.55?'3':'2';e3ElevIn(t,{floorTxt:f,arrow:1});e3Julia(370,1720,1.3,{t});matheusView(760,1880,1.55,'back',{t});
    {const fl=Math.max(0,1-Math.abs(p-.55)/.06);if(fl>0)glow(540,240,200,'rgba(255,80,80,A)',fl*.6)}
    tzKicker('SILÊNCIO CONSTRANGEDOR 😬',140,seg(u,.2,.5),'#16161c');break}
  case 8:{const z=1+.18*eIO(p);ctx.translate(370,1100);ctx.scale(z,z);ctx.translate(-370,-1100);e3ElevIn(t,{floorTxt:'2',arrow:1});e3Julia(370,1720,1.3,{t,notes:seg(p,.1,.35)});matheusView(760,1880,1.55,'back',{t});ctx.setTransform(1,0,0,1,0,0);
    tzKicker('♪ LÁ-LÁ-RÁ... ♪',300,seg(u,.2,.5),'#f2c230');break}
  case 9:{e3ElevBack(t);matheus5(600,2080,2.3,{expr:p<.45?'surpreso':'pensativo',t,look:-1,blink:bl(5),head:p<.45?0:-6});
    ctx.save();ctx.filter='blur(6px)';ctx.fillStyle='#f2c230';ctx.beginPath();ctx.ellipse(-20,1500,230,520,0,0,7);ctx.fill();ctx.fillStyle='#22150f';ctx.beginPath();ctx.ellipse(-40,820,170,260,0,0,7);ctx.fill();ctx.restore();
    e3WallNotes(t,.8);{const k=easeBack(seg(u,.4,.7));if(k>0){ctx.save();ctx.translate(820,500);ctx.scale(k,k);fCirc(0,0,120,'#fff');fCirc(-100,130,22,'#fff');fCirc(-130,170,12,'#fff');txtC('♪?',0,8,'900 90px Inter','#4f5bd5');ctx.restore()}}
    tzTitle('DE ONDE?',330,seg(u,D*.5,D*.5+.25),120,'#ffd23f');break}
  case 10:{const op=seg(p,.05,.3),w=seg(p,.3,.95),e=eIO(w);e3ElevIn(t,{floorTxt:'T',open:op,lobby:1});
    if(p>.45)e3Pick(395,1735,.55,.5);e3Julia(lerp(370,560,e),lerp(1720,1330,e),lerp(1.3,.78,e),{t,walk:w>0&&w<1?t*6.5:null});matheusView(760,1880,1.55,'back',{t});
    tzKicker('TÉRREO',300,seg(u,.05,.3),'#5a6178');if(p>.6)tzKicker('SEM OLHAR PRA TRÁS',400,seg(p,.6,.75),'#f2c230');break}
  case 11:{const e_=eIO(seg(p,0,.7)),z=lerp(1,2.4,e_);ctx.translate(lerp(395,540,e_),lerp(1735,1000,e_));ctx.scale(z,z);ctx.translate(-395,-1735);e3ElevIn(t,{floorTxt:'T',open:1,lobby:1});e3Pick(395,1735,.55,.5);
    ctx.setTransform(1,0,0,1,0,0);{const s_=seg(p,.5,.8);if(s_>0){ctx.fillStyle=`rgba(0,0,0,${(.55*s_).toFixed(2)})`;ctx.beginPath();ctx.rect(0,0,W,H);ctx.moveTo(540+260,1000);ctx.arc(540,1000,260,0,Math.PI*2,true);ctx.fill('evenodd')}}
    tzKicker('UMA COISA PEQUENA...',330,seg(u,.2,.5),'#ff7a33');break}
  case 12:{fRect(0,0,W,H,'#1d2350');tzRays(540,900,t,'rgba(255,220,100,1)',.08);glow(540,900,600,'rgba(255,210,80,A)',.3);
    const k=easeBack(seg(u,.05,.4));ctx.save();ctx.translate(540,950);ctx.scale(k,k);ctx.fillStyle='#f7c49d';ctx.beginPath();ctx.ellipse(-20,260,200,150,-.2,0,7);ctx.fill();fRect(-170,180,90,60,'#f7c49d',30);
    e3Pick(0,40,3.2,Math.sin(t*1.5)*.08);ctx.fillStyle='#f7c49d';ctx.beginPath();ctx.ellipse(140,220,70,46,-.6,0,7);ctx.fill();ctx.restore();
    tzKicker('PALHETA DE VIOLÃO',260,seg(u,.2,.45),'#6a3fb5');tzTitle('⭐ ESTRELINHA AMARELA',400,seg(u,D*.55,D*.55+.25),78,'#f2c230');break}
  case 13:{fRect(0,0,W,H,'#2e2440');e2Note(300,820,.62,1,-.06);e3Pick(800,860,2,.1);const k=easeBack(seg(u,.2,.5));if(k>0){ctx.save();ctx.translate(560,860);ctx.scale(k,k);fCirc(0,0,64,'#ffd23f');txtC('=',0,4,'900 90px Oswald','#16161c');ctx.restore()}
    for(const [x,y,r] of [[455,935,40],[800,850,60]]){const q=seg(u,.35,.6);if(q>0){ctx.strokeStyle='#ff4d6d';ctx.lineWidth=10;ctx.beginPath();ctx.arc(x,y,r+20,0,7*q);ctx.stroke()}}
    tzTitle('A MESMA ESTRELA!',360,seg(u,.1,.35),110,'#f2c230');break}
  case 14:{const cx=lerp(2700,1250,eIO(p));e3HallSide(cx,{});ctx.save();ctx.translate(540,0);ctx.scale(-1,1);ctx.translate(-540,0);
    matheusView(540,1600,1.15,'side',{t,walk:t*11,stride:1.2,expr:'assustado'});ctx.restore();
    for(let j=0;j<3;j++){const q=(t*2+j/3)%1;ctx.save();ctx.globalAlpha=1-q;fRect(640+q*200,1180+j*90,90,10,'rgba(255,255,255,.8)',5);ctx.restore()}
    tzKicker('CORRENDO!',330,seg(u,.05,.3),'#2bb673');if(p>.5)tzTitle('E O PÃO?! 🍞',560,seg(p,.5,.65),110,'#ffd23f');break}
  case 15:{sala(1);e1TableFront(t,{cup:1});ctx.save();ctx.translate(0,0);e1Cat(470,1330,2.1,1,{t});ctx.restore();
    {const k=easeBack(seg(u,.2,.5));if(k>0){ctx.save();ctx.translate(800,640);ctx.scale(k,k);fCirc(0,0,150,'#fff');fCirc(-120,160,26,'#fff');fCirc(-150,210,14,'#fff');txtC('E o meu',0,-34,'900 46px Inter','#16161c');txtC('pão? 😒',0,32,'900 52px Inter','#16161c');ctx.restore()}}
    tzKicker('O GATO NÃO PERDOA',330,seg(u,.05,.3),'#ff7a33');break}
  case 16:{e1PhoneScene(u,()=>{tzLock(u,'12:00');tzNotif(-30,seg(u,.25,.5),'Você (do futuro)','1 mensagem • fora do horário')},{buzz:u<1.2,red:1,glitch:1,s:1.25});tzKicker('MEIO-DIA?!',220,seg(p,.3,.5),'#e0463d');break}
  case 17:{e1PhoneScene(u,()=>e2Chat(u,[Object.assign({k:seg(u,.15,.45)},G1)],{typing:u<.15}),{red:1,glitch:1});tzKicker('DE PROPÓSITO?!',220,seg(p,.55,.7),'#f2c230');break}
  case 18:{e1PhoneScene(u,()=>e2Chat(u,[Object.assign({k:1},G1),Object.assign({k:seg(u,.05,.2),type:seg(u,.05,D*.8)},ME2)],{kb:u<D*.8}));break}
  case 19:{sala(0);e1TableFront(t,{phone:1,cup:1});const turn=seg(p,.35,.55);matheus5(560,1500,1.3,{sit:1,expr:turn>0?'surpreso':'pensativo',t,look:turn>0?-1:0,head:turn>0?-8:6,blink:bl(4)});
    e3WallNotes(t,seg(p,.2,.5));fRect(0,0,26,H,'rgba(255,220,120,.25)');glow(0,900,500,'rgba(255,210,100,A)',.25*seg(p,.2,.5));tzKicker('À NOITE',330,seg(u,.05,.3),'#4f5bd5');break}
  case 20:{sala(0);glow(60,800,520,'rgba(255,210,100,A)',.35+.1*Math.sin(t*3));fRect(0,0,70,1300,'#3a4380');
    ctx.save();ctx.translate(540,0);ctx.scale(-1,1);ctx.translate(-540,0);matheusView(lerp(700,860,eIO(seg(p,0,.4))),1500,1.3,'side',{t,expr:'surpreso'});ctx.restore();
    e3WallNotes(t,1);tzKicker('UM VIOLÃO 🎸',300,seg(u,.05,.3),'#f2c230');tzTitle('A MESMA MELODIA',420,seg(u,D*.45,D*.45+.25),96,'#ffd23f');break}
  case 21:{e3Wardrobe(t,seg(p,.55,1));e3WallNotes(t,.35);matheusView(540,2000,1.45,'back',{t});tzKicker('O ARMÁRIO',300,seg(u,.05,.3),'#ff7a33');break}
  case 22:{fRect(0,0,W,H,'#2e2440');glow(540,900,600,'rgba(255,220,150,A)',.2);const k=easeBack(seg(u,.05,.35));ctx.save();ctx.translate(540,900);ctx.scale(k,k);e3Notebook(0,0,1.5,-.04+.02*Math.sin(t));ctx.restore();
    tzKicker('CADERNO VELHO',230,seg(u,.1,.35),'#7fd3ff');tzTitle('14 ANOS',370,seg(u,D*.5,D*.5+.25),120,'#ff7a33');break}
  case 23:{fRect(0,0,W,H,'#2e2440');glow(540,900,700,'rgba(255,220,150,A)',.2+.2*seg(p,.45,.6));e3Page(540,960,1.25-.04*p,seg(u,.1,D*.45),seg(p,.45,.6));e3WallNotes(t,seg(p,.45,.6));
    tzTitle('FOI ELE QUE COMPÔS!',300,seg(p,.6,.75),92,'#ffd23f');break}
  case 24:{sala(0);e3Hold(540,1500,1.3,{expr:'assustado',t,blink:0},()=>{ctx.rotate(-.08);fRect(-80,-60,160,120,'#2f5aa8',8);e3Star(50,30,14,'#f2c230')});e1TableFront(t,{phone:1,cup:1});
    {const k=easeBack(seg(u,.3,.6));if(k>0){ctx.save();ctx.translate(840,500);ctx.scale(k,k);fCirc(0,0,110,'#fff');fRect(-44,-14,88,72,'#ffd23f',10);ctx.strokeStyle='#ffd23f';ctx.lineWidth=14;ctx.beginPath();ctx.arc(0,-16,30,Math.PI,0);ctx.stroke();fCirc(0,22,10,'#16161c');ctx.restore()}}
    tzKicker('PRA NINGUÉM',330,seg(u,.1,.4),'#c0392b');break}
  case 25:{fRect(0,0,W,H,'#ff7a33');tzRays(540,900,t,'rgba(255,255,255,1)',.08);matheus5(540,2050,2.3,{expr:'surpreso',t,look:0,blink:bl(2),armL:[60,10,'open'],armR:[60,10,'open']});
    tzTitle('E VOCÊ?',380,seg(u,.05,.3),150,'#fff');tzKicker('TEM UM SONHO NA GAVETA?',560,seg(u,.35,.6),'#16161c');break}
  case 26:{if(p<.45){ctx.fillStyle='#07080f';ctx.fillRect(0,0,W,H);const fl=p>.22;const z=1+.06*p;ctx.translate(540,900);ctx.scale(z,z);ctx.translate(-540,-900);
      fRect(140,640,800,480,'#111320',40);txtC(fl?'23:59':'23:58',540,890,'700 300px Oswald','#ff3b3b');glow(540,880,520,'rgba(255,50,50,A)',.35);
      const f=seg(p,.22,.3);if(f>0&&f<1){ctx.fillStyle=`rgba(255,80,80,${((1-f)*.35).toFixed(2)})`;ctx.fillRect(0,0,W,H)}}
    else{const v=u-D*.45;e1PhoneScene(v,()=>{tzLock(v,'23:59');tzNotif(-30,seg(v,.1,.4),'Você (do futuro)','1 mensagem')},{buzz:v<1.2,s:1.25})}break}
  case 27:{e1PhoneScene(u,()=>e2Chat(u,[Object.assign({k:seg(u,.15,.45)},H1)],{typing:u<.15}));tzKicker('JOGA FORA?!',220,seg(p,.55,.7),'#e0463d');break}
  case 28:{e1PhoneScene(u,()=>e2Chat(u,[Object.assign({k:1},H1),Object.assign({k:seg(u,.05,.2),type:seg(u,.05,D*.75)},ME3)],{kb:u<D*.75}));break}
  case 29:{e1PhoneScene(u,()=>e2Chat(u,[Object.assign({k:1},H1),Object.assign({k:1},ME3),Object.assign({k:seg(u,.1,.4)},H2)]));tzKicker('COMO ISSO TERMINA?',220,seg(p,.5,.65),'#5a6178');break}
  case 30:{sala(0);const J=D*.25,k=seg(u,J,J+.2),up=seg(u,J+.2,J+.8);const jy=Math.max(0,Math.sin(up*Math.PI))*80;const sq=(sy,f)=>{ctx.save();ctx.translate(540,1500);ctx.scale(1/Math.sqrt(sy),sy);ctx.translate(-540,-1500);f();ctx.restore()};
    if(k<=0)matheus5(540,1500,1.3,{sit:1,expr:'pensativo',t,head:10,blink:bl(2)});else if(k<1)sq(1-.12*Math.sin(k*Math.PI/2),()=>matheus5(540,1500,1.3,{sit:1,expr:'assustado',t,blink:0}));
    else sq(1+.04*Math.sin(up*Math.PI),()=>matheus5(540,1500-jy,1.3,{expr:'assustado',t,armL:[lerp(10,60,eIO(up)),-20,'open'],armR:[lerp(10,60,eIO(up)),-20,'open'],blink:0}));
    e2CatSleep(820,1352,.9,t);e1TableFront(t,{phone:1,cup:1,lit:u>J-.2,buzz:u>J-.2});e2Dark(.5);if(u>J-.2)glow(530,1460,420,'rgba(255,80,110,A)',.45+.15*Math.sin(t*20));
    if(u>J)tzTitle('00:01',360,seg(u,J,J+.25),130,'#ff4d6d');break}
  case 31:{e1PhoneScene(u,()=>e2Chat(u,[Object.assign({k:1},H2),Object.assign({k:seg(u,.1,.4)},G2)]),{glitch:1,red:1});tzKicker('OUTRA PESSOA?!',220,seg(p,.5,.65),'#e0463d');break}
  case 32:{fRect(0,0,W,H,'#070914');glow(540,900,700,'rgba(255,70,90,A)',.18);
    for(const [x,sd] of [[230,-1],[850,1]]){const k=seg(u,.1+(sd>0?.25:0),.5+(sd>0?.25:0));ctx.save();ctx.globalAlpha=k*.85;ctx.fillStyle='#000';ctx.beginPath();ctx.arc(x,700,120,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(x,1120,190,300,0,Math.PI,0);ctx.fill();fRect(x-190,1120,380,600,'#000');txtC('?',x,720,'900 120px Oswald',sd<0?'#7fd3ff':'#ff4d6d');ctx.restore()}
    tzPhone(540,1000,.75,0,()=>e2Chat(u,[Object.assign({k:1},H2),Object.assign({k:1},G2)]));tzTitle('QUEM É?',330,seg(u,D*.4,D*.4+.25),130,'#ffd23f');break}
  case 33:{ctx.fillStyle=lg(0,H,['#11163a','#1d2350']);ctx.fillRect(0,0,W,H);tzStars(t,7,50);
    e3Hold(540,1620,1.2,{expr:'pensativo',t,look:Math.sin(u*3)>0?-1:1,head:6,blink:bl(6)},()=>e3Pick(0,-30,.7,Math.sin(t*2)*.1));
    e1Bubble(290,430,.9,['JOGA','FORA'],0,1,'23:59');e1Bubble(790,430,.9,['DEVOLVE'],1,1,'MEIO-DIA');tzTitle('E AGORA?',720,seg(u,.2,.5),110,'#ffd23f');break}
  case 34: case 35: case 36:{ctx.fillStyle=lg(0,H,['#0b0f26','#1a1446','#2b0f3a']);ctx.fillRect(0,0,W,H);tzStars(t,8,70);
    const CA=['JOGAR a palheta','FORA (obedecer 23:59)'],CB=['DEVOLVER a palheta','na porta 303'];
    if(i<36){e1Choice(i===34?seg(u,.05,.35):1,'A',CA,'#2bb673',560);e1Choice(i===35?seg(u,.05,.35):0,'B',CB,'#e0463d',860);
      matheus5(540,1520,.75,{expr:'desconfiado',t,look:i===34?-1:1,armL:[14,-30,'rest'],armR:[14,-30,'rest'],blink:bl(7)});tzKicker('VOCÊ DECIDE',330,seg(i===34?u:9,.05,.35),'#ff7a33')}
    else{const T0=L[36].b+.1,ec=seg(t,T0,T0+.4);if(ec<1){ctx.save();ctx.globalAlpha=1-ec;e1Choice(1,'A',CA,'#2bb673',460);e1Choice(1,'B',CB,'#e0463d',740);tzKicker('COMENTA A OU B',260,seg(u,.05,.35),'#ff7a33');ctx.restore()}
      ctx.fillStyle=`rgba(8,10,25,${(ec*.92).toFixed(2)})`;ctx.fillRect(0,0,W,H);
      if(ec>0){e3Teaser(t,ec);ctx.save();ctx.globalAlpha=ec;tzKicker('AMANHÃ • 18H',250,ec,'#e0463d');tzTitle('O QUE TEM',380,ec,110,'#fff');tzTitle('NA CAIXA?',500,ec,110,'#ffd23f');tzKicker('SEGUE PRA VER O EP. 4',1440,ec,'#ff7a33');ctx.restore()}}
    break}
  }
  ctx.restore();ctx.setTransform(1,0,0,1,0,0);
  e1Hud(hud);tzCaption(t)}
// teaser do EP. 4: a caixa com a estrelinha amarela, brilhando
function e3Teaser(t,k){ctx.save();ctx.globalAlpha=k;fRect(0,0,W,H,'#090b1c');glow(540,1000,500,'rgba(255,210,80,A)',.25+.1*Math.sin(t*3));
  const sh=Math.sin(t*9)*(Math.sin(t*1.3)>.6?6:0);e2Box(540+sh,1240,2.6,0);e3Star(470+sh,1010,40,'#f2c230');txtC('?',640+sh,1010,'900 120px Oswald','#fff');ctx.restore()}
