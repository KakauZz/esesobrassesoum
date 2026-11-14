// ===================== EP. 9 — O FOTÓGRAFO =====================
// (vencedora do EP. 8: B — subir até o fotógrafo). Faixa 1200–1299.
// Um mistério só: quem é o moço da câmera? (resposta parcial: ele também acordou sozinho no dia 1 e estava esperando os dois)
// Elementos novos (2): o DIÁRIO do fotógrafo (bíblia) e o FOTÓGRAFO na porta (chapéu, óculos, câmera; rosto ainda na sombra do chapéu).
// Retomados: a menina de capa amarela (EP8), o prédio do 13º andar / elevador quebrado / escada / sala das fotos (EP3), a carta da praça (EP1-2), o flash (EP6-8).
// Ambiente (não falado, 1–2): o gato laranja de coleira azul dormindo na calçada; estrelas pela janela.

// ---- o fotógrafo (pessoa comum, adulto, calmo; nunca assustador) ----
// o: {cam: 1 = câmera no rosto, 0 = câmera baixada no peito; u}
function e9Photog(x,y,s,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';
  const OL=(w)=>{ctx.strokeStyle=OUT;ctx.lineWidth=w||7;ctx.stroke()};
  ctx.fillStyle='rgba(0,0,0,.32)';ctx.beginPath();ctx.ellipse(0,6,150,24,0,0,7);ctx.fill();
  // pernas + sapatos
  for(const sx of[-1,1]){ctx.fillStyle='#2c2a30';ctx.beginPath();rr(sx*44-26,-330,52,322,12);ctx.fill();OL(6);
    ctx.fillStyle='#3a2a20';ctx.beginPath();ctx.ellipse(sx*48,-8,46,20,0,0,7);ctx.fill();OL(6);}
  // casaco comprido
  ctx.fillStyle='#5a6248';ctx.beginPath();ctx.moveTo(-96,-700);ctx.quadraticCurveTo(-132,-480,-118,-250);ctx.lineTo(118,-250);ctx.quadraticCurveTo(132,-480,96,-700);ctx.quadraticCurveTo(0,-730,-96,-700);ctx.closePath();ctx.fill();OL(7);
  ctx.fillStyle='rgba(0,0,0,.18)';ctx.fillRect(-4,-690,8,440);
  ctx.fillStyle='#3e4432';for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(-22,-620+i*110,9,0,7);ctx.fill()}
  // cachecol
  ctx.fillStyle='#8a3a3a';ctx.beginPath();rr(-62,-730,124,46,20);ctx.fill();OL(6);ctx.beginPath();rr(18,-700,40,150,14);ctx.fill();OL(6);
  // pescoço e cabeça
  ctx.fillStyle='#d9a882';ctx.fillRect(-20,-768,40,44);
  ctx.beginPath();ctx.ellipse(0,-830,64,74,0,0,7);ctx.fill();OL(7);
  ctx.fillStyle='#4a3a2c';ctx.beginPath();ctx.ellipse(-56,-820,14,30,0,0,7);ctx.ellipse(56,-820,14,30,0,0,7);ctx.fill(); // costeletas
  // sombra do chapéu sobre os olhos + óculos brilhando de leve
  ctx.fillStyle='rgba(30,20,20,.55)';ctx.beginPath();ctx.ellipse(0,-852,64,30,0,0,7);ctx.fill();
  ctx.strokeStyle='rgba(255,230,180,.85)';ctx.lineWidth=4;ctx.beginPath();ctx.arc(-26,-848,15,0,7);ctx.stroke();ctx.beginPath();ctx.arc(26,-848,15,0,7);ctx.stroke();ctx.beginPath();ctx.moveTo(-11,-848);ctx.lineTo(11,-848);ctx.stroke();
  ctx.fillStyle='rgba(255,240,210,.7)';ctx.beginPath();ctx.arc(-31,-853,4,0,7);ctx.arc(21,-853,4,0,7);ctx.fill();
  // boca calma (leve sorriso)
  ctx.strokeStyle='#7a4a3a';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-18,-790);ctx.quadraticCurveTo(0,-780+(o.smile||0)*6,18,-790);ctx.stroke();
  // chapéu
  ctx.fillStyle='#3a3428';ctx.beginPath();ctx.ellipse(0,-878,112,24,0,0,7);ctx.fill();OL(6);
  ctx.beginPath();ctx.moveTo(-62,-882);ctx.quadraticCurveTo(-66,-958,0,-962);ctx.quadraticCurveTo(66,-958,62,-882);ctx.closePath();ctx.fill();OL(6);
  ctx.fillStyle='#8a3a3a';ctx.fillRect(-62,-904,124,16);
  // braços + câmera (sobe até o rosto quando cam=1)
  const c=o.cam??0;const cy=lerp(-560,-835,c);
  for(const sx of[-1,1]){ctx.fillStyle='#4e563e';ctx.beginPath();ctx.moveTo(sx*92,-690);ctx.quadraticCurveTo(sx*130,lerp(-560,-700,c),sx*70,cy+20);ctx.lineTo(sx*44,cy-10);ctx.quadraticCurveTo(sx*92,lerp(-600,-720,c),sx*62,-680);ctx.closePath();ctx.fill();OL(6);}
  ctx.strokeStyle='#1a1a1e';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-60,-720);ctx.lineTo(-70,cy);ctx.moveTo(60,-720);ctx.lineTo(70,cy);ctx.stroke(); // alça
  ctx.fillStyle='#2a2b31';ctx.beginPath();rr(-92,cy-56,184,112,18);ctx.fill();OL(6);
  ctx.fillStyle='#3a3b44';ctx.beginPath();rr(-60,cy-80,70,28,8);ctx.fill();OL(4);
  ctx.fillStyle='#16171c';ctx.beginPath();ctx.arc(0,cy,42,0,7);ctx.fill();OL(5);ctx.fillStyle='#4a6a8a';ctx.beginPath();ctx.arc(0,cy,26,0,7);ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.45)';ctx.beginPath();ctx.arc(-9,cy-9,8,0,7);ctx.fill();
  ctx.fillStyle='#e0e0e6';ctx.fillRect(48,cy-48,30,16);
  for(const sx of[-1,1]){ctx.fillStyle='#d9a882';ctx.beginPath();ctx.ellipse(sx*86,cy+6,22,26,0,0,7);ctx.fill();OL(5);}
  ctx.restore();}

