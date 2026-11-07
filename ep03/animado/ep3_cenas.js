
// ===================== EP. 3 — A JANELA =====================
// desenha uma cena antiga (a = início da cena, tt = tempo absoluto) dentro de um retângulo, como foto
function miniScene(a,tt,x,y,w,h,zoom,cx,cy){const sc=S.find(s=>s.a===a);if(!sc)return;ctx.save();ctx.beginPath();ctx.rect(x,y,w,h);ctx.clip();
  ctx.fillStyle='#222';ctx.fillRect(x,y,w,h);const k=(w/W)*(zoom||1.6);ctx.translate(x+w/2,y+h/2);ctx.scale(k,k);ctx.translate(-(cx??W/2),-(cy??H*.6));
  ctx.save();sc.fn(tt);ctx.restore();ctx.restore();
  ctx.save();ctx.fillStyle='rgba(255,190,120,.12)';ctx.fillRect(x,y,w,h);ctx.restore()}
function polaroid(x,y,w,rot,a,tt,zoom,cx,cy,label){const h=w*1.18;ctx.save();ctx.translate(x,y);ctx.rotate(rot);
  ctx.fillStyle='rgba(0,0,0,.35)';ctx.fillRect(-w/2+6,-h/2+8,w,h);ctx.fillStyle='#f3efe6';ctx.fillRect(-w/2,-h/2,w,h);
  const m=w*.07;miniScene(a,tt,-w/2+m,-h/2+m,w-2*m,w-2*m,zoom,cx,cy);
  if(label){ctx.fillStyle='#2a2a33';ctx.font=`600 ${Math.round(w*.11)}px Caveat`;ctx.fillText(label,-w/2+m,h/2-m*.9)}
  ctx.fillStyle='#c62828';ctx.beginPath();ctx.arc(0,-h/2+m*.5,w*.035,0,7);ctx.fill();ctx.restore()}
function darkHall(u){ctx.fillStyle='#0b0b12';ctx.fillRect(0,0,W,H)}

// 1. recap (500–504)
scene(500,504,(t)=>{const u=t-500;ctx.fillStyle=lg(0,H,['#120c1e','#24163a','#0d0a16']);ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,40,W/2,H*.42,900);g.addColorStop(0,'rgba(60,200,130,.28)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 50px "DejaVu Sans Mono", monospace';ctx.globalAlpha=easeOut(seg(u,0,.4));ctx.fillText('NO EPISÓDIO 2, VOCÊS ESCOLHERAM',W/2,520);ctx.globalAlpha=1;ctx.textAlign='left';
  const kb=easeOut(seg(u,.9,1.5));ctx.save();ctx.globalAlpha=1-kb;ctx.translate(kb*700,0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,900,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,1045);ctx.font='800 54px Inter';ctx.fillText('Fugir e se esconder',250,1020);ctx.restore();
  const ka=easeBack(seg(u,1.2,1.8)),sc=1+ka*.12,yy=lerp(660,760,ka);
  ctx.save();ctx.translate(W/2,yy+95);ctx.scale(sc,sc);ctx.translate(-W/2,-(yy+95));
  ctx.fillStyle='rgba(30,140,90,.96)';rr(70,yy,940,190,36);ctx.fill();ctx.strokeStyle='rgba(255,255,255,'+(.25+.25*Math.sin(u*6))+')';ctx.lineWidth=6;ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,yy+145);ctx.font='800 54px Inter';ctx.fillText('Ir até a janela acesa',250,yy+120);
  if(u>1.6){const k=easeBack(seg(u,1.6,2));ctx.save();ctx.translate(930,yy+40);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.arc(0,0,58,0,7);ctx.fill();ctx.strokeStyle='#1c1422';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-26,2);ctx.lineTo(-6,22);ctx.lineTo(28,-20);ctx.stroke();ctx.restore()}
  ctx.restore();
  if(u>1.6){const r=rng(9);for(let i=0;i<40;i++){const a=r()*7,sp=300+r()*500,k=seg(u,1.6,3.2),x=W/2+Math.cos(a)*sp*k,y=860+Math.sin(a)*sp*k+k*k*300;ctx.fillStyle=['#ffd84a','#3ccf8e','#fff'][i%3];ctx.globalAlpha=1-k;ctx.fillRect(x,y,10,16);ctx.globalAlpha=1}}
});

