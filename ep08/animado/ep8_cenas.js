// ===================== EP. 8 — A CRIANÇA =====================
// (vencedora do EP. 7: A — abrir o armário). Faixa 1100–1199.
// Um mistério só: quem estava no armário? (resposta: a criança de capa amarela, que se escondia de medo)
// Elementos novos (2): a criança vista de perto (capa amarela, tênis vermelhos) e o desenho dela — os três de mãos dadas na frente de uma porta com "60".
// Retomados: capa amarela (EP6/7), tênis vermelhos = as pegadas (EP6/7), a foto "volta no dia 60" (EP7), o 13º andar com flash (EP6/7), o moço da câmera/fotógrafo (EP4+).
// Ambiente (não falado, 1–2): gotas de chuva escorrendo no vidro da janela (a chuva já parou), o gato laranja de coleira azul dormindo no muro lá fora pela janela.

// ---- a criança de capa amarela (fofa, nunca assustadora) ----
// o: {u, hide(0..1 mãos no rosto), tremble, peek(0..1 espiando pelos dedos), hold(segurando desenho), point(aponta pra janela), reach(estende a mão)}
function e8Kid(x,y,s,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';
  const OL=(w)=>{ctx.strokeStyle=OUT;ctx.lineWidth=w||10;ctx.stroke()};
  const tr=o.tremble?Math.sin((o.u||0)*34)*4:0;ctx.translate(tr,0);
  // sombra
  ctx.fillStyle='rgba(0,0,0,.3)';ctx.beginPath();ctx.ellipse(0,8,118,24,0,0,7);ctx.fill();
  // pernas curtas + tênis vermelhos (os mesmos das pegadas)
  for(const sx of[-1,1]){ctx.fillStyle='#c9a152';ctx.beginPath();rr(sx*46-18,-150,36,116,10);ctx.fill();OL(8);
    ctx.fillStyle='#d23b2e';ctx.beginPath();ctx.ellipse(sx*46+(sx>0?8:-8),-16,54,34,0,0,7);ctx.fill();OL(9);
    ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(sx*46-28,-24);ctx.lineTo(sx*46+30,-24);ctx.stroke();}
  // capa de chuva amarela (corpo arredondado)
  ctx.fillStyle='#f2c230';ctx.beginPath();ctx.moveTo(-152,-150);ctx.quadraticCurveTo(-186,-430,0,-472);ctx.quadraticCurveTo(186,-430,152,-150);ctx.quadraticCurveTo(0,-118,-152,-150);ctx.closePath();ctx.fill();OL(11);
  // sombra lateral + brilho
  ctx.save();ctx.beginPath();ctx.moveTo(-152,-150);ctx.quadraticCurveTo(-186,-430,0,-472);ctx.quadraticCurveTo(186,-430,152,-150);ctx.quadraticCurveTo(0,-118,-152,-150);ctx.closePath();ctx.clip();
    ctx.fillStyle='rgba(180,120,10,.3)';ctx.fillRect(40,-472,160,360);ctx.fillStyle='rgba(255,255,255,.18)';ctx.fillRect(-150,-472,70,360);ctx.restore();
  // botões
  ctx.fillStyle='#b98e0e';for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(0,-205-i*66,10,0,7);ctx.fill();}
  // braços
  if(o.hold||o.reach){ // estende/segura um papel à frente
    for(const sx of[-1,1]){ctx.fillStyle='#f2c230';ctx.beginPath();ctx.moveTo(sx*140,-300);ctx.quadraticCurveTo(sx*120,-210,sx*44,-236);ctx.lineTo(sx*44,-304);ctx.closePath();ctx.fill();OL(9);
      ctx.fillStyle='#f3d9c0';ctx.beginPath();ctx.ellipse(sx*48,-232,24,22,0,0,7);ctx.fill();OL(7);}
  } else if(o.point){ // um braço apontando pra janela (direita)
    ctx.fillStyle='#f2c230';ctx.beginPath();ctx.moveTo(140,-300);ctx.quadraticCurveTo(210,-330,276,-392);ctx.lineTo(250,-430);ctx.quadraticCurveTo(170,-380,120,-360);ctx.closePath();ctx.fill();OL(9);
    ctx.fillStyle='#f3d9c0';ctx.beginPath();ctx.ellipse(286,-402,26,22,0,0,7);ctx.fill();OL(7);
    ctx.fillStyle='#f2c230';ctx.beginPath();ctx.moveTo(-140,-300);ctx.quadraticCurveTo(-120,-220,-44,-240);ctx.lineTo(-44,-304);ctx.closePath();ctx.fill();OL(9);
  } else { // braços ao lado
    for(const sx of[-1,1]){ctx.fillStyle='#f2c230';ctx.beginPath();ctx.moveTo(sx*140,-300);ctx.quadraticCurveTo(sx*150,-220,sx*118,-150);ctx.lineTo(sx*96,-170);ctx.quadraticCurveTo(sx*120,-240,sx*96,-300);ctx.closePath();ctx.fill();OL(9);}
  }
  // capuz (atrás da cabeça)
  ctx.fillStyle='#e0ad1e';ctx.beginPath();ctx.arc(0,-520,172,Math.PI*0.86,Math.PI*2.14);ctx.fill();OL(11);
  // rosto (pele clara)
  ctx.fillStyle='#f6ddc6';ctx.beginPath();ctx.arc(0,-506,116,0,7);ctx.fill();OL(10);
  // moldura do capuz na frente (arco amarelo ao redor do rosto)
  ctx.strokeStyle='#f2c230';ctx.lineWidth=40;ctx.beginPath();ctx.arc(0,-506,138,Math.PI*1.05,Math.PI*1.95,true);ctx.stroke();ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.beginPath();ctx.arc(0,-506,158,Math.PI*1.02,Math.PI*1.98,true);ctx.stroke();
  // franja
  ctx.fillStyle='#4a3524';ctx.beginPath();ctx.moveTo(-100,-560);ctx.quadraticCurveTo(0,-640,100,-560);ctx.quadraticCurveTo(70,-540,40,-556);ctx.quadraticCurveTo(0,-528,-40,-556);ctx.quadraticCurveTo(-70,-540,-100,-560);ctx.closePath();ctx.fill();
  const hide=o.hide||0,shut=(hide>0.5&&!o.peek);
  // olhos grandes (fofos). Fechados quando ela esconde o rosto; semicerrados quando espia.
  const eoH=shut?0:(o.peek?0.6:1);
  if(eoH>0.05){for(const sx of[-1,1]){ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(sx*46,-500,30,34*eoH,0,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.stroke();
    ctx.fillStyle='#3a2a1c';ctx.beginPath();ctx.arc(sx*46+(o.px||0),-496+(o.py||0),17,0,7);ctx.fill();
    ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(sx*46+(o.px||0)+7,-502+(o.py||0),7,0,7);ctx.fill();}}
  else{ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.lineCap='round';for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(sx*46-26,-500);ctx.quadraticCurveTo(sx*46,-488,sx*46+26,-500);ctx.stroke();}}
  // sobrancelhas (preocupação quando com medo)
  const bw=hide>0.05?-10:0;ctx.strokeStyle='#4a3524';ctx.lineWidth=9;ctx.lineCap='round';for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(sx*26,-548+bw);ctx.quadraticCurveTo(sx*48,-556-bw,sx*70,-542);ctx.stroke();}
  // bochechas rosadas
  ctx.fillStyle='rgba(235,120,110,.35)';ctx.beginPath();ctx.ellipse(-62,-470,26,16,0,0,7);ctx.ellipse(62,-470,26,16,0,0,7);ctx.fill();
  // boca pequena
  ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.lineCap='round';ctx.beginPath();
  if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-452,16,14*o.mouthO,0,0,7);ctx.fill();}
  else if(hide>0.05){ctx.moveTo(-20,-452);ctx.quadraticCurveTo(0,-460,20,-452);ctx.stroke();}
  else{ctx.moveTo(-26,-456);ctx.quadraticCurveTo(0,-446+(o.smile||0),26,-456);ctx.stroke();}
  // mãozinhas (palmas) cobrindo o rosto quando esconde — claramente mãos, com dedos
  if(hide>0.05){const gap=o.peek?40:0;for(const sx of[-1,1]){ctx.save();ctx.translate(sx*(34+gap),-498);
    ctx.fillStyle='#f0cfaa';ctx.beginPath();ctx.moveTo(-40,70);ctx.quadraticCurveTo(-52,-30,-30,-70);ctx.lineTo(34,-70);ctx.quadraticCurveTo(44,-10,40,70);ctx.closePath();ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();
    ctx.strokeStyle='#c99a6e';ctx.lineWidth=6;ctx.lineCap='round';for(let f=-1;f<=2;f++){ctx.beginPath();ctx.moveTo(f*22,-60);ctx.lineTo(f*22,56);ctx.stroke();}ctx.restore();}}
  ctx.restore();}

