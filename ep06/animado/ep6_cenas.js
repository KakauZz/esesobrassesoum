// ===================== EP. 6 — O RELÓGIO =====================
// (vencedora do EP. 5: A — seguir a criança na escada). Faixa 900–999.
// Um mistério só: pra onde a criança está levando ele? Elementos novos: a capa amarela da criança e o relógio que volta a andar.
// Ambiente (não falado): chuva fina (começa quando ele sai do metrô e continua em todas as cenas ao ar livre) e o gato laranja de coleira azul dormindo.

// chuva caindo na perspectiva da cena (levemente inclinada pelo vento para a esquerda)
function e6Rain(u,k,o){o=o||{};if(k<=0)return;const r=rng(o.seed||77),n=Math.floor(170*k),sl=o.slant??-.12,len=o.len||46,sp=o.speed||2100;
  ctx.save();ctx.strokeStyle=`rgba(200,215,240,${.33*(o.alpha??1)})`;ctx.lineWidth=o.w||3;ctx.lineCap='round';ctx.beginPath();
  for(let i=0;i<n;i++){const x0=r()*(W+300),y0=r()*H,v=sp*(.8+r()*.4);const y=(y0+u*v)%(H+100)-50,x=((x0+y*sl)%(W+300)+W+300)%(W+300)-150;ctx.moveTo(x,y);ctx.lineTo(x+len*sl,y+len)}
  ctx.stroke();
  // respingos no chão molhado
  if(o.ground){const r2=rng((o.seed||77)+5);for(let i=0;i<Math.floor(26*k);i++){const ph=(u*1.6+r2())%1,x=r2()*W,y=lerp(o.ground,H,r2());ctx.strokeStyle=`rgba(210,225,250,${.4*(1-ph)})`;ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(x,y,6+ph*30,(6+ph*30)*.3,0,0,7);ctx.stroke()}}
  ctx.restore()}

// a criança: capa de chuva amarela com capuz (rosto na sombra), um tênis vermelho e um pé só de meia
function e6Child(x,y,s,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s*(o.f||1),s);ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.lineJoin='round';
  const ph=o.walk,sw=ph!=null?Math.sin(ph):0;
  // pernas: esquerda com tênis vermelho, direita só de meia (ou dois tênis se o.both)
  for(const [lx,d,shoe] of [[-22,sw,'red'],[22,-sw,o.both?'red':'sock']]){const fx=lx+d*26,fy=-(ph!=null?Math.max(0,d)*14:0);
    ctx.strokeStyle='#2d3a5c';ctx.lineWidth=22;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(lx*.6,-110);ctx.lineTo(fx,fy-14);ctx.stroke();
    ctx.lineWidth=5;ctx.strokeStyle=OUT;
    if(shoe==='red'){ctx.fillStyle='#d63a3a';rr(fx-20,fy-26,46,26,10);ctx.fill();ctx.stroke();ctx.fillStyle='#f2efe9';ctx.fillRect(fx-20,fy-6,46,6)}
    else{ctx.fillStyle='#f2efe9';rr(fx-18,fy-24,40,24,12);ctx.fill();ctx.stroke()}}
  // capa
  ctx.fillStyle='#f2c230';ctx.beginPath();ctx.moveTo(-40,-250);ctx.quadraticCurveTo(-78,-140,-74,-96);ctx.quadraticCurveTo(0,-84,74,-96);ctx.quadraticCurveTo(78,-140,40,-250);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle='rgba(180,120,10,.25)';ctx.beginPath();ctx.moveTo(10,-240);ctx.quadraticCurveTo(46,-150,60,-98);ctx.lineTo(74,-96);ctx.quadraticCurveTo(78,-140,40,-250);ctx.fill();
  // capuz, com o rosto escondido na sombra (o.look desloca a abertura: olhando pra trás)
  const lk=o.look||0;ctx.fillStyle='#f2c230';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();ctx.arc(0,-290,58,0,7);ctx.fill();ctx.stroke();
  if(o.back&&!lk){ctx.fillStyle='rgba(180,120,10,.3)';ctx.beginPath();ctx.arc(0,-292,40,0,7);ctx.fill()}
  else{ctx.fillStyle='#1d1a24';ctx.beginPath();ctx.ellipse(lk*26,-282,32,38,0,0,7);ctx.fill()}
  ctx.restore()}

// o tênis vermelho infantil, visto de lado (o mesmo do EP. 5)
function e6Shoe(x,y,s,rot){ctx.save();ctx.translate(x,y);ctx.rotate(rot||0);ctx.scale(s,s);ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.lineJoin='round';
  ctx.fillStyle='#f2efe9';rr(-130,10,270,40,18);ctx.fill();ctx.stroke();
  ctx.fillStyle='#d63a3a';ctx.beginPath();ctx.moveTo(-120,14);ctx.lineTo(-120,-60);ctx.quadraticCurveTo(-110,-90,-60,-92);ctx.lineTo(-20,-92);ctx.quadraticCurveTo(20,-40,90,-30);ctx.quadraticCurveTo(140,-20,136,14);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle='#f2efe9';ctx.beginPath();ctx.arc(-80,-40,16,0,7);ctx.fill();ctx.stroke();
  ctx.strokeStyle='#fff';ctx.lineWidth=7;ctx.lineCap='round';for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-20+i*28,-80+i*16);ctx.lineTo(10+i*28,-66+i*16);ctx.stroke()}
  ctx.beginPath();ctx.moveTo(30,-30);ctx.quadraticCurveTo(70,10,40,40);ctx.stroke();ctx.restore()}