// ---- a porta da sala das fotos, vista de DENTRO da sala (o fotógrafo pode estar no vão) ----
// o: {who: 0..1 (entra no vão), cam, flash, smile, kid}
function e9Doorway(u,o){o=o||{};ctx.fillStyle='#2b2018';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#4a3a2e';ctx.fillRect(0,0,W,1500);ctx.fillStyle='rgba(0,0,0,.15)';for(let x=0;x<W;x+=90)ctx.fillRect(x,0,4,1500);
  // fotos na parede dos lados da porta
  const r=rng(31);for(let i=0;i<6;i++){const x=i<3?90+(i%3)*0:930,y=300+(i%3)*330;ctx.save();ctx.translate(i<3?120:960,y+r()*30);ctx.rotate((r()-.5)*.3);ctx.fillStyle='#f3efe6';ctx.fillRect(-70,-84,140,168);ctx.fillStyle=['#5a7aa0','#c97b4a','#3f7a4a','#8a6a9a'][i%4];ctx.fillRect(-58,-72,116,116);ctx.restore()}
  // batente + corredor escuro lá fora
  ctx.fillStyle='#0c0c14';ctx.fillRect(300,380,480,1120);
  ctx.fillStyle='#14141e';ctx.beginPath();ctx.moveTo(300,1500);ctx.lineTo(470,1180);ctx.lineTo(610,1180);ctx.lineTo(780,1500);ctx.closePath();ctx.fill();
  // o fotógrafo, iluminado pela luz quente da sala
  const k=o.who||0;if(k>0){ctx.save();ctx.beginPath();ctx.rect(300,380,480,1200);ctx.clip();ctx.globalAlpha=Math.min(1,k*1.4);
    e9Photog(lerp(700,540,easeOut(k)),1500,1.08,{cam:o.cam,smile:o.smile});ctx.restore();
    const g=ctx.createLinearGradient(0,1500,0,380);g.addColorStop(0,'rgba(255,190,110,.10)');g.addColorStop(1,'rgba(255,190,110,0)');ctx.fillStyle=g;ctx.fillRect(300,380,480,1120);}
  // porta aberta para dentro (à esquerda, em perspectiva)
  ctx.fillStyle='#5a3d2c';ctx.beginPath();ctx.moveTo(300,380);ctx.lineTo(170,300);ctx.lineTo(170,1600);ctx.lineTo(300,1500);ctx.closePath();ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.stroke();
  ctx.strokeStyle='#2a1d16';ctx.lineWidth=26;ctx.strokeRect(300,380,480,1120);
  ctx.fillStyle='#1d1610';ctx.fillRect(0,1500,W,420);
  // luz da sala no chão
  const g=ctx.createRadialGradient(W/2,1000,80,W/2,1000,1100);g.addColorStop(0,'rgba(255,200,120,.16)');g.addColorStop(1,'rgba(0,0,0,.55)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  if(o.flash>0){const f=o.flash;const gg=ctx.createRadialGradient(540,1500-1.08*835,10,540,1500-1.08*835,700);gg.addColorStop(0,`rgba(255,255,255,${f})`);gg.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=gg;ctx.fillRect(0,0,W,H);ctx.fillStyle=`rgba(255,255,255,${f*.6})`;ctx.fillRect(0,0,W,H)}
}

// ---- o diário (caderno aberto). o: {left:[linhas], right:[linhas], k: 0..1 quanto da escrita já apareceu, tape: foto colada}
function e9Diary(cx,cy,s,o){o=o||{};ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);
  const w=880,h=620;ctx.fillStyle='rgba(0,0,0,.35)';ctx.fillRect(-w/2+14,-h/2+18,w,h);
  ctx.fillStyle='#6a3a26';ctx.beginPath();rr(-w/2-20,-h/2-16,w+40,h+32,18);ctx.fill();
  for(const sx of[-1,1]){ctx.fillStyle='#f3ecda';ctx.fillRect(sx<0?-w/2:6,-h/2,w/2-6,h);ctx.fillStyle='rgba(80,110,170,.25)';for(let y=-h/2+90;y<h/2-20;y+=56)ctx.fillRect(sx<0?-w/2+24:30,y,w/2-60,3);}
  ctx.fillStyle='rgba(0,0,0,.18)';ctx.fillRect(-10,-h/2,20,h);
  ctx.fillStyle='#2f2a40';ctx.textAlign='left';
  const write=(lines,x0)=>{const tot=lines.join('').length;let n=Math.floor((o.k??1)*tot);lines.forEach((l,i)=>{const sh=l.slice(0,Math.max(0,n));n-=l.length;
      ctx.font=(i==0?'700 64px':'600 50px')+' Caveat';ctx.fillStyle=i==0?'#8a2a2a':'#1f2f6b';ctx.fillText(sh,x0,-h/2+80+i*58)})};
  if(o.left)write(o.left,-w/2+34);if(o.right)write(o.right,40);
  if(o.tape){ctx.save();ctx.translate(-w/4,140);ctx.rotate(-.06);ctx.fillStyle='#fff';ctx.fillRect(-110,-110,220,200);ctx.fillStyle='#1d2850';ctx.fillRect(-96,-96,192,150);
    ctx.fillStyle='#ffd682';ctx.fillRect(-20,-40,40,50);ctx.fillStyle='rgba(240,230,190,.6)';ctx.fillRect(-60,-124,120,30);ctx.restore()}
  if(o.stick){const pk=o.stick;ctx.save();ctx.globalAlpha=pk;ctx.translate(230,200);ctx.lineWidth=7;ctx.lineCap='round';
    [[-110,'#e8a81e',.7],[0,'#e2742a',.95],[110,'#3a6fae',1.05]].forEach(([fx,c,fs])=>{ctx.strokeStyle=c;ctx.beginPath();ctx.arc(fx,-60*fs,20*fs,0,7);ctx.stroke();ctx.beginPath();ctx.moveTo(fx,-40*fs);ctx.lineTo(fx,20*fs);ctx.moveTo(fx-22*fs,56*fs);ctx.lineTo(fx,20*fs);ctx.lineTo(fx+22*fs,56*fs);ctx.stroke()});
    ctx.strokeStyle='#2f2a40';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-90,-10);ctx.lineTo(-22,-10);ctx.moveTo(22,-10);ctx.lineTo(90,-10);ctx.stroke();ctx.restore()}
  ctx.restore();}

