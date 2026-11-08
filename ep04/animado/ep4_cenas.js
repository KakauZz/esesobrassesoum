// ===================== EP. 4 — O METRÔ =====================
// (vencedora do EP. 3: A — correr atrás da sombra)
function shadowRun(x,y,sc,ph,alpha,trail){for(let i=(trail??3);i>=0;i--){ctx.save();ctx.globalAlpha=alpha*(i?0.18:1);ctx.translate(x+i*30,y);ctx.scale(sc,sc);
  ctx.fillStyle='#000';ctx.beginPath();ctx.arc(0,-330,46,0,7);ctx.fill();rr(-55,-290,110,190,40);ctx.fill();
  ctx.strokeStyle='#000';ctx.lineWidth=34;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-20,-110);ctx.lineTo(-20+Math.sin(ph)*60,0);ctx.moveTo(20,-110);ctx.lineTo(20-Math.sin(ph)*60,0);ctx.moveTo(-45,-270);ctx.lineTo(-45-Math.sin(ph)*50,-160);ctx.moveTo(45,-270);ctx.lineTo(45+Math.sin(ph)*50,-160);ctx.stroke();ctx.restore()}}
function vignette(a){const v=ctx.createRadialGradient(W/2,H*.5,300,W/2,H*.5,1100);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,`rgba(0,0,0,${a??.6})`);ctx.fillStyle=v;ctx.fillRect(0,0,W,H)}
function tileWall(x,y,w,h,c1,c2){ctx.fillStyle=c1;ctx.fillRect(x,y,w,h);ctx.fillStyle=c2;for(let yy=y;yy<y+h;yy+=46)ctx.fillRect(x,yy,w,3);for(let xx=x;xx<x+w;xx+=92)ctx.fillRect(xx,y,3,h)}

function carBack(x,y,s,col){ // carro visto de TRÁS (para cenas de câmera de frente / rua em perspectiva). (x,y) = meio do chão
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle=OUT;ctx.lineWidth=6;
  ctx.fillStyle='rgba(0,0,0,.35)';ctx.beginPath();ctx.ellipse(0,0,175,22,0,0,7);ctx.fill();
  ctx.fillStyle='#15151b';rr(-150,-62,52,62,10);ctx.fill();rr(98,-62,52,62,10);ctx.fill();
  ctx.fillStyle=col;rr(-165,-175,330,140,26);ctx.fill();ctx.stroke();
  ctx.fillStyle=col;rr(-120,-262,240,100,30);ctx.fill();ctx.stroke();
  ctx.fillStyle='#1e2a3a';rr(-98,-245,196,70,16);ctx.fill();ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(-80,-238,40,56);
  ctx.fillStyle='#5a1414';rr(-150,-140,62,30,8);ctx.fill();ctx.stroke();rr(88,-140,62,30,8);ctx.fill();ctx.stroke();
  ctx.fillStyle='#e8e2c8';rr(-46,-112,92,30,4);ctx.fill();ctx.stroke();
  ctx.fillStyle='rgba(0,0,0,.25)';ctx.fillRect(-165,-70,330,14);
  ctx.restore()}

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
  {const kc=Math.min(1.2,.08+u*.16),kk=kc*kc;if(kc<1.15){ctx.save();ctx.globalAlpha=.95;carBack(vx-lerp(70,700,kk),lerp(vy+10,H+60,kk),lerp(.08,1.25,kk),'#7a2e2e');ctx.restore()}}
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
  {const k2=easeOut(seg(u,4,5.9)),bob=Math.abs(Math.sin(u*9))*10*(u>4&&u<5.9?1:0);personFront(lerp(220,330,k2),lerp(1840,1600,k2)-bob,lerp(1.15,.85,k2),{back:true})}
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
  face(W/2,H*.52,1.2+u*.05,{open:1.2,eye:1.3,brow:-.8,mouthO:u>2?.6:.25,pupil:.6,px:u>3?Math.sin((u-3)*7)*30:(u>2?18:-8)});
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