// pegada: tênis (com ranhuras) ou meia (lisa)
function e6Print(x,y,s,rot,kind,a){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);ctx.globalAlpha=a??1;
  ctx.fillStyle='rgba(205,215,232,.42)';
  if(kind==='sock'){ctx.beginPath();ctx.ellipse(0,-20,30,46,0,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(0,46,24,26,0,0,7);ctx.fill()}
  else{ctx.beginPath();ctx.ellipse(0,-22,34,50,0,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(0,46,27,30,0,0,7);ctx.fill();
    ctx.strokeStyle='rgba(30,32,40,.55)';ctx.lineWidth=5;for(let i=-3;i<=3;i++){ctx.beginPath();ctx.moveTo(-26,-24+i*14);ctx.lineTo(26,-24+i*14);ctx.stroke()}
    for(let i=0;i<2;i++){ctx.beginPath();ctx.moveTo(-20,38+i*14);ctx.lineTo(20,38+i*14);ctx.stroke()}}
  ctx.restore()}

// o gato mascote (laranja e branco, coleira azul), dormindo enrolado
function e6Cat(x,y,s,u){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.strokeStyle=OUT;ctx.lineWidth=5;const br=1+.03*Math.sin(u*2.2);
  ctx.fillStyle='#e88a3a';ctx.beginPath();ctx.ellipse(0,-34,74*br,40*br,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle='#f6efe2';ctx.beginPath();ctx.ellipse(10,-22,40,20,0,0,7);ctx.fill();
  ctx.fillStyle='#e88a3a';ctx.beginPath();ctx.arc(-58,-44,30,0,7);ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.moveTo(-80,-62);ctx.lineTo(-74,-90);ctx.lineTo(-60,-70);ctx.closePath();ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(-50,-70);ctx.lineTo(-36,-92);ctx.lineTo(-32,-62);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.strokeStyle='#2a1a12';ctx.lineWidth=3;ctx.beginPath();ctx.arc(-68,-44,6,.2,2.9);ctx.stroke();ctx.beginPath();ctx.arc(-50,-44,6,.2,2.9);ctx.stroke();
  ctx.strokeStyle='#2f6fd6';ctx.lineWidth=7;ctx.beginPath();ctx.arc(-58,-44,30,.9,2.3);ctx.stroke();
  ctx.strokeStyle=OUT;ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(66,-20);ctx.quadraticCurveTo(80,6,20,4);ctx.stroke();ctx.strokeStyle='#e88a3a';ctx.lineWidth=7;ctx.stroke();ctx.restore()}

// céu noturno de chuva + chão molhado com reflexo
function e6Night(){ctx.fillStyle=lg(0,H,['#070912','#12162a','#1c1f33']);ctx.fillRect(0,0,W,H)}

// 0. ABERTURA-GANCHO (900–901.8): visto de baixo da escada do metrô; lá no alto, a criança de capa amarela olha pra trás
scene(900,901.8,(t)=>{const u=t-900;const z=lerp(1.22,1.04,easeOut(seg(u,0,.6)))+u*.03,sh=u<.35?Math.sin(u*90)*14:0;
  ctx.save();ctx.translate(W/2+sh,H*.5);ctx.scale(z,z);ctx.translate(-W/2,-H*.5);
  ctx.fillStyle='#0b0c12';ctx.fillRect(0,0,W,H);
  // abertura da rua lá em cima (luz do poste + chuva)
  ctx.fillStyle='#2a3150';ctx.fillRect(330,560,420,360);const gl=ctx.createRadialGradient(540,640,10,540,640,320);gl.addColorStop(0,'rgba(255,220,150,.55)');gl.addColorStop(1,'rgba(255,220,150,0)');ctx.fillStyle=gl;ctx.fillRect(330,560,420,360);
  ctx.save();ctx.beginPath();ctx.rect(330,560,420,360);ctx.clip();e6Rain(u,.8,{len:30,seed:3});ctx.restore();
  // paredes de azulejo convergindo
  ctx.fillStyle='#263030';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(330,560);ctx.lineTo(330,920);ctx.lineTo(0,H);ctx.closePath();ctx.fill();
  ctx.beginPath();ctx.moveTo(W,0);ctx.lineTo(750,560);ctx.lineTo(750,920);ctx.lineTo(W,H);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=3;for(let i=1;i<8;i++){const k=i/8;ctx.beginPath();ctx.moveTo(0,H*k*1.0);ctx.lineTo(330,560+360*k);ctx.stroke();ctx.beginPath();ctx.moveTo(W,H*k);ctx.lineTo(750,560+360*k);ctx.stroke()}
  // degraus subindo em perspectiva (largos embaixo, estreitos lá em cima)
  for(let i=0;i<16;i++){const k0=Math.pow(i/16,.75),k1=Math.pow((i+1)/16,.75);const y0=lerp(H,920,k0),y1=lerp(H,920,k1),hw0=lerp(540,210,k0),hw1=lerp(540,210,k1);
    ctx.fillStyle=i%2?'#3a3b44':'#4a4c58';ctx.beginPath();ctx.moveTo(540-hw0,y0);ctx.lineTo(540+hw0,y0);ctx.lineTo(540+hw1,y1);ctx.lineTo(540-hw1,y1);ctx.closePath();ctx.fill();
    ctx.fillStyle='#e8c84a';ctx.fillRect(540-hw1,y1,hw1*2,4)}
  // a criança lá no alto, de costas, virando o rosto pra trás
  e6Child(540,920,.8,{back:true,look:lerp(0,-.8,seg(u,.2,.7))});
  ctx.restore();
  ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,150,W,330);
  hookTitle('ELA OLHOU|PRA TRÁS 😳',seg(u,0,.35),290);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.8*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});

// 1. recap rápido do voto (902–903.6)
scene(902,903.6,(t)=>{const u=(t-902)*2.25;ctx.fillStyle='#0e0c14';ctx.fillRect(0,0,W,H);
  // fundo: a escada da plataforma por onde a criança subiu
  ctx.save();ctx.globalAlpha=.5;ctx.fillStyle='#4a4c58';for(let i=0;i<9;i++)ctx.fillRect(120+i*90,1820-i*70,300,70);ctx.restore();
  const g=ctx.createRadialGradient(W/2,H*.42,40,W/2,H*.42,900);g.addColorStop(0,'rgba(60,200,130,.28)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 50px "DejaVu Sans Mono", monospace';ctx.globalAlpha=easeOut(seg(u,0,.4));ctx.fillText('NO EPISÓDIO 5, VOCÊS ESCOLHERAM',W/2,560);ctx.globalAlpha=1;ctx.textAlign='left';
  const kb=easeOut(seg(u,.9,1.5));ctx.save();ctx.globalAlpha=1-kb;ctx.translate(kb*700,0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,900,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,1045);ctx.font='800 48px Inter';ctx.fillText('Abrir a porta do desenho',250,1020);ctx.restore();
  const ka=easeBack(seg(u,1.2,1.8)),sc=1+ka*.12,yy=lerp(660,760,ka);
  ctx.save();ctx.translate(W/2,yy+95);ctx.scale(sc,sc);ctx.translate(-W/2,-(yy+95));
  ctx.fillStyle='rgba(30,140,90,.96)';rr(70,yy,940,190,36);ctx.fill();ctx.strokeStyle='rgba(255,255,255,'+(.25+.25*Math.sin(u*6))+')';ctx.lineWidth=6;ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,yy+145);ctx.font='800 48px Inter';ctx.fillText('Seguir a criança na escada',250,yy+120);
  if(u>1.6){const k=easeBack(seg(u,1.6,2));ctx.save();ctx.translate(930,yy+40);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.arc(0,0,58,0,7);ctx.fill();ctx.strokeStyle='#1c1422';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-26,2);ctx.lineTo(-6,22);ctx.lineTo(28,-20);ctx.stroke();ctx.restore()}
  ctx.restore();
  if(u>1.6){const r=rng(9);for(let i=0;i<40;i++){const a=r()*7,sp=300+r()*500,k=seg(u,1.6,3.2),x=W/2+Math.cos(a)*sp*k,y=860+Math.sin(a)*sp*k+k*k*300;ctx.fillStyle=['#ffd84a','#3ccf8e','#fff'][i%3];ctx.globalAlpha=1-k;ctx.fillRect(x,y,10,16);ctx.globalAlpha=1}}
});

