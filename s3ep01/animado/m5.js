// ===== MATHEUS RIG v5 — semi-cartoon profissional, articulado (ombro/cotovelo/pulso, quadril/joelho) =====
window.M5 = {
  skin:'#f7c8a2', skinS:'#e7a882', skinL:'#ffdcc0', skinO:'#b8754f',
  hair:'#3b2316', hairS:'#26150c', hairH:'#7a5038', hairO:'#170c06',
  hood:'#ff7a33', hoodS:'#e05f22', hoodL:'#ff9d5f', hoodO:'#a8410f', hoodD:'#cf5520',
  jean:'#4069c6', jeanS:'#2f539f', jeanO:'#1f3a75',
  shoe:'#ffffff', shoeS:'#d9dee8', shoeO:'#7d8698', sole:'#ff7a33',
  eyeW:'#ffffff', iris:'#7a4a2a', pupil:'#20130b', lineO:'#2a170d', mouth:'#7d2a1f', tongue:'#ff7f73', teeth:'#ffffff',
};
const D2R=Math.PI/180;
function m5tube(pts,w,fill,out){ctx.lineCap='round';ctx.lineJoin='round';
  const path=()=>{ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);if(pts.length===3){ctx.quadraticCurveTo(pts[1][0],pts[1][1],pts[2][0],pts[2][1])}else{for(const p of pts.slice(1))ctx.lineTo(p[0],p[1])}};
  path();ctx.strokeStyle=out;ctx.lineWidth=w+7;ctx.stroke();path();ctx.strokeStyle=fill;ctx.lineWidth=w;ctx.stroke()}
function m5mid(a,b,c){return [2*b[0]-(a[0]+c[0])/2, 2*b[1]-(a[1]+c[1])/2]}
function m5seg(x0,y0,x1,y1,w,fill,out){ctx.lineCap='round';ctx.strokeStyle=out;ctx.lineWidth=w+7;ctx.beginPath();ctx.moveTo(x0,y0);ctx.lineTo(x1,y1);ctx.stroke();
  ctx.strokeStyle=fill;ctx.lineWidth=w;ctx.beginPath();ctx.moveTo(x0,y0);ctx.lineTo(x1,y1);ctx.stroke()}
function m5ell(x,y,rx,ry,fill,out,ow,rot){ctx.beginPath();ctx.ellipse(x,y,rx,ry,rot||0,0,7);if(fill){ctx.fillStyle=fill;ctx.fill()}if(out){ctx.strokeStyle=out;ctx.lineWidth=ow||3.5;ctx.stroke()}}
function m5grad(x0,y0,x1,y1,a,b){const g=ctx.createLinearGradient(x0,y0,x1,y1);g.addColorStop(0,a);g.addColorStop(1,b);return g}
// cadeia de 2 ossos: devolve [cotovelo, ponta]
function m5chain(x,y,a1,a2,l1,l2){const ex=x+Math.sin(a1*D2R)*l1, ey=y+Math.cos(a1*D2R)*l1;const a=a1+a2;return [ex,ey,ex+Math.sin(a*D2R)*l2,ey+Math.cos(a*D2R)*l2,a]}
function m5hand(x,y,ang,side,C,kind){ctx.save();ctx.translate(x,y);ctx.rotate(-ang*D2R);
  if(kind==='point'){m5seg(0,0,0,26,15,C.skin,C.skinO);m5ell(0,4,15,15,C.skin,C.skinO,3.5);m5ell(side*-12,2,6,10,C.skin,C.skinO,3)}
  else if(kind==='fist'){m5ell(0,6,16,15,C.skin,C.skinO,3.5);ctx.strokeStyle=C.skinO;ctx.lineWidth=2.5;for(const k of [-6,0,6]){ctx.beginPath();ctx.moveTo(k,12);ctx.lineTo(k,18);ctx.stroke()}}
  else if(kind==='open'){for(const k of [-12,-4,4,12]){m5seg(k*.9,6,k*1.3,26,8,C.skin,C.skinO)}m5ell(0,6,16,15,C.skin,null);m5ell(side*-15,0,6,11,C.skin,C.skinO,3,side*.6)}
  else{m5ell(0,8,16,17,C.skin,C.skinO,3.5);m5ell(side*-13,2,6,10,C.skin,C.skinO,3,side*.5)}
  ctx.restore()}
