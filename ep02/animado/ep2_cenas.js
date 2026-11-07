
// ===================== EP. 2 — A PRAÇA =====================
function clockFace(cx,cy,R,hh,mm,crack){ctx.save();ctx.translate(cx,cy);ctx.strokeStyle=OUT;
  ctx.fillStyle='#3a2f2a';ctx.beginPath();ctx.arc(0,0,R*1.14,0,7);ctx.fill();ctx.lineWidth=Math.max(3,R*.05);ctx.stroke();
  const g=ctx.createRadialGradient(-R*.3,-R*.3,R*.1,0,0,R);g.addColorStop(0,'#fbf6e8');g.addColorStop(1,'#d9cfb6');ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,R,0,7);ctx.fill();ctx.stroke();
  for(let i=0;i<60;i++){const a=i/60*Math.PI*2,big=i%5==0;ctx.strokeStyle='#2a221e';ctx.lineWidth=big?R*.045:R*.015;ctx.beginPath();ctx.moveTo(Math.sin(a)*R*(big?.78:.86),-Math.cos(a)*R*(big?.78:.86));ctx.lineTo(Math.sin(a)*R*.93,-Math.cos(a)*R*.93);ctx.stroke()}
  const ah=(hh%12+mm/60)/12*Math.PI*2,am=mm/60*Math.PI*2;ctx.lineCap='round';
  ctx.strokeStyle='#1c1612';ctx.lineWidth=R*.08;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.sin(ah)*R*.5,-Math.cos(ah)*R*.5);ctx.stroke();
  ctx.lineWidth=R*.05;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.sin(am)*R*.78,-Math.cos(am)*R*.78);ctx.stroke();
  ctx.fillStyle='#1c1612';ctx.beginPath();ctx.arc(0,0,R*.07,0,7);ctx.fill();
  if(crack){ctx.strokeStyle='rgba(255,255,255,.75)';ctx.lineWidth=Math.max(1.5,R*.012);ctx.beginPath();ctx.moveTo(R*.2,-R*.85);ctx.lineTo(R*.32,-R*.4);ctx.lineTo(R*.18,-R*.1);ctx.lineTo(R*.4,R*.25);ctx.moveTo(R*.32,-R*.4);ctx.lineTo(R*.62,-R*.3);ctx.stroke()}
  ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-R*.35,-R*.4,R*.35,R*.18,-.6,0,7);ctx.fill();
  ctx.restore()}
function clockTower(x,base,s){ctx.save();ctx.translate(x,base);ctx.scale(s,s);ctx.strokeStyle=OUT;ctx.lineWidth=6;
  // base
  ctx.fillStyle='#8c7d6e';rr(-150,-120,300,120,8);ctx.fill();ctx.stroke();ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(-150,-120,300,10);
  // corpo
  ctx.fillStyle='#b9a58c';ctx.fillRect(-110,-900,220,780);ctx.strokeRect(-110,-900,220,780);
  ctx.fillStyle='rgba(0,0,0,.18)';ctx.fillRect(40,-900,70,780);
  ctx.strokeStyle='rgba(60,40,30,.25)';ctx.lineWidth=3;for(let y=-860;y<-130;y+=42){ctx.beginPath();ctx.moveTo(-110,y);ctx.lineTo(110,y);ctx.stroke();const o=(Math.round(y/42)%2)?-40:20;for(let xx=-110+60+o;xx<110;xx+=90){ctx.beginPath();ctx.moveTo(xx,y);ctx.lineTo(xx,y+42);ctx.stroke()}}
  // porta
  ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.fillStyle='#4a3326';ctx.beginPath();ctx.moveTo(-45,-120);ctx.lineTo(-45,-260);ctx.arc(0,-260,45,Math.PI,0);ctx.lineTo(45,-120);ctx.closePath();ctx.fill();ctx.stroke();
  // topo + telhado
  ctx.fillStyle='#a8937a';rr(-135,-960,270,70,6);ctx.fill();ctx.stroke();
  ctx.fillStyle='#5c3b34';ctx.beginPath();ctx.moveTo(-150,-960);ctx.lineTo(0,-1180);ctx.lineTo(150,-960);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,.12)';ctx.beginPath();ctx.moveTo(-150,-960);ctx.lineTo(0,-1180);ctx.lineTo(-40,-960);ctx.closePath();ctx.fill();
  ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(0,-1180);ctx.lineTo(0,-1240);ctx.stroke();
  ctx.restore();
  clockFace(x,base-760*s,88*s,7,12,true)}
