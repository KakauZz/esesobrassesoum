// ===== MATHEUS v6 — baseado na arte de referência (proporção real, mãos no bolso, contorno preto) =====
window.M6={skin:'#f2bf95',skinS:'#dfa27a',skinL:'#f8d0ad',
  hair:'#4a2b18',hairS:'#2f1a0e',hairH:'#7b4f33',
  hood:'#f26a1b',hoodS:'#d2520f',hoodL:'#ff8a3d',hoodD:'#b9450b',
  jean:'#2c4f9e',jeanS:'#203b7a',jeanL:'#3a62b8',
  shoe:'#3b4356',shoeW:'#f4f6fa',shoeG:'#c9cfdb',
  tee:'#141418',ol:'#1b120d',iris:'#6b3e1f',pupil:'#160c06'};
function m6path(pts,closed){ // curva suave passando pelos pontos (pontos marcados com 's' viram bico)
  const n=pts.length;ctx.beginPath();
  const mid=(a,b)=>[(a[0]+b[0])/2,(a[1]+b[1])/2];
  let st=closed?mid(pts[n-1],pts[0]):pts[0];ctx.moveTo(st[0],st[1]);
  for(let i=(closed?0:1);i<n;i++){const p=pts[i],q=pts[(i+1)%n];
    if(p[2]==='s'){ctx.lineTo(p[0],p[1]);continue}
    if(!closed&&i===n-1){ctx.lineTo(p[0],p[1]);break}
    const m=mid(p,q);ctx.quadraticCurveTo(p[0],p[1],m[0],m[1])}
  if(closed)ctx.closePath()}
function m6fs(fill,lw){const C=M6;if(fill){ctx.fillStyle=fill;ctx.fill()}ctx.strokeStyle=C.ol;ctx.lineWidth=lw||4.5;ctx.lineJoin='round';ctx.lineCap='round';ctx.stroke()}
const M6POSE={torso:0,head:0,armL:[14,-80,'pocket'],armR:[14,-80,'pocket'],legL:[3,0],legR:[3,0]};
window.M5POSES={
  parado:{},
  acenando:{expr:'feliz',armR:[150,30,'open']},
  apontando:{expr:'feliz',armR:[80,-5,'point']},
  comemorando:{expr:'rindo',armL:[155,15,'fist'],armR:[155,15,'fist'],legL:[10,0],legR:[10,0]},
  assustado:{expr:'assustado',armL:[38,-150,'open'],armR:[38,-150,'open']},
  pensando:{expr:'pensativo',armR:[22,-140,'fist'],head:6}};