function m5shoe(x,y,ang,side,C){ctx.save();ctx.translate(x,y);ctx.rotate(-ang*D2R);
  ctx.beginPath();ctx.moveTo(-20,-6);ctx.lineTo(18,-6);ctx.quadraticCurveTo(side*46+ (side<0?-4:4),2,side*40,22);ctx.lineTo(-side*22,22);ctx.quadraticCurveTo(-side*26,6,-20,-6);ctx.closePath();
  ctx.fillStyle=m5grad(0,-6,0,22,C.shoe,C.shoeS);ctx.fill();ctx.strokeStyle=C.shoeO;ctx.lineWidth=3.5;ctx.stroke();
  ctx.fillStyle=C.sole;ctx.beginPath();ctx.roundRect(side<0?side*44:-24,18,68,9,4);ctx.fill();
  ctx.strokeStyle='#ff9a5c';ctx.lineWidth=2.6;ctx.lineCap='round';for(const k of [0,7]){ctx.beginPath();ctx.moveTo(-8+side*k,-2+k*.4);ctx.lineTo(8+side*k,4+k*.4);ctx.moveTo(8+side*k,-2+k*.4);ctx.lineTo(-8+side*k,4+k*.4);ctx.stroke()}
  ctx.strokeStyle='rgba(125,134,152,.5)';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(side*-22,14);ctx.lineTo(side*38,14);ctx.stroke();
  ctx.restore()}

// pose padrão
const M5POSE={torso:0,head:0,tilt:0,
  armL:[12,-8,'rest'],armR:[12,-8,'rest'],   // [ombro(º, 0 = pra baixo; + = pra fora no lado esquerdo), cotovelo, mão]
  legL:[4,0],legR:[4,0]};