function parkTree(x,y,s,col){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle=OUT;ctx.lineWidth=6;
  ctx.fillStyle='#5a4030';ctx.fillRect(-14,-170,28,170);ctx.strokeRect(-14,-170,28,170);
  ctx.fillStyle=col||'#3f7a4a';for(const [dx,dy,r] of [[0,-260,110],[-80,-210,80],[80,-210,85],[-40,-320,80],[50,-310,80]]){ctx.beginPath();ctx.arc(dx,dy,r,0,7);ctx.fill();ctx.stroke()}
  ctx.fillStyle='rgba(255,255,255,.12)';ctx.beginPath();ctx.arc(-30,-300,50,0,7);ctx.fill();ctx.restore()}
function lampPost(x,y,s,on){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.fillStyle='#2b2d36';ctx.fillRect(-7,-420,14,420);ctx.strokeRect(-7,-420,14,420);
  ctx.fillStyle=on?'#ffe2a0':'#4a4c58';rr(-26,-470,52,56,10);ctx.fill();ctx.stroke();ctx.fillStyle='#2b2d36';ctx.beginPath();ctx.moveTo(-34,-470);ctx.lineTo(34,-470);ctx.lineTo(0,-500);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore()}
function benchSide(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.fillStyle='#6b4a34';
  rr(-260,-110,520,24,6);ctx.fill();ctx.stroke();rr(-260,-210,520,22,6);ctx.fill();ctx.stroke();
  ctx.fillStyle='#2b2d36';ctx.fillRect(-230,-86,16,86);ctx.strokeRect(-230,-86,16,86);ctx.fillRect(214,-86,16,86);ctx.strokeRect(214,-86,16,86);ctx.fillRect(-230,-190,12,80);ctx.fillRect(218,-190,12,80);ctx.restore()}
function leaves(t,seed,n,ground){const r=rng(seed);for(let i=0;i<n;i++){const sp=80+r()*160,x=(r()*W+t*sp)%(W+200)-100,y=ground-60-r()*500+Math.sin(t*1.7+i)*50,a=t*(1+r()*2)+i;
  ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.fillStyle=['#c8732e','#a65424','#d9a441'][i%3];ctx.beginPath();ctx.ellipse(0,0,14,7,0,0,7);ctx.fill();ctx.restore()}}
function plaza(sk){sky(...sk);}

// 1. recap — "Vocês escolheram: A" (300–304)
scene(300,304,(t)=>{const u=t-300;ctx.fillStyle=lg(0,H,['#120c1e','#24163a','#0d0a16']);ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,40,W/2,H*.42,900);g.addColorStop(0,'rgba(60,200,130,.28)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 50px "DejaVu Sans Mono", monospace';ctx.globalAlpha=easeOut(seg(u,0,.4));ctx.fillText('NO EPISÓDIO 1, VOCÊS ESCOLHERAM',W/2,520);ctx.globalAlpha=1;ctx.textAlign='left';
  // B some, A cresce
  const kb=easeOut(seg(u,.9,1.5));ctx.save();ctx.globalAlpha=1-kb;ctx.translate(kb*700,0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,900,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,1045);ctx.font='800 56px Inter';ctx.fillText('Ficar em paz, sozinho',250,1020);ctx.restore();
  const ka=easeBack(seg(u,1.2,1.8)),sc=1+ka*.12,yy=lerp(660,760,ka);
  ctx.save();ctx.translate(W/2,yy+95);ctx.scale(sc,sc);ctx.translate(-W/2,-(yy+95));
  ctx.fillStyle='rgba(30,140,90,.96)';rr(70,yy,940,190,36);ctx.fill();ctx.strokeStyle='rgba(255,255,255,'+(.25+.25*Math.sin(u*6))+')';ctx.lineWidth=6;ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,yy+145);ctx.font='800 56px Inter';ctx.fillText('Ir atrás dessa pessoa',250,yy+120);
  if(u>1.6){const k=easeBack(seg(u,1.6,2));ctx.save();ctx.translate(930,yy+40);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.arc(0,0,58,0,7);ctx.fill();ctx.strokeStyle='#1c1422';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-26,2);ctx.lineTo(-6,22);ctx.lineTo(28,-20);ctx.stroke();ctx.restore()}
  ctx.restore();
  // estrelinhas de confete
  if(u>1.6){const r=rng(9);for(let i=0;i<40;i++){const a=r()*7,sp=300+r()*500,k=seg(u,1.6,3.2),x=W/2+Math.cos(a)*sp*k,y=860+Math.sin(a)*sp*k+k*k*300;ctx.fillStyle=['#ffd84a','#3ccf8e','#fff'][i%3];ctx.globalAlpha=1-k;ctx.fillRect(x,y,10,16);ctx.globalAlpha=1}}
});

