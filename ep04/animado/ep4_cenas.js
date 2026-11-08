// ===================== EP. 4 — O METRÔ =====================
// (vencedora do EP. 3: A — correr atrás da sombra)
function shadowRun(x,y,sc,ph,alpha,trail){for(let i=(trail??3);i>=0;i--){ctx.save();ctx.globalAlpha=alpha*(i?0.18:1);ctx.translate(x+i*30,y);ctx.scale(sc,sc);
  ctx.fillStyle='#000';ctx.beginPath();ctx.arc(0,-330,46,0,7);ctx.fill();rr(-55,-290,110,190,40);ctx.fill();
  ctx.strokeStyle='#000';ctx.lineWidth=34;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-20,-110);ctx.lineTo(-20+Math.sin(ph)*60,0);ctx.moveTo(20,-110);ctx.lineTo(20-Math.sin(ph)*60,0);ctx.moveTo(-45,-270);ctx.lineTo(-45-Math.sin(ph)*50,-160);ctx.moveTo(45,-270);ctx.lineTo(45+Math.sin(ph)*50,-160);ctx.stroke();ctx.restore()}}
function vignette(a){const v=ctx.createRadialGradient(W/2,H*.5,300,W/2,H*.5,1100);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,`rgba(0,0,0,${a??.6})`);ctx.fillStyle=v;ctx.fillRect(0,0,W,H)}
function tileWall(x,y,w,h,c1,c2){ctx.fillStyle=c1;ctx.fillRect(x,y,w,h);ctx.fillStyle=c2;for(let yy=y;yy<y+h;yy+=46)ctx.fillRect(x,yy,w,3);for(let xx=x;xx<x+w;xx+=92)ctx.fillRect(xx,y,3,h)}

// 1. recap (700–704)
scene(700,704,(t)=>{const u=t-700;ctx.fillStyle=lg(0,H,['#120c1e','#24163a','#0d0a16']);ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,40,W/2,H*.42,900);g.addColorStop(0,'rgba(60,200,130,.28)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 50px "DejaVu Sans Mono", monospace';ctx.globalAlpha=easeOut(seg(u,0,.4));ctx.fillText('NO EPISÓDIO 3, VOCÊS ESCOLHERAM',W/2,520);ctx.globalAlpha=1;ctx.textAlign='left';
  const kb=easeOut(seg(u,.9,1.5));ctx.save();ctx.globalAlpha=1-kb;ctx.translate(kb*700,0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,900,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,1045);ctx.font='800 50px Inter';ctx.fillText('Ficar e descobrir quem é',250,1020);ctx.restore();
  const ka=easeBack(seg(u,1.2,1.8)),sc=1+ka*.12,yy=lerp(660,760,ka);
  ctx.save();ctx.translate(W/2,yy+95);ctx.scale(sc,sc);ctx.translate(-W/2,-(yy+95));
  ctx.fillStyle='rgba(30,140,90,.96)';rr(70,yy,940,190,36);ctx.fill();ctx.strokeStyle='rgba(255,255,255,'+(.25+.25*Math.sin(u*6))+')';ctx.lineWidth=6;ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,yy+145);ctx.font='800 50px Inter';ctx.fillText('Correr atrás da sombra',250,yy+120);
  if(u>1.6){const k=easeBack(seg(u,1.6,2));ctx.save();ctx.translate(930,yy+40);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.arc(0,0,58,0,7);ctx.fill();ctx.strokeStyle='#1c1422';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-26,2);ctx.lineTo(-6,22);ctx.lineTo(28,-20);ctx.stroke();ctx.restore()}
  ctx.restore();
  if(u>1.6){const r=rng(9);for(let i=0;i<40;i++){const a=r()*7,sp=300+r()*500,k=seg(u,1.6,3.2),x=W/2+Math.cos(a)*sp*k,y=860+Math.sin(a)*sp*k+k*k*300;ctx.fillStyle=['#ffd84a','#3ccf8e','#fff'][i%3];ctx.globalAlpha=1-k;ctx.fillRect(x,y,10,16);ctx.globalAlpha=1}}
});

