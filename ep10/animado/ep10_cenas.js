
// ======== v4: criança e fotógrafo redesenhados no MESMO estilo do Matheus (traço fino, sombreado suave) ========
// criança de frente (mesmas coordenadas do desenho antigo: pés em y, cabeça em -515). o: {u, smile, px, py, hide, peek, tremble, reach, hold, point, mouthO, hoodDown}
function _kidFront4(x,y,s,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';
  const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};const tr=o.tremble?Math.sin((o.u||0)*34)*4:0;ctx.translate(tr,0);
  const Y='#f4c430',YS='#d99f12',YL='#ffe27a',SK='#f6cfac';
  {const g=ctx.createRadialGradient(0,8,5,0,8,140);g.addColorStop(0,'rgba(0,0,0,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(0,8,140,24,0,0,7);ctx.fill()}
  // pernas (jeans) + tênis vermelhos
  for(const sx of[-1,1]){ctx.strokeStyle=OUT;ctx.lineWidth=52;ctx.beginPath();ctx.moveTo(sx*40,-170);ctx.lineTo(sx*42,-40);ctx.stroke();ctx.strokeStyle=sx<0?'#2f4a73':'#3a5a8a';ctx.lineWidth=40;ctx.stroke();
    ctx.fillStyle='#d23b2e';ctx.beginPath();ctx.moveTo(sx*42-34,-44);ctx.quadraticCurveTo(sx*42-40,-2,sx*42-30,0);ctx.lineTo(sx*42+36+sx*10,0);ctx.quadraticCurveTo(sx*42+50+sx*8,-24,sx*42+22,-40);ctx.closePath();ctx.fill();OL(8);
    ctx.fillStyle='#fff';ctx.fillRect(sx*42-30,-8,64+sx*8,8);ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(sx*42-18,-28);ctx.lineTo(sx*42+14,-28);ctx.stroke()}
  // capa de chuva (corte em A, com sombra lateral e brilho, como o moletom dele)
  const tp=()=>{ctx.beginPath();ctx.moveTo(-96,-470);ctx.quadraticCurveTo(-150,-330,-140,-150);ctx.quadraticCurveTo(0,-128,140,-150);ctx.quadraticCurveTo(150,-330,96,-470);ctx.quadraticCurveTo(0,-490,-96,-470);ctx.closePath()};
  tp();ctx.fillStyle=Y;ctx.fill();ctx.save();tp();ctx.clip();{const g=ctx.createLinearGradient(-140,0,140,0);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(.6,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(160,100,10,.45)');ctx.fillStyle=g;ctx.fillRect(-160,-500,320,380)}
  ctx.fillStyle=YL;ctx.fillRect(-120,-440,16,260);ctx.fillStyle=YS;ctx.fillRect(-160,-176,320,30);ctx.restore();tp();OL(9);
  ctx.strokeStyle=YS;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(0,-466);ctx.lineTo(0,-150);ctx.stroke();ctx.fillStyle='#b98e0e';for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(14,-400+i*80,9,0,7);ctx.fill()}
  for(const sx of[-1,1]){ctx.strokeStyle=YS;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(sx*40,-280);ctx.lineTo(sx*92,-280);ctx.lineTo(sx*96,-220);ctx.stroke()}
  // braços (mangas amarelas) + mãozinhas
  const arm=(sx,ex,ey)=>{ctx.strokeStyle=OUT;ctx.lineWidth=46;ctx.beginPath();ctx.moveTo(sx*92,-440);ctx.lineTo(ex,ey);ctx.stroke();ctx.strokeStyle=sx<0?YS:Y;ctx.lineWidth=36;ctx.stroke();ctx.fillStyle=SK;ctx.beginPath();ctx.ellipse(ex,ey+8,20,22,0,0,7);ctx.fill();OL(6)};
  if(o.hold||o.reach){arm(-1,-46,-300);arm(1,46,-300)}else if(o.point){arm(-1,-118,-250);arm(1,250,-420)}else if(o.wave){arm(-1,-124,-250)}else if(!o.hide){arm(-1,-124,-250);arm(1,124,-250)}
  // cabeça de criança
  ctx.save();ctx.translate(0,0);
  if(!o.hoodDown){ctx.fillStyle=YS;ctx.beginPath();ctx.ellipse(0,-520,172,168,0,0,7);ctx.fill();OL(9)}else{ctx.fillStyle=YS;ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8)}
  for(const sx of[-1,1]){ctx.fillStyle=SK;ctx.beginPath();ctx.ellipse(sx*132,-505,22,30,0,0,7);ctx.fill();OL(7)}
  ctx.fillStyle=SK;ctx.beginPath();ctx.ellipse(0,-515,134,128,0,0,7);ctx.fill();OL(9);
  ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,46,30,-.4,0,7);ctx.fill();
  ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}
  // capuz em volta do rosto (quando levantado)
  if(!o.hoodDown){ctx.strokeStyle=Y;ctx.lineWidth=34;ctx.beginPath();ctx.arc(0,-520,152,Math.PI*1.0,Math.PI*2.0);ctx.stroke();ctx.beginPath();ctx.moveTo(-152,-520);ctx.quadraticCurveTo(-150,-420,-96,-400);ctx.moveTo(152,-520);ctx.quadraticCurveTo(150,-420,96,-400);ctx.stroke();
    ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.arc(0,-520,170,Math.PI*1.0,Math.PI*2.0);ctx.stroke();ctx.strokeStyle=YL;ctx.lineWidth=6;ctx.beginPath();ctx.arc(0,-520,160,Math.PI*1.15,Math.PI*1.45);ctx.stroke()}
  const hide=o.hide||0;
  if(hide<.05||o.peek){const op=o.peek?.55:1;for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,30,36*op,0,0,7);ctx.fill();OL(5);
    ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4+(o.py||0),19*Math.min(1,op+.3),0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4+(o.py||0),10,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+7,ey-3+(o.py||0),6,0,7);ctx.fill();
    ctx.strokeStyle=P.hair;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(ex-20,-548);ctx.quadraticCurveTo(ex,-556,ex+20,-548);ctx.stroke()}}
  ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,24,15,0,0,7);ctx.ellipse(78,-458,24,15,0,0,7);ctx.fill();
  ctx.strokeStyle='#c98a66';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-5,-478);ctx.quadraticCurveTo(4,-466,-3,-462);ctx.stroke();
  if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,13,13*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(-24,-442);ctx.quadraticCurveTo(0,-436+(o.smile||0)*.6,24,-442);ctx.stroke()}
  if(hide>.05){const gap=o.peek?44:0;for(const sx of[-1,1]){ctx.save();ctx.translate(sx*(36+gap),-498);ctx.fillStyle=SK;ctx.beginPath();ctx.ellipse(0,0,40,58,0,0,7);ctx.fill();OL(6);ctx.strokeStyle='#d9a882';ctx.lineWidth=5;for(let f=-1;f<=1;f++){ctx.beginPath();ctx.moveTo(f*14,-40);ctx.lineTo(f*14,30);ctx.stroke()}ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=46;ctx.beginPath();ctx.moveTo(sx*92,-440);ctx.lineTo(sx*(36+gap),-440);ctx.stroke();ctx.strokeStyle=Y;ctx.lineWidth=36;ctx.stroke()}}
  ctx.restore();ctx.restore()}
// criança de LADO, andando (estilo do person() do Matheus). o: {f, walk, look}
function e6Child(x,y,s,o){o=o||{};const f=o.f||1;ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';
  const Y='#f4c430',YS='#d99f12',YL='#ffe27a',SK='#f6cfac';const p=o.walk||0;
  const L=ph=>[0.46*Math.sin(ph),-1.0*Math.pow(Math.max(0,Math.cos(ph)),1.4)-0.08];const bob=-5*Math.abs(Math.cos(p));
  {const g=ctx.createRadialGradient(0,0,4,0,0,70);g.addColorStop(0,'rgba(0,0,0,.32)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(0,0,70,13,0,0,7);ctx.fill()}
  ctx.translate(0,bob-92);
  const shoe=(ex,ey)=>{ctx.save();ctx.translate(ex,ey+4);ctx.scale(f,1);ctx.fillStyle='#d23b2e';ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-12,-12);ctx.quadraticCurveTo(-14,8,-10,10);ctx.lineTo(30,10);ctx.quadraticCurveTo(34,0,22,-5);ctx.quadraticCurveTo(10,-8,6,-14);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#fff';ctx.fillRect(-10,6,40,4);ctx.restore()};
  const lg2=L(p+Math.PI),lg1=L(p);
  limb(-4*f,0,46,44,lg2[0],lg2[1],21,'#2f4a73',f,shoe);
  limb(-2*f,-60,34,32,-0.42*Math.sin(p+Math.PI),-0.15,15,YS,f,(ex,ey)=>handAt(ex,ey,SK));
  // capa (de lado)
  ctx.fillStyle=Y;ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-26*f,-92);ctx.quadraticCurveTo(-40*f,-40,-38*f,6);ctx.lineTo(40*f,6);ctx.quadraticCurveTo(38*f,-40,24*f,-92);ctx.quadraticCurveTo(0,-100,-26*f,-92);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle=YL;ctx.fillRect(f>0?14:-20,-84,6,80);ctx.fillStyle=YS;ctx.fillRect(-38,-6,80,10);ctx.fillStyle='#b98e0e';ctx.beginPath();ctx.arc(22*f,-60,4,0,7);ctx.arc(24*f,-34,4,0,7);ctx.fill();
  limb(2*f,0,46,44,lg1[0],lg1[1],22,'#3a5a8a',f,shoe);
  // cabeça de criança de perfil, com capuz
  ctx.save();ctx.translate(4*f,-128);ctx.rotate((o.look||0)*.3*f);ctx.scale(f,1);
  ctx.fillStyle=YS;ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.beginPath();ctx.ellipse(-6,0,52,50,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle=SK;ctx.beginPath();ctx.ellipse(8,4,40,38,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-20,-22);ctx.quadraticCurveTo(10,-46,44,-14);ctx.quadraticCurveTo(30,-18,24,-10);ctx.quadraticCurveTo(14,-20,4,-10);ctx.quadraticCurveTo(-8,-18,-20,-22);ctx.closePath();ctx.fill();
  ctx.strokeStyle=Y;ctx.lineWidth=12;ctx.beginPath();ctx.arc(2,2,46,Math.PI*.95,Math.PI*1.75);ctx.stroke();
  ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(26,0,9,11,0,0,7);ctx.fill();ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(29,1,6,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(31,-2,2,0,7);ctx.fill();
  ctx.fillStyle='rgba(240,120,110,.45)';ctx.beginPath();ctx.ellipse(22,16,8,5,0,0,7);ctx.fill();ctx.strokeStyle='#9a5a44';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(30,24);ctx.quadraticCurveTo(36,27,41,22);ctx.stroke();
  ctx.restore();ctx.restore()}
// fotógrafo de frente (estilo do Matheus: mesmas pernas, braços e rosto, mais velho). Pés em y; o: {cam: 0/1, smile}
function _photogFront4(x,y,s,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';
  const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};const C='#5f6a4a',CS='#47503a',CL='#7a8660',SK='#e6ae86';
  {const g=ctx.createRadialGradient(0,6,5,0,6,170);g.addColorStop(0,'rgba(0,0,0,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(0,6,170,26,0,0,7);ctx.fill()}
  for(const sx of[-1,1]){ctx.strokeStyle=OUT;ctx.lineWidth=62;ctx.beginPath();ctx.moveTo(sx*42,-300);ctx.lineTo(sx*44,-40);ctx.stroke();ctx.strokeStyle=sx<0?'#24232a':'#302f38';ctx.lineWidth=50;ctx.stroke();
    ctx.fillStyle='#4a3020';ctx.beginPath();ctx.ellipse(sx*48,-14,48,22,0,0,7);ctx.fill();OL(7)}
  // casaco comprido (com sombra lateral e brilho, igual ao moletom dele)
  const tp=()=>{ctx.beginPath();ctx.moveTo(-104,-700);ctx.quadraticCurveTo(-150,-480,-128,-250);ctx.quadraticCurveTo(0,-232,128,-250);ctx.quadraticCurveTo(150,-480,104,-700);ctx.quadraticCurveTo(0,-724,-104,-700);ctx.closePath()};
  tp();ctx.fillStyle=C;ctx.fill();ctx.save();tp();ctx.clip();{const g=ctx.createLinearGradient(-140,0,140,0);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(.6,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(20,30,10,.45)');ctx.fillStyle=g;ctx.fillRect(-160,-730,320,500)}
  ctx.fillStyle=CL;ctx.fillRect(-92,-680,14,420);ctx.fillStyle=CS;ctx.fillRect(-150,-280,300,30);ctx.restore();tp();OL(8);
  ctx.strokeStyle=CS;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(0,-700);ctx.lineTo(0,-250);ctx.stroke();ctx.fillStyle='#2e3326';for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(-20,-600+i*110,9,0,7);ctx.fill()}
  // cachecol vinho
  ctx.fillStyle='#8a3a3a';ctx.beginPath();rr(-70,-740,140,50,22);ctx.fill();OL(7);ctx.beginPath();rr(26,-712,42,170,16);ctx.fill();OL(7);ctx.strokeStyle='#6a2a2a';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(30,-600);ctx.lineTo(64,-600);ctx.moveTo(30,-580);ctx.lineTo(64,-580);ctx.stroke();
  // braços (mesmo jeito do Matheus) + câmera
  const c=o.cam??0;const cy=lerp(-560,-835,c);
  const arm=(sx,ex,ey,col)=>{ctx.strokeStyle=OUT;ctx.lineWidth=52;ctx.beginPath();ctx.moveTo(sx*100,-670);ctx.quadraticCurveTo(sx*140,(ey-670)/2,ex,ey);ctx.stroke();ctx.strokeStyle=col;ctx.lineWidth=40;ctx.stroke();ctx.fillStyle=SK;ctx.beginPath();ctx.ellipse(ex,ey+6,24,28,0,0,7);ctx.fill();OL(6)};
  ctx.strokeStyle='#1a1a1e';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-64,-724);ctx.lineTo(-74,cy);ctx.moveTo(64,-724);ctx.lineTo(74,cy);ctx.stroke();
  ctx.fillStyle='#2a2b31';ctx.beginPath();rr(-96,cy-58,192,116,18);ctx.fill();OL(7);ctx.fillStyle='#3a3b44';ctx.beginPath();rr(-62,cy-82,72,28,8);ctx.fill();OL(5);
  ctx.fillStyle='#16171c';ctx.beginPath();ctx.arc(0,cy,44,0,7);ctx.fill();OL(6);ctx.fillStyle='#4a6a8a';ctx.beginPath();ctx.arc(0,cy,27,0,7);ctx.fill();ctx.fillStyle='rgba(255,255,255,.45)';ctx.beginPath();ctx.arc(-9,cy-9,8,0,7);ctx.fill();ctx.fillStyle='#e0e0e6';ctx.fillRect(50,cy-50,30,16);
  arm(-1,-90,cy+8,CS);arm(1,90,cy+8,C);
  // pescoço + rosto (o rosto do Matheus mais velho: cabelo grisalho, óculos, barba rala)
  ctx.save();ctx.translate(0,-735);ctx.scale(1.5,1.5);ctx.translate(0,735);ctx.fillStyle='#c98d66';ctx.fillRect(-22,-778,44,46);
  if(c<.5){withP({hair:'#8e8e96',hairL:'#b6b6be',skin:SK,skinS:'#c98d66'},()=>face(0,-845,.24,{headOnly:true,open:.9,smile:(o.smile||0)*14,lid:.15}));
    ctx.save();ctx.translate(0,-845);ctx.scale(.24,.24);ctx.fillStyle='rgba(120,120,128,.35)';ctx.beginPath();ctx.moveTo(-250,120);ctx.quadraticCurveTo(-200,320,0,350);ctx.quadraticCurveTo(200,320,250,120);ctx.quadraticCurveTo(160,250,0,262);ctx.quadraticCurveTo(-160,250,-250,120);ctx.fill();
    ctx.strokeStyle='#3a3530';ctx.lineWidth=12;for(const sx of[-1,1]){ctx.beginPath();ctx.arc(sx*125,10,88,0,7);ctx.stroke()}ctx.beginPath();ctx.moveTo(-37,0);ctx.quadraticCurveTo(0,-16,37,0);ctx.stroke();ctx.restore();}
  else{withP({hair:'#8e8e96',hairL:'#b6b6be',skin:SK,skinS:'#c98d66'},()=>face(0,-845,.24,{headOnly:true,open:.2,smile:6}));}
  // chapéu
  ctx.fillStyle='#3a3428';ctx.beginPath();ctx.ellipse(0,-912,124,26,0,0,7);ctx.fill();OL(7);ctx.beginPath();ctx.moveTo(-70,-916);ctx.quadraticCurveTo(-76,-1000,0,-1004);ctx.quadraticCurveTo(76,-1000,70,-916);ctx.closePath();ctx.fill();OL(7);ctx.fillStyle='#8a3a3a';ctx.fillRect(-70,-940,140,18);
  ctx.restore();
  if(c>=.5){ctx.fillStyle='#2a2b31';ctx.beginPath();rr(-96,cy-58,192,116,18);ctx.fill();OL(7);ctx.fillStyle='#16171c';ctx.beginPath();ctx.arc(0,cy,44,0,7);ctx.fill();OL(6);ctx.fillStyle='#4a6a8a';ctx.beginPath();ctx.arc(0,cy,27,0,7);ctx.fill();arm(-1,-90,cy+8,CS);arm(1,90,cy+8,C)}
  ctx.restore()}
// fotógrafo de LADO, andando (corpo do person() do Matheus com casaco, cachecol, chapéu e cabelo grisalho). o: {f, walk}
function photogSide(x,y,s,o){o=o||{};const f=o.f||1;
  withP({hood:'#5f6a4a',hoodS:'#47503a',hoodL:'#7a8660',pants:'#302f38',pantsS:'#24232a',skin:'#e6ae86',skinS:'#c98d66',hair:'#8e8e96',hairL:'#b6b6be'},()=>person(x,y,s,{f,walk:o.walk,look:0}));
  const bob=o.walk!=null?-6*Math.abs(Math.cos(o.walk)):0;ctx.save();ctx.translate(x,y+bob*s);ctx.scale(s,s);ctx.lineJoin='round';
  // aba comprida do casaco
  ctx.fillStyle='#5f6a4a';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-34*f,-6);ctx.lineTo(38*f,-6);ctx.lineTo(44*f,46);ctx.lineTo(-40*f,46);ctx.closePath();ctx.fill();ctx.stroke();
  // cachecol
  ctx.fillStyle='#8a3a3a';ctx.beginPath();rr(-24,-140,50,22,10);ctx.fill();ctx.stroke();ctx.beginPath();rr(-30*f-(f<0?16:0),-128,16,56,6);ctx.fill();ctx.stroke();
  // óculos + chapéu
  ctx.save();ctx.translate(6*f,-182);ctx.scale(f,1);ctx.strokeStyle='#3a3530';ctx.lineWidth=3;ctx.beginPath();ctx.arc(24,-2,13,0,7);ctx.stroke();ctx.beginPath();ctx.moveTo(11,-4);ctx.lineTo(-20,-8);ctx.stroke();
  ctx.fillStyle='#3a3428';ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.beginPath();ctx.ellipse(4,-44,62,13,-.05,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(-34,-46);ctx.quadraticCurveTo(-36,-92,4,-94);ctx.quadraticCurveTo(42,-92,40,-46);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#8a3a3a';ctx.fillRect(-34,-60,74,9);ctx.restore();
  ctx.restore()}

// ===================== EP. 10 — O FINAL (DIA 60) =====================
// Vencedora do EP. 9: A — ouvir o fotógrafo (decisão do usuário). Faixa 1300–1510 (cartão final 1496–1499.2).
// Fecha TUDO: dia 60, a carta da praça, o diário, o desenho, o rádio/celular, o tênis vermelho, o relógio 07:12→07:13.
// Revelação: a menina de capa amarela = Matheus no PASSADO; o fotógrafo = Matheus no FUTURO (multiverso). Ninguém se machuca; despedida é "até logo".
// Ambiente (não falado): o gato laranja de coleira azul na janela no final; nascer do sol.

// ---------- acabamento (mesmos helpers da série 2) ----------
const CAM=(cx,cy,z,fn)=>{ctx.save();ctx.translate(cx,cy);ctx.scale(z,z);ctx.translate(-cx,-cy);fn();ctx.restore()};
function glow(x,y,r,col,a){const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,col.replace('A',a));g.addColorStop(1,col.replace('A',0));ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);ctx.restore()}
function beams(x,y,ang,n,len,a,col){col=col||'255,226,170';ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<n;i++){const aa=ang+(i-(n-1)/2)*.09;const g=ctx.createLinearGradient(x,y,x+Math.cos(aa)*len,y+Math.sin(aa)*len);g.addColorStop(0,`rgba(${col},${a})`);g.addColorStop(1,`rgba(${col},0)`);ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+Math.cos(aa-.035)*len,y+Math.sin(aa-.035)*len);ctx.lineTo(x+Math.cos(aa+.035)*len,y+Math.sin(aa+.035)*len);ctx.closePath();ctx.fill()}ctx.restore()}
function dust(u,seed,n,col){const r=rng(seed);ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<n;i++){const x=(r()*W+u*(10+r()*20))%W,y=(r()*H-u*(8+r()*14)+H)%H,s=1.5+r()*3.5;ctx.fillStyle=col.replace('A',(.25+.25*Math.sin(u*2+i)).toFixed(2));ctx.beginPath();ctx.arc(x,y,s,0,7);ctx.fill()}ctx.restore()}
function softShadow(x,y,rx,ry,a){const g=ctx.createRadialGradient(x,y,0,x,y,rx);g.addColorStop(0,`rgba(0,0,0,${a})`);g.addColorStop(1,'rgba(0,0,0,0)');ctx.save();ctx.translate(x,y);ctx.scale(1,ry/rx);ctx.translate(-x,-y);ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,rx,0,7);ctx.fill();ctx.restore()}
function blurred(px,fn){ctx.save();ctx.filter=`blur(${px}px)`;fn();ctx.restore()}
function withP(over,fn){const bk=Object.assign({},P);Object.assign(P,over);try{fn()}finally{Object.assign(P,bk)}}
function grade(top,bot){ctx.save();ctx.globalCompositeOperation='soft-light';ctx.fillStyle=lg(0,H,[top,'rgba(0,0,0,0)',bot]);ctx.fillRect(0,0,W,H);ctx.restore()}
function letterIn(u){if(u<.18){ctx.fillStyle=`rgba(255,250,240,${.55*(1-u/.18)})`;ctx.fillRect(0,0,W,H)}}
function txtC(s,x,y,font,col,stroke){ctx.save();ctx.font=font;ctx.textAlign='center';ctx.textBaseline='middle';if(stroke){ctx.lineJoin='round';ctx.lineWidth=stroke;ctx.strokeStyle='rgba(0,0,0,.85)';ctx.strokeText(s,x,y)}ctx.fillStyle=col;ctx.fillText(s,x,y);ctx.restore()}
const easeIO=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const DAWN=['#1b1f45','#5a4a7a','#f0a070'];