// ---- a foto nova: a janela do quarto dele, vista de longe, com os dois (ele e a menina) ----
function e9NewPhoto(x,y,w,rot,lab){const h=w*1.18;ctx.save();ctx.translate(x,y);ctx.rotate(rot);
  ctx.fillStyle='rgba(0,0,0,.35)';ctx.fillRect(-w/2+8,-h/2+10,w,h);ctx.fillStyle='#f3efe6';ctx.fillRect(-w/2,-h/2,w,h);
  const m=w*.07,iw=w-2*m;ctx.save();ctx.beginPath();ctx.rect(-w/2+m,-h/2+m,iw,iw);ctx.clip();ctx.translate(-w/2+m,-h/2+m);ctx.scale(iw/600,iw/600);
  ctx.fillStyle='#0d1430';ctx.fillRect(0,0,600,600);ctx.fillStyle='#262a40';ctx.fillRect(60,40,480,560);
  for(let r=0;r<4;r++)for(let c=0;c<3;c++){ctx.fillStyle='rgba(255,255,255,.06)';ctx.fillRect(100+c*150,80+r*130,100,80)}
  // a janela do quarto (cortinas vinho) acesa pela lua, com os dois
  ctx.fillStyle='#3a4670';ctx.fillRect(170,170,260,220);ctx.fillStyle='#7a2a46';ctx.fillRect(160,160,34,240);ctx.fillRect(406,160,34,240);
  ctx.strokeStyle='#14182c';ctx.lineWidth=8;ctx.strokeRect(170,170,260,220);
  ctx.fillStyle='#e2683c';ctx.beginPath();ctx.arc(255,250,30,0,7);ctx.fill();ctx.fillRect(222,282,66,108);ctx.fillStyle='#2b1d16';ctx.beginPath();ctx.arc(255,242,28,Math.PI,0);ctx.fill();
  ctx.fillStyle='#f2c230';ctx.beginPath();ctx.arc(345,300,24,0,7);ctx.fill();ctx.fillRect(320,322,50,68);ctx.fillStyle='#f6ddc6';ctx.beginPath();ctx.arc(345,304,13,0,7);ctx.fill();
  ctx.fillStyle='rgba(255,200,120,.10)';ctx.fillRect(0,0,600,600);ctx.restore();
  if(lab){ctx.fillStyle='#2a2a33';ctx.font=`600 ${Math.round(w*.1)}px Caveat`;ctx.fillText(lab,-w/2+m,h/2-m*.9)}
  ctx.fillStyle='#c62828';ctx.beginPath();ctx.arc(0,-h/2+m*.5,w*.035,0,7);ctx.fill();ctx.restore()}

// 0. ABERTURA-GANCHO (1200–1201.8): o homem da câmera na porta da sala das fotos (rosto escondido pela câmera)
scene(1200,1201.8,(t)=>{const u=t-1200;const z=lerp(1.22,1.05,easeOut(seg(u,0,.6)))+u*.03,sh=u<.35?Math.sin(u*90)*14:0;
  ctx.save();ctx.translate(W/2+sh,H*.55);ctx.scale(z,z);ctx.translate(-W/2,-H*.55);
  e9Doorway(u,{who:1,cam:1,flash:(u>1.1&&u<1.4)?.45*(1-seg(u,1.1,1.4)):0});ctx.restore();
  ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,150,W,330);
  hookTitle('QUEM ESTAVA|ESPERANDO? 😳',seg(u,0,.35),290);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.8*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});