// 2. descendo a escada correndo — 13 → 1 (710–716)
scene(710,716,(t)=>{const u=t-710;ctx.fillStyle='#1a1a24';ctx.fillRect(0,0,W,H);
  const S_=1.05,hx=540,hy=1100,foot=hy+87*S_,run=70,rise=48,o=(u*260)%run;
  ctx.fillStyle='#22222e';ctx.fillRect(0,0,W,H);
  // degraus descendo para a esquerda (a superfície sobe e passa por baixo dele)
  ctx.save();ctx.translate(2*hx,0);ctx.scale(-1,1);ctx.translate(o,-o*rise/run);
  ctx.beginPath();ctx.moveTo(hx+run*12,H+400);ctx.lineTo(hx+run*12,foot-rise*12);
  for(let i=12;i>-16;i--){const x=hx+i*run,y=foot-i*rise;ctx.lineTo(x+run/2,y);ctx.lineTo(x-run/2,y);ctx.lineTo(x-run/2,y+rise)}
  ctx.lineTo(hx-16*run,H+400);ctx.closePath();ctx.fillStyle='#4a4a5c';ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,.08)';for(let i=-16;i<12;i++){const x=hx+i*run,y=foot-i*rise;ctx.fillRect(x-run/2,y,run,5)}
  ctx.strokeStyle='#8a8a9a';ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(hx+run*12,foot-rise*12-260);ctx.lineTo(hx-run*16,foot+rise*16-260);ctx.stroke();
  ctx.lineWidth=6;for(let i=-16;i<12;i+=2){const x=hx+i*run,y=foot-i*rise;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,y-260);ctx.stroke()}
  ctx.restore();
  const floor=Math.max(1,13-Math.floor(u*2.4));
  ctx.fillStyle=floor==1?'#b71c1c':'#1d6b3a';rr(60,160,220,140,12);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.stroke();ctx.fillStyle='#fff';ctx.font='900 90px Inter';ctx.textAlign='center';ctx.fillText(floor==1?'T':floor+'º',170,265);ctx.textAlign='left';
  person(hx,hy-Math.abs(Math.sin(u*14))*14,S_,{f:1,walk:u*14,lean:-.1,look:.18,noShadow:true});
  // linhas de velocidade
  ctx.strokeStyle='rgba(255,255,255,.12)';ctx.lineWidth=4;const r=rng(3);for(let i=0;i<14;i++){const y=(r()*H+u*900)%H;ctx.beginPath();ctx.moveTo(r()*W,y);ctx.lineTo(r()*W*.2+W*.8,y-60);ctx.stroke()}
  const g=ctx.createRadialGradient(540,800,50,540,800,1000);g.addColorStop(0,'rgba(255,90,60,.12)');g.addColorStop(1,'rgba(0,0,0,.6)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
});

// 3. avenida vazia — a sombra correndo lá na frente (720–728)
scene(720,728,(t)=>{const u=t-720;sky('#05071a','#0f1430','#1f1d40');const r=rng(83);for(let i=0;i<120;i++){ctx.fillStyle=`rgba(255,255,255,${.3+.5*r()})`;ctx.fillRect(r()*W,r()*650,2,2)}
  buildings(721,1150,300,800,'#0c0f26',null,0,0,0);
  // avenida em perspectiva
  const vx=W/2,vy=1150;ctx.fillStyle='#16182a';ctx.beginPath();ctx.moveTo(vx-60,vy);ctx.lineTo(vx+60,vy);ctx.lineTo(W+500,H);ctx.lineTo(-500,H);ctx.closePath();ctx.fill();
  ctx.fillStyle='#e8d48a';for(let i=0;i<9;i++){const k=((i/9)+u*.35)%1,y=lerp(vy,H+200,k*k),w=lerp(4,40,k*k),h=lerp(10,170,k*k);ctx.globalAlpha=.8;ctx.fillRect(vx-w/2,y,w,h)}ctx.globalAlpha=1;
  // postes apagados
  for(let s of [-1,1])for(let i=0;i<5;i++){const k=((i/5)+u*.35)%1,kk=k*k,x=vx+s*lerp(80,900,kk),y=lerp(vy,H+300,kk),hh=lerp(60,900,kk);ctx.strokeStyle='#2a2d44';ctx.lineWidth=lerp(2,18,kk);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,y-hh);ctx.lineTo(x-s*hh*.18,y-hh);ctx.stroke()}
  // carro abandonado
  {const kc=Math.min(1.2,.08+u*.16),kk=kc*kc;if(kc<1.15){ctx.save();ctx.globalAlpha=.95;car(vx-lerp(70,760,kk),lerp(vy+10,H+120,kk),'#5a2a2a',1,lerp(.12,1.6,kk));ctx.restore()}}
  // a sombra, pequena, lá na frente
  if(u<7.2){const k=seg(u,0,7.2);shadowRun(vx+20+Math.sin(u*2)*10,lerp(1300,1205,k),lerp(.62,.34,k),u*15,1-seg(u,6.5,7.2),2)}
  // ele correndo de costas, perto da câmera
  const yb=Math.abs(Math.sin(u*12))*18;personFront(W/2-40,1820-yb,1.45,{back:true,walk:u*12});
  // grito (fala 5)
  if(u>5.6){const k=seg(u,5.6,6.4);ctx.strokeStyle=`rgba(255,255,255,${.5*(1-k)})`;ctx.lineWidth=8;for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(W/2-40,1180,120+i*70+k*200,-2.4,-.7);ctx.stroke()}}
  vignette(.55);
});