// 2. de lado: ele sobe a escada correndo (para a DIREITA, onde os degraus sobem), com o tênis vermelho na mão (904–907)
function e6StairY(x){return 1720-x*.86}
scene(904,907,(t)=>{const u=t-904;ctx.fillStyle='#0b0c12';ctx.fillRect(0,0,W,H);
  tileWall(0,0,W,H,'#2f3a3a','#263030');
  // luz da rua lá no alto à direita
  const gl=ctx.createRadialGradient(1040,620,10,1040,620,520);gl.addColorStop(0,'rgba(255,220,150,.45)');gl.addColorStop(1,'rgba(255,220,150,0)');ctx.fillStyle=gl;ctx.fillRect(0,0,W,H);
  // degraus (sobem para a direita)
  ctx.fillStyle='#3a3b44';ctx.beginPath();ctx.moveTo(0,H);ctx.lineTo(0,e6StairY(0));for(let x=0;x<=W+90;x+=90){const y=e6StairY(x);ctx.lineTo(x,y);ctx.lineTo(x+90,y)}ctx.lineTo(W+90,H);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#e8c84a';ctx.lineWidth=6;for(let x=0;x<=W;x+=90){const y=e6StairY(x);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+90,y);ctx.stroke()}
  // corrimão
  ctx.strokeStyle='#8a8e9a';ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(0,e6StairY(0)-230);ctx.lineTo(W,e6StairY(W)-230);ctx.stroke();
  const k=seg(u,0,3),x=lerp(170,880,k),gy=e6StairY(Math.floor(x/90)*90)+18,s=1.15;
  person(x,gy-140*s,s,{f:1,walk:u*10,lean:.12,look:-.12,holding:(hx,hy)=>e6Shoe(hx+14,hy+4,.22,.15)});
});

// 3. lá em cima: a rua vazia em perspectiva (câmera de frente), chuva começando; ele de costas (907.2–911)
function e6Avenue(u,rk){e6Night();
  const vx=540,vy=930;
  // prédios dos dois lados convergindo para o ponto de fuga
  ctx.fillStyle='#10131f';ctx.beginPath();ctx.moveTo(0,120);ctx.lineTo(430,760);ctx.lineTo(430,960);ctx.lineTo(0,1500);ctx.closePath();ctx.fill();
  ctx.beginPath();ctx.moveTo(W,160);ctx.lineTo(650,760);ctx.lineTo(650,960);ctx.lineTo(W,1500);ctx.closePath();ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.05)';for(let i=0;i<7;i++){const k=i/7,xl=lerp(20,410,k),xr=lerp(1060,670,k),yt=lerp(260,790,k),hh=lerp(160,22,k),ww=lerp(70,8,k);ctx.fillRect(xl,yt,ww,hh);ctx.fillRect(xr-ww,yt,ww,hh)}
  // calçadas e rua
  ctx.fillStyle='#2a2d38';ctx.beginPath();ctx.moveTo(0,1500);ctx.lineTo(430,960);ctx.lineTo(650,960);ctx.lineTo(W,1500);ctx.lineTo(W,H);ctx.lineTo(0,H);ctx.closePath();ctx.fill();
  ctx.fillStyle='#1d2029';ctx.beginPath();ctx.moveTo(160,H);ctx.lineTo(500,960);ctx.lineTo(580,960);ctx.lineTo(920,H);ctx.closePath();ctx.fill();
  // faixas centrais (paradas: ele está parado)
  ctx.fillStyle='rgba(240,230,190,.7)';for(let i=0;i<8;i++){const k0=Math.pow(i/8,1.8),k1=Math.pow((i+.5)/8,1.8);const y0=lerp(960,H,k0),y1=lerp(960,H,k1),w0=lerp(2,16,k0),w1=lerp(2,16,k1);ctx.beginPath();ctx.moveTo(540-w0,y0);ctx.lineTo(540+w0,y0);ctx.lineTo(540+w1,y1);ctx.lineTo(540-w1,y1);ctx.fill()}
  // postes acesos em perspectiva + reflexo no chão molhado
  for(let i=0;i<5;i++){const k=Math.pow(i/5,1.3),s=lerp(1,.18,k);for(const side of[-1,1]){const x=lerp(side<0?190:890,side<0?495:585,k),y=lerp(1560,965,k);
    ctx.fillStyle=`rgba(255,214,140,${.16*rk*s})`;ctx.fillRect(x-14*s,y,28*s,lerp(260,30,k));lampPost(x,y,s*1.1,true);
    const g=ctx.createRadialGradient(x,y-515*s,2,x,y-515*s,120*s);g.addColorStop(0,'rgba(255,220,150,.5)');g.addColorStop(1,'rgba(255,220,150,0)');ctx.fillStyle=g;ctx.fillRect(x-130*s,y-640*s,260*s,260*s)}}
}
scene(907.2,911,(t)=>{const u=t-907.2,rk=seg(u,.3,2.4);e6Avenue(u,rk);
  // placa do metrô atrás dele (ele acabou de sair)
  ctx.fillStyle='#1d4ed8';rr(40,1420,120,120,16);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.stroke();ctx.fillStyle='#fff';ctx.font='900 90px Inter';ctx.textAlign='center';ctx.fillText('M',100,1515);ctx.textAlign='left';
  ctx.fillStyle='#2b2d36';ctx.fillRect(94,1540,12,200);
  personFront(560,1560,1.3,{back:true});
  e6Rain(u,rk,{ground:1500});vignette(.5);
});