// 2. o prédio da janela — ele entra (510–515)
scene(510,515,(t)=>{const u=t-510;sky('#05071a','#0f1430','#1f1d40');const r=rng(81);for(let i=0;i<140;i++){ctx.fillStyle=`rgba(255,255,255,${.3+.5*r()})`;ctx.fillRect(r()*W,r()*700,2,2)}
  const z=1+u*.02;ctx.save();ctx.translate(W/2,H*.6);ctx.scale(z,z);ctx.translate(-W/2,-H*.6);
  buildings(511,1350,500,900,'#0c0f26',null,0,0,0);
  // prédio alto em perspectiva de baixo
  ctx.fillStyle='#15193d';ctx.beginPath();ctx.moveTo(250,1500);ctx.lineTo(330,120);ctx.lineTo(750,120);ctx.lineTo(830,1500);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=3;ctx.stroke();
  for(let row=0;row<13;row++){const y=1380-row*96,kk=row/13,x0=lerp(280,335,kk),x1=lerp(800,745,kk);for(let c=0;c<5;c++){const x=lerp(x0+20,x1-60,c/4);const lit=(row==12&&c==3);ctx.fillStyle=lit?'#ffd682':'rgba(255,255,255,.05)';ctx.fillRect(x,y,40,52);
    if(lit){const g=ctx.createRadialGradient(x+20,y+26,4,x+20,y+26,180);g.addColorStop(0,'rgba(255,200,110,.5)');g.addColorStop(1,'rgba(255,200,110,0)');ctx.fillStyle=g;ctx.fillRect(x-170,y-160,380,380)}}}
  // porta de entrada
  ctx.fillStyle='#090a18';rr(470,1330,140,170,8);ctx.fill();ctx.strokeStyle='rgba(255,255,255,.15)';ctx.lineWidth=4;ctx.stroke();
  ctx.fillStyle='#10121f';ctx.fillRect(0,1500,W,420);
  ctx.restore();
  const k=easeOut(seg(u,0,4.6));personFront(W/2,lerp(1900,1560,k),lerp(1.2,.62,k),{back:true,walk:u*6});
});

// 3. elevador morto (520–524)
scene(520,524,(t)=>{const u=t-520;ctx.fillStyle='#14141c';ctx.fillRect(0,0,W,H);
  const fl=u>1.4&&u<2.2?(Math.sin(u*70)>0?1:.25):(u<1.4?1:.15);
  const g=ctx.createRadialGradient(W/2,300,20,W/2,300,900);g.addColorStop(0,`rgba(200,210,255,${.25*fl})`);g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillStyle='#6b6f7d';rr(160,400,760,1300,10);ctx.fill();ctx.stroke();
  ctx.fillStyle='#8c909e';ctx.fillRect(190,440,345,1240);ctx.fillRect(545,440,345,1240);ctx.strokeRect(190,440,345,1240);ctx.strokeRect(545,440,345,1240);
  ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(200,450,40,1220);ctx.fillRect(555,450,40,1220);
  // painel
  ctx.fillStyle='#1a1a22';rr(380,250,320,110,12);ctx.fill();ctx.stroke();ctx.fillStyle=`rgba(255,60,60,${u<1.4?.9:(u<2.2?fl*.9:0)})`;ctx.font='700 70px "DejaVu Sans Mono", monospace';ctx.textAlign='center';ctx.fillText('13',540,330);ctx.textAlign='left';
  ctx.fillStyle='#2a2a33';rr(950,980,90,180,12);ctx.fill();ctx.stroke();ctx.fillStyle=u<1.4?'#ffd682':'#3a3a44';ctx.beginPath();ctx.arc(995,1035,26,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(995,1105,26,0,7);ctx.fill();ctx.stroke();
});

// 4. escada — subindo 13 andares (530–536)
scene(530,536,(t)=>{const u=t-530;ctx.fillStyle='#1a1a24';ctx.fillRect(0,0,W,H);
  const S_=1.05,hx=430,hy=1100,foot=hy+87*S_,run=70,rise=48,o=(u*150)%run;
  // parede com faixa
  ctx.fillStyle='#22222e';ctx.fillRect(0,0,W,H);ctx.fillStyle='#2b2b3a';ctx.save();ctx.translate(-o,o*rise/run);for(let k=-6;k<10;k++){ctx.fillRect(-400+k*run*6,0,6,H)}ctx.restore();
  // degraus: superfície passa embaixo do pé dele
  ctx.save();ctx.translate(-o,o*rise/run);
  ctx.beginPath();const x0=hx-run*12,y0=foot+rise*12;ctx.moveTo(x0,H+400);ctx.lineTo(x0,y0);
  for(let i=-12;i<16;i++){const x=hx+i*run,y=foot-i*rise;ctx.lineTo(x-run/2,y);ctx.lineTo(x+run/2,y);ctx.lineTo(x+run/2,y-rise)}
  ctx.lineTo(hx+16*run,H+400);ctx.closePath();ctx.fillStyle='#4a4a5c';ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,.08)';for(let i=-12;i<16;i++){const x=hx+i*run,y=foot-i*rise;ctx.fillRect(x-run/2,y,run,5)}
  // corrimão
  ctx.strokeStyle='#8a8a9a';ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(hx-run*12,foot+rise*12-260);ctx.lineTo(hx+run*16,foot-rise*16-260);ctx.stroke();
  ctx.lineWidth=6;for(let i=-12;i<16;i+=2){const x=hx+i*run,y=foot-i*rise;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,y-260);ctx.stroke()}
  ctx.restore();
  const floor=Math.min(13,1+Math.floor(u*2.2));
  ctx.fillStyle='#1d6b3a';rr(800,160,220,140,12);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.stroke();ctx.fillStyle='#fff';ctx.font='900 90px Inter';ctx.textAlign='center';ctx.fillText(floor+'º',910,265);ctx.textAlign='left';
  person(hx,hy-Math.abs(Math.sin(u*9))*6,S_,{f:1,walk:u*9,lean:.12,look:-.05,noShadow:true});
  const g=ctx.createRadialGradient(540,800,50,540,800,1000);g.addColorStop(0,'rgba(255,90,60,.12)');g.addColorStop(1,'rgba(0,0,0,.6)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
});