// 4. entrada do metrô — a sombra desce (730–736)
scene(730,736,(t)=>{const u=t-730;sky('#05071a','#0d1128','#191a33');
  buildings(731,1050,400,900,'#0b0e22',null,0,0,0);
  ctx.fillStyle='#13152a';ctx.fillRect(0,1050,W,H-1050);
  // boca do metrô
  ctx.fillStyle='#2a2d3e';ctx.fillRect(220,980,640,90);ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.strokeRect(220,980,640,90);
  const fl=(u>2&&Math.sin(u*40)>.3)?.35:1;
  ctx.fillStyle=`rgba(30,90,200,${fl})`;rr(330,840,420,120,14);ctx.fill();ctx.stroke();ctx.fillStyle=`rgba(255,255,255,${fl})`;ctx.font='900 78px Inter';ctx.textAlign='center';ctx.fillText('METRÔ',540,928);ctx.textAlign='left';
  const g=ctx.createRadialGradient(540,900,10,540,900,500);g.addColorStop(0,`rgba(70,130,255,${.35*fl})`);g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,500,W,900);
  // escada descendo pra escuridão
  ctx.fillStyle='#05050a';ctx.beginPath();ctx.moveTo(260,1070);ctx.lineTo(820,1070);ctx.lineTo(700,1500);ctx.lineTo(380,1500);ctx.closePath();ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.07)';for(let i=0;i<9;i++){const k=i/9,y=lerp(1090,1490,k),x0=lerp(270,385,k),x1=lerp(810,695,k);ctx.fillRect(x0,y,x1-x0,6)}
  ctx.strokeStyle='#6a6d80';ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(240,1000);ctx.lineTo(240,1080);ctx.lineTo(370,1520);ctx.moveTo(840,1000);ctx.lineTo(840,1080);ctx.lineTo(710,1520);ctx.stroke();
  // a sombra some escada abaixo
  if(u<2.4){const k=seg(u,0,2.4);shadowRun(lerp(560,540,k),lerp(1120,1460,k),lerp(.42,.3,k),u*15,1-seg(u,1.8,2.4),1)}
  // ele chega, ofegante
  const k=easeOut(seg(u,1,4.5));personFront(W/2+180,lerp(1950,1760,k),lerp(1.3,1.1,k),{back:true,walk:u*8*(1-k)});
  vignette(.6);
});

