// ===================== EP. 5 — O VAGÃO =====================
// (vencedora do EP. 4: A — entrar no vagão aceso). Faixa 800–899.
// Trem visto de LADO: a frente do trem fica à DIREITA (ele anda para a direita).
// Lá fora (nas janelas) as luzes do túnel passam para a ESQUERDA enquanto o trem anda.

// interior do vagão visto de lado. sx = deslocamento do interior (câmera acompanhando ele; + move tudo pra direita),
// tx = quanto o túnel já "passou" (as luzes de fora andam pra esquerda), lit = 0..1 (luz interna), dark = vagão apagado (só luz do chão)
function trainSide(sx,tx,lit,o){o=o||{};
  ctx.fillStyle='#cfccbd';ctx.fillRect(0,0,W,300);
  ctx.fillStyle='#e9e4cf';ctx.fillRect(0,300,W,960);
  // janelas (período 400) com o túnel lá fora
  for(let i=-2;i<5;i++){const x=((i*400+sx)%2000+2000)%2000-400+70;
    ctx.save();ctx.beginPath();rr(x,400,280,380,26);ctx.clip();ctx.fillStyle='#06070b';ctx.fillRect(x,400,280,380);
    // parede do túnel com cabos e luzes passando (sempre para a esquerda)
    ctx.strokeStyle='#1d2029';ctx.lineWidth=6;for(const y of[470,500,700]){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+280,y);ctx.stroke()}
    for(let k=-1;k<4;k++){const lx=((k*560-tx)%1680+1680)%1680-300;const gx=lx; // posição na tela (mundo de fora)
      const g=ctx.createRadialGradient(gx,600,2,gx,600,70);g.addColorStop(0,'rgba(255,214,140,.95)');g.addColorStop(1,'rgba(255,214,140,0)');ctx.fillStyle=g;ctx.fillRect(gx-80,520,160,160);
      if(o.speed>0.2){ctx.fillStyle=`rgba(255,214,140,${Math.min(.5,o.speed*.4)})`;ctx.fillRect(gx,596,Math.min(260,o.speed*180),8)}}
    if(o.station){ctx.fillStyle='#2f3a3a';ctx.fillRect(x,400,280,380);ctx.fillStyle='#c9a227';ctx.fillRect(x,560,280,46);ctx.fillStyle='#1b1b20';ctx.font='900 30px Inter';ctx.fillText('SÉ',x+20,594)}
    ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=7;rr(x,400,280,380,26);ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,.10)';ctx.beginPath();ctx.moveTo(x+20,420);ctx.lineTo(x+90,420);ctx.lineTo(x+20,520);ctx.fill()}
  // porta de passagem entre vagões (período 2000)
  for(let i=-1;i<2;i++){const x=((i*2000+sx+1000)%2000+2000)%2000-500;
    ctx.fillStyle='#8c909c';rr(x-110,330,220,1000,14);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.stroke();
    ctx.fillStyle='#1d2029';rr(x-60,420,120,260,12);ctx.fill();ctx.stroke();ctx.fillStyle='#c9ccd6';rr(x+50,780,18,90,6);ctx.fill()}
  // bancos azuis e barras (período 400)
  for(let i=-2;i<5;i++){const x=((i*400+sx)%2000+2000)%2000-400;
    ctx.fillStyle='#24467c';rr(x+40,1040,320,150,24);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.stroke();
    ctx.fillStyle='#2f5a9c';rr(x+30,1170,340,70,20);ctx.fill();ctx.stroke();
    ctx.fillStyle='#b8bcc6';ctx.fillRect(x+2,300,16,1060);ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.strokeRect(x+2,300,16,1060)}
  // teto: luminária
  ctx.fillStyle=`rgba(255,248,220,${.35+.65*lit})`;ctx.fillRect(0,230,W,40);
  // piso
  ctx.fillStyle='#8f939d';ctx.fillRect(0,1260,W,660);ctx.fillStyle='rgba(0,0,0,.12)';for(let y=1300;y<H;y+=60)ctx.fillRect(0,y,W,4);
  ctx.fillStyle='#e8c84a';ctx.fillRect(0,1255,W,10);
  // escuridão
  if(lit<1){ctx.fillStyle=`rgba(4,5,10,${(1-lit)*.9})`;ctx.fillRect(0,0,W,H)}
  // luzinhas do chão (aparecem no escuro)
  if(o.floor){for(let i=-2;i<14;i++){const x=((i*110+sx)%1760+1760)%1760-200;const on=.35+.65*Math.max(0,Math.sin(o.floor*5-i*.9));
    const g=ctx.createRadialGradient(x,1290,2,x,1290,46);g.addColorStop(0,`rgba(120,200,255,${.9*on})`);g.addColorStop(1,'rgba(120,200,255,0)');ctx.fillStyle=g;ctx.fillRect(x-50,1240,100,100);
    ctx.fillStyle=`rgba(200,235,255,${on})`;ctx.fillRect(x-8,1286,16,8)}}
}