// 2. caminhando pra praça ao pôr do sol (310–315)
scene(310,315,(t)=>{const u=t-310,off=u*230;sky('#f08a5d','#f6b98a','#f2d3b4');sun(780,880,120,'#ffe3b0','rgba(255,170,110,.55)');
  buildings(311,1250,450,950,'#c2867a','rgba(255,230,190,.3)',.15,off,.3);
  buildings(312,1300,300,800,'#8d5a5c','rgba(255,220,160,.35)',.2,off,.6);
  for(let i=-1;i<5;i++){const x=i*420-(off*.9%420)+120;parkTree(x,1300,.9,'#4f6b3e')}
  ctx.fillStyle='#b49a88';ctx.fillRect(0,1300,W,620);ctx.strokeStyle='#9c8473';ctx.lineWidth=4;for(let x=-((off)%200);x<W+200;x+=200){ctx.beginPath();ctx.moveTo(x,1300);ctx.lineTo(x-120,H);ctx.stroke()}
  // sombra longa
  ctx.fillStyle='rgba(60,30,30,.25)';ctx.beginPath();ctx.ellipse(250,1335,260,18,0,0,7);ctx.fill();
  papers(u,12,2,1360);leaves(u,13,8,1300);
  person(420,1200,1.15,{f:1,walk:u*6.6,look:.05,noShadow:true});
});

// 3. a praça — chegando e sozinho (320–328)
scene(320,328,(t)=>{const u=t-320;const z=1+u*.025;ctx.translate(W/2,H*.55);ctx.scale(z,z);ctx.translate(-W/2,-H*.55);
  sky('#5a3a6a','#d27a6a','#f1b27c');sun(250,1020,100,'#ffd9a0','rgba(255,160,110,.45)');
  buildings(321,1150,250,600,'#6a4a62',null,0,0,0);
  ctx.fillStyle='#7a6b5e';ctx.fillRect(0,1150,W,770);
  // piso da praça (elipse) + caminhos
  ctx.fillStyle='#a8998a';ctx.beginPath();ctx.ellipse(W/2,1480,640,260,0,0,7);ctx.fill();ctx.strokeStyle='rgba(0,0,0,.12)';ctx.lineWidth=3;for(let r=80;r<640;r+=90){ctx.beginPath();ctx.ellipse(W/2,1480,r,r*.4,0,0,7);ctx.stroke()}
  ctx.fillStyle='#a8998a';ctx.beginPath();ctx.moveTo(W/2-90,1700);ctx.lineTo(W/2+90,1700);ctx.lineTo(W/2+220,H);ctx.lineTo(W/2-220,H);ctx.fill();
  parkTree(110,1300,1.0,'#4a6a44');parkTree(980,1320,1.05,'#476542');parkTree(30,1560,1.25,'#3f5e3c');
  lampPost(250,1420,1,false);lampPost(830,1420,1,false);
  benchSide(800,1600,.6);
  clockTower(W/2,1430,.78);
  leaves(u,23,14,1500);
  // ele chega andando de costas e para
  const k=easeOut(seg(u,0,3.4)),py=lerp(1900,1640,k),ps=lerp(1.05,.78,k);
  personFront(W/2+40,py,ps,{back:true,walk:u<3.4?u*6:null});
});