// ===== cenas extras do EP. 4 (história ampliada) =====
// A. saguão — ele empurra a porta de vidro (que ainda balançava) e SAI em direção à câmera (705–709.5). Câmera do lado de FORA, de frente pra porta.
scene(705,709.5,(t)=>{const u=t-705;ctx.fillStyle='#0b0d18';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#1a1d30';ctx.fillRect(0,0,W,1560);ctx.fillStyle='rgba(255,255,255,.04)';for(let x=0;x<W;x+=135)ctx.fillRect(x,0,4,1560);
  ctx.fillStyle='#2b2a3a';ctx.fillRect(240,520,600,1040);const g=ctx.createRadialGradient(540,700,20,540,700,600);g.addColorStop(0,'rgba(255,220,160,.25)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(240,520,600,1040);
  ctx.fillStyle='#22243a';ctx.fillRect(0,1560,W,360);ctx.fillStyle='rgba(255,255,255,.05)';for(let x=0;x<W;x+=180)ctx.fillRect(x,1560,4,360);
  // ele: dentro (atrás do vidro) até ~1.3s, depois atravessa a porta e vem pra calçada, crescendo em direção à câmera
  const k=easeOut(seg(u,.2,4.2)),py=lerp(1555,1900,k),ps=lerp(.8,1.55,k),fora=u>1.3;
  const door=()=>{const op=easeOut(seg(u,.9,1.5))*(1-seg(u,2.2,2.6)),sw=op*1.25+(u>2.2?Math.sin((u-2.2)*5.5)*Math.exp(-(u-2.2)*.45)*1.0:0);
    const dw=Math.max(30,600*Math.cos(Math.min(1.45,Math.abs(sw))));
    ctx.fillStyle='rgba(170,210,255,.16)';ctx.strokeStyle='#9aa3b8';ctx.lineWidth=12;ctx.fillRect(240,520,dw,1040);ctx.strokeRect(240,520,dw,1040);
    ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.moveTo(260,560);ctx.lineTo(260+dw*.25,560);ctx.lineTo(260,900);ctx.fill();
    ctx.fillStyle='#c9ccd6';rr(240+dw-70,1000,18,140,6);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=14;ctx.strokeRect(232,512,616,1056)};
  if(!fora){personFront(540,py,ps,{});door()}else{door();personFront(540,py,ps,{})}
  vignette(.55);
});

// B. o rádio caído no asfalto — visto de cima (716.2–719.8)
scene(716.2,719.8,(t)=>{const u=t-716.2;ctx.fillStyle='#24252e';ctx.fillRect(0,0,W,H);
  const r=rng(44);ctx.fillStyle='rgba(255,255,255,.05)';for(let i=0;i<500;i++)ctx.fillRect(r()*W,r()*H,3,3);
  ctx.fillStyle='#e8d48a';ctx.fillRect(500,0,80,700);ctx.fillRect(500,1100,80,820);
  const z=lerp(.85,1.25,ease(seg(u,0,3.6)));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(z,z);ctx.rotate(.35);
  // rádio comunicador (walkie-talkie) caído
  ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillStyle='#1d1f26';rr(-130,-260,260,520,40);ctx.fill();ctx.stroke();
  ctx.fillStyle='#2c2f39';rr(-60,-420,40,180,14);ctx.fill();ctx.stroke();
  ctx.fillStyle='#0f1012';for(let y=-200;y<-40;y+=28)rr(-90,y,180,14,6),ctx.fill();
  ctx.fillStyle='#6fbf73';rr(-90,10,180,90,10);ctx.fill();ctx.stroke();
  ctx.fillStyle='#1d3a1e';ctx.font='700 38px "DejaVu Sans Mono", monospace';ctx.fillText('CH 13',-70,70);
  ctx.fillStyle=(Math.floor(u*4)%2)?'#ff3b3b':'#5a1414';ctx.beginPath();ctx.arc(80,-230,14,0,7);ctx.fill();
  ctx.fillStyle='#3a3d48';ctx.beginPath();ctx.arc(-50,170,30,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(50,170,30,0,7);ctx.fill();ctx.stroke();
  ctx.restore();
  // chiado (ondas)
  ctx.strokeStyle=`rgba(255,255,255,${.25+.15*Math.sin(u*20)})`;ctx.lineWidth=6;for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(W/2+120,H*.5-260,90+i*55+((u*120)%55),-1.2,-.1);ctx.stroke()}
  vignette(.6);
});

// C. close no rádio — a voz no chiado, depois o rádio morre (736.2–739.8)
scene(736.2,739.8,(t)=>{const u=t-736.2;ctx.fillStyle='#0d0e12';ctx.fillRect(0,0,W,H);
  ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.fillStyle='#1d1f26';rr(140,300,800,1300,60);ctx.fill();ctx.stroke();
  const alive=u<2.9;
  ctx.fillStyle=alive?'#7fd283':'#1c2a1d';rr(220,520,640,320,20);ctx.fill();ctx.stroke();
  if(alive){ctx.strokeStyle='#1d3a1e';ctx.lineWidth=6;ctx.beginPath();for(let x=0;x<600;x+=6){const a=(u>.6&&u<2.5)?(60*Math.sin(x*.09+u*30)*Math.sin(x*.013)):(12*Math.sin(x*1.7+u*80));x?ctx.lineTo(240+x,680+a):ctx.moveTo(240+x,680+a)}ctx.stroke();
    ctx.fillStyle='#1d3a1e';ctx.font='700 40px "DejaVu Sans Mono", monospace';ctx.fillText('CH 13  ▮▮▮▯',250,575)}
  ctx.fillStyle='#0f1012';for(let y=950;y<1450;y+=40)rr(240,y,600,20,8),ctx.fill();
  ctx.fillStyle=alive?((Math.floor(u*6)%2)?'#ff3b3b':'#5a1414'):'#2a1010';ctx.beginPath();ctx.arc(860,380,22,0,7);ctx.fill();
  if(!alive){const f=1-seg(u,2.9,3.4);ctx.fillStyle=`rgba(255,255,255,${f*.6})`;ctx.fillRect(220,520,640,320)}
  // estática na tela toda
  const r=rng(Math.floor(u*24));ctx.fillStyle=`rgba(255,255,255,${alive?.05:.02})`;for(let i=0;i<300;i++)ctx.fillRect(r()*W,r()*H,4,2);
  vignette(.65);
});

// D. catracas — uma ainda girando (746.2–749.8). Câmera de frente para a linha de catracas.
scene(746.2,749.8,(t)=>{const u=t-746.2;ctx.fillStyle='#14161e';ctx.fillRect(0,0,W,H);
  tileWall(0,300,W,800,'#2c3640','#232c34');ctx.fillStyle='#1d6fd1';ctx.fillRect(0,420,W,60);ctx.fillStyle='#fff';ctx.font='900 40px Inter';ctx.fillText('ACESSO ÀS PLATAFORMAS  ↓',60,465);
  ctx.fillStyle='#3a3b44';ctx.fillRect(0,1100,W,820);
  for(let c=0;c<4;c++){const x=150+c*260,y=1100;ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillStyle='#8a8e9a';rr(x-60,y-320,120,320,16);ctx.fill();ctx.stroke();
    ctx.fillStyle='#22c55e';ctx.fillRect(x-30,y-300,60,24);
    const spin=(c==2)?(u*7*Math.exp(-u*.35)):0;ctx.save();ctx.translate(x,y-200);ctx.strokeStyle='#c9ccd6';ctx.lineWidth=16;ctx.lineCap='round';
    for(let a=0;a<3;a++){const an=spin+a*2.09;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.cos(an)*120,Math.sin(an)*28);ctx.stroke()}ctx.restore();
    if(c==2){ctx.strokeStyle='rgba(255,255,255,.35)';ctx.lineWidth=5;for(let i=0;i<2;i++){ctx.beginPath();ctx.arc(x,y-200,150+i*30,-.6+u,.4+u);ctx.stroke()}}}
  vignette(.6);
});

