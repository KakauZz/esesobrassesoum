// ===================== EP. 4 (B) — O DIÁRIO =====================
// (vencedora do EP. 3: B — ficar e descobrir quem é)
function vignette(a){const v=ctx.createRadialGradient(W/2,H*.5,300,W/2,H*.5,1100);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,`rgba(0,0,0,${a??.6})`);ctx.fillStyle=v;ctx.fillRect(0,0,W,H)}
function roomWall(){ctx.fillStyle='#4a3a2e';ctx.fillRect(0,0,W,1500);ctx.fillStyle='rgba(0,0,0,.15)';for(let x=0;x<W;x+=90)ctx.fillRect(x,0,4,1500);ctx.fillStyle='#1d1610';ctx.fillRect(0,1500,W,420)}
function wallPhotos(alpha){ctx.save();ctx.globalAlpha=alpha??1;const r=rng(17);for(let i=0;i<12;i++){ctx.fillStyle='#f3efe6';ctx.save();ctx.translate(100+(i%4)*290+r()*30,200+Math.floor(i/4)*330);ctx.rotate((r()-.5)*.3);ctx.fillRect(-90,-110,180,220);ctx.fillStyle=['#5a7aa0','#c97b4a','#3f7a4a','#8a6a9a'][i%4];ctx.fillRect(-76,-96,152,152);ctx.restore()}ctx.restore()}
function lamp(){const g=ctx.createRadialGradient(W/2,900,60,W/2,900,1000);g.addColorStop(0,'rgba(255,210,140,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H)}
function keyTag(x,y,s,rot){ctx.save();ctx.translate(x,y);ctx.rotate(rot||0);ctx.scale(s,s);ctx.strokeStyle=OUT;ctx.lineWidth=6;
  ctx.fillStyle='#d9b24a';ctx.beginPath();ctx.arc(0,0,46,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#4a3a2e';ctx.beginPath();ctx.arc(0,0,16,0,7);ctx.fill();
  ctx.fillStyle='#d9b24a';rr(40,-14,190,28,6);ctx.fill();ctx.stroke();rr(180,14,18,30,3);ctx.fill();ctx.stroke();rr(210,14,14,22,3);ctx.fill();ctx.stroke();
  ctx.strokeStyle='#8a7a5a';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-30,-30);ctx.lineTo(-110,-120);ctx.stroke();
  ctx.save();ctx.translate(-150,-160);ctx.rotate(-.2);ctx.fillStyle='#f3efe6';ctx.strokeStyle=OUT;ctx.lineWidth=5;rr(-90,-55,180,110,12);ctx.fill();ctx.stroke();
  ctx.fillStyle='#b71c1c';ctx.font='700 80px Caveat';ctx.textAlign='center';ctx.fillText('13B',0,28);ctx.textAlign='left';ctx.restore();ctx.restore()}
function book(x,y,w,h,open){ctx.save();ctx.translate(x,y);ctx.strokeStyle=OUT;ctx.lineWidth=7;
  if(!open){ctx.fillStyle='#5b3a26';rr(-w/2,-h/2,w,h,16);ctx.fill();ctx.stroke();ctx.fillStyle='#4a2e1e';ctx.fillRect(-w/2,-h/2,30,h)}
  else{ctx.fillStyle='#5b3a26';rr(-w/2-14,-h/2-12,w+28,h+24,16);ctx.fill();ctx.stroke();ctx.fillStyle='#f3ecd8';rr(-w/2,-h/2,w/2-4,h,8);ctx.fill();rr(4,-h/2,w/2-4,h,8);ctx.fill();
    ctx.fillStyle='rgba(0,0,0,.12)';ctx.fillRect(-6,-h/2,12,h);ctx.strokeStyle='rgba(90,120,170,.25)';ctx.lineWidth=2;for(let yy=-h/2+60;yy<h/2-20;yy+=48){ctx.beginPath();ctx.moveTo(-w/2+20,yy);ctx.lineTo(-20,yy);ctx.moveTo(20,yy);ctx.lineTo(w/2-20,yy);ctx.stroke()}}
  ctx.restore()}
function writeText(lines,x,y,lh,k,size,col){ctx.save();ctx.fillStyle=col||'#22304a';ctx.font=`700 ${size||54}px Caveat`;const tot=lines.join('').length;let n=Math.floor(k*tot);
  for(let i=0;i<lines.length;i++){const L=lines[i];const show=L.slice(0,Math.max(0,n));n-=L.length;ctx.fillText(show,x,y+i*lh)}ctx.restore()}
function cityNight(y0){sky('#05071a','#0f1430','#1f1d40');const r=rng(91);for(let i=0;i<120;i++){ctx.fillStyle=`rgba(255,255,255,${.3+.5*r()})`;ctx.fillRect(r()*W,r()*y0*.7,2,2)}}
function oppositeBuilding(x,y,w,h,litIdx,lit,fog){ctx.fillStyle='#161a36';ctx.fillRect(x,y,w,h);ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=3;ctx.strokeRect(x,y,w,h);
  let k=0;for(let r_=0;r_<6;r_++)for(let c=0;c<4;c++){const wx=x+30+c*(w-60)/4,wy=y+40+r_*(h-80)/6,ww=(w-60)/4-24,wh=(h-80)/6-30;const L=(k==litIdx)&&lit;ctx.fillStyle=L?'#ffd682':'rgba(255,255,255,.05)';ctx.fillRect(wx,wy,ww,wh);
    if(L){const g=ctx.createRadialGradient(wx+ww/2,wy+wh/2,4,wx+ww/2,wy+wh/2,ww*2.4);g.addColorStop(0,'rgba(255,200,110,.45)');g.addColorStop(1,'rgba(255,200,110,0)');ctx.fillStyle=g;ctx.fillRect(wx-ww*2.4,wy-ww*2.4,ww*5.8,ww*5.8)}k++}}

// 1. recap (700–703.8)
scene(700,703.8,(t)=>{const u=t-700;ctx.fillStyle=lg(0,H,['#120c1e','#24163a','#0d0a16']);ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,40,W/2,H*.42,900);g.addColorStop(0,'rgba(200,70,70,.25)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 50px "DejaVu Sans Mono", monospace';ctx.globalAlpha=easeOut(seg(u,0,.4));ctx.fillText('NO EPISÓDIO 3, VOCÊS ESCOLHERAM',W/2,520);ctx.globalAlpha=1;ctx.textAlign='left';
  const ka_=easeOut(seg(u,.9,1.5));ctx.save();ctx.globalAlpha=1-ka_;ctx.translate(-ka_*700,0);ctx.fillStyle='rgba(30,120,80,.92)';rr(70,660,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,805);ctx.font='800 50px Inter';ctx.fillText('Correr atrás da sombra',250,780);ctx.restore();
  const kb=easeBack(seg(u,1.2,1.8)),sc=1+kb*.12,yy=lerp(900,800,kb);
  ctx.save();ctx.translate(W/2,yy+95);ctx.scale(sc,sc);ctx.translate(-W/2,-(yy+95));
  ctx.fillStyle='rgba(170,60,60,.96)';rr(70,yy,940,190,36);ctx.fill();ctx.strokeStyle='rgba(255,255,255,'+(.25+.25*Math.sin(u*6))+')';ctx.lineWidth=6;ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,yy+145);ctx.font='800 50px Inter';ctx.fillText('Ficar e descobrir quem é',250,yy+120);
  if(u>1.6){const k=easeBack(seg(u,1.6,2));ctx.save();ctx.translate(930,yy+40);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.arc(0,0,58,0,7);ctx.fill();ctx.strokeStyle='#1c1422';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-26,2);ctx.lineTo(-6,22);ctx.lineTo(28,-20);ctx.stroke();ctx.restore()}
  ctx.restore();
  if(u>1.6){const r=rng(9);for(let i=0;i<40;i++){const a=r()*7,sp=300+r()*500,k=seg(u,1.6,3.2),x=W/2+Math.cos(a)*sp*k,y=900+Math.sin(a)*sp*k+k*k*300;ctx.fillStyle=['#ffd84a','#ff6b6b','#fff'][i%3];ctx.globalAlpha=1-k;ctx.fillRect(x,y,10,16);ctx.globalAlpha=1}}
});