// 4. close no relógio — 07:12 parado (330–337)
scene(330,337,(t)=>{const u=t-330;sky('#3a2a4a','#7a4a5a','#b06a6a');
  const z=lerp(1,1.35,easeOut(seg(u,0,6.5)));ctx.save();ctx.translate(W/2,H*.45);ctx.scale(z,z);ctx.translate(-W/2,-H*.45);
  ctx.fillStyle='#b9a58c';ctx.fillRect(W/2-430,0,860,H);ctx.strokeStyle='rgba(60,40,30,.25)';ctx.lineWidth=4;for(let y=0;y<H;y+=80){ctx.beginPath();ctx.moveTo(W/2-430,y);ctx.lineTo(W/2+430,y);ctx.stroke()}
  ctx.fillStyle='rgba(0,0,0,.2)';ctx.fillRect(W/2+250,0,180,H);
  clockFace(W/2,H*.45,360,7,12,true);
  // ponteiro dos segundos travado, tremendo
  const tw=(Math.floor(u*2)%2?1:-1)*.03;ctx.save();ctx.translate(W/2,H*.45);ctx.rotate(Math.PI*1.2+tw);ctx.strokeStyle='#b02a2a';ctx.lineWidth=7;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(0,40);ctx.lineTo(0,-300);ctx.stroke();ctx.restore();
  ctx.restore();
  const g=ctx.createRadialGradient(W/2,H*.45,300,W/2,H*.45,1100);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(10,0,10,.6)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
});

// 5. esperando no banco — o céu escurece (340–348)
scene(340,348,(t)=>{const u=t-340,k=seg(u,0,8);
  const c1=k<.5?['#d27a6a','#f1b27c','#f6d2a4']:['#1a1838','#3a2d5a','#5a3a6a'];
  sky(...c1);if(k<.5){ctx.fillStyle=`rgba(20,16,50,${k*1.6})`;ctx.fillRect(0,0,W,H)}else{ctx.fillStyle=`rgba(40,30,70,${(1-k)*1.2})`;ctx.fillRect(0,0,W,H)}
  sun(lerp(820,980,k),lerp(900,1250,k),90,'#ffd9a0',`rgba(255,160,110,${.45*(1-k)})`);
  if(k>.45){const r=rng(41);for(let i=0;i<90;i++){ctx.fillStyle=`rgba(255,255,255,${(k-.45)*1.2*r()})`;ctx.fillRect(r()*W,r()*900,3,3)}}
  buildings(341,1250,300,700,'#4a3450',null,0,u*20,1);
  clockTower(230,1330,.62);
  ctx.fillStyle='#4a4250';ctx.fillRect(0,1300,W,620);ctx.fillStyle='rgba(0,0,0,'+(k*.4)+')';ctx.fillRect(0,1300,W,620);
  parkTree(1020,1330,.9,'#3a5038');
  benchSide(640,1430,.85);
  const breathe=Math.sin(u*1.6)*.03;
  person(650,1340,1.0,{f:-1,lean:.18+breathe,legs:[[1.45,-1.5],[1.5,-1.45]],arms:[[.9,-1.1],[1.0,-1.2]],look:.2,blink:u>5&&u<5.15,eye:.85,brow:2,noShadow:true});
  leaves(u,43,6,1400);
});