// ---------- o Matheus do FUTURO, de perto (cabelo grisalho, óculos, barba rala, casaco verde e cachecol do fotógrafo) ----------
// o: face() + {hat: 0..1 (1 = chapéu na cabeça), shadow: 0..1 (sombra do chapéu nos olhos)}
function oldFace(cx,cy,s,o){o=o||{};ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);ctx.lineJoin='round';
  const OL=(w)=>{ctx.strokeStyle=OUT;ctx.lineWidth=w||12;ctx.stroke()};
  // casaco verde + cachecol vinho (as roupas do fotógrafo)
  ctx.fillStyle='#5a6248';ctx.beginPath();ctx.moveTo(-600,1000);ctx.quadraticCurveTo(-560,430,-200,380);ctx.lineTo(200,380);ctx.quadraticCurveTo(560,430,600,1000);ctx.closePath();ctx.fill();OL();
  ctx.fillStyle='#8a3a3a';ctx.beginPath();rr(-260,330,520,150,70);ctx.fill();OL();ctx.beginPath();rr(90,420,130,420,50);ctx.fill();OL();
  ctx.fillStyle='rgba(0,0,0,.2)';ctx.fillRect(-12,480,24,520);
  withP({hair:'#8e8e96',hairL:'#b6b6be',skin:'#e6ae86',skinS:'#c98d66'},()=>face(0,0,1,Object.assign({headOnly:true},o)));
  // barba rala + rugas + óculos redondos
  ctx.fillStyle='rgba(120,120,128,.35)';ctx.beginPath();ctx.moveTo(-250,120);ctx.quadraticCurveTo(-200,320,0,350);ctx.quadraticCurveTo(200,320,250,120);ctx.quadraticCurveTo(160,250,0,262);ctx.quadraticCurveTo(-160,250,-250,120);ctx.fill();
  ctx.strokeStyle='rgba(140,80,60,.4)';ctx.lineWidth=7;for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(sx*215,-10);ctx.lineTo(sx*250,-30);ctx.moveTo(sx*215,15);ctx.lineTo(sx*252,20);ctx.stroke()}
  ctx.beginPath();ctx.moveTo(-90,-150);ctx.lineTo(90,-150);ctx.moveTo(-70,-180);ctx.lineTo(70,-180);ctx.stroke();
  ctx.strokeStyle='#3a3530';ctx.lineWidth=10;for(const sx of[-1,1]){ctx.beginPath();ctx.arc(sx*125,10,88,0,7);ctx.stroke()}ctx.beginPath();ctx.moveTo(-37,0);ctx.quadraticCurveTo(0,-16,37,0);ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,.16)';for(const sx of[-1,1]){ctx.beginPath();ctx.ellipse(sx*125-30,-25,24,40,-.5,0,7);ctx.fill()}
  // chapéu (sobe quando hat < 1)
  const hk=o.hat??0;if(hk>0.01){const hy=lerp(-560,-330,hk);if(o.shadow){ctx.fillStyle=`rgba(30,20,20,${.55*o.shadow})`;ctx.beginPath();ctx.ellipse(0,-40,300,140,0,0,7);ctx.fill()}
    ctx.save();ctx.translate(0,hy);ctx.rotate((1-hk)*-.12);ctx.fillStyle='#3a3428';ctx.beginPath();ctx.ellipse(0,0,520,110,0,0,7);ctx.fill();OL(10);ctx.beginPath();ctx.moveTo(-290,-10);ctx.quadraticCurveTo(-300,-360,0,-370);ctx.quadraticCurveTo(300,-360,290,-10);ctx.closePath();ctx.fill();OL(10);ctx.fillStyle='#8a3a3a';ctx.fillRect(-290,-110,580,70);ctx.restore()}
  ctx.restore()}
// porta de luz do multiverso (dentro do armário). k = abertura 0..1
function portal(x,y,k,u,col){col=col||'255,240,200';if(k<=0)return;ctx.save();ctx.globalCompositeOperation='lighter';
  const g=ctx.createRadialGradient(x,y,10,x,y,900*k);g.addColorStop(0,`rgba(${col},${.95*k})`);g.addColorStop(.25,`rgba(${col},${.5*k})`);g.addColorStop(1,`rgba(${col},0)`);ctx.fillStyle=g;ctx.fillRect(x-1000,y-1000,2000,2000);
  for(let i=0;i<14;i++){const a=i/14*Math.PI*2+u*.4;const L=(500+120*Math.sin(u*3+i))*k;ctx.strokeStyle=`rgba(${col},${.18*k})`;ctx.lineWidth=40;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+Math.cos(a)*L,y+Math.sin(a)*L);ctx.stroke()}
  ctx.strokeStyle=`rgba(${col},${.8*k})`;ctx.lineWidth=10;for(let r=0;r<3;r++){const rr2=((u*120+r*120)%360)*k;ctx.beginPath();ctx.ellipse(x,y,rr2*.7,rr2,0,0,7);ctx.stroke()}
  ctx.restore()}
// cartela do placar de todas as redes
function placar(u,winA){ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(90,140,255,A)',.25);
  txtC('PLACAR DO EP. 9',W/2,330,'900 86px Inter','#fff',16);txtC('somando todas as redes',W/2,420,'700 48px Inter','#bcd',0);
  const rows=[['TIKTOK',PLACAR.tt],['INSTAGRAM',PLACAR.ig],['YOUTUBE',PLACAR.yt]];
  rows.forEach(([n,v],i)=>{const k=easeBack(seg(u,.2+i*.25,.5+i*.25));if(k<=0)return;ctx.save();ctx.translate(W/2,600+i*190);ctx.scale(k,k);ctx.fillStyle='rgba(255,255,255,.1)';rr(-440,-75,880,150,30);ctx.fill();
    ctx.textBaseline='middle';ctx.textAlign='left';ctx.fillStyle='#fff';ctx.font='800 56px Inter';ctx.fillText(n,-400,0);ctx.textAlign='right';ctx.font='900 64px Oswald';ctx.fillStyle='#7dffa8';ctx.fillText('A '+v[0],120,0);ctx.fillStyle='#fff';ctx.fillText('×',230,0);ctx.fillStyle='#ff8a8a';ctx.fillText('B '+v[1],400,0);ctx.restore()});
  const ta=PLACAR.tt[0]+PLACAR.ig[0]+PLACAR.yt[0],tb=PLACAR.tt[1]+PLACAR.ig[1]+PLACAR.yt[1];
  const k=easeBack(seg(u,1.1,1.4));if(k>0){ctx.save();ctx.translate(W/2,1240);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-460,-90,920,180,36);ctx.fill();txtC(`TOTAL: A ${ta} × B ${tb}`,0,0,'900 76px Oswald','#16161c');ctx.restore()}
  if(winA){const k2=easeBack(clamp(winA));ctx.save();ctx.translate(W/2,1480);ctx.scale(k2,k2);ctx.fillStyle='rgba(30,150,80,.96)';rr(-470,-110,940,220,40);ctx.fill();txtC('VENCEU A: OUVIR',0,-34,'900 70px Inter','#fff');txtC('O FOTÓGRAFO',0,44,'900 70px Inter','#fff');ctx.restore()}}
// placar (atualize antes de renderizar — a tarefa diária confere no domingo)
const PLACAR={tt:[1,1],ig:[0,1],yt:[0,0]};
// calendário dos dias riscados (o mesmo do EP. 3), com o dia "hoje" destacado
function calendar(cx,cy,s,upTo,today,k){ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);softShadow(10,540,460,40,.45);
  ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-420,-500,840,1000,20);ctx.fill();ctx.stroke();ctx.fillStyle='#d23b3b';ctx.beginPath();rr(-420,-500,840,150,20);ctx.fill();ctx.fillRect(-420,-400,840,50);txtC('DIAS',0,-428,'900 80px Inter','#fff');
  for(let d=1;d<=60;d++){const c=(d-1)%8,r=Math.floor((d-1)/8);const x=-350+c*100,y=-280+r*100;ctx.fillStyle='#333';ctx.font='700 40px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(d,x,y);
    if(d<upTo){ctx.strokeStyle='rgba(210,40,40,.85)';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(x-26,y-26);ctx.lineTo(x+26,y+26);ctx.moveTo(x+26,y-26);ctx.lineTo(x-26,y+26);ctx.stroke()}
    if(d===today){const p=.5+.5*Math.sin((k||0)*8);ctx.strokeStyle='#ff3b3b';ctx.lineWidth=10;ctx.beginPath();ctx.arc(x,y,44+6*p,0,7);ctx.stroke();glow(x,y,140,'rgba(255,80,80,A)',.4)}}
  ctx.restore()}
// a carta da praça (papel pautado, letra cursiva)
function letter(cx,cy,s,lines,k,sig){ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);softShadow(14,560,420,40,.4);ctx.fillStyle='#f3ecda';ctx.strokeStyle='#d8cfb8';ctx.lineWidth=5;ctx.fillRect(-380,-520,760,1040);ctx.strokeRect(-380,-520,760,1040);
  ctx.fillStyle='rgba(80,110,170,.25)';for(let y=-420;y<500;y+=70)ctx.fillRect(-340,y,680,3);ctx.fillStyle='rgba(200,60,60,.5)';ctx.fillRect(-300,-520,4,1040);
  const tot=lines.join('').length;let n=Math.floor((k??1)*tot);ctx.textAlign='left';lines.forEach((l,i)=>{const sh=l.slice(0,Math.max(0,n));n-=l.length;ctx.font='600 70px Caveat';ctx.fillStyle='#1f2f6b';ctx.fillText(sh,-270,-440+i*70)});
  if(sig){ctx.globalAlpha=sig;ctx.font='700 64px Caveat';ctx.fillStyle='#8a2a2a';ctx.fillText('— M.',100,420);ctx.globalAlpha=1}
  ctx.restore()}
// rua do Matheus de manhã, cheia de gente (o mundo voltou)
function busyStreet(u,gx){sky('#7fb2e6','#cfe3f2','#ffd9a8');sun(820,380,70,'#fff6dc','rgba(255,214,150,.85)');
  blurred(3,()=>buildings(23,1150,500,900,'#a3b6cc','#fff0c0',.1,gx*.15+300,1));buildings(61,1250,300,700,'#7e8faa','#ffe6a0',.15,gx*.4,1);
  ctx.fillStyle='#8c8f98';ctx.fillRect(0,1250,W,80);ctx.fillStyle=lg(1330,H,['#3e4048','#2c2e34']);ctx.fillRect(0,1330,W,H-1330);ctx.fillStyle='#f2f2f2';for(let x=-((gx*1.2)%240);x<W+240;x+=240)ctx.fillRect(x,1620,130,14);
  // pessoas na calçada, andando para os dois lados (pernas mexendo)
  const C=[['#3f8f7a','#2c6c5b'],['#8a5cc4','#6a42a0'],['#e2b23c','#b98c22'],['#3a6fae','#2a5088'],['#d2556a','#a83a4e']];
  for(let i=0;i<9;i++){const r=rng(i+200);const dir=i%2?1:-1;const sp=60+r()*40;const x=((r()*W*1.6+dir*u*sp)%(W*1.4)+W*1.4)%(W*1.4)-150;const c=C[i%5];
    withP({hood:c[0],hoodS:c[1],hoodL:c[0],skin:['#8d5a3b','#f0c7a4','#c58c62'][i%3],skinS:['#6e4429','#d6a582','#a56f49'][i%3],hair:['#151010','#a5532a','#2a1b14'][i%3]},()=>person(x,1150+(i%3)*14,.7,{f:dir,walk:u*7+i}))}
  // carros nos dois sentidos
  car(((u*380)%(W+600))-300,1560,'#e85a3a',1,1.1);car(W+300-((u*300+500)%(W+600)),1780,'#3a7ae8',-1,1.2);
}

// =============================== CENAS ===============================
// 0. GANCHO: a folha do calendário vira e aparece o 60 gigante (1300–1302.5)
scene(1300,1302.5,(t)=>{const u=t-1300;ctx.fillStyle=lg(0,H,['#1a0c14','#3a1420','#0d0608']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,900,'rgba(255,70,70,A)',.35);
  const z=lerp(1.2,1.0,easeOut(seg(u,0,.6)))+u*.03,sh=u<.3?Math.sin(u*90)*12:0;CAM(W/2+sh,H*.55,z,()=>{
    ctx.save();ctx.translate(W/2,H*.56);softShadow(0,560,440,40,.5);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-400,-500,800,1000,24);ctx.fill();ctx.stroke();
    ctx.fillStyle='#d23b3b';ctx.beginPath();rr(-400,-500,800,170,24);ctx.fill();ctx.fillRect(-400,-380,800,50);txtC('DIA',0,-420,'900 90px Inter','#fff');
    txtC('60',0,80,'900 520px Oswald','#d23b3b');
    // folha 59 voando por cima (vira)
    const f=easeIO(seg(u,0,.45));if(f<1){ctx.save();ctx.translate(0,-330);ctx.scale(1,1-f*1.9);ctx.rotate(f*.3);ctx.fillStyle='#fffdf6';ctx.fillRect(-400,0,800,830);ctx.strokeRect(-400,0,800,830);txtC('59',0,410,'900 520px Oswald','#555');ctx.restore()}
    ctx.restore();});
  ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,110,W,320);hookTitle('DIA 60. TUDO|TERMINA HOJE 😳',seg(u,0,.35),230);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.85*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(1300.02);

// 4. "Uma carta. Uma menina. E um fotógrafo." — três quadros que entram um a um (1303–1306.5)
scene(1303,1306.5,(t)=>{const u=t-1303;ctx.fillStyle='#0d0d16';ctx.fillRect(0,0,W,H);
  const P3=[[0,'#c97b4a'],[1,'#f2c230'],[2,'#5a6248']];
  P3.forEach(([i,c])=>{const T0=[0,.9,1.85][i];const k=easeOut(seg(u,T0,T0+.35));if(k<=0)return;const y=330+i*520;ctx.save();ctx.translate(lerp(i%2?W+600:-600,W/2,k),y+260);ctx.rotate((i-1)*.03);
    ctx.fillStyle='#f3efe6';ctx.fillRect(-440,-250,880,500);ctx.save();ctx.beginPath();ctx.rect(-420,-230,840,420);ctx.clip();ctx.fillStyle=['#2a2238','#1b1d36','#2b2018'][i];ctx.fillRect(-420,-230,840,420);
    if(i===0)envelope(0,-20,1.6,0);if(i===1)e8Kid(0,180,.42,{u,smile:6});if(i===2)e9Photog(0,200,.42,{cam:1});ctx.restore();
    ctx.fillStyle='#1f2f6b';ctx.font='700 46px Caveat';ctx.textAlign='center';ctx.fillText(['a carta','a menina','o fotógrafo'][i],0,232);ctx.restore()});
  letterIn(u);
});

// 5/6. placar de todas as redes → venceu A (1307–1312.5)
scene(1307,1312.5,(t)=>{const u=t-1307;placar(u,seg(u,3.2,3.6));letterIn(u)});

// 7. ele respira fundo e fica: a sala das fotos, o fotógrafo na porta, câmera baixada (1313–1316.5)
scene(1313,1316.5,(t)=>{const u=t-1313;CAM(W/2,1200,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{e9Doorway(u,{who:1,cam:0,smile:1});
  // ele (de costas, no primeiro plano) respira: ombros sobem e descem
  const br=Math.sin(seg(u,.3,2.3)*Math.PI)*10;personFront(330,1640-br,1.6,{back:true});e8Kid(560,1840,.5,{u,back:1});});
  grade('rgba(255,170,90,.2)','rgba(40,60,160,.25)');letterIn(u);
});