// 4. de cima: no asfalto molhado, as pegadas pequenas — tênis e meia (911.2–917)
function e6Wet(u){ctx.fillStyle='#22252e';ctx.fillRect(0,0,W,H);const r=rng(41);ctx.fillStyle='rgba(255,255,255,.03)';for(let i=0;i<500;i++)ctx.fillRect(r()*W,r()*H,3,3);
  // poças com reflexo do poste
  for(const [x,y,a,b] of [[260,520,220,90],[820,1380,180,70]]){ctx.fillStyle='rgba(70,80,110,.45)';ctx.beginPath();ctx.ellipse(x,y,a,b,0,0,7);ctx.fill();ctx.fillStyle='rgba(255,220,150,.18)';ctx.beginPath();ctx.ellipse(x+20,y-6,a*.35,b*.3,0,0,7);ctx.fill()}}
scene(911.2,917,(t)=>{const u=t-911.2;const z=lerp(1,1.12,ease(seg(u,0,5.8)));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(z,z);ctx.translate(-W/2,-H*.5);
  e6Wet(u);
  // trilha subindo a tela: esquerda = tênis, direita = meia
  for(let i=0;i<7;i++){const y=1700-i*230,left=i%2==0;e6Print(left?470:610,y,1.25,-.08,left?'shoe':'sock',seg(u,.2+i*.12,.5+i*.12))}
  ctx.restore();
  // fala 12: marca os dois tipos
  if(u>2.8){const k=seg(u,2.8,3.4);const a=(x,y,txt,c,kk)=>{ctx.strokeStyle=c;ctx.lineWidth=10;ctx.lineCap='round';ctx.beginPath();for(let q=0;q<=kk*6.6;q+=.05){const xx=x+Math.cos(q)*(80+6*Math.sin(q*3)),yy=y+Math.sin(q)*120;q?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy)}ctx.stroke();
      if(kk>=1){ctx.fillStyle=c;ctx.font='700 72px Caveat';ctx.fillText(txt,x+(x<540?-300:110),y-60)}};
    const p=(x,y)=>[W/2+(x-W/2)*1.12*z,H*.5+(y-H*.5)*z];
    let [x1,y1]=p(470,1240);a(x1,y1,'tênis','#ffd84a',k);
    if(u>3.8){const [x2,y2]=p(610,1010);a(x2,y2,'meia','#7ad7ff',seg(u,3.8,4.4))}}
  e6Rain(u,1,{ground:0,alpha:.7});vignette(.5);
});

// 5. close: o tênis vermelho que ficou no trem, na mão dele (917.2–920.4)
scene(917.2,920.4,(t)=>{const u=t-917.2;e6Night();
  // fundo desfocado: luzes da rua
  for(let i=0;i<9;i++){const r=rng(i+11);const x=r()*W,y=300+r()*900,rad=60+r()*90;const g=ctx.createRadialGradient(x,y,2,x,y,rad);g.addColorStop(0,'rgba(255,214,140,.35)');g.addColorStop(1,'rgba(255,214,140,0)');ctx.fillStyle=g;ctx.fillRect(x-rad,y-rad,rad*2,rad*2)}
  const z=lerp(.95,1.08,ease(seg(u,0,3.2)));ctx.save();ctx.translate(540,980);ctx.scale(z,z);
  e6Shoe(0,0,1.9,-.06+Math.sin(u*1.4)*.02);
  // a mão dele segurando por baixo (moletom laranja)
  ctx.fillStyle=P.skin;ctx.strokeStyle=OUT;ctx.lineWidth=7;rr(-60,60,180,130,60);ctx.fill();ctx.stroke();ctx.fillStyle=P.hood;ctx.fillRect(-40,180,170,700);ctx.strokeRect(-40,180,170,700);
  ctx.restore();
  // gotas escorrendo no tênis
  for(let i=0;i<5;i++){const k=((u*.6+i/5)%1);ctx.fillStyle=`rgba(200,225,255,${.7*(1-k)})`;ctx.beginPath();ctx.ellipse(380+i*70,880+k*120,6,10,0,0,7);ctx.fill()}
  e6Rain(u,1,{alpha:.8});vignette(.55);
});