// 6. barulho — lata rolando, ele vira (350–357)
scene(350,357,(t)=>{const u=t-350;sky('#14122e','#2b2450','#43325e');
  const r=rng(51);for(let i=0;i<120;i++){ctx.fillStyle='rgba(255,255,255,.55)';ctx.fillRect(r()*W,r()*1000,2,2)}
  buildings(351,1220,250,650,'#241f3e',null,0,0,0);
  ctx.fillStyle='#2e2a3e';ctx.fillRect(0,1220,W,700);
  ctx.fillStyle='#3b364d';ctx.beginPath();ctx.ellipse(W/2,1500,640,240,0,0,7);ctx.fill();
  clockTower(860,1300,.55);
  // ele de frente, vira a cabeça e se assusta
  const turn=u<1.6?0:(u<3.5?Math.sin(Math.min(1,(u-1.6)/.4)*Math.PI/2):lerp(1,-.8,seg(u,3.5,4.4)));
  const scare=easeOut(seg(u,1.6,2));
  personFront(420,1520,1.15,{look:turn,eye:1+scare*.35,brow:-scare*.6,mouthO:scare*.6,noShadow:false});
  // lata rolando
  if(u>.3){const x=lerp(-80,1200,seg(u,.3,3.6)),a=u*9;ctx.save();ctx.translate(x,1700);ctx.rotate(a);ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.fillStyle='#c62828';rr(-38,-24,76,48,10);ctx.fill();ctx.stroke();ctx.fillStyle='#e9e9ee';ctx.fillRect(-38,-6,76,10);ctx.fillStyle='#b8b8c2';ctx.beginPath();ctx.ellipse(-38,0,8,24,0,0,7);ctx.fill();ctx.stroke();ctx.restore();
    ctx.fillStyle='rgba(0,0,0,.35)';ctx.beginPath();ctx.ellipse(x,1728,40,7,0,0,7);ctx.fill()}
  leaves(u,53,5,1500);
  const g=ctx.createRadialGradient(W/2,H*.6,200,W/2,H*.6,1200);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,20,.6)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
});

// 7. segunda carta presa no pé do relógio (360–365)
scene(360,365,(t)=>{const u=t-360;const z=lerp(1.05,1.25,easeOut(seg(u,0,4.5)));ctx.translate(W/2,H*.55);ctx.scale(z,z);ctx.translate(-W/2,-H*.55);
  ctx.fillStyle='#2a2438';ctx.fillRect(0,0,W,H);
  // pedra da base
  ctx.fillStyle='#7d6f62';ctx.fillRect(0,300,W,1300);ctx.strokeStyle='rgba(30,20,20,.35)';ctx.lineWidth=5;
  for(let y=300;y<1600;y+=150){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();const o=(Math.round(y/150)%2)?0:130;for(let x=o;x<W;x+=260){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,y+150);ctx.stroke()}}
  ctx.fillStyle='#3d3546';ctx.fillRect(0,1600,W,320);
  // luz do poste (único foco)
  const g=ctx.createRadialGradient(W/2,900,40,W/2,900,700);g.addColorStop(0,'rgba(255,230,170,.42)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  // envelope com fita
  const pull=easeOut(seg(u,3.2,4.4));
  ctx.save();ctx.translate(W/2,lerp(930,700,pull));ctx.rotate(-.05+pull*.25);envelope(0,0,1.25+pull*1.4,0);ctx.restore();
  if(pull<.5){ctx.save();ctx.translate(W/2,930);ctx.globalAlpha=1-pull*2;ctx.fillStyle='rgba(235,225,180,.85)';ctx.save();ctx.rotate(-.5);ctx.fillRect(-200,-130,120,40);ctx.restore();ctx.save();ctx.rotate(.5);ctx.fillRect(80,-170,120,40);ctx.restore();ctx.restore()}
  // brilho pulsando
  const p=.5+.5*Math.sin(u*4);ctx.strokeStyle=`rgba(255,240,200,${.25+.25*p})`;ctx.lineWidth=8;if(pull<.3){ctx.beginPath();ctx.ellipse(W/2,930,230+p*10,170+p*8,0,0,7);ctx.stroke()}
});