// 8. a menina segura a mão dele, bem forte (close nas mãos) (1317–1320.5)
scene(1317,1320.5,(t)=>{const u=t-1317;ctx.fillStyle=lg(0,H,['#241a20','#3a2a30','#18121a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,700,'rgba(255,190,120,A)',.3);
  CAM(W/2,H*.5,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{
    // braço dele (moletom laranja) vindo de cima
    ctx.fillStyle=P.hood;ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(380,-50);ctx.lineTo(600,-50);ctx.lineTo(620,820);ctx.lineTo(440,820);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle=P.hoodS;ctx.fillRect(440,760,180,60);
    ctx.fillStyle=P.skin;ctx.beginPath();ctx.ellipse(530,960,120,150,0,0,7);ctx.fill();ctx.stroke();
    // bracinho amarelo da capa vindo de baixo, mãozinha apertando
    const sq=easeOut(seg(u,.3,1));ctx.fillStyle='#f2c230';ctx.beginPath();ctx.moveTo(380,H+50);ctx.lineTo(560,H+50);ctx.lineTo(lerp(600,560,sq),1180);ctx.lineTo(lerp(440,460,sq),1180);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#f6ddc6';ctx.beginPath();ctx.ellipse(lerp(530,510,sq),lerp(1180,1060,sq),80,90,0,0,7);ctx.fill();ctx.stroke();
    for(let i=0;i<4;i++){ctx.beginPath();ctx.ellipse(lerp(530,510,sq)-50+i*34,lerp(1110,990,sq),18,40,0,0,7);ctx.fill();ctx.stroke()}});
  if(u>1){glow(W/2,H*.52,260,'rgba(255,230,180,A)',.35*Math.sin(seg(u,1,3)*Math.PI))}
  letterIn(u);
});

// 9. o fotógrafo abre o diário na mesa (1321–1324.5)
scene(1321,1324.5,(t)=>{const u=t-1321;e9Desk(u,{});ctx.fillStyle='rgba(20,12,8,.35)';ctx.fillRect(0,0,W,H);glow(W/2,H*.35,800,'rgba(255,210,150,A)',.3);
  CAM(W/2,H*.55,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{const op=easeIO(seg(u,.4,1.6));ctx.save();ctx.translate(W/2,H*.56);ctx.scale(lerp(.5,1,op),1);e9Diary(0,0,1.05,{left:['Dia 1.','Acordei, e todo','mundo tinha','sumido.'],right:['Dia 60.','...'],k:op});ctx.restore();
    // mãos do fotógrafo abrindo
    for(const sx of[-1,1]){ctx.fillStyle='#d9a882';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.ellipse(W/2+sx*lerp(120,470,op),H*.56+300,70,90,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#4e563e';ctx.beginPath();rr(W/2+sx*lerp(120,470,op)-80,H*.56+360,160,300,30);ctx.fill();ctx.stroke()}});
  letterIn(u);
});

// 10. "lê a última página" — o fotógrafo, calmo, sorriso leve, na porta (1325–1328.5)
scene(1325,1328.5,(t)=>{const u=t-1325;CAM(W/2,900,lerp(1.5,1.65,easeIO(seg(u,0,3.5))),()=>e9Doorway(u,{who:1,cam:0,smile:1}));grade('rgba(255,170,90,.25)','rgba(40,60,160,.2)');letterIn(u)});

// 11. as mãos dele tremendo segurando o diário (1329–1332.5)
scene(1329,1332.5,(t)=>{const u=t-1329;ctx.fillStyle=lg(0,H,['#2b2018','#3a2a20','#18120c']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,800,'rgba(255,210,150,A)',.3);
  const tr=Math.sin(u*38)*5;CAM(W/2,H*.5,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>{e9Diary(W/2+tr,H*.5,1.05,{left:['Dia 1.','Acordei, e todo','mundo tinha','sumido.'],right:['Dia 48.','Ela achou ele.','Agora somos','três.'],k:1,stick:1});
    for(const sx of[-1,1]){ctx.fillStyle=P.skin;ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.ellipse(W/2+sx*470+tr,H*.5+180,70,90,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle=P.hood;ctx.beginPath();rr(W/2+sx*470-80+tr,H*.5+240,160,400,30);ctx.fill();ctx.stroke()}});
  letterIn(u);
});

// 12. [carta] a última página: "Dia 60. Volta pro quarto. Os três juntos." (1333–1336.5)
scene(1333,1336.5,(t)=>{const u=t-1333;ctx.fillStyle='#18120c';ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,220,170,A)',.4);
  CAM(W/2,H*.5,lerp(1.15,1.3,easeIO(seg(u,0,3.5))),()=>e9Diary(W/2-200,H*.5,1.05,{right:['Dia 60.','Volta pro quarto.','Os três juntos.'],k:seg(u,.1,2.6)}));
  dust(u,12,24,'rgba(255,235,190,A)');letterIn(u);
});

// 13. "Dia sessenta... é hoje." — o rosto dele, surpreso (1337–1340.5)
scene(1337,1340.5,(t)=>{const u=t-1337;ctx.fillStyle=lg(0,H,['#1a1830','#2b2848','#141224']);ctx.fillRect(0,0,W,H);glow(W*.7,H*.3,700,'rgba(255,200,140,A)',.35);
  const k=easeOut(seg(u,.2,.6));CAM(W/2,H*.47,lerp(1.0,1.1,seg(u,0,3.5)),()=>face(W/2,H*.47,1.0,{open:lerp(1,1.35,k),brow:k,mouthO:k*.8,pupil:.7}));letterIn(u)});
SHAKE.push(1337.25);

// 14. o celular confirma: DIA 60 (1341–1344.5)
scene(1341,1344.5,(t)=>{const u=t-1341;ctx.fillStyle=lg(0,H,['#20142a','#3a2244','#140c1a']);ctx.fillRect(0,0,W,H);
  const vb=u<.6?Math.sin(u*70)*5:0;CAM(W/2,H*.48,lerp(1.0,1.08,seg(u,0,3.5)),()=>{ctx.save();ctx.translate(W/2+vb,H*.48);softShadow(20,600,380,50,.45);ctx.fillStyle='#0d0e12';rr(-300,-580,600,1160,80);ctx.fill();ctx.fillStyle=lg(-560,560,['#3a1d2e','#7a2a3a','#1e0f18']);rr(-280,-560,560,1120,64);ctx.fill();
    txtC('07:05',0,-300,'300 160px Inter','#fff');txtC('dia',0,-80,'600 60px Inter','#fbd');const p=easeBack(seg(u,.3,.7));ctx.save();ctx.scale(p,p);txtC('60',0,140,'900 300px Oswald','#ff5a5a');ctx.restore();txtC('hoje',0,330,'600 60px Inter','#fbd');ctx.restore()});
  letterIn(u);
});

// 15. os três descem juntos até o prédio dele, de madrugada (andando para a DIREITA; calçada, postes e o gato passam para a ESQUERDA) (1345–1348.5)
scene(1345,1348.5,(t)=>{const u=t-1345;walkAway(u);letterIn(u);
});

// 16. "O quarto onde tudo começou." — o quarto do dia 1, a câmera entra devagar (1349–1352.5)
scene(1349,1352.5,(t)=>{const u=t-1349;CAM(W/2,1200,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>e7Bedroom(u,{photo:true,mm:12,win13:false}));
  txtC('O QUARTO DO DIA 1',W/2,320,'800 64px Oswald','#ffd84a',14);beams(800,500,2.3,5,1400,.05,'200,210,255');grade('rgba(80,100,220,.25)','rgba(255,150,90,.15)');letterIn(u)});

// 17. lá dentro, o fotógrafo fecha a porta (por dentro), com calma (1353–1356.5)
scene(1353,1356.5,(t)=>{const u=t-1353;ctx.fillStyle='#1a1828';ctx.fillRect(0,0,W,H);
  const k=easeIO(seg(u,.4,2));CAM(W/2,1100,lerp(1.0,1.06,seg(u,0,3.5)),()=>{
    ctx.fillStyle='#0b0b14';ctx.fillRect(300,300,480,1200);glow(540,800,500,'rgba(255,220,160,A)',.4*(1-k));
    // porta girando até fechar (em perspectiva)
    const wd=lerp(40,480,k);ctx.fillStyle='#6b4630';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(300,300);ctx.lineTo(300+wd,300+(1-k)*60);ctx.lineTo(300+wd,1500-(1-k)*60);ctx.lineTo(300,1500);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#d8b04a';ctx.beginPath();ctx.arc(300+wd-50,900,16,0,7);ctx.fill();
    ctx.strokeStyle='#3a2a20';ctx.lineWidth=20;ctx.strokeRect(290,290,500,1220);
    // a mão dele na maçaneta + manga verde
    ctx.fillStyle='#4e563e';ctx.beginPath();rr(300+wd-30,940,500,110,40);ctx.fill();ctx.stroke();ctx.fillStyle='#d9a882';ctx.beginPath();ctx.ellipse(300+wd-40,920,50,60,0,0,7);ctx.fill();ctx.stroke();});
  letterIn(u);
});

// 18. "Calma. Eu vou te contar tudo." — o fotógrafo no quarto, mão aberta, a menina e o Matheus olhando (1357–1360.5)
scene(1357,1360.5,(t)=>{const u=t-1357;CAM(W/2,1250,lerp(1.05,1.0,easeOut(seg(u,0,3.5))),()=>{e7Bedroom(u,{photo:true,mm:12});ctx.fillStyle='rgba(8,8,16,.25)';ctx.fillRect(0,0,W,H);
  e9Photog(760,1700,.95,{cam:0,smile:1});personTurn(330,1480,1.5,{eye:1,brow:.3,lid:0},.7);e8Kid(540,1760,.5,{u,smile:4});});
  grade('rgba(255,170,90,.18)','rgba(40,60,160,.22)');letterIn(u);
});

// 19. ele tira o chapéu (pela 1ª vez): o chapéu sobe devagar, a sombra some dos olhos (1361–1364.5)
scene(1361,1364.5,(t)=>{const u=t-1361;ctx.fillStyle=lg(0,H,['#1a1424','#2c2234','#120e18']);ctx.fillRect(0,0,W,H);glow(W*.3,H*.25,800,'rgba(255,210,150,A)',.4);
  const h=1-easeIO(seg(u,.6,3.2));CAM(W/2,H*.5,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>oldFace(W/2,H*.5,.92,{hat:Math.max(.02,h),shadow:h,open:1,smile:8,lid:.1}));
  // a sombra cobre o rosto até o chapéu sair (suspense leve)
  ctx.fillStyle=`rgba(10,8,14,${.75*h})`;ctx.fillRect(0,0,W,H);letterIn(u);
});

// 20. o rosto: é o MATHEUS, mais velho (flash de revelação) (1365–1368.5)
scene(1365,1368.5,(t)=>{const u=t-1365;ctx.fillStyle=lg(0,H,['#2a2034','#3c3048','#1a1422']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,220,170,A)',.45);
  const z=lerp(1.15,1.0,easeOut(seg(u,0,.6)));CAM(W/2,H*.5,z,()=>oldFace(W/2,H*.5,.92,{open:1,smile:20}));
  if(u<.25){ctx.fillStyle=`rgba(255,255,255,${.8*(1-u/.25)})`;ctx.fillRect(0,0,W,H)}
  const k=easeBack(seg(u,.5,.8));ctx.save();ctx.translate(W/2,330);ctx.scale(k,k);txtC('É O MATHEUS! 😱',0,0,'900 104px Inter','#ffd84a',18);ctx.restore();
});
SHAKE.push(1365.02);

// 21. "O fotógrafo é ele. No futuro." — os dois rostos lado a lado, com "=" e "FUTURO" (1369–1372.5)
scene(1369,1372.5,(t)=>{const u=t-1369;ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);
  const k=easeIO(seg(u,0,.8));face(lerp(W/2,270,k),H*.45,.55,{open:1.2,brow:.6,mouthO:.4,px:20});oldFace(lerp(W/2,810,k),H*.45,.55,{open:1,smile:18,px:-20});
  if(u>.8){txtC('=',W/2,H*.45,'900 160px Inter','#fff',16);txtC('AGORA',270,H*.45+460,'900 60px Inter','#fff',12);txtC('FUTURO',810,H*.45+460,'900 60px Inter','#7dd3ff',12)}
  letterIn(u);
});

// 22. "E você? Desconfiava?" — o Matheus olha pra câmera, sobrancelha levantada (1373–1376.5)
scene(1373,1376.5,(t)=>{const u=t-1373;ctx.fillStyle=lg(0,H,['#ee6a35','#c24e22','#5a2010']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,230,180,A)',.35);
  CAM(W/2,H*.5,lerp(1.12,1.0,easeOut(seg(u,0,.8))),()=>face(W/2,H*.52,1.0,{open:1.1,brow:lerp(0,.9,seg(u,.4,.8)),smile:lerp(0,20,seg(u,.6,1.1)),px:0}));
  const k=easeBack(seg(u,.3,.7));ctx.save();ctx.translate(W/2,330);ctx.scale(k,k);txtC('VOCÊ DESCONFIAVA? 👀',0,0,'900 86px Inter','#fff',18);ctx.restore();letterIn(u);
});

// 23. ele olha pra menina: close nos tênis vermelhos (1377–1380.5)
scene(1377,1380.5,(t)=>{const u=t-1377;ctx.fillStyle=lg(0,H,['#1e1f36','#2a2840','#1a1828']);ctx.fillRect(0,0,W,H);glow(W/2,H*.62,700,'rgba(255,90,80,A)',.25);
  CAM(W/2,H*.7,lerp(1.0,1.15,easeIO(seg(u,0,3.5))),()=>{ctx.fillStyle='#2a2238';ctx.fillRect(0,H*.78,W,H);e8Kid(W/2,H*.85,1.9,{u,smile:4});});
  // círculo nos tênis
  if(u>1.2){const c=seg(u,1.2,1.9);ctx.strokeStyle='#ff3b3b';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();for(let a=0;a<=c*6.5;a+=.05){const x=W/2+Math.cos(a)*(300+8*Math.sin(a*3)),y=H*.82+Math.sin(a)*110;a?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke()}
  letterIn(u);
});

// 24. uma foto antiga: "Matheus, 7 anos" — capa amarela e os MESMOS tênis vermelhos (1381–1384.5)
scene(1381,1384.5,(t)=>{const u=t-1381;ctx.fillStyle='#2b2018';ctx.fillRect(0,0,W,H);glow(W/2,H*.4,800,'rgba(255,220,170,A)',.35);
  CAM(W/2,H*.48,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.47);ctx.rotate(-.05);softShadow(10,600,440,40,.5);ctx.fillStyle='#f3efe6';ctx.fillRect(-400,-520,800,1040);
    ctx.save();ctx.beginPath();ctx.rect(-350,-470,700,760);ctx.clip();ctx.fillStyle=lg(-470,290,['#9cc6e8','#cfe3f0']);ctx.fillRect(-350,-470,700,760);ctx.fillStyle='#7fb07f';ctx.fillRect(-350,40,700,260);
    // foto antiga cortada: só as perninhas e os tênis vermelhos aparecem
    ctx.save();ctx.translate(0,250);ctx.scale(1.9,1.9);ctx.fillStyle='#3a5a8a';for(const sx of[-1,1]){ctx.beginPath();rr(sx*46-20,-260,40,230,10);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.stroke();ctx.fillStyle='#d23b2e';ctx.beginPath();ctx.ellipse(sx*46+(sx>0?8:-8),-16,54,34,0,0,7);ctx.fill();ctx.stroke();ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(sx*46-28,-24);ctx.lineTo(sx*46+30,-24);ctx.stroke();ctx.fillStyle='#3a5a8a'}ctx.restore();
    ctx.fillStyle='rgba(200,160,90,.25)';ctx.fillRect(-350,-470,700,760);ctx.restore();
    ctx.fillStyle='#1f2f6b';ctx.font='700 70px Caveat';ctx.textAlign='center';ctx.fillText('Matheus, 7 anos',0,400);ctx.restore()});
  if(u>1.5){const k=easeBack(seg(u,1.5,1.8));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);txtC('O MESMO TÊNIS!',0,0,'900 96px Inter','#ff5a5a',18);ctx.restore()}
  letterIn(u);
});

// 25. "A menina... é ele. No passado." — a criança sorri, a capa brilha (1385–1388.5)
scene(1385,1388.5,(t)=>{const u=t-1385;ctx.fillStyle=lg(0,H,['#2a2240','#3a2e5a','#181428']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,800,'rgba(255,210,90,A)',.45);
  const KID=(x,y,s,o)=>{ctx.save();ctx.beginPath();ctx.rect(x-420*s,y-468*s,840*s,640*s);ctx.clip();e8Kid(x,y,s,o);ctx.restore()};const BOY=(x,y,s,o)=>{o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};ctx.fillStyle='#d99f12';ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#f4c430';ctx.beginPath();ctx.ellipse(0,-456,104,22,0,0,7);ctx.fill();const sk='#f6cfac';for(const sx of[-1,1]){ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(sx*132,-505,24,32,0,0,7);ctx.fill();OL(8)}ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(0,-515,138,132,0,0,7);ctx.fill();OL(10);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,50,34,-.4,0,7);ctx.fill();ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}const op=Math.max(.15,Math.min(1.2,o.open??1));for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,32,38*op,0,0,7);ctx.fill();OL(6);if(op>.3){ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,21,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,11,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+8,ey-4,7,0,7);ctx.arc(ex+(o.px||0)-6,ey+10,3,0,7);ctx.fill()}const by=-552-(o.brow||0)*10;ctx.strokeStyle=P.hair;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(ex-22,by+4+(o.brow||0)*sx*-6);ctx.quadraticCurveTo(ex,by-6,ex+22,by+4-(o.brow||0)*sx*-6);ctx.stroke()}ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,26,16,0,0,7);ctx.ellipse(78,-458,26,16,0,0,7);ctx.fill();ctx.strokeStyle='#c98a66';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-478);ctx.quadraticCurveTo(4,-466,-4,-462);ctx.stroke();const sm=o.smile||0;if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,14,14*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-26,-442);ctx.quadraticCurveTo(0,-436+sm*.6,26,-442);ctx.stroke()}ctx.restore()};CAM(W/2,H*.6,lerp(1.1,1.0,easeOut(seg(u,0,1))),()=>{KID(W/2,H*.85,1.55,{u});BOY(W/2,H*.85,1.55,{smile:lerp(0,22,seg(u,.4,1.2))})});
  if(u>.8){txtC('PASSADO',W/2,330,'900 110px Inter','#ffd84a',18)}letterIn(u)});

// 26. "Os três são o mesmo Matheus." — os três lado a lado, ligados por um fio de luz (1389–1392.5)
scene(1389,1392.5,(t)=>{const u=t-1389;CAM(W/2,1250,lerp(1.0,1.06,seg(u,0,3.5)),()=>{e7Bedroom(u,{photo:true,mm:12});ctx.fillStyle='rgba(8,8,16,.35)';ctx.fillRect(0,0,W,H);
  e8Kid(200,1720,.55,{u,smile:10,reveal:1});personFront(540,1560,1.45,{smile:10});e9Photog(880,1720,.8,{cam:0,smile:1,reveal:1});
  const k=seg(u,.4,1.6);ctx.save();ctx.globalCompositeOperation='lighter';ctx.strokeStyle=`rgba(255,220,140,${.8*k})`;ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(200,1520);ctx.quadraticCurveTo(370,1200,540,1260);ctx.quadraticCurveTo(710,1200,880,1200);ctx.stroke();ctx.restore();
  for(const [x,y] of [[200,1520],[540,1260],[880,1200]])glow(x,y,160,'rgba(255,220,140,A)',.5*k);});
  const lab=[['PASSADO',200],['AGORA',540],['FUTURO',880]];lab.forEach(([s,x],i)=>{if(u>.5+i*.3)txtC(s,x,1880,'900 54px Inter','#fff',12)});
  txtC('O MESMO MATHEUS',W/2,330,'900 90px Inter','#ffd84a',18);letterIn(u);
});

// 27. o multiverso: três "bolhas" de mundo, cada uma com uma versão dele (1393–1396.5)
scene(1393,1396.5,(t)=>{const u=t-1393;ctx.fillStyle='#05050c';ctx.fillRect(0,0,W,H);
  for(let i=0;i<120;i++){const r=rng(i+300);ctx.fillStyle=`rgba(255,255,255,${.3+.5*r()})`;ctx.beginPath();ctx.arc((r()*W+u*20*r())%W,r()*H,r()*2.4,0,7);ctx.fill()}
  CAM(W/2,H/2,lerp(1.1,.95,easeIO(seg(u,0,3.5))),()=>{const B=[[300,620,'255,210,90',(x,y)=>e8Kid(x,y+464,.85,{u,smile:8,reveal:1})],[540,1060,'255,140,80',(x,y)=>personFront(x,y+480,2.3,{smile:8})],[780,1500,'120,200,255',(x,y)=>e9Photog(x,y+924,1.3,{cam:0,reveal:1,smile:1})]];
    B.forEach(([x,y,c,fn],i)=>{const k=easeBack(seg(u,.2+i*.35,.6+i*.35));if(k<=0)return;ctx.save();ctx.translate(x,y);ctx.scale(k,k);ctx.translate(-x,-y);glow(x,y,300,`rgba(${c},A)`,.45);ctx.save();ctx.beginPath();ctx.arc(x,y,210,0,7);ctx.clip();ctx.fillStyle=`rgba(${c},.25)`;ctx.fillRect(x-220,y-220,440,440);fn(x,y);ctx.restore();ctx.strokeStyle=`rgba(${c},.9)`;ctx.lineWidth=8;ctx.beginPath();ctx.arc(x,y,210,0,7);ctx.stroke();ctx.restore()});
    ctx.save();ctx.globalCompositeOperation='lighter';ctx.strokeStyle='rgba(255,255,255,.25)';ctx.lineWidth=5;ctx.setLineDash([16,18]);ctx.beginPath();ctx.moveTo(300,620);ctx.lineTo(540,1060);ctx.lineTo(780,1500);ctx.stroke();ctx.restore();});
  txtC('MULTIVERSO',W/2,250,'900 100px Inter','#fff',18);letterIn(u);
});

// 28. o desenho: "eu, você e o moço da câmera" — eram os três ele (1397–1400.5)
scene(1397,1400.5,(t)=>{const u=t-1397;ctx.fillStyle='#2a2238';ctx.fillRect(0,0,W,H);glow(W/2,H*.5,800,'rgba(255,220,170,A)',.3);
  CAM(W/2,H*.5,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>e8Drawing(W/2,H*.5,1.12,1,false));
  if(u>1.2){[['= ele',300],['= ele',540],['= ele',800]].forEach(([s,x],i)=>{if(u>1.2+i*.35){ctx.save();ctx.globalAlpha=seg(u,1.2+i*.35,1.5+i*.35);ctx.fillStyle='#ff3b3b';ctx.font='700 70px Caveat';ctx.textAlign='center';ctx.fillText(s,x,1500);ctx.restore()}})}
  letterIn(u);
});

// 29. o rádio (canal 13) e o celular: eram eles avisando (1401–1404.5)
scene(1401,1404.5,(t)=>{const u=t-1401;ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);
  CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{
    // rádio
    ctx.save();ctx.translate(290,900);ctx.rotate(-.06);softShadow(0,240,260,30,.4);ctx.fillStyle='#3a3b44';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-220,-200,440,400,30);ctx.fill();ctx.stroke();ctx.fillStyle='#1c1d22';for(let i=0;i<6;i++)for(let j=0;j<5;j++){ctx.beginPath();ctx.arc(-150+i*44,-120+j*44,12,0,7);ctx.fill()}
    ctx.fillStyle='#9fd3a6';ctx.beginPath();rr(-180,110,360,70,10);ctx.fill();ctx.fillStyle='#10301a';ctx.font='800 46px Oswald';ctx.textAlign='center';ctx.fillText('CANAL 13',0,160);ctx.strokeStyle='#888';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(150,-200);ctx.lineTo(220,-420);ctx.stroke();ctx.restore();
    for(let i=0;i<3;i++){const ph=(u*1.4+i/3)%1;ctx.strokeStyle=`rgba(255,220,120,${.7*(1-ph)})`;ctx.lineWidth=6;ctx.beginPath();ctx.arc(510,480,40+ph*160,-1.2,.2);ctx.stroke()}
    // celular
    ctx.save();ctx.translate(790,1200);ctx.rotate(.08);softShadow(0,400,220,30,.4);ctx.fillStyle='#0d0e12';rr(-180,-360,360,720,50);ctx.fill();ctx.fillStyle='#2c3f86';rr(-165,-345,330,690,40);ctx.fill();notif(-150,-120,300,'#7a5cff','?','entra...','07:13',1);ctx.restore();
    // setas para os dois rostos
    txtC('O FOTÓGRAFO (FUTURO)',290,1250,'900 46px Inter','#7dd3ff',12);txtC('A MENINA (PASSADO)',790,700,'900 46px Inter','#ffd84a',12);});
  letterIn(u);
});