// 2. ele fecha a porta e volta pra sala (704–707.8). Câmera dentro da sala, olhando a porta.
scene(704,707.8,(t)=>{const u=t-704;roomWall();lamp();
  // porta (vista de frente), fechando: a fresta de luz do corredor diminui
  const op=1-easeOut(seg(u,.3,1.6));ctx.fillStyle='#0b0b12';ctx.fillRect(330,420,420,1080);
  ctx.fillStyle='rgba(200,210,255,.35)';ctx.fillRect(330,420,420*op*.6,1080);
  ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillStyle='#5a3d2c';ctx.fillRect(330+420*op*.6,420,420*(1-op*.6),1080);ctx.strokeRect(330,420,420,1080);
  ctx.fillStyle='#d8b26a';ctx.beginPath();ctx.arc(330+420*op*.6+40,960,16,0,7);ctx.fill();ctx.stroke();
  ctx.strokeStyle='#2a1d16';ctx.lineWidth=16;ctx.strokeRect(322,412,436,1096);
  // ele: de costas empurrando a porta, depois vira pra sala (de frente pra câmera)
  const turn=easeOut(seg(u,1.8,2.8));
  if(turn<.5)personFront(560,1720,1.25,{back:true});else personFront(560,1720,1.25,{brow:-.4,eye:1.1});
  vignette(.5);
});