// 8. leitura da 2ª carta (370–377)
scene(370,377,(t)=>{
  const u=t-370;ctx.fillStyle=lg(0,H,['#151225','#221b33','#0d0b16']);ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.45,100,W/2,H*.45,900);g.addColorStop(0,'rgba(255,220,160,.3)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeOut(seg(u,0,1)),sway=Math.sin(u*1.2)*.012+Math.sin(u*23)*.002;
  ctx.save();ctx.translate(W/2,lerp(1300,980,k));ctx.rotate(sway+.02);
  ctx.fillStyle='rgba(0,0,0,.35)';rr(-400,-560,820,1140,14);ctx.fill();
  ctx.fillStyle='#efe6cf';rr(-410,-580,820,1140,14);ctx.fill();
  ctx.strokeStyle='rgba(120,90,60,.15)';ctx.lineWidth=2;for(let y=-440;y<500;y+=74){ctx.beginPath();ctx.moveTo(-340,y);ctx.lineTo(340,y);ctx.stroke()}
  ctx.strokeStyle='rgba(220,60,60,.55)';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-360,-580);ctx.lineTo(-360,560);ctx.stroke();
  const txt=['Você veio.','Eu sabia que viria.','','Eu te observo','desde o','PRIMEIRO DIA.','','Olhe a foto.'];
  const full=txt.join('\n'),n=Math.floor(full.length*clamp((u-.35)/5.4));
  const shown=full.slice(0,n).split('\n');
  shown.forEach((ln,i)=>{ctx.font=(i==5?'700 96px':'600 80px')+' Caveat';ctx.fillStyle=i==5?'#b71c1c':'#1f2f6b';ctx.fillText(ln,-330,-450+i*80)});
  ctx.restore();
  ctx.save();ctx.translate(W/2,lerp(1300,980,k));ctx.rotate(sway+.02);
  for(const sx of [-1,1]){ctx.save();ctx.scale(sx,1);ctx.strokeStyle=OUT;ctx.lineWidth=6;
    ctx.fillStyle=P.hood;ctx.beginPath();ctx.moveTo(380,1000);ctx.lineTo(400,520);ctx.quadraticCurveTo(470,490,540,520);ctx.lineTo(580,1000);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle=P.hoodS;ctx.beginPath();ctx.moveTo(398,560);ctx.quadraticCurveTo(470,530,544,560);ctx.lineTo(546,600);ctx.quadraticCurveTo(470,572,396,600);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle=P.skin;ctx.beginPath();ctx.ellipse(468,470,66,82,-.15,0,7);ctx.fill();ctx.stroke();
    ctx.fillStyle=P.skinS;ctx.beginPath();ctx.ellipse(490,480,30,50,-.15,0,7);ctx.fill();
    ctx.fillStyle=P.skin;ctx.save();ctx.translate(418,418);ctx.rotate(-.75);rr(-24,-62,48,92,24);ctx.fill();ctx.stroke();ctx.fillStyle='rgba(255,255,255,.35)';rr(-12,-54,22,22,10);ctx.fill();ctx.restore();
    ctx.restore()}
  ctx.restore();
});

// 9. a foto: ele dormindo no dia 1, 07:12 (380–392)
scene(380,392,(t)=>{const u=t-380;ctx.fillStyle=lg(0,H,['#120f1e','#1d1830','#0a0912']);ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.45,80,W/2,H*.45,900);g.addColorStop(0,'rgba(255,220,170,.28)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const enter=easeOut(seg(u,0,1.2));
  // zoom: foto inteira → no rosto (u 3–7) → no carimbo da hora (u 7.2–9)
  const z1=ease(seg(u,3,7)),z2=ease(seg(u,7.2,8.6));
  const fx=W/2,fy=lerp(1500,880,enter),PW=760,PH=900;
  let zs=1+z1*1.3,cxz=lerp(fx,fx-250,z1),cyz=lerp(fy,fy-60,z1);
  if(z2>0){zs=lerp(zs,2.1,z2);cxz=lerp(cxz,fx+220,z2);cyz=lerp(cyz,fy+290,z2)}
  ctx.save();ctx.translate(W/2,H*.46);ctx.scale(zs,zs);ctx.translate(-cxz,-cyz);
  ctx.translate(fx,fy);ctx.rotate(lerp(-.25,-.04,enter));
  ctx.fillStyle='rgba(0,0,0,.4)';rr(-PW/2+14,-PH/2+18,PW,PH,10);ctx.fill();
  ctx.fillStyle='#f5f2ea';rr(-PW/2,-PH/2,PW,PH,10);ctx.fill();
  // imagem: o quarto do ep. 1 (cena 0) desenhado dentro da foto
  const iw=PW-60,ih=PH-200;ctx.save();ctx.beginPath();ctx.rect(-iw/2,-PH/2+30,iw,ih);ctx.clip();
  ctx.translate(-iw/2,-PH/2+30);ctx.scale(iw/1040,ih/1040);ctx.translate(-20,-650);
  const s0=S.find(s=>s.a===0);if(s0){ctx.save();s0.fn(2.0);ctx.restore()}
  ctx.restore();
  // tom de foto (sépia leve + vinheta)
  ctx.save();ctx.beginPath();ctx.rect(-iw/2,-PH/2+30,iw,ih);ctx.clip();ctx.fillStyle='rgba(255,190,120,.16)';ctx.fillRect(-iw/2,-PH/2+30,iw,ih);
  const vg=ctx.createRadialGradient(0,-PH/2+30+ih/2,ih*.2,0,-PH/2+30+ih/2,ih*.8);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.45)');ctx.fillStyle=vg;ctx.fillRect(-iw/2,-PH/2+30,iw,ih);ctx.restore();
  // carimbo da hora estilo câmera
  const blink=u>7.2?(.6+.4*Math.sin(u*10)):1;ctx.fillStyle=`rgba(255,140,40,${blink})`;ctx.font='700 46px "DejaVu Sans Mono", monospace';ctx.textAlign='right';ctx.fillText("06 11 '26  07:12",iw/2-20,-PH/2+30+ih-24);ctx.textAlign='left';
  ctx.fillStyle='#2a2a33';ctx.font='600 44px Caveat';ctx.fillText('dia 1',-PW/2+40,PH/2-60);
  ctx.restore();
  if(z2>.5){ctx.fillStyle=`rgba(200,20,20,${(z2-.5)*.25*(.6+.4*Math.sin(u*8))})`;ctx.fillRect(0,0,W,H)}
});