// ---- o desenho da criança (giz de cera): os três de mãos dadas na frente de uma porta "60" ----
// reveal 0..1: quanto já foi desenhado; label: mostra os nomes
function e8Drawing(cx,cy,s,reveal,label){ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);
  const w=760,h=900;ctx.fillStyle='rgba(0,0,0,.3)';ctx.fillRect(-w/2+8,-h/2+10,w,h);
  ctx.fillStyle='#f3ecda';ctx.fillRect(-w/2,-h/2,w,h);ctx.strokeStyle='#d8cfb8';ctx.lineWidth=5;ctx.strokeRect(-w/2,-h/2,w,h);
  ctx.save();ctx.beginPath();ctx.rect(-w/2,-h/2,w,h);ctx.clip();
  ctx.lineCap='round';ctx.lineJoin='round';
  // céu rabiscado (azul) no topo + sol
  if(reveal>0.1){ctx.strokeStyle='#4f7fd0';ctx.lineWidth=12;ctx.globalAlpha=Math.min(1,reveal*4);
    for(let i=0;i<4;i++){ctx.beginPath();ctx.moveTo(-320+i*14,-380);ctx.lineTo(320,-372+i*12);ctx.stroke();}
    ctx.strokeStyle='#e8a81e';ctx.lineWidth=12;ctx.beginPath();ctx.arc(250,-330,54,0,7);ctx.stroke();for(let a=0;a<7;a++){ctx.beginPath();ctx.moveTo(250+Math.cos(a)*64,-330+Math.sin(a)*64);ctx.lineTo(250+Math.cos(a)*92,-330+Math.sin(a)*92);ctx.stroke();}ctx.globalAlpha=1;}
  // a porta com "60"
  if(reveal>0.3){const dk=Math.min(1,(reveal-0.3)*3);ctx.globalAlpha=dk;ctx.strokeStyle='#8a5a2e';ctx.lineWidth=14;ctx.strokeRect(-120,-250,240,470);
    ctx.fillStyle='#caa05a';ctx.globalAlpha=dk*0.5;ctx.fillRect(-120,-250,240,470);ctx.globalAlpha=dk;
    ctx.fillStyle='#c0392b';ctx.font='900 150px Caveat';ctx.textAlign='center';ctx.fillText('60',0,-20);
    ctx.fillStyle='#e8a81e';ctx.beginPath();ctx.arc(86,20,14,0,7);ctx.fill();ctx.textAlign='left';ctx.globalAlpha=1;}
  // os três bonequinhos de mãos dadas, na frente da porta
  if(reveal>0.5){const pk=Math.min(1,(reveal-0.5)*2.5);ctx.globalAlpha=pk;
    const fig=(fx,fy,fs,col,head,extra)=>{ctx.strokeStyle=col;ctx.fillStyle=col;ctx.lineWidth=13;
      ctx.beginPath();ctx.arc(fx,fy-fs*62,fs*40,0,7);ctx[head?'fill':'stroke']();
      ctx.beginPath();ctx.moveTo(fx,fy-fs*22);ctx.lineTo(fx,fy+fs*54);ctx.stroke();
      ctx.beginPath();ctx.moveTo(fx-fs*42,fy+fs*96);ctx.lineTo(fx,fy+fs*54);ctx.lineTo(fx+fs*42,fy+fs*96);ctx.stroke();
      extra&&extra(fx,fy,fs);};
    // criança (amarela, pequena, à esquerda)
    fig(-250,300,0.95,'#e8a81e',true,(fx,fy,fs)=>{ctx.strokeStyle='#e8a81e';ctx.lineWidth=13;ctx.beginPath();ctx.moveTo(fx-fs*34,fy+fs*6);ctx.lineTo(fx+fs*70,fy-fs*8);ctx.stroke();});
    // Matheus (laranja, no meio)
    fig(0,250,1.25,'#e2742a',true,(fx,fy,fs)=>{ctx.strokeStyle='#e2742a';ctx.lineWidth=14;ctx.beginPath();ctx.moveTo(fx-fs*58,fy-fs*4);ctx.lineTo(fx+fs*58,fy-fs*4);ctx.stroke();});
    // o moço da câmera (azul, mais alto, com uma câmera = quadradinho no rosto)
    fig(250,235,1.35,'#3a6fae',false,(fx,fy,fs)=>{ctx.fillStyle='#3a6fae';ctx.fillRect(fx-fs*30,fy-fs*78,fs*60,fs*40);ctx.strokeStyle='#3a6fae';ctx.lineWidth=14;ctx.beginPath();ctx.moveTo(fx-fs*60,fy-fs*2);ctx.lineTo(fx+fs*34,fy+fs*6);ctx.stroke();});
    ctx.globalAlpha=1;
    if(label){ctx.fillStyle='#2f2a22';ctx.font='700 46px Caveat';ctx.textAlign='center';
      ctx.fillText('eu',-250,470);ctx.fillText('você',0,470);ctx.fillText('o moço da câmera',250,470);ctx.textAlign='left';}
  }
  ctx.restore();ctx.restore();}