function matheus5(gx,gy,s,o){
  o=Object.assign({},M5POSE,o||{});const C=M5,e=o.expr||'feliz',t=o.t||0;
  const TH=75,SH=72,UA=66,FA=60,TORSO=150;
  // altura do quadril a partir do chão (pernas esticadas)
  const hipY=-(TH+SH+26);
  ctx.save();ctx.translate(gx,gy);ctx.scale(s,s);
  // sombra
  const g=ctx.createRadialGradient(0,0,4,0,0,130);g.addColorStop(0,'rgba(0,0,0,.3)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(0,3,130,22,0,0,7);ctx.fill();
  ctx.translate(0,hipY+(o.lift||0));
  // ---- pernas ----
  const leg=(side,p)=>{const hx=side*20;const [kx,ky,fx,fy,a]=m5chain(hx,0,side*p[0],side*p[1],TH,SH);
    // coxa e canela
    m5tube([[hx,0],m5mid([hx,0],[kx,ky],[fx,fy]),[fx,fy]],38,side<0?C.jean:C.jeanS,C.jeanO);
    ctx.strokeStyle='rgba(255,255,255,.15)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(hx+side*-6,8);ctx.quadraticCurveTo(kx+side*-6,ky,fx+side*-6,fy-14);ctx.stroke();
    const mx_=m5mid([hx,0],[kx,ky],[fx,fy]);
    // costura lateral pespontada
    ctx.setLineDash([4,4]);ctx.strokeStyle='rgba(255,200,120,.55)';ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(hx+side*12,10);ctx.quadraticCurveTo(mx_[0]+side*12,mx_[1],fx+side*12,fy-16);ctx.stroke();ctx.setLineDash([]);
    // vincos do joelho
    ctx.strokeStyle='rgba(20,40,90,.45)';ctx.lineWidth=2.4;for(const k of [-7,3]){ctx.beginPath();ctx.moveTo(kx-10,ky+k);ctx.quadraticCurveTo(kx,ky+k+5,kx+10,ky+k-1);ctx.stroke()}
    // barra dobrada
    ctx.lineCap='round';ctx.strokeStyle=C.jeanO;ctx.lineWidth=27;ctx.beginPath();ctx.moveTo(fx-17,fy-6);ctx.lineTo(fx+17,fy-6);ctx.stroke();ctx.strokeStyle='#5a82d8';ctx.lineWidth=20;ctx.stroke();
    m5shoe(fx,fy+6,a,side,C)};
  leg(-1,o.legL);leg(1,o.legR);
  // ---- tronco ----
  ctx.save();ctx.rotate(o.torso*D2R);
  const br_=1+.014*Math.sin((o.t||0)*2.4);ctx.scale(1,br_);const ny=-TORSO;
  const raised=p=>p[0]>70;
  // ---- braços ----
  const arm=(side,p,pass)=>{const sx=side*58,sy=ny+20;const [ex,ey,hx,hy,a]=m5chain(sx,sy,side*p[0],side*p[1],UA,FA);
    const col=side<0?C.hoodL:C.hood;const pts=[[sx,sy],m5mid([sx,sy],[ex,ey],[hx,hy]),[hx,hy]];
    if(pass==='out'){m5tube(pts,31,C.hoodO,C.hoodO);return}
    if(pass==='fill'){ctx.lineCap='round';ctx.strokeStyle=col;ctx.lineWidth=31;ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);ctx.quadraticCurveTo(pts[1][0],pts[1][1],pts[2][0],pts[2][1]);ctx.stroke()}
    else m5tube(pts,31,col,C.hoodO);
    // punho (faixa na mesma manga, sem emenda)
    const cx=ex+(hx-ex)*.82, cy=ey+(hy-ey)*.82;ctx.lineCap='round';ctx.strokeStyle=C.hoodD;ctx.lineWidth=31;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(hx,hy);ctx.stroke();
    ctx.lineWidth=2;ctx.strokeStyle='rgba(150,50,10,.55)';
    for(const f of [.82,.9,.96]){const rx=ex+(hx-ex)*f, ry=ey+(hy-ey)*f, nx=-(hy-ey), ny2=(hx-ex), nl=Math.hypot(nx,ny2)||1;ctx.beginPath();ctx.moveTo(rx-nx/nl*12,ry-ny2/nl*12);ctx.lineTo(rx+nx/nl*12,ry+ny2/nl*12);ctx.stroke()}
    // vincos do cotovelo
    ctx.strokeStyle='rgba(160,55,10,.5)';ctx.lineWidth=2.4;{const ux=(hx-sx), uy=(hy-sy), ul=Math.hypot(ux,uy)||1;for(const k of [-6,5]){ctx.beginPath();ctx.moveTo(ex-uy/ul*11+ux/ul*k,ey+ux/ul*11+uy/ul*k);ctx.quadraticCurveTo(ex+ux/ul*(k+4),ey+uy/ul*(k+4),ex+uy/ul*11+ux/ul*k,ey-ux/ul*11+uy/ul*k);ctx.stroke()}}
    // costura do ombro
    m5hand(hx+Math.sin(a*D2R)*12,hy+Math.cos(a*D2R)*12,a,side,C,p[2])};
  if(!raised(o.armL))arm(-1,o.armL);if(!raised(o.armR))arm(1,o.armR);
  if(raised(o.armL))arm(-1,o.armL,'out');if(raised(o.armR))arm(1,o.armR,'out');
  // braço de trás? (frontal: ambos atrás do tronco nos ombros, mas desenhamos depois p/ ficar na frente)
  const torso=()=>{ctx.beginPath();ctx.moveTo(-56,ny+10);ctx.quadraticCurveTo(-70,ny+80,-60,6);ctx.quadraticCurveTo(0,18,60,6);ctx.quadraticCurveTo(70,ny+80,56,ny+10);ctx.quadraticCurveTo(0,ny-8,-56,ny+10);ctx.closePath()};
  torso();ctx.fillStyle=m5grad(-60,0,60,0,C.hoodL,C.hood);ctx.fill();
  ctx.save();torso();ctx.clip();
  ctx.fillStyle=C.hoodS;ctx.beginPath();ctx.ellipse(70,-70,38,110,0,0,7);ctx.fill();
  ctx.fillStyle=C.hoodD;ctx.beginPath();ctx.roundRect(-80,-14,160,26,10);ctx.fill();
  ctx.fillStyle='rgba(0,0,0,.08)';ctx.beginPath();ctx.moveTo(-36,-72);ctx.lineTo(36,-72);ctx.lineTo(44,-18);ctx.lineTo(-44,-18);ctx.closePath();ctx.fill();
  ctx.setLineDash([5,5]);ctx.strokeStyle='rgba(140,45,10,.5)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-44,-18);ctx.lineTo(-36,-72);ctx.lineTo(36,-72);ctx.lineTo(44,-18);ctx.stroke();ctx.setLineDash([]);
  ctx.strokeStyle='rgba(150,50,10,.28)';ctx.lineWidth=2;for(let k=-76;k<=76;k+=8){ctx.beginPath();ctx.moveTo(k,-12);ctx.lineTo(k,10);ctx.stroke()}
  ctx.strokeStyle='rgba(160,55,10,.35)';ctx.lineWidth=2.6;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(-54,ny+62);ctx.quadraticCurveTo(-40,ny+82,-44,ny+104);ctx.stroke();
  ctx.beginPath();ctx.moveTo(54,ny+58);ctx.quadraticCurveTo(42,ny+80,48,ny+100);ctx.stroke();
  ctx.beginPath();ctx.moveTo(-30,-20);ctx.quadraticCurveTo(-20,-26,-8,-22);ctx.stroke();
  ctx.beginPath();ctx.moveTo(14,-24);ctx.quadraticCurveTo(26,-28,36,-22);ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,.10)';ctx.beginPath();ctx.ellipse(-30,ny+50,16,40,-.2,0,7);ctx.fill();
  ctx.restore();torso();ctx.strokeStyle=C.hoodO;ctx.lineWidth=4;ctx.stroke();
  // capuz/gola
  m5ell(0,ny+8,44,17,C.hoodD,C.hoodO,3.5);
  // cordões
  ctx.lineCap='round';for(const sd of [-1,1]){ctx.strokeStyle='#fff6ea';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(sd*12,ny+14);ctx.quadraticCurveTo(sd*15,ny+36,sd*12,ny+52);ctx.stroke();ctx.fillStyle='#d8d0c2';ctx.beginPath();ctx.roundRect(sd*12-3.5,ny+48,7,11,3);ctx.fill()}
  if(raised(o.armL))arm(-1,o.armL,'fill');if(raised(o.armR))arm(1,o.armR,'fill');
  // ---- pescoço + cabeça ----
  ctx.save();ctx.translate(0,ny-6);
  m5seg(0,4,0,-16,26,C.skinS,C.skinO);
  ctx.rotate(o.head*D2R);ctx.translate(0,-96);
  const turn=o.turn||0; // -1..1 virar o rosto
  const fx=turn*14;
  // orelhas
  m5ell(-80+fx*.4,8,15,20,C.skin,C.skinO,3.5);m5ell(80+fx*.4,8,15,20,C.skinS,C.skinO,3.5);
  ctx.strokeStyle='#d39271';ctx.lineWidth=3;ctx.beginPath();ctx.arc(-80+fx*.4,8,8,-1.2,1.2);ctx.stroke();ctx.beginPath();ctx.arc(80+fx*.4,8,8,1.9,4.3);ctx.stroke();
  // rosto
  const face=()=>{ctx.beginPath();ctx.moveTo(-80,-10);ctx.bezierCurveTo(-84,60,-46,96,0,96);ctx.bezierCurveTo(46,96,84,60,80,-10);ctx.bezierCurveTo(78,-80,-78,-80,-80,-10);ctx.closePath()};
  face();ctx.fillStyle=m5grad(-80,0,80,0,C.skinL,C.skin);ctx.fill();
  ctx.save();face();ctx.clip();m5ell(84,10,26,90,'rgba(205,130,95,.35)');m5ell(0,104,80,22,'rgba(205,130,95,.25)');ctx.restore();
  face();ctx.strokeStyle=C.skinO;ctx.lineWidth=4;ctx.stroke();
  // bochechas
  const blush=(e==='apaixonado'||e==='envergonhado')?.75:.45;
  m5ell(-48+fx,36,16,10,`rgba(255,120,105,${blush})`);m5ell(48+fx,36,16,10,`rgba(255,120,105,${blush})`);
  // ---- olhos ----
  const E={feliz:{h:1,lid:0,happy:0},rindo:{happy:1},surpreso:{h:1.25,small:1},bravo:{h:.85,lidA:1},triste:{h:1,lidS:1},assustado:{h:1.3,small:1},desconfiado:{h:.55,lid:1},pensativo:{h:1,look:1},apaixonado:{heart:1},envergonhado:{h:.9,look:-1}}[e]||{h:1};
  const look=(o.look!=null?o.look:(E.look||0));
  for(const sd of [-1,1]){const ex=sd*32+fx, ey=8;
    if((o.blink||0)>.5&&!E.heart){ctx.strokeStyle=C.lineO;ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(ex-13,ey+2);ctx.quadraticCurveTo(ex,ey+9,ex+13,ey+2);ctx.stroke();continue}
    if(E.happy){ctx.strokeStyle=C.lineO;ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(ex-14,ey+4);ctx.quadraticCurveTo(ex,ey-12,ex+14,ey+4);ctx.stroke();continue}
    if(E.heart){ctx.fillStyle='#ff3d5a';ctx.beginPath();ctx.moveTo(ex,ey+14);ctx.bezierCurveTo(ex-24,ey-2,ex-12,ey-20,ex,ey-6);ctx.bezierCurveTo(ex+12,ey-20,ex+24,ey-2,ex,ey+14);ctx.fill();continue}
    const h=E.h||1, big=(E.small?(e==='assustado'?.85:1.18):1)*(h<1?1:1);
    const ix=ex+look*4, iy=ey+2, rx=12.5*big, ry=17*big*Math.min(1,Math.max(h,.9));
    // olho estilo anterior: íris escura grande, sem branco, com brilhos
    ctx.save();
    m5ell(ix,iy,rx,ry,'#5a3520');m5ell(ix,iy+2,rx*.64,ry*.66,C.pupil);
    m5ell(ix-rx*.32,iy-ry*.4,rx*.38,ry*.3,'#fff');m5ell(ix+rx*.4,iy+ry*.38,rx*.18,rx*.18,'#fff');
    // pálpebras (cobrem com pele)
    ctx.beginPath();ctx.ellipse(ix,iy,rx+2,ry+2,0,0,7);ctx.clip();ctx.fillStyle=C.skin;
    const oX=ex+sd*18, iX=ex-sd*18;
    if(E.lid){ctx.fillRect(ex-20,iy-ry-4,40,ry*.95)}
    if(E.lidA){ctx.beginPath();ctx.moveTo(oX,iy-ry-6);ctx.lineTo(iX,iy-ry-6);ctx.lineTo(iX,iy-2);ctx.lineTo(oX,iy-ry*.7);ctx.closePath();ctx.fill()}
    if(E.lidS){ctx.beginPath();ctx.moveTo(oX,iy-ry-6);ctx.lineTo(iX,iy-ry-6);ctx.lineTo(iX,iy-ry*.7);ctx.lineTo(oX,iy-2);ctx.closePath();ctx.fill()}
    ctx.restore();
    // linha de cílio (arco de cima)
    ctx.strokeStyle=C.lineO;ctx.lineWidth=3.5;ctx.lineCap='round';ctx.beginPath();
    if(E.lid){ctx.moveTo(ix-rx-2,iy-ry*.05);ctx.lineTo(ix+rx+2,iy-ry*.05)}
    else if(E.lidA){ctx.moveTo(ex+sd*15,iy-ry*.75);ctx.lineTo(ex-sd*15,iy-3)}
    else if(E.lidS){ctx.moveTo(ex+sd*15,iy-3);ctx.lineTo(ex-sd*15,iy-ry*.75)}
    else ctx.arc(ix,iy+1,ry*.95,-2.6,-.55);
    ctx.stroke();
  }
  // sobrancelhas (bem aparentes)
  ctx.strokeStyle=C.hair;ctx.lineWidth=9;ctx.lineCap='round';
  for(const sd of [-1,1]){const bx=sd*32+fx;let by=-28;ctx.beginPath();
    if(e==='bravo'){ctx.moveTo(bx-sd*-16,by-6);ctx.lineTo(bx+sd*-16,by+8)}
    else if(e==='triste'||e==='assustado'){ctx.moveTo(bx-sd*-16,by+6);ctx.lineTo(bx+sd*-16,by-8-(e==='assustado'?6:0))}
    else if(e==='surpreso'){by-=12;ctx.moveTo(bx-16,by);ctx.quadraticCurveTo(bx,by-12,bx+16,by)}
    else if(e==='desconfiado'){if(sd>0){by-=10;ctx.moveTo(bx-16,by+2);ctx.quadraticCurveTo(bx,by-10,bx+16,by-2)}else{ctx.moveTo(bx-16,by+4);ctx.lineTo(bx+16,by+4)}}
    else if(e==='pensativo'&&sd>0){by-=8;ctx.moveTo(bx-16,by);ctx.quadraticCurveTo(bx,by-10,bx+16,by-4)}
    else{ctx.moveTo(bx-16,by);ctx.quadraticCurveTo(bx,by-8,bx+16,by)}
    ctx.stroke()}
  // nariz
  ctx.strokeStyle='#cf8a66';ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(fx-2,30);ctx.quadraticCurveTo(fx-9,42,fx+3,43);ctx.stroke();
  // ---- boca ----
  const mx=fx, my=64;ctx.lineJoin='round';
  const openMouth=(w,h,teeth,tongue)=>{ctx.beginPath();ctx.moveTo(mx-w,my-4);ctx.quadraticCurveTo(mx,my-8,mx+w,my-4);ctx.quadraticCurveTo(mx+w*.7,my+h,mx,my+h);ctx.quadraticCurveTo(mx-w*.7,my+h,mx-w,my-4);ctx.closePath();
    ctx.fillStyle=C.mouth;ctx.fill();ctx.save();ctx.clip();if(teeth){ctx.fillStyle=C.teeth;ctx.fillRect(mx-w,my-10,w*2,12)}if(tongue){m5ell(mx,my+h,w*.55,h*.45,C.tongue)}ctx.restore();
    ctx.beginPath();ctx.moveTo(mx-w,my-4);ctx.quadraticCurveTo(mx,my-8,mx+w,my-4);ctx.quadraticCurveTo(mx+w*.7,my+h,mx,my+h);ctx.quadraticCurveTo(mx-w*.7,my+h,mx-w,my-4);ctx.closePath();ctx.strokeStyle=C.lineO;ctx.lineWidth=4;ctx.stroke()};
  if(o.talk!=null&&!['rindo','bravo','assustado','apaixonado'].includes(e)){const k=o.talk;
    if(k<.1){ctx.strokeStyle=C.lineO;ctx.lineWidth=5.5;ctx.lineCap='round';ctx.beginPath();const sm=(e==='triste'||e==='desconfiado')?-6:8;ctx.moveTo(mx-20,my+4);ctx.quadraticCurveTo(mx,my+4+sm,mx+20,my+4);ctx.stroke()}
    else openMouth(16+k*10,4+k*26,1,1)}
  else if(e==='feliz') openMouth(26,26,1,1);
  else if(e==='rindo') openMouth(32,36,1,1);
  else if(e==='surpreso'){m5ell(mx,my+8,14,18,C.mouth,C.lineO,4);m5ell(mx,my+16,8,6,C.tongue)}
  else if(e==='assustado'){ctx.beginPath();ctx.moveTo(mx-26,my+8);for(let k=0;k<=8;k++)ctx.lineTo(mx-26+k*6.5,my+8+(k%2?-6:6));ctx.lineTo(mx+26,my+22);ctx.lineTo(mx-26,my+22);ctx.closePath();ctx.fillStyle=C.mouth;ctx.fill();ctx.strokeStyle=C.lineO;ctx.lineWidth=4;ctx.stroke()}
  else if(e==='bravo'){ctx.fillStyle=C.teeth;ctx.beginPath();ctx.roundRect(mx-24,my+2,48,18,6);ctx.fill();ctx.strokeStyle=C.lineO;ctx.lineWidth=4;ctx.stroke();ctx.lineWidth=2.5;for(const k of [-12,0,12]){ctx.beginPath();ctx.moveTo(mx+k,my+2);ctx.lineTo(mx+k,my+20);ctx.stroke()}ctx.beginPath();ctx.moveTo(mx-24,my+11);ctx.lineTo(mx+24,my+11);ctx.stroke()}
  else if(e==='triste'){ctx.strokeStyle=C.lineO;ctx.lineWidth=5.5;ctx.beginPath();ctx.moveTo(mx-20,my+16);ctx.quadraticCurveTo(mx,my-2,mx+20,my+16);ctx.stroke();m5ell(-34+fx,34,5,9,'rgba(110,190,255,.9)')}
  else if(e==='desconfiado'){ctx.strokeStyle=C.lineO;ctx.lineWidth=5.5;ctx.beginPath();ctx.moveTo(mx-18,my+8);ctx.quadraticCurveTo(mx+6,my+12,mx+22,my);ctx.stroke()}
  else if(e==='pensativo'){ctx.strokeStyle=C.lineO;ctx.lineWidth=5.5;ctx.beginPath();ctx.moveTo(mx-14,my+8);ctx.quadraticCurveTo(mx+2,my+4,mx+16,my+10);ctx.stroke()}
  else if(e==='envergonhado'){ctx.strokeStyle=C.lineO;ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(mx-14,my+8);ctx.lineTo(mx-5,my+3);ctx.lineTo(mx+4,my+9);ctx.lineTo(mx+14,my+4);ctx.stroke()}
  else {openMouth(22,20,1,1)}
  // ---- cabelo ----
  const hair=()=>{ctx.beginPath();ctx.moveTo(-86,6);ctx.bezierCurveTo(-98,-74,-40,-112,10,-104);ctx.bezierCurveTo(72,-100,98,-58,88,4);
    ctx.bezierCurveTo(82,-24,70,-38,54,-42);ctx.lineTo(44,-28);ctx.lineTo(30,-46);ctx.lineTo(14,-30);ctx.lineTo(-2,-52);ctx.lineTo(-18,-34);ctx.lineTo(-36,-52);ctx.lineTo(-52,-34);ctx.bezierCurveTo(-68,-30,-80,-14,-86,6);ctx.closePath()};
  hair();ctx.fillStyle=m5grad(-80,-100,80,0,'#55331f',C.hair);ctx.fill();
  ctx.save();hair();ctx.clip();m5ell(90,-30,30,70,C.hairS);ctx.restore();
  hair();ctx.strokeStyle=C.hairO;ctx.lineWidth=4;ctx.stroke();
  ctx.strokeStyle=C.hairH;ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-52,-76);ctx.quadraticCurveTo(-24,-94,8,-92);ctx.stroke();ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(26,-88);ctx.quadraticCurveTo(46,-84,60,-72);ctx.stroke();
  ctx.beginPath();ctx.moveTo(2,-102);ctx.quadraticCurveTo(16,-136,42,-128);ctx.quadraticCurveTo(26,-118,24,-100);ctx.closePath();ctx.fillStyle=C.hair;ctx.fill();ctx.strokeStyle=C.hairO;ctx.lineWidth=3.5;ctx.stroke();
  // gotinha de suor (assustado/envergonhado)
  if(e==='assustado'||e==='envergonhado'){ctx.fillStyle='rgba(120,200,255,.95)';ctx.beginPath();ctx.moveTo(74,-30);ctx.quadraticCurveTo(88,-8,80,2);ctx.quadraticCurveTo(66,-2,74,-30);ctx.fill()}
  ctx.restore(); // cabeça
  ctx.restore(); // tronco
  ctx.restore();
}
// poses prontas
window.M5POSES={
  parado:{expr:'feliz'},
  acenando:{expr:'feliz',armR:[150,30,'open'],armL:[12,-8,'rest'],head:-5},
  apontando:{expr:'surpreso',armR:[115,10,'point'],armL:[14,-40,'rest'],head:6,look:1,torso:-3},
  comemorando:{expr:'rindo',armL:[155,-20,'fist'],armR:[155,-20,'fist'],legL:[12,0],legR:[12,0]},
  assustado:{expr:'assustado',armL:[38,-150,'open'],armR:[38,-150,'open'],torso:-3,head:-5,legL:[14,0],legR:[14,0]},
  pensando:{expr:'pensativo',armR:[25,-150,'fist'],armL:[30,-75,'rest'],head:8,look:1},
};