function matheus5(gx,gy,s,o){
  o=Object.assign({},M6POSE,o||{});const C=M6,e=o.expr||'feliz',t=o.t||0;
  // braço 'rest' pequeno = mão no bolso (visual da referência)
  for(const k of ['armL','armR']){const p=o[k];if(p&&p[2]==='rest'&&p[0]<=20)o[k]=[14,-80,'pocket']}
  ctx.save();ctx.translate(gx,gy-(o.lift||0)*s);ctx.scale(s,s);
  // sombra
  ctx.fillStyle='rgba(0,0,0,.28)';ctx.beginPath();ctx.ellipse(0,4,120,16,0,0,7);ctx.fill();
  const HIP=-282,SHY=-440;
  // ---- pernas (calça larga) ----
  const leg=(side,p)=>{const hx=side*30;const [kx,ky,fx,fy]=m5chain(hx,HIP,side*p[0],side*p[1],138,132);
    const mid=m5mid([hx,HIP],[kx,ky],[fx,fy]);
    // sapato
    ctx.save();ctx.translate(fx+side*6,fy+2);ctx.scale(1.3,1.3);ctx.translate(0,-4);
    m6path([[-30,-4],[-26,-22],[0,-28],[26,-22],[side*34+side*8,-6],[side*44,8],[side*40,16,'s'],[-side*36,16,'s'],[-side*38,6]],true);m6fs(C.shoe);
    m6path([[side*10,-14],[side*34,-8],[side*44,8],[side*40,14],[side*4,14],[side*-2,2]],true);m6fs(C.shoeW,3.5);
    ctx.beginPath();ctx.moveTo(-side*38,12);ctx.lineTo(side*42,12);ctx.lineTo(side*40,22);ctx.lineTo(-side*36,22);ctx.closePath();m6fs(C.shoeW,3.5);
    ctx.strokeStyle=C.shoeG;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-side*30,17);ctx.lineTo(side*36,17);ctx.stroke();
    ctx.restore();
    // calça: contorno e preenchimento contínuos, mais larga embaixo
    ctx.lineCap='butt';const W0=58,W1=66;
    const tube=(w,col)=>{ctx.strokeStyle=col;ctx.lineWidth=w;ctx.beginPath();ctx.moveTo(hx,HIP-10);ctx.quadraticCurveTo(mid[0],mid[1],fx,fy-6);ctx.stroke()};
    tube(W1+9,C.ol);tube(W1,side<0?C.jeanL:C.jean);
    // vincos
    ctx.strokeStyle=C.jeanS;ctx.lineWidth=3;ctx.lineCap='round';
    ctx.beginPath();ctx.moveTo(kx-side*8,ky-30);ctx.quadraticCurveTo(kx+side*6,ky,kx-side*4,ky+40);ctx.stroke();
    ctx.beginPath();ctx.moveTo(fx-14,fy-46);ctx.quadraticCurveTo(fx-2,fy-38,fx+12,fy-48);ctx.stroke();
    ctx.beginPath();ctx.moveTo(fx-18,fy-24);ctx.quadraticCurveTo(fx,fy-16,fx+16,fy-26);ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,.08)';ctx.beginPath();ctx.ellipse(hx-side*12,HIP+70,7,50,0,0,7);ctx.fill();
    // barra
    ctx.strokeStyle=C.ol;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(fx-W1/2,fy-6);ctx.quadraticCurveTo(fx,fy-1,fx+W1/2,fy-6);ctx.stroke()};
  leg(-1,o.legL);leg(1,o.legR);
  // ---- tronco ----
  ctx.save();ctx.rotate((o.torso||0)*D2R);const br=1+.012*Math.sin(t*2.4);
  ctx.translate(0,HIP);ctx.scale(1,br);ctx.translate(0,-HIP);
  const torso=()=>m6path([[-30,-466],[-60,-462],[-82,-440],[-88,-400],[-84,-330],[-80,-262,'s'],[80,-262,'s'],[84,-330],[88,-400],[82,-440],[60,-462],[30,-466]],true);
  // capuz atrás
  m6path([[-60,-452],[-56,-486],[-30,-504],[30,-504],[56,-486],[60,-452]],true);m6fs(C.hoodS);
  torso();ctx.fillStyle=m5grad(-88,0,88,0,C.hoodL,C.hood);ctx.fill();
  ctx.save();torso();ctx.clip();m5ell(80,-360,30,120,C.hoodS);m5ell(-40,-430,30,14,'rgba(255,255,255,.12)');
  ctx.strokeStyle='rgba(150,50,10,.45)';ctx.lineWidth=3;ctx.lineCap='round';
  for(const sd of[-1,1]){ctx.beginPath();ctx.moveTo(sd*70,-430);ctx.quadraticCurveTo(sd*60,-400,sd*66,-370);ctx.stroke()}
  ctx.restore();torso();m6fs(null);
  // barra canelada
  ctx.beginPath();ctx.moveTo(-82,-284);ctx.lineTo(82,-284);ctx.lineTo(80,-256);ctx.quadraticCurveTo(0,-250,-80,-256);ctx.closePath();m6fs(C.hoodD,4);
  ctx.strokeStyle='rgba(0,0,0,.18)';ctx.lineWidth=2;for(let k=-72;k<=72;k+=9){ctx.beginPath();ctx.moveTo(k,-280);ctx.lineTo(k,-258);ctx.stroke()}
  // ---- braços ----
  const UA=112,FA=88;
  const arm=(side,p)=>{const sx=side*64,sy=SHY+2;const [ex,ey,hx,hy,a]=m5chain(sx,sy,side*p[0],side*p[1],UA,FA);const kind=p[2];
    const col=side<0?C.hoodL:C.hood;const pts=[[sx,sy],m5mid([sx,sy],[ex,ey],[hx,hy]),[hx,hy]];
    const tub=(w,c)=>{ctx.strokeStyle=c;ctx.lineWidth=w;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);ctx.quadraticCurveTo(pts[1][0],pts[1][1],pts[2][0],pts[2][1]);ctx.stroke()};
    tub(48,C.ol);tub(39,col);
    // vinco do cotovelo
    ctx.strokeStyle='rgba(150,50,10,.55)';ctx.lineWidth=2.6;{const ux=hx-sx,uy=hy-sy,ul=Math.hypot(ux,uy)||1;ctx.beginPath();ctx.moveTo(ex-uy/ul*14,ey+ux/ul*14);ctx.quadraticCurveTo(ex+ux/ul*6,ey+uy/ul*6,ex+uy/ul*12,ey-ux/ul*12);ctx.stroke()}
    if(kind!=='pocket'){const cx=ex+(hx-ex)*.86,cy=ey+(hy-ey)*.86;ctx.lineCap='butt';ctx.strokeStyle=C.ol;ctx.lineWidth=46;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(hx,hy);ctx.stroke();ctx.strokeStyle=C.hoodD;ctx.lineWidth=38;ctx.stroke();
      m5hand(hx+Math.sin(a*D2R)*10,hy+Math.cos(a*D2R)*10,a,side,{skin:C.skin,skinO:C.ol},kind==='rest'?'rest':kind)}
  };
  const up=q=>q[0]>70;if(!up(o.armL))arm(-1,o.armL);if(!up(o.armR))arm(1,o.armR);
  // ombros/peito por cima do começo das mangas (sem emenda aparente)
  ctx.save();ctx.beginPath();ctx.rect(-60,-530,120,108);ctx.clip();torso();ctx.fillStyle=m5grad(-88,0,88,0,C.hoodL,C.hood);ctx.fill();ctx.restore();
  ctx.save();ctx.beginPath();ctx.rect(-60,-530,120,108);ctx.clip();torso();m6fs(null);ctx.restore();
  if(up(o.armL))arm(-1,o.armL);if(up(o.armR))arm(1,o.armR);
  // bolso canguru (na frente das mãos)
  m6path([[-58,-382,'s'],[58,-382,'s'],[64,-340],[72,-288],[66,-280,'s'],[-66,-280,'s'],[-72,-288],[-64,-340]],true);m6fs(m5grad(-60,0,60,0,C.hoodL,C.hood),4);
  ctx.strokeStyle='rgba(150,50,10,.5)';ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(-40,-300);ctx.quadraticCurveTo(0,-292,40,-302);ctx.stroke();
  for(const sd of[-1,1]){ctx.fillStyle='rgba(120,40,5,.35)';ctx.beginPath();ctx.moveTo(sd*58,-380);ctx.quadraticCurveTo(sd*66,-334,sd*74,-288);ctx.lineTo(sd*66,-288);ctx.quadraticCurveTo(sd*58,-334,sd*50,-376);ctx.fill()}
  // gola: camiseta preta + aba do capuz
  ctx.beginPath();ctx.moveTo(-34,-468);ctx.quadraticCurveTo(0,-436,34,-468);ctx.closePath();m6fs(C.tee,3.5);
  // pescoço + cabeça
  ctx.save();ctx.translate(0,-470);
  ctx.beginPath();ctx.moveTo(-17,6);ctx.lineTo(-17,-34);ctx.lineTo(17,-34);ctx.lineTo(17,6);ctx.quadraticCurveTo(0,14,-17,6);ctx.closePath();m6fs(C.skinS,4);
  m6path([[-44,-2],[-30,14],[0,22],[30,14],[44,-2],[36,-6],[0,8],[-36,-6]],true);m6fs(C.hood,4);
  // cordões
  for(const sd of[-1,1]){ctx.strokeStyle=C.ol;ctx.lineWidth=7;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(sd*12,12);ctx.quadraticCurveTo(sd*16,34,sd*14,56);ctx.stroke();ctx.strokeStyle='#ffffff';ctx.lineWidth=4;ctx.stroke();
    ctx.fillStyle='#c9cfdb';ctx.strokeStyle=C.ol;ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(sd*14-4,54,8,14,3);ctx.fill();ctx.stroke()}
  ctx.rotate((o.head||0)*D2R);ctx.translate(0,-104);ctx.scale(1.16,1.16);
  m6head(o,e,t);
  ctx.restore();
  ctx.restore();ctx.restore()}