// 1. recap (800–803.6) — já com o vagão aceso e as portas atrás (gancho no 1º quadro)
scene(800,803.6,(t)=>{const u=t-800;ctx.fillStyle='#0e0c14';ctx.fillRect(0,0,W,H);
  // fundo: vagão aceso com portas abertas, celular brilhando no banco
  ctx.save();ctx.globalAlpha=.55;ctx.fillStyle='#c8ccd6';rr(-60,1180,1200,700,30);ctx.fill();ctx.fillStyle='#ffe6a8';for(let w=0;w<3;w++)rr(40+w*360,1260,260,240,16),ctx.fill();
  ctx.fillStyle='#ffe6a8';ctx.fillRect(400,1540,280,380);ctx.fillStyle='#8a8e9a';ctx.fillRect(330,1540,90,380);ctx.fillRect(660,1540,90,380);ctx.restore();
  const g=ctx.createRadialGradient(W/2,H*.42,40,W/2,H*.42,900);g.addColorStop(0,'rgba(60,200,130,.28)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 50px "DejaVu Sans Mono", monospace';ctx.globalAlpha=easeOut(seg(u,0,.4));ctx.fillText('NO EPISÓDIO 4, VOCÊS ESCOLHERAM',W/2,520);ctx.globalAlpha=1;ctx.textAlign='left';
  const kb=easeOut(seg(u,.9,1.5));ctx.save();ctx.globalAlpha=1-kb;ctx.translate(kb*700,0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,900,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,1045);ctx.font='800 50px Inter';ctx.fillText('Seguir a luz no túnel',250,1020);ctx.restore();
  const ka=easeBack(seg(u,1.2,1.8)),sc=1+ka*.12,yy=lerp(660,760,ka);
  ctx.save();ctx.translate(W/2,yy+95);ctx.scale(sc,sc);ctx.translate(-W/2,-(yy+95));
  ctx.fillStyle='rgba(30,140,90,.96)';rr(70,yy,940,190,36);ctx.fill();ctx.strokeStyle='rgba(255,255,255,'+(.25+.25*Math.sin(u*6))+')';ctx.lineWidth=6;ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,yy+145);ctx.font='800 50px Inter';ctx.fillText('Entrar no vagão aceso',250,yy+120);
  if(u>1.6){const k=easeBack(seg(u,1.6,2));ctx.save();ctx.translate(930,yy+40);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.arc(0,0,58,0,7);ctx.fill();ctx.strokeStyle='#1c1422';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-26,2);ctx.lineTo(-6,22);ctx.lineTo(28,-20);ctx.stroke();ctx.restore()}
  ctx.restore();
  if(u>1.6){const r=rng(9);for(let i=0;i<40;i++){const a=r()*7,sp=300+r()*500,k=seg(u,1.6,3.2),x=W/2+Math.cos(a)*sp*k,y=860+Math.sin(a)*sp*k+k*k*300;ctx.fillStyle=['#ffd84a','#3ccf8e','#fff'][i%3];ctx.globalAlpha=1-k;ctx.fillRect(x,y,10,16);ctx.globalAlpha=1}}
});