// 0. ABERTURA-GANCHO (1100–1101.8): o armário entreaberto, a pontinha da capa amarela lá dentro, com o título
scene(1100,1101.8,(t)=>{const u=t-1100;const z=lerp(1.26,1.06,easeOut(seg(u,0,.6)))+u*.03,sh=u<.35?Math.sin(u*90)*14:0;
  ctx.save();ctx.translate(W/2+sh,H*.55);ctx.scale(z,z);ctx.translate(-W/2,-H*.55);
  e7Wardrobe(u,.3,.9);ctx.restore();
  ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,150,W,330);
  hookTitle('TINHA ALGUÉM|NO ARMÁRIO 😳',seg(u,0,.35),290);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.8*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});

// 1. recap rápido do voto (1102–1103.6): A venceu (abrir o armário)
scene(1102,1103.6,(t)=>{const u=(t-1102)*2.25;ctx.fillStyle='#0e0c14';ctx.fillRect(0,0,W,H);
  // fundo: o armário com a capa amarela espiando
  ctx.save();ctx.globalAlpha=.5;ctx.fillStyle='#6b4630';ctx.fillRect(360,1150,360,760);ctx.fillStyle='#050508';ctx.fillRect(540,1150,180,760);ctx.fillStyle='#f2c230';ctx.fillRect(560,1560,90,350);ctx.restore();
  const g=ctx.createRadialGradient(W/2,H*.42,40,W/2,H*.42,900);g.addColorStop(0,'rgba(60,200,130,.28)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 50px "DejaVu Sans Mono", monospace';ctx.globalAlpha=easeOut(seg(u,0,.4));ctx.fillText('NO EPISÓDIO 7, VOCÊS ESCOLHERAM',W/2,560);ctx.globalAlpha=1;ctx.textAlign='left';
  // B (perdeu) sai para a direita
  const kb=easeOut(seg(u,.9,1.5));ctx.save();ctx.globalAlpha=1-kb;ctx.translate(kb*700,0);ctx.fillStyle='rgba(170,60,60,.9)';rr(70,900,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,1045);ctx.font='800 50px Inter';ctx.fillText('Ir atrás do flash',250,1020);ctx.restore();
  // A (venceu) sobe e cresce, em verde
  const ka=easeBack(seg(u,1.2,1.8)),sc=1+ka*.12,yy=lerp(660,760,ka);
  ctx.save();ctx.translate(W/2,yy+95);ctx.scale(sc,sc);ctx.translate(-W/2,-(yy+95));
  ctx.fillStyle='rgba(30,140,90,.96)';rr(70,yy,940,190,36);ctx.fill();ctx.strokeStyle='rgba(255,255,255,'+(.25+.25*Math.sin(u*6))+')';ctx.lineWidth=6;ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,yy+145);ctx.font='800 48px Inter';ctx.fillText('Abrir o armário',250,yy+120);
  if(u>1.6){const k=easeBack(seg(u,1.6,2));ctx.save();ctx.translate(930,yy+40);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.arc(0,0,58,0,7);ctx.fill();ctx.strokeStyle='#1c1422';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-26,2);ctx.lineTo(-6,22);ctx.lineTo(28,-20);ctx.stroke();ctx.restore()}
  ctx.restore();
  if(u>1.6){const r=rng(9);for(let i=0;i<40;i++){const a=r()*7,sp=300+r()*500,k=seg(u,1.6,3.2),x=W/2+Math.cos(a)*sp*k,y=860+Math.sin(a)*sp*k+k*k*300;ctx.fillStyle=['#ffd84a','#3ccf8e','#fff'][i%3];ctx.globalAlpha=1-k;ctx.fillRect(x,y,10,16);ctx.globalAlpha=1}}
});

