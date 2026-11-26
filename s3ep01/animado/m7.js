// ===== MATHEUS v7 — 2D flat, sem contorno, gordinho e arredondado (referência do usuário 25/11) =====
window.M7={skin:'#f7c49d',skinS:'#ecaa82',skinD:'#d98f68',cheek:'rgba(240,120,110,.38)',
  hair:'#5a2e17',hairD:'#3f1f0f',hairM:'#74401f',hairL:'#93572e',
  hood:'#ff6b1a',hoodS:'#eb5a10',hoodD:'#d24c0a',hoodL:'#ff8236',
  jean:'#2a4ea6',jeanS:'#20408d',jeanD:'#183274',
  shoe:'#f6f3ee',shoeS:'#e3ddd4',shoeD:'#cfc7bc',tee:'#9aa1ad',
  iris:'#5a2f17',pupil:'#1d0e06',mouth:'#9c3a2a',lash:'#2b160b'};
function m7lock(x0,y0,x1,y1,bend,w,col){ // mecha afinando até a ponta
  const dx=x1-x0,dy=y1-y0,L=Math.hypot(dx,dy)||1,nx=-dy/L,ny=dx/L;const cx=(x0+x1)/2+nx*bend,cy=(y0+y1)/2+ny*bend;
  ctx.beginPath();ctx.moveTo(x0+nx*w/2,y0+ny*w/2);ctx.quadraticCurveTo(cx+nx*w*.35,cy+ny*w*.35,x1,y1);ctx.quadraticCurveTo(cx-nx*w*.35,cy-ny*w*.35,x0-nx*w/2,y0-ny*w/2);ctx.closePath();ctx.fillStyle=col;ctx.fill()}
function m7leaf(x0,y0,x1,y1,bend,w,col){const dx=x1-x0,dy=y1-y0,L=Math.hypot(dx,dy)||1,nx=-dy/L,ny=dx/L;
    const m1=[x0+dx*.35+nx*bend,y0+dy*.35+ny*bend],m2=[x0+dx*.75+nx*bend*.8,y0+dy*.75+ny*bend*.8];
    ctx.beginPath();ctx.moveTo(x0+nx*w/2,y0+ny*w/2);
    ctx.bezierCurveTo(m1[0]+nx*w*.55,m1[1]+ny*w*.55,m2[0]+nx*w*.3,m2[1]+ny*w*.3,x1+nx*3,y1+ny*3);
    ctx.quadraticCurveTo(x1+dx/L*4,y1+dy/L*4,x1-nx*3,y1-ny*3);
    ctx.bezierCurveTo(m2[0]-nx*w*.3,m2[1]-ny*w*.3,m1[0]-nx*w*.55,m1[1]-ny*w*.55,x0-nx*w/2,y0-ny*w/2);ctx.closePath();ctx.fillStyle=col;ctx.fill()}
function m7blob(pts,col){m6path(pts,true);ctx.fillStyle=col;ctx.fill()}
function m7tubeF(pts,w,col,cap){ctx.lineCap=cap||'round';ctx.lineJoin='round';ctx.strokeStyle=col;ctx.lineWidth=w;ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);ctx.quadraticCurveTo(pts[1][0],pts[1][1],pts[2][0],pts[2][1]);ctx.stroke()}
const M7POSE={armL:[10,-60,'pocket'],armR:[10,-60,'pocket'],legL:[4,0],legR:[4,0]};
window.M5POSES={
  parado:{},
  acenando:{expr:'feliz',armR:[128,42,'open']},
  apontando:{expr:'feliz',armR:[80,-5,'point']},
  comemorando:{expr:'rindo',armL:[150,20,'fist'],armR:[150,20,'fist'],legL:[8,0],legR:[8,0]},
  assustado:{expr:'assustado',armL:[40,-150,'open'],armR:[40,-150,'open']},
  pensando:{expr:'pensativo',armR:[24,-145,'fist'],head:6}};
function m7hand(x,y,ang,side,kind){const C=M7;ctx.save();ctx.translate(x,y);ctx.rotate(-ang*D2R);
  if(kind==='open'){for(const k of[-10,-3.5,3,9.5]){ctx.strokeStyle=C.skin;ctx.lineWidth=8;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(k*.8,6);ctx.lineTo(k*1.25,24);ctx.stroke()}m5ell(0,6,15,13,C.skin);m5ell(side*-14,0,6,10,C.skin,null,0,side*.6);m5ell(4,10,8,6,C.skinS)}
  else if(kind==='point'){ctx.strokeStyle=C.skin;ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(0,6);ctx.lineTo(0,28);ctx.stroke();m5ell(0,6,14,13,C.skin);m5ell(side*-12,2,6,9,C.skin)}
  else if(kind==='fist'){m5ell(0,6,15,14,C.skin);m5ell(3,10,9,6,C.skinS)}
  else{m5ell(0,8,14,15,C.skin);m5ell(4,12,8,7,C.skinS)}
  ctx.restore()}