// 5. corredor — porta entreaberta com luz (540–548)
scene(540,548,(t)=>{const u=t-540;ctx.fillStyle='#0a0a12';ctx.fillRect(0,0,W,H);
  const vx=W/2,vy=880;
  // paredes em perspectiva
  ctx.fillStyle='#1b1b28';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(vx-170,vy-260);ctx.lineTo(vx-170,vy+240);ctx.lineTo(0,H);ctx.fill();
  ctx.fillStyle='#171723';ctx.beginPath();ctx.moveTo(W,0);ctx.lineTo(vx+170,vy-260);ctx.lineTo(vx+170,vy+240);ctx.lineTo(W,H);ctx.fill();
  ctx.fillStyle='#232333';ctx.beginPath();ctx.moveTo(0,H);ctx.lineTo(vx-170,vy+240);ctx.lineTo(vx+170,vy+240);ctx.lineTo(W,H);ctx.fill();
  ctx.fillStyle='#0f0f18';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(vx-170,vy-260);ctx.lineTo(vx+170,vy-260);ctx.lineTo(W,0);ctx.fill();
  // portas laterais
  for(const [s,k] of [[-1,.25],[-1,.55],[1,.35],[1,.65]]){const x=s<0?lerp(0,vx-170,k):lerp(W,vx+170,k),y0=lerp(0,vy-260,k),y1=lerp(H,vy+240,k),hh=(y1-y0)*.62;ctx.fillStyle='#2a2030';ctx.fillRect(x-(s<0?0:30*(1-k)+12),y1-hh-(y1-y0)*.06,30*(1-k)+12,hh)}
  // porta do fundo entreaberta com luz
  ctx.fillStyle='#3a2a20';ctx.fillRect(vx-110,vy-200,220,440);
  const op=.12+.05*Math.sin(u*2);ctx.fillStyle='#ffd27a';ctx.fillRect(vx-110,vy-200,220*op,440);
  const g=ctx.createRadialGradient(vx-90,vy,10,vx-90,vy,700);g.addColorStop(0,'rgba(255,200,110,.45)');g.addColorStop(1,'rgba(255,200,110,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  // feixe de luz no chão
  ctx.fillStyle='rgba(255,210,130,.18)';ctx.beginPath();ctx.moveTo(vx-110,vy+240);ctx.lineTo(vx-110+220*op,vy+240);ctx.lineTo(vx+120,H);ctx.lineTo(vx-260,H);ctx.closePath();ctx.fill();
  const k=easeOut(seg(u,0,7.5));personFront(W/2+30,lerp(1950,1500,k),lerp(1.35,.8,k),{back:true,walk:u*4.5});
});

// 6. empurra a porta — luz invade (550–554)
scene(550,554,(t)=>{const u=t-550;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  const op=ease(seg(u,.4,2.6));
  ctx.fillStyle='#ffe0a0';ctx.fillRect(250,300,580,1300);
  const g=ctx.createRadialGradient(540,950,50,540,950,900);g.addColorStop(0,`rgba(255,220,150,${.3+op*.5})`);g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  // porta girando (largura diminui)
  const dw=580*(1-op*.85);ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillStyle='#5a3d2c';ctx.fillRect(250,300,dw,1300);ctx.strokeRect(250,300,dw,1300);
  ctx.fillStyle='#d8b26a';ctx.beginPath();ctx.arc(250+dw-50,960,18,0,7);ctx.fill();ctx.stroke();
  ctx.strokeStyle='#2a1d16';ctx.lineWidth=14;ctx.strokeRect(250,300,580,1300);
  // mão empurrando
  const hx=250+dw-40;ctx.fillStyle=P.hood;ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(hx+40,980);ctx.lineTo(1100,1080);ctx.lineTo(1100,1220);ctx.lineTo(hx+40,1080);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle=P.skin;ctx.beginPath();ctx.ellipse(hx+20,1030,55,70,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle=`rgba(255,240,210,${op*.25})`;ctx.fillRect(0,0,W,H);
});

// 7. o quarto das fotos — revelação (560–570)
scene(560,570,(t)=>{const u=t-560;ctx.fillStyle='#2b2018';ctx.fillRect(0,0,W,H);
  const pan=lerp(0,-260,ease(seg(u,0,9.5)));const z=lerp(1.25,1.0,easeOut(seg(u,0,3)));
  ctx.save();ctx.translate(W/2,H*.45);ctx.scale(z,z);ctx.translate(-W/2+pan,-H*.45);
  // parede
  ctx.fillStyle='#4a3a2e';ctx.fillRect(-200,0,1700,1500);ctx.fillStyle='rgba(0,0,0,.15)';for(let x=-200;x<1500;x+=90)ctx.fillRect(x,0,4,1500);
  // fotos espalhadas (cenas antigas) + barbantes vermelhos
  const PH=[[0,2.0],[14,20],[25,28],[150,151.5],[160,161],[220,222],[230,232],[240,241],[260,263],[33,36],[41,43],[320,325],[340,343],[210,212],[200,202],[330,332]];
  const r=rng(91);const pos=[];
  for(let i=0;i<PH.length;i++){const col=i%4,row=Math.floor(i/4);pos.push([-60+col*360+r()*60,180+row*330+r()*40,(r()-.5)*.3])}
  ctx.strokeStyle='rgba(200,30,30,.8)';ctx.lineWidth=4;ctx.beginPath();pos.forEach(([x,y],i)=>{if(i)ctx.lineTo(x,y-120);else ctx.moveTo(x,y-120)});ctx.stroke();
  pos.forEach(([x,y,rot],i)=>polaroid(x,y,250,rot,PH[i][0],PH[i][1],1.7,i==0?420:null,i==0?1180:null,'dia '+[1,1,3,5,5,9,15,26,33,35,48,48,48,2,1,48][i]));
  ctx.restore();
  ctx.fillStyle='#1d1610';ctx.fillRect(0,1500,W,420);
  const g=ctx.createRadialGradient(W/2,700,100,W/2,700,1100);g.addColorStop(0,'rgba(255,200,120,.18)');g.addColorStop(1,'rgba(0,0,0,.6)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  personFront(W/2,1640,1.25,{back:true});
});

// 8. close nas fotos (575–583)
scene(575,583,(t)=>{const u=t-575;ctx.fillStyle='#3a2c22';ctx.fillRect(0,0,W,H);
  const list=[[0,2.0,'dia 1 — dormindo',420,1180],[25,28,'dia 3 — mercado'],[220,222,'dia 9 — estádio'],[260,263,'dia 33 — asfalto'],[340,343,'dia 48 — HOJE']];
  const i=Math.min(4,Math.floor(u/1.6)),lu=u-i*1.6;const [a,tt,lab,lcx,lcy]=list[i];
  const z=1+lu*.06;ctx.save();ctx.translate(W/2,H*.47);ctx.scale(z,z);ctx.rotate((i%2?.04:-.05));polaroid(0,0,820,0,a,tt,1.55,lcx??null,lcy??null,lab);ctx.restore();
  if(lu<.12){ctx.fillStyle=`rgba(255,255,255,${(1-lu/.12)*.8})`;ctx.fillRect(0,0,W,H)}
  if(i==4){ctx.fillStyle=`rgba(200,20,20,${.12+.08*Math.sin(u*9)})`;ctx.fillRect(0,0,W,H)}
});

// 9. a mesa: calendário + câmera (590–597)
scene(590,597,(t)=>{const u=t-590;ctx.fillStyle='#22180f';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,900,60,W/2,900,1000);g.addColorStop(0,'rgba(255,210,140,.4)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const camK=ease(seg(u,3.6,5.5)),pan=camK*-520+110;ctx.save();ctx.translate(0,pan);
  // mesa
  ctx.fillStyle='#6b4a34';ctx.fillRect(0,1100,W,1400);ctx.fillStyle='rgba(0,0,0,.2)';for(let y=1130;y<2400;y+=70)ctx.fillRect(0,y,W,3);
  // calendário na parede
  ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillStyle='#f3efe6';rr(140,160,800,880,14);ctx.fill();ctx.stroke();ctx.fillStyle='#b71c1c';rr(140,160,800,120,14);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 64px Inter';ctx.textAlign='center';ctx.fillText('DIAS',540,245);
  for(let d=1;d<=60;d++){const c=(d-1)%8,rw=Math.floor((d-1)/8),x=180+c*95,y=320+rw*92;ctx.fillStyle='#333';ctx.font='700 34px Inter';ctx.fillText(d,x+40,y+50);
    const cross=Math.min(48,Math.floor(seg(u,0,2.8)*48)+1);if(d<=cross){ctx.strokeStyle='rgba(200,20,20,.85)';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(x+12,y+12);ctx.lineTo(x+70,y+66);ctx.moveTo(x+70,y+12);ctx.lineTo(x+12,y+66);ctx.stroke()}
    if(d==48&&u>2.8){ctx.strokeStyle='#c62828';ctx.lineWidth=6;ctx.beginPath();ctx.arc(x+40,y+38,46,0,7);ctx.stroke()}}
  ctx.textAlign='left';
  // câmera na mesa
  const cx=560,cy=1520;ctx.fillStyle='rgba(0,0,0,.35)';ctx.beginPath();ctx.ellipse(cx,cy+150,330,40,0,0,7);ctx.fill();
  ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillStyle='#2a2b31';rr(cx-300,cy-150,600,300,30);ctx.fill();ctx.stroke();ctx.fillStyle='#3a3b44';rr(cx-180,cy-210,200,70,14);ctx.fill();ctx.stroke();
  ctx.fillStyle='#1a1b20';ctx.beginPath();ctx.arc(cx,cy,115,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#4a6a8a';ctx.beginPath();ctx.arc(cx,cy,72,0,7);ctx.fill();ctx.fillStyle='rgba(255,255,255,.4)';ctx.beginPath();ctx.arc(cx-24,cy-24,20,0,7);ctx.fill();
  ctx.fillStyle='#e0e0e6';rr(cx+170,cy-125,90,40,8);ctx.fill();
  // "ainda quente": calor subindo
  if(u>4.5){ctx.strokeStyle='rgba(255,255,255,.18)';ctx.lineWidth=6;for(let i=0;i<3;i++){ctx.beginPath();for(let y=0;y<220;y+=10){const x=cx-80+i*80+Math.sin(y*.05+u*4+i)*14;y?ctx.lineTo(x,cy-220-y):ctx.moveTo(x,cy-220-y)}ctx.stroke()}}
  ctx.fillStyle='#ff3b3b';ctx.beginPath();ctx.arc(cx+230,cy-170,10+2*Math.sin(u*8),0,7);ctx.fill();
  ctx.restore();
});

// 10. tela da câmera: a última foto é ELE, de costas, AGORA (600–606)
scene(600,606,(t)=>{const u=t-600;ctx.fillStyle='#0d0d12';ctx.fillRect(0,0,W,H);
  const z=lerp(1,1.25,ease(seg(u,0,5.5)));ctx.save();ctx.translate(W/2,H*.47);ctx.scale(z,z);ctx.translate(-W/2,-H*.47);
  ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillStyle='#2a2b31';rr(70,500,940,820,40);ctx.fill();ctx.stroke();
  const sx=120,sy=550,sw=840,sh=620;ctx.save();ctx.beginPath();ctx.rect(sx,sy,sw,sh);ctx.clip();
  // foto: a sala das fotos com ele de costas (visto de trás e de cima)
  ctx.fillStyle='#4a3a2e';ctx.fillRect(sx,sy,sw,sh);const r=rng(5);for(let i=0;i<14;i++){ctx.fillStyle='#f3efe6';ctx.save();ctx.translate(sx+60+(i%7)*120+r()*20,sy+70+Math.floor(i/7)*150);ctx.rotate((r()-.5)*.3);ctx.fillRect(-45,-55,90,110);ctx.fillStyle=['#5a7aa0','#c97b4a','#3f7a4a','#8a6a9a'][i%4];ctx.fillRect(-38,-48,76,76);ctx.restore()}
  ctx.fillStyle='#1d1610';ctx.fillRect(sx,sy+470,sw,150);
  ctx.save();ctx.translate(sx+sw/2,sy+sh-10);ctx.scale(.62,.62);personFront(0,0,1,{back:true,noShadow:true});ctx.restore();
  ctx.fillStyle='rgba(0,0,0,.2)';ctx.fillRect(sx,sy,sw,sh);
  ctx.restore();
  // HUD da câmera
  ctx.fillStyle='#fff';ctx.font='700 34px "DejaVu Sans Mono", monospace';ctx.fillText('▶ 1/1',sx+20,sy+46);ctx.textAlign='right';ctx.fillStyle='#ffb04a';ctx.fillText("DIA 48  20:58",sx+sw-20,sy+sh-24);ctx.textAlign='left';
  if(Math.floor(u*2)%2==0){ctx.fillStyle='#ff3b3b';ctx.beginPath();ctx.arc(sx+sw-40,sy+40,12,0,7);ctx.fill()}
  ctx.restore();
  if(u>3.6){ctx.fillStyle=`rgba(200,20,20,${.15*(.5+.5*Math.sin(u*10))})`;ctx.fillRect(0,0,W,H)}
});

// 11. FLASH — e o rosto dele em choque (610–613)
scene(610,613,(t)=>{const u=t-610;ctx.fillStyle='#120a10';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.5,100,W/2,H*.5,1000);g.addColorStop(0,'rgba(200,220,255,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  face(W/2,H*.52,1.25+u*.04,{open:1.4,eye:1.4,brow:-1,mouthO:.85,pupil:.55,px:-10});
  const f=u<.5?1:Math.max(0,1-(u-.5)/.9);ctx.fillStyle=`rgba(255,255,255,${f})`;ctx.fillRect(0,0,W,H);
});

// 12. sombra correndo pela escada (620–627)
scene(620,627,(t)=>{const u=t-620;ctx.fillStyle='#08080e';ctx.fillRect(0,0,W,H);
  // vista da porta para o corredor escuro, saída de emergência ao fundo
  const vx=W/2,vy=820;
  ctx.fillStyle='#14141e';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(vx-150,vy-240);ctx.lineTo(vx-150,vy+220);ctx.lineTo(0,H);ctx.fill();
  ctx.fillStyle='#111119';ctx.beginPath();ctx.moveTo(W,0);ctx.lineTo(vx+150,vy-240);ctx.lineTo(vx+150,vy+220);ctx.lineTo(W,H);ctx.fill();
  ctx.fillStyle='#1b1b28';ctx.beginPath();ctx.moveTo(0,H);ctx.lineTo(vx-150,vy+220);ctx.lineTo(vx+150,vy+220);ctx.lineTo(W,H);ctx.fill();
  // placa verde de saída
  ctx.fillStyle='#1d8a4a';rr(vx-80,vy-300,160,50,6);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 34px Inter';ctx.textAlign='center';ctx.fillText('SAÍDA',vx,vy-262);ctx.textAlign='left';
  const g=ctx.createRadialGradient(vx,vy-275,5,vx,vy-275,260);g.addColorStop(0,'rgba(40,220,120,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(vx-300,vy-500,600,500);
  ctx.fillStyle='#0a0a10';ctx.fillRect(vx-100,vy-220,200,440);
  // sombra (silhueta) correndo para a escada
  if(u>1.2&&u<4.2){const k=seg(u,1.2,4.2),sx=lerp(vx+60,vx-60,k),sc=lerp(.75,.45,k);ctx.save();ctx.globalAlpha=1-seg(u,3.6,4.2);
    for(let i=3;i>=0;i--){ctx.globalAlpha=(1-seg(u,3.6,4.2))*(i?0.18:1);ctx.save();ctx.translate(sx+i*30,vy+200);ctx.scale(sc,sc);
      ctx.fillStyle='#000';ctx.beginPath();ctx.arc(0,-330,46,0,7);ctx.fill();rr(-55,-290,110,190,40);ctx.fill();
      const ph=u*14;ctx.strokeStyle='#000';ctx.lineWidth=34;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-20,-110);ctx.lineTo(-20+Math.sin(ph)*60,0);ctx.moveTo(20,-110);ctx.lineTo(20-Math.sin(ph)*60,0);ctx.moveTo(-45,-270);ctx.lineTo(-45-Math.sin(ph)*50,-160);ctx.moveTo(45,-270);ctx.lineTo(45+Math.sin(ph)*50,-160);ctx.stroke();ctx.restore()}
    ctx.restore()}
  // ele em primeiro plano (de costas, virou pra porta)
  personFront(W/2+260,1780,1.6,{back:true});
  const v=ctx.createRadialGradient(W/2,H*.5,300,W/2,H*.5,1100);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.6)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);
});

// 13. escolha (630–636)
scene(630,636,(t)=>{const u=t-630;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=.55;ctx.translate(0,300);ctx.fillStyle='#4a3a2e';ctx.fillRect(0,0,W,1200);const r=rng(17);for(let i=0;i<12;i++){ctx.fillStyle='#f3efe6';ctx.save();ctx.translate(100+(i%4)*290+r()*30,150+Math.floor(i/4)*330);ctx.rotate((r()-.5)*.3);ctx.fillRect(-90,-110,180,220);ctx.fillStyle=['#5a7aa0','#c97b4a','#3f7a4a','#8a6a9a'][i%4];ctx.fillRect(-76,-96,152,152);ctx.restore()}ctx.restore();
  ctx.fillStyle='rgba(10,8,14,.55)';ctx.fillRect(0,0,W,H);
  personTurn(540,1560,1.0,{eye:1.2,brow:-.5,lid:0},Math.sin(u*1.4)*.9);
  const ca=easeOut(seg(u,.8,1.4)),cb=easeOut(seg(u,1.2,1.8));
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,120,80,.92)';rr(70,420,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,565);ctx.font='800 52px Inter';ctx.fillText('Correr atrás da sombra',250,540);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,650,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,795);ctx.font='800 52px Inter';ctx.fillText('Ficar e descobrir quem é',250,770);ctx.restore();
});

// 14. cartela final (640–644)
scene(640,644,(t)=>{const u=t-640;ctx.fillStyle='#050507';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.45,50,W/2,H*.45,900);g.addColorStop(0,'rgba(200,30,30,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.4);ctx.scale(k,k);ctx.textAlign='center';
  const gl=u<.5||(u%1.3<.08)?1:0;ctx.font='900 118px Inter';
  if(gl){ctx.fillStyle='rgba(255,0,60,.7)';ctx.fillText('E SE SOBRASSE',-8,0);ctx.fillStyle='rgba(0,220,255,.7)';ctx.fillText('E SE SOBRASSE',8,0)}
  ctx.fillStyle='#fff';ctx.fillText('E SE SOBRASSE',0,0);ctx.font='900 220px Inter';ctx.fillStyle='#ff3b3b';ctx.fillText('SÓ UM?',0,220);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 4 · EM BREVE',W/2,H*.4+420);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.4+520);ctx.restore()});