// 6. de lado: ele segue as pegadas pela rua (anda para a DIREITA; calçada, postes, pegadas e o gato passam para a ESQUERDA) (920.6–926.6)
scene(920.6,926.6,(t)=>{const u=t-920.6,v=320,gx=u*v;e6Night();
  // prédios ao fundo (paralaxe lenta)
  ctx.fillStyle='#11141f';for(let i=-1;i<7;i++){const x=((i*260-gx*.35)%2080+2080)%2080-260,h=380+((i*137)%5)*90;ctx.fillRect(x,1160-h,240,h);
    ctx.fillStyle='rgba(255,255,255,.04)';for(let yy=1160-h+30;yy<1120;yy+=70)for(let xx=x+24;xx<x+220;xx+=60)ctx.fillRect(xx,yy,26,36);ctx.fillStyle='#11141f'}
  // fachada perto (marquise de loja fechada) — passa na velocidade do chão
  for(let i=-1;i<4;i++){const x=((i*720-gx)%2880+2880)%2880-720;ctx.fillStyle='#1b1f2d';ctx.fillRect(x,560,700,820);ctx.fillStyle='#2a2f42';ctx.fillRect(x+60,820,580,560);
    ctx.fillStyle='#3b2a3a';ctx.fillRect(x-10,760,720,50);ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.strokeRect(x-10,760,720,50);
    ctx.strokeStyle='rgba(255,255,255,.07)';ctx.lineWidth=4;for(let k=0;k<12;k++){ctx.beginPath();ctx.moveTo(x+60,840+k*44);ctx.lineTo(x+640,840+k*44);ctx.stroke()}
    // o gato dormindo na soleira da 2ª loja (detalhe de ambiente)
    if(((i%2)+2)%2==1)e6Cat(x+520,1378,.8,u)}
  // calçada molhada
  ctx.fillStyle='#2e3240';ctx.fillRect(0,1378,W,200);ctx.fillStyle='#454a5c';ctx.fillRect(0,1570,W,16);ctx.fillStyle='#1d2029';ctx.fillRect(0,1586,W,334);
  // postes passando
  for(let i=-1;i<4;i++){const x=((i*520-gx)%2080+2080)%2080-260;ctx.fillStyle='rgba(255,214,140,.12)';ctx.fillRect(x-40,1380,80,190);lampPost(x,1560,1.1,true)}
  // pegadas na calçada, sempre à frente dele (passam para a esquerda)
  for(let i=0;i<40;i++){const wx=i*95,x=wx-gx+560;if(x<-60||x>W+60)continue;e6Print(x,1470+(i%2?22:-22),.45,Math.PI/2,i%2?'sock':'shoe',x<520?.45:1)}
  person(470,1540-140*1.25,1.25,{f:1,walk:u*8.6,look:.12,holding:(hx,hy)=>e6Shoe(hx+14,hy+4,.22,.15)});
  e6Rain(u,1,{ground:1586});vignette(.45);
});

// 7. de frente: a velha praça do relógio, à noite, com chuva; ele chega andando (926.8–932.6)
function e6Plaza(u){e6Night();
  buildings(321,1150,250,600,'#121526',null,0,0,0);
  ctx.fillStyle='#262833';ctx.fillRect(0,1150,W,770);
  ctx.fillStyle='#3b3e4c';ctx.beginPath();ctx.ellipse(W/2,1480,640,260,0,0,7);ctx.fill();ctx.strokeStyle='rgba(0,0,0,.18)';ctx.lineWidth=3;for(let r=80;r<640;r+=90){ctx.beginPath();ctx.ellipse(W/2,1480,r,r*.4,0,0,7);ctx.stroke()}
  ctx.fillStyle='#3b3e4c';ctx.beginPath();ctx.moveTo(W/2-90,1700);ctx.lineTo(W/2+90,1700);ctx.lineTo(W/2+220,H);ctx.lineTo(W/2-220,H);ctx.fill();
  // reflexos no piso molhado
  ctx.fillStyle='rgba(255,214,140,.10)';ctx.fillRect(230,1420,40,260);ctx.fillRect(810,1420,40,260);
  parkTree(110,1300,1.0,'#24382a');parkTree(980,1320,1.05,'#22352a');parkTree(30,1560,1.25,'#1f3226');
  lampPost(250,1420,1,true);lampPost(830,1420,1,true);
  for(const x of[250,830]){const g=ctx.createRadialGradient(x,1000,4,x,1000,170);g.addColorStop(0,'rgba(255,220,150,.45)');g.addColorStop(1,'rgba(255,220,150,0)');ctx.fillStyle=g;ctx.fillRect(x-170,830,340,340)}
  benchSide(800,1600,.6);
  clockTower(W/2,1430,.78);
}
scene(926.8,932.6,(t)=>{const u=t-926.8;const z=1+u*.02;ctx.save();ctx.translate(W/2,H*.55);ctx.scale(z,z);ctx.translate(-W/2,-H*.55);
  e6Plaza(u);
  // trilha de pegadas indo até o relógio
  for(let i=0;i<9;i++){const k=i/9,y=lerp(1880,1450,k),s=lerp(.4,.16,k);e6Print(W/2+(i%2?18:-18)*lerp(1,.4,k),y,s,0,i%2?'sock':'shoe',.8)}
  const k=easeOut(seg(u,0,3.4)),py=lerp(1900,1640,k),ps=lerp(1.05,.78,k);
  personFront(W/2+120,py,ps,{back:true,walk:u<3.4?u*6:null});
  ctx.restore();
  e6Rain(u,1,{ground:1200});vignette(.45);
});

// 8. close no relógio: 07:12, parado (932.8–938.4)
scene(932.8,938.4,(t)=>{const u=t-932.8;e6Night();
  const z=lerp(1,1.1,ease(seg(u,0,5.6)));ctx.save();ctx.translate(540,860);ctx.scale(z,z);ctx.translate(-540,-860);
  ctx.fillStyle='#8f8070';ctx.fillRect(170,300,740,1300);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(170,300,740,1300);
  ctx.strokeStyle='rgba(60,40,30,.3)';ctx.lineWidth=4;for(let y=330;y<1600;y+=70){ctx.beginPath();ctx.moveTo(170,y);ctx.lineTo(910,y);ctx.stroke()}
  ctx.fillStyle='rgba(0,0,0,.35)';ctx.fillRect(170,300,740,1300);
  clockFace(540,860,310,7,12,true);
  ctx.restore();
  // gotas escorrendo pelo vidro do relógio
  for(let i=0;i<4;i++){const k=((u*.35+i/4)%1);ctx.fillStyle=`rgba(220,235,255,${.6*(1-k)})`;ctx.beginPath();ctx.ellipse(380+i*110,600+k*480,7,12,0,0,7);ctx.fill()}
  e6Rain(u,1,{alpha:.8});vignette(.55);
});