function matheus5(gx,gy,s,o){
  o=Object.assign({},M7POSE,o||{});const C=Object.assign({},M7,o.pal||{});o._C=C;const _M7=window.M7;window.M7=C;const top=o.top||'hoodie',bottom=o.bottom||'cargo';const e=o.expr||'feliz',t=o.t||0;
  if(top!=='hoodie')for(const k of['armL','armR']){if(o[k][2]==='pocket')o[k]=[8,-12,'rest']}
  if(top==='hoodie')for(const k of['armL','armR']){const p=o[k];if(p&&p[2]==='rest'&&p[0]<=20)o[k]=[10,-60,'pocket']}
  ctx.save();ctx.translate(gx,gy-(o.lift||0)*s);ctx.scale(s,s);
  ctx.fillStyle='rgba(0,0,0,.22)';ctx.beginPath();ctx.ellipse(0,2,105,14,0,0,7);ctx.fill();
  const HIP=-215;
  // ---- pernas ----
  const leg=(side,p)=>{const hx=side*30;const [kx,ky,fx,fy]=m5chain(hx,HIP,side*p[0],side*p[1],92,92);const mid=m5mid([hx,HIP],[kx,ky],[fx,fy]);
    if(bottom==='skirt'){const lx=side*26;m7tubeF([[lx,HIP+60],[lx,-120],[lx,fy+8]],24,side<0?C.skin:C.skinS);
      ctx.save();ctx.translate(lx,fy+30);m7blob([[-22,0,'s'],[-24,-16],[-12,-26],[12,-26],[24,-16],[22,0,'s']],C.shoe);m7blob([[-24,-4,'s'],[24,-4,'s'],[22,4,'s'],[-22,4,'s']],C.shoeD);m5ell(0,-20,8,4,C.shoeS);ctx.restore();return}
    // tênis de frente (bico pra frente)
    ctx.save();ctx.translate(fx+side*4,fy+30);
    m7blob([[-34,-2,'s'],[-36,-22],[-24,-40],[0,-44],[24,-40],[36,-22],[34,-2,'s']],C.shoe);
    m7blob([[-36,-6,'s'],[36,-6,'s'],[35,4],[28,10,'s'],[-28,10,'s'],[-35,4]],C.shoeD);
    m7blob([[-34,-11,'s'],[34,-11,'s'],[34,-6,'s'],[-34,-6,'s']],C.shoeS);
    m7blob([[-22,-30],[0,-38],[22,-30],[14,-20],[0,-16],[-14,-20]],C.shoeS);
    ctx.restore();
    // calça cargo larga, caindo até o pé (cobre o tênis, só a ponta aparece)
    const col=side<0?C.jean:C.jeanS;const gY=fy+2;
    const P=[[side*2,HIP-12,'s'],[hx+side*38,HIP-12],[hx+side*46,HIP+50],[kx+side*44,ky],[fx+side*46,fy-20],[fx+side*48,gY-4],[fx+side*40,gY,'s'],[fx+side*8,gY-8],[fx-side*22,gY+2,'s'],[fx-side*36,gY-2,'s'],[fx-side*34,fy-24],[kx-side*28,ky],[side*10,HIP+90],[side*2,HIP+70]];
    m7blob(P,col);
    ctx.save();m6path(P,true);ctx.clip();
    ctx.globalAlpha=.5;m7tubeF([[side*6,HIP],[kx-side*30,ky],[fx-side*36,gY]],18,C.jeanD,'butt');ctx.globalAlpha=1;
    // pregas amontoadas no pé (irregulares)
    ctx.globalAlpha=.5;
    m7blob([[fx-side*40,fy-34],[fx-side*10,fy-46],[fx+side*30,fy-30],[fx+side*4,fy-36]],C.jeanD);
    m7blob([[fx+side*44,fy-6],[fx+side*14,fy-18],[fx-side*26,fy-4],[fx+side*8,fy-10]],C.jeanD);
    m7blob([[fx-side*42,fy+12],[fx-side*6,fy+2],[fx+side*34,fy+18],[fx-side*4,fy+8]],C.jeanD);
    ctx.globalAlpha=.3;m7blob([[fx-side*30,fy-62],[fx+side*6,fy-70],[fx+side*36,fy-58],[fx+side*6,fy-64]],C.jeanD);
    ctx.globalAlpha=1;
    // vinco do joelho
    ctx.globalAlpha=.45;m7blob([[kx-side*24,ky-8],[kx+side*4,ky-18],[kx+side*30,ky-6],[kx+side*4,ky-10]],C.jeanD);ctx.globalAlpha=1;
    // bolso cargo na lateral da coxa
    const px=hx+side*26,py=HIP+92;
    m7blob([[px-side*22,py-26,'s'],[px+side*20,py-28,'s'],[px+side*22,py+30],[px+side*16,py+36,'s'],[px-side*18,py+36,'s'],[px-side*22,py+28]],C.jeanD);
    m7blob([[px-side*20,py-26,'s'],[px+side*18,py-28,'s'],[px+side*20,py+28],[px+side*14,py+32,'s'],[px-side*16,py+32,'s'],[px-side*20,py+26]],col);
    m7blob([[px-side*24,py-30,'s'],[px+side*22,py-32,'s'],[px+side*22,py-10,'s'],[px-side*24,py-10,'s']],C.jeanS);
    m5ell(px,py-14,3.5,3.5,'#c9b37a');
    ctx.globalAlpha=.5;m7blob([[px-side*24,py-10],[px+side*22,py-10],[px+side*22,py-6],[px-side*24,py-6]],C.jeanD);ctx.globalAlpha=1;
    ctx.restore()};
  if(o.sit){// sentado de frente: coxas vindo na direção da câmera, canelas descendo
    const SY=-150;
    for(const side of[-1,1]){const col=side<0?C.jean:C.jeanS,kx=side*46;
      ctx.save();ctx.translate(kx+side*2,30);m7blob([[-34,-2,'s'],[-36,-22],[-24,-40],[0,-44],[24,-40],[36,-22],[34,-2,'s']],C.shoe);m7blob([[-36,-6,'s'],[36,-6,'s'],[35,4],[28,10,'s'],[-28,10,'s'],[-35,4]],C.shoeD);m7blob([[-22,-30],[0,-38],[22,-30],[14,-20],[0,-16],[-14,-20]],C.shoeS);ctx.restore();
      const Sh=[[kx-40,SY+10,'s'],[kx+40,SY+10,'s'],[kx+44,-30],[kx+46,4,'s'],[kx-44,4,'s'],[kx-42,-30]];m7blob(Sh,col);
      ctx.save();m6path(Sh,true);ctx.clip();ctx.globalAlpha=.5;m7blob([[kx-40,-30],[kx-8,-42],[kx+40,-28],[kx-6,-34]],C.jeanD);m7blob([[kx+42,-6],[kx+8,-16],[kx-40,-4],[kx+6,-10]],C.jeanD);ctx.globalAlpha=1;ctx.restore();
      // coxa (encurtada, vem pra frente) + joelho
      m7blob([[side*6,SY-40],[kx+side*44,SY-44],[kx+side*48,SY+4],[kx+side*30,SY+30],[kx-side*30,SY+30],[side*4,SY+10]],col);
      m5ell(kx,SY+6,40,26,col);ctx.globalAlpha=.35;m5ell(kx,SY+24,34,8,C.jeanD);ctx.globalAlpha=1}
    m7blob([[-50,SY-46,'s'],[50,SY-46,'s'],[44,SY+4],[-44,SY+4]],C.jean);
    ctx.translate(0,215+SY)}
  else{
  leg(-1,o.legL);leg(1,o.legR);
  if(bottom==='skirt'){m7blob([[-70,HIP-14,'s'],[70,HIP-14,'s'],[96,-80],[100,-58,'s'],[-100,-58,'s'],[-96,-80]],C.jean);ctx.globalAlpha=.5;for(const k of[-50,-12,28,64]){m7blob([[k,HIP+30],[k+8,HIP+30],[k*1.25+10,-60],[k*1.25-2,-60]],C.jeanD)}ctx.globalAlpha=1}
  // gancho da calça: une as pernas com curva (arco) no meio
  if(bottom!=='skirt')m7blob([[-44,HIP-12,'s'],[44,HIP-12,'s'],[44,HIP+70],[26,HIP+76],[10,HIP+66],[0,HIP+62],[-10,HIP+66],[-26,HIP+76],[-44,HIP+70]],C.jean);
  }
  if(bottom!=='skirt'){ctx.globalAlpha=.55;ctx.strokeStyle=C.jeanD;ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(0,HIP-8);ctx.lineTo(0,HIP+54);ctx.quadraticCurveTo(0,HIP+66,-16,HIP+76);ctx.moveTo(0,HIP+58);ctx.quadraticCurveTo(4,HIP+68,18,HIP+76);ctx.stroke();ctx.globalAlpha=1;}
  // ---- tronco (moletom gordinho) ----
  ctx.save();ctx.rotate((o.torso||0)*D2R);const br=1+.014*Math.sin(t*2.4);ctx.translate(0,HIP);ctx.scale(1+.006*Math.sin(t*2.4),br);ctx.translate(0,-HIP);
  const torso=[[-32,-402],[-62,-394],[-76,-366],[-78,-300],[-78,-240],[-74,-206],[-40,-198],[0,-196],[40,-198],[74,-206],[78,-240],[78,-300],[76,-366],[62,-394],[32,-402]];
  // capuz atrás
  if(top==='hoodie')m7blob([[-62,-388],[-66,-420],[-42,-440],[42,-440],[66,-420],[62,-388]],C.hoodD);
  m7blob(torso,C.hood);
  ctx.save();m6path(torso,true);ctx.clip();
  m7blob([[42,-400],[84,-380],[84,-190],[54,-190],[64,-300]],C.hoodS); // sombra lateral
  m7blob([[-120,-238],[120,-238],[120,-190],[-120,-190]],C.hoodS); // barra
  ctx.restore();
  // ---- braços ----
  const UA=76,FA=60;
  const arm=(side,p)=>{const sx=side*62,sy=-372;const [ex,ey,hx,hy,a]=m5chain(sx,sy,side*p[0],side*p[1],UA,FA);const kind=p[2];
    const pts=[[sx,sy],m5mid([sx,sy],[ex,ey],[hx,hy]),[hx,hy]];
    if(top==='tee'){m7tubeF(pts,28,side<0?C.skin:C.skinS);const q=[sx+(ex-sx)*.7,sy+(ey-sy)*.7];m7tubeF([[sx,sy],[(sx+q[0])/2,(sy+q[1])/2],q],40,side<0?C.hood:C.hoodS)}
    else m7tubeF(pts,36,side<0?C.hood:C.hoodS);
    // sombra embaixo da manga
    if(top!=='tee'){ctx.save();ctx.globalAlpha=.3;const ux=hx-sx,uy=hy-sy,ul=Math.hypot(ux,uy)||1;const off=side*9;
    m7tubeF([[sx+(-uy/ul)*off,sy+(ux/ul)*off],[pts[1][0]+(-uy/ul)*off*1.4,pts[1][1]+(ux/ul)*off*1.4],[hx+(-uy/ul)*off,hy+(ux/ul)*off]],20,C.hoodD);ctx.restore()}
    if(kind!=='pocket'){const cx=ex+(hx-ex)*.78,cy=ey+(hy-ey)*.78;if(top!=='tee')m7tubeF([[cx,cy],[(cx+hx)/2,(cy+hy)/2],[hx,hy]],34,C.hoodD,'butt');
      m7hand(hx+Math.sin(a*D2R)*12,hy+Math.cos(a*D2R)*12,a,side,kind==='rest'?'rest':kind)}};
  const up=q=>q[0]>70;
  arm(-1,o.armL);arm(1,o.armR);
  if(top==='hoodie'){
  // bolso canguru (por cima das mãos)
  m7blob([[-44,-300,'s'],[44,-300,'s'],[49,-270],[55,-236],[52,-228,'s'],[-52,-228,'s'],[-55,-236],[-49,-270]],C.hood);
  m7blob([[-44,-300,'s'],[44,-300,'s'],[46,-292,'s'],[-46,-292,'s']],C.hoodS);
  for(const sd of[-1,1])m7blob([[sd*44,-298],[sd*52,-262],[sd*57,-232],[sd*48,-234],[sd*44,-264],[sd*37,-296]],C.hoodD);
  m7blob([[-52,-232],[52,-232],[54,-226,'s'],[-54,-226,'s']],C.hoodS);
  // gola + camiseta
  m7blob([[-30,-404],[0,-378],[30,-404]],C.tee);
  m7blob([[-56,-398],[-40,-410],[0,-384],[40,-410],[56,-398],[30,-376],[0,-368],[-30,-376]],C.hoodL);
  // cordões
  for(const sd of[-1,1]){ctx.strokeStyle='#fff';ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(sd*16,-382);ctx.quadraticCurveTo(sd*19,-354,sd*17,-330);ctx.stroke();m5ell(sd*17,-326,5,6,'#e9e5df')}
  }else{m7blob([[-34,-404],[0,-380],[34,-404],[20,-410],[0,-396],[-20,-410]],C.hoodS);m7blob([[-22,-404],[0,-388],[22,-404]],C.skinS);
    if(o.necklace){ctx.strokeStyle='#e8c35a';ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,-410,30,.5,2.64);ctx.stroke();m5ell(0,-380,5,6,'#e8c35a')}}
  // ---- cabeça ----
  ctx.save();ctx.translate(0,-402);
  m7blob([[-22,4],[-22,-26],[22,-26],[22,4]],C.skinS);
  const hsw=(o.still?0:Math.sin(t*1.35)*1.8);ctx.rotate(((o.head||0)+hsw)*D2R);ctx.translate(0,-78);o._hv=(o.still?0:Math.cos(t*1.35))*1;
  m7head(o,e,t);
  ctx.restore();
  ctx.restore();ctx.restore();window.M7=_M7}