// 5. plataforma — um trem parado, só um vagão aceso (740–746)
scene(740,746,(t)=>{const u=t-740;ctx.fillStyle='#0b0c12';ctx.fillRect(0,0,W,H);
  tileWall(0,200,W,700,'#2f3a3a','#263030');
  ctx.fillStyle='#c9a227';ctx.fillRect(0,520,W,36);ctx.fillStyle='#1b1b20';ctx.font='900 34px Inter';ctx.fillText('ESTAÇÃO SÉ',60,550);
  const pan=lerp(0,-380,ease(seg(u,0,5.8)));ctx.save();ctx.translate(pan,0);
  // trem
  for(let c=0;c<3;c++){const x=c*760-200,lit=(c==1);ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillStyle=lit?'#c8ccd6':'#5a5e6a';rr(x,700,720,620,30);ctx.fill();ctx.stroke();
    ctx.fillStyle=lit?'#ffe6a8':'#1a1c24';for(let w=0;w<3;w++){rr(x+50+w*220,790,170,200,14);ctx.fill();ctx.stroke()}
    ctx.fillStyle='#b71c1c';ctx.fillRect(x,1030,720,26);
    // portas
    if(lit){const op=easeOut(seg(u,1.5,3));ctx.fillStyle='#ffe6a8';ctx.fillRect(x+260,1070,200,250);ctx.fillStyle='#8a8e9a';ctx.fillRect(x+260-op*80,1070,100,250);ctx.fillRect(x+360+op*80,1070,100,250);ctx.strokeRect(x+260,1070,200,250);
      const g=ctx.createRadialGradient(x+360,1000,40,x+360,1000,700);g.addColorStop(0,'rgba(255,220,150,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(x-400,500,1500,1200)}}
  ctx.restore();
  // plataforma
  ctx.fillStyle='#3a3b44';ctx.fillRect(0,1320,W,600);ctx.fillStyle='#e8c84a';ctx.fillRect(0,1320,W,22);
  ctx.fillStyle='rgba(255,220,150,.12)';ctx.beginPath();ctx.moveTo(220+pan*.0,1342);ctx.lineTo(520,1342);ctx.lineTo(760,H);ctx.lineTo(80,H);ctx.closePath();ctx.fill();
  personFront(220,1840,1.15,{back:true});
  vignette(.6);
});

// 6. a foto no chão (750–756)
scene(750,756,(t)=>{const u=t-750;ctx.fillStyle='#2e2f36';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='rgba(255,255,255,.04)';for(let y=0;y<H;y+=120)ctx.fillRect(0,y,W,4);for(let x=0;x<W;x+=120)ctx.fillRect(x,0,4,H);
  const z=lerp(.7,1.15,ease(seg(u,0,5.5)));ctx.save();ctx.translate(W/2,H*.47);ctx.scale(z,z);ctx.rotate(-.06);
  polaroid(0,0,760,0,720,722.4,1.25,W/2,H*.78,'dia 48 — 21:00');ctx.restore();
  // sombra de alguém passando por cima da foto
  if(u>3.8){const k=seg(u,3.8,5.6);ctx.fillStyle=`rgba(0,0,0,${.45*Math.sin(k*Math.PI)})`;ctx.beginPath();ctx.ellipse(lerp(-200,1300,k),H*.5,260,700,.2,0,7);ctx.fill()}
  const g=ctx.createRadialGradient(W/2,H*.47,80,W/2,H*.47,900);g.addColorStop(0,'rgba(255,220,150,.12)');g.addColorStop(1,'rgba(0,0,0,.65)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
});

// 7. o rosto — "quem tirou essa foto?" (760–764)
scene(760,764,(t)=>{const u=t-760;ctx.fillStyle='#120e10';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.5,100,W/2,H*.5,1000);g.addColorStop(0,'rgba(255,210,140,.28)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  face(W/2,H*.52,1.2+u*.05,{open:1.2,eye:1.3,brow:-.8,mouthO:u>2?.6:.25,pupil:.6,px:u>2?18:-8});
  if(u>2){ctx.fillStyle=`rgba(200,20,20,${.1*(.5+.5*Math.sin(u*10))})`;ctx.fillRect(0,0,W,H)}
});

// 8. túnel escuro — uma lanterna pisca duas vezes (770–776)
scene(770,776,(t)=>{const u=t-770;ctx.fillStyle='#030305';ctx.fillRect(0,0,W,H);
  const vx=W/2,vy=880;
  // boca do túnel
  ctx.fillStyle='#0d0e14';ctx.beginPath();ctx.ellipse(vx,vy+200,520,700,0,Math.PI,0);ctx.lineTo(vx+520,H);ctx.lineTo(vx-520,H);ctx.closePath();ctx.fill();
  ctx.fillStyle='#000';ctx.beginPath();ctx.ellipse(vx,vy+120,170,240,0,Math.PI,0);ctx.lineTo(vx+170,vy+200);ctx.lineTo(vx-170,vy+200);ctx.closePath();ctx.fill();
  // trilhos
  ctx.strokeStyle='#5a5e6a';ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(vx-60,vy+200);ctx.lineTo(vx-420,H);ctx.moveTo(vx+60,vy+200);ctx.lineTo(vx+420,H);ctx.stroke();
  ctx.strokeStyle='#2a2b33';ctx.lineWidth=14;for(let i=0;i<10;i++){const k=i/10,kk=k*k,y=lerp(vy+210,H,kk),hw=lerp(80,500,kk);ctx.beginPath();ctx.moveTo(vx-hw,y);ctx.lineTo(vx+hw,y);ctx.stroke()}
  // lanterna: pisca 2x
  const on=(u>1.2&&u<1.6)||(u>2.1&&u<2.5)||(u>3.6);
  if(on){const g=ctx.createRadialGradient(vx+30,vy+60,4,vx+30,vy+60,u>3.6?420:300);g.addColorStop(0,'rgba(255,250,220,.95)');g.addColorStop(.08,'rgba(255,240,190,.55)');g.addColorStop(1,'rgba(255,240,190,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H)}
  // ele na beira da plataforma, de costas
  ctx.fillStyle='#2a2b33';ctx.fillRect(0,1620,W,300);ctx.fillStyle='#e8c84a';ctx.fillRect(0,1620,W,18);
  personFront(W/2-260,1900,1.35,{back:true});
  vignette(.7);
});

// 9. escolha (780–786)
scene(780,786,(t)=>{const u=t-780;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  // fundo: vagão aceso à esquerda, túnel à direita
  ctx.save();ctx.globalAlpha=.5;ctx.fillStyle='#c8ccd6';rr(-120,1050,560,520,26);ctx.fill();ctx.fillStyle='#ffe6a8';rr(-60,1110,180,170,12);ctx.fill();rr(170,1110,180,170,12);ctx.fill();
  ctx.fillStyle='#000';ctx.beginPath();ctx.ellipse(860,1300,230,330,0,Math.PI,0);ctx.lineTo(1090,1570);ctx.lineTo(630,1570);ctx.closePath();ctx.fill();
  if(Math.floor(u*1.6)%2==0){const g=ctx.createRadialGradient(870,1180,4,870,1180,160);g.addColorStop(0,'rgba(255,250,220,.9)');g.addColorStop(1,'rgba(255,250,220,0)');ctx.fillStyle=g;ctx.fillRect(650,1000,440,400)}
  ctx.restore();
  ctx.fillStyle='rgba(10,8,14,.45)';ctx.fillRect(0,0,W,H);
  personTurn(540,1700,1.0,{eye:1.2,brow:-.5,lid:0},Math.sin(u*1.4)*.9);
  const ca=easeOut(seg(u,.8,1.4)),cb=easeOut(seg(u,1.2,1.8));
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,120,80,.92)';rr(70,420,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,565);ctx.font='800 52px Inter';ctx.fillText('Entrar no vagão aceso',250,540);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,650,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,795);ctx.font='800 52px Inter';ctx.fillText('Seguir a luz no túnel',250,770);ctx.restore();
});

// 10. cartela final (790–794)
scene(790,794,(t)=>{const u=t-790;ctx.fillStyle='#050507';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.45,50,W/2,H*.45,900);g.addColorStop(0,'rgba(200,30,30,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.4);ctx.scale(k,k);ctx.textAlign='center';
  const gl=u<.5||(u%1.3<.08)?1:0;ctx.font='900 118px Inter';
  if(gl){ctx.fillStyle='rgba(255,0,60,.7)';ctx.fillText('E SE SOBRASSE',-8,0);ctx.fillStyle='rgba(0,220,255,.7)';ctx.fillText('E SE SOBRASSE',8,0)}
  ctx.fillStyle='#fff';ctx.fillText('E SE SOBRASSE',0,0);ctx.font='900 220px Inter';ctx.fillStyle='#ff3b3b';ctx.fillText('SÓ UM?',0,220);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 5 · EM BREVE',W/2,H*.4+420);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.4+520);ctx.restore()});