// 1. recap rápido do voto (1202–1203.6): B venceu (subir até o fotógrafo)
scene(1202,1203.6,(t)=>{const u=(t-1202)*2.25;ctx.fillStyle='#0e0c14';ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=.45;ctx.fillStyle='#1d2850';ctx.fillRect(700,1150,200,700);ctx.fillStyle=(u%1.2<.15)?'#fff':'#ffd682';ctx.fillRect(780,1230,30,36);ctx.restore();
  const g=ctx.createRadialGradient(W/2,H*.42,40,W/2,H*.42,900);g.addColorStop(0,'rgba(60,200,130,.28)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 50px "DejaVu Sans Mono", monospace';ctx.globalAlpha=easeOut(seg(u,0,.4));ctx.fillText('NO EPISÓDIO 8, VOCÊS ESCOLHERAM',W/2,560);ctx.globalAlpha=1;ctx.textAlign='left';
  // A (perdeu) sai para a esquerda
  const ka=easeOut(seg(u,.9,1.5));ctx.save();ctx.globalAlpha=1-ka;ctx.translate(-ka*700,0);ctx.fillStyle='rgba(120,120,130,.9)';rr(70,660,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,805);ctx.font='800 48px Inter';ctx.fillText('Ir com a menina',250,780);ctx.restore();
  // B (venceu) sobe e cresce, em verde
  const kb=easeBack(seg(u,1.2,1.8)),sc=1+kb*.12,yy=lerp(900,760,kb);
  ctx.save();ctx.translate(W/2,yy+95);ctx.scale(sc,sc);ctx.translate(-W/2,-(yy+95));
  ctx.fillStyle='rgba(30,140,90,.96)';rr(70,yy,940,190,36);ctx.fill();ctx.strokeStyle='rgba(255,255,255,'+(.25+.25*Math.sin(u*6))+')';ctx.lineWidth=6;ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,yy+145);ctx.font='800 48px Inter';ctx.fillText('Subir ao 13º andar',250,yy+120);
  if(u>1.6){const k=easeBack(seg(u,1.6,2));ctx.save();ctx.translate(930,yy+40);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.arc(0,0,58,0,7);ctx.fill();ctx.strokeStyle='#1c1422';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-26,2);ctx.lineTo(-6,22);ctx.lineTo(28,-20);ctx.stroke();ctx.restore()}
  ctx.restore();
  if(u>1.6){const r=rng(9);for(let i=0;i<40;i++){const a=r()*7,sp=300+r()*500,k=seg(u,1.6,3.2),x=W/2+Math.cos(a)*sp*k,y=860+Math.sin(a)*sp*k+k*k*300;ctx.fillStyle=['#ffd84a','#3ccf8e','#fff'][i%3];ctx.globalAlpha=1-k;ctx.fillRect(x,y,10,16);ctx.globalAlpha=1}}
});

// 2. no quarto: "vem comigo, a gente vai junto" — ele (à direita, virado pra ela) e a menina (à esquerda), que sorri e balança a cabeça (1204–1206.4)
scene(1204,1206.4,(t)=>{const u=t-1204;const z=lerp(1.02,1.1,ease(seg(u,0,2.4)));ctx.save();ctx.translate(W/2,1300);ctx.scale(z,z);ctx.translate(-W/2,-1300);
  e7Bedroom(u,{photo:true,mm:13,win13:true});ctx.restore();
  ctx.fillStyle='rgba(8,8,16,.35)';ctx.fillRect(0,0,W,H);
  personTurn(760,1480,1.9,{eye:1,brow:.2,smile:.6,lid:0},-.7);
  const nod=Math.max(0,Math.sin(seg(u,.9,2.2)*Math.PI*2))*14;
  e8Kid(330,1700+nod*.3,.6,{u,smile:lerp(0,6,seg(u,.6,1.4)),px:8,py:-4});
  vignette(.5);
});

// 3. de lado: os dois saem pela rua escura, andando para a DIREITA (ele na frente, ela logo atrás); calçada, postes e o gato passam para a ESQUERDA (1206.6–1210)
scene(1206.6,1210,(t)=>{const u=t-1206.6,v=300,gx=u*v;
  e7SideStreet(gx,u,1);
  // gato laranja (coleira azul) dormindo na calçada — passa com o cenário
  const cx=1500-gx;if(cx>-200&&cx<W+200)e6Cat(cx,1430,.8,u);
  e6Child(300,1548,.95,{f:1,walk:gx/v*9,both:true,look:.7});
  person(640,1540-140*1.25,1.25,{f:1,walk:gx/v*8.6,look:.1});
  vignette(.45);
});

// 4. a escada do prédio: ele sobe para a DIREITA (onde os degraus sobem) e a menina sobe logo atrás, pertinho (1210.2–1213). Andar 8 → 13.
scene(1210.2,1213,(t)=>{const u=t-1210.2;const st=S.find(s=>s.a===530);const uo=3.4+u*.75;st.fn(530+uo);
  const hx=430,run=70,rise=48,foot=1100+87*1.05,o=(uo*150)%run;
  const kx=250,i=Math.round((kx+o-hx)/run),ky=foot-i*rise+o*rise/run;
  e6Child(kx,ky,.62,{f:1,walk:uo*9,both:true,look:.7});
});