function m7head(o,e,t){const C=o._C||M7,look=o.look||0,fx=(o.turn||0)*8;const HS=o.hair||'matheus';
  // cabelo de trás
  if(HS==='curly'){m7blob([[-100,10],[-112,-50],[-96,-110],[-50,-140],[0,-150],[50,-140],[96,-110],[112,-50],[100,10]],C.hairD)}
  else if(HS==='bun'){m7blob([[-92,60],[-104,-20],[-96,-92],[-60,-124],[0,-132],[60,-124],[96,-92],[104,-20],[92,60],[60,74],[-60,74]],C.hairD)}
  else m7blob([[-92,10],[-104,-40],[-96,-92],[-60,-122],[0,-132],[60,-122],[98,-92],[104,-40],[92,10]],C.hairD);
  // orelhas
  for(const sd of[-1,1]){m5ell(sd*80,6,17,21,C.skin);m5ell(sd*82,6,9,12,C.skinS);if(o.earrings)m5ell(sd*82,28,5,5,'#e8c35a')}
  // rosto redondo, bochechudo
  const face=[[-78,-30],[-82,14],[-70,52],[-40,74],[0,80],[40,74],[70,52],[82,14],[78,-30],[50,-70],[0,-80],[-50,-70]];
  m7blob(face,C.skin);ctx.save();m6path(face,true);ctx.clip();m5ell(0,92,90,22,C.skinS);ctx.restore();
  if(o.beard){ctx.save();m6path(face,true);ctx.clip();ctx.globalAlpha=o.beard*.8;m7blob([[-84,10],[-70,56],[-36,80],[0,88],[36,80],[70,56],[84,10],[64,24],[40,40],[20,62],[0,66],[-20,62],[-40,40],[-64,24]],C.hairD);m7blob([[-30,40],[-10,34],[0,38],[10,34],[30,40],[16,46],[0,44],[-16,46]],C.hairD);ctx.restore()}
  const bl=(e==='apaixonado'||e==='envergonhado')?.6:.36;m5ell(-48+fx,34,17,10,`rgba(240,120,110,${bl})`);m5ell(48+fx,34,17,10,`rgba(240,120,110,${bl})`);
  // olhos grandes
  const blink=(o.blink||0)>.5;const EY=8;
  for(const sd of[-1,1]){const ex=sd*32+fx,ey=EY;ctx.save();
    if(e==='rindo'||(blink&&e!=='apaixonado')){ctx.strokeStyle=C.lash;ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();if(e==='rindo'){ctx.moveTo(ex-14,ey+4);ctx.quadraticCurveTo(ex,ey-12,ex+14,ey+4)}else{ctx.moveTo(ex-14,ey+2);ctx.quadraticCurveTo(ex,ey+9,ex+14,ey+2)}ctx.stroke();ctx.restore();continue}
    if(e==='apaixonado'){ctx.fillStyle='#e8344e';ctx.beginPath();ctx.moveTo(ex,ey+14);ctx.bezierCurveTo(ex-21,ey,ex-14,ey-18,ex,ey-7);ctx.bezierCurveTo(ex+14,ey-18,ex+21,ey,ex,ey+14);ctx.fill();m5ell(ex-7,ey-6,4,3,'rgba(255,255,255,.8)');ctx.restore();continue}
    const big=(e==='surpreso'||e==='assustado')?1.12:1,rx=18*big,ry=19*big;
    ctx.beginPath();ctx.ellipse(ex,ey,rx,ry,0,0,7);ctx.fillStyle='#fff';ctx.fill();ctx.save();ctx.clip();
    const ir=e==='assustado'?7:(e==='surpreso'?10:15);const lx=ex+look*5-sd*1+(e==='pensativo'?5:0),ly=ey+2+(e==='pensativo'?-6:0)+(e==='envergonhado'?5:0);
    m5ell(lx,ly,ir,ir*1.05,C.iris);m5ell(lx,ly+1,ir*.5,ir*.52,C.pupil);m5ell(lx-ir*.38,ly-ir*.42,ir*.34,ir*.34,'#fff');m5ell(lx+ir*.4,ly+ir*.4,ir*.15,ir*.15,'#fff');
    ctx.fillStyle=C.skin;const oX=ex+sd*20,iX=ex-sd*20;
    if(e==='desconfiado')ctx.fillRect(ex-22,ey-24,44,17);
    if(e==='bravo'){ctx.beginPath();ctx.moveTo(oX,ey-26);ctx.lineTo(iX,ey-26);ctx.lineTo(iX,ey-3);ctx.lineTo(oX,ey-14);ctx.closePath();ctx.fill()}
    if(e==='triste'){ctx.beginPath();ctx.moveTo(oX,ey-26);ctx.lineTo(iX,ey-26);ctx.lineTo(iX,ey-14);ctx.lineTo(oX,ey-3);ctx.closePath();ctx.fill()}
    ctx.restore();
    // cílio de cima (traço suave, faz parte do olho)
    ctx.strokeStyle=C.lash;ctx.lineWidth=4.5;ctx.lineCap='round';ctx.beginPath();
    if(e==='desconfiado'){ctx.moveTo(ex-rx,ey-7);ctx.lineTo(ex+rx,ey-7)}
    else if(e==='bravo'){ctx.moveTo(oX-sd*2,ey-14);ctx.lineTo(iX+sd*2,ey-3)}
    else if(e==='triste'){ctx.moveTo(oX-sd*2,ey-3);ctx.lineTo(iX+sd*2,ey-14)}
    else{ctx.ellipse(ex,ey,rx,ry,0,Math.PI*1.12,Math.PI*1.88)}
    ctx.stroke();ctx.restore()}
  if(o.lashes){for(const sd of[-1,1]){if(e==='rindo'||(o.blink||0)>.5)continue;ctx.strokeStyle=C.lash;ctx.lineWidth=3.5;ctx.lineCap='round';const bx=sd*32+fx;ctx.beginPath();ctx.moveTo(bx+sd*15,EY-10);ctx.lineTo(bx+sd*24,EY-17);ctx.moveTo(bx+sd*9,EY-15);ctx.lineTo(bx+sd*14,EY-24);ctx.stroke()}}
  // sobrancelhas (formas cheias)
  for(const sd of[-1,1]){const bx=sd*32+fx;let y0=-22,y1=-28,y2=-22;
    if(e==='surpreso'||e==='assustado'){y0=-34;y1=-42;y2=-34}
    if(e==='bravo'){y0=-28;y1=-24;y2=-14}
    if(e==='triste'||e==='assustado'){y2=-34;y0=-22}
    if(e==='desconfiado'){if(sd>0){y0=-32;y1=-38;y2=-30}else{y0=-18;y1=-18;y2=-18}}
    if(e==='pensativo'&&sd>0){y0=-32;y1=-38;y2=-30}
    ctx.strokeStyle=C.hair;ctx.lineWidth=8;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(bx+sd*15,y0);ctx.quadraticCurveTo(bx,y1,bx-sd*15,y2);ctx.stroke()}
  if(o.glasses){ctx.strokeStyle=o.glasses;ctx.lineWidth=5;for(const sd of[-1,1]){ctx.beginPath();ctx.roundRect(sd*32+fx-25,-14,50,42,16);ctx.stroke()}ctx.beginPath();ctx.moveTo(fx-7,0);ctx.quadraticCurveTo(fx,-6,fx+7,0);ctx.stroke();ctx.globalAlpha=.25;for(const sd of[-1,1]){ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(sd*32+fx-10,-2,6,10,.5,0,7);ctx.fill()}ctx.globalAlpha=1}
  // nariz
  m5ell(2+fx,30,7,5,C.skinD);m5ell(0+fx,28,4,3,'rgba(255,255,255,.25)');
  // boca
  const mx=fx,my=50;const M=C.mouth;
  const open=(w,h,teeth)=>{ctx.beginPath();ctx.moveTo(mx-w,my-2);ctx.quadraticCurveTo(mx,my-5,mx+w,my-2);ctx.quadraticCurveTo(mx+w*.7,my+h,mx,my+h);ctx.quadraticCurveTo(mx-w*.7,my+h,mx-w,my-2);ctx.closePath();ctx.fillStyle='#7a2416';ctx.fill();
    ctx.save();ctx.clip();if(teeth){ctx.fillStyle='#fff';ctx.fillRect(mx-w,my-8,w*2,8)}m5ell(mx,my+h,w*.55,h*.45,'#f07b70');ctx.restore()};
  const line=(a)=>{ctx.strokeStyle=M;ctx.lineWidth=4.5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.quadraticCurveTo(a[2],a[3],a[4],a[5]);ctx.stroke()};
  if(o.talk!=null&&!['rindo','assustado','apaixonado'].includes(e)&&o.talk>.1)open(11+o.talk*6,4+o.talk*15,true);
  else if(e==='feliz')open(16,15,true);
  else if(e==='rindo')open(21,24,true);
  else if(e==='surpreso')m5ell(mx,my+6,9,12,'#7a2416');
  else if(e==='assustado'){ctx.beginPath();ctx.moveTo(mx-16,my+4);for(let k=0;k<=8;k++)ctx.lineTo(mx-16+k*4,my+4+(k%2?-5:3));ctx.lineTo(mx+16,my+14);ctx.lineTo(mx-16,my+14);ctx.closePath();ctx.fillStyle='#7a2416';ctx.fill()}
  else if(e==='triste')line([mx-13,my+8,mx,my-4,mx+13,my+8]);
  else if(e==='bravo')line([mx-13,my+6,mx,my-2,mx+13,my+6]);
  else if(e==='desconfiado')line([mx-12,my+4,mx+4,my+6,mx+14,my-2]);
  else if(e==='pensativo')m5ell(mx+8,my+4,5,4,'#7a2416');
  else if(e==='envergonhado'){ctx.strokeStyle=M;ctx.lineWidth=4.5;ctx.beginPath();ctx.moveTo(mx-12,my+4);ctx.lineTo(mx-4,my);ctx.lineTo(mx+4,my+5);ctx.lineTo(mx+12,my+1);ctx.stroke()}
  else line([mx-13,my,mx,my+9,mx+13,my]);
  if(HS==='curly'){const hs=(o.still?0:Math.sin(t*1.35-.7)*.03);ctx.save();ctx.translate(0,-40);ctx.rotate(hs);ctx.translate(0,40);
    m7blob([[-86,-10,'s'],[-100,-60],[-80,-112],[-30,-138],[30,-138],[80,-112],[100,-60],[86,-10,'s'],[60,-44],[0,-56],[-60,-44]],C.hair);
    const r=rng(5);for(let k=0;k<70;k++){const th=Math.PI*(1.0+1.0*r()),rad=56+r()*52,x=Math.cos(th)*rad,y=-48+Math.sin(th)*rad*.92;const cr=10+r()*5;
      m5ell(x+(o.still?0:Math.sin(t*2.4+k)*1.2),y,cr,cr*.92,[C.hair,C.hairM,C.hairD][k%3])}
    for(let k=0;k<14;k++){const th=Math.PI*(1.1+.8*k/13),x=Math.cos(th)*92,y=-52+Math.sin(th)*86;m5ell(x,y,12,11,C.hair);m5ell(x-3,y-4,4,3,C.hairL)}
    ctx.restore()}
  else if(HS==='bun'){const hs=(o.still?0:Math.sin(t*1.35-.7)*.02);ctx.save();ctx.translate(0,-40);ctx.rotate(hs);ctx.translate(0,40);
    m5ell(10,-140,40,36,C.hair);m5ell(0,-150,22,14,C.hairM);ctx.strokeStyle=C.hairD;ctx.lineWidth=4;ctx.beginPath();ctx.arc(10,-140,26,3.6,5.6);ctx.stroke();
    m7blob([[-86,40,'s'],[-96,-30],[-86,-92],[-50,-120],[0,-128],[50,-120],[86,-92],[96,-30],[86,40,'s'],[74,0],[60,-46],[20,-66],[-10,-62],[-40,-50],[-70,-20],[-76,20]],C.hair);
    ctx.save();ctx.globalAlpha=.85;ctx.lineCap='round';
    for(const [a1,b1,c1,d1,e1,f1,col] of [[-14,-124,-40,-100,-64,-60,C.hairM],[0,-126,30,-104,58,-60,C.hairD],[-30,-110,-56,-80,-76,-20,C.hairD],[30,-112,60,-84,76,-20,C.hairM],[-20,-112,-24,-90,-30,-70,C.hairL]]){ctx.strokeStyle=col;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(a1,b1);ctx.bezierCurveTo(c1,d1,e1,f1,e1+(a1<0?-6:6),f1+20);ctx.stroke()}
    ctx.restore();m7leaf(-64,-60,-90,46+(o.still?0:Math.sin(t*2)*3),-10,36,C.hair);m7leaf(64,-60,88,46+(o.still?0:Math.cos(t*2)*3),10,36,C.hair);
    ctx.restore()}
  else if(HS==='short'){m7blob([[-80,-24,'s'],[-90,-60],[-74,-104],[-30,-128],[30,-128],[74,-104],[90,-60],[80,-24,'s'],[70,-52],[44,-66],[10,-70],[-20,-62],[-50,-58],[-70,-44]],C.hair);
    m7crown(0,0,[[-150,-14,C.hair],[-126,14,C.hairM],[-100,-14,C.hair],[-76,14,C.hairM],[-52,-14,C.hair],[-30,14,C.hairM]],98);
    ctx.lineCap='round';ctx.strokeStyle=C.hairD;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-34,-122);ctx.quadraticCurveTo(-30,-96,-38,-66);ctx.stroke();
    ctx.strokeStyle=C.hairL;ctx.globalAlpha=.8;ctx.lineWidth=5;for(const q of[[-20,-112,10,-118,40,-108],[-70,-80,-60,-96,-46,-104],[56,-92,66,-80,70,-64]]){ctx.beginPath();ctx.moveTo(q[0],q[1]);ctx.quadraticCurveTo(q[2],q[3],q[4],q[5]);ctx.stroke()}ctx.globalAlpha=1}
  else if(HS==='pigtails'){for(const sd of[-1,1]){const sw=(o.still?0:Math.sin(t*2.2+sd)*.12);ctx.save();ctx.translate(sd*84,-84);ctx.rotate(sd*-.55+sw);m7leaf(0,0,0,96,sd*14,56,C.hair);m7leaf(0,10,sd*6,80,sd*10,22,C.hairM);ctx.restore();m5ell(sd*86,-84,13,13,o.tie||'#ff5c8a')}
    m7blob([[-86,-6,'s'],[-96,-50],[-80,-102],[-30,-128],[30,-128],[80,-102],[96,-50],[86,-6,'s'],[66,-40],[40,-56],[20,-44],[0,-60],[-20,-44],[-46,-56],[-70,-36]],C.hair);
    ctx.strokeStyle=C.hairD;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(0,-128);ctx.lineTo(0,-70);ctx.stroke();ctx.strokeStyle=C.hairL;ctx.globalAlpha=.7;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-50,-104);ctx.quadraticCurveTo(-30,-118,-12,-120);ctx.stroke();ctx.globalAlpha=1}
  else{
  // ---- cabelo da frente: mechas curvas sobrepostas (orgânico, sem bicos duros) ----
  const leaf=(x0,y0,x1,y1,bend,w,col)=>{const dx=x1-x0,dy=y1-y0,L=Math.hypot(dx,dy)||1,nx=-dy/L,ny=dx/L;
    const m1=[x0+dx*.35+nx*bend,y0+dy*.35+ny*bend],m2=[x0+dx*.75+nx*bend*.8,y0+dy*.75+ny*bend*.8];
    ctx.beginPath();ctx.moveTo(x0+nx*w/2,y0+ny*w/2);
    ctx.bezierCurveTo(m1[0]+nx*w*.55,m1[1]+ny*w*.55,m2[0]+nx*w*.3,m2[1]+ny*w*.3,x1+nx*3,y1+ny*3);
    ctx.quadraticCurveTo(x1+dx/L*4,y1+dy/L*4,x1-nx*3,y1-ny*3);
    ctx.bezierCurveTo(m2[0]-nx*w*.3,m2[1]-ny*w*.3,m1[0]-nx*w*.55,m1[1]-ny*w*.55,x0-nx*w/2,y0-ny*w/2);ctx.closePath();ctx.fillStyle=col;ctx.fill()};
  // cabelo balança atrasado em relação à cabeça
  const hs=(o.still?0:Math.sin(t*1.35-.7)*.03+Math.sin(t*3.1)*.006)+(o.hairKick||0);ctx.save();ctx.translate(0,-40);ctx.rotate(hs);ctx.translate(0,40);
  // massa base
  m7blob([[-88,-4,'s'],[-98,-50],[-86,-100],[-50,-128],[0,-136],[50,-128],[86,-100],[98,-50],[88,-4,'s'],[70,-40],[0,-52],[-70,-40]],C.hair);
  // coroa: mechas para fora, curvas (volume bagunçado)
  const crown=[[-160,-22,C.hairD],[-136,24,C.hair],[-112,-22,C.hair],[-88,24,C.hairM],[-64,-22,C.hair],[-40,22,C.hair],[-18,-20,C.hairD]];
  for(const [ang,bd,col] of crown){const th=ang*Math.PI/180;const r0=50,r1=116+(o.still?0:Math.sin(t*3+ang)*3);const wob=(o.still?0:Math.sin(t*2.6+ang*.1)*4);leaf(Math.cos(th)*r0,-62+Math.sin(th)*r0*.8,Math.cos(th)*r1+wob,-54+Math.sin(th)*r1*.74,bd,62,col)}
  // franja varrida pro lado
  for(const [x0,x1,y1,col] of [[70,58,-30,C.hairD],[44,26,-34,C.hair],[16,-8,-38,C.hairM],[-12,-40,-34,C.hair],[-40,-70,-26,C.hairM],[-64,-90,-14,C.hair]])leaf(x0,-112,x1+(o.still?0:Math.sin(t*2.4+x0*.05)*3),y1+(o.still?0:Math.cos(t*2.4+x0*.05)*1.5),-16,46,col);
  // brilhos suaves
  ctx.lineCap='round';ctx.strokeStyle=C.hairL;ctx.globalAlpha=.75;
  for(const q of [[-58,-104,-40,-118,-18,-122],[0,-118,16,-122,30,-116],[-34,-80,-26,-66,-30,-50],[22,-84,18,-68,10,-52]]){ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(q[0],q[1]);ctx.quadraticCurveTo(q[2],q[3],q[4],q[5]);ctx.stroke()}
  ctx.globalAlpha=1;ctx.restore();
  }
  if(o.cap){if(o.capShade){ctx.save();m6path(face,true);ctx.clip();const g=ctx.createLinearGradient(0,-40,0,-40+o.capShade);g.addColorStop(0,'rgba(20,12,8,1)');g.addColorStop(.8,'rgba(20,12,8,.96)');g.addColorStop(1,'rgba(20,12,8,0)');ctx.fillStyle=g;ctx.fillRect(-110,-60,220,o.capShade+30);ctx.restore()}
    m7blob([[-92,-40,'s'],[-90,-90],[-56,-128],[0,-138],[56,-128],[90,-90],[92,-40,'s']],o.cap);m5ell(0,-38,104,22,o.capD||'#000');m5ell(0,-136,9,6,o.capD||'#000');ctx.globalAlpha=.25;m7blob([[-60,-120],[-20,-134],[-30,-70],[-70,-60]],'#fff');ctx.globalAlpha=1}
  if(e==='assustado'||e==='envergonhado'){ctx.fillStyle='rgba(120,200,255,.95)';ctx.beginPath();ctx.moveTo(74,-30);ctx.quadraticCurveTo(86,-10,80,0);ctx.quadraticCurveTo(68,-4,74,-30);ctx.fill()}
}