// 2. dentro do vagão, de frente para a porta: as portas se fecham; ele empurra (804–809.6)
scene(804,809.6,(t)=>{const u=t-804;ctx.fillStyle='#e9e4cf';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#cfccbd';ctx.fillRect(0,0,W,260);ctx.fillStyle='rgba(255,248,220,1)';ctx.fillRect(0,200,W,40);
  ctx.fillStyle='#8f939d';ctx.fillRect(0,1500,W,420);ctx.fillStyle='#e8c84a';ctx.fillRect(0,1495,W,10);
  // vão da porta: plataforma escura lá fora
  ctx.fillStyle='#0b0c12';ctx.fillRect(290,380,500,1120);ctx.fillStyle='#2f3a3a';ctx.fillRect(290,380,500,500);ctx.fillStyle='#c9a227';ctx.fillRect(290,700,500,30);
  ctx.fillStyle='#3a3b44';ctx.fillRect(290,1200,500,300);
  // folhas da porta fechando
  const cl=easeOut(seg(u,.3,1.4)),dx=lerp(0,250,cl);
  ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillStyle='#a6aab6';
  ctx.fillRect(290-250+dx,380,250,1120);ctx.strokeRect(290-250+dx,380,250,1120);ctx.fillRect(790-dx,380,250,1120);ctx.strokeRect(790-dx,380,250,1120);
  ctx.fillStyle='rgba(20,22,30,.85)';rr(290-210+dx,480,170,420,14);ctx.fill();rr(790-dx+40,480,170,420,14);ctx.fill();
  // luz vermelha de porta trancada
  const red=u>1.3&&(Math.floor(u*4)%2==0);ctx.fillStyle=red?'#ff3b3b':'#5a1414';ctx.beginPath();ctx.arc(540,320,26,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.stroke();
  if(red){const g=ctx.createRadialGradient(540,320,10,540,320,220);g.addColorStop(0,'rgba(255,60,60,.35)');g.addColorStop(1,'rgba(255,60,60,0)');ctx.fillStyle=g;ctx.fillRect(300,100,480,440)}
  // ele de costas, de frente para a porta; empurra a partir da fala 3
  const push=u>2.7,sh=push?Math.sin(u*38)*7*(u<5.2?1:0):0;
  personFront(540+sh,1600,1.6,{back:true,up:push?.55:0});
  vignette(.45);
});

// 3. visto de lado: o tranco e o trem começa a andar (810–813)
scene(810,813,(t)=>{const u=t-810;const v=Math.max(0,u-.6);const tx=v*v*260,sp=Math.min(1.4,v*.8);
  const jolt=u>.6?Math.sin((u-.6)*9)*Math.exp(-(u-.6)*2.2):0;
  ctx.save();ctx.translate(jolt*16,0);trainSide(0,tx,1,{speed:sp});ctx.restore();
  // ele em pé, olhando para a frente do trem (direita); o tranco joga o corpo para trás (esquerda)
  person(540-jolt*30,1200,1.7,{f:1,lean:-.18*jolt,look:-.1,eye:1.25,brow:-3});
  vignette(.4);
});

// 4. de fora: o trem sai da estação e entra no túnel, cabine vazia (813.2–816.2). Câmera parada na plataforma.
scene(813.2,816.2,(t)=>{const u=t-813.2;ctx.fillStyle='#0b0c12';ctx.fillRect(0,0,W,H);
  tileWall(0,300,W,700,'#2f3a3a','#263030');ctx.fillStyle='#c9a227';ctx.fillRect(0,520,W,36);ctx.fillStyle='#1b1b20';ctx.font='900 34px Inter';ctx.fillText('ESTAÇÃO SÉ',60,550);
  // boca do túnel à direita
  ctx.fillStyle='#030305';ctx.beginPath();ctx.moveTo(760,1330);ctx.lineTo(760,760);ctx.quadraticCurveTo(920,600,1080,760);ctx.lineTo(1080,1330);ctx.closePath();ctx.fill();
  // neblina leve saindo do túnel (detalhe de ambiente)
  for(let i=0;i<5;i++){const k=((u*.12+i/5)%1);ctx.fillStyle=`rgba(180,190,210,${.07*Math.sin(k*Math.PI)})`;ctx.beginPath();ctx.ellipse(1000-k*500,1180-i*40,260,60,0,0,7);ctx.fill()}
  // trem andando para a direita (acelerando)
  const x0=-1900+u*u*60+u*80;ctx.save();ctx.beginPath();ctx.rect(0,0,840,H);ctx.clip();
  for(let c=0;c<3;c++){const x=x0+c*740,lit=(c==1),front=(c==2);ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillStyle=lit?'#c8ccd6':'#5a5e6a';
    if(front){ctx.beginPath();ctx.moveTo(x,700);ctx.lineTo(x+620,700);ctx.quadraticCurveTo(x+720,720,x+720,900);ctx.lineTo(x+720,1320);ctx.lineTo(x,1320);ctx.closePath();ctx.fill();ctx.stroke();
      ctx.fillStyle='#1a1c24';rr(x+520,780,170,200,14);ctx.fill();ctx.stroke();ctx.strokeStyle='#4a4d58';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(x+570,980);ctx.lineTo(x+570,880);ctx.lineTo(x+600,860);ctx.moveTo(x+570,930);ctx.lineTo(x+640,930);ctx.stroke();ctx.fillStyle='#e8e2c8';ctx.font='800 26px Inter';ctx.fillText('CABINE',x+555,1010)}
    else{rr(x,700,720,620,30);ctx.fill();ctx.stroke()}
    ctx.fillStyle=lit?'#ffe6a8':'#1a1c24';for(let w=0;w<(front?2:3);w++){rr(x+50+w*220,790,170,200,14);ctx.fill();ctx.stroke()}
    ctx.fillStyle='#b71c1c';ctx.fillRect(x,1030,720,26)}
  ctx.restore();
  // parede do túnel por cima (o trem entra)
  ctx.fillStyle='#14161e';ctx.fillRect(840,560,240,770);ctx.strokeStyle='#2a2d3a';ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(840,560);ctx.lineTo(840,1330);ctx.stroke();
  // plataforma
  ctx.fillStyle='#3a3b44';ctx.fillRect(0,1330,W,590);ctx.fillStyle='#e8c84a';ctx.fillRect(0,1330,W,22);
  // linhas de movimento no chão do trilho (o trem passa)
  ctx.strokeStyle='rgba(255,255,255,.08)';ctx.lineWidth=4;for(let i=0;i<6;i++){const y=1290-i*12;ctx.beginPath();ctx.moveTo(((u*700+i*170)%900),y);ctx.lineTo(((u*700+i*170)%900)+120,y);ctx.stroke()}
  vignette(.6);
});

// 5. pela janela: a luz da lanterna passa e fica para trás (816.4–819.4)
scene(816.4,819.4,(t)=>{const u=t-816.4;ctx.fillStyle='#e9e4cf';ctx.fillRect(0,0,W,H);
  ctx.save();ctx.beginPath();rr(110,380,860,1060,60);ctx.clip();ctx.fillStyle='#05060a';ctx.fillRect(110,380,860,1060);
  // parede do túnel correndo para a esquerda
  ctx.strokeStyle='#1a1d26';ctx.lineWidth=10;for(const y of[560,610,1220]){ctx.beginPath();ctx.moveTo(110,y);ctx.lineTo(970,y);ctx.stroke()}
  for(let i=0;i<8;i++){const x=((i*260-u*1400)%2080+2080)%2080-200;ctx.fillStyle='#10131a';ctx.fillRect(x,380,30,1060)}
  // neblina leve
  ctx.fillStyle='rgba(170,180,200,.05)';for(let i=0;i<4;i++){const x=((i*400-u*900)%1600+1600)%1600-300;ctx.beginPath();ctx.ellipse(x,1000,300,90,0,0,7);ctx.fill()}
  // a lanterna (luz parada no túnel) entra pela direita e sai pela esquerda
  const lx=lerp(1300,-300,seg(u,.4,2.4));const g=ctx.createRadialGradient(lx,860,4,lx,860,300);g.addColorStop(0,'rgba(255,250,220,.98)');g.addColorStop(.08,'rgba(255,240,190,.6)');g.addColorStop(1,'rgba(255,240,190,0)');ctx.fillStyle=g;ctx.fillRect(110,380,860,1060);
  ctx.fillStyle='#ffffff';ctx.fillRect(lx-150,856,300,8);
  ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=14;rr(110,380,860,1060,60);ctx.stroke();ctx.fillStyle='rgba(255,255,255,.08)';ctx.beginPath();ctx.moveTo(150,420);ctx.lineTo(340,420);ctx.lineTo(150,700);ctx.fill();
  vignette(.5);
});

// 6. o celular vibra no banco + a mensagem (819.6–825)
scene(819.6,825,(t)=>{const u=t-819.6;const close=ease(seg(u,1.6,2.4));
  ctx.save();trainSide(-120,u*900,1,{speed:1.2});
  // celular no banco (banco em x≈280–600)
  const vib=Math.sin(u*60)*6*(u<1.6?1:0);ctx.save();ctx.translate(460+vib,1170);ctx.rotate(-.12);ctx.fillStyle='#111';rr(-60,-30,120,60,14);ctx.fill();ctx.fillStyle='#bfe3ff';rr(-50,-22,100,44,8);ctx.fill();ctx.restore();
  ctx.strokeStyle='rgba(0,0,0,.35)';ctx.lineWidth=6;if(u<1.6)for(let i=0;i<2;i++){ctx.beginPath();ctx.arc(460,1170,90+i*40,-.8,.8);ctx.stroke();ctx.beginPath();ctx.arc(460,1170,90+i*40,2.34,3.94);ctx.stroke()}
  // ele, de lado, olhando o banco (para a esquerda)
  person(820,1200,1.7,{f:-1,look:.25,eye:1.2,brow:-2});
  ctx.restore();
  if(close>0){ctx.save();ctx.globalAlpha=close;ctx.fillStyle='#0c0c10';ctx.fillRect(0,0,W,H);ctx.strokeStyle='#333';ctx.lineWidth=14;ctx.fillStyle='#111';rr(150,160,780,1600,90);ctx.fill();ctx.stroke();
    ctx.fillStyle='#10151d';rr(190,230,700,1460,60);ctx.fill();ctx.fillStyle='#9aa3b8';ctx.font='700 46px Inter';ctx.textAlign='center';ctx.fillText('21:05',540,330);
    ctx.fillStyle='#2b313d';rr(230,560,620,460,34);ctx.fill();ctx.fillStyle='#9aa3b8';ctx.font='700 34px Inter';ctx.fillText('NÚMERO DESCONHECIDO',540,630);
    const k=seg(u,2.4,3.4);ctx.globalAlpha=close*k;ctx.fillStyle='#fff';ctx.font='900 54px Inter';ctx.fillText('NÃO PRECISA',540,740);ctx.fillText('TER MEDO.',540,810);
    ctx.globalAlpha=close*seg(u,3.4,4.2);ctx.fillStyle='#ffd84a';ctx.fillText('VEM PRO',540,910);ctx.fillText('ÚLTIMO VAGÃO.',540,980);ctx.textAlign='left';ctx.restore()}
});

// 7. ele atravessa o trem, vagão por vagão, para o fundo (esquerda) (825.2–831)
scene(825.2,831,(t)=>{const u=t-825.2;const walk=u*380; // o interior passa para a direita enquanto ele anda para a esquerda
  trainSide(walk,u*900+walk*.0,1,{speed:1.2});
  const ph=u*9.5;person(540,1200,1.7,{f:-1,walk:ph,look:.05});
  vignette(.4);
});

// 8. o último vagão: escuro, só as luzinhas do chão (831.2–834)
scene(831.2,834,(t)=>{const u=t-831.2;const walk=u*360;
  trainSide(walk+600,u*900,0,{speed:1.2,floor:u});
  person(540,1200,1.7,{f:-1,walk:u*6,look:.2});
  ctx.fillStyle='rgba(4,5,12,.55)';ctx.fillRect(0,0,W,1150);
  vignette(.7);
});

// 9. o tênis vermelho pequeno no chão (834.2–839.8). Câmera de cima.
scene(834.2,839.8,(t)=>{const u=t-834.2;ctx.fillStyle='#3b3e47';ctx.fillRect(0,0,W,H);
  const z=lerp(.9,1.35,ease(seg(u,0,5.6)));ctx.save();ctx.translate(W/2,H*.52);ctx.scale(z,z);ctx.translate(-W/2,-H*.52);
  ctx.fillStyle='rgba(0,0,0,.18)';for(let x=0;x<W;x+=54)ctx.fillRect(x,0,6,H);
  // luzinhas do chão (azuis) dos dois lados
  for(let i=0;i<8;i++){const y=120+i*240,on=.4+.6*Math.max(0,Math.sin(u*5-i));for(const x of[70,1010]){const g=ctx.createRadialGradient(x,y,2,x,y,90);g.addColorStop(0,`rgba(120,200,255,${.8*on})`);g.addColorStop(1,'rgba(120,200,255,0)');ctx.fillStyle=g;ctx.fillRect(x-90,y-90,180,180)}}
  // tênis infantil vermelho, visto de cima
  ctx.save();ctx.translate(540,980);ctx.rotate(-.35);ctx.strokeStyle=OUT;ctx.lineWidth=8;
  ctx.fillStyle='#f2efe9';ctx.beginPath();ctx.ellipse(0,0,130,280,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle='#d63a3a';ctx.beginPath();ctx.ellipse(0,-10,112,250,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle='#2a1a1a';ctx.beginPath();ctx.ellipse(0,90,64,120,0,0,7);ctx.fill();
  ctx.fillStyle='#f2efe9';rr(-60,-200,120,40,14);ctx.fill();ctx.stroke();
  // ilhoses e cadarço desamarrado
  ctx.fillStyle='#fff';for(let i=0;i<4;i++){ctx.beginPath();ctx.arc(-40,-120+i*40,7,0,7);ctx.arc(40,-120+i*40,7,0,7);ctx.fill()}
  ctx.strokeStyle='#fff';ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();for(let i=0;i<3;i++){ctx.moveTo(-40,-120+i*40);ctx.lineTo(40,-80+i*40)}ctx.stroke();
  ctx.beginPath();ctx.moveTo(-40,0);ctx.bezierCurveTo(-120,40,-60,140,-180,200);ctx.moveTo(40,0);ctx.bezierCurveTo(140,20,120,160,220,170);ctx.stroke();
  // papel dobrado aparecendo dentro do tênis
  ctx.fillStyle='#f6f1df';ctx.save();ctx.translate(0,80);ctx.rotate(.2);rr(-40,-40,80,90,6);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.stroke();ctx.restore();
  ctx.restore();
  ctx.restore();
  // tamanho: a mão dele (grande) chega perto na fala 13 para comparar
  if(u>3){const k=easeOut(seg(u,3,4.4));ctx.save();ctx.translate(lerp(1300,860,k),1500);ctx.rotate(-.5);ctx.fillStyle=P.skin;ctx.strokeStyle=OUT;ctx.lineWidth=7;rr(-110,-150,220,300,90);ctx.fill();ctx.stroke();ctx.fillStyle=P.hood;ctx.fillRect(-120,140,240,300);ctx.strokeRect(-120,140,240,300);ctx.restore()}
  vignette(.6);
});

// 10. o papel: tira do tênis, desdobra e é um desenho (840–850)
scene(840,850,(t)=>{const u=t-840;ctx.fillStyle='#14151c';ctx.fillRect(0,0,W,H);
  const g0=ctx.createRadialGradient(W/2,H*.48,60,W/2,H*.48,900);g0.addColorStop(0,'rgba(140,200,255,.18)');g0.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g0;ctx.fillRect(0,0,W,H);
  const op=easeOut(seg(u,1.6,3.4)); // 0 = dobrado, 1 = aberto
  const z=lerp(1,1.08,seg(u,4,10));ctx.save();ctx.translate(W/2,H*.46);ctx.scale(z,z);ctx.rotate(lerp(.15,-.03,op));
  const pw=lerp(260,880,op),ph=lerp(300,1120,op);
  ctx.fillStyle='rgba(0,0,0,.4)';ctx.fillRect(-pw/2+12,-ph/2+14,pw,ph);
  ctx.fillStyle='#f6f1df';ctx.fillRect(-pw/2,-ph/2,pw,ph);ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.strokeRect(-pw/2,-ph/2,pw,ph);
  ctx.strokeStyle='rgba(0,0,0,.12)';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,-ph/2);ctx.lineTo(0,ph/2);ctx.moveTo(-pw/2,0);ctx.lineTo(pw/2,0);ctx.stroke();
  if(op>.95){const dk=seg(u,3.6,5.6);ctx.lineCap='round';ctx.lineJoin='round';
    // porta (giz de cera)
    ctx.globalAlpha=Math.min(1,dk*2);ctx.fillStyle='#8a5a2e';ctx.fillRect(-120,-420,240,380);ctx.strokeStyle='#5a3a1e';ctx.lineWidth=8;ctx.strokeRect(-120,-420,240,380);ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.arc(80,-230,14,0,7);ctx.fill();
    // chão
    ctx.strokeStyle='#3c9a4a';ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(-400,170);ctx.lineTo(400,170);ctx.stroke();
    // três bonequinhos de mãos dadas
    ctx.globalAlpha=seg(u,4.4,6);
    const fig=(x,hgt,col,cam)=>{ctx.strokeStyle='#26262e';ctx.lineWidth=9;ctx.beginPath();ctx.arc(x,170-hgt-34,34,0,7);ctx.stroke();
      ctx.strokeStyle=col;ctx.lineWidth=12;ctx.beginPath();ctx.moveTo(x,170-hgt);ctx.lineTo(x,170-hgt*.45);ctx.stroke();
      ctx.strokeStyle='#26262e';ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(x,170-hgt*.45);ctx.lineTo(x-28,170);ctx.moveTo(x,170-hgt*.45);ctx.lineTo(x+28,170);ctx.stroke();
      ctx.beginPath();ctx.arc(x-12,170-hgt-40,4,0,7);ctx.arc(x+12,170-hgt-40,4,0,7);ctx.fill();ctx.beginPath();ctx.arc(x,170-hgt-30,14,.3,2.8);ctx.stroke();
      if(cam){ctx.fillStyle='#26262e';ctx.fillRect(x-26,170-hgt*.86,52,34);ctx.fillStyle='#9ad';ctx.beginPath();ctx.arc(x,170-hgt*.86+17,10,0,7);ctx.fill()}};
    fig(-250,200,'#3c6fd1',true);fig(0,160,'#e2683c',false);fig(220,100,'#d63a3a',false);
    ctx.strokeStyle='#26262e';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-250,170-200*.8);ctx.lineTo(0,170-160*.8);ctx.lineTo(220,170-100*.75);ctx.stroke();
    // sol de criança no canto
    ctx.strokeStyle='#f0b429';ctx.fillStyle='#f0b429';ctx.beginPath();ctx.arc(300,-400,46,0,7);ctx.fill();ctx.lineWidth=6;for(let a=0;a<8;a++){ctx.beginPath();ctx.moveTo(300+Math.cos(a*.785)*60,-400+Math.sin(a*.785)*60);ctx.lineTo(300+Math.cos(a*.785)*86,-400+Math.sin(a*.785)*86);ctx.stroke()}
    ctx.globalAlpha=1;
    // texto em letra de criança, escrito aos poucos (falas 17–18)
    const tx=seg(u,7,9.6);if(tx>0){ctx.fillStyle='#c62828';ctx.font='700 64px Caveat';ctx.textAlign='center';
      const s='eu, você e o moço da câmera';ctx.fillText(s.slice(0,Math.ceil(s.length*tx)),0,330);ctx.textAlign='left'}
    if(u>6.2&&u<9.6){ctx.strokeStyle=`rgba(198,40,40,${.6*Math.sin((u-6.2)*3)**2})`;ctx.lineWidth=6;ctx.strokeRect(-400,250,800,120)}}
  ctx.restore();
  // a mão dele segurando o papel na parte de baixo
  ctx.fillStyle=P.skin;ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.save();ctx.translate(W/2+lerp(60,300,op),H*.46+lerp(170,600,op));rr(-70,-40,140,170,60);ctx.fill();ctx.stroke();ctx.fillStyle=P.hood;ctx.fillRect(-90,110,180,400);ctx.strokeRect(-90,110,180,400);ctx.restore();
  vignette(.55);
});

// 11. o rosto: "o moço da câmera?" (850.2–853)
scene(850.2,853,(t)=>{const u=t-850.2;ctx.fillStyle='#12141c';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.5,100,W/2,H*.5,1000);g.addColorStop(0,'rgba(140,200,255,.22)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  // lembrança: as polaroides dele, apagadas, atrás
  ctx.save();ctx.globalAlpha=.22;for(let i=0;i<3;i++){ctx.save();ctx.translate(200+i*340,420+(i%2)*80);ctx.rotate(-.2+i*.2);ctx.fillStyle='#f3efe6';ctx.fillRect(-110,-130,220,260);ctx.fillStyle='#333';ctx.fillRect(-92,-112,184,184);ctx.restore()}ctx.restore();
  face(W/2,H*.55,1.15+u*.05,{open:1.25,eye:1.3,brow:-.6,mouthO:.35,pupil:.6,px:Math.sin(u*2)*14});
});

// 12. o verso do papel: DIA 60 + quanto falta (853.2–858.8)
scene(853.2,858.8,(t)=>{const u=t-853.2;ctx.fillStyle='#14151c';ctx.fillRect(0,0,W,H);
  const fl=seg(u,0,1),sx=Math.cos(fl*Math.PI);ctx.save();ctx.translate(W/2,H*.33);ctx.scale(Math.abs(sx)*.62+.001,.62);
  ctx.fillStyle='#f6f1df';ctx.fillRect(-440,-560,880,1120);ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.strokeRect(-440,-560,880,1120);
  if(sx<0){ctx.fillStyle='#c62828';ctx.font='700 200px Caveat';ctx.textAlign='center';ctx.fillText('dia 60',0,60);ctx.textAlign='left';
    const k=seg(u,1.2,2.2);ctx.strokeStyle='#c62828';ctx.lineWidth=12;ctx.beginPath();for(let a=0;a<=k*6.6;a+=.05){const x=Math.cos(a)*(330+10*Math.sin(a*3)),y=-10+Math.sin(a)*170;a?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke()}
  else{ctx.fillStyle='rgba(0,0,0,.12)';ctx.fillRect(-300,-300,600,500)}
  ctx.restore();
  // a contagem: do dia 48 (hoje) ao dia 60 (fala 21)
  const k2=seg(u,2.8,3.4);if(k2>0){ctx.save();ctx.globalAlpha=k2;ctx.fillStyle='#f4e2b0';ctx.font='700 46px "DejaVu Sans Mono", monospace';ctx.textAlign='center';ctx.fillText('HOJE: DIA 48',W/2,1080);
    for(let i=0;i<13;i++){const d=48+i,x=90+(i%7)*150,y=1120+Math.floor(i/7)*150,on=seg(u,3.2+i*.14,3.4+i*.14);
      ctx.globalAlpha=k2*(.3+.7*on);ctx.fillStyle=d==48?'#3ccf8e':(d==60?'#c62828':'#2b313d');rr(x-60,y,120,130,16);ctx.fill();ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText(String(d),x,y+85)}
    ctx.globalAlpha=k2*seg(u,5,5.5);ctx.fillStyle='#ffd84a';ctx.font='900 64px Inter';ctx.fillText('FALTAM 12 DIAS',W/2,1490);ctx.textAlign='left';ctx.restore()}
  vignette(.45);
});

// 13. a freada e as luzes se apagam (859–864.6). Visto de lado, ele de frente para o fundo (esquerda).
scene(859,864.6,(t)=>{const u=t-859;
  // o trem desacelera até parar: as luzes de fora passam cada vez mais devagar
  const T=2.6,v=u<T?1-u/T:0,tx=u<T?(u-u*u/(2*T))*900:(T/2)*900;
  const jolt=u>.2?Math.sin((u-.2)*7)*Math.exp(-(u-.2)*1.6):0;
  ctx.save();ctx.translate(-jolt*20,0);trainSide(1400,tx,1,{speed:v*1.2});ctx.restore();
  // a freada empurra o corpo para a frente do trem (direita); ele está virado para a esquerda e se segura
  person(560+Math.max(0,jolt)*40,1200,1.7,{f:-1,lean:-.22*Math.max(0,jolt),eye:1.3,brow:-3,mouthO:.4,look:-.1});
  // apagão (fala 23)
  const off=u>2.8?(u<3.3?(Math.sin(u*60)>0?.95:.3):.96):0;if(off){ctx.fillStyle=`rgba(2,2,6,${off})`;ctx.fillRect(0,0,W,H)}
  vignette(.5);
});

// 14. no escuro: o alto-falante do trem chia e fala (864.8–870.4)
scene(864.8,870.4,(t)=>{const u=t-864.8;ctx.fillStyle='#050608';ctx.fillRect(0,0,W,H);
  // teto e alto-falante redondo, iluminados de leve pela luz azul do celular de baixo
  const g=ctx.createRadialGradient(W/2,1500,40,W/2,1100,1100);g.addColorStop(0,'rgba(120,170,255,.22)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#2a2c34';ctx.fillRect(0,0,W,560);ctx.fillStyle='#1d1f26';ctx.beginPath();ctx.arc(W/2,800,330,0,7);ctx.fill();ctx.strokeStyle='#4a4d58';ctx.lineWidth=14;ctx.stroke();
  ctx.fillStyle='#0b0c10';for(let r=40;r<300;r+=44)for(let a=0;a<6.28;a+=48/r){ctx.beginPath();ctx.arc(W/2+Math.cos(a)*r,800+Math.sin(a)*r,9,0,7);ctx.fill()}
  ctx.fillStyle='#4a4d58';ctx.font='800 34px Inter';ctx.textAlign='center';ctx.fillText('AVISO SONORO',W/2,1210);ctx.textAlign='left';
  // chiado (fala 24) e a voz (fala 25): ondas saindo
  const talk=u>2.4&&u<5.4,chi=u>.3;
  if(chi){ctx.strokeStyle=`rgba(255,255,255,${talk?.5:.2})`;ctx.lineWidth=talk?8:4;for(let i=0;i<4;i++){const r0=360+((u*(talk?160:90)+i*60)%240);ctx.beginPath();ctx.arc(W/2,800,r0,.3,1.2);ctx.stroke();ctx.beginPath();ctx.arc(W/2,800,r0,1.9,2.8);ctx.stroke()}}
  const r=rng(Math.floor(u*24));ctx.fillStyle='rgba(255,255,255,.05)';for(let i=0;i<260;i++)ctx.fillRect(r()*W,r()*H,4,2);
  vignette(.6);
});

// 15. no escuro: o rosto iluminado pelo celular — "a mesma voz do rádio" (870.6–873.4)
scene(870.6,873.4,(t)=>{const u=t-870.6;ctx.fillStyle='#030406';ctx.fillRect(0,0,W,H);
  face(W/2,H*.52,1.2,{open:1.2,eye:1.25,brow:-.9,mouthO:.2,px:-16+Math.sin(u*2.4)*10});
  const g=ctx.createRadialGradient(W/2,H*.62,120,W/2,H*.55,900);g.addColorStop(0,'rgba(80,140,255,.12)');g.addColorStop(.45,'rgba(0,0,8,.55)');g.addColorStop(1,'rgba(0,0,8,.97)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  // lembrança do rádio CH 13 no canto
  ctx.save();ctx.globalAlpha=.35*seg(u,.8,1.6);ctx.translate(200,330);ctx.rotate(.25);ctx.fillStyle='#1d1f26';rr(-70,-140,140,280,24);ctx.fill();ctx.strokeStyle='#555';ctx.lineWidth=4;ctx.stroke();ctx.fillStyle='#6fbf73';rr(-50,-20,100,50,8);ctx.fill();ctx.fillStyle='#1d3a1e';ctx.font='700 22px "DejaVu Sans Mono", monospace';ctx.fillText('CH 13',-38,12);ctx.restore();
});

// 16. as luzes voltam; trem parado; ele vai até a janela e lê a placa: ESTAÇÃO SÉ (873.6–879.2)
scene(873.6,879.2,(t)=>{const u=t-873.6;
  const lit=u<.9?((Math.sin(u*50)>0)?1:.2):1;
  const z=lerp(1,1.8,ease(seg(u,2.6,5.4)));ctx.save();ctx.translate(W/2,800);ctx.scale(z,z);ctx.translate(-W/2,-820);
  ctx.fillStyle='#e9e4cf';ctx.fillRect(0,0,W,H);ctx.fillStyle='#cfccbd';ctx.fillRect(0,0,W,240);ctx.fillStyle='rgba(255,248,220,1)';ctx.fillRect(0,190,W,40);
  // janela grande com a plataforma lá fora (parada)
  ctx.save();ctx.beginPath();rr(140,420,800,800,50);ctx.clip();ctx.fillStyle='#0b0c12';ctx.fillRect(140,420,800,800);tileWall(140,420,800,640,'#2f3a3a','#263030');
  ctx.fillStyle='#c9a227';ctx.fillRect(140,740,800,110);ctx.fillStyle='#1b1b20';ctx.font='900 92px Inter';ctx.textAlign='center';ctx.fillText('ESTAÇÃO SÉ',540,825);ctx.textAlign='left';
  ctx.fillStyle='#3a3b44';ctx.fillRect(140,1060,800,160);ctx.fillStyle='#e8c84a';ctx.fillRect(140,1060,800,14);ctx.restore();
  ctx.strokeStyle=OUT;ctx.lineWidth=14;rr(140,420,800,800,50);ctx.stroke();
  ctx.fillStyle='#8f939d';ctx.fillRect(0,1480,W,440);
  // ele de costas, chegando na janela (fica dentro do zoom e sai por baixo do quadro)
  {const k=easeOut(seg(u,.8,2.6));personFront(540,lerp(1900,1700,k),lerp(1.6,1.35,k),{back:true,walk:(u>.8&&u<2.6)?u*8:null})}
  ctx.restore();
  if(lit<1){ctx.fillStyle='rgba(2,2,6,.85)';ctx.fillRect(0,0,W,H)}
  vignette(.45);
});

// 17. o mapa: o trem deu a volta e voltou para a Sé (879.4–882.6)
scene(879.4,882.6,(t)=>{const u=t-879.4;ctx.fillStyle='#1a1c22';ctx.fillRect(0,0,W,H);
  ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillStyle='#f1efe8';rr(90,300,900,1200,20);ctx.fill();ctx.stroke();
  ctx.fillStyle='#1b1b20';ctx.font='900 48px Inter';ctx.fillText('MAPA DA REDE',140,380);
  const L=[['#1d4ed8',[[150,600],[400,620],[560,880],[760,1100],[940,1180]]],['#16a34a',[[200,1300],[420,1100],[560,880],[700,700],[900,520]]],['#dc2626',[[140,900],[340,880],[560,880],[780,860],[950,900]]],['#eab308',[[560,450],[560,880],[520,1400]]]];
  for(const [c,pts] of L){ctx.strokeStyle=c;ctx.lineWidth=18;ctx.lineJoin='round';ctx.beginPath();pts.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.stroke();
    for(const [x,y] of pts){ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x,y,14,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.stroke()}}
  ctx.fillStyle='#1b1b20';ctx.font='800 34px Inter';ctx.fillText('SÉ',580,860);
  // o caminho do trem: sai da Sé, dá uma volta inteira e volta para a Sé
  const k=seg(u,.3,2.6);const loop=a=>[560+Math.sin(a)*260,880-(1-Math.cos(a))*190];
  ctx.strokeStyle='#ff3b3b';ctx.lineWidth=12;ctx.setLineDash([26,18]);ctx.beginPath();for(let a=0;a<=k*6.283;a+=.04){const [x,y]=loop(a);a?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke();ctx.setLineDash([]);
  {const [x,y]=loop(k*6.283);ctx.fillStyle='#ff3b3b';ctx.beginPath();ctx.arc(x,y,24,0,7);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.stroke()}
  if(u>2.6){const p=easeBack(seg(u,2.6,3));ctx.save();ctx.translate(560,880);ctx.scale(p,p);ctx.strokeStyle='#c62828';ctx.lineWidth=10;ctx.beginPath();ctx.arc(0,0,70,0,7);ctx.stroke();ctx.restore()}
  vignette(.5);
});

// 18. as portas se abrem; lá no fim da plataforma a sombra pequena sobe a escada (882.8–888.4)
scene(882.8,888.4,(t)=>{const u=t-882.8;ctx.fillStyle='#e9e4cf';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#cfccbd';ctx.fillRect(0,0,W,260);ctx.fillStyle='rgba(255,248,220,1)';ctx.fillRect(0,200,W,40);
  ctx.fillStyle='#8f939d';ctx.fillRect(0,1500,W,420);ctx.fillStyle='#e8c84a';ctx.fillRect(0,1495,W,10);
  // lá fora: plataforma vista pela porta, em perspectiva, com a escada no fundo à direita
  ctx.save();ctx.beginPath();ctx.rect(290,380,500,1120);ctx.clip();
  ctx.fillStyle='#202631';ctx.fillRect(290,380,500,1120);tileWall(290,380,500,560,'#2f3a3a','#263030');
  ctx.fillStyle='#3a3b44';ctx.beginPath();ctx.moveTo(290,940);ctx.lineTo(790,940);ctx.lineTo(790,1500);ctx.lineTo(290,1500);ctx.fill();ctx.fillStyle='#e8c84a';ctx.fillRect(290,1440,500,14);
  // escada subindo (direita), degraus para cima e para a direita
  ctx.fillStyle='#4a4c58';for(let i=0;i<9;i++){ctx.fillRect(620+i*20,940-i*30,200,30)}ctx.strokeStyle='#6a6d80';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(610,880);ctx.lineTo(800,610);ctx.stroke();
  // a sombra pequena corre para a direita e sobe a escada
  if(u>1.6&&u<5){const k=seg(u,1.8,4.8);const x=lerp(380,780,k),y=k<.55?955:lerp(955,700,(k-.55)/.45);shadowRun(x,y,.22,u*16,1-seg(u,4.4,4.8),0)}
  ctx.restore();
  // folhas da porta abrindo
  const op=easeOut(seg(u,.2,1.2)),dx=lerp(250,0,op);
  ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillStyle='#a6aab6';
  ctx.fillRect(290-250+dx,380,250,1120);ctx.strokeRect(290-250+dx,380,250,1120);ctx.fillRect(790-dx,380,250,1120);ctx.strokeRect(790-dx,380,250,1120);
  ctx.fillStyle='rgba(20,22,30,.85)';rr(290-210+dx,480,170,420,14);ctx.fill();rr(790-dx+40,480,170,420,14);ctx.fill();
  ctx.fillStyle=op<1?'#ff9a3b':'#3ccf8e';ctx.beginPath();ctx.arc(540,320,26,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.stroke();
  // ele de costas, olhando pela porta
  personFront(250,1720,1.45,{back:true});
  vignette(.45);
});

// 19. a lanterna no chão, acesa, apontando para a SAÍDA DE EMERGÊNCIA (888.6–892)
scene(888.6,892,(t)=>{const u=t-888.6;const pan=lerp(0,-560,ease(seg(u,1.4,3.2)));ctx.fillStyle='#0b0c12';ctx.fillRect(0,0,W,H);
  ctx.save();ctx.translate(pan,0);
  tileWall(-200,200,2000,1100,'#2a3333','#222b2b');ctx.fillStyle='#3a3b44';ctx.fillRect(-200,1300,2000,700);ctx.fillStyle='#e8c84a';ctx.fillRect(-200,1880,2000,20);
  // porta de emergência (à direita)
  ctx.fillStyle='#5b6170';ctx.fillRect(1060,620,420,680);ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.strokeRect(1060,620,420,680);ctx.fillStyle='#c9ccd6';ctx.fillRect(1100,940,340,26);ctx.strokeRect(1100,940,340,26);
  ctx.fillStyle='#17a34a';rr(1080,470,380,110,12);ctx.fill();ctx.stroke();ctx.fillStyle='#fff';ctx.font='900 40px Inter';ctx.textAlign='center';ctx.fillText('SAÍDA DE',1270,518);ctx.fillText('EMERGÊNCIA',1270,563);ctx.textAlign='left';
  // feixe da lanterna, do chão até a porta
  ctx.fillStyle='rgba(255,240,190,.20)';ctx.beginPath();ctx.moveTo(470,1500);ctx.lineTo(1500,700);ctx.lineTo(1500,1300);ctx.closePath();ctx.fill();
  const gb=ctx.createRadialGradient(1270,960,20,1270,960,380);gb.addColorStop(0,'rgba(255,240,190,.35)');gb.addColorStop(1,'rgba(255,240,190,0)');ctx.fillStyle=gb;ctx.fillRect(900,600,760,760);
  // poeira dourada flutuando no feixe (detalhe de ambiente)
  {const r=rng(31);for(let i=0;i<40;i++){const k=r(),x=lerp(520,1450,k),y=lerp(1480,1000,k)+(r()-.5)*lerp(40,500,k)+Math.sin(u*1.5+i)*14;ctx.fillStyle=`rgba(255,236,180,${.35+.35*Math.sin(u*3+i)})`;ctx.beginPath();ctx.arc(x,y,3+r()*3,0,7);ctx.fill()}}
  // a lanterna caída no chão
  ctx.save();ctx.translate(420,1530);ctx.rotate(-.65);ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillStyle='#2b2e38';rr(-150,-40,220,80,20);ctx.fill();ctx.stroke();ctx.fillStyle='#3d414e';rr(60,-60,80,120,14);ctx.fill();ctx.stroke();
  ctx.fillStyle='#fff7d6';rr(132,-48,16,96,6);ctx.fill();ctx.restore();
  const gl=ctx.createRadialGradient(520,1460,4,520,1460,140);gl.addColorStop(0,'rgba(255,250,220,.95)');gl.addColorStop(1,'rgba(255,250,220,0)');ctx.fillStyle=gl;ctx.fillRect(380,1320,280,280);
  ctx.restore();
  vignette(.6);
});

// 20. escolha (892.2–896.4)
scene(892.2,896.4,(t)=>{const u=t-892.2;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  // fundo: à esquerda a escada por onde a criança subiu; à direita a lanterna e a saída de emergência
  ctx.save();ctx.globalAlpha=.55;
  ctx.fillStyle='#4a4c58';for(let i=0;i<9;i++)ctx.fillRect(40+i*34,1560-i*44,260,44);
  ctx.fillStyle='rgba(20,18,16,.9)';for(let i=0;i<4;i++){ctx.beginPath();ctx.ellipse(120+i*70,1530-i*90,12,20,0,0,7);ctx.fill()}
  ctx.fillStyle='#5b6170';ctx.fillRect(700,1080,300,480);ctx.fillStyle='#17a34a';ctx.fillRect(700,1000,300,70);ctx.fillStyle='#fff';ctx.font='900 30px Inter';ctx.fillText('EMERGÊNCIA',740,1047);
  ctx.fillStyle='rgba(255,240,190,.35)';ctx.beginPath();ctx.moveTo(640,1620);ctx.lineTo(1000,1150);ctx.lineTo(1000,1500);ctx.closePath();ctx.fill();
  ctx.restore();
  ctx.fillStyle='rgba(10,8,14,.40)';ctx.fillRect(0,0,W,H);
  personTurn(540,1700,1.0,{eye:1.2,brow:-.5,lid:0},Math.sin(u*1.4)*.9);
  const ca=easeOut(seg(u,1,1.6)),cb=easeOut(seg(u,1.4,2));
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,120,80,.92)';rr(70,420,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,565);ctx.font='800 48px Inter';ctx.fillText('Seguir a criança na escada',250,540);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,650,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,795);ctx.font='800 48px Inter';ctx.fillText('Abrir a saída de emergência',250,770);ctx.restore();
});

// 21. cartela final (896.6–899.8)
scene(896.6,899.8,(t)=>{const u=t-896.6;ctx.fillStyle='#050507';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.45,50,W/2,H*.45,900);g.addColorStop(0,'rgba(200,30,30,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.4);ctx.scale(k,k);ctx.textAlign='center';
  const gl=u<.5||(u%1.3<.08)?1:0;ctx.font='900 118px Inter';
  if(gl){ctx.fillStyle='rgba(255,0,60,.7)';ctx.fillText('E SE SOBRASSE',-8,0);ctx.fillStyle='rgba(0,220,255,.7)';ctx.fillText('E SE SOBRASSE',8,0)}
  ctx.fillStyle='#fff';ctx.fillText('E SE SOBRASSE',0,0);ctx.font='900 220px Inter';ctx.fillStyle='#ff3b3b';ctx.fillText('SÓ UM?',0,220);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 6 · EM BREVE',W/2,H*.4+420);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.4+520);ctx.restore()});