function m6head(o,e,t){const C=M6,look=o.look||0,fx=(o.turn||0)*8;
  // orelhas
  for(const sd of[-1,1]){m6path([[sd*58,-12],[sd*72,-14],[sd*74,6],[sd*62,18]],false);ctx.fillStyle=sd<0?C.skin:C.skinS;ctx.fill();ctx.stroke()}
  for(const sd of[-1,1]){ctx.beginPath();ctx.ellipse(sd*64,0,9,14,0,0,7);ctx.fillStyle=sd<0?C.skin:C.skinS;ctx.fill();ctx.strokeStyle=C.ol;ctx.lineWidth=4;ctx.stroke();ctx.strokeStyle='rgba(150,80,50,.6)';ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(sd*64,0,5,sd<0?-1.4:1.7,sd<0?1.4:4.5);ctx.stroke()}
  const face=()=>m6path([[-64,-40],[-69,10],[-62,46],[-36,70],[0,76],[36,70],[62,46],[69,10],[64,-40],[0,-70]],true);
  face();ctx.fillStyle=m5grad(-60,0,60,0,C.skinL,C.skin);ctx.fill();ctx.save();face();ctx.clip();m5ell(66,10,24,80,'rgba(200,120,80,.35)');m5ell(0,84,60,18,'rgba(200,120,80,.3)');ctx.restore();face();m6fs(null);
  // bochechas
  const bl=(e==='apaixonado'||e==='envergonhado')?.55:.28;m5ell(-41+fx,28,15,9,`rgba(240,110,95,${bl+.12})`);m5ell(41+fx,28,15,9,`rgba(240,110,95,${bl+.12})`);
  // olhos
  const blink=(o.blink||0)>.5;const EY=0;
  for(const sd of[-1,1]){const ex=sd*28+fx,ey=EY;ctx.save();
    if(e==='rindo'||(blink&&e!=='apaixonado')){ctx.strokeStyle=C.ol;ctx.lineWidth=4.5;ctx.lineCap='round';ctx.beginPath();if(e==='rindo'){ctx.moveTo(ex-12,ey+4);ctx.quadraticCurveTo(ex,ey-10,ex+12,ey+4)}else{ctx.moveTo(ex-12,ey+2);ctx.quadraticCurveTo(ex,ey+8,ex+12,ey+2)}ctx.stroke();ctx.restore();continue}
    if(e==='apaixonado'){ctx.fillStyle='#e8344e';ctx.strokeStyle=C.ol;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(ex,ey+12);ctx.bezierCurveTo(ex-18,ey,ex-12,ey-16,ex,ey-6);ctx.bezierCurveTo(ex+12,ey-16,ex+18,ey,ex,ey+12);ctx.fill();ctx.stroke();ctx.restore();continue}
    const big=(e==='surpreso'||e==='assustado')?1.15:1, rx=17.5*big, ry=17*big;
    ctx.beginPath();ctx.ellipse(ex,ey,rx,ry,0,0,7);ctx.fillStyle='#fff';ctx.fill();
    ctx.save();ctx.clip();
    const ir=(e==='assustado')?6.5:(e==='surpreso'?9:12.5);const lx=ex+look*5+(e==='pensativo'?sd*0+5:0)-sd*1.5, ly=ey+1+(e==='pensativo'?-5:0)+(e==='envergonhado'?4:0);
    m5ell(lx,ly,ir,ir*1.08,C.iris);m5ell(lx,ly,ir*.5,ir*.55,C.pupil);m5ell(lx-ir*.35,ly-ir*.4,ir*.32,ir*.32,'#fff');
    // pálpebras
    ctx.fillStyle=C.skin;const oX=ex+sd*18,iX=ex-sd*18;
    if(e==='desconfiado'){ctx.fillRect(ex-20,ey-20,40,15)}
    if(e==='bravo'){ctx.beginPath();ctx.moveTo(oX,ey-22);ctx.lineTo(iX,ey-22);ctx.lineTo(iX,ey-2);ctx.lineTo(oX,ey-12);ctx.closePath();ctx.fill()}
    if(e==='triste'){ctx.beginPath();ctx.moveTo(oX,ey-22);ctx.lineTo(iX,ey-22);ctx.lineTo(iX,ey-12);ctx.lineTo(oX,ey-2);ctx.closePath();ctx.fill()}
    ctx.restore();
    ctx.beginPath();ctx.ellipse(ex,ey,rx,ry,0,0,7);ctx.strokeStyle=C.ol;ctx.lineWidth=3;ctx.stroke();
    // linha de cima (cílio)
    ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();
    if(e==='desconfiado'){ctx.moveTo(ex-rx,ey-5);ctx.lineTo(ex+rx,ey-5)}
    else if(e==='bravo'){ctx.moveTo(oX-sd*2,ey-12);ctx.lineTo(iX+sd*2,ey-3)}
    else if(e==='triste'){ctx.moveTo(oX-sd*2,ey-3);ctx.lineTo(iX+sd*2,ey-12)}
    else ctx.ellipse(ex,ey,rx,ry,0,Math.PI*1.08,Math.PI*1.92);
    ctx.stroke();ctx.restore()}
  // sobrancelhas
  ctx.strokeStyle=C.hairS;ctx.lineWidth=6;ctx.lineCap='round';
  for(const sd of[-1,1]){const bx=sd*26+fx;let y0=-30,y1=-34,y2=-30;
    if(e==='surpreso'||e==='assustado'){y0=-42;y1=-48;y2=-42}
    if(e==='bravo'){y0=-36;y1=-32;y2=-24}
    if(e==='triste'||e==='assustado'){y0=sd<0?-30:-30;y2=-42}
    if(e==='desconfiado'){if(sd>0){y0=-40;y1=-44;y2=-38}else{y0=-28;y1=-28;y2=-28}}
    if(e==='pensativo'&&sd>0){y0=-38;y1=-44;y2=-38}
    ctx.beginPath();ctx.moveTo(bx+sd*14,y0);ctx.quadraticCurveTo(bx,y1,bx-sd*14,y2);ctx.stroke()}
  // nariz
  ctx.strokeStyle='rgba(150,80,50,.9)';ctx.lineWidth=3.5;ctx.beginPath();ctx.moveTo(4+fx,8);ctx.quadraticCurveTo(10+fx,20,1+fx,22);ctx.stroke();
  // boca
  const mx=fx,my=40;ctx.lineCap='round';ctx.lineJoin='round';
  const open=(w,h,teeth)=>{ctx.beginPath();ctx.moveTo(mx-w,my-2);ctx.quadraticCurveTo(mx,my-6,mx+w,my-2);ctx.quadraticCurveTo(mx+w*.7,my+h,mx,my+h);ctx.quadraticCurveTo(mx-w*.7,my+h,mx-w,my-2);ctx.closePath();ctx.fillStyle='#6e2318';ctx.fill();
    ctx.save();ctx.clip();if(teeth){ctx.fillStyle='#fff';ctx.fillRect(mx-w,my-8,w*2,8)}m5ell(mx,my+h,w*.55,h*.45,'#f07b70');ctx.restore();
    ctx.beginPath();ctx.moveTo(mx-w,my-2);ctx.quadraticCurveTo(mx,my-6,mx+w,my-2);ctx.quadraticCurveTo(mx+w*.7,my+h,mx,my+h);ctx.quadraticCurveTo(mx-w*.7,my+h,mx-w,my-2);ctx.closePath();ctx.strokeStyle=C.ol;ctx.lineWidth=3.5;ctx.stroke()};
  const line=(pts)=>{ctx.strokeStyle=C.ol;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(pts[0],pts[1]);ctx.quadraticCurveTo(pts[2],pts[3],pts[4],pts[5]);ctx.stroke()};
  if(o.talk!=null&&!['rindo','assustado','apaixonado'].includes(e)&&o.talk>.1)open(12+o.talk*6,4+o.talk*16,true);
  else if(e==='feliz')open(18,16,true);
  else if(e==='rindo')open(22,26,true);
  else if(e==='surpreso'){m5ell(mx,my+6,9,12,'#6e2318',C.ol,3.5)}
  else if(e==='assustado'){ctx.beginPath();ctx.moveTo(mx-16,my+4);for(let k=0;k<=8;k++)ctx.lineTo(mx-16+k*4,my+4+(k%2?-5:3));ctx.lineTo(mx+16,my+14);ctx.lineTo(mx-16,my+14);ctx.closePath();ctx.fillStyle='#6e2318';ctx.fill();ctx.strokeStyle=C.ol;ctx.lineWidth=3;ctx.stroke()}
  else if(e==='triste')line([mx-14,my+8,mx,my-4,mx+14,my+8]);
  else if(e==='bravo'){line([mx-14,my+6,mx,my-2,mx+14,my+6])}
  else if(e==='desconfiado')line([mx-12,my+4,mx+4,my+6,mx+14,my-2]);
  else if(e==='pensativo'){m5ell(mx+8,my+4,5,4,'#6e2318',C.ol,3)}
  else if(e==='envergonhado'){ctx.strokeStyle=C.ol;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(mx-12,my+4);ctx.lineTo(mx-4,my);ctx.lineTo(mx+4,my+5);ctx.lineTo(mx+12,my+1);ctx.stroke()}
  else line([mx-14,my,mx,my+10,mx+14,my]);
  // cabelo (bagunçado, franja pro lado)
  const H=[[-66, 12, 's'], [-74, -14], [-83, -46], [-87, -65], [-67, -74], [-62, -94], [-40, -95], [-28, -111], [-7, -105], [12, -115], [28, -101], [50, -104], [59, -86], [80, -81], [81, -61], [98, -48], [78, -22], [68, 12, 's'], [64, -12], [56, -30], [44, -40], [40, -26, 's'], [30, -42], [14, -46], [4, -34, 's'], [-6, -46], [-22, -42], [-34, -30, 's'], [-40, -42], [-54, -36], [-60, -18, 's'], [-62, -30]];
  m6path(H,true);ctx.fillStyle=m5grad(-40,-120,40,0,'#5a3520',C.hair);ctx.fill();
  ctx.save();m6path(H,true);ctx.clip();m5ell(76,-50,26,70,C.hairS);
  ctx.strokeStyle='rgba(20,10,4,.55)';ctx.lineWidth=3;for(const [a,b,c,d,f,g] of [[-56,-40,-56,-70,-38,-88],[-6,-50,0,-76,14,-92],[34,-48,46,-68,60,-80]]){ctx.beginPath();ctx.moveTo(a,b);ctx.quadraticCurveTo(c,d,f,g);ctx.stroke()}
  ctx.restore();m6path(H,true);m6fs(null,4.5);
  ctx.strokeStyle=C.hairH;ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-50,-78);ctx.quadraticCurveTo(-30,-94,-6,-96);ctx.stroke();ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(20,-94);ctx.quadraticCurveTo(40,-92,56,-80);ctx.stroke();
  if(e==='assustado'||e==='envergonhado'){ctx.fillStyle='rgba(120,200,255,.95)';ctx.strokeStyle=C.ol;ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(60,-40);ctx.quadraticCurveTo(72,-20,66,-10);ctx.quadraticCurveTo(54,-14,60,-40);ctx.fill();ctx.stroke()}
}