// E. escada rolante parada, pegadas pequenas na poeira (756.2–759.8). Câmera no topo olhando pra baixo.
scene(756.2,759.8,(t)=>{const u=t-756.2;ctx.fillStyle='#0c0d12';ctx.fillRect(0,0,W,H);
  const vx=W/2,vy=520,z=lerp(1,1.15,ease(seg(u,0,3.6)));ctx.save();ctx.translate(W/2,H*.6);ctx.scale(z,z);ctx.translate(-W/2,-H*.6);
  ctx.fillStyle='#2a2c36';ctx.beginPath();ctx.moveTo(vx-90,vy);ctx.lineTo(vx+90,vy);ctx.lineTo(W-60,H);ctx.lineTo(60,H);ctx.closePath();ctx.fill();
  for(let i=0;i<16;i++){const k=i/16,kk=k*k,y=lerp(vy,H,kk),hw=lerp(90,480,kk);ctx.fillStyle=i%2?'#353845':'#3d4150';ctx.fillRect(vx-hw,y,hw*2,lerp(6,70,kk));ctx.fillStyle='rgba(255,255,255,.08)';ctx.fillRect(vx-hw,y,hw*2,3)}
  ctx.strokeStyle='#5a5e6a';ctx.lineWidth=18;ctx.beginPath();ctx.moveTo(vx-110,vy-40);ctx.lineTo(10,H);ctx.moveTo(vx+110,vy-40);ctx.lineTo(W-10,H);ctx.stroke();
  // poeira e pegadas pequenas descendo
  ctx.fillStyle='rgba(200,190,170,.10)';ctx.fillRect(0,vy,W,H-vy);
  for(let i=1;i<12;i++){const k=i/12,kk=k*k,y=lerp(vy+20,H-60,kk),s=lerp(.15,1,kk),x=vx+(i%2?-1:1)*30*s;if(seg(u,.3+(12-i)*.12,.5+(12-i)*.12)<=0)continue;
    ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='rgba(20,18,16,.75)';ctx.beginPath();ctx.ellipse(0,0,16,30,0,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(0,40,11,15,0,0,7);ctx.fill();ctx.restore()}
  ctx.restore();
  ctx.fillStyle='#b71c1c';rr(80,140,300,90,12);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 44px Inter';ctx.fillText('PARADA',125,200);
  vignette(.65);
});

// F. o mapa do metrô — "VOCÊ ESTÁ AQUI · DIA 48" (764.2–769.8)
scene(764.2,769.8,(t)=>{const u=t-764.2;ctx.fillStyle='#1a1c22';ctx.fillRect(0,0,W,H);
  const z=lerp(1,1.35,ease(seg(u,1.5,5.4)));ctx.save();ctx.translate(560,880);ctx.scale(z,z);ctx.translate(-560,-880);
  ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillStyle='#f1efe8';rr(90,300,900,1200,20);ctx.fill();ctx.stroke();
  ctx.fillStyle='#1b1b20';ctx.font='900 48px Inter';ctx.fillText('MAPA DA REDE',140,380);
  const L=[['#1d4ed8',[[150,600],[400,620],[560,880],[760,1100],[940,1180]]],['#16a34a',[[200,1300],[420,1100],[560,880],[700,700],[900,520]]],['#dc2626',[[140,900],[340,880],[560,880],[780,860],[950,900]]],['#eab308',[[560,450],[560,880],[520,1400]]]];
  for(const [c,pts] of L){ctx.strokeStyle=c;ctx.lineWidth=18;ctx.lineJoin='round';ctx.beginPath();pts.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.stroke();
    for(const [x,y] of pts){ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x,y,14,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.stroke()}}
  ctx.fillStyle='#1b1b20';ctx.font='800 34px Inter';ctx.fillText('SÉ',580,860);
  // círculo vermelho desenhado à mão + texto
  const k=seg(u,.6,2);ctx.strokeStyle='#c62828';ctx.lineWidth=10;ctx.lineCap='round';ctx.beginPath();for(let a=0;a<=k*7;a+=.05){const rr_=78+6*Math.sin(a*3);const x=560+Math.cos(a)*rr_,y=880+Math.sin(a)*rr_*.85;a?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke();
  if(u>1.8){ctx.save();ctx.globalAlpha=seg(u,1.8,2.4);ctx.fillStyle='#c62828';ctx.font='700 62px Caveat';ctx.fillText('VOCÊ ESTÁ AQUI',350,1030);ctx.font='700 56px Caveat';ctx.fillText('dia 48',470,1095);ctx.restore()}
  ctx.restore();
  vignette(.5);
});

// G. dentro do vagão aceso: um celular vibrando no banco + mensagem (776.2–779.8)
scene(776.2,779.8,(t)=>{const u=t-776.2;ctx.fillStyle='#d9dbe2';ctx.fillRect(0,0,W,H);
  const close=ease(seg(u,1.4,2.2));
  // interior do vagão (banco azul)
  ctx.save();ctx.globalAlpha=1-close;ctx.fillStyle='#e9e4cf';ctx.fillRect(0,0,W,700);ctx.fillStyle='#ffe6a8';for(let i=0;i<3;i++)rr(60+i*340,140,300,330,20),ctx.fill();
  ctx.fillStyle='#2a4f8a';rr(40,1000,1000,240,30);ctx.fill();ctx.fillStyle='#1f3c6b';rr(40,780,1000,240,30);ctx.fill();
  ctx.fillStyle='#bfc4cf';ctx.fillRect(0,1240,W,680);ctx.fillStyle='#8a8e9a';for(let x=0;x<W;x+=200)ctx.fillRect(x,240,14,1000);
  const vib=Math.sin(u*60)*6*(u<1.4?1:0);ctx.save();ctx.translate(560+vib,1080);ctx.rotate(-.15);ctx.fillStyle='#111';rr(-60,-110,120,220,18);ctx.fill();ctx.fillStyle='#bfe3ff';rr(-50,-96,100,180,10);ctx.fill();ctx.restore();
  ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=5;if(u<1.4)for(let i=0;i<2;i++){ctx.beginPath();ctx.arc(560,1080,150+i*40,-.8,.8);ctx.stroke();ctx.beginPath();ctx.arc(560,1080,150+i*40,2.34,3.94);ctx.stroke()}
  ctx.restore();
  // close na tela do celular
  if(close>0){ctx.save();ctx.globalAlpha=close;ctx.fillStyle='#0c0c10';ctx.fillRect(0,0,W,H);ctx.strokeStyle='#333';ctx.lineWidth=14;ctx.fillStyle='#111';rr(150,160,780,1600,90);ctx.fill();ctx.stroke();
    ctx.fillStyle='#10151d';rr(190,230,700,1460,60);ctx.fill();ctx.fillStyle='#9aa3b8';ctx.font='700 46px Inter';ctx.textAlign='center';ctx.fillText('21:03',540,330);
    ctx.fillStyle='#2b313d';rr(230,620,620,330,34);ctx.fill();ctx.fillStyle='#9aa3b8';ctx.font='700 34px Inter';ctx.fillText('NÚMERO DESCONHECIDO',540,690);
    ctx.fillStyle='#fff';ctx.font='900 60px Inter';ctx.fillText('ENTRA NO',540,800);ctx.fillText('VAGÃO. RÁPIDO.',540,880);ctx.textAlign='left';ctx.restore()}
});