// ===== vistas: lado (perfil, olhando pra direita) e costas =====
function m7crown(cx,cy,list,r1){r1=r1||116;for(const [ang,bd,col] of list){const th=ang*Math.PI/180;m7leaf(cx+Math.cos(th)*50,cy-62+Math.sin(th)*40,cx+Math.cos(th)*r1,cy-54+Math.sin(th)*r1*.74,bd,62,col)}}
function matheusView(gx,gy,s,view,o){o=o||{};const C=Object.assign({},M7,o.pal||{}),t=o.t||0;const HIP=-215;const wk=o.walk;const sw=wk==null?0:Math.sin(wk),bob=wk==null?0:Math.abs(Math.cos(wk))*8;
  if(view==='front'){matheus5(gx,gy,s,o);return}
  ctx.save();ctx.translate(gx,gy);ctx.scale(s,s);
  ctx.fillStyle='rgba(0,0,0,.22)';ctx.beginPath();ctx.ellipse(0,2,100,13,0,0,7);ctx.fill();
  if(view==='side'){
    if(o.lean)ctx.rotate(o.lean);const ex_=o.expr||'sorriso';
    const shoe=(x,col,colD)=>{m7blob([[x-36,0,'s'],[x-38,-28],[x-24,-42],[x+6,-44],[x+34,-34],[x+58,-22],[x+66,-8],[x+64,0,'s']],col);
      m7blob([[x-38,-5,'s'],[x+66,-5,'s'],[x+64,6],[x+56,10,'s'],[x-34,10,'s'],[x-38,4]],C.shoeD);m7blob([[x-36,-10,'s'],[x+65,-10,'s'],[x+65,-5,'s'],[x-37,-5,'s']],colD)};
    const pant=(x,col)=>{const P=[[x-38,HIP-14,'s'],[x+36,HIP-14,'s'],[x+42,HIP+60],[x+40,-90],[x+46,-40],[x+42,-30,'s'],[x+8,-36],[x-28,-28,'s'],[x-38,-36],[x-38,-96],[x-42,HIP+70]];m7blob(P,col);
      ctx.save();m6path(P,true);ctx.clip();ctx.globalAlpha=.45;m7blob([[x-40,-62],[x-6,-74],[x+40,-60],[x-4,-66]],C.jeanD);m7blob([[x+44,-38],[x+10,-50],[x-36,-36],[x+8,-42]],C.jeanD);ctx.globalAlpha=1;ctx.restore()};
    if(o.sit){const SY=-150;
      for(const [dx,col,sc,sd] of [[-12,C.jeanS,C.shoeS,C.shoeD],[10,C.jean,C.shoe,C.shoeS]]){shoe(84+dx,sc,sd);
        const P=[[-46+dx,SY-44,'s'],[90+dx,SY-44],[112+dx,SY-24],[112+dx,-40],[118+dx,-26,'s'],[56+dx,-26,'s'],[62+dx,SY+30],[-46+dx,SY+36,'s']];m7blob(P,col);
        ctx.save();m6path(P,true);ctx.clip();ctx.globalAlpha=.45;m7blob([[60+dx,SY-40],[78+dx,SY-14],[66+dx,SY+20],[72+dx,SY-12]],C.jeanD);m7blob([[60+dx,-70],[90+dx,-80],[118+dx,-64],[90+dx,-72]],C.jeanD);ctx.globalAlpha=1;ctx.restore()}
      m7blob([[10,SY-40,'s'],[56,SY-40,'s'],[56,SY-4,'s'],[10,SY-4,'s']],C.jeanD);m5ell(33,SY-30,3.5,3.5,'#c9b37a');
      ctx.translate(0,215+SY);
    }else if(wk!=null){
      const L1=98,L2=94,FT=30;
      const legPose=(ph)=>{const th=25*Math.sin(ph)*D2R;const kn=(5+55*Math.pow(Math.max(0,Math.cos(ph)),1.4))*D2R;
        const kx=Math.sin(th)*L1,ky=Math.cos(th)*L1,a2=th-kn,ax=kx+Math.sin(a2)*L2,ay=ky+Math.cos(a2)*L2;
        const fa=.45*Math.max(0,Math.cos(ph))*(.5-.5*Math.sin(ph))-.14*Math.max(0,Math.sin(ph))*Math.max(0,-Math.cos(ph)+.3);return {kx,ky,ax,ay,fa}};
      const A=legPose(wk),B=legPose(wk+Math.PI);const hipY=-FT-Math.max(A.ay,B.ay);
      const drawLeg=(P,x0,col,sc,sd,front)=>{
        ctx.save();ctx.translate(x0+P.ax,hipY+P.ay+FT);ctx.rotate(P.fa);shoe(-10,sc,sd);ctx.restore();
        const H=[x0,hipY-10],K=[x0+P.kx,hipY+P.ky],A2=[x0+P.ax,hipY+P.ay];
        ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle=col;ctx.lineWidth=80;ctx.beginPath();ctx.moveTo(H[0],H[1]);ctx.lineTo(K[0],K[1]);ctx.stroke();
        ctx.lineWidth=76;ctx.beginPath();ctx.moveTo(K[0],K[1]);ctx.lineTo(A2[0],A2[1]-4);ctx.stroke();
        // barra amontoada no tênis
        const sa=Math.atan2(A2[0]-K[0],A2[1]-K[1]);ctx.save();ctx.translate(A2[0],A2[1]);ctx.rotate(-sa);m7blob([[-40,-34],[40,-34],[44,-4],[28,2,'s'],[-34,2,'s'],[-42,-4]],col);ctx.globalAlpha=.45;m7blob([[-38,-20],[-6,-30],[38,-18],[-4,-24]],C.jeanD);ctx.globalAlpha=1;ctx.restore();ctx.globalAlpha=1;
        // dobra do joelho
        ctx.save();ctx.globalAlpha=.4;ctx.translate(K[0],K[1]);m7blob([[-30,-6],[4,-16],[34,-4],[4,-10]],C.jeanD);ctx.restore();ctx.globalAlpha=1;
        if(front){const ta=Math.atan2(K[0]-H[0],K[1]-H[1]);ctx.save();ctx.translate((H[0]+K[0])/2,(H[1]+K[1])/2);ctx.rotate(-ta);
          m7blob([[-22,-30,'s'],[24,-30,'s'],[26,30],[20,36,'s'],[-18,36,'s'],[-24,30]],C.jeanD);m7blob([[-20,-28,'s'],[22,-28,'s'],[24,28],[18,32,'s'],[-16,32,'s'],[-22,28]],col);m7blob([[-26,-34,'s'],[26,-34,'s'],[26,-12,'s'],[-26,-12,'s']],C.jeanS);m5ell(0,-24,3.5,3.5,'#c9b37a');ctx.restore()}};
      drawLeg(B,-8,C.jeanS,C.shoeS,C.shoeD,false);
      // braço de trás (balança ao contrário)
      o._walkArm=(near)=>{const dir=near?-1:1;const ph=Math.sin(wk)*dir;const a1=26*ph*D2R,bend=(22+18*Math.max(0,ph))*D2R;const sx=-6,sy=-372;
        const ex=sx+Math.sin(a1)*74,ey=sy+Math.cos(a1)*74,hx=ex+Math.sin(a1+bend)*60,hy=ey+Math.cos(a1+bend)*60;const col=near?C.hoodS:C.hoodD;
        m7tubeF([[sx,sy],[(sx+ex)/2,(sy+ey)/2],[ex,ey]],36,col);m7tubeF([[ex,ey],[(ex+hx)/2,(ey+hy)/2],[hx,hy]],34,col);
        const cx=ex+(hx-ex)*.8,cy=ey+(hy-ey)*.8;m7tubeF([[cx,cy],[(cx+hx)/2,(cy+hy)/2],[hx,hy]],34,near?C.hoodD:'#b8440a','butt');m5ell(hx+Math.sin(a1+bend)*10,hy+Math.cos(a1+bend)*10,14,15,near?C.skin:C.skinS)};
      ctx.save();ctx.translate(0,hipY-HIP);ctx.translate(0,HIP);ctx.rotate(.05);ctx.translate(0,-HIP);o._walkArm(false);ctx.restore();
      drawLeg(A,10,C.jean,C.shoe,C.shoeS,true);
      ctx.translate(0,hipY-HIP);ctx.translate(0,HIP);ctx.rotate(.05);ctx.translate(0,-HIP);
    }else{
    const lift=(ph)=>wk==null?0:Math.max(0,Math.sin(ph))*14;
    const legS=(dir,x,col,sc,sd,ph)=>{const ang=dir*sw*.3;ctx.save();ctx.translate(0,HIP);ctx.rotate(-ang);ctx.translate(0,-HIP);ctx.save();ctx.translate(0,-lift(ph));ctx.translate(x+20,0);ctx.rotate(ang);ctx.translate(-x-20,0);shoe(x,sc,sd);ctx.restore();pant(x,col);ctx.restore()};
    legS(-1,-16,C.jeanS,C.shoeS,C.shoeD,wk+Math.PI);legS(1,6,C.jean,C.shoe,C.shoeS,wk);
    ctx.translate(0,-bob);
    // bolso cargo
    m7blob([[-18,HIP+62,'s'],[30,HIP+62,'s'],[32,HIP+124],[26,HIP+130,'s'],[-14,HIP+130,'s'],[-20,HIP+124]],C.jeanD);m7blob([[-16,HIP+64,'s'],[28,HIP+64,'s'],[30,HIP+122],[24,HIP+126,'s'],[-12,HIP+126,'s'],[-18,HIP+122]],C.jean);
    m7blob([[-22,HIP+58,'s'],[32,HIP+58,'s'],[32,HIP+80,'s'],[-22,HIP+80,'s']],C.jeanS);m5ell(5,HIP+70,3.5,3.5,'#c9b37a');
    }
    // moletom de perfil
    const T=[[-40,-404],[-60,-386],[-66,-330],[-64,-250],[-60,-206],[-28,-196],[22,-196],[54,-204],[62,-252],[60,-322],[48,-380],[20,-404]];
    m7blob(T,C.hood);ctx.save();m6path(T,true);ctx.clip();m7blob([[-80,-420],[-36,-420],[-46,-300],[-36,-190],[-80,-190]],C.hoodS);m7blob([[-80,-236],[80,-236],[80,-190],[-80,-190]],C.hoodS);ctx.restore();
    m7blob([[-28,-408],[-56,-420],[-74,-398],[-72,-362],[-52,-350],[-36,-374]],C.hoodS);m7blob([[-36,-404],[-56,-410],[-64,-392],[-58,-368],[-44,-372]],C.hoodD);
    // braço com mão no bolso
    if(o.hold){m7blob([[22,-300,'s'],[54,-306],[62,-262],[60,-232,'s'],[24,-232,'s'],[32,-262]],C.hood);
      m7tubeF([[-8,-374],[-2,-332],[6,-300]],36,C.hoodS);m7tubeF([[6,-300],[40,-296],[74,-310]],34,C.hoodS);m7tubeF([[60,-306],[68,-308],[76,-311]],34,C.hoodD,'butt');m5ell(88,-314,15,14,C.skin);m5ell(92,-310,8,6,C.skinS);
      if(o.hold==='phone'){ctx.save();ctx.translate(96,-340);ctx.rotate(-.3);fRect(-14,-34,28,56,'#14161f',6);fRect(-11,-30,22,46,o.lit?'#8fb0ff':'#2a2e44',3);ctx.restore();if(o.lit){ctx.save();ctx.globalAlpha=.18;fPoly([[100,-360],[60,-520],[-10,-470]],'#9fc0ff');ctx.restore()}}
      if(o.hold==='bowl'){ctx.save();ctx.translate(104,-318);fPoly([[-40,-14],[40,-14],[26,20],[-26,20]],'#e8e2d6');m5ell(0,-14,40,9,'#f2c14e');ctx.globalAlpha=.6;for(let k=0;k<2;k++){const q=((o.t||0)*.6+k/2)%1;m5ell(k*14-6+Math.sin(q*6)*6,-30-q*60,7+q*5,7+q*5,'#fff')}ctx.globalAlpha=1;ctx.restore()}}
    else if(o._walkArm){m7blob([[22,-300,'s'],[54,-306],[62,-262],[60,-232,'s'],[24,-232,'s'],[32,-262]],C.hood);o._walkArm(true)}
    else{m7tubeF([[-8,-374],[-4,-330],[2,-298]],36,C.hoodS);m7tubeF([[2,-298],[18,-284],[36,-264]],34,C.hoodS);
    m7blob([[22,-300,'s'],[54,-306],[62,-262],[60,-232,'s'],[24,-232,'s'],[32,-262]],C.hood);m7blob([[22,-300],[32,-262],[24,-232],[29,-232],[37,-262],[27,-300]],C.hoodD)}
    // pescoço, gola e cordão
    m7blob([[-10,-414],[20,-414],[22,-392],[-10,-392]],C.skinS);
    m7blob([[-36,-402],[-18,-414],[28,-412],[40,-400],[22,-388],[-18,-390]],C.hoodL);
    ctx.strokeStyle='#fff';ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(30,-398);ctx.quadraticCurveTo(36,-372,33,-348);ctx.stroke();m5ell(33,-344,5,6,'#e9e5df');
    // cabeça de perfil
    ctx.save();ctx.translate(2,-482);if(wk!=null){ctx.rotate(Math.sin(wk*2-.9)*.025);ctx.translate(0,Math.sin(wk*2-.6)*2)}
    m7blob([[-60,40],[-86,-10],[-90,-60],[-70,-104],[-20,-130],[30,-128],[62,-100],[60,-40],[0,-30],[-30,20]],C.hairD);
    const F=[[-56,-30],[-62,20],[-44,58],[-6,78],[30,82],[52,70],[62,54],[66,46],[64,40],[70,32],[74,24],[86,14],[80,4],[72,0],[70,-24],[64,-56],[30,-80],[-30,-76]];
    m7blob(F,C.skin);ctx.save();m6path(F,true);ctx.clip();m5ell(0,96,70,24,C.skinS);ctx.restore();
    m5ell(-12,2,16,20,C.skin);m5ell(-10,2,8,11,C.skinS);
    m5ell(34,34,15,9,'rgba(240,120,110,.38)');
    const bk=(o.blink||0)>.5;
    if(bk||ex_==='rindo'){ctx.strokeStyle=C.lash;ctx.lineWidth=4.5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(36,4);ctx.quadraticCurveTo(48,ex_==='rindo'?-8:10,60,4);ctx.stroke()}
    else{const ir=ex_==='assustado'?6:11;ctx.save();ctx.beginPath();ctx.ellipse(46,4,12,ex_==='assustado'?20:18,0,0,7);ctx.fillStyle='#fff';ctx.fill();ctx.clip();m5ell(51+(o.lookS||0),6,ir,ir*1.36,C.iris);m5ell(53+(o.lookS||0),7,ir*.45,ir*.64,C.pupil);m5ell(48,0,4,4,'#fff');
      if(ex_==='desconfiado'||ex_==='triste'){ctx.fillStyle=C.skin;ctx.fillRect(30,-20,40,ex_==='triste'?16:20)}ctx.restore()}
    ctx.strokeStyle=C.lash;ctx.lineWidth=4.5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(34,-10);ctx.quadraticCurveTo(48,-20,60,-8);ctx.stroke();
    ctx.strokeStyle=C.hair;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(32,-30);ctx.quadraticCurveTo(46,-38,62,-30);ctx.stroke();
    if(ex_==='assustado'||ex_==='surpreso'){m5ell(60,50,7,10,'#7a2416')}
    else if(ex_==='rindo'||ex_==='feliz'){ctx.beginPath();ctx.moveTo(48,44);ctx.quadraticCurveTo(58,64,68,42);ctx.closePath();ctx.fillStyle='#7a2416';ctx.fill()}
    else{ctx.strokeStyle=C.mouth;ctx.lineWidth=4.5;ctx.lineCap='round';ctx.beginPath();if(ex_==='triste'){ctx.moveTo(50,52);ctx.quadraticCurveTo(58,44,66,50)}else if(ex_==='desconfiado'){ctx.moveTo(50,50);ctx.lineTo(66,48)}else{ctx.moveTo(50,48);ctx.quadraticCurveTo(58,54,64,46)}ctx.stroke()}
    if(ex_==='assustado'){ctx.fillStyle='rgba(120,200,255,.95)';ctx.beginPath();ctx.moveTo(14,-40);ctx.quadraticCurveTo(26,-20,20,-10);ctx.quadraticCurveTo(8,-14,14,-40);ctx.fill()}
    // cabelo: massa + coroa (mesmo estilo da frente) + franja pra frente
    m7blob([[-58,30,'s'],[-84,-20],[-86,-70],[-62,-110],[-10,-134],[40,-126],[70,-96],[78,-60],[70,-44],[40,-50],[14,-44],[-8,-36],[-26,-10],[-36,24]],C.hair);
    m7crown(-14,0,[[-170,18,C.hair],[-146,18,C.hairM],[-122,18,C.hair],[-98,18,C.hairM],[-74,18,C.hair],[-50,16,C.hairM]],104);
    for(const [x0,y0,x1,y1,bd,col] of [[30,-104,72,-40,14,C.hair],[12,-100,56,-34,14,C.hairM],[-6,-96,34,-38,12,C.hair],[-62,-50,-70,14,-8,C.hair],[-78,-70,-88,-10,-10,C.hairM]])m7leaf(x0,y0,x1,y1,bd,40,col);
    ctx.strokeStyle=C.hairL;ctx.globalAlpha=.75;ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-44,-104);ctx.quadraticCurveTo(-10,-122,24,-112);ctx.stroke();ctx.beginPath();ctx.moveTo(8,-80);ctx.quadraticCurveTo(26,-70,34,-54);ctx.stroke();ctx.globalAlpha=1;
    ctx.restore();
  } else { // costas
    // braços (atrás do tronco; mãos estão no bolso da frente)
    for(const sd of[-1,1]){const [ex,ey,hx,hy]=m5chain(sd*62,-372,sd*10,sd*-60,76,60);m7tubeF([[sd*62,-372],m5mid([sd*62,-372],[ex,ey],[hx,hy]),[hx,hy]],36,sd<0?C.hood:C.hoodS)}
    for(const side of[-1,1]){const hx=side*30,fx=side*36,fy=-31,gY=fy+2,col=side<0?C.jean:C.jeanS;
      ctx.save();ctx.translate(fx,fy+30);m7blob([[-32,-2,'s'],[-34,-24],[-22,-40],[0,-42],[22,-40],[34,-24],[32,-2,'s']],C.shoeS);m7blob([[-34,-6,'s'],[34,-6,'s'],[33,4],[26,10,'s'],[-26,10,'s'],[-33,4]],C.shoeD);m7blob([[-10,-40],[10,-40],[8,-18],[-8,-18]],C.shoeD);ctx.restore();
      const P=[[side*2,HIP-12,'s'],[hx+side*38,HIP-12],[hx+side*46,HIP+50],[fx+side*44,-120],[fx+side*46,fy-20],[fx+side*48,gY-4],[fx+side*40,gY,'s'],[fx+side*8,gY-8],[fx-side*22,gY+2,'s'],[fx-side*36,gY-2,'s'],[fx-side*34,fy-24],[fx-side*28,-120],[side*10,HIP+90],[side*2,HIP+70]];
      m7blob(P,col);ctx.save();m6path(P,true);ctx.clip();ctx.globalAlpha=.45;
      m7blob([[fx-side*40,fy-34],[fx-side*10,fy-46],[fx+side*30,fy-30],[fx+side*4,fy-36]],C.jeanD);m7blob([[fx+side*44,fy-6],[fx+side*14,fy-18],[fx-side*26,fy-4],[fx+side*8,fy-10]],C.jeanD);
      m7blob([[fx-side*30,-130],[fx,-142],[fx+side*34,-128],[fx,-134]],C.jeanD);ctx.globalAlpha=1;
      // bolso de trás
      m7blob([[side*16,HIP+10,'s'],[side*54,HIP+10,'s'],[side*52,HIP+52],[side*35,HIP+60,'s'],[side*18,HIP+50]],C.jeanD);m7blob([[side*18,HIP+12,'s'],[side*52,HIP+12,'s'],[side*50,HIP+48],[side*35,HIP+56,'s'],[side*20,HIP+46]],col);
      ctx.restore()}
    m7blob([[-44,HIP-12,'s'],[44,HIP-12,'s'],[44,HIP+70],[26,HIP+76],[10,HIP+66],[0,HIP+62],[-10,HIP+66],[-26,HIP+76],[-44,HIP+70]],C.jean);
    ctx.globalAlpha=.5;ctx.strokeStyle=C.jeanD;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(0,HIP-8);ctx.lineTo(0,HIP+60);ctx.stroke();ctx.globalAlpha=1;
    const torso=[[-32,-402],[-62,-394],[-76,-366],[-78,-300],[-78,-240],[-74,-206],[-40,-198],[0,-196],[40,-198],[74,-206],[78,-240],[78,-300],[76,-366],[62,-394],[32,-402]];
    m7blob(torso,C.hood);ctx.save();m6path(torso,true);ctx.clip();m7blob([[-42,-400],[-84,-380],[-84,-190],[-54,-190],[-64,-300]],C.hoodS);m7blob([[-90,-238],[90,-238],[90,-190],[-90,-190]],C.hoodS);ctx.restore();
    // capuz caído
    m7blob([[-62,-396],[-66,-372],[-46,-336],[0,-322],[46,-336],[66,-372],[62,-396],[40,-418],[0,-424],[-40,-418]],C.hoodS);
    m7blob([[-40,-400],[-44,-374],[-28,-350],[0,-342],[28,-350],[44,-374],[40,-400],[0,-410]],C.hoodD);
    m7blob([[-30,-400],[-30,-432],[30,-432],[30,-400]],C.skinS);
    // cabeça de costas
    ctx.save();ctx.translate(0,-470);
    for(const sd of[-1,1]){m5ell(sd*80,6,17,21,C.skinS);m5ell(sd*80,6,8,11,C.skinD)}
    const BH=[[-80,20],[-92,-34],[-88,-90],[-54,-124],[0,-134],[54,-124],[88,-90],[92,-34],[80,24],[56,48],[30,60],[0,66],[-30,60],[-56,48]];
    m7blob(BH,C.hair);ctx.save();m6path(BH,true);ctx.clip();m7blob([[40,-140],[110,-100],[110,60],[66,40],[70,-40]],C.hairD);ctx.restore();
    m7crown(0,0,[[-160,-18,C.hair],[-136,18,C.hairM],[-112,-18,C.hair],[-90,18,C.hairM],[-68,-18,C.hair],[-44,18,C.hairM],[-20,-18,C.hair]],108);
    // camadas descendo até a nuca
    for(const [x0,y0,x1,y1,bd,col] of [[-56,-70,-74,20,-10,C.hairM],[-20,-80,-30,34,-8,C.hair],[20,-80,30,34,8,C.hairM],[56,-70,74,20,10,C.hair]])m7leaf(x0,y0,x1,y1,bd,54,col);
    ctx.strokeStyle=C.hairD;ctx.globalAlpha=.5;ctx.lineWidth=4;ctx.lineCap='round';for(const [a,b,c,d,e2,f] of [[-40,-60,-50,-10,-48,30],[0,-70,-4,-20,-2,34],[40,-60,50,-10,48,30]]){ctx.beginPath();ctx.moveTo(a,b);ctx.quadraticCurveTo(c,d,e2,f);ctx.stroke()}ctx.globalAlpha=1;
    ctx.strokeStyle=C.hairL;ctx.globalAlpha=.7;ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-50,-100);ctx.quadraticCurveTo(-16,-118,22,-110);ctx.stroke();ctx.globalAlpha=1;
    ctx.restore();
  }
  ctx.restore()}