// 30. "E a carta da praça?" — a carta do dia 48, no chão da praça (reaproveita a cena do EP. 1) (cena 41–47 do arquivo base)
// 31. a letra é a MESMA: carta x diário lado a lado, palavras destacadas (1409–1412.5)
scene(1409,1412.5,(t)=>{const u=t-1409;ctx.fillStyle='#18120c';ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,220,170,A)',.35);
  const k=easeIO(seg(u,0,.8));letter(lerp(W/2,300,k),H*.42,.55,['Você veio.','Eu sabia','que viria.'],1);ctx.save();ctx.translate(lerp(W/2,800,k),H*.6);ctx.rotate(.05);ctx.fillStyle='#f3ecda';ctx.fillRect(-220,-300,440,600);ctx.fillStyle='#1f2f6b';ctx.font='600 60px Caveat';ctx.fillText('Dia 1.',-180,-200);ctx.fillText('Acordei, e',-180,-130);ctx.fillText('todo mundo...',-180,-60);ctx.restore();
  if(u>1){const c=seg(u,1,1.6);ctx.strokeStyle='#ff3b3b';ctx.lineWidth=10;ctx.globalAlpha=c;ctx.beginPath();ctx.ellipse(250,H*.42-210,170,60,0,0,7);ctx.stroke();ctx.beginPath();ctx.ellipse(720,H*.6-210,140,60,0,0,7);ctx.stroke();ctx.beginPath();ctx.moveTo(420,H*.42-200);ctx.lineTo(580,H*.6-210);ctx.stroke();ctx.globalAlpha=1}
  if(u>1.6){txtC('A MESMA LETRA',W/2,300,'900 96px Inter','#ffd84a',18)}letterIn(u);
});

// 32. quem escreveu: o Matheus do futuro, escrevendo a carta (1413–1416.5)
scene(1413,1416.5,(t)=>{const u=t-1413;ctx.fillStyle=lg(0,H,['#2b2018','#3a2a20','#18120c']);ctx.fillRect(0,0,W,H);glow(W*.75,H*.2,800,'rgba(255,210,150,A)',.4);
  CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>{oldFace(W/2,H*.32,.6,{open:.7,px:0,py:28,smile:10});letter(W/2,H*.78,.6,['Você não está','sozinho.'],seg(u,.3,2.8));
    const px=W/2-120+seg(u,.3,2.8)*260;ctx.save();ctx.translate(px,H*.78-200+Math.sin(u*20)*6);ctx.rotate(-.6);ctx.fillStyle='#d8b04a';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-14,-260,28,260,10);ctx.fill();ctx.stroke();ctx.fillStyle='#d9a882';ctx.beginPath();ctx.ellipse(10,-110,60,74,0,0,7);ctx.fill();ctx.stroke();ctx.restore();});
  letterIn(u);
});

// 33. [carta] "Você não está sozinho. Nunca esteve." — a carta brilhando (1417–1420.5)
scene(1417,1420.5,(t)=>{const u=t-1417;ctx.fillStyle='#0e0c14';ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(255,220,170,A)',.45);
  CAM(W/2,H*.5,lerp(1.05,1.15,easeIO(seg(u,0,3.5))),()=>letter(W/2,H*.5,1.0,['Você não está','sozinho.','','Nunca esteve.'],seg(u,.1,2.6),seg(u,2.6,3.2)));
  dust(u,33,30,'rgba(255,235,190,A)');letterIn(u);
});

// 34. "Mas por que o dia sessenta?" — o calendário dos dias riscados, o 60 piscando (1421–1424.5)
scene(1421,1424.5,(t)=>{const u=t-1421;ctx.fillStyle='#22180f';ctx.fillRect(0,0,W,H);glow(W/2,H*.4,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.62,lerp(1.0,1.35,easeIO(seg(u,.4,3.5))),()=>calendar(W/2,H*.5,1.0,60,60,u));
  ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,190,W,180);txtC('POR QUE O DIA 60?',W/2,280,'900 92px Inter','#fff',18);letterIn(u);
});

// 35. flashback (sépia): dia 1, 07:12 — o relógio da praça para (1425–1428.5)
scene(1425,1428.5,(t)=>{const u=t-1425;ctx.fillStyle=lg(0,H,['#3a2a1a','#5a4228','#24180e']);ctx.fillRect(0,0,W,H);
  CAM(W/2,H*.45,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>{clockFace(W/2,H*.45,380,7,12);});
  ctx.save();ctx.globalCompositeOperation='color';ctx.fillStyle='rgba(160,110,60,.6)';ctx.fillRect(0,0,W,H);ctx.restore();
  txtC('DIA 1 · 07:12',W/2,H*.82,'800 90px Oswald','#ffd8a0',16);letterIn(u);
});

// 36. "o relógio parou. E o mundo se dividiu." — a cidade se divide em duas cópias (1429–1432.5)
scene(1429,1432.5,(t)=>{const u=t-1429;const k=easeIO(seg(u,.3,2.2));ctx.fillStyle='#0b0c18';ctx.fillRect(0,0,W,H);
  const half=(dx,a,tint)=>{ctx.save();ctx.translate(dx,0);ctx.globalAlpha=a;sky('#1b1f45','#3a3a6a','#6a4a7a');buildings(5,1300,400,900,'#20234a','#ffd27a',.3,200,1);if(tint){ctx.fillStyle=tint;ctx.fillRect(0,0,W,H)}ctx.restore()};
  ctx.save();ctx.beginPath();ctx.rect(0,0,W/2,H);ctx.clip();half(-k*120,1,'rgba(255,140,80,.12)');ctx.restore();
  ctx.save();ctx.beginPath();ctx.rect(W/2,0,W/2,H);ctx.clip();half(k*120,1,'rgba(120,160,255,.12)');ctx.restore();
  ctx.save();ctx.globalCompositeOperation='lighter';const g=ctx.createLinearGradient(W/2-60,0,W/2+60,0);g.addColorStop(0,'rgba(255,255,255,0)');g.addColorStop(.5,`rgba(255,240,220,${.9*k})`);g.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=g;ctx.fillRect(W/2-60,0,120,H);ctx.restore();
  txtC('MUNDO REAL',W*.25,1500,'900 56px Inter','#ffd8a0',12);txtC('A CÓPIA VAZIA',W*.75,1500,'900 56px Inter','#bcd8ff',12);
  if(u<.4){ctx.fillStyle=`rgba(255,255,255,${.6*(1-u/.4)})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(1429.3);

// 37. "Hoje, às sete e treze, ele anda de novo." — o relógio do quarto: 07:12 → 07:13 (1433–1436.5)
scene(1433,1436.5,(t)=>{const u=t-1433;ctx.fillStyle=lg(0,H,DAWN);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,200,150,A)',.3);
  const m=12+easeOut(seg(u,1,1.3));CAM(W/2,H*.45,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>clockFace(W/2,H*.45,380,7,m));
  txtC(u<1.15?'07:12':'07:13',W/2,H*.82,'800 120px Oswald',u<1.15?'#fff':'#7dffa8',16);
  if(u>1.15&&u<1.5){glow(W/2,H*.45,700,'rgba(160,255,200,A)',.5*(1-seg(u,1.15,1.5)))}letterIn(u);
});
SHAKE.push(1434.1);

// 38. a passagem se abre por um minuto: luz vazando pelas frestas do armário (1437–1440.5)
scene(1437,1440.5,(t)=>{const u=t-1437;CAM(W/2,1000,lerp(1.0,1.08,seg(u,0,3.5)),()=>{e7Wardrobe(u,.04,0);
  const k=seg(u,.2,3.2);ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(255,240,200,${.9*k})`;ctx.fillRect(536,380,10,1140);ctx.fillRect(230,1515,620,8);ctx.restore();beams(540,950,Math.PI*1.0,7,900,.12*k);beams(540,950,0,7,900,.12*k);glow(540,950,600,'rgba(255,240,200,A)',.4*k);});
  // contagem de 1 minuto
  const s=Math.max(0,60-Math.floor(u*2));txtC('00:'+String(s).padStart(2,'0'),W/2,300,'800 110px Oswald','#7dffa8',16);letterIn(u);
});

// 39. "O calendário vira: sessenta!" — no quarto, o calendário de parede: 59 → 60 (1441–1444.5)
scene(1441,1444.5,(t)=>{const u=t-1441;ctx.fillStyle=lg(0,H,DAWN);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(255,90,90,A)',.25);
  const z=lerp(1.15,1.0,easeOut(seg(u,.3,.7)));CAM(W/2,H*.5,z,()=>calendar(W/2,H*.52,1.05,u<.4?59:60,u<.4?59:60,u));
  if(u>.4&&u<.6){ctx.fillStyle=`rgba(255,255,255,${.6*(1-seg(u,.4,.6))})`;ctx.fillRect(0,0,W,H)}
  const k=easeBack(seg(u,.45,.75));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);txtC('DIA 60!',0,0,'900 140px Inter','#ff5a5a',20);ctx.restore();
});
SHAKE.push(1441.42);

// 40. uma luz ENORME sai do armário (portas abrindo), os três iluminados de costas (1445–1448.5)
scene(1445,1448.5,(t)=>{const u=t-1445;const k=easeOut(seg(u,.2,1.4));CAM(W/2,1000,lerp(1.08,1.0,easeOut(seg(u,0,1.5))),()=>{e7Wardrobe(u,lerp(.04,1,k),0);portal(540,950,k,u);
  // silhuetas dos três de costas, contra a luz
  ctx.save();ctx.globalAlpha=.92;ctx.filter='brightness(0.15)';e8Kid(330,1800,.5,{u,back:1,hoodDown:1});personFront(560,1640,1.4,{back:true});e9Photog(820,1810,.8,{back:1});ctx.restore();});
  dust(u,44,40,'rgba(255,240,200,A)');
});

// 41. "só deixa passar um de cada vez": o portal com o número 1 e os três em fila (1449–1452.5)
scene(1449,1452.5,(t)=>{const u=t-1449;ctx.fillStyle='#120e1c';ctx.fillRect(0,0,W,H);portal(540,700,1,u);
  ctx.save();ctx.filter='brightness(0.2)';e8Kid(540,1500,.55,{u,back:1,hoodDown:1});personFront(320,1560,1.25,{back:true});e9Photog(780,1660,.7,{back:1});ctx.restore();
  const k=easeBack(seg(u,.3,.6));ctx.save();ctx.translate(W/2,700);ctx.scale(k,k);ctx.fillStyle='rgba(20,20,30,.85)';ctx.beginPath();ctx.arc(0,0,130,0,7);ctx.fill();txtC('1',0,6,'900 170px Oswald','#ffd84a');ctx.restore();
  txtC('UM DE CADA VEZ',W/2,1880,'900 80px Inter','#fff',16);
});

// 42. cada um volta pro seu tempo: três portas de luz — PASSADO, AGORA, FUTURO (1453–1456.5)
scene(1453,1456.5,(t)=>{const u=t-1453;ctx.fillStyle='#0a0a14';ctx.fillRect(0,0,W,H);
  CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>{[[200,'255,210,90','PASSADO'],[540,'255,150,90','AGORA'],[880,'120,200,255','FUTURO']].forEach(([x,c,s],i)=>{const k=easeOut(seg(u,.2+i*.3,.8+i*.3));glow(x,900,420,`rgba(${c},A)`,.55*k);ctx.fillStyle=`rgba(${c},${.9*k})`;rr(x-110,620,220,560,110);ctx.fill();txtC(s,x,1300,'900 50px Inter','#fff',12)})});
  letterIn(u);
});

// 43. a menina vai primeiro: anda para a luz (de costas, ficando menor) (1457–1460.5)
scene(1457,1460.5,(t)=>{const u=t-1457;ctx.fillStyle='#1a1424';ctx.fillRect(0,0,W,H);portal(540,800,1,u,'255,220,120');
  const k=easeIO(seg(u,.2,3.4));const s=lerp(.9,.35,k),y=lerp(1800,1180,k),bob=Math.abs(Math.sin(u*7))*-10*s;
  ctx.save();ctx.globalAlpha=1-seg(u,3,3.5);ctx.translate(540,y+bob);ctx.scale(s,s);
  // capa amarela de costas (sem rosto): capuz + corpo + tênis vermelhos
  ctx.fillStyle='#f2c230';ctx.strokeStyle=OUT;ctx.lineWidth=11;ctx.beginPath();ctx.moveTo(-152,-150);ctx.quadraticCurveTo(-186,-430,0,-472);ctx.quadraticCurveTo(186,-430,152,-150);ctx.quadraticCurveTo(0,-118,-152,-150);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.ellipse(0,-450,170,60,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle=P.hair;ctx.beginPath();ctx.ellipse(0,-570,128,120,0,0,7);ctx.fill();ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=10;ctx.beginPath();ctx.arc(0,-580,70,-2.6,-1.2);ctx.stroke();
  const st=Math.sin(u*7);for(const sx of[-1,1]){ctx.fillStyle='#c9a152';ctx.beginPath();rr(sx*46-18,-150,36,116-(sx*st>0?20:0),10);ctx.fill();ctx.stroke();ctx.fillStyle='#d23b2e';ctx.beginPath();ctx.ellipse(sx*46,-16-(sx*st>0?20:0),46,30,0,0,7);ctx.fill();ctx.stroke()}
  ctx.restore();letterIn(u);
});

// 44. ela se vira na luz e acena: "até logo, eu grande!" (1461–1464.5)
scene(1461,1464.5,(t)=>{const u=t-1461;ctx.fillStyle='#2a2040';ctx.fillRect(0,0,W,H);portal(540,600,1,u,'255,220,120');
  const KID=(x,y,s,o)=>{ctx.save();ctx.beginPath();ctx.rect(x-420*s,y-468*s,840*s,640*s);ctx.clip();e8Kid(x,y,s,o);ctx.restore()};const BOY=(x,y,s,o)=>{o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};ctx.fillStyle='#d99f12';ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#f4c430';ctx.beginPath();ctx.ellipse(0,-456,104,22,0,0,7);ctx.fill();const sk='#f6cfac';for(const sx of[-1,1]){ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(sx*132,-505,24,32,0,0,7);ctx.fill();OL(8)}ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(0,-515,138,132,0,0,7);ctx.fill();OL(10);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,50,34,-.4,0,7);ctx.fill();ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}const op=Math.max(.15,Math.min(1.2,o.open??1));for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,32,38*op,0,0,7);ctx.fill();OL(6);if(op>.3){ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,21,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,11,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+8,ey-4,7,0,7);ctx.arc(ex+(o.px||0)-6,ey+10,3,0,7);ctx.fill()}const by=-552-(o.brow||0)*10;ctx.strokeStyle=P.hair;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(ex-22,by+4+(o.brow||0)*sx*-6);ctx.quadraticCurveTo(ex,by-6,ex+22,by+4-(o.brow||0)*sx*-6);ctx.stroke()}ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,26,16,0,0,7);ctx.ellipse(78,-458,26,16,0,0,7);ctx.fill();ctx.strokeStyle='#c98a66';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-478);ctx.quadraticCurveTo(4,-466,-4,-462);ctx.stroke();const sm=o.smile||0;if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,14,14*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-26,-442);ctx.quadraticCurveTo(0,-436+sm*.6,26,-442);ctx.stroke()}ctx.restore()};CAM(W/2,H*.6,lerp(1.05,1.0,seg(u,0,3.5)),()=>{KID(W/2,1700,1.25,{u,wave:1});BOY(W/2,1700,1.25,{smile:26});
    // mãozinha acenando
    {const w=Math.sin(u*9);const hx=265+w*40,hy=-700;ctx.save();ctx.translate(W/2,1700);ctx.scale(1.25,1.25);ctx.lineCap='round';ctx.strokeStyle=OUT;ctx.lineWidth=46;ctx.beginPath();ctx.moveTo(100,-430);ctx.quadraticCurveTo(250,-470,hx,hy);ctx.stroke();ctx.strokeStyle='#f4c430';ctx.lineWidth=36;ctx.stroke();ctx.fillStyle='#f6cfac';ctx.beginPath();ctx.ellipse(hx,hy-12,22,26,0,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.stroke();ctx.restore()}});
  const k=easeBack(seg(u,.4,.7));ctx.save();ctx.translate(W/2,330);ctx.scale(k,k);ctx.fillStyle='#fff';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-400,-100,800,200,50);ctx.fill();ctx.stroke();txtC('ATÉ LOGO, EU GRANDE! 👋',0,0,'900 60px Inter','#d2861a');ctx.restore();
});