// 9. o pé do relógio: as pegadas terminam ali; atrás dele, a ponta da capa amarela (938.6–946.6)
scene(938.6,946.6,(t)=>{const u=t-938.6;const z=lerp(1,1.22,ease(seg(u,2.4,6))),cx=lerp(540,700,ease(seg(u,2.4,6)));
  ctx.save();ctx.translate(540,1200);ctx.scale(z,z);ctx.translate(-cx,-1200);
  e6Night();
  // coluna do relógio e base de pedra
  ctx.fillStyle='#8f8070';ctx.fillRect(330,0,420,1260);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(330,-10,420,1270);ctx.fillStyle='rgba(0,0,0,.3)';ctx.fillRect(620,0,130,1260);
  ctx.fillStyle='#4a3326';ctx.beginPath();ctx.moveTo(470,1260);ctx.lineTo(470,1020);ctx.arc(540,1020,70,Math.PI,0);ctx.lineTo(610,1260);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle='#6f6254';rr(230,1250,620,170,10);ctx.fill();ctx.stroke();
  // piso molhado
  ctx.fillStyle='#2f3240';ctx.fillRect(0,1420,W,500);ctx.strokeStyle='rgba(0,0,0,.2)';ctx.lineWidth=3;for(let y=1460;y<H;y+=70){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}
  ctx.fillStyle='rgba(255,214,140,.10)';ctx.fillRect(470,1420,140,500);
  // as pegadas chegam e terminam na pedra
  for(let i=0;i<4;i++){const y=1880-i*130;e6Print(540+(i%2?28:-28),y,lerp(.7,.5,i/4),0,i%2?'sock':'shoe',.9)}
  // a capa amarela aparecendo atrás da coluna, do lado direito (fala 21), tremendo de leve (fala 22)
  if(u>2.6){const k=easeOut(seg(u,2.6,3.6)),tr=u>5.6?Math.sin(u*30)*3:0;ctx.save();ctx.beginPath();ctx.rect(750,0,400,1250);ctx.clip();
    ctx.fillStyle='#f2c230';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(740,1000);ctx.quadraticCurveTo(740+60*k+tr,1080,740+80*k+tr,1240);ctx.lineTo(740,1240);ctx.closePath();ctx.fill();ctx.stroke();
    // o tênis vermelho (o pé que tem tênis) aparecendo embaixo da capa
    ctx.fillStyle='#d63a3a';rr(744,1218,46*k,30,10);ctx.fill();ctx.stroke();ctx.restore()}
  ctx.restore();
  e6Rain(u,1,{ground:1420});vignette(.5);
});

// cena lateral da praça: relógio à DIREITA, ele à esquerda (a criança escondida do lado de lá do relógio)
function e6PlazaSide(u){e6Night();
  buildings(77,1240,300,700,'#11141f',null,0,0,0);
  ctx.fillStyle='#2f3240';ctx.fillRect(0,1240,W,680);ctx.fillStyle='rgba(255,214,140,.08)';ctx.fillRect(140,1240,60,680);
  lampPost(170,1240,1.15,true);{const g=ctx.createRadialGradient(170,700,4,170,700,200);g.addColorStop(0,'rgba(255,220,150,.45)');g.addColorStop(1,'rgba(255,220,150,0)');ctx.fillStyle=g;ctx.fillRect(-30,500,400,400)}
  // relógio (de lado: só a coluna e a base)
  ctx.fillStyle='#8f8070';ctx.fillRect(800,0,260,1160);ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.strokeRect(800,-10,260,1170);ctx.fillStyle='rgba(0,0,0,.28)';ctx.fillRect(960,0,100,1160);
  ctx.fillStyle='#6f6254';rr(740,1150,380,110,8);ctx.fill();ctx.stroke();
}
// 10. ele fala com a criança, estendendo o tênis (946.8–949.6)
scene(946.8,949.6,(t)=>{const u=t-946.8;e6PlazaSide(u);
  // ponta da capa do lado de lá do relógio
  ctx.save();ctx.beginPath();ctx.rect(1060,0,40,1250);ctx.clip();ctx.fillStyle='#f2c230';ctx.fillRect(1052,980,30,260);ctx.restore();
  const s=1.3,talk=u>.3&&u<2.4;
  person(470,1250-140*s,s,{f:1,look:.05,mouthO:talk?.25+.25*Math.abs(Math.sin(u*9)):0,brow:1,arms:[[0.08,-0.15],[1.25,-0.25]],holding:(hx,hy)=>e6Shoe(hx+22,hy-4,.26,0)});
  e6Rain(u,1,{ground:1240});vignette(.45);
});
// 11. ele deixa o tênis no chão perto do relógio e se afasta (anda para a ESQUERDA, olhando para a esquerda) (949.8–954)
scene(949.8,954,(t)=>{const u=t-949.8;e6PlazaSide(u);
  ctx.save();ctx.beginPath();ctx.rect(1060,0,40,1250);ctx.clip();ctx.fillStyle='#f2c230';ctx.fillRect(1052,980,30,260);ctx.restore();
  const s=1.3;
  if(u<1.2){ // abaixa e põe o tênis no chão
    const k=easeOut(seg(u,0,1));e6Shoe(lerp(640,660,k),lerp(1080,1238,k),.26,0);
    person(470,1250-140*s+k*10,s,{f:1,lean:.35*Math.sin(Math.PI*k),arms:[[0.08,-0.15],[1.25-0.9*k,-0.25]]});
  }else{e6Shoe(660,1238,.26,0);
    const k=seg(u,1.4,4),x=lerp(470,190,k),walking=u>1.4&&u<4;
    person(x,1250-140*s,s,{f:-1,walk:walking?(u-1.4)*8.4:null,look:0})}
  e6Rain(u,1,{ground:1240});vignette(.45);
});
// 12. espera na chuva, de longe, olhando para o relógio (954.2–957)
scene(954.2,957,(t)=>{const u=t-954.2;const z=lerp(1,1.08,ease(seg(u,0,2.8)));ctx.save();ctx.translate(540,1100);ctx.scale(z,z);ctx.translate(-540,-1100);
  e6PlazaSide(u);ctx.save();ctx.beginPath();ctx.rect(1060,0,40,1250);ctx.clip();ctx.fillStyle='#f2c230';ctx.fillRect(1052,980,30,260);ctx.restore();
  e6Shoe(660,1238,.26,0);
  const s=1.3;person(250,1250-140*s,s,{f:1,look:.08,eye:1.15});
  ctx.restore();
  e6Rain(u,1,{ground:1240});vignette(.5);
});