// 3. a mesa: ele procura pistas (708–713.8). Câmera atrás dele, de frente pra mesa.
scene(708,713.8,(t)=>{const u=t-708;roomWall();wallPhotos(.9);lamp();
  ctx.fillStyle='#6b4a34';ctx.fillRect(80,1180,920,90);ctx.fillStyle='#4e3424';ctx.fillRect(110,1270,40,250);ctx.fillRect(930,1270,40,250);
  ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.fillStyle='#4e3424';rr(380,1272,320,120,8);ctx.fill();ctx.stroke();ctx.fillStyle='#d8b26a';ctx.beginPath();ctx.arc(540,1332,10,0,7);ctx.fill();ctx.fillStyle='#111';ctx.fillRect(536,1340,8,14);
  // câmera e calendário em cima da mesa
  ctx.fillStyle='#2a2b31';rr(640,1080,200,110,18);ctx.fill();ctx.stroke();ctx.fillStyle='#1a1b20';ctx.beginPath();ctx.arc(740,1135,40,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle='#f3efe6';rr(200,1060,240,130,8);ctx.fill();ctx.stroke();ctx.fillStyle='#b71c1c';ctx.fillRect(200,1060,240,30);
  // ele de costas, cabeça virando de um lado pro outro (procurando)
  personFront(540,1900,1.5,{back:true,look:Math.sin(u*1.6)*.8});
  vignette(.55);
});

// 4. embaixo da câmera: uma chave colada, etiqueta 13B (714–717.8)
scene(714,717.8,(t)=>{const u=t-714;ctx.fillStyle='#5a3e2c';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(0,0,0,.18)';for(let y=0;y<H;y+=70)ctx.fillRect(0,y,W,3);lamp();
  // câmera sendo levantada (sobe e sai de cena), revelando a chave colada com fita
  const lift=easeOut(seg(u,.2,1.4));ctx.strokeStyle=OUT;ctx.lineWidth=8;
  keyTag(560,1000,1.4,-.25);ctx.fillStyle='rgba(230,230,200,.55)';ctx.save();ctx.translate(600,990);ctx.rotate(-.25);ctx.fillRect(-160,-40,320,80);ctx.restore();
  ctx.save();ctx.translate(0,-lift*1400);ctx.fillStyle='#2a2b31';rr(190,600,700,520,40);ctx.fill();ctx.stroke();ctx.fillStyle='#1a1b20';ctx.beginPath();ctx.arc(540,860,170,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#4a6a8a';ctx.beginPath();ctx.arc(540,860,110,0,7);ctx.fill();ctx.restore();
  if(u>2){const k=.5+.5*Math.sin(u*6);ctx.strokeStyle=`rgba(255,220,120,${.5*k})`;ctx.lineWidth=8;ctx.beginPath();ctx.arc(410,830,150,0,7);ctx.stroke()}
  vignette(.5);
});

// 5. a gaveta: a chave gira, a gaveta abre, o diário lá dentro (718–721.8)
scene(718,721.8,(t)=>{const u=t-718;ctx.fillStyle='#3e2a1c';ctx.fillRect(0,0,W,H);lamp();
  const op=easeOut(seg(u,1.4,2.6));ctx.strokeStyle=OUT;ctx.lineWidth=8;
  // interior da gaveta (aparece quando abre)
  if(op>0){ctx.fillStyle='#2a1c12';ctx.fillRect(140,700-op*360,800,op*360);book(540,700-op*190,520,op*300,false);
    ctx.save();ctx.globalAlpha=op;ctx.fillStyle='#e8d9b0';ctx.font='700 64px Caveat';ctx.textAlign='center';ctx.fillText('Diário',540,700-op*190);ctx.textAlign='left';ctx.restore()}
  // frente da gaveta
  ctx.fillStyle='#6b4a34';rr(100,700+op*120,880,420,16);ctx.fill();ctx.stroke();ctx.fillStyle='#d8b26a';rr(470,820+op*120,140,40,12);ctx.fill();ctx.stroke();
  // fechadura e chave girando
  ctx.fillStyle='#111';ctx.beginPath();ctx.arc(540,960+op*120,26,0,7);ctx.fill();
  const rot=easeOut(seg(u,.3,1.2))*Math.PI/2;ctx.save();ctx.translate(540,960+op*120);ctx.rotate(rot);ctx.fillStyle='#d9b24a';ctx.strokeStyle=OUT;ctx.lineWidth=5;rr(-12,-12,24,150,6);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(0,170,42,0,7);ctx.fill();ctx.stroke();ctx.restore();
  vignette(.5);
});

// 6. capa do diário ao lado da carta da praça: a MESMA letra (722–725.8)
scene(722,725.8,(t)=>{const u=t-722;ctx.fillStyle='#4a3424';ctx.fillRect(0,0,W,H);lamp();
  book(330,780,460,620,false);ctx.fillStyle='#e8d9b0';ctx.font='700 86px Caveat';ctx.textAlign='center';ctx.fillText('Diário',330,740);ctx.font='700 60px Caveat';ctx.fillText('dia 1',330,830);ctx.textAlign='left';
  // a carta (do EP. 1) entra ao lado
  const k=easeOut(seg(u,.8,1.8));ctx.save();ctx.translate(lerp(1400,800,k),1250);ctx.rotate(.08);ctx.fillStyle='#f3ecd8';ctx.strokeStyle=OUT;ctx.lineWidth=6;rr(-230,-300,460,600,10);ctx.fill();ctx.stroke();
  ctx.fillStyle='#22304a';ctx.font='700 46px Caveat';['Se você está','lendo isso,','você não está','sozinho.'].forEach((l,i)=>ctx.fillText(l,-190,-200+i*70));ctx.restore();
  // destaque comparando a letra
  if(u>2.2){const p=.5+.5*Math.sin(u*7);ctx.strokeStyle=`rgba(255,80,80,${.4+.4*p})`;ctx.lineWidth=7;ctx.beginPath();ctx.ellipse(330,790,190,110,0,0,7);ctx.stroke();ctx.beginPath();ctx.ellipse(800,1060,200,90,.08,0,7);ctx.stroke();
    ctx.setLineDash([18,14]);ctx.beginPath();ctx.moveTo(500,830);ctx.lineTo(620,1010);ctx.stroke();ctx.setLineDash([])}
  vignette(.5);
});

// 7. primeira página (726–731.8)
scene(726,731.8,(t)=>{const u=t-726;ctx.fillStyle='#3a2a1e';ctx.fillRect(0,0,W,H);lamp();
  const z=lerp(1,1.12,ease(seg(u,0,5.8)));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(z,z);ctx.translate(-W/2,-H*.5);
  book(540,960,960,1100,true);
  ctx.fillStyle='#b71c1c';ctx.font='700 58px Caveat';ctx.fillText('Dia 1',90,520);
  writeText(['Ele acordou.','Eu também.'],90,640,96,seg(u,.6,2.4),62);
  writeText(['Mas ele ainda','não sabe que','eu existo.'],580,640,96,seg(u,2.8,5.2),62);
  ctx.restore();vignette(.55);
});

// 8. as páginas: cada dia dele, desenhado de longe (732–737.8)
scene(732,737.8,(t)=>{const u=t-732;ctx.fillStyle='#3a2a1e';ctx.fillRect(0,0,W,H);lamp();
  book(540,960,960,1100,true);
  const P=[[25,28,'dia 3 — mercado'],[220,222,'dia 9 — estádio'],[260,263,'dia 33 — asfalto']];
  const i=Math.min(2,Math.floor(u/1.95)),lu=u-i*1.95;
  // virada de página
  if(lu<.35){const k=lu/.35;ctx.fillStyle='#f3ecd8';ctx.save();ctx.translate(540,960);ctx.scale(1-k,1);ctx.fillRect(0,-550,470,1100);ctx.restore()}
  const [a,tt,lab]=P[i];polaroid(300,940,360,-.06,a,tt,1.55,null,null,lab);
  ctx.fillStyle='#22304a';ctx.font='700 54px Caveat';ctx.fillText(lab.split(' — ')[0],600,560);ctx.font='700 46px Caveat';['ele não me viu.','eu estava longe.'].forEach((l,j)=>ctx.fillText(l,600,660+j*80));
  // binóculo desenhado no canto da página (ele foi visto DE LONGE)
  ctx.strokeStyle='#22304a';ctx.lineWidth=5;ctx.beginPath();ctx.arc(700,1240,40,0,7);ctx.arc(800,1240,40,0,7);ctx.stroke();ctx.beginPath();ctx.moveTo(740,1240);ctx.lineTo(760,1240);ctx.stroke();
  vignette(.55);
});

// 9. a última página, escrita HOJE (738–742.8)
scene(738,742.8,(t)=>{const u=t-738;ctx.fillStyle='#3a2a1e';ctx.fillRect(0,0,W,H);lamp();
  book(540,960,960,1100,true);
  ctx.fillStyle='#b71c1c';ctx.font='700 58px Caveat';ctx.fillText('Dia 48',90,520);
  writeText(['Ele achou','a minha sala.'],90,640,96,seg(u,.3,1.8),62);
  writeText(['Agora ele','precisa','escolher.'],580,640,96,seg(u,2,3.8),66,'#b71c1c');
  // tinta ainda fresca (brilho)
  if(u>3.8){ctx.fillStyle=`rgba(255,255,255,${.25*(.5+.5*Math.sin(u*8))})`;ctx.fillRect(570,780,380,20)}
  vignette(.55);
});

// 10. o envelope lacrado na contracapa (743–746.8)
scene(743,746.8,(t)=>{const u=t-743;ctx.fillStyle='#3a2a1e';ctx.fillRect(0,0,W,H);lamp();
  ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillStyle='#5b3a26';rr(110,360,860,1200,18);ctx.fill();ctx.stroke();
  const k=easeOut(seg(u,.2,1.4));ctx.save();ctx.translate(540,lerp(1200,960,k));ctx.rotate(-.04);
  ctx.fillStyle='#efe3c4';rr(-330,-220,660,440,10);ctx.fill();ctx.stroke();ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-330,-220);ctx.lineTo(0,30);ctx.lineTo(330,-220);ctx.stroke();
  ctx.fillStyle='#a11';ctx.beginPath();ctx.arc(0,30,52,0,7);ctx.fill();ctx.fillStyle='#d33';ctx.beginPath();ctx.arc(-10,20,20,0,7);ctx.fill();
  ctx.fillStyle='#22304a';ctx.font='700 60px Caveat';ctx.textAlign='center';ctx.fillText('Só abra no',0,150);ctx.fillStyle='#b71c1c';ctx.font='700 72px Caveat';ctx.fillText('dia 60',0,215);ctx.textAlign='left';ctx.restore();
  vignette(.55);
});

// 11. a câmera apita: timer 3…2…1 (747–750.8)
scene(747,750.8,(t)=>{const u=t-747;ctx.fillStyle='#22180f';ctx.fillRect(0,0,W,H);lamp();
  const cx=540,cy=1000;ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillStyle='#2a2b31';rr(cx-360,cy-220,720,440,40);ctx.fill();ctx.stroke();
  ctx.fillStyle='#1a1b20';ctx.beginPath();ctx.arc(cx,cy,150,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#4a6a8a';ctx.beginPath();ctx.arc(cx,cy,95,0,7);ctx.fill();
  const n=u<1?3:(u<2?2:(u<3?1:0));const blink=(u%1)<.2;
  ctx.fillStyle=blink?'#ff3b3b':'#5a1414';ctx.beginPath();ctx.arc(cx+300,cy-170,22,0,7);ctx.fill();
  if(blink){ctx.strokeStyle='rgba(255,80,80,.5)';ctx.lineWidth=6;for(let i=0;i<2;i++){ctx.beginPath();ctx.arc(cx+300,cy-170,50+i*30,0,7);ctx.stroke()}}
  if(n>0){ctx.fillStyle='#fff';ctx.font='900 220px Inter';ctx.textAlign='center';ctx.globalAlpha=1-(u%1)*.6;ctx.fillText(String(n),cx,cy-300);ctx.globalAlpha=1;ctx.textAlign='left'}
  vignette(.55);
});

// 12. FLASH (751–752.8)
scene(751,752.8,(t)=>{const u=t-751;roomWall();wallPhotos(.8);const f=u<.4?1:Math.max(0,1-(u-.4)/1.2);ctx.fillStyle=`rgba(255,255,255,${f})`;ctx.fillRect(0,0,W,H)});

// 13. a foto na tela da câmera: ele na sala… e uma luz acesa no prédio da frente, atrás dele (753–758.8)
scene(753,758.8,(t)=>{const u=t-753;ctx.fillStyle='#0d0d12';ctx.fillRect(0,0,W,H);
  const z=lerp(1,1.6,ease(seg(u,2.4,5.6)));ctx.save();ctx.translate(820,800);ctx.scale(z,z);ctx.translate(-820,-800);
  ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillStyle='#2a2b31';rr(70,500,940,820,40);ctx.fill();ctx.stroke();
  const sx=120,sy=550,sw=840,sh=620;ctx.save();ctx.beginPath();ctx.rect(sx,sy,sw,sh);ctx.clip();
  ctx.fillStyle='#4a3a2e';ctx.fillRect(sx,sy,sw,sh);
  // janela da sala (atrás dele), com o prédio da frente e UMA luz acesa
  ctx.fillStyle='#0e1230';ctx.fillRect(sx+560,sy+70,220,260);ctx.fillStyle='#161a36';ctx.fillRect(sx+590,sy+110,160,220);
  for(let r_=0;r_<4;r_++)for(let c=0;c<3;c++){const L=(r_==1&&c==2);ctx.fillStyle=L?'#ffd682':'rgba(255,255,255,.06)';ctx.fillRect(sx+605+c*50,sy+125+r_*50,30,30)}
  ctx.strokeStyle='#2a1d16';ctx.lineWidth=10;ctx.strokeRect(sx+560,sy+70,220,260);
  ctx.fillStyle='#1d1610';ctx.fillRect(sx,sy+470,sw,150);
  ctx.save();ctx.translate(sx+330,sy+sh-10);ctx.scale(.62,.62);personFront(0,0,1,{noShadow:true,brow:-.3});ctx.restore();
  ctx.restore();
  ctx.fillStyle='#fff';ctx.font='700 34px "DejaVu Sans Mono", monospace';ctx.fillText('▶ 1/1',sx+20,sy+46);ctx.textAlign='right';ctx.fillStyle='#ffb04a';ctx.fillText('DIA 48  21:04',sx+sw-20,sy+sh-24);ctx.textAlign='left';
  // círculo na luz da janela
  if(u>2.4){ctx.strokeStyle=`rgba(255,80,80,${.5+.4*Math.sin(u*8)})`;ctx.lineWidth=5;ctx.beginPath();ctx.arc(sx+730,sy+190,40,0,7);ctx.stroke()}
  ctx.restore();
});

// 14. o rosto dele (759–762.8)
scene(759,762.8,(t)=>{const u=t-759;ctx.fillStyle='#120e10';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.5,100,W/2,H*.5,1000);g.addColorStop(0,'rgba(255,210,140,.28)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  face(W/2,H*.52,1.2+u*.05,{open:1.2,eye:1.3,brow:-.8,mouthO:.5,pupil:.6,px:lerp(-6,26,ease(seg(u,1.2,2.2)))});
});

// 15. ele corre até a janela (763–768.8). Câmera dentro da sala, atrás dele: ele vai em direção à janela (fica menor).
scene(763,768.8,(t)=>{const u=t-763;roomWall();
  // janela grande no fundo com a cidade
  ctx.save();ctx.beginPath();ctx.rect(240,300,600,820);ctx.clip();cityNight(1120);
  oppositeBuilding(300,420,480,700,9,Math.floor(u*2.2)%2==0,0);ctx.restore();
  ctx.strokeStyle='#2a1d16';ctx.lineWidth=18;ctx.strokeRect(240,300,600,820);ctx.beginPath();ctx.moveTo(540,300);ctx.lineTo(540,1120);ctx.stroke();
  ctx.fillStyle='#3a2a1e';ctx.fillRect(220,1120,640,40);
  const k=easeOut(seg(u,0,2.6)),bob=Math.abs(Math.sin(u*10))*14*(u<2.6?1:0);
  personFront(540,lerp(1950,1500,k)-bob,lerp(1.6,1.05,k),{back:true});
  vignette(.55);
});

// 16. a janela do prédio da frente: no vidro embaçado aparece "13B"; depois a luz apaga (769–774.8)
scene(769,774.8,(t)=>{const u=t-769;cityNight(1920);
  ctx.fillStyle='#161a36';ctx.fillRect(140,300,800,1500);
  const lit=u<5.2;ctx.fillStyle=lit?'#ffd682':'#1c2030';rr(240,520,600,760,10);ctx.fill();
  if(lit){const g=ctx.createRadialGradient(540,900,40,540,900,700);g.addColorStop(0,'rgba(255,200,110,.35)');g.addColorStop(1,'rgba(255,200,110,0)');ctx.fillStyle=g;ctx.fillRect(0,200,W,1400)}
  // vidro embaçado
  ctx.fillStyle=lit?'rgba(235,235,240,.55)':'rgba(120,130,150,.35)';rr(240,520,600,760,10);ctx.fill();
  // letras sendo escritas no embaçado (o traço "limpa" o vidro)
  const k=seg(u,.6,3.6);ctx.save();ctx.globalCompositeOperation='source-over';ctx.strokeStyle=lit?'rgba(255,214,130,.95)':'rgba(40,46,70,.9)';ctx.lineWidth=46;ctx.lineCap='round';ctx.lineJoin='round';
  const strokes=[[[330,760],[380,720],[380,1080]],[[460,740],[560,730],[500,880],[580,960],[470,1060]],[[640,720],[640,1080]],[[640,720],[740,760],[650,890],[760,960],[650,1070]]];
  const tot=strokes.reduce((a,s)=>a+s.length-1,0);let n=k*tot;
  for(const s of strokes){ctx.beginPath();ctx.moveTo(...s[0]);for(let i=1;i<s.length;i++){if(n<=0)break;const f=Math.min(1,n);const [x0,y0]=s[i-1],[x1,y1]=s[i];ctx.lineTo(x0+(x1-x0)*f,y0+(y1-y0)*f);n-=1}ctx.stroke();if(n<=0)break}
  ctx.restore();
  // gotinhas escorrendo das letras
  if(u>3.6&&lit){ctx.fillStyle='rgba(255,214,130,.8)';for(const x of [380,560,640,760]){const d=(u-3.6)*60;ctx.fillRect(x-4,1080+((x*7)%40),8,d)}}
  ctx.strokeStyle=OUT;ctx.lineWidth=12;ctx.strokeRect(240,520,600,760);
  vignette(.5);
});

// 17. a chave na mão dele: 13B, igual ao vidro (775–778.8)
scene(775,778.8,(t)=>{const u=t-775;ctx.fillStyle='#0d0e14';ctx.fillRect(0,0,W,H);
  // metade de cima: a janela com 13B (já apagada, letras escuras); metade de baixo: a etiqueta da chave
  ctx.fillStyle='#1c2030';rr(160,180,760,620,10);ctx.fill();ctx.fillStyle='rgba(120,130,150,.35)';rr(160,180,760,620,10);ctx.fill();
  ctx.fillStyle='rgba(40,46,70,.9)';ctx.font='700 300px Caveat';ctx.textAlign='center';ctx.fillText('13B',540,620);ctx.textAlign='left';ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.strokeRect(160,180,760,620);
  const k=easeOut(seg(u,.3,1.3));keyTag(lerp(1300,700,k),1480,1.5,-.15);
  if(u>1.6){const p=.5+.5*Math.sin(u*7);ctx.strokeStyle=`rgba(255,214,130,${.5+.4*p})`;ctx.lineWidth=7;ctx.setLineDash([20,16]);ctx.beginPath();ctx.moveTo(540,820);ctx.lineTo(480,1180);ctx.stroke();ctx.setLineDash([])}
  vignette(.5);
});

// 18. escolha (779–784.8)
scene(779,784.8,(t)=>{const u=t-779;roomWall();wallPhotos(.45);ctx.fillStyle='rgba(10,8,14,.5)';ctx.fillRect(0,0,W,H);
  // de um lado o prédio da frente na janela, do outro o envelope em cima do diário
  ctx.save();ctx.globalAlpha=.6;ctx.beginPath();ctx.rect(640,1000,360,440);ctx.clip();cityNight(1440);oppositeBuilding(680,1060,280,380,9,false,0);ctx.restore();
  ctx.save();ctx.globalAlpha=.7;book(250,1300,300,220,false);ctx.fillStyle='#efe3c4';ctx.save();ctx.translate(250,1230);ctx.rotate(-.1);rr(-120,-70,240,140,8);ctx.fill();ctx.fillStyle='#a11';ctx.beginPath();ctx.arc(0,0,22,0,7);ctx.fill();ctx.restore();ctx.restore();
  personTurn(540,1700,1.0,{eye:1.2,brow:-.5,lid:0},Math.sin(u*1.4)*.9);
  const ca=easeOut(seg(u,.8,1.4)),cb=easeOut(seg(u,1.2,1.8));
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,120,80,.92)';rr(70,420,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,565);ctx.font='800 50px Inter';ctx.fillText('Ir até o apartamento 13B',250,540);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,650,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,795);ctx.font='800 50px Inter';ctx.fillText('Abrir o envelope agora',250,770);ctx.restore();
});

// 19. cartela final (785–788.8)
scene(785,788.8,(t)=>{const u=t-785;ctx.fillStyle='#050507';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.45,50,W/2,H*.45,900);g.addColorStop(0,'rgba(200,30,30,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.4);ctx.scale(k,k);ctx.textAlign='center';
  const gl=u<.5||(u%1.3<.08)?1:0;ctx.font='900 118px Inter';
  if(gl){ctx.fillStyle='rgba(255,0,60,.7)';ctx.fillText('E SE SOBRASSE',-8,0);ctx.fillStyle='rgba(0,220,255,.7)';ctx.fillText('E SE SOBRASSE',8,0)}
  ctx.fillStyle='#fff';ctx.fillText('E SE SOBRASSE',0,0);ctx.font='900 220px Inter';ctx.fillStyle='#ff3b3b';ctx.fillText('SÓ UM?',0,220);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 5 · EM BREVE',W/2,H*.4+420);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.4+520);ctx.restore()});