// 45. depois, o fotógrafo: entra na luz azul do futuro (de costas, ficando menor) (1465–1468.5)
scene(1465,1468.5,(t)=>{const u=t-1465;ctx.fillStyle='#0e1424';ctx.fillRect(0,0,W,H);portal(540,800,1,u,'150,210,255');
  const k=easeIO(seg(u,.2,3.4));const s=lerp(1.0,.4,k),y=lerp(1900,1250,k),bob=Math.abs(Math.sin(u*6))*-8*s;
  ctx.save();ctx.globalAlpha=1-seg(u,3,3.5);ctx.translate(540,y+bob);ctx.scale(s,s);
  ctx.fillStyle='#5a6248';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-100,-720);ctx.quadraticCurveTo(-140,-460,-122,-240);ctx.lineTo(122,-240);ctx.quadraticCurveTo(140,-460,100,-720);ctx.closePath();ctx.fill();ctx.stroke();
  const st=Math.sin(u*6);for(const sx of[-1,1]){ctx.fillStyle='#2c2a30';ctx.beginPath();rr(sx*44-26,-250,52,240-(sx*st>0?24:0),12);ctx.fill();ctx.stroke()}
  ctx.fillStyle='#8a3a3a';ctx.beginPath();rr(-64,-750,128,46,20);ctx.fill();ctx.stroke();ctx.fillStyle='#8e8e96';ctx.beginPath();ctx.ellipse(0,-830,66,76,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle='#3a3428';ctx.beginPath();ctx.ellipse(0,-880,112,24,0,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(-62,-884);ctx.quadraticCurveTo(-66,-960,0,-964);ctx.quadraticCurveTo(66,-960,62,-884);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.restore();letterIn(u);
});

// 46. ele sorri, já na luz: "a gente se vê lá na frente" (1469–1472.5)
scene(1469,1472.5,(t)=>{const u=t-1469;ctx.fillStyle='#1a2a44';ctx.fillRect(0,0,W,H);portal(540,500,1,u,'150,210,255');
  CAM(W/2,H*.55,lerp(1.08,1.0,easeOut(seg(u,0,3.5))),()=>oldFace(W/2,H*.56,.85,{open:.8,smile:30,lid:.2,hat:1,shadow:0}));
  const k=easeBack(seg(u,.5,.8));ctx.save();ctx.translate(W/2,330);ctx.scale(k,k);ctx.fillStyle='#fff';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-440,-100,880,200,50);ctx.fill();ctx.stroke();txtC('A GENTE SE VÊ LÁ NA FRENTE 😉',0,0,'900 50px Inter','#2a5aa0');ctx.restore();
});

// 47. agora é a vez do Matheus: ele de costas, encarando a luz (1473–1476.5)
scene(1473,1476.5,(t)=>{const u=t-1473;ctx.fillStyle='#2a1810';ctx.fillRect(0,0,W,H);portal(540,750,1,u,'255,190,120');
  CAM(W/2,1300,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.filter='brightness(0.35)';personFront(540,1560,2.2,{back:true});ctx.restore();});
  txtC('A VEZ DELE',W/2,300,'900 100px Inter','#ffd84a',18);letterIn(u);
});

// 48. ele respira fundo e atravessa: anda para a luz até tudo ficar branco (1477–1480.5)
scene(1477,1480.5,(t)=>{const u=t-1477;ctx.fillStyle='#2a1810';ctx.fillRect(0,0,W,H);const k=easeIO(seg(u,.4,3));portal(540,750,1+k,u,'255,200,140');
  ctx.save();ctx.globalAlpha=1-seg(u,2.4,3);ctx.filter='brightness(0.35)';personFront(540,lerp(1560,1100,k),lerp(2.2,.8,k),{back:true,walk:u*7});ctx.restore();
  ctx.fillStyle=`rgba(255,250,240,${seg(u,2.4,3.4)})`;ctx.fillRect(0,0,W,H);
});

// 49. silêncio... e então BUZINAS: o branco abre para a rua cheia (1481–1484.5)
scene(1481,1484.5,(t)=>{const u=t-1481;const _ob=blurred;blurred=(p,f)=>f();busyStreet(u,u*40);blurred=_ob;ctx.fillStyle=`rgba(255,250,240,${1-seg(u,.6,1.4)})`;ctx.fillRect(0,0,W,H);
  if(u>1.2){for(let i=0;i<2;i++){const k=easeBack(seg(u,1.2+i*.3,1.5+i*.3));ctx.save();ctx.translate(i?780:300,i?600:440);ctx.rotate(i?.1:-.1);ctx.scale(k,k);txtC('BIIII!',0,0,'900 100px Inter','#ffd84a',18);ctx.restore()}}
});

// 50. gente na rua, barulho: a cidade voltou! (1485–1488.5)
scene(1485,1488.5,(t)=>{const u=t-1485;const _ob=blurred;blurred=(p,f)=>f();CAM(W/2,1300,lerp(1.0,1.06,seg(u,0,3.5)),()=>busyStreet(u+3,u*60+200));blurred=_ob;
  const k=easeBack(seg(u,.3,.6));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);txtC('A CIDADE VOLTOU! 🎉',0,0,'900 92px Inter','#fff',18);ctx.restore();grade('rgba(255,170,90,.2)','rgba(40,60,120,.15)');letterIn(u);
});

// 51. em casa, dia 61: o quarto de manhã, sol entrando; ele sorri na janela; o gato laranja no parapeito (ambiente) (1489–1492.5)
scene(1489,1492.5,(t)=>{const u=t-1489;ctx.fillStyle=lg(0,H,['#f4e3c9','#e9d3b4','#c9ad8c']);ctx.fillRect(0,0,W,H);
  CAM(W/2,1200,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.beginPath();ctx.rect(560,330,420,620);ctx.clip();sky('#7fb2e6','#cfe3f2','#ffd9a8');sun(800,500,60,'#fff6dc','rgba(255,220,150,.8)');buildings(3,950,140,420,'#9db2cc','#fff0c0',.1,200,1);ctx.restore();
    ctx.strokeStyle='#8a6a4a';ctx.lineWidth=18;ctx.strokeRect(560,330,420,620);e6Cat(860,945,.5,u);beams(800,500,2.3,6,1400,.08);
    calendar(240,560,.32,61,61,u);ctx.fillStyle='#d23b3b';ctx.fillRect(110,390,260,40);txtC('DIA 61',240,410,'900 34px Inter','#fff');
    ctx.fillStyle=lg(1300,H,['#a7845f','#7d5f42']);ctx.fillRect(0,1300,W,H-1300);
    personTurn(420,1500,1.6,{eye:1,smile:18,brow:.2},.5);});
  dust(u,51,30,'rgba(255,235,190,A)');letterIn(u);
});

// 52/53. na mesa, uma foto nova: os três juntos, de mãos dadas (1493–1495.9 e 1500–1503.5)
function fotoTres(u,z){ctx.fillStyle='#5a3a26';ctx.fillRect(0,0,W,H);glow(W*.7,H*.2,900,'rgba(255,220,170,A)',.35);
  CAM(W/2,H*.5,z,()=>{ctx.save();ctx.translate(W/2,H*.5);ctx.rotate(-.04);softShadow(10,620,460,40,.5);ctx.fillStyle='#f3efe6';ctx.fillRect(-420,-540,840,1080);
    ctx.save();ctx.beginPath();ctx.rect(-370,-490,740,780);ctx.clip();ctx.fillStyle=lg(-490,290,['#7fb2e6','#ffd9a8']);ctx.fillRect(-370,-490,740,780);ctx.fillStyle='#7fb07f';ctx.fillRect(-370,150,740,140);
    e8Kid(-220,260,.42,{u:0,smile:12,reveal:1});personFront(0,90,1.05,{smile:16,noShadow:true});e9Photog(230,270,.55,{cam:0,smile:1,reveal:1});
    ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-160,90);ctx.lineTo(-60,60);ctx.moveTo(60,60);ctx.lineTo(170,60);ctx.stroke();ctx.restore();
    ctx.fillStyle='#1f2f6b';ctx.font='700 70px Caveat';ctx.textAlign='center';ctx.fillText('nós três ♥',0,420);ctx.restore()})}
scene(1493,1495.9,(t)=>{const u=t-1493;fotoTres(u,lerp(.8,1.0,easeIO(seg(u,0,2.9))));letterIn(u)});
scene(1500,1503.5,(t)=>{const u=t-1500;fotoTres(u,lerp(1.0,1.25,easeIO(seg(u,0,3.5))));txtC('DE MÃOS DADAS',W/2,280,'900 90px Inter','#ffd84a',18)});

// 54. "Não eram estranhos. Eram ele mesmo." — as três versões refletidas na janela, sobrepostas ao rosto dele (1504–1507.5)
scene(1504,1507.5,(t)=>{const u=t-1504;ctx.fillStyle=lg(0,H,['#2a2240','#5a4a7a','#f0a070']);ctx.fillRect(0,0,W,H);
  CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>{face(W/2,H*.5,.95,{open:.9,smile:14,lid:.1});ctx.save();ctx.globalAlpha=.25*seg(u,.4,1.4);e8Kid(200,1500,.6,{u,smile:10,reveal:1});e9Photog(880,1560,.6,{cam:0,smile:1,reveal:1});ctx.restore();});
  glow(W/2,H*.3,900,'rgba(255,220,170,A)',.3);letterIn(u);
});

// 55. "Sobrou só um... mas ele nunca esteve sozinho." — ele na janela, o sol nascendo sobre a cidade cheia (1508–1511.5)
scene(1508,1511.5,(t)=>{const u=t-1508;const k=easeIO(seg(u,0,3.5));sky('#f0a070','#ffd9a8','#cfe3f2');sun(W/2,lerp(1100,800,k),90,'#fff6dc','rgba(255,214,150,.9)');buildings(9,1500,300,800,'#6a5a7a','#ffe6a0',.3,100,1);
  beams(W/2,lerp(1100,800,k),Math.PI*1.5,9,1600,.1);
  ctx.save();ctx.filter='brightness(0.25)';personFront(540,1640,1.8,{back:true});ctx.restore();e6Cat(820,1780,.6,u);
  txtC('ELE NUNCA ESTEVE SOZINHO',W/2,300,'900 66px Inter','#fff',16);
});

// 56/57. FIM (1512–1519)
scene(1512,1519,(t)=>{const u=t-1512;ctx.fillStyle='#07070c';ctx.fillRect(0,0,W,H);const g=ctx.createRadialGradient(W/2,H*.42,50,W/2,H*.42,900);g.addColorStop(0,'rgba(255,90,60,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.38);ctx.scale(k,k);txtC('FIM',0,-160,'900 240px Oswald','#fff');txtC('E SE SOBRASSE',0,60,'900 100px Inter','#fff');txtC('SÓ UM?',0,190,'900 170px Inter','#ff3b3b');ctx.restore();
  const k2=seg(u,1.2,1.8);ctx.save();ctx.globalAlpha=k2;txtC('SEGUNDA: UMA NOVA HISTÓRIA 👀',W/2,H*.38+460,'800 56px Inter','#ffd84a');txtC('Comenta: você desconfiava?',W/2,H*.38+560,'700 50px Inter','#fff');ctx.restore();
  dust(u,57,40,'rgba(255,220,180,A)');
});

// cartão final (1496–1499.2)
scene(1496,1499.2,(t)=>{const u=t-1496;ctx.fillStyle='#07070c';ctx.fillRect(0,0,W,H);const g=ctx.createRadialGradient(W/2,H*.42,50,W/2,H*.42,900);g.addColorStop(0,'rgba(120,90,255,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.38);ctx.scale(k,k);txtC('SEGUNDA, 18H',0,0,'900 110px Inter','#ffd84a');txtC('UMA NOVA HISTÓRIA',0,140,'900 84px Inter','#fff');txtC('COM O MATHEUS',0,250,'900 84px Inter','#fff');ctx.restore();
  ctx.save();ctx.globalAlpha=seg(u,.6,1);txtC('Segue pra não perder 👆',W/2,H*.38+520,'800 56px Inter','#fff');ctx.restore()});

// ======== v2: continuidade (dia 48 → 60) ========
// A. "Mas hoje ainda é dia quarenta e oito." (1520–1523.5)
scene(1520,1523.5,(t)=>{const u=t-1520;ctx.fillStyle='#22180f';ctx.fillRect(0,0,W,H);glow(W/2,H*.4,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.62,lerp(1.25,1.4,easeIO(seg(u,0,3.5))),()=>calendar(W/2,H*.5,1.0,48,48,u));
  ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,190,W,180);txtC('HOJE: DIA 48',W/2,280,'900 96px Inter','#fff',18);letterIn(u)});
// B. "Faltam doze dias." — os dias 49 a 60 acendem um por um, contador 12 (1524–1527.5)
scene(1524,1527.5,(t)=>{const u=t-1524;ctx.fillStyle='#22180f';ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.55,lerp(1.0,1.05,seg(u,0,3.5)),()=>{calendar(W/2,H*.52,1.0,48,0,u);ctx.save();ctx.translate(W/2,H*.52);
    for(let d=49;d<=60;d++){const k=seg(u,.2+(d-49)*.12,.4+(d-49)*.12);if(k<=0)continue;const c=(d-1)%8,r=Math.floor((d-1)/8);ctx.fillStyle=`rgba(255,216,74,${.55*k})`;ctx.beginPath();ctx.arc(-350+c*100,-280+r*100,40,0,7);ctx.fill()}ctx.restore();});
  const n=Math.min(12,Math.floor(seg(u,.2,1.8)*12)+1);const k=easeBack(seg(u,.1,.4));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);txtC('FALTAM '+n+' DIAS',0,0,'900 100px Inter','#ffd84a',18);ctx.restore();letterIn(u)});
// C. "E pela primeira vez... ele não espera sozinho." — os três sentados juntos no chão da sala das fotos, abajur quente (1528–1531.5)
scene(1528,1531.5,(t)=>{const u=t-1528;ctx.fillStyle='#2b2018';ctx.fillRect(0,0,W,H);ctx.fillStyle='#4a3a2e';ctx.fillRect(0,0,W,1450);
  const r=rng(31);for(let i=0;i<8;i++){ctx.save();ctx.translate(120+(i%4)*280,300+Math.floor(i/4)*330+r()*30);ctx.rotate((r()-.5)*.3);ctx.fillStyle='#f3efe6';ctx.fillRect(-70,-84,140,168);ctx.fillStyle=['#5a7aa0','#c97b4a','#3f7a4a','#8a6a9a'][i%4];ctx.fillRect(-58,-72,116,116);ctx.restore()}
  ctx.fillStyle='#3a2a20';ctx.fillRect(0,1450,W,H-1450);
  CAM(W/2,1450,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{ctx.fillStyle='#3a2f2a';ctx.fillRect(900,1200,30,260);ctx.fillStyle='#e8c07a';ctx.beginPath();ctx.moveTo(850,1210);ctx.lineTo(880,1110);ctx.lineTo(950,1110);ctx.lineTo(980,1210);ctx.closePath();ctx.fill();glow(915,1200,520,'rgba(255,190,110,A)',.5);
    e8Kid(250,1720,.55,{u,smile:12});personFront(500,1560,1.45,{smile:14,look:-.3});e9Photog(760,1730,.82,{cam:0,smile:1});
});
  dust(u,28,24,'rgba(255,220,170,A)');grade('rgba(255,170,90,.3)','rgba(40,60,160,.15)');letterIn(u)});
// D. "Os três ficam juntos. Dia após dia." — montagem: polaroids dos 12 dias caindo na mesa, contador de dias subindo (1532–1535.5)
scene(1532,1535.5,(t)=>{const u=t-1532;ctx.fillStyle='#5a3a26';ctx.fillRect(0,0,W,H);glow(W*.7,H*.2,900,'rgba(255,220,170,A)',.35);
  const cards=[['jogando cartas','#3f7a4a'],['o pequeno desenhando','#c97b4a'],['aprendendo a fotografar','#5a7aa0'],['jantar juntos','#8a6a9a'],['vendo as estrelas','#1d2850'],['rindo muito','#e2683c']];
  cards.forEach(([lab,c],i)=>{const k=easeOut(seg(u,.1+i*.45,.4+i*.45));if(k<=0)return;const r=rng(i+50);ctx.save();ctx.translate(200+(i%3)*340+r()*30,520+Math.floor(i/3)*620+lerp(-500,0,k));ctx.rotate((r()-.5)*.35);softShadow(6,250,200,26,.4);ctx.fillStyle='#f3efe6';ctx.fillRect(-150,-190,300,360);
    ctx.save();ctx.beginPath();ctx.rect(-130,-170,260,260);ctx.clip();ctx.fillStyle=c;ctx.fillRect(-130,-170,260,260);ctx.globalAlpha=.9;e8Kid(-70,70,.2,{u:0,smile:10});personFront(10,10,.5,{smile:14,noShadow:true});e9Photog(80,80,.17,{cam:i===2?1:0,smile:1});ctx.restore();
    ctx.fillStyle='#1f2f6b';ctx.font='700 36px Caveat';ctx.textAlign='center';ctx.fillText(lab,0,140);ctx.restore()});
  const d=49+Math.floor(seg(u,.1,3.2)*10.99);ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,1700,W,170);txtC('DIA '+d,W/2,1785,'900 100px Oswald','#ffd84a',14);letterIn(u)});