// 13. close no chão: a mãozinha de manga amarela sai de trás do relógio e puxa o tênis (957.2–962)
scene(957.2,962,(t)=>{const u=t-957.2;ctx.fillStyle='#2f3240';ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='rgba(0,0,0,.22)';ctx.lineWidth=4;for(let y=60;y<H;y+=140){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}
  // base de pedra do relógio à direita
  ctx.fillStyle='#6f6254';ctx.fillRect(880,0,200,H);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(880,0);ctx.lineTo(880,H);ctx.stroke();ctx.fillStyle='rgba(0,0,0,.3)';ctx.fillRect(880,0,40,H);
  ctx.fillStyle='rgba(255,214,140,.08)';ctx.fillRect(0,0,880,H);
  // poça refletindo
  ctx.fillStyle='rgba(70,80,110,.4)';ctx.beginPath();ctx.ellipse(420,1240,330,90,0,0,7);ctx.fill();
  const reach=easeOut(seg(u,.4,1.6)),grab=u>1.6,pull=easeOut(seg(u,2.8,3.8));
  const sx=lerp(500,1300,pull);e6Shoe(sx,1080,1.25,0);
  // braço da criança (manga amarela) vindo da direita, de trás da pedra
  const hx=lerp(1120,grab?sx+160:sx+180,reach);if(reach>0){ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillStyle='#f2c230';rr(hx+40,1000,700,110,50);ctx.fill();ctx.stroke();
    ctx.fillStyle='#e8b48c';ctx.beginPath();ctx.ellipse(hx+20,1050,52,44,0,0,7);ctx.fill();ctx.stroke();
    ctx.beginPath();ctx.ellipse(hx-26,grab?1030:1010,22,14,grab?.3:-.4,0,7);ctx.fill();ctx.stroke()}
  if(u>2.8&&u<3.6){ctx.strokeStyle='rgba(255,255,255,.35)';ctx.lineWidth=6;for(let i=0;i<4;i++){ctx.beginPath();ctx.moveTo(sx-260-i*60,1020+i*30);ctx.lineTo(sx-140-i*60,1020+i*30);ctx.stroke()}}
  e6Rain(u,1,{ground:0,alpha:.8});vignette(.55);
});

// 14. o relógio: tic... tac... e o ponteiro anda de 07:12 para 07:13 (962.2–971.6)
scene(962.2,971.6,(t)=>{const u=t-962.2;e6Night();
  const mv=easeBack(seg(u,4.5,4.9)),mm=12+mv;
  const z=lerp(1,1.16,ease(seg(u,0,4.4)))-.06*seg(u,6.8,9.4);ctx.save();ctx.translate(540,860);ctx.scale(z,z);ctx.translate(-540,-860);
  ctx.fillStyle='#8f8070';ctx.fillRect(170,300,740,1300);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.strokeRect(170,300,740,1300);ctx.fillStyle='rgba(0,0,0,.35)';ctx.fillRect(170,300,740,1300);
  clockFace(540,860,310,7,mm,true);
  ctx.restore();
  // ondas de som do tic-tac (falas 28–29)
  const tick=[2.9,3.7];for(const tt of tick){const k=seg(u,tt,tt+.8);if(k>0&&k<1){ctx.strokeStyle=`rgba(255,240,200,${.6*(1-k)})`;ctx.lineWidth=8;ctx.beginPath();ctx.arc(540,860,360+k*220,0,7);ctx.stroke()}}
  ctx.textAlign='center';ctx.font='700 110px Caveat';
  if(u>2.9&&u<4.6){ctx.fillStyle='#ffd84a';ctx.fillText('tic...',360,1420)}
  if(u>3.7&&u<4.6){ctx.fillStyle='#ffd84a';ctx.fillText('tac.',720,1420)}
  // o ponteiro andou: flash + 07:13 (fala 30)
  if(u>4.5){const f=1-seg(u,4.5,5.1);if(f>0){ctx.fillStyle=`rgba(255,246,220,${.5*f})`;ctx.fillRect(0,0,W,H)}
    const k=easeBack(seg(u,4.7,5.1));ctx.save();ctx.translate(540,1420);ctx.scale(k,k);ctx.fillStyle='rgba(0,0,0,.65)';rr(-260,-100,520,140,30);ctx.fill();ctx.fillStyle='#3ccf8e';ctx.font='900 110px "DejaVu Sans Mono", monospace';ctx.fillText('07:13',0,10);ctx.restore()}
  // fala 31: o relógio parado desde o dia 1 voltou a andar (brilho pulsando no ponteiro)
  if(u>6.8){const k=.5+.5*Math.sin(u*5);ctx.strokeStyle=`rgba(60,207,142,${.5*k})`;ctx.lineWidth=10;ctx.beginPath();ctx.arc(540,860,340*(z),0,7);ctx.stroke()}
  ctx.textAlign='left';
  e6Rain(u,1,{alpha:.8});vignette(.5);
});