// 5. a parede das fotos com uma foto NOVA, marcada com um círculo (1213.2–1215.6)
scene(1213.2,1215.6,(t)=>{const u=t-1213.2;ctx.fillStyle='#2b2018';ctx.fillRect(0,0,W,H);
  const z=lerp(1.0,1.25,ease(seg(u,0,2.4)));ctx.save();ctx.translate(560,820);ctx.scale(z,z);ctx.translate(-560,-820);
  ctx.fillStyle='#4a3a2e';ctx.fillRect(0,0,W,1500);ctx.fillStyle='rgba(0,0,0,.15)';for(let x=0;x<W;x+=90)ctx.fillRect(x,0,4,1500);
  const r=rng(5);for(let i=0;i<12;i++){if(i==5)continue;ctx.save();ctx.translate(150+(i%4)*260+r()*30,330+Math.floor(i/4)*380+r()*30);ctx.rotate((r()-.5)*.3);ctx.fillStyle='#f3efe6';ctx.fillRect(-95,-112,190,224);ctx.fillStyle=['#5a7aa0','#c97b4a','#3f7a4a','#8a6a9a'][i%4];ctx.fillRect(-80,-97,160,160);ctx.restore()}
  ctx.strokeStyle='rgba(200,30,30,.8)';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(150,220);ctx.lineTo(410,250);ctx.lineTo(670,210);ctx.lineTo(930,240);ctx.stroke();
  e9NewPhoto(560,820,230,.05,'dia 48');
  const k=easeOut(seg(u,.5,1.2));ctx.strokeStyle='#e53030';ctx.lineWidth=10;ctx.beginPath();ctx.ellipse(560,820,190,210,0,-1.6,-1.6+k*6.3);ctx.stroke();
  ctx.restore();ctx.fillStyle='#1d1610';ctx.fillRect(0,1500,W,420);
  personFront(W/2,1700,1.2,{back:true});vignette(.5);
});