// ======== v2: a revelação do menino ========
// K1. "Ele se abaixa... e tira o capuz amarelo." (1536–1539.5)
scene(1536,1539.5,(t)=>{const u=t-1536;const KID=(x,y,s,o)=>{ctx.save();ctx.beginPath();ctx.rect(x-420*s,y-468*s,840*s,640*s);ctx.clip();e8Kid(x,y,s,o);ctx.restore()};const BOY=(x,y,s,o)=>{o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};ctx.fillStyle='#d99f12';ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#f4c430';ctx.beginPath();ctx.ellipse(0,-456,104,22,0,0,7);ctx.fill();const sk='#f6cfac';for(const sx of[-1,1]){ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(sx*132,-505,24,32,0,0,7);ctx.fill();OL(8)}ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(0,-515,138,132,0,0,7);ctx.fill();OL(10);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,50,34,-.4,0,7);ctx.fill();ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}const op=Math.max(.15,Math.min(1.2,o.open??1));for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,32,38*op,0,0,7);ctx.fill();OL(6);if(op>.3){ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,21,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,11,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+8,ey-4,7,0,7);ctx.arc(ex+(o.px||0)-6,ey+10,3,0,7);ctx.fill()}const by=-552-(o.brow||0)*10;ctx.strokeStyle=P.hair;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(ex-22,by+4+(o.brow||0)*sx*-6);ctx.quadraticCurveTo(ex,by-6,ex+22,by+4-(o.brow||0)*sx*-6);ctx.stroke()}ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,26,16,0,0,7);ctx.ellipse(78,-458,26,16,0,0,7);ctx.fill();ctx.strokeStyle='#c98a66';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-478);ctx.quadraticCurveTo(4,-466,-4,-462);ctx.stroke();const sm=o.smile||0;if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,14,14*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-26,-442);ctx.quadraticCurveTo(0,-436+sm*.6,26,-442);ctx.stroke()}ctx.restore()};ctx.fillStyle=lg(0,H,['#2a2240','#3a2e5a','#181428']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,800,'rgba(255,210,90,A)',.35);
  const k=easeIO(seg(u,1.2,2.4));const sh=(u>2.35&&u<2.7)?Math.sin(u*80)*8:0;
  CAM(W/2+sh,H*.45,lerp(1.0,1.15,easeIO(seg(u,0,3.5))),()=>{(k>.5?KID:e8Kid)(W/2,H*.95,1.7,{u,smile:4});if(k>.5)BOY(W/2,H*.95,1.7,{smile:lerp(0,24,seg(u,2.5,3.2)),open:1.15});
    // mão dele (manga laranja) puxando o capuz pra trás
    const hx=lerp(W/2+380,W/2+60,easeOut(seg(u,.2,1.2)))+easeIO(seg(u,2.3,3.0))*700,hy=lerp(H*.2,H*.95-1.7*600,easeOut(seg(u,.2,1.2)))+k*120;ctx.fillStyle=P.hood;ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(W+60,hy-260);ctx.lineTo(hx+60,hy-40);ctx.lineTo(hx+20,hy+50);ctx.lineTo(W+60,hy-120);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle=P.skin;ctx.beginPath();ctx.ellipse(hx,hy,62,70,0,0,7);ctx.fill();ctx.stroke();});
  if(u>2.35&&u<2.6){ctx.fillStyle=`rgba(255,255,255,${.7*(1-seg(u,2.35,2.6))})`;ctx.fillRect(0,0,W,H)}
  ctx.save();ctx.globalAlpha=1-seg(u,2.2,2.4);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,190,W,180);txtC('QUEM É VOCÊ?',W/2,280,'900 96px Inter','#fff',18);ctx.restore();
});
// K2. "O cabelo. Os olhos. O mesmo jeito de sorrir." — o menino e o Matheus lado a lado, setas ligando (1540–1543.5)
scene(1540,1543.5,(t)=>{const u=t-1540;const KID=(x,y,s,o)=>{ctx.save();ctx.beginPath();ctx.rect(x-420*s,y-468*s,840*s,640*s);ctx.clip();e8Kid(x,y,s,o);ctx.restore()};const BOY=(x,y,s,o)=>{o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};ctx.fillStyle='#d99f12';ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#f4c430';ctx.beginPath();ctx.ellipse(0,-456,104,22,0,0,7);ctx.fill();const sk='#f6cfac';for(const sx of[-1,1]){ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(sx*132,-505,24,32,0,0,7);ctx.fill();OL(8)}ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(0,-515,138,132,0,0,7);ctx.fill();OL(10);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,50,34,-.4,0,7);ctx.fill();ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}const op=Math.max(.15,Math.min(1.2,o.open??1));for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,32,38*op,0,0,7);ctx.fill();OL(6);if(op>.3){ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,21,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,11,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+8,ey-4,7,0,7);ctx.arc(ex+(o.px||0)-6,ey+10,3,0,7);ctx.fill()}const by=-552-(o.brow||0)*10;ctx.strokeStyle=P.hair;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(ex-22,by+4+(o.brow||0)*sx*-6);ctx.quadraticCurveTo(ex,by-6,ex+22,by+4-(o.brow||0)*sx*-6);ctx.stroke()}ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,26,16,0,0,7);ctx.ellipse(78,-458,26,16,0,0,7);ctx.fill();ctx.strokeStyle='#c98a66';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-478);ctx.quadraticCurveTo(4,-466,-4,-462);ctx.stroke();const sm=o.smile||0;if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,14,14*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-26,-442);ctx.quadraticCurveTo(0,-436+sm*.6,26,-442);ctx.stroke()}ctx.restore()};ctx.fillStyle=lg(0,H,['#1d1a3a','#3a2a6a','#120f26']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,200,140,A)',.3);
  KID(280,1500,.9,{u});BOY(280,1500,.9,{smile:22});face(800,H*.38,.55,{open:1,smile:22});
  const tags=[['O CABELO',-170,.2],['OS OLHOS',-10,1.0],['O SORRISO',130,1.8]];tags.forEach(([lab,dy,a])=>{const k=seg(u,a,a+.4);if(k<=0)return;ctx.save();ctx.globalAlpha=k;ctx.strokeStyle='#ffd84a';ctx.lineWidth=8;ctx.setLineDash([18,14]);ctx.beginPath();ctx.moveTo(360,1500-540*.9+dy*.9*.5*2);ctx.lineTo(700,H*.38+dy*.55);ctx.stroke();ctx.setLineDash([]);txtC(lab,540,(1500-540*.9+H*.38)/2+dy*.8-40,'900 54px Inter','#ffd84a',12);ctx.restore()});
  txtC('= IGUAL',W/2,1820,'900 90px Inter','#fff',16);letterIn(u)});
// K3. "Não era uma menina. Era um menino!" (1544–1547.5)
scene(1544,1547.5,(t)=>{const u=t-1544;const KID=(x,y,s,o)=>{ctx.save();ctx.beginPath();ctx.rect(x-420*s,y-468*s,840*s,640*s);ctx.clip();e8Kid(x,y,s,o);ctx.restore()};const BOY=(x,y,s,o)=>{o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};ctx.fillStyle='#d99f12';ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#f4c430';ctx.beginPath();ctx.ellipse(0,-456,104,22,0,0,7);ctx.fill();const sk='#f6cfac';for(const sx of[-1,1]){ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(sx*132,-505,24,32,0,0,7);ctx.fill();OL(8)}ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(0,-515,138,132,0,0,7);ctx.fill();OL(10);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,50,34,-.4,0,7);ctx.fill();ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}const op=Math.max(.15,Math.min(1.2,o.open??1));for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,32,38*op,0,0,7);ctx.fill();OL(6);if(op>.3){ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,21,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,11,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+8,ey-4,7,0,7);ctx.arc(ex+(o.px||0)-6,ey+10,3,0,7);ctx.fill()}const by=-552-(o.brow||0)*10;ctx.strokeStyle=P.hair;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(ex-22,by+4+(o.brow||0)*sx*-6);ctx.quadraticCurveTo(ex,by-6,ex+22,by+4-(o.brow||0)*sx*-6);ctx.stroke()}ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,26,16,0,0,7);ctx.ellipse(78,-458,26,16,0,0,7);ctx.fill();ctx.strokeStyle='#c98a66';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-478);ctx.quadraticCurveTo(4,-466,-4,-462);ctx.stroke();const sm=o.smile||0;if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,14,14*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-26,-442);ctx.quadraticCurveTo(0,-436+sm*.6,26,-442);ctx.stroke()}ctx.restore()};ctx.fillStyle=lg(0,H,['#ee6a35','#c24e22','#5a2010']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,230,180,A)',.4);
  const z=lerp(1.2,1.0,easeOut(seg(u,0,.5)));CAM(W/2,H*.6,z,()=>{KID(W/2,H*1.0,1.6,{u});BOY(W/2,H*1.0,1.6,{smile:28,open:1.1})});
  const k=easeBack(seg(u,.3,.6));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);txtC('ERA UM MENINO! 😱',0,0,'900 100px Inter','#fff',20);ctx.restore();
  if(u<.2){ctx.fillStyle=`rgba(255,255,255,${.8*(1-u/.2)})`;ctx.fillRect(0,0,W,H)}});
// K4. "Era ele. Com sete anos de idade." — a foto antiga agora inteira: o mesmo menino, rosto dele (1548–1551.5)
scene(1548,1551.5,(t)=>{const u=t-1548;const KID=(x,y,s,o)=>{ctx.save();ctx.beginPath();ctx.rect(x-420*s,y-468*s,840*s,640*s);ctx.clip();e8Kid(x,y,s,o);ctx.restore()};const BOY=(x,y,s,o)=>{o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};ctx.fillStyle='#d99f12';ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#f4c430';ctx.beginPath();ctx.ellipse(0,-456,104,22,0,0,7);ctx.fill();const sk='#f6cfac';for(const sx of[-1,1]){ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(sx*132,-505,24,32,0,0,7);ctx.fill();OL(8)}ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(0,-515,138,132,0,0,7);ctx.fill();OL(10);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,50,34,-.4,0,7);ctx.fill();ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}const op=Math.max(.15,Math.min(1.2,o.open??1));for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,32,38*op,0,0,7);ctx.fill();OL(6);if(op>.3){ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,21,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,11,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+8,ey-4,7,0,7);ctx.arc(ex+(o.px||0)-6,ey+10,3,0,7);ctx.fill()}const by=-552-(o.brow||0)*10;ctx.strokeStyle=P.hair;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(ex-22,by+4+(o.brow||0)*sx*-6);ctx.quadraticCurveTo(ex,by-6,ex+22,by+4-(o.brow||0)*sx*-6);ctx.stroke()}ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,26,16,0,0,7);ctx.ellipse(78,-458,26,16,0,0,7);ctx.fill();ctx.strokeStyle='#c98a66';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-478);ctx.quadraticCurveTo(4,-466,-4,-462);ctx.stroke();const sm=o.smile||0;if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,14,14*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-26,-442);ctx.quadraticCurveTo(0,-436+sm*.6,26,-442);ctx.stroke()}ctx.restore()};ctx.fillStyle='#2b2018';ctx.fillRect(0,0,W,H);glow(W/2,H*.4,800,'rgba(255,220,170,A)',.35);
  CAM(W/2,H*.48,lerp(1.15,1.0,easeOut(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.47);ctx.rotate(-.05);softShadow(10,600,440,40,.5);ctx.fillStyle='#f3efe6';ctx.fillRect(-400,-520,800,1040);
    ctx.save();ctx.beginPath();ctx.rect(-350,-470,700,760);ctx.clip();ctx.fillStyle=lg(-470,290,['#9cc6e8','#cfe3f0']);ctx.fillRect(-350,-470,700,760);ctx.fillStyle='#7fb07f';ctx.fillRect(-350,120,700,170);KID(0,290,.95,{u:0});BOY(0,290,.95,{smile:24});
    ctx.fillStyle='rgba(200,160,90,.22)';ctx.fillRect(-350,-470,700,760);ctx.restore();ctx.fillStyle='#1f2f6b';ctx.font='700 70px Caveat';ctx.textAlign='center';ctx.fillText('Matheus, 7 anos',0,400);ctx.restore()});
  if(u>.8){const k=easeBack(seg(u,.8,1.1));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);txtC('ERA ELE!',0,0,'900 120px Inter','#ffd84a',20);ctx.restore()}letterIn(u)});
// K5. "Por isso tinha tanto medo: era o medo dele, pequeno." — o menino escondido no armário (lembrança), luz quente acolhendo (1552–1555.5)
scene(1552,1555.5,(t)=>{const u=t-1552;const KID=(x,y,s,o)=>{ctx.save();ctx.beginPath();ctx.rect(x-420*s,y-468*s,840*s,640*s);ctx.clip();e8Kid(x,y,s,o);ctx.restore()};const BOY=(x,y,s,o)=>{o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};ctx.fillStyle='#d99f12';ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#f4c430';ctx.beginPath();ctx.ellipse(0,-456,104,22,0,0,7);ctx.fill();const sk='#f6cfac';for(const sx of[-1,1]){ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(sx*132,-505,24,32,0,0,7);ctx.fill();OL(8)}ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(0,-515,138,132,0,0,7);ctx.fill();OL(10);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,50,34,-.4,0,7);ctx.fill();ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}const op=Math.max(.15,Math.min(1.2,o.open??1));for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,32,38*op,0,0,7);ctx.fill();OL(6);if(op>.3){ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,21,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,11,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+8,ey-4,7,0,7);ctx.arc(ex+(o.px||0)-6,ey+10,3,0,7);ctx.fill()}const by=-552-(o.brow||0)*10;ctx.strokeStyle=P.hair;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(ex-22,by+4+(o.brow||0)*sx*-6);ctx.quadraticCurveTo(ex,by-6,ex+22,by+4-(o.brow||0)*sx*-6);ctx.stroke()}ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,26,16,0,0,7);ctx.ellipse(78,-458,26,16,0,0,7);ctx.fill();ctx.strokeStyle='#c98a66';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-478);ctx.quadraticCurveTo(4,-466,-4,-462);ctx.stroke();const sm=o.smile||0;if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,14,14*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-26,-442);ctx.quadraticCurveTo(0,-436+sm*.6,26,-442);ctx.stroke()}ctx.restore()};CAM(W/2,1000,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{e7Wardrobe(u,.35,0);ctx.save();ctx.beginPath();ctx.rect(540,380,290,1140);ctx.clip();KID(690,1500,.7,{u,hide:1});BOY(690,1500,.7,{open:.4,brow:.6,smile:-10});ctx.restore();
    glow(690,1150,500,'rgba(255,200,120,A)',.35*seg(u,1,3));});
  txtC('O MEDO DELE, PEQUENO',W/2,300,'900 74px Inter','#ffd84a',16);letterIn(u)});

// ======== v2: o final para refletir ========
// R1. "A criança que ele foi. E o homem que ele vai ser." — os três, nascer do sol, o menino sem capuz (1556–1559.5)
scene(1556,1559.5,(t)=>{const u=t-1556;const KID=(x,y,s,o)=>{ctx.save();ctx.beginPath();ctx.rect(x-420*s,y-468*s,840*s,640*s);ctx.clip();e8Kid(x,y,s,o);ctx.restore()};const BOY=(x,y,s,o)=>{o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};ctx.fillStyle='#d99f12';ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#f4c430';ctx.beginPath();ctx.ellipse(0,-456,104,22,0,0,7);ctx.fill();const sk='#f6cfac';for(const sx of[-1,1]){ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(sx*132,-505,24,32,0,0,7);ctx.fill();OL(8)}ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(0,-515,138,132,0,0,7);ctx.fill();OL(10);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,50,34,-.4,0,7);ctx.fill();ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}const op=Math.max(.15,Math.min(1.2,o.open??1));for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,32,38*op,0,0,7);ctx.fill();OL(6);if(op>.3){ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,21,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,11,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+8,ey-4,7,0,7);ctx.arc(ex+(o.px||0)-6,ey+10,3,0,7);ctx.fill()}const by=-552-(o.brow||0)*10;ctx.strokeStyle=P.hair;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(ex-22,by+4+(o.brow||0)*sx*-6);ctx.quadraticCurveTo(ex,by-6,ex+22,by+4-(o.brow||0)*sx*-6);ctx.stroke()}ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,26,16,0,0,7);ctx.ellipse(78,-458,26,16,0,0,7);ctx.fill();ctx.strokeStyle='#c98a66';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-478);ctx.quadraticCurveTo(4,-466,-4,-462);ctx.stroke();const sm=o.smile||0;if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,14,14*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-26,-442);ctx.quadraticCurveTo(0,-436+sm*.6,26,-442);ctx.stroke()}ctx.restore()};sky('#f0a070','#ffd9a8','#cfe3f2');sun(W/2,1050,90,'#fff6dc','rgba(255,214,150,.9)');buildings(9,1500,300,800,'#8a7a9a','#ffe6a0',.2,100,1);beams(W/2,1050,Math.PI*1.5,9,1600,.08);
  ctx.fillStyle=lg(1500,H,['#5a4a5a','#3a2e3a']);ctx.fillRect(0,1500,W,H-1500);
  CAM(W/2,1500,lerp(1.0,1.06,seg(u,0,3.5)),()=>{const a=seg(u,.3,1.2);ctx.save();ctx.globalAlpha=a;KID(220,1760,.6,{u});BOY(220,1760,.6,{smile:20});ctx.restore();personFront(540,1580,1.5,{smile:16});ctx.save();ctx.globalAlpha=seg(u,1,1.9);e9Photog(860,1760,.85,{cam:0,smile:1,reveal:1});ctx.restore();});
  txtC('QUEM ELE FOI',220,1880,'900 46px Inter','#fff',10);if(u>1)txtC('QUEM ELE VAI SER',860,1880,'900 46px Inter','#fff',10);letterIn(u)});
// R2. "Os dois voltaram pra dizer uma coisa:" — o menino e o Matheus do futuro, olhando pra câmera (1560–1563.5)
scene(1560,1563.5,(t)=>{const u=t-1560;const KID=(x,y,s,o)=>{ctx.save();ctx.beginPath();ctx.rect(x-420*s,y-468*s,840*s,640*s);ctx.clip();e8Kid(x,y,s,o);ctx.restore()};const BOY=(x,y,s,o)=>{o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};ctx.fillStyle='#d99f12';ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#f4c430';ctx.beginPath();ctx.ellipse(0,-456,104,22,0,0,7);ctx.fill();const sk='#f6cfac';for(const sx of[-1,1]){ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(sx*132,-505,24,32,0,0,7);ctx.fill();OL(8)}ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(0,-515,138,132,0,0,7);ctx.fill();OL(10);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,50,34,-.4,0,7);ctx.fill();ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}const op=Math.max(.15,Math.min(1.2,o.open??1));for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,32,38*op,0,0,7);ctx.fill();OL(6);if(op>.3){ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,21,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,11,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+8,ey-4,7,0,7);ctx.arc(ex+(o.px||0)-6,ey+10,3,0,7);ctx.fill()}const by=-552-(o.brow||0)*10;ctx.strokeStyle=P.hair;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(ex-22,by+4+(o.brow||0)*sx*-6);ctx.quadraticCurveTo(ex,by-6,ex+22,by+4-(o.brow||0)*sx*-6);ctx.stroke()}ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,26,16,0,0,7);ctx.ellipse(78,-458,26,16,0,0,7);ctx.fill();ctx.strokeStyle='#c98a66';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-478);ctx.quadraticCurveTo(4,-466,-4,-462);ctx.stroke();const sm=o.smile||0;if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,14,14*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-26,-442);ctx.quadraticCurveTo(0,-436+sm*.6,26,-442);ctx.stroke()}ctx.restore()};ctx.fillStyle=lg(0,H,['#2a2240','#5a4a7a','#f0a070']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(255,220,170,A)',.35);
  CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{KID(290,1650,1.0,{u});BOY(290,1650,1.0,{smile:20});oldFace(790,H*.52,.5,{open:1,smile:22,hat:1,shadow:0});});letterIn(u)});
// R3. "Enquanto você lembrar de quem já foi..." — a foto do menino nas mãos dele, brilhando (1564–1567.5)
scene(1564,1567.5,(t)=>{const u=t-1564;const KID=(x,y,s,o)=>{ctx.save();ctx.beginPath();ctx.rect(x-420*s,y-468*s,840*s,640*s);ctx.clip();e8Kid(x,y,s,o);ctx.restore()};const BOY=(x,y,s,o)=>{o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};ctx.fillStyle='#d99f12';ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#f4c430';ctx.beginPath();ctx.ellipse(0,-456,104,22,0,0,7);ctx.fill();const sk='#f6cfac';for(const sx of[-1,1]){ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(sx*132,-505,24,32,0,0,7);ctx.fill();OL(8)}ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(0,-515,138,132,0,0,7);ctx.fill();OL(10);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,50,34,-.4,0,7);ctx.fill();ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}const op=Math.max(.15,Math.min(1.2,o.open??1));for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,32,38*op,0,0,7);ctx.fill();OL(6);if(op>.3){ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,21,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,11,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+8,ey-4,7,0,7);ctx.arc(ex+(o.px||0)-6,ey+10,3,0,7);ctx.fill()}const by=-552-(o.brow||0)*10;ctx.strokeStyle=P.hair;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(ex-22,by+4+(o.brow||0)*sx*-6);ctx.quadraticCurveTo(ex,by-6,ex+22,by+4-(o.brow||0)*sx*-6);ctx.stroke()}ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,26,16,0,0,7);ctx.ellipse(78,-458,26,16,0,0,7);ctx.fill();ctx.strokeStyle='#c98a66';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-478);ctx.quadraticCurveTo(4,-466,-4,-462);ctx.stroke();const sm=o.smile||0;if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,14,14*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-26,-442);ctx.quadraticCurveTo(0,-436+sm*.6,26,-442);ctx.stroke()}ctx.restore()};ctx.fillStyle='#1a1424';ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,220,170,A)',.45);
  CAM(W/2,H*.48,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.45);ctx.rotate(-.04);ctx.fillStyle='#f3efe6';ctx.fillRect(-300,-380,600,760);ctx.save();ctx.beginPath();ctx.rect(-260,-340,520,560);ctx.clip();ctx.fillStyle=lg(-340,220,['#9cc6e8','#cfe3f0']);ctx.fillRect(-260,-340,520,560);KID(0,220,.7,{u:0});BOY(0,220,.7,{smile:24});ctx.restore();ctx.fillStyle='#1f2f6b';ctx.font='700 56px Caveat';ctx.textAlign='center';ctx.fillText('quem eu já fui',0,320);ctx.restore();
    for(const sx of[-1,1]){ctx.fillStyle=P.skin;ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.ellipse(W/2+sx*320,H*.45+330,70,90,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle=P.hood;ctx.beginPath();rr(W/2+sx*320-80,H*.45+390,160,500,30);ctx.fill();ctx.stroke()}});
  dust(u,64,30,'rgba(255,235,190,A)');letterIn(u)});