// 10. o susto — rosto em close (390–394 usa outra faixa: 395–399)
scene(395,399,(t)=>{const u=t-395;ctx.fillStyle=lg(0,H,['#1a0a10','#2a0e18','#0e0508']);ctx.fillRect(0,0,W,H);
  const beat=Math.max(0,Math.sin(u*Math.PI*2.4))**8;
  const g=ctx.createRadialGradient(W/2,H*.5,100,W/2,H*.5,1000);g.addColorStop(0,`rgba(220,40,40,${.25+beat*.25})`);g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const z=1.2+beat*.04+u*.03;
  face(W/2,H*.5,z,{open:1.35,eye:1.4,brow:-.9,mouthO:.75,pupil:.65,px:Math.sin(u*14)*3});
  // suor
  ctx.fillStyle='rgba(180,220,255,.85)';const sy=lerp(H*.36,H*.44,(u*.6)%1);ctx.beginPath();ctx.ellipse(W/2+190,sy,10,16,0,0,7);ctx.fill();
});

// 11. a cidade escura e UMA janela acende (400–412)
scene(400,412,(t)=>{const u=t-400;sky('#05071a','#0f1430','#1f1d40');
  const r=rng(61);for(let i=0;i<150;i++){ctx.fillStyle=`rgba(255,255,255,${.3+.5*r()})`;ctx.fillRect(r()*W,r()*1100,2,2)}
  sun(170,330,55,'#f4f1dc','rgba(200,210,255,.18)');
  const on=u>6.04,k=easeOut(seg(u,6.04,6.44));
  // zoom em direção à janela
  const zz=lerp(1,1.9,ease(seg(u,6.3,11.8))),wx=742,wy=760;
  ctx.save();ctx.translate(W/2,H*.42);ctx.scale(zz,zz);ctx.translate(-lerp(W/2,wx,seg(zz,1,1.9)),-lerp(H*.42,wy,seg(zz,1,1.9)));
  buildings(401,1320,500,1000,'#0e1128',null,0,0,0);
  // prédio da janela
  ctx.fillStyle='#14183a';ctx.fillRect(650,560,190,760);ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=3;ctx.strokeRect(650,560,190,760);
  for(let yy=600;yy<1280;yy+=60)for(let xx=668;xx<820;xx+=50){ctx.fillStyle='rgba(255,255,255,.05)';ctx.fillRect(xx,yy,26,36)}
  if(on){const g=ctx.createRadialGradient(wx+13,wy+18,4,wx+13,wy+18,220);g.addColorStop(0,`rgba(255,200,110,${.55*k})`);g.addColorStop(1,'rgba(255,200,110,0)');ctx.fillStyle=g;ctx.fillRect(wx-230,wy-220,480,480);
    ctx.fillStyle=`rgba(255,214,130,${k})`;ctx.fillRect(wx,wy,26,36);
    // silhueta na janela (aparece no final)
    if(u>9){ctx.globalAlpha=seg(u,9,10.3);ctx.fillStyle='#1a0f08';ctx.beginPath();ctx.arc(wx+13,wy+12,6,0,7);ctx.fill();ctx.fillRect(wx+6,wy+18,14,18);ctx.globalAlpha=1}}
  ctx.restore();
  ctx.fillStyle='#10121f';ctx.fillRect(0,1320,W,600);ctx.fillStyle='#1b1d30';ctx.fillRect(0,1320,W,18);
  // ele de costas olhando
  personFront(W/2-180,1500,1.3,{back:true});
  if(on&&u<7.04){ctx.fillStyle=`rgba(255,240,200,${(1-seg(u,6.04,7.04))*.18})`;ctx.fillRect(0,0,W,H)}
});