// 15. de cima: as pegadas novas indo embora — agora as duas de tênis (971.8–975)
scene(971.8,975,(t)=>{const u=t-971.8;const z=lerp(1.05,1.15,ease(seg(u,0,3.2)));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(z,z);ctx.translate(-W/2,-H*.5);
  e6Wet(u);ctx.fillStyle='#6f6254';ctx.fillRect(0,1500,W,420);ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(0,1500);ctx.lineTo(W,1500);ctx.stroke();
  // trilha antiga (tênis + meia) chegando à pedra
  for(let i=0;i<3;i++){e6Print(200+i*80,1420-i*10,.8,1.2,i%2?'sock':'shoe',.5)}
  // trilha nova: dois tênis, indo para cima e para a direita, aparecendo uma a uma
  for(let i=0;i<8;i++){const x=560+i*70+(i%2?30:-30),y=1400-i*170;e6Print(x,y,.95,.35,'shoe',seg(u,.2+i*.18,.5+i*.18))}
  ctx.restore();
  e6Rain(u,1,{alpha:.7});vignette(.55);
});

// 16. lá longe, a janela do 13º andar acende (a sala das fotos); silhueta na janela (975.2–983)
scene(975.2,983,(t)=>{const u=t-975.2;e6Night();
  const on=u>1.2,k=easeOut(seg(u,1.2,1.6));const zz=lerp(1,1.9,ease(seg(u,1.6,7.6))),wx=742,wy=760;
  ctx.save();ctx.translate(W/2,H*.42);ctx.scale(zz,zz);ctx.translate(-lerp(W/2,wx,seg(zz,1,1.9)),-lerp(H*.42,wy,seg(zz,1,1.9)));
  buildings(401,1320,500,1000,'#0e1128',null,0,0,0);
  ctx.fillStyle='#14183a';ctx.fillRect(650,560,190,760);ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=3;ctx.strokeRect(650,560,190,760);
  for(let yy=600;yy<1280;yy+=60)for(let xx=668;xx<820;xx+=50){ctx.fillStyle='rgba(255,255,255,.05)';ctx.fillRect(xx,yy,26,36)}
  if(on){const g=ctx.createRadialGradient(wx+13,wy+18,4,wx+13,wy+18,220);g.addColorStop(0,`rgba(255,200,110,${.55*k})`);g.addColorStop(1,'rgba(255,200,110,0)');ctx.fillStyle=g;ctx.fillRect(wx-230,wy-220,480,480);
    ctx.fillStyle=`rgba(255,214,130,${k})`;ctx.fillRect(wx,wy,26,36);
    // silhueta de adulto na janela (fala 34)
    if(u>4.6){ctx.globalAlpha=seg(u,4.6,5.6);ctx.fillStyle='#1a0f08';ctx.beginPath();ctx.arc(wx+13,wy+12,6,0,7);ctx.fill();ctx.fillRect(wx+6,wy+18,14,18);ctx.globalAlpha=1;
      // PISTA ESCONDIDA: um flash de câmera piscando na janela
      if(u>6.4&&u<6.6){ctx.fillStyle='rgba(255,255,255,.95)';ctx.beginPath();ctx.arc(wx+20,wy+20,5,0,7);ctx.fill()}}}
  ctx.restore();
  ctx.fillStyle='#10121f';ctx.fillRect(0,1320,W,600);ctx.fillStyle='#1b1d30';ctx.fillRect(0,1320,W,18);
  ctx.fillStyle='rgba(255,214,130,.08)';if(on)ctx.fillRect(700,1338,60,400);
  personFront(W/2-180,1500,1.3,{back:true});
  if(on&&u<2.2){ctx.fillStyle=`rgba(255,240,200,${(1-seg(u,1.2,2.2))*.18})`;ctx.fillRect(0,0,W,H)}
  e6Rain(u,1,{ground:1340,alpha:.8});
});

// 17. escolha (983.2–990)
scene(983.2,990,(t)=>{const u=t-983.2;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  // fundo: à esquerda o prédio com a janela acesa; à direita as pegadas de tênis indo embora na chuva
  ctx.save();ctx.globalAlpha=.6;ctx.fillStyle='#14183a';ctx.fillRect(80,960,220,760);ctx.fillStyle='#ffd682';ctx.fillRect(170,1120,40,54);
  const g=ctx.createRadialGradient(190,1147,4,190,1147,160);g.addColorStop(0,'rgba(255,200,110,.5)');g.addColorStop(1,'rgba(255,200,110,0)');ctx.fillStyle=g;ctx.fillRect(30,990,320,320);
  for(let i=0;i<6;i++)e6Print(760+i*40+(i%2?24:-24),1820-i*130,.6,.3,'shoe',1);ctx.restore();
  ctx.fillStyle='rgba(10,8,14,.40)';ctx.fillRect(0,0,W,H);
  personTurn(540,1700,1.0,{eye:1.2,brow:-.5,lid:0},Math.sin(u*1.4)*.9);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,120,80,.92)';rr(70,420,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,565);ctx.font='800 48px Inter';ctx.fillText('Ir até a janela acesa',250,540);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,650,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,795);ctx.font='800 44px Inter';ctx.fillText('Seguir as pegadas da criança',250,770);ctx.restore();
  e6Rain(u,.6,{alpha:.6});
});

// 18. cartela final (990.2–993.4)
scene(990.2,993.4,(t)=>{const u=t-990.2;ctx.fillStyle='#050507';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.45,50,W/2,H*.45,900);g.addColorStop(0,'rgba(200,30,30,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.4);ctx.scale(k,k);ctx.textAlign='center';
  const gl=u<.5||(u%1.3<.08)?1:0;ctx.font='900 118px Inter';
  if(gl){ctx.fillStyle='rgba(255,0,60,.7)';ctx.fillText('E SE SOBRASSE',-8,0);ctx.fillStyle='rgba(0,220,255,.7)';ctx.fillText('E SE SOBRASSE',8,0)}
  ctx.fillStyle='#fff';ctx.fillText('E SE SOBRASSE',0,0);ctx.font='900 220px Inter';ctx.fillStyle='#ff3b3b';ctx.fillText('SÓ UM?',0,220);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 7 · EM BREVE',W/2,H*.4+420);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.4+520);ctx.restore()});