// R4. "e acreditar em quem ainda vai ser..." — ele sobe uma estrada em direção ao sol (câmera parada, ele se afasta) (1568–1571.5)
scene(1568,1571.5,(t)=>{const u=t-1568;sky('#f0a070','#ffd9a8','#cfe3f2');sun(W/2,820,110,'#fff6dc','rgba(255,214,150,.95)');beams(W/2,820,Math.PI*1.5,11,1700,.09);
  ctx.fillStyle='#7a8a6a';ctx.fillRect(0,900,W,H-900);ctx.fillStyle='#b9a27a';ctx.beginPath();ctx.moveTo(W/2-30,900);ctx.lineTo(W/2+30,900);ctx.lineTo(W/2+420,H);ctx.lineTo(W/2-420,H);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,.6)';ctx.lineWidth=8;ctx.setLineDash([60,60]);ctx.lineDashOffset=0;ctx.beginPath();ctx.moveTo(W/2,900);ctx.lineTo(W/2,H);ctx.stroke();ctx.setLineDash([]);
  const k=easeIO(seg(u,0,3.5));ctx.save();ctx.filter='brightness(0.4)';personFront(W/2,lerp(1700,1180,k),lerp(1.6,.55,k),{back:true,walk:u*7});ctx.restore();
  txtC('QUEM VOCÊ AINDA VAI SER',W/2,300,'900 64px Inter','#fff',16)});
// R5. "você nunca vai estar sozinho." — na janela, a sombra dele com as duas sombras ao lado (o pequeno e o grande) (1572–1575.5)
scene(1572,1575.5,(t)=>{const u=t-1572;const KID=(x,y,s,o)=>{ctx.save();ctx.beginPath();ctx.rect(x-420*s,y-468*s,840*s,640*s);ctx.clip();e8Kid(x,y,s,o);ctx.restore()};const BOY=(x,y,s,o)=>{o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};ctx.fillStyle='#d99f12';ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#f4c430';ctx.beginPath();ctx.ellipse(0,-456,104,22,0,0,7);ctx.fill();const sk='#f6cfac';for(const sx of[-1,1]){ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(sx*132,-505,24,32,0,0,7);ctx.fill();OL(8)}ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(0,-515,138,132,0,0,7);ctx.fill();OL(10);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,50,34,-.4,0,7);ctx.fill();ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}const op=Math.max(.15,Math.min(1.2,o.open??1));for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,32,38*op,0,0,7);ctx.fill();OL(6);if(op>.3){ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,21,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,11,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+8,ey-4,7,0,7);ctx.arc(ex+(o.px||0)-6,ey+10,3,0,7);ctx.fill()}const by=-552-(o.brow||0)*10;ctx.strokeStyle=P.hair;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(ex-22,by+4+(o.brow||0)*sx*-6);ctx.quadraticCurveTo(ex,by-6,ex+22,by+4-(o.brow||0)*sx*-6);ctx.stroke()}ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,26,16,0,0,7);ctx.ellipse(78,-458,26,16,0,0,7);ctx.fill();ctx.strokeStyle='#c98a66';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-478);ctx.quadraticCurveTo(4,-466,-4,-462);ctx.stroke();const sm=o.smile||0;if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,14,14*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-26,-442);ctx.quadraticCurveTo(0,-436+sm*.6,26,-442);ctx.stroke()}ctx.restore()};sky('#f0a070','#ffd9a8','#cfe3f2');sun(W/2,900,90,'#fff6dc','rgba(255,214,150,.9)');buildings(9,1500,300,800,'#6a5a7a','#ffe6a0',.3,100,1);
  ctx.fillStyle=lg(1500,H,['#5a4a5a','#3a2e3a']);ctx.fillRect(0,1500,W,H-1500);
  ctx.save();ctx.filter='brightness(0.2)';personFront(540,1620,1.6,{back:true});ctx.restore();
  const a=.35*seg(u,.6,2);ctx.save();ctx.globalAlpha=a;ctx.filter='brightness(0.2)';e8Kid(250,1780,.6,{u,back:1,hoodDown:1});e9Photog(830,1800,.8,{back:1});ctx.restore();
  // mãos dadas (sombras)
  ctx.save();ctx.globalAlpha=a*2;ctx.strokeStyle='rgba(20,15,20,.9)';ctx.lineWidth=22;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(330,1560);ctx.lineTo(470,1520);ctx.moveTo(610,1520);ctx.lineTo(760,1480);ctx.stroke();ctx.restore();
  e6Cat(900,1880,.5,u);txtC('NUNCA SOZINHO',W/2,300,'900 96px Inter','#fff',18)});