// 9. a mão dele na porta do armário (1104–1106)
scene(1104,1106,(t)=>{const u=t-1104;const z=lerp(1.06,1.16,ease(seg(u,0,2)));ctx.save();ctx.translate(640,1300);ctx.scale(z,z);ctx.translate(-640,-1300);
  e7Wardrobe(u,.12,.4);ctx.restore();
  personTurn(300,1680,1.3,{eye:1.1,brow:.4,lid:0},.85);
  vignette(.55);
});

// 10. ele abre de uma vez: a porta escancara (1106.2–1109)
scene(1106.2,1109,(t)=>{const u=t-1106.2;const op=ease(seg(u,.3,1.5));const z=lerp(1.08,1.18,ease(seg(u,0,2.8)));ctx.save();ctx.translate(640,1300);ctx.scale(z,z);ctx.translate(-640,-1300);
  e7Wardrobe(u,op,seg(u,.6,1.4));ctx.restore();
  // tremor rápido no momento da abertura
  if(u>.3&&u<.7){const s=Math.sin(u*80)*10;ctx.save();ctx.translate(s,0);ctx.restore();}
  personTurn(300,1700,1.25,{eye:1.2,brow:.3,mouthO:.3,lid:0},.9);
  vignette(.55);
});

// 11. dentro do armário, encolhido, tem alguém (1109.2–1111.4): silhueta + dois olhos brilhando no escuro
scene(1109.2,1111.4,(t)=>{const u=t-1109.2;ctx.fillStyle='#0a0a12';ctx.fillRect(0,0,W,H);
  // moldura do armário aberto (escuro)
  ctx.fillStyle='#2a1d13';ctx.fillRect(140,220,800,1520);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(140,220,800,1520);
  ctx.fillStyle='#050508';ctx.fillRect(190,270,700,1420);
  // silhueta encolhida da capa + dois olhos
  ctx.fillStyle='rgba(120,95,20,.5)';ctx.beginPath();ctx.ellipse(540,1200,210,360,0,0,7);ctx.fill();
  const bl=(u%1.6<.1)?0.15:1;for(const sx of[-1,1]){ctx.fillStyle=`rgba(255,255,255,${.85*bl})`;ctx.beginPath();ctx.ellipse(540+sx*52,1030,26,30*bl,0,0,7);ctx.fill();ctx.fillStyle='#2a2016';ctx.beginPath();ctx.arc(540+sx*52,1032,12,0,7);ctx.fill();}
  // leve brilho entrando
  const g=ctx.createRadialGradient(540,1030,20,540,1030,500);g.addColorStop(0,'rgba(150,170,255,.14)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  vignette(.6);
});

// 12. a criança revelada: capa amarela, encolhida no armário (1111.6–1114)
scene(1111.6,1114,(t)=>{const u=t-1111.6;ctx.fillStyle='#14131f';ctx.fillRect(0,0,W,H);
  // armário por trás
  ctx.fillStyle='#2a1d13';ctx.fillRect(120,180,840,1600);ctx.fillStyle='#120d08';ctx.fillRect(180,240,720,1500);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(120,180,840,1600);
  // luzinha suave do quarto entrando no armário
  const g=ctx.createRadialGradient(540,900,40,540,900,760);g.addColorStop(0,'rgba(160,180,255,.18)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const z=lerp(1.14,1.0,easeOut(seg(u,0,2.4)));ctx.save();ctx.translate(540,1250);ctx.scale(z,z);ctx.translate(-540,-1250);
  e8Kid(540,1430,1.5,{u,hide:.85,peek:0,tremble:true});ctx.restore();
  vignette(.55);
});

// 13. ela tapa o rosto, tremendo (1114.2–1116.4)
scene(1114.2,1116.4,(t)=>{const u=t-1114.2;ctx.fillStyle='#14131f';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#120d08';ctx.fillRect(180,240,720,1500);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(120,180,840,1600);
  const g=ctx.createRadialGradient(540,900,40,540,900,760);g.addColorStop(0,'rgba(160,180,255,.18)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  e8Kid(540,1430,1.6,{u,hide:1,peek:0,tremble:true});
  vignette(.55);
});

// 14. ele se abaixa, bem devagar (1116.6–1119): close no rosto dele, suave
scene(1116.6,1119,(t)=>{const u=t-1116.6;ctx.fillStyle='#0c0b12';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(560,980,40,560,980,900);g.addColorStop(0,'rgba(150,170,255,.2)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const py=lerp(.38,.56,easeOut(seg(u,0,2.2)));
  face(W/2,H*py,1.02,{open:1,px:0,py:14,brow:.2,smile:6,lid:.1});
  vignette(.6);
});

// 15. "calma, não vou te machucar" — ele estende a mão devagar (1119.2–1121.4)
scene(1119.2,1121.4,(t)=>{const u=t-1119.2;ctx.fillStyle='#121120';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#120d08';ctx.fillRect(140,300,520,1440);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(100,240,560,1500);
  const g=ctx.createRadialGradient(420,1000,40,420,1000,820);g.addColorStop(0,'rgba(160,180,255,.16)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  // a criança escondida no armário (esquerda)
  e8Kid(380,1500,1.15,{u,hide:1,peek:0,tremble:true});
  // a mão dele entrando pela direita, devagar, aberta
  const hx=lerp(1120,820,easeOut(seg(u,.4,2.2)));ctx.save();ctx.translate(hx,1120);ctx.rotate(-.2);
  ctx.fillStyle='#f0c49a';ctx.beginPath();ctx.ellipse(0,0,70,96,0,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();
  for(let i=-2;i<=2;i++){ctx.beginPath();ctx.moveTo(i*26,-70);ctx.lineTo(i*30,-150);ctx.lineWidth=26;ctx.strokeStyle='#f0c49a';ctx.lineCap='round';ctx.stroke();ctx.lineWidth=8;ctx.strokeStyle=OUT;ctx.stroke();}
  ctx.restore();
  vignette(.55);
});

// 16. a criança espia por entre os dedos (1121.6–1123.8)
scene(1121.6,1123.8,(t)=>{const u=t-1121.6;ctx.fillStyle='#14131f';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#120d08';ctx.fillRect(180,240,720,1500);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(120,180,840,1600);
  const g=ctx.createRadialGradient(540,900,40,540,900,760);g.addColorStop(0,'rgba(170,190,255,.2)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  e8Kid(540,1440,1.6,{u,hide:.9,peek:1,tremble:u<1,px:-3});
  vignette(.55);
});

// 17. close: dois olhos grandes, assustados, olham pra ele (1124–1126)
scene(1124,1126,(t)=>{const u=t-1124;ctx.fillStyle='#17141f';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(540,900,40,540,900,860);g.addColorStop(0,'rgba(170,190,255,.2)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const z=lerp(2.0,2.4,ease(seg(u,0,2)));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(z,z);ctx.translate(-540,-980);
  e8Kid(540,1440,1.6,{u,hide:0,peek:0,px:lerp(-4,4,seg(u,.3,1.6)),py:0});ctx.restore();
  vignette(.5);
});

// 18. close nos pés: os tênis vermelhos (1126.2–1128.4)
scene(1126.2,1128.4,(t)=>{const u=t-1126.2;ctx.fillStyle='#17141f';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#2a2430';ctx.fillRect(0,1240,W,680);ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=4;for(let y=1300;y<H;y+=120){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
  const g=ctx.createRadialGradient(540,1120,40,540,1120,700);g.addColorStop(0,'rgba(170,190,255,.16)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  // só as perninhas e os tênis, bem de perto
  const z=2.3;ctx.save();ctx.translate(W/2,900);ctx.scale(z,z);ctx.translate(-540,-120);
  for(const sx of[-1,1]){ctx.fillStyle='#c9a152';ctx.beginPath();rr(540+sx*46-18,-150,36,116,10);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();
    ctx.fillStyle='#d23b2e';ctx.beginPath();ctx.ellipse(540+sx*46+(sx>0?8:-8),-16,54,34,0,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.stroke();
    ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(540+sx*46-28,-24);ctx.lineTo(540+sx*46+30,-24);ctx.stroke();}
  ctx.restore();
  if(u>1){ctx.fillStyle='#ffd84a';ctx.font='700 70px Caveat';ctx.textAlign='center';ctx.globalAlpha=seg(u,1,1.5);ctx.fillText('tênis vermelhos…',W/2,1520);ctx.globalAlpha=1;ctx.textAlign='left';}
  vignette(.5);
});

// 19. os mesmos das pegadas: montagem tênis -> pegada (1128.6–1131)
scene(1128.6,1131,(t)=>{const u=t-1128.6;ctx.fillStyle='#101620';ctx.fillRect(0,0,W,H);
  e6Night&&e6Night();
  // à esquerda o tênis, à direita a pegada idêntica, com uma seta
  ctx.save();ctx.translate(300,900);ctx.scale(2.0,2.0);ctx.fillStyle='#d23b2e';ctx.beginPath();ctx.ellipse(0,0,54,34,0,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.stroke();ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-30,-8);ctx.lineTo(32,-8);ctx.stroke();ctx.restore();
  e6Print(780,900,1.4,0,'shoe',1);
  if(u>.5){const k=seg(u,.5,1.1);ctx.strokeStyle='#ffd84a';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(430,900);ctx.lineTo(430+k*160,900);ctx.stroke();ctx.beginPath();ctx.moveTo(590,900);ctx.lineTo(550,872);ctx.moveTo(590,900);ctx.lineTo(550,928);ctx.stroke();}
  if(u>1.4){ctx.fillStyle='#fff';ctx.font='800 64px Inter';ctx.textAlign='center';ctx.globalAlpha=seg(u,1.4,1.9);ctx.fillText('era ela nas pegadas!',W/2,1400);ctx.globalAlpha=1;ctx.textAlign='left';}
  vignette(.55);
});

// 20. era ela o tempo todo — a criança, menos assustada (1131.2–1133.4)
scene(1131.2,1133.4,(t)=>{const u=t-1131.2;ctx.fillStyle='#161522';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#120d08';ctx.fillRect(180,240,720,1500);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(120,180,840,1600);
  const g=ctx.createRadialGradient(540,900,40,540,900,820);g.addColorStop(0,'rgba(170,190,255,.2)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  e8Kid(540,1440,1.6,{u,hide:0,peek:0,brow:0});
  vignette(.55);
});

// 21. ela também tava com medo, de tudo (1133.6–1135.8): ela abraça os joelhos
scene(1133.6,1135.8,(t)=>{const u=t-1133.6;ctx.fillStyle='#161522';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#120d08';ctx.fillRect(180,240,720,1500);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(120,180,840,1600);
  const g=ctx.createRadialGradient(540,950,40,540,950,760);g.addColorStop(0,'rgba(160,180,255,.16)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  e8Kid(540,1470,1.5,{u,hide:.25,peek:0,smile:-2});
  vignette(.55);
});

// 22. devagar, ela estende um papel (1136–1138.4)
scene(1136,1138.4,(t)=>{const u=t-1136;ctx.fillStyle='#161522';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#120d08';ctx.fillRect(180,240,720,1500);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(120,180,840,1600);
  const g=ctx.createRadialGradient(540,900,40,540,900,820);g.addColorStop(0,'rgba(170,190,255,.2)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  e8Kid(540,1460,1.55,{u,reach:1,smile:1});
  // o papelzinho na mão dela, subindo um pouco
  const py=lerp(1230,1150,easeOut(seg(u,.6,2.2)));ctx.save();ctx.translate(540,py);ctx.rotate(-.06);ctx.fillStyle='#f3ecda';ctx.fillRect(-120,-150,240,300);ctx.strokeStyle='#d8cfb8';ctx.lineWidth=4;ctx.strokeRect(-120,-150,240,300);
  ctx.strokeStyle='#e2742a';ctx.lineWidth=7;ctx.beginPath();ctx.arc(0,-40,24,0,7);ctx.stroke();ctx.beginPath();ctx.moveTo(0,-16);ctx.lineTo(0,60);ctx.stroke();ctx.restore();
  vignette(.55);
});

// 23. o desenho, de perto: é um desenho de giz de cera (1138.6–1140.8)
scene(1138.6,1140.8,(t)=>{const u=t-1138.6;ctx.fillStyle='#0f0e18';ctx.fillRect(0,0,W,H);
  const z=lerp(1.0,1.12,ease(seg(u,0,2.2)));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(z,z);ctx.translate(-W/2,-H*.5);
  e8Drawing(W/2,H*.5,1.12,seg(u,.1,1.0),false);ctx.restore();
  if(u<.14){ctx.fillStyle=`rgba(255,255,255,${(1-u/.14)*.5})`;ctx.fillRect(0,0,W,H)}
  vignette(.5);
});

// 24. três pessoas de mãos dadas (1141–1143)
scene(1141,1143,(t)=>{const u=t-1141;ctx.fillStyle='#0f0e18';ctx.fillRect(0,0,W,H);
  e8Drawing(W/2,H*.5,1.18,1,false);
  if(u>.4){const k=seg(u,.4,1);ctx.strokeStyle='#ffd84a';ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();for(let q=0;q<=k*6.6;q+=.05){const xx=W/2+Math.cos(q)*(360+8*Math.sin(q*3)),yy=H*.5+150+Math.sin(q)*130;q?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy)}ctx.stroke();}
  vignette(.5);
});

// 25. uma criança, o Matheus e o moço da câmera (1143.2–1145.8): nomes aparecem
scene(1143.2,1145.8,(t)=>{const u=t-1143.2;ctx.fillStyle='#0f0e18';ctx.fillRect(0,0,W,H);
  e8Drawing(W/2,H*.5,1.18,1,u>.6);
  vignette(.5);
});

// 26. os três na frente de uma porta (1146–1148): destaca a porta
scene(1146,1148,(t)=>{const u=t-1146;ctx.fillStyle='#0f0e18';ctx.fillRect(0,0,W,H);
  const z=lerp(1.18,1.4,ease(seg(u,0,2)));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(z,z);ctx.translate(-W/2,-H*.5);
  e8Drawing(W/2,H*.5,1.18,1,false);ctx.restore();
  vignette(.5);
});

// 27. e na porta, um número grande: 60 (1148.2–1150.4)
scene(1148.2,1150.4,(t)=>{const u=t-1148.2;ctx.fillStyle='#0f0e18';ctx.fillRect(0,0,W,H);
  const z=lerp(1.4,1.9,ease(seg(u,0,2.2)));ctx.save();ctx.translate(W/2,H*.52);ctx.scale(z,z);ctx.translate(-W/2,-(H*.5-30));
  e8Drawing(W/2,H*.5,1.18,1,false);ctx.restore();
  if(u>.8){const k=seg(u,.8,1.4);ctx.strokeStyle='#ff3b3b';ctx.lineWidth=11;ctx.lineCap='round';ctx.beginPath();for(let q=0;q<=k*6.6;q+=.05){const xx=W/2+Math.cos(q)*(150+8*Math.sin(q*3)),yy=H*.46+Math.sin(q)*130;q?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy)}ctx.stroke();
    if(k>=1){ctx.fillStyle='#ff3b3b';ctx.font='700 72px Caveat';ctx.textAlign='center';ctx.fillText('dia 60!',W/2,H*.72);ctx.textAlign='left';}}
  vignette(.5);
});

// 28. ela aponta pra janela, lá pro prédio alto (1150.6–1153)
scene(1150.6,1153,(t)=>{const u=t-1150.6;const z=lerp(1.04,1.0,easeOut(seg(u,0,2.4)));ctx.save();ctx.translate(W/2,H*.56);ctx.scale(z,z);ctx.translate(-W/2,-H*.56);
  e7Bedroom(u,{photo:true,win13:true,mm:13});ctx.restore();
  // a criança no canto, apontando pra janela
  e8Kid(300,1660,1.15,{u,point:1,smile:1});
  vignette(.5);
});

// 29. o moço da câmera tá no 13º andar: a janela acesa, lá longe (1153.2–1155.8)
scene(1153.2,1155.8,(t)=>{const u=t-1153.2;const z=lerp(1.5,3.0,ease(seg(u,0,2.6)));ctx.save();ctx.translate(W/2,H*.45);ctx.scale(z,z);ctx.translate(-860,-640);
  const fl=(u>1.6&&u<1.9)?1-seg(u,1.6,1.9):0;
  e7Bedroom(u,{photo:true,win13:u>.4,flash:fl,mm:13});ctx.restore();
  if(u>2){ctx.fillStyle='#ffd84a';ctx.font='700 68px Caveat';ctx.textAlign='center';ctx.globalAlpha=seg(u,2,2.5);ctx.fillText('o moço da câmera',W/2,560);ctx.globalAlpha=1;ctx.textAlign='left';}
  vignette(.55);
});

// 30. ela não quer fugir, quer os três juntos (1156–1158.4): a criança + o desenho dos três de mãos dadas em sobreposição
scene(1156,1158.4,(t)=>{const u=t-1156;ctx.fillStyle='#161522';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#120d08';ctx.fillRect(140,300,520,1440);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(100,240,560,1500);
  const g=ctx.createRadialGradient(420,980,40,420,980,860);g.addColorStop(0,'rgba(160,180,255,.18)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  e8Kid(380,1520,1.2,{u,hold:1,smile:3});
  // o desenho em destaque à direita
  ctx.save();ctx.translate(820,820);ctx.rotate(.05);const k=easeBack(seg(u,.3,1));ctx.scale(k*.5,k*.5);e8Drawing(0,0,1,1,false);ctx.restore();
  vignette(.5);
});

// 31. e você, confiaria nessa menininha? (1158.6–1160.8) — fala com o público
scene(1158.6,1160.8,(t)=>{const u=t-1158.6;ctx.fillStyle='#121120';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.5,40,W/2,H*.5,900);g.addColorStop(0,'rgba(150,170,255,.18)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  // a criança pequena no centro, olhando pro público
  e8Kid(W/2,1180,1.2,{u,hide:0,peek:0,smile:2,py:0});
  ctx.fillStyle='#fff';ctx.font='800 70px Inter';ctx.textAlign='center';ctx.globalAlpha=seg(u,.4,1);ctx.fillText('você confiaria nela?',W/2,1560);ctx.globalAlpha=1;ctx.textAlign='left';
  vignette(.55);
});

// 32. ela puxa a mão dele, pedindo pra ir (1161–1163.4)
scene(1161,1163.4,(t)=>{const u=t-1161;ctx.fillStyle='#141322';ctx.fillRect(0,0,W,H);
  e7Bedroom(u,{photo:true,mm:13});
  // sobreposição escura leve
  ctx.fillStyle='rgba(8,8,16,.35)';ctx.fillRect(0,0,W,H);
  // a criança puxando (à esquerda) e a mão dele
  e8Kid(360,1640,1.15,{u,reach:1,smile:2});
  const hx=lerp(760,640,easeOut(seg(u,.4,2)));ctx.save();ctx.translate(hx,1280);ctx.rotate(.1);ctx.fillStyle='#f0c49a';ctx.beginPath();ctx.ellipse(0,0,56,78,0,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.restore();
  vignette(.5);
});

// 33. mas o flash lá no prédio pisca de novo (1163.6–1166)
scene(1163.6,1166,(t)=>{const u=t-1163.6;const z=lerp(1.4,2.6,ease(seg(u,0,2.4)));ctx.save();ctx.translate(W/2,H*.45);ctx.scale(z,z);ctx.translate(-860,-640);
  const fl=(u>1&&u<1.3)?1-seg(u,1,1.3):(u>1.9&&u<2.2?1-seg(u,1.9,2.2):0);
  e7Bedroom(u,{photo:true,win13:true,flash:fl,mm:13});ctx.restore();
  if(fl>.6){ctx.fillStyle=`rgba(255,255,255,${(fl-.6)*.5})`;ctx.fillRect(0,0,W,H)}
  vignette(.55);
});

// 34. escolha (1166.2–1173)
scene(1166.2,1173,(t)=>{const u=t-1166.2;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  // fundo: à esquerda a menina de capa amarela; à direita a janela com o flash
  ctx.save();ctx.globalAlpha=.5;e8Kid(220,1560,.9,{u,smile:2});
  ctx.fillStyle='#1d2850';ctx.fillRect(760,1000,260,360);ctx.fillStyle=(u%1.6<.12)?'#fff':'#ffd682';ctx.fillRect(900,1080,20,24);ctx.restore();
  ctx.fillStyle='rgba(10,8,14,.42)';ctx.fillRect(0,0,W,H);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,120,80,.92)';rr(70,430,940,200,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,580);ctx.font='800 48px Inter';ctx.fillText('Ir com a menina',250,555);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,670,940,200,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,820);ctx.font='800 48px Inter';ctx.fillText('Subir ao 13º andar',250,795);ctx.restore();
});

// 35. cartela final (1175–1178.2)
scene(1175,1178.2,(t)=>{const u=t-1175;ctx.fillStyle='#050507';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.45,50,W/2,H*.45,900);g.addColorStop(0,'rgba(200,30,30,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.4);ctx.scale(k,k);ctx.textAlign='center';
  const gl=u<.5||(u%1.3<.08)?1:0;ctx.font='900 118px Inter';
  if(gl){ctx.fillStyle='rgba(255,0,60,.7)';ctx.fillText('E SE SOBRASSE',-8,0);ctx.fillStyle='rgba(0,220,255,.7)';ctx.fillText('E SE SOBRASSE',8,0)}
  ctx.fillStyle='#fff';ctx.fillText('E SE SOBRASSE',0,0);ctx.font='900 220px Inter';ctx.fillStyle='#ff3b3b';ctx.fillText('SÓ UM?',0,220);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 9 · EM BREVE',W/2,H*.4+420);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.4+520);ctx.restore()});