// 12. escolha do ep. 2 (410–416 → faixa 420–426)
scene(420,426,(t)=>{const u=t-420;const pz=1+u*.02;ctx.translate(W/2,H*.7);ctx.scale(pz,pz);ctx.translate(-W/2,-H*.7);
  sky('#05071a','#121638','#231d44');const r=rng(71);for(let i=0;i<120;i++){ctx.fillStyle='rgba(255,255,255,.5)';ctx.fillRect(r()*W,r()*1000,2,2)}
  buildings(421,1240,300,800,'#0e1128',null,0,0,0);
  // janela acesa lá longe
  ctx.fillStyle='#14183a';ctx.fillRect(820,640,150,600);const gg=ctx.createRadialGradient(895,760,4,895,760,160);gg.addColorStop(0,'rgba(255,200,110,.55)');gg.addColorStop(1,'rgba(255,200,110,0)');ctx.fillStyle=gg;ctx.fillRect(735,600,320,320);ctx.fillStyle='#ffd682';ctx.fillRect(882,742,26,36);
  ctx.fillStyle='#161827';ctx.fillRect(0,1240,W,680);
  ctx.fillStyle='#22243a';ctx.beginPath();ctx.moveTo(470,1240);ctx.lineTo(610,1240);ctx.lineTo(900,H);ctx.lineTo(180,H);ctx.fill();
  personTurn(540,1500,.95,{eye:1.15,brow:-.4,lid:.05},Math.sin(u*1.3)*.9);
  ctx.translate(W/2,H*.7);ctx.scale(1/pz,1/pz);ctx.translate(-W/2,-H*.7);
  const ca=easeOut(seg(u,.8,1.4)),cb=easeOut(seg(u,1.2,1.8));
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);
  ctx.fillStyle='rgba(30,120,80,.92)';rr(70,420,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,565);
  ctx.font='800 54px Inter';ctx.fillText('Ir até a janela acesa',250,540);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);
  ctx.fillStyle='rgba(170,60,60,.92)';rr(70,650,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,795);
  ctx.font='800 54px Inter';ctx.fillText('Fugir e se esconder',250,770);ctx.restore();
});

// 13. cartela final do ep. 2 (430–434)
scene(430,434,(t)=>{const u=t-430;ctx.fillStyle='#050507';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.45,50,W/2,H*.45,900);g.addColorStop(0,'rgba(200,30,30,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.4);ctx.scale(k,k);ctx.textAlign='center';
  const gl=u<.5||(u%1.3<.08)?1:0;ctx.font='900 118px Inter';
  if(gl){ctx.fillStyle='rgba(255,0,60,.7)';ctx.fillText('E SE SOBRASSE',-8,0);ctx.fillStyle='rgba(0,220,255,.7)';ctx.fillText('E SE SOBRASSE',8,0)}
  ctx.fillStyle='#fff';ctx.fillText('E SE SOBRASSE',0,0);ctx.font='900 220px Inter';ctx.fillStyle='#ff3b3b';ctx.fillText('SÓ UM?',0,220);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 3 · EM BREVE',W/2,H*.4+420);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.4+520);ctx.restore()});