// R6. "E você? O que o seu eu criança diria de você hoje?" — cartão em giz de cera, o menino acenando (1576–1580)
scene(1576,1580,(t)=>{const u=t-1576;const KID=(x,y,s,o)=>{ctx.save();ctx.beginPath();ctx.rect(x-420*s,y-468*s,840*s,640*s);ctx.clip();e8Kid(x,y,s,o);ctx.restore()};const BOY=(x,y,s,o)=>{o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};ctx.fillStyle='#d99f12';ctx.beginPath();ctx.ellipse(0,-448,138,40,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#f4c430';ctx.beginPath();ctx.ellipse(0,-456,104,22,0,0,7);ctx.fill();const sk='#f6cfac';for(const sx of[-1,1]){ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(sx*132,-505,24,32,0,0,7);ctx.fill();OL(8)}ctx.fillStyle=sk;ctx.beginPath();ctx.ellipse(0,-515,138,132,0,0,7);ctx.fill();OL(10);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.ellipse(-60,-570,50,34,-.4,0,7);ctx.fill();ctx.fillStyle=P.hair;ctx.beginPath();ctx.moveTo(-140,-498);ctx.quadraticCurveTo(-152,-652,0,-664);ctx.quadraticCurveTo(152,-652,140,-498);ctx.quadraticCurveTo(128,-556,92,-574);ctx.quadraticCurveTo(62,-556,32,-576);ctx.quadraticCurveTo(0,-560,-30,-578);ctx.quadraticCurveTo(-62,-556,-92,-574);ctx.quadraticCurveTo(-128,-556,-140,-498);ctx.closePath();if(P.hair!=='rgba(0,0,0,0)'){ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();ctx.strokeStyle=P.hairL;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-80,-628);ctx.quadraticCurveTo(-10,-654,70,-632);ctx.stroke();}const op=Math.max(.15,Math.min(1.2,o.open??1));for(const sx of[-1,1]){const ex=sx*50,ey=-498;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ex,ey,32,38*op,0,0,7);ctx.fill();OL(6);if(op>.3){ctx.fillStyle='#5a3423';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,21,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+4,11,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+8,ey-4,7,0,7);ctx.arc(ex+(o.px||0)-6,ey+10,3,0,7);ctx.fill()}const by=-552-(o.brow||0)*10;ctx.strokeStyle=P.hair;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(ex-22,by+4+(o.brow||0)*sx*-6);ctx.quadraticCurveTo(ex,by-6,ex+22,by+4-(o.brow||0)*sx*-6);ctx.stroke()}ctx.fillStyle='rgba(240,120,110,.4)';ctx.beginPath();ctx.ellipse(-78,-458,26,16,0,0,7);ctx.ellipse(78,-458,26,16,0,0,7);ctx.fill();ctx.strokeStyle='#c98a66';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-6,-478);ctx.quadraticCurveTo(4,-466,-4,-462);ctx.stroke();const sm=o.smile||0;if(o.mouthO){ctx.fillStyle='#8a3a30';ctx.beginPath();ctx.ellipse(0,-438,14,14*o.mouthO,0,0,7);ctx.fill()}else{ctx.strokeStyle='#9a5a44';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-26,-442);ctx.quadraticCurveTo(0,-436+sm*.6,26,-442);ctx.stroke()}ctx.restore()};ctx.fillStyle='#f3ecda';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(80,110,170,.18)';for(let y=200;y<H;y+=80)ctx.fillRect(60,y,W-120,3);
  ctx.lineCap='round';ctx.strokeStyle='#4f7fd0';ctx.lineWidth=12;for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(80,120+i*16);ctx.lineTo(1000,110+i*14);ctx.stroke()}ctx.strokeStyle='#e8a81e';ctx.beginPath();ctx.arc(930,230,60,0,7);ctx.stroke();
  const k=seg(u,.2,2);ctx.fillStyle='#d23b3b';ctx.font='700 104px Caveat';ctx.textAlign='center';const L=['E você?','O que o seu','eu criança diria','de você hoje?'];const tot=L.join('').length;let n=Math.floor(k*tot);L.forEach((l,i)=>{const sh=l.slice(0,Math.max(0,n));n-=l.length;ctx.fillText(sh,W/2,460+i*130)});
  KID(W/2,1820,.9,{u,wave:1});{const w=Math.sin(u*9);const hx=265+w*40,hy=-700;ctx.save();ctx.translate(W/2,1820);ctx.scale(.9,.9);ctx.lineCap='round';ctx.strokeStyle=OUT;ctx.lineWidth=46;ctx.beginPath();ctx.moveTo(100,-430);ctx.quadraticCurveTo(250,-470,hx,hy);ctx.stroke();ctx.strokeStyle='#f4c430';ctx.lineWidth=36;ctx.stroke();ctx.fillStyle='#f6cfac';ctx.beginPath();ctx.ellipse(hx,hy-12,22,26,0,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.stroke();ctx.restore()}BOY(W/2,1820,.9,{smile:26});
  txtC('comenta 👇',W/2,1120,'800 64px Inter','#1f2f6b')});

// ======== v5: rostos escondidos até a revelação, versões de costas, placar de comentários ========
// guarda as versões de frente da v4 (são substituídas abaixo por versões que aceitam {back, walk, reveal})
function e8Kid(x,y,s,o){o=o||{};
  if(o.back){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};
    const Y='#f4c430',YS='#d99f12',YL='#ffe27a',SK='#f6cfac';const p=o.walk;let lL=0,lR=0,bob=0;if(p!=null){lL=34*Math.max(0,Math.sin(p));lR=34*Math.max(0,Math.sin(p+Math.PI));bob=-8*Math.abs(Math.cos(p))}
    {const g=ctx.createRadialGradient(0,8,5,0,8,140);g.addColorStop(0,'rgba(0,0,0,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(0,8,140,24,0,0,7);ctx.fill()}
    ctx.translate(0,bob);
    for(const [sx,l] of [[-1,lL],[1,lR]]){ctx.strokeStyle=OUT;ctx.lineWidth=52;ctx.beginPath();ctx.moveTo(sx*40,-170);ctx.lineTo(sx*42,-40-l);ctx.stroke();ctx.strokeStyle=sx<0?'#2f4a73':'#3a5a8a';ctx.lineWidth=40;ctx.stroke();
      ctx.fillStyle='#d23b2e';ctx.beginPath();ctx.ellipse(sx*42,-24-l,38,24,0,0,7);ctx.fill();OL(8);ctx.fillStyle='#fff';ctx.fillRect(sx*42-30,-14-l,60,7)}
    const tp=()=>{ctx.beginPath();ctx.moveTo(-96,-470);ctx.quadraticCurveTo(-150,-330,-140,-150);ctx.quadraticCurveTo(0,-128,140,-150);ctx.quadraticCurveTo(150,-330,96,-470);ctx.quadraticCurveTo(0,-490,-96,-470);ctx.closePath()};
    tp();ctx.fillStyle=Y;ctx.fill();ctx.save();tp();ctx.clip();{const g=ctx.createLinearGradient(-140,0,140,0);g.addColorStop(0,'rgba(160,100,10,.35)');g.addColorStop(.5,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(160,100,10,.35)');ctx.fillStyle=g;ctx.fillRect(-160,-500,320,380)}ctx.fillStyle=YS;ctx.fillRect(-160,-176,320,30);ctx.restore();tp();OL(9);
    ctx.strokeStyle=YS;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(0,-430);ctx.lineTo(0,-160);ctx.stroke();
    const sw=p!=null?Math.sin(p)*14:0;for(const sx of[-1,1]){ctx.strokeStyle=OUT;ctx.lineWidth=46;ctx.beginPath();ctx.moveTo(sx*92,-440);ctx.lineTo(sx*124,-250+sx*sw);ctx.stroke();ctx.strokeStyle=YS;ctx.lineWidth=36;ctx.stroke();ctx.fillStyle=SK;ctx.beginPath();ctx.ellipse(sx*124,-242+sx*sw,20,22,0,0,7);ctx.fill();OL(6)}
    if(o.hoodDown){ctx.fillStyle=YS;ctx.beginPath();ctx.ellipse(0,-448,150,46,0,0,7);ctx.fill();OL(8);for(const sx of[-1,1]){ctx.fillStyle=SK;ctx.beginPath();ctx.ellipse(sx*132,-505,22,30,0,0,7);ctx.fill();OL(7)}
      ctx.fillStyle=P.hair;ctx.beginPath();ctx.ellipse(0,-530,138,140,0,0,7);ctx.fill();OL(9);ctx.strokeStyle=P.hairL;ctx.lineWidth=10;ctx.beginPath();ctx.arc(-10,-560,80,-2.6,-1.4);ctx.stroke()}
    else{ctx.fillStyle=Y;ctx.beginPath();ctx.ellipse(0,-525,172,168,0,0,7);ctx.fill();OL(9);ctx.strokeStyle=YS;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(0,-690);ctx.quadraticCurveTo(-10,-560,0,-420);ctx.stroke();ctx.strokeStyle=YL;ctx.lineWidth=10;ctx.beginPath();ctx.arc(-30,-560,110,-2.6,-1.8);ctx.stroke()}
    ctx.restore();return}
  // de frente: antes da revelação (reveal!=1) o capuz fica justo e o cabelo não aparece
  if(o.reveal||o.hoodDown){_kidFront4(x,y,s,o);return}
  const ph=P.hair;P.hair='rgba(0,0,0,0)';try{_kidFront4(x,y,s,o)}finally{P.hair=ph}
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.beginPath();ctx.ellipse(0,-522,176,172,0,0,7);ctx.ellipse(0,-492,108,104,0,0,7);ctx.fillStyle='#f4c430';ctx.fill('evenodd');ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.ellipse(0,-522,176,172,0,0,7);ctx.stroke();ctx.lineWidth=7;ctx.beginPath();ctx.ellipse(0,-492,108,104,0,0,7);ctx.stroke();ctx.strokeStyle='#d99f12';ctx.lineWidth=12;ctx.beginPath();ctx.ellipse(0,-492,124,120,0,Math.PI*1.1,Math.PI*1.9);ctx.stroke();ctx.restore()}
function e9Photog(x,y,s,o){o=o||{};s*=0.74;
  if(o.back){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';const OL=w=>{ctx.strokeStyle=OUT;ctx.lineWidth=w;ctx.stroke()};
    const C='#5f6a4a',CS='#47503a';const p=o.walk;let lL=0,lR=0,bob=0;if(p!=null){lL=30*Math.max(0,Math.sin(p));lR=30*Math.max(0,Math.sin(p+Math.PI));bob=-10*Math.abs(Math.cos(p))}
    {const g=ctx.createRadialGradient(0,6,5,0,6,170);g.addColorStop(0,'rgba(0,0,0,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(0,6,170,26,0,0,7);ctx.fill()}
    ctx.translate(0,bob);
    for(const [sx,l] of [[-1,lL],[1,lR]]){ctx.strokeStyle=OUT;ctx.lineWidth=62;ctx.beginPath();ctx.moveTo(sx*42,-300);ctx.lineTo(sx*44,-40-l);ctx.stroke();ctx.strokeStyle='#2a2930';ctx.lineWidth=50;ctx.stroke();ctx.fillStyle='#4a3020';ctx.beginPath();ctx.ellipse(sx*46,-22-l,40,24,0,0,7);ctx.fill();OL(7)}
    const tp=()=>{ctx.beginPath();ctx.moveTo(-104,-700);ctx.quadraticCurveTo(-150,-480,-128,-250);ctx.quadraticCurveTo(0,-232,128,-250);ctx.quadraticCurveTo(150,-480,104,-700);ctx.quadraticCurveTo(0,-724,-104,-700);ctx.closePath()};
    tp();ctx.fillStyle=C;ctx.fill();ctx.save();tp();ctx.clip();{const g=ctx.createLinearGradient(-140,0,140,0);g.addColorStop(0,'rgba(20,30,10,.35)');g.addColorStop(.5,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(20,30,10,.35)');ctx.fillStyle=g;ctx.fillRect(-160,-730,320,500)}ctx.fillStyle=CS;ctx.fillRect(-150,-280,300,30);ctx.restore();tp();OL(8);
    ctx.strokeStyle=CS;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(0,-640);ctx.lineTo(0,-260);ctx.moveTo(-50,-420);ctx.lineTo(50,-420);ctx.stroke();
    const sw=p!=null?Math.sin(p)*16:0;for(const sx of[-1,1]){ctx.strokeStyle=OUT;ctx.lineWidth=52;ctx.beginPath();ctx.moveTo(sx*100,-670);ctx.lineTo(sx*120,-430+sx*sw);ctx.stroke();ctx.strokeStyle=CS;ctx.lineWidth=40;ctx.stroke();ctx.fillStyle='#e6ae86';ctx.beginPath();ctx.ellipse(sx*120,-420+sx*sw,24,28,0,0,7);ctx.fill();OL(6)}
    ctx.strokeStyle='#1a1a1e';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-64,-724);ctx.lineTo(60,-520);ctx.stroke();
    ctx.fillStyle='#8a3a3a';ctx.beginPath();rr(-74,-748,148,52,22);ctx.fill();OL(7);
    ctx.save();ctx.translate(0,-735);ctx.scale(1.5,1.5);ctx.translate(0,735);ctx.fillStyle='#c98d66';ctx.fillRect(-22,-790,44,50);for(const sx of[-1,1]){ctx.fillStyle='#e6ae86';ctx.beginPath();ctx.ellipse(sx*66,-846,14,20,0,0,7);ctx.fill();OL(5)}
    ctx.fillStyle='#8e8e96';ctx.beginPath();ctx.ellipse(0,-850,68,74,0,0,7);ctx.fill();OL(7);ctx.strokeStyle='#b6b6be';ctx.lineWidth=6;ctx.beginPath();ctx.arc(0,-850,44,-2.4,-1.2);ctx.stroke();
    ctx.fillStyle='#3a3428';ctx.beginPath();ctx.ellipse(0,-912,124,26,0,0,7);ctx.fill();OL(7);ctx.beginPath();ctx.moveTo(-70,-916);ctx.quadraticCurveTo(-76,-1000,0,-1004);ctx.quadraticCurveTo(76,-1000,70,-916);ctx.closePath();ctx.fill();OL(7);ctx.fillStyle='#8a3a3a';ctx.fillRect(-70,-940,140,18);
    ctx.restore();ctx.restore();return}
  _photogFront4(x,y,s,o);
  // antes de tirar o chapéu: o rosto fica na sombra da aba (só o brilho dos óculos)
  if(!o.reveal&&!((o.cam??0)>=.5)){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.translate(0,-735);ctx.scale(1.5,1.5);ctx.translate(0,735);const sh=ctx.createLinearGradient(0,-905,0,-830);sh.addColorStop(0,'rgba(25,18,20,.55)');sh.addColorStop(1,'rgba(25,18,20,0)');ctx.fillStyle=sh;ctx.beginPath();ctx.ellipse(0,-860,74,52,0,0,7);ctx.fill();ctx.fillStyle='#8a3a3a';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-72,-824);ctx.quadraticCurveTo(0,-840,72,-824);ctx.quadraticCurveTo(82,-786,76,-750);ctx.quadraticCurveTo(0,-736,-76,-750);ctx.quadraticCurveTo(-82,-786,-72,-824);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='rgba(0,0,0,.18)';ctx.beginPath();ctx.moveTo(30,-830);ctx.quadraticCurveTo(82,-786,76,-750);ctx.lineTo(40,-746);ctx.quadraticCurveTo(50,-786,30,-830);ctx.fill();ctx.strokeStyle='#6a2a2a';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-66,-800);ctx.quadraticCurveTo(0,-812,66,-800);ctx.moveTo(-76,-776);ctx.quadraticCurveTo(0,-788,76,-776);ctx.stroke();
    ctx.fillStyle='#3a3428';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.ellipse(0,-912,124,26,0,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(-70,-916);ctx.quadraticCurveTo(-76,-1000,0,-1004);ctx.quadraticCurveTo(76,-1000,70,-916);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#8a3a3a';ctx.fillRect(-70,-940,140,18);ctx.restore()}}
// placar: comentários de TODAS as redes entrando até passar de 9999 → VENCEU A
function placar(u,winA){ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(90,140,255,A)',.25);
  txtC('PLACAR DO EP. 9',W/2,300,'900 86px Inter','#fff',16);txtC('somando todas as redes',W/2,390,'700 46px Inter','#bcd',0);
  const NET=[['TikTok','#111','#25f4ee'],['Instagram','#c13584','#fff'],['YouTube','#e62117','#fff']];const TX=['A','AAAA','A!!','A 🔥','B','A','ouvir! A','AAA','A A A','b','A 👀','A'];
  ctx.save();ctx.beginPath();ctx.rect(0,460,W,860);ctx.clip();
  const n=Math.floor(u*6);for(let i=0;i<n;i++){const r=rng(i+900);const t0=i/6;const age=u-t0;const y=1300-age*560;if(y<420)continue;const side=i%2===0;const nt=NET[i%3];const txt=TX[Math.floor(r()*TX.length)];
    ctx.save();ctx.globalAlpha=Math.min(1,age*4);ctx.translate(side?70:590,y);ctx.fillStyle='rgba(255,255,255,.95)';rr(0,-46,420,92,30);ctx.fill();
    ctx.fillStyle=nt[1];ctx.beginPath();ctx.arc(46,0,30,0,7);ctx.fill();ctx.fillStyle=nt[2];ctx.font='900 28px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nt[0][0],46,2);
    ctx.textAlign='left';ctx.fillStyle='#777';ctx.font='700 24px Inter';ctx.fillText(nt[0],90,-16);ctx.fillStyle=txt.toUpperCase().startsWith('B')?'#c33':'#1a8a4a';ctx.font='900 40px Inter';ctx.fillText(txt,90,22);ctx.restore()}
  ctx.restore();
  const c=Math.floor(Math.pow(clamp(u/2.9),2.2)*9999);const k=easeBack(seg(u,.1,.4));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-470,-90,940,180,36);ctx.fill();txtC(c>=9999?'+9999 COMENTÁRIOS':'💬 '+c.toLocaleString('pt-BR')+' comentários',0,0,'900 66px Oswald','#16161c');ctx.restore();
  if(winA){const k2=easeBack(clamp(winA));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(k2,k2);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(-W,-H,W*2,H*2);ctx.fillStyle='rgba(30,150,80,.97)';rr(-470,-150,940,300,46);ctx.fill();txtC('VENCEU A',0,-50,'900 110px Inter','#fff');txtC('OUVIR O FOTÓGRAFO',0,60,'900 64px Inter','#fff');ctx.restore()}}
// os três ANDANDO DE COSTAS até o prédio dele, de madrugada (câmera parada; eles se afastam)
function walkAway(u){sky('#1b1f45','#4a3a6a','#c0806a');sun(W/2,980,50,'rgba(255,220,180,.8)','rgba(255,180,120,.35)');
  ctx.fillStyle='#1a1c30';ctx.fillRect(0,0,180,1150);ctx.fillRect(900,0,180,1150);ctx.fillStyle='#22243a';ctx.beginPath();ctx.moveTo(180,0);ctx.lineTo(420,700);ctx.lineTo(420,1000);ctx.lineTo(180,1150);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(900,0);ctx.lineTo(660,700);ctx.lineTo(660,1000);ctx.lineTo(900,1150);ctx.closePath();ctx.fill();
  for(let i=0;i<5;i++){const yy=300+i*150;ctx.fillStyle=i%2?'rgba(255,210,120,.7)':'rgba(255,255,255,.08)';ctx.fillRect(220+i*30,yy,40,50);ctx.fillRect(820-i*30,yy,40,50)}
  // o prédio dele lá no fundo, com a janela do quarto
  ctx.fillStyle='#2a2c48';ctx.fillRect(440,640,200,380);ctx.fillStyle='#ffd27a';ctx.fillRect(520,760,40,44);ctx.fillStyle='#3a3c58';ctx.fillRect(500,940,80,80);
  ctx.fillStyle='#3a3a4a';ctx.beginPath();ctx.moveTo(420,1000);ctx.lineTo(660,1000);ctx.lineTo(W,H);ctx.lineTo(0,H);ctx.closePath();ctx.fill();ctx.fillStyle='#4a4a5c';ctx.beginPath();ctx.moveTo(500,1000);ctx.lineTo(580,1000);ctx.lineTo(760,H);ctx.lineTo(320,H);ctx.closePath();ctx.fill();
  for(let i=0;i<3;i++){const z=((i/3+u*.05)%1);const yy=lerp(1000,H,z*z),ww=lerp(4,40,z*z);ctx.fillStyle='rgba(255,255,255,.5)';ctx.fillRect(W/2-ww/2,yy,ww,lerp(10,90,z*z))}
  const k=easeIO(seg(u,0,3.6));const sc=lerp(1,.55,k),yb=lerp(1880,1360,k);
  ctx.save();ctx.translate(W/2,yb);ctx.scale(sc,sc);ctx.translate(-W/2,-yb);
  e8Kid(W/2-230,yb,.5,{back:1,walk:u*8});personFront(W/2,yb-140*1.3,1.3,{back:true,walk:u*7.4});e9Photog(W/2+240,yb,.76,{back:1,walk:u*7.2});ctx.restore();
  grade('rgba(255,150,100,.25)','rgba(40,60,160,.2)')}

// ======== v6: abertura com suspense, o medo do pequeno, a reviravolta da câmera ========
// C0. ABERTURA (flash-forward): a luz do armário e os três de costas — "Daqui a um minuto, uma porta vai se abrir..." (1600–1603.5)
scene(1600,1603.5,(t)=>{const u=t-1600;const k=.6+.4*Math.sin(u*3);CAM(W/2,1000,lerp(1.25,1.05,easeOut(seg(u,0,3.5))),()=>{e7Wardrobe(u,.9,0);portal(540,950,1.3*k,u);beams(540,950,Math.PI*1.5,9,1300,.12*k);
  ctx.save();ctx.filter='brightness(0.15)';e8Kid(330,1800,.5,{u,back:1,hoodDown:1});personFront(560,1640,1.4,{back:true});e9Photog(800,1810,.78,{back:1});ctx.restore();});
  dust(u,90,50,'rgba(255,240,200,A)');ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,110,W,320);hookTitle('DIA 60. TUDO|TERMINA HOJE 😳',seg(u,0,.35),230);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.85*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}});
SHAKE.push(1600.02);
// C1. "...e um segredo de sessenta dias vai ser revelado." — efeito de fita voltando: folhas do calendário voando ao contrário (1604–1607.5)
scene(1604,1607.5,(t)=>{const u=t-1604;ctx.fillStyle='#0d0a14';ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,90,90,A)',.3);
  for(let i=0;i<22;i++){const r=rng(i+700);const ph=(u*.9+r())%1;const x=W/2+(r()-.5)*900*ph,y=H*.45-(r()-.2)*1400*ph;ctx.save();ctx.translate(x,y);ctx.rotate(r()*6+u*3);ctx.globalAlpha=1-ph;ctx.fillStyle='#fffdf6';ctx.fillRect(-90,-110,180,220);ctx.fillStyle='#d23b3b';ctx.fillRect(-90,-110,180,46);txtC(String(60-Math.floor(ph*59+i)%60),0,30,'900 90px Oswald','#333');ctx.restore()}
  // linhas de fita VHS
  ctx.save();ctx.globalAlpha=.35;for(let i=0;i<6;i++){const y=((u*900+i*330)%H);ctx.fillStyle='rgba(255,255,255,.6)';ctx.fillRect(0,y,W,6)}ctx.restore();
  txtC('◀◀ 60 DIAS',W/2,H*.82,'900 110px Oswald','#ff5a5a',18)});
// T1. o pequeno trava na frente da luz: tem medo de voltar (1608–1611.5)
scene(1608,1611.5,(t)=>{const u=t-1608;ctx.fillStyle='#1a1424';ctx.fillRect(0,0,W,H);portal(540,640,.85+.1*Math.sin(u*9),u,'255,220,120');
  const back=easeOut(seg(u,.3,1.2))*60;CAM(W/2,H*.62,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>e8Kid(W/2,1820+back*.2,1.05,{u,hoodDown:1,brow:.8,smile:-12,tremble:1,py:-4}));
  txtC('ELE TEM MEDO...',W/2,300,'900 90px Inter','#fff',18)});
// T2. "Faltam trinta segundos!" — contagem vermelha, a luz piscando e diminuindo (1612–1615.5)
scene(1612,1615.5,(t)=>{const u=t-1612;ctx.fillStyle='#14080c';ctx.fillRect(0,0,W,H);const fl=Math.sin(u*22)>.6?.5:1;portal(540,900,.7*fl,u,'255,200,140');
  const s=30-Math.floor(u*1.2);const k=easeBack(seg(u,0,.3));ctx.save();ctx.translate(W/2,H*.45);ctx.scale(k,k);txtC('00:'+String(s).padStart(2,'0'),0,0,'900 300px Oswald','#ff3b3b',22);ctx.restore();
  glow(W/2,H*.45,700,'rgba(255,40,40,A)',.25+.15*Math.sin(u*10));txtC('A PASSAGEM ESTÁ FECHANDO',W/2,H*.68,'900 64px Inter','#fff',14)});
SHAKE.push(1612.05);
// T3. Matheus se ajoelha na frente dele: olho no olho, os dois rostos de perfil-ish, luz quente entre eles (1616–1619.5)
scene(1616,1619.5,(t)=>{const u=t-1616;ctx.fillStyle=lg(0,H,['#2a1c2c','#4a2e3a','#1a1018']);ctx.fillRect(0,0,W,H);glow(W/2,H*.42,600,'rgba(255,210,140,A)',.55);
  CAM(W/2,H*.5,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{face(780,H*.47,.6,{open:1,px:-30,smile:10});e8Kid(300,H*.47+515*1.33,1.33,{u,hoodDown:1,px:12,brow:.4,smile:-4})});
  dust(u,93,30,'rgba(255,230,180,A)')});
// T4. "Ei... eu sou você, lembra? Eu cresci." — o rosto dele, sorrindo, olhos marejados (1620–1623.5)
scene(1620,1623.5,(t)=>{const u=t-1620;ctx.fillStyle=lg(0,H,['#ee8a45','#c25e2a','#5a2a10']);ctx.fillRect(0,0,W,H);glow(W*.35,H*.3,800,'rgba(255,230,180,A)',.45);
  CAM(W/2,H*.5,lerp(1.1,1.0,easeOut(seg(u,0,3.5))),()=>{face(W/2,H*.5,.95,{open:1,smile:18,brow:.3,px:-10});ctx.fillStyle='rgba(200,235,255,.85)';for(const sx of[-1,1]){ctx.beginPath();ctx.ellipse(W/2+sx*115*.95-10,H*.5+30,10,6,0,0,7);ctx.fill()}});
  dust(u,94,26,'rgba(255,240,210,A)')});
// T5. "E deu tudo certo. Pode ir." — o pequeno sorri e balança a cabeça, a luz cresce atrás dele (1624–1627.5)
scene(1624,1627.5,(t)=>{const u=t-1624;ctx.fillStyle='#2a2040';ctx.fillRect(0,0,W,H);portal(540,560,.6+.4*seg(u,.5,2.5),u,'255,220,120');
  const nod=Math.sin(seg(u,.8,2)*Math.PI*3)*10;CAM(W/2,H*.6,lerp(1.05,1.0,seg(u,0,3.5)),()=>e8Kid(W/2,1840+nod,1.15,{u,hoodDown:1,smile:lerp(0,30,seg(u,.4,1.2)),open:1.05}));
  const k=easeBack(seg(u,1.2,1.5));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);txtC('DEU TUDO CERTO 💛',0,0,'900 90px Inter','#fff',18);ctx.restore()});
// T6. "Faltam cinco segundos!" (1628–1631.5)
scene(1628,1631.5,(t)=>{const u=t-1628;ctx.fillStyle='#14080c';ctx.fillRect(0,0,W,H);portal(540,900,.5+.2*Math.sin(u*30),u,'255,200,140');
  const s=Math.max(1,5-Math.floor(u*1.3));const k=easeBack(seg((u*1.3)%1,0,.25));ctx.save();ctx.translate(W/2,H*.45);ctx.scale(.8+.2*k,.8+.2*k);txtC('00:0'+s,0,0,'900 320px Oswald','#ff3b3b',22);ctx.restore();
  ctx.fillStyle=`rgba(255,0,0,${.12+.1*Math.sin(u*14)})`;ctx.fillRect(0,0,W,H)});
SHAKE.push(1628.05,1629.05,1630.05);
// E1. ao lado da foto, a câmera do fotógrafo (mesa, luz da manhã) (1632–1635.5)
function deskCam(u,z,note){ctx.fillStyle='#5a3a26';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(255,255,255,.04)';for(let y=0;y<H;y+=46)ctx.fillRect(0,y,W,3);glow(W*.75,H*.15,1000,'rgba(255,220,170,A)',.45);beams(W*.85,0,2.1,6,1800,.07);
  CAM(W/2,H*.5,z,()=>{ctx.save();ctx.translate(320,700);ctx.rotate(-.08);softShadow(10,330,260,30,.45);ctx.fillStyle='#f3efe6';ctx.fillRect(-230,-290,460,560);ctx.fillStyle=lg(-260,190,['#7fb2e6','#ffd9a8']);ctx.fillRect(-200,-260,400,430);ctx.restore();
    if(note){ctx.save();ctx.translate(640,1360);ctx.rotate(.06);softShadow(0,170,250,24,.35);ctx.fillStyle='#f3ecda';ctx.fillRect(-250,-150,500,300);ctx.fillStyle='#1f2f6b';ctx.font='600 54px Caveat';ctx.fillText('Agora é a sua vez',-210,-60);ctx.fillText('de cuidar de',-210,0);ctx.fillText('quem você foi.',-210,60);ctx.fillStyle='#8a2a2a';ctx.fillText('— M.',100,120);ctx.restore()}
    ctx.save();ctx.translate(680,1080);softShadow(0,170,300,34,.5);ctx.fillStyle='#2a2b31';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-260,-160,520,320,40);ctx.fill();ctx.stroke();ctx.fillStyle='#3a3b44';ctx.beginPath();rr(-180,-220,190,70,16);ctx.fill();ctx.stroke();
    ctx.fillStyle='#16171c';ctx.beginPath();ctx.arc(0,0,120,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#4a6a8a';ctx.beginPath();ctx.arc(0,0,74,0,7);ctx.fill();ctx.fillStyle='rgba(255,255,255,.5)';ctx.beginPath();ctx.arc(-24,-24,22,0,7);ctx.fill();ctx.fillStyle='#e0e0e6';ctx.fillRect(150,-130,80,40);
    ctx.strokeStyle='#1a1a1e';ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(-260,-60);ctx.quadraticCurveTo(-420,200,-200,330);ctx.stroke();ctx.restore();
    glow(680,1080,300,'rgba(255,240,200,A)',.2+.15*Math.sin(u*3))})}
scene(1632,1635.5,(t)=>{const u=t-1632;deskCam(u,lerp(1.1,1.0,easeOut(seg(u,0,3.5))),false);const k=easeBack(seg(u,.6,.9));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);txtC('A CÂMERA DELE?! 📷',0,0,'900 90px Inter','#ffd84a',18);ctx.restore()});
// E2. "Com um bilhete." — o bilhete aparece embaixo da câmera (1636–1639.5)
scene(1636,1639.5,(t)=>{const u=t-1636;deskCam(u,lerp(1.0,1.15,easeIO(seg(u,0,3.5))),true)});
// E3. [carta] o bilhete de perto (1640–1643.5)
scene(1640,1643.5,(t)=>{const u=t-1640;ctx.fillStyle='#18120c';ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,220,170,A)',.45);
  CAM(W/2,H*.5,lerp(1.05,1.15,easeIO(seg(u,0,3.5))),()=>letter(W/2,H*.5,1.0,['Agora é a sua vez','de cuidar de','quem você foi.'],seg(u,.1,2.6),seg(u,2.6,3.2)));dust(u,95,30,'rgba(255,235,190,A)')});
// E4. "Um dia, o fotógrafo vai ser ele." — ele pega a câmera; a SOMBRA dele na parede vira a silhueta de chapéu e casaco comprido (1644–1648)
scene(1644,1648,(t)=>{const u=t-1644;ctx.fillStyle=lg(0,H,['#f0d6b0','#d8b88c','#a8845c']);ctx.fillRect(0,0,W,H);beams(W*.15,200,.6,7,1800,.1);glow(W*.1,H*.15,900,'rgba(255,230,180,A)',.5);
  const k=easeIO(seg(u,.8,2.6));
  // sombra na parede: começa como ele e vira o fotógrafo
  ctx.save();ctx.globalAlpha=.55;ctx.filter='brightness(0)';ctx.translate(140,-40);ctx.globalAlpha=.4*(1-k);personFront(640,1280,1.9,{});ctx.globalAlpha=.4*k;e9Photog(640,1560,1.25,{cam:1});ctx.restore();
  ctx.fillStyle=lg(1500,H,['#a7845f','#7d5f42']);ctx.fillRect(0,1500,W,H-1500);
  personFront(420,1420,1.5,{smile:14,look:.3});ctx.save();ctx.translate(500,1240);ctx.fillStyle='#2a2b31';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.beginPath();rr(-60,-40,120,80,12);ctx.fill();ctx.stroke();ctx.fillStyle='#16171c';ctx.beginPath();ctx.arc(0,0,28,0,7);ctx.fill();ctx.stroke();ctx.restore();
  if(u>2.6){const q=easeBack(seg(u,2.6,2.9));ctx.save();ctx.translate(W/2,300);ctx.scale(q,q);txtC('O FOTÓGRAFO SERÁ ELE',0,0,'900 74px Inter','#fff',18);ctx.restore()}
  if(u>.8&&u<1.1){ctx.fillStyle=`rgba(255,255,255,${.5*(1-seg(u,.8,1.1))})`;ctx.fillRect(0,0,W,H)}});
SHAKE.push(1644.82);