// 6. close na foto nova: são eles dois, na janela do quarto, agora há pouco (1215.8–1219)
scene(1215.8,1219,(t)=>{const u=t-1215.8;ctx.fillStyle='#3a2c22';ctx.fillRect(0,0,W,H);
  const z=lerp(1,1.12,ease(seg(u,0,3.2)));ctx.save();ctx.translate(W/2,H*.47);ctx.scale(z,z);ctx.rotate(-.03);e9NewPhoto(0,0,820,0,'dia 48 — 21:59');ctx.restore();
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${(1-u/.12)*.8})`;ctx.fillRect(0,0,W,H)}
  if(u>1.4){ctx.fillStyle=`rgba(200,20,20,${.10+.07*Math.sin(u*9)})`;ctx.fillRect(0,0,W,H)}
});

// 7. a mesa: a câmera ao lado de um caderno aberto (1219.2–1222)
function e9Desk(u,o){o=o||{};ctx.fillStyle='#22180f';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,1000,60,W/2,1000,1000);g.addColorStop(0,'rgba(255,210,140,.4)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#6b4a34';ctx.fillRect(0,820,W,1100);ctx.fillStyle='rgba(0,0,0,.2)';for(let y=850;y<H;y+=70)ctx.fillRect(0,y,W,3);
  // câmera (a mesma do EP. 3) à esquerda
  const cx=250,cy=1000;ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillStyle='#2a2b31';rr(cx-200,cy-100,400,200,24);ctx.fill();ctx.stroke();ctx.fillStyle='#3a3b44';rr(cx-120,cy-140,130,46,10);ctx.fill();ctx.stroke();
  ctx.fillStyle='#1a1b20';ctx.beginPath();ctx.arc(cx,cy,78,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#4a6a8a';ctx.beginPath();ctx.arc(cx,cy,48,0,7);ctx.fill();ctx.fillStyle='rgba(255,255,255,.4)';ctx.beginPath();ctx.arc(cx-16,cy-16,13,0,7);ctx.fill();
  ctx.fillStyle='#ff3b3b';ctx.beginPath();ctx.arc(cx+150,cy-115,8+2*Math.sin(u*8),0,7);ctx.fill();
  // o caderno aberto, à direita
  e9Diary(720,1340,.62,{left:['Dia 1.','Acordei, e todo','mundo tinha','sumido.'],right:['Dia 48.','Ela achou ele.','Agora somos','três.'],k:1,tape:true,stick:1});
}
scene(1219.2,1222,(t)=>{const u=t-1219.2;const k=ease(seg(u,0,2.8));ctx.save();ctx.translate(lerp(0,-260,k),lerp(0,-300,k));const z=lerp(1,1.3,k);ctx.translate(720,1340);ctx.scale(z,z);ctx.translate(-720,-1340);e9Desk(u);ctx.restore();vignette(.5)});

// 8. é um diário: a capa, "DIÁRIO", com um adesivo de câmera — e ele abre (1222.2–1225)
scene(1222.2,1225,(t)=>{const u=t-1222.2;ctx.fillStyle='#1f160e';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,900,60,W/2,900,1000);g.addColorStop(0,'rgba(255,210,140,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const z=lerp(1,1.08,u/2.8);ctx.save();ctx.translate(W/2,960);ctx.scale(z,z);ctx.rotate(-.04);
  ctx.fillStyle='rgba(0,0,0,.35)';ctx.fillRect(-330,-440,680,900);ctx.fillStyle='#6a3a26';ctx.beginPath();rr(-340,-450,680,900,24);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();
  ctx.fillStyle='#8a2a2a';ctx.fillRect(220,-450,40,900);
  ctx.fillStyle='#f3ecda';ctx.beginPath();rr(-230,-300,420,150,14);ctx.fill();ctx.fillStyle='#2f2a40';ctx.font='700 104px Caveat';ctx.textAlign='center';ctx.fillText('DIÁRIO',-20,-190);
  // adesivo de câmera
  ctx.save();ctx.translate(-20,90);ctx.rotate(.08);ctx.fillStyle='#e8e2d0';ctx.beginPath();rr(-130,-90,260,180,30);ctx.fill();ctx.fillStyle='#2a2b31';ctx.beginPath();rr(-90,-50,180,110,16);ctx.fill();ctx.fillStyle='#4a6a8a';ctx.beginPath();ctx.arc(0,5,36,0,7);ctx.fill();ctx.fillStyle='#3a3b44';ctx.fillRect(-60,-72,60,24);ctx.restore();
  ctx.textAlign='left';ctx.restore();
  // a mão dele entra para abrir
  const hk=easeOut(seg(u,1.4,2.6));ctx.save();ctx.translate(lerp(1250,900,hk),1180);ctx.rotate(-.3);ctx.fillStyle='#e2683c';ctx.fillRect(40,-60,500,140);ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.strokeRect(40,-60,500,140);ctx.fillStyle='#e8b48c';ctx.beginPath();ctx.ellipse(0,10,70,58,0,0,7);ctx.fill();ctx.stroke();ctx.restore();
  vignette(.5);
});

// 9. a primeira página: a letra aparece — "Dia 1. Acordei, e todo mundo tinha sumido." (1225.2–1232)
scene(1225.2,1232,(t)=>{const u=t-1225.2;ctx.fillStyle='#1f160e';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,900,60,W/2,900,1000);g.addColorStop(0,'rgba(255,210,140,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const z=lerp(1.05,1.2,ease(seg(u,0,6.8)));ctx.save();ctx.translate(W/2,960);ctx.scale(z,z);ctx.translate(-W/2,-960);
  e9Diary(W/2+170,960,1.12,{left:['Dia 1.','Acordei, e todo','mundo tinha','sumido.'],k:seg(u,2.2,5.6),tape:false});ctx.restore();
  vignette(.5);
});

// 10. a letra é a mesma da carta da praça: o diário (esquerda) x a carta (direita), com as letras iguais destacadas (1232.2–1235)
scene(1232.2,1235,(t)=>{const u=t-1232.2;ctx.fillStyle='#1f160e';ctx.fillRect(0,0,W,H);
  const k1=easeOut(seg(u,0,.6)),k2=easeOut(seg(u,.4,1.0));
  ctx.save();ctx.translate(lerp(-400,290,k1),760);ctx.rotate(-.05);ctx.fillStyle='#f3ecda';ctx.fillRect(-250,-330,500,660);ctx.fillStyle='rgba(80,110,170,.25)';for(let y=-250;y<300;y+=56)ctx.fillRect(-220,y,440,3);
    ctx.fillStyle='#8a2a2a';ctx.font='700 70px Caveat';ctx.fillText('Dia 1.',-210,-210);ctx.fillStyle='#1f2f6b';ctx.font='600 56px Caveat';ctx.fillText('Acordei, e todo',-210,-140);ctx.fillText('mundo tinha',-210,-80);ctx.fillText('sumido.',-210,-20);
    ctx.fillStyle='#2f2a40';ctx.font='700 40px Inter';ctx.fillText('DIÁRIO',-210,280);ctx.restore();
  ctx.save();ctx.translate(lerp(1480,790,k2),1220);ctx.rotate(.06);ctx.fillStyle='#f4ecd6';ctx.fillRect(-250,-330,500,660);
    ctx.fillStyle='#1f2f6b';ctx.font='600 56px Caveat';ctx.fillText('Se você está lendo',-210,-220);ctx.fillText('isso, você não',-210,-150);ctx.fillText('está sozinho.',-210,-80);ctx.fillText('— Alguém',-210,60);ctx.fillStyle='#2f2a40';ctx.font='700 40px Inter';ctx.fillText('A CARTA DA PRAÇA',-220,280);ctx.restore();
  if(u>1.2){const p=.5+.5*Math.sin(u*8);ctx.strokeStyle=`rgba(255,216,74,${.6+.4*p})`;ctx.lineWidth=9;ctx.beginPath();ctx.ellipse(170,620,140,60,-.05,0,7);ctx.stroke();ctx.beginPath();ctx.ellipse(700,1010,170,60,.06,0,7);ctx.stroke();
    ctx.setLineDash([24,18]);ctx.beginPath();ctx.moveTo(300,660);ctx.quadraticCurveTo(560,760,620,960);ctx.stroke();ctx.setLineDash([]);
    ctx.fillStyle='#ffd84a';ctx.font='900 160px Inter';ctx.textAlign='center';ctx.fillText('=',W/2+40,880);ctx.textAlign='left'}
  vignette(.5);
});

// 11. o rosto dele: "ele também acordou sozinho!" (1235.2–1238)
scene(1235.2,1238,(t)=>{const u=t-1235.2;ctx.fillStyle='#22180f';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.5,100,W/2,H*.5,1000);g.addColorStop(0,'rgba(255,200,130,.30)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  face(W/2,H*.52,1.2+u*.04,{open:1.3,eye:1.3,brow:-.6,mouthO:.5,pupil:.6,px:0});
  if(u<.15){ctx.fillStyle=`rgba(255,255,255,${(1-u/.15)*.6})`;ctx.fillRect(0,0,W,H)}
});

// 12. a última página: "Dia 48. Ela achou ele. Agora somos três." + bonequinhos (1238.2–1245)
scene(1238.2,1245,(t)=>{const u=t-1238.2;ctx.fillStyle='#1f160e';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,900,60,W/2,900,1000);g.addColorStop(0,'rgba(255,210,140,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const fl=easeOut(seg(u,0,.7));const z=lerp(1.05,1.18,ease(seg(u,.7,6.8)));ctx.save();ctx.translate(W/2,960);ctx.scale(z,z);ctx.translate(-W/2,-960);
  e9Diary(W/2-170,960,1.12,{right:['Dia 48.','Ela achou ele.','Agora somos','três.'],k:seg(u,.8,4.6),stick:seg(u,4.4,5.2)});
  // folha virando (só no começo)
  if(fl<1){ctx.save();ctx.translate(W/2-170,960);ctx.scale(1.12*(1-fl*2),1.12);ctx.fillStyle='#e9e1cc';ctx.fillRect(0,-310,434,620);ctx.restore()}
  ctx.restore();vignette(.5);
});

// 13. o tripé na janela, apontado para o prédio dele lá longe: ele estava esperando. Os dois olham, de costas (1245.2–1248)
scene(1245.2,1248,(t)=>{const u=t-1245.2;ctx.fillStyle='#2b2018';ctx.fillRect(0,0,W,H);
  const z=lerp(1,1.08,ease(seg(u,0,2.8)));ctx.save();ctx.translate(W/2,900);ctx.scale(z,z);ctx.translate(-W/2,-900);
  ctx.fillStyle='#4a3a2e';ctx.fillRect(0,0,W,1500);
  // janela grande com a cidade escura, estrelas e o prédio dele (janela com cortinas vinho)
  ctx.fillStyle=lg(300,1100,['#0a0f26','#18204a']);ctx.fillRect(160,300,760,800);
  const r=rng(12);for(let i=0;i<50;i++){ctx.fillStyle=`rgba(255,255,255,${.3+.5*r()})`;ctx.fillRect(160+r()*760,300+r()*380,3,3)}
  ctx.fillStyle='#0b0e22';for(let i=0;i<8;i++){const bh=200+((i*71)%5)*60;ctx.fillRect(160+i*96,1100-bh,90,bh)}
  ctx.fillStyle='#262a40';ctx.fillRect(250,820,150,280);ctx.fillStyle='#3a4670';ctx.fillRect(296,880,46,40);ctx.fillStyle='#7a2a46';ctx.fillRect(290,876,10,48);ctx.fillRect(338,876,10,48);
  ctx.strokeStyle='#2b2638';ctx.lineWidth=24;ctx.strokeRect(160,300,760,800);ctx.fillStyle='#2b2638';ctx.fillRect(530,300,20,800);
  // tripé com a câmera, apontando para o prédio dele
  ctx.strokeStyle='#1a1a1e';ctx.lineWidth=12;ctx.beginPath();ctx.moveTo(700,1080);ctx.lineTo(600,1480);ctx.moveTo(700,1080);ctx.lineTo(800,1480);ctx.moveTo(700,1080);ctx.lineTo(710,1480);ctx.stroke();
  ctx.save();ctx.translate(700,1040);ctx.rotate(-.12);ctx.fillStyle='#2a2b31';ctx.beginPath();rr(-110,-60,220,120,16);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.stroke();ctx.fillStyle='#16171c';ctx.beginPath();ctx.ellipse(-130,0,40,50,0,0,7);ctx.fill();ctx.stroke();ctx.restore();
  // linha pontilhada da lente até a janela dele
  const k=seg(u,.6,1.6);ctx.setLineDash([18,14]);ctx.strokeStyle='rgba(255,216,74,.85)';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(560,1030);ctx.lineTo(lerp(560,330,k),lerp(1030,900,k));ctx.stroke();ctx.setLineDash([]);
  ctx.restore();ctx.fillStyle='#1d1610';ctx.fillRect(0,1500,W,420);
  personFront(420,1720,1.15,{back:true});e6Child(250,1860,.75,{back:true,both:true});
  vignette(.5);
});

// 14. fala com o público: ele, de frente, com o diário na mão (1248.2–1251)
scene(1248.2,1251,(t)=>{const u=t-1248.2;ctx.fillStyle='#2b2018';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#4a3a2e';ctx.fillRect(0,0,W,1500);const r=rng(5);for(let i=0;i<8;i++){ctx.save();ctx.translate(140+(i%4)*270,380+Math.floor(i/4)*420);ctx.rotate((r()-.5)*.3);ctx.fillStyle='rgba(243,239,230,.6)';ctx.fillRect(-90,-106,180,212);ctx.restore()}
  ctx.fillStyle='rgba(0,0,0,.45)';ctx.fillRect(0,0,W,H);
  const z=lerp(1.6,1.8,ease(seg(u,0,2.8)));personTurn(W/2,1500,z,{eye:1.15,brow:.35,lid:0},Math.sin(u*1.2)*.25);
  // o diário na mão
  ctx.save();ctx.translate(W/2+150,1520);ctx.rotate(-.15);ctx.fillStyle='#6a3a26';ctx.beginPath();rr(-110,-150,220,300,14);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.stroke();ctx.fillStyle='#f3ecda';ctx.fillRect(-70,-90,140,50);ctx.restore();
  vignette(.6);
});

// 15. passos no corredor: a porta, a sombra crescendo no vão; a menina se esconde atrás das pernas dele (1251.2–1254)
scene(1251.2,1254,(t)=>{const u=t-1251.2;e9Doorway(u,{who:0});
  const k=seg(u,.4,2.8);ctx.save();ctx.beginPath();ctx.rect(300,380,480,1120);ctx.clip();ctx.fillStyle=`rgba(0,0,0,${.55*k})`;ctx.beginPath();ctx.ellipse(lerp(820,580,k),1460,lerp(40,160,k),40,0,0,7);ctx.fill();
    const sx=lerp(860,560,k),ss=lerp(.4,1,k);ctx.fillStyle=`rgba(0,0,0,${.6*k})`;ctx.beginPath();ctx.ellipse(sx,1440-ss*700,ss*60,ss*70,0,0,7);ctx.fill();ctx.beginPath();ctx.moveTo(sx-ss*110,1460);ctx.quadraticCurveTo(sx-ss*130,1440-ss*560,sx,1440-ss*620);ctx.quadraticCurveTo(sx+ss*130,1440-ss*560,sx+ss*110,1460);ctx.closePath();ctx.fill();ctx.restore();
  const sh=Math.sin(u*18)*3*(u>.4?1:0);ctx.save();ctx.translate(sh,0);
  personFront(150,1820,1.4,{back:true});e8Kid(330,1900,.6,{u,hide:1,peek:1,tremble:1});ctx.restore();
  vignette(.5);
});

// 16. na porta, um homem alto, com uma câmera no rosto — FLASH (1254.2–1257)
scene(1254.2,1257,(t)=>{const u=t-1254.2;const z=lerp(1.0,1.12,ease(seg(u,0,2.8)));ctx.save();ctx.translate(W/2,1000);ctx.scale(z,z);ctx.translate(-W/2,-1000);
  e9Doorway(u,{who:seg(u,0,1.2),cam:1,flash:(u>1.7&&u<2.1)?1-seg(u,1.7,2.1):0});ctx.restore();vignette(.45);
});

// 17. ele baixa a câmera, bem devagar: o chapéu deixa os olhos na sombra; só os óculos brilham (1257.2–1260)
scene(1257.2,1260,(t)=>{const u=t-1257.2;const z=lerp(1.5,1.75,ease(seg(u,0,2.8)));ctx.save();ctx.translate(540,1500-1.08*780);ctx.scale(z,z);ctx.translate(-540,-(1500-1.08*780));
  e9Doorway(u,{who:1,cam:lerp(1,0,ease(seg(u,.3,2.4))),smile:seg(u,1.8,2.6)});ctx.restore();vignette(.55);
});

// 18. escolha (1260.2–1267)
scene(1260.2,1267,(t)=>{const u=t-1260.2;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=.45;e9Photog(800,1880,.9,{cam:0});ctx.save();ctx.translate(250,1560);ctx.rotate(-.1);ctx.fillStyle='#6a3a26';ctx.beginPath();rr(-150,-200,300,400,18);ctx.fill();ctx.fillStyle='#f3ecda';ctx.fillRect(-100,-130,200,70);ctx.restore();ctx.restore();
  ctx.fillStyle='rgba(10,8,14,.42)';ctx.fillRect(0,0,W,H);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,120,80,.92)';rr(70,430,940,200,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,580);ctx.font='800 48px Inter';ctx.fillText('Ouvir o fotógrafo',250,555);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,670,940,200,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,820);ctx.font='800 46px Inter';ctx.fillText('Pegar o diário e fugir',250,795);ctx.restore();
});

// 2b. a menina puxa a mão dele, com medo: treme, sobrancelhas preocupadas, boquinha triste (1270–1272.4)
scene(1270,1272.4,(t)=>{const u=t-1270;ctx.fillStyle='#141322';ctx.fillRect(0,0,W,H);
  e7Bedroom(u,{photo:true,mm:13,win13:true});ctx.fillStyle='rgba(8,8,16,.35)';ctx.fillRect(0,0,W,H);
  e8Kid(360,1640,1.15,{u,reach:1,tremble:1,smile:-14,py:-6});
  const hx=lerp(760,640,easeOut(seg(u,.4,2)));ctx.save();ctx.translate(hx,1280);ctx.rotate(.1);ctx.fillStyle='#f0c49a';ctx.beginPath();ctx.ellipse(0,0,56,78,0,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.restore();
  vignette(.5);
});

// 19. cartela final (1285–1288.2)
scene(1285,1288.2,(t)=>{const u=t-1285;ctx.fillStyle='#050507';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.45,50,W/2,H*.45,900);g.addColorStop(0,'rgba(200,30,30,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.4);ctx.scale(k,k);ctx.textAlign='center';
  const gl=u<.5||(u%1.3<.08)?1:0;ctx.font='900 118px Inter';
  if(gl){ctx.fillStyle='rgba(255,0,60,.7)';ctx.fillText('E SE SOBRASSE',-8,0);ctx.fillStyle='rgba(0,220,255,.7)';ctx.fillText('E SE SOBRASSE',8,0)}
  ctx.fillStyle='#fff';ctx.fillText('E SE SOBRASSE',0,0);ctx.font='900 220px Inter';ctx.fillStyle='#ff3b3b';ctx.fillText('SÓ UM?',0,220);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 10 · EM BREVE',W/2,H*.4+420);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.4+520);ctx.restore()});
