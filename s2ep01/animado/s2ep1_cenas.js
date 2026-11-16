// ===================== SÉRIE 2 · EP. 1 — NO CORPO DO CHEFE =====================
// "E se você acordasse na vida de outra pessoa?" Faixa 2000–2130 (cartão final 2096–2099.2).
// Novo: o seu Roberto (chefe) e a troca de corpos. Pista escondida: o relógio parado em 00:00 (no quarto do Matheus E na casa do chefe).
// Ambiente (não falado): o gato laranja de coleira azul na janela do escritório; pombos/folhas no trânsito.
// Visual "profissional": luz volumétrica, profundidade (fundo desfocado), câmera sempre em movimento, gradientes e sombras suaves.

// ---------- utilidades de acabamento ----------
const CAM=(cx,cy,z,fn)=>{ctx.save();ctx.translate(cx,cy);ctx.scale(z,z);ctx.translate(-cx,-cy);fn();ctx.restore()};
function glow(x,y,r,col,a){const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,col.replace('A',a));g.addColorStop(1,col.replace('A',0));ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);ctx.restore()}
function beams(x,y,ang,n,len,a){ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<n;i++){const aa=ang+(i-(n-1)/2)*.09;const g=ctx.createLinearGradient(x,y,x+Math.cos(aa)*len,y+Math.sin(aa)*len);g.addColorStop(0,`rgba(255,226,170,${a})`);g.addColorStop(1,'rgba(255,226,170,0)');ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+Math.cos(aa-.035)*len,y+Math.sin(aa-.035)*len);ctx.lineTo(x+Math.cos(aa+.035)*len,y+Math.sin(aa+.035)*len);ctx.closePath();ctx.fill()}ctx.restore()}
function dust(u,seed,n,col){const r=rng(seed);ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<n;i++){const x=(r()*W+u*(10+r()*20))%W,y=(r()*H-u*(8+r()*14)+H)%H,s=1.5+r()*3.5;ctx.fillStyle=col.replace('A',(.25+.25*Math.sin(u*2+i)).toFixed(2));ctx.beginPath();ctx.arc(x,y,s,0,7);ctx.fill()}ctx.restore()}
function softShadow(x,y,rx,ry,a){const g=ctx.createRadialGradient(x,y,0,x,y,rx);g.addColorStop(0,`rgba(0,0,0,${a})`);g.addColorStop(1,'rgba(0,0,0,0)');ctx.save();ctx.translate(x,y);ctx.scale(1,ry/rx);ctx.translate(-x,-y);ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,rx,0,7);ctx.fill();ctx.restore()}
function semBlur(fn){fn()}
function blurred(px,fn){ctx.save();ctx.filter=`blur(${px}px)`;fn();ctx.restore()}
function withP(over,fn){const bk=Object.assign({},P);Object.assign(P,over);try{fn()}finally{Object.assign(P,bk)}}
function grade(top,bot){ctx.save();ctx.globalCompositeOperation='soft-light';ctx.fillStyle=lg(0,H,[top,'rgba(0,0,0,0)',bot]);ctx.fillRect(0,0,W,H);ctx.restore()}
function letterIn(u){if(u<.18){ctx.fillStyle=`rgba(255,250,240,${.55*(1-u/.18)})`;ctx.fillRect(0,0,W,H)}}
function txtC(s,x,y,font,col,stroke){ctx.save();ctx.font=font;ctx.textAlign='center';ctx.textBaseline='middle';if(stroke){ctx.lineJoin='round';ctx.lineWidth=stroke;ctx.strokeStyle='rgba(0,0,0,.85)';ctx.strokeText(s,x,y)}ctx.fillStyle=col;ctx.fillText(s,x,y);ctx.restore()}
const easeIO=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;

// ---------- o chefe: seu Roberto (54 anos, terno azul-marinho, gravata vermelha, bigode grisalho, óculos dourados) ----------
const RB={suit:'#2b3452',suitS:'#1d2439',suitL:'#3f4b74',shirt:'#eef0f5',tie:'#c8352b',tieS:'#951f17',skin:'#e0a27c',skinS:'#bf825d',hair:'#b3b4bc',hairS:'#83848e'};
// close do rosto (mesma escala do face() do Matheus). o: {open, px, py, brow, mouthO, smile, pupil, headOnly, glasses(=1), sweat}
function rbFace(cx,cy,s,o){o=o||{};ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';
  const OL=(w)=>{ctx.strokeStyle=OUT;ctx.lineWidth=w||12;ctx.stroke()};
  if(!o.headOnly){
    ctx.fillStyle=RB.suit;ctx.beginPath();ctx.moveTo(-620,1000);ctx.quadraticCurveTo(-590,440,-210,385);ctx.lineTo(210,385);ctx.quadraticCurveTo(590,440,620,1000);ctx.closePath();ctx.fill();OL();
    {const g=ctx.createLinearGradient(-600,0,600,0);g.addColorStop(0,'rgba(255,255,255,.08)');g.addColorStop(.5,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.25)');ctx.fillStyle=g;ctx.fill();}
    ctx.fillStyle=RB.shirt;ctx.beginPath();ctx.moveTo(-160,388);ctx.lineTo(0,760);ctx.lineTo(160,388);ctx.closePath();ctx.fill();OL(9);
    for(const sx of[-1,1]){ctx.fillStyle=RB.suitL;ctx.beginPath();ctx.moveTo(sx*165,392);ctx.lineTo(sx*285,470);ctx.lineTo(sx*190,560);ctx.lineTo(sx*240,600);ctx.lineTo(sx*40,900);ctx.lineTo(sx*10,780);ctx.closePath();ctx.fill();OL(9);}
    ctx.fillStyle=RB.tie;ctx.beginPath();ctx.moveTo(-46,420);ctx.lineTo(46,420);ctx.lineTo(30,490);ctx.lineTo(-30,490);ctx.closePath();ctx.fill();OL(8);
    ctx.beginPath();ctx.moveTo(-30,490);ctx.lineTo(30,490);ctx.lineTo(62,800);ctx.lineTo(0,860);ctx.lineTo(-62,800);ctx.closePath();ctx.fill();OL(8);
    ctx.strokeStyle=RB.tieS;ctx.lineWidth=10;for(let k=0;k<4;k++){ctx.beginPath();ctx.moveTo(-40,560+k*70);ctx.lineTo(40,520+k*70);ctx.stroke()}
    ctx.fillStyle=RB.skinS;ctx.beginPath();ctx.rect(-115,240,230,170);ctx.fill();OL();
    for(const sx of[-1,1]){ctx.fillStyle=RB.shirt;ctx.beginPath();ctx.moveTo(sx*10,420);ctx.lineTo(sx*150,370);ctx.lineTo(sx*175,430);ctx.lineTo(sx*60,470);ctx.closePath();ctx.fill();OL(8);}
  }
  for(const sx of[-1,1]){ctx.fillStyle=RB.skin;ctx.beginPath();ctx.ellipse(sx*300,40,54,76,0,0,7);ctx.fill();OL();ctx.strokeStyle=RB.skinS;ctx.lineWidth=10;ctx.beginPath();ctx.arc(sx*300,40,26,sx>0?-1.2:1.9,sx>0?1.2:4.3);ctx.stroke()}
  const hp=()=>{ctx.beginPath();ctx.moveTo(-300,-40);ctx.quadraticCurveTo(-305,-345,0,-352);ctx.quadraticCurveTo(305,-345,300,-40);ctx.quadraticCurveTo(320,210,180,300);ctx.quadraticCurveTo(0,385,-180,300);ctx.quadraticCurveTo(-320,210,-300,-40);ctx.closePath()};
  hp();ctx.fillStyle=RB.skin;ctx.fill();ctx.save();hp();ctx.clip();
  {const g=ctx.createLinearGradient(-300,0,300,0);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(.55,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(120,50,30,.34)');ctx.fillStyle=g;ctx.fillRect(-330,-360,660,760);}
  ctx.fillStyle='rgba(255,255,255,.16)';ctx.beginPath();ctx.ellipse(-120,-250,120,70,-.2,0,7);ctx.fill(); // careca brilhando
  ctx.fillStyle='rgba(120,60,40,.14)';ctx.beginPath();ctx.ellipse(0,250,230,90,0,0,7);ctx.fill(); // papada
  if(o.sweat){ctx.fillStyle='rgba(190,230,255,.9)';ctx.beginPath();ctx.ellipse(230,-150,14,22,0,0,7);ctx.fill()}
  ctx.restore();hp();OL();
  // rugas na testa (sobem com a sobrancelha)
  ctx.strokeStyle='rgba(120,60,40,.45)';ctx.lineWidth=8;for(let k=0;k<3;k++){ctx.beginPath();ctx.moveTo(-130,-160-k*34-(o.brow||0)*10);ctx.quadraticCurveTo(0,-176-k*34-(o.brow||0)*14,130,-160-k*34-(o.brow||0)*10);ctx.stroke()}
  ctx.fillStyle='rgba(230,110,100,.22)';ctx.beginPath();ctx.ellipse(-180,120,64,36,0,0,7);ctx.ellipse(180,120,64,36,0,0,7);ctx.fill();
  // cabelo grisalho dos lados (careca em cima) + fiozinhos penteados
  for(const sx of[-1,1]){ctx.fillStyle=RB.hair;ctx.beginPath();ctx.moveTo(sx*318,70);ctx.quadraticCurveTo(sx*340,-150,sx*250,-270);ctx.quadraticCurveTo(sx*200,-200,sx*235,-120);ctx.quadraticCurveTo(sx*262,-20,sx*258,70);ctx.closePath();ctx.fill();OL(10);
    ctx.strokeStyle=RB.hairS;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(sx*290,-150);ctx.quadraticCurveTo(sx*300,-60,sx*290,20);ctx.stroke();}
  ctx.strokeStyle=RB.hair;ctx.lineWidth=9;for(let k=0;k<3;k++){ctx.beginPath();ctx.moveTo(-220,-250+k*16);ctx.quadraticCurveTo(-20,-330+k*14,200,-262+k*16);ctx.stroke()}
  // olhos
  const op=clamp(o.open??1,0,1.5);
  for(const sx of[-1,1]){const ex=sx*120,ey=0;
    if(op>.05){ctx.save();ctx.beginPath();ctx.ellipse(ex,ey,62,40*op,0,0,7);ctx.clip();ctx.fillStyle='#fbf8f2';ctx.fillRect(ex-80,ey-80,160,160);
      ctx.fillStyle='#4f6a86';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+(o.py||0),28,0,7);ctx.fill();ctx.fillStyle='#120c0a';ctx.beginPath();ctx.arc(ex+(o.px||0),ey+(o.py||0),13*(o.pupil||1),0,7);ctx.fill();
      ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(ex+(o.px||0)+10,ey+(o.py||0)-10,7,0,7);ctx.fill();
      ctx.fillStyle=RB.skin;ctx.fillRect(ex-80,ey-80,160,80-40*op+6);ctx.restore()}
    ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.beginPath();if(op>.05)ctx.ellipse(ex,ey,62,40*op,0,Math.PI*1.02,Math.PI*1.98);else{ctx.moveTo(ex-56,ey);ctx.quadraticCurveTo(ex,ey+18,ex+56,ey)}ctx.stroke();
    ctx.strokeStyle='rgba(120,60,40,.4)';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(ex-40,ey+52);ctx.quadraticCurveTo(ex,ey+64,ex+40,ey+52);ctx.stroke(); // bolsinha
    const by=-78-(o.brow||0)*32;ctx.fillStyle=RB.hair;ctx.beginPath();ctx.moveTo(ex-sx*-70,by+18-(o.brow||0)*-8);ctx.quadraticCurveTo(ex,by-24,ex+sx*74,by+12);ctx.quadraticCurveTo(ex,by+10,ex-sx*-70,by+30);ctx.closePath();ctx.fill();ctx.strokeStyle=RB.hairS;ctx.lineWidth=5;ctx.stroke();}
  // óculos dourados
  if(o.glasses!==0){ctx.strokeStyle='#c9a24a';ctx.lineWidth=9;for(const sx of[-1,1]){ctx.beginPath();rr(sx*120-86,-50,172,104,30);ctx.stroke()}ctx.beginPath();ctx.moveTo(-34,-6);ctx.quadraticCurveTo(0,-20,34,-6);ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,.18)';for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(sx*120-70,-40);ctx.lineTo(sx*120-30,-40);ctx.lineTo(sx*120-60,40);ctx.lineTo(sx*120-80,40);ctx.closePath();ctx.fill()}}
  // nariz grande
  ctx.fillStyle=RB.skinS;ctx.beginPath();ctx.moveTo(-10,30);ctx.quadraticCurveTo(-60,140,-20,150);ctx.quadraticCurveTo(10,166,50,146);ctx.quadraticCurveTo(70,120,20,30);ctx.closePath();ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.stroke();
  // boca
  if(o.mouthO){ctx.fillStyle='#4a1c18';ctx.beginPath();ctx.ellipse(0,240,40,52*o.mouthO,0,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.stroke();ctx.fillStyle='#e66';ctx.beginPath();ctx.ellipse(0,240+32*o.mouthO,20,10*o.mouthO,0,0,7);ctx.fill()}
  else{ctx.strokeStyle='#7a3a2c';ctx.lineWidth=11;ctx.beginPath();ctx.moveTo(-64,236);ctx.quadraticCurveTo(0,236+(o.smile||0),64,232-(o.smirk||0));ctx.stroke()}
  // bigodão grisalho
  ctx.fillStyle=RB.hair;ctx.beginPath();ctx.moveTo(0,168);ctx.quadraticCurveTo(-60,150,-120,176);ctx.quadraticCurveTo(-170,200,-150,232);ctx.quadraticCurveTo(-110,206,-60,212);ctx.quadraticCurveTo(-20,216,0,200);ctx.quadraticCurveTo(20,216,60,212);ctx.quadraticCurveTo(110,206,150,232);ctx.quadraticCurveTo(170,200,120,176);ctx.quadraticCurveTo(60,150,0,168);ctx.closePath();ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.stroke();
  ctx.strokeStyle=RB.hairS;ctx.lineWidth=5;for(let k=-3;k<=3;k++){if(!k)continue;ctx.beginPath();ctx.moveTo(k*30,182);ctx.lineTo(k*36,204);ctx.stroke()}
  ctx.restore()}
// corpo inteiro de frente (mesma escala do personFront). o: {arms:'down'|'cross'|'wave'|'phone'|'point', walk, look, brow, mouthO, smile, eye, noShadow}
function rbFront(x,y,s,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.lineJoin='round';ctx.lineCap='round';
  const p=o.walk;let lL=0,lR=0,bob=0,sw=0;if(p!=null){lL=16*Math.max(0,Math.sin(p));lR=16*Math.max(0,Math.sin(p+Math.PI));bob=-5*Math.abs(Math.cos(p));sw=Math.sin(p)}
  if(!o.noShadow)softShadow(0,142,110,20,.4);
  ctx.translate(0,bob);
  for(const [lx,lift,c] of [[-24,lL,RB.suitS],[24,lR,RB.suit]]){const fy=130-lift;ctx.strokeStyle=OUT;ctx.lineWidth=46;ctx.beginPath();ctx.moveTo(lx,0);ctx.lineTo(lx,fy);ctx.stroke();ctx.strokeStyle=c;ctx.lineWidth=37;ctx.stroke();
    ctx.fillStyle='#1a1a1e';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.beginPath();ctx.ellipse(lx,fy+10,26,13,0,0,7);ctx.fill();ctx.stroke()}
  const tp=()=>{ctx.beginPath();ctx.moveTo(-58,-128);ctx.quadraticCurveTo(-84,-60,-66,10);ctx.quadraticCurveTo(0,22,66,10);ctx.quadraticCurveTo(84,-60,58,-128);ctx.quadraticCurveTo(0,-142,-58,-128);ctx.closePath()};
  tp();ctx.fillStyle=RB.suit;ctx.fill();ctx.save();tp();ctx.clip();{const g=ctx.createLinearGradient(-70,0,70,0);g.addColorStop(0,'rgba(255,255,255,.07)');g.addColorStop(1,'rgba(0,0,0,.3)');ctx.fillStyle=g;ctx.fillRect(-90,-150,180,180);}
  ctx.fillStyle=RB.shirt;ctx.beginPath();ctx.moveTo(-26,-130);ctx.lineTo(0,-30);ctx.lineTo(26,-130);ctx.closePath();ctx.fill();
  ctx.fillStyle=RB.tie;ctx.beginPath();ctx.moveTo(-8,-124);ctx.lineTo(8,-124);ctx.lineTo(12,-48);ctx.lineTo(0,-36);ctx.lineTo(-12,-48);ctx.closePath();ctx.fill();
  ctx.strokeStyle=RB.suitL;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(-26,-128);ctx.lineTo(-4,-30);ctx.moveTo(26,-128);ctx.lineTo(4,-30);ctx.stroke();
  ctx.fillStyle='#d7c27a';ctx.beginPath();ctx.arc(0,-14,5,0,7);ctx.fill();ctx.restore();tp();ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.stroke();
  const arm=(sx,sy,ex,ey,c)=>{ctx.strokeStyle=OUT;ctx.lineWidth=34;ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(ex,ey);ctx.stroke();ctx.strokeStyle=c;ctx.lineWidth=25;ctx.stroke();ctx.fillStyle=RB.skin;ctx.strokeStyle=OUT;ctx.lineWidth=4.5;ctx.beginPath();ctx.ellipse(ex,ey+4,13,15,0,0,7);ctx.fill();ctx.stroke()};
  const A=o.arms||'down';
  if(A==='cross'){ctx.strokeStyle=OUT;ctx.lineWidth=34;ctx.beginPath();ctx.moveTo(-60,-112);ctx.lineTo(-62,-56);ctx.lineTo(40,-60);ctx.moveTo(60,-112);ctx.lineTo(62,-62);ctx.lineTo(-40,-66);ctx.stroke();ctx.strokeStyle=RB.suitL;ctx.lineWidth=25;ctx.stroke();ctx.fillStyle=RB.skin;ctx.beginPath();ctx.ellipse(44,-60,12,13,0,0,7);ctx.ellipse(-44,-66,12,13,0,0,7);ctx.fill()}
  else{arm(-62,-112,-74+sw*6,-16,RB.suitS);
    if(A==='wave'){const w=Math.sin((o.u||0)*10)*.25;arm(62,-112,62+Math.sin(2.4+w)*96,-112+Math.cos(2.4+w)*96,RB.suit)}
    else if(A==='phone'){arm(62,-112,38,-186,RB.suit);ctx.fillStyle='#16161c';ctx.save();ctx.translate(34,-200);ctx.rotate(-.3);rr(-10,-30,20,58,6);ctx.fill();ctx.restore()}
    else if(A==='point'){arm(62,-112,140,-150,RB.suit)}
    else arm(62,-112,74-sw*6,-16,RB.suit);}
  ctx.fillStyle=RB.skinS;ctx.fillRect(-14,-150,28,26);
  rbFace((o.look||0)*8,-206,.17,{headOnly:true,open:o.eye??1,px:(o.look||0)*24,py:o.py||0,brow:o.brow||0,mouthO:o.mouthO||0,smile:o.smile||0,smirk:o.smirk||0});
  ctx.restore()}

// ---------- cenários ----------
// escritório amplo: janelões com a cidade de manhã (fundo desfocado), fileiras de mesas, luminárias. o:{pan, warm, cat}
function s2Office(u,o){o=o||{};const pan=o.pan||0;
  ctx.fillStyle=lg(0,H,['#f4e3c9','#e9d3b4','#c9ad8c']);ctx.fillRect(0,0,W,H);
  // janelões
  ctx.save();ctx.beginPath();ctx.rect(0,260,W,760);ctx.clip();
  semBlur(()=>{sky('#8fc0ea','#cfe3f0','#ffe2b8');sun(860-pan*.2,520,60,'#fff6dc','rgba(255,220,150,.75)');
    buildings(41,1020,380,700,'#9fb3c9','#fff2c4',.12,pan*.3+120,1);buildings(7,1020,200,460,'#7c90aa','#ffe9a8',.18,pan*.5+300,1);});
  // gato laranja (coleira azul) dormindo no parapeito, de passagem (ambiente)
  if(o.cat){const cx=820-pan*.9;if(cx>-100&&cx<W+100)e6Cat(cx,1000,.55,u)}
  ctx.restore();
  for(let x=-pan%270;x<W+270;x+=270){ctx.fillStyle='#5e5148';ctx.fillRect(x-14,240,28,800);ctx.fillStyle='rgba(255,255,255,.18)';ctx.fillRect(x-14,240,6,800)}
  ctx.fillStyle='#5e5148';ctx.fillRect(0,1000,W,40);ctx.fillRect(0,240,W,30);
  beams(860-pan*.2,420,2.25,6,1500,.07);
  // chão (madeira) em perspectiva
  ctx.fillStyle=lg(1040,H,['#b98e62','#8e6744']);ctx.fillRect(0,1040,W,H-1040);
  ctx.strokeStyle='rgba(60,35,20,.18)';ctx.lineWidth=3;for(let i=-10;i<20;i++){const x0=W/2+(i*120-pan*.8%120);ctx.beginPath();ctx.moveTo(W/2+(x0-W/2)*.35,1040);ctx.lineTo(W/2+(x0-W/2)*2.2,H);ctx.stroke()}
  ctx.fillStyle='rgba(255,235,200,.12)';ctx.beginPath();ctx.moveTo(500,1040);ctx.lineTo(980,1040);ctx.lineTo(1300,H);ctx.lineTo(300,H);ctx.closePath();ctx.fill();
  // luminárias
  for(let i=0;i<4;i++){const x=(i*360+180-pan*.6%360+W)%(W+360)-180;ctx.strokeStyle='#3a3230';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,150);ctx.stroke();ctx.fillStyle='#3a3230';ctx.beginPath();ctx.moveTo(x-60,190);ctx.lineTo(x-26,148);ctx.lineTo(x+26,148);ctx.lineTo(x+60,190);ctx.closePath();ctx.fill();glow(x,200,160,'rgba(255,220,160,A)',.35)}
}
function s2Desk(x,y,s,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  softShadow(0,170,330,30,.35);
  ctx.fillStyle='#e8e2d6';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-320,-10,640,40,10);ctx.fill();ctx.stroke();
  ctx.fillStyle='#cfc7b8';ctx.beginPath();rr(-300,30,600,140,8);ctx.fill();ctx.stroke();ctx.fillStyle='rgba(0,0,0,.08)';ctx.fillRect(-300,30,600,30);
  // monitor
  ctx.fillStyle='#22252e';ctx.beginPath();rr(-150,-230,220,150,12);ctx.fill();ctx.stroke();ctx.fillStyle=lg(-220,-90,['#7fb6ff','#3d6fd1']);ctx.fillRect(-138,-218,196,126);ctx.fillStyle='rgba(255,255,255,.35)';for(let i=0;i<4;i++)ctx.fillRect(-124,-200+i*26,120-i*18,10);
  ctx.fillStyle='#22252e';ctx.fillRect(-50,-80,20,70);ctx.fillRect(-90,-14,100,8);
  // caneca e papéis
  ctx.fillStyle='#e85a3a';ctx.beginPath();rr(150,-80,56,70,10);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(212,-46,16,-1.2,1.2);ctx.stroke();
  ctx.fillStyle='#fffdf6';ctx.save();ctx.translate(90,-16);ctx.rotate(-.08);ctx.fillRect(-60,-14,120,14);ctx.restore();
  if(o.plant){ctx.fillStyle='#6b4a34';ctx.beginPath();rr(230,-70,60,60,8);ctx.fill();ctx.stroke();ctx.fillStyle='#4f9a55';for(let i=0;i<5;i++){ctx.beginPath();ctx.ellipse(260+(i-2)*14,-100-Math.abs(i-2)*-6,14,40,(i-2)*.35,0,7);ctx.fill();ctx.stroke()}}
  ctx.restore()}
// sala de vidro do chefe
function s2BossOffice(u,o){o=o||{};
  ctx.fillStyle=lg(0,H,['#1f2a3f','#34405c','#1a2133']);ctx.fillRect(0,0,W,H);
  ctx.save();ctx.beginPath();ctx.rect(60,240,W-120,900);ctx.clip();semBlur(()=>{sky('#5d87c4','#a9c6e6','#ffd8a8');buildings(13,1140,500,860,'#556c8f','#ffe7a2',.25,(o.pan||0)*.3+800,1);buildings(29,1140,260,560,'#3f5170','#ffd98a',.3,(o.pan||0)*.5+400,1)});ctx.restore();
  ctx.strokeStyle='#cfd6e4';ctx.lineWidth=14;ctx.strokeRect(60,240,W-120,900);ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(W/2,240);ctx.lineTo(W/2,1140);ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,.06)';ctx.beginPath();ctx.moveTo(100,240);ctx.lineTo(300,240);ctx.lineTo(120,1140);ctx.lineTo(60,1140);ctx.closePath();ctx.fill();
  ctx.fillStyle=lg(1140,H,['#3b3a46','#24232c']);ctx.fillRect(0,1140,W,H-1140);
  // quadro "META DO MÊS" e troféu (ele é o chefe)
  ctx.fillStyle='#2a2f3d';ctx.fillRect(0,1140,W,10);
  beams(900,300,2.2,5,1300,.06);
}
function s2BigDesk(x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);softShadow(0,200,460,40,.45);
  ctx.fillStyle='#5a3a26';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-440,-20,880,60,14);ctx.fill();ctx.stroke();
  ctx.fillStyle='#46301f';ctx.beginPath();rr(-420,40,840,170,10);ctx.fill();ctx.stroke();ctx.fillStyle='rgba(255,255,255,.08)';ctx.fillRect(-430,-14,860,12);
  ctx.fillStyle='#e9e4d8';ctx.beginPath();rr(-150,-58,300,40,6);ctx.fill();ctx.stroke();ctx.fillStyle='#2b2b33';ctx.font='700 26px Oswald';ctx.textAlign='center';ctx.fillText('DIRETORIA · R. ALMEIDA',0,-30);ctx.restore()}

// quartinho do Matheus à noite
function s2SmallRoom(u,o){o=o||{};ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);
  // janela com a cidade
  ctx.save();ctx.beginPath();rr(560,330,380,520,12);ctx.clip();sky('#0c1030','#1d2550','#3a3260');buildings(3,850,140,380,'#141833','#ffd27a',.35,200,1);
  for(let i=0;i<30;i++){const r=rng(i+5);ctx.fillStyle=`rgba(255,255,255,${.4+.4*Math.sin(u*2+i)})`;ctx.beginPath();ctx.arc(560+r()*380,330+r()*220,1.6,0,7);ctx.fill()}ctx.restore();
  ctx.strokeStyle='#3a3350';ctx.lineWidth=18;ctx.beginPath();rr(560,330,380,520,12);ctx.stroke();ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(750,330);ctx.lineTo(750,850);ctx.stroke();
  ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle='rgba(120,150,255,.08)';ctx.beginPath();ctx.moveTo(560,850);ctx.lineTo(940,850);ctx.lineTo(1080,1500);ctx.lineTo(300,1500);ctx.closePath();ctx.fill();ctx.restore();
  // relógio de parede (pista: vai parar em 00:00)
  if(!o.noClock)clockFace(260,520,110,o.hh??23,o.mm??59);
  // abajur
  ctx.fillStyle='#3a2f2a';ctx.fillRect(110,1150,120,160);ctx.fillStyle='#e8c07a';ctx.beginPath();ctx.moveTo(90,1150);ctx.lineTo(120,1050);ctx.lineTo(220,1050);ctx.lineTo(250,1150);ctx.closePath();ctx.fill();glow(170,1120,320,'rgba(255,190,110,A)',.35);
  ctx.fillStyle=lg(1300,H,['#2a2840','#1a1828']);ctx.fillRect(0,1300,W,H-1300);
  // cama simples
  ctx.fillStyle='#3d4a78';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(260,1250,800,190,24);ctx.fill();ctx.stroke();
  ctx.fillStyle='#e8e4dc';ctx.beginPath();rr(280,1210,230,80,30);ctx.fill();ctx.stroke();
}
// quarto de luxo do chefe, de manhã. o:{pan, sit}
function s2LuxRoom(u,o){o=o||{};const pan=o.pan||0;
  ctx.fillStyle=lg(0,H,['#efe4d2','#e2d2b8','#b99d7c']);ctx.fillRect(0,0,W,H);
  // janela panorâmica do chão ao teto
  ctx.save();ctx.beginPath();ctx.rect(-pan*.4+380,180,1100,1080);ctx.clip();sky('#7fb2e6','#cfe3f2','#ffdcae');sun(1000-pan*.4,420,70,'#fff7e0','rgba(255,214,150,.85)');
  semBlur(()=>{buildings(91,1260,520,960,'#9db2cc','#fff1c4',.1,pan*.25+600,1);buildings(55,1260,300,620,'#7f94b3','#ffe6a0',.15,pan*.45+200,1)});ctx.restore();
  ctx.strokeStyle='#d8cdb9';ctx.lineWidth=16;for(let k=0;k<4;k++){const x=380+k*360-pan*.4;ctx.beginPath();ctx.moveTo(x,180);ctx.lineTo(x,1260);ctx.stroke()}
  beams(1000-pan*.4,380,2.35,7,1600,.08);
  // cortinas
  ctx.fillStyle='#c9b08a';for(const cx of[330-pan*.4,1480-pan*.4]){ctx.beginPath();ctx.moveTo(cx-70,160);ctx.quadraticCurveTo(cx-90,700,cx-60,1280);ctx.lineTo(cx+60,1280);ctx.quadraticCurveTo(cx+80,700,cx+70,160);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(0,0,0,.15)';ctx.lineWidth=6;for(let k=-1;k<=1;k++){ctx.beginPath();ctx.moveTo(cx+k*30,170);ctx.quadraticCurveTo(cx+k*36,700,cx+k*30,1270);ctx.stroke()}}
  ctx.fillStyle=lg(1260,H,['#a7845f','#7d5f42']);ctx.fillRect(0,1260,W,H-1260);
  // relógio de parede IGUAL ao do quartinho, parado em 00:00 (pista escondida)
  clockFace(170-pan*.4,420,70,0,0);
  // camona king com cabeceira de couro
  ctx.save();ctx.translate(-pan*.15,0);
  ctx.fillStyle='#6a4a36';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-60,980,760,330,30);ctx.fill();ctx.stroke();
  ctx.fillStyle='rgba(0,0,0,.12)';for(let i=0;i<5;i++)for(let j=0;j<2;j++){ctx.beginPath();ctx.arc(30+i*150,1060+j*120,8,0,7);ctx.fill()}
  ctx.fillStyle='#f6f2ea';ctx.beginPath();rr(-80,1240,820,330,36);ctx.fill();ctx.stroke();
  ctx.fillStyle='#fff';ctx.beginPath();rr(-20,1190,260,110,40);ctx.fill();ctx.stroke();ctx.beginPath();rr(300,1190,260,110,40);ctx.fill();ctx.stroke();
  ctx.fillStyle='#b8865a';ctx.beginPath();rr(-80,1420,820,150,30);ctx.fill();ctx.stroke(); // pezeira dourada
  ctx.restore();
}
// banheiro com espelho; draw = o que aparece no espelho
function s2Mirror(u,draw,o){o=o||{};ctx.fillStyle='#d9dfe4';ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='rgba(120,135,150,.35)';ctx.lineWidth=3;for(let y=0;y<H;y+=120){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}for(let x=0;x<W;x+=120){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}
  // espelho
  ctx.save();ctx.beginPath();rr(110,250,860,1150,40);ctx.clip();ctx.fillStyle=lg(250,1400,['#b9c9d4','#8ea4b4']);ctx.fillRect(110,250,860,1150);draw();
  // reflexo do vidro + embaçado
  ctx.fillStyle='rgba(255,255,255,.12)';ctx.beginPath();ctx.moveTo(110,250);ctx.lineTo(420,250);ctx.lineTo(110,800);ctx.closePath();ctx.fill();
  if(o.fog){ctx.fillStyle=`rgba(235,240,245,${o.fog})`;ctx.fillRect(110,250,860,1150)}
  ctx.restore();ctx.strokeStyle='#c9a24a';ctx.lineWidth=22;ctx.beginPath();rr(110,250,860,1150,40);ctx.stroke();
  glow(540,180,420,'rgba(255,245,220,A)',.5);
  ctx.fillStyle='#f4f6f8';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(60,1440,960,140,30);ctx.fill();ctx.stroke();ctx.fillStyle='#c0c8d0';ctx.beginPath();ctx.ellipse(540,1480,220,40,0,0,7);ctx.fill();
  ctx.fillStyle='#b8bec6';ctx.fillRect(520,1400,40,50);
  ctx.fillStyle=lg(1580,H,['#8a96a4','#6c7886']);ctx.fillRect(0,1580,W,H-1580);
}
// celular em close (tela). msgs: lista de [tag,msg,time,k]
function s2Phone(u,o){o=o||{};ctx.fillStyle=lg(0,H,o.bg||['#efe4d2','#d8c6aa','#b29a7c']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,700,'rgba(255,240,210,A)',.35);
  const vb=o.ring?Math.sin(u*80)*6:0;ctx.save();ctx.translate(W/2+vb,H*.48);ctx.rotate(o.rot||-.04);
  softShadow(30,580,380,60,.4);
  ctx.fillStyle='#0d0e12';rr(-300,-580,600,1160,80);ctx.fill();ctx.strokeStyle='#5a5e6a';ctx.lineWidth=6;ctx.stroke();
  ctx.fillStyle=lg(-560,560,o.screen||['#2a3b66','#4a63a8','#1b2547']);rr(-280,-560,560,1120,64);ctx.fill();
  ctx.fillStyle='#0d0e12';rr(-80,-540,160,38,19);ctx.fill();
  ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='300 160px Inter';ctx.fillText(o.time||'07:00',0,-300);ctx.font='500 34px Inter';ctx.fillText(o.date||'segunda-feira',0,-236);ctx.textAlign='left';
  if(o.alarm){const k=.5+.5*Math.sin(u*14);ctx.fillStyle=`rgba(255,${120+80*k},80,.95)`;rr(-240,-120,480,190,40);ctx.fill();ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='800 64px Inter';ctx.fillText('⏰ DESPERTADOR',0,-10);ctx.font='600 36px Inter';ctx.fillText('deslizar para parar',0,44);ctx.textAlign='left'}
  (o.msgs||[]).forEach((m,i)=>notif(-260,-140+i*140,520,m[4]||'#7a5cff',m[0],m[1],m[2],m[3]));
  if(o.big){const k=o.big;ctx.save();ctx.globalAlpha=clamp(k*2);ctx.translate(0,120+(1-easeBack(clamp(k)))*-40);ctx.fillStyle='rgba(250,250,252,.97)';rr(-260,-30,520,330,30);ctx.fill();
    ctx.fillStyle='#7a5cff';ctx.beginPath();ctx.arc(-200,40,34,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 40px Inter';ctx.textAlign='center';ctx.fillText('?',-200,54);
    ctx.textAlign='left';ctx.fillStyle='#7a5cff';ctx.font='800 34px Inter';ctx.fillText('Número desconhecido',-150,52);
    ctx.fillStyle='#16161c';ctx.font='700 48px Inter';ctx.fillText('Só até você dormir.',-220,150);ctx.fillText('Escolha bem.',-220,215);ctx.restore()}
  ctx.restore();
  if(o.ring){for(let i=0;i<3;i++){const ph=(u*1.5+i/3)%1;ctx.strokeStyle=`rgba(255,180,90,${.7*(1-ph)})`;ctx.lineWidth=8;for(const sx of[-1,1]){ctx.beginPath();ctx.arc(W/2,H*.48,380+ph*240,sx>0?-0.5:Math.PI-0.5,sx>0?0.5:Math.PI+0.5);ctx.stroke()}}}
}
// rua do centro, de lado (o carro anda para a DIREITA; prédios, postes e faixas passam para a ESQUERDA)
function s2Street(gx,u){sky('#7fb0e0','#cde2f0','#ffdcb0');sun(850,330,60,'#fff6dc','rgba(255,220,150,.7)');
  semBlur(()=>{buildings(17,1150,500,900,'#a3b6cc','#fff0c0',.08,gx*.15,1)});buildings(23,1250,300,700,'#7e8faa','#ffe6a0',.15,gx*.4,1);
  ctx.fillStyle='#8c8f98';ctx.fillRect(0,1250,W,60);ctx.fillStyle='#6d717a';ctx.fillRect(0,1300,W,14);
  ctx.fillStyle=lg(1314,H,['#3e4048','#2c2e34']);ctx.fillRect(0,1314,W,H-1314);
  ctx.fillStyle='#f2f2f2';for(let x=-((gx*1)%240);x<W+240;x+=240)ctx.fillRect(x,1580,130,14);
  for(let x=-((gx*1)%520)+200;x<W+520;x+=520){ctx.fillStyle='#3a3d46';ctx.fillRect(x,820,14,440);ctx.fillRect(x-60,820,74,12);ctx.fillStyle='#ffe9b0';ctx.beginPath();ctx.arc(x-56,836,10,0,7);ctx.fill()}
  // árvores da calçada (passam)
  for(let x=-((gx*1)%700)+500;x<W+700;x+=700){ctx.fillStyle='#5a3e2a';ctx.fillRect(x-10,1080,20,180);ctx.fillStyle='#4f8f4f';ctx.beginPath();ctx.arc(x,1040,90,0,7);ctx.arc(x-60,1080,60,0,7);ctx.arc(x+60,1080,64,0,7);ctx.fill();ctx.fillStyle='rgba(255,255,255,.12)';ctx.beginPath();ctx.arc(x-20,1010,40,0,7);ctx.fill()}
}
function s2Sedan(x,y,s,u,head){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const b=Math.sin(u*18)*1.5;softShadow(0,8,250,22,.45);ctx.translate(0,b);
  // carrão preto alongado
  ctx.fillStyle='#14161c';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-240,-10);ctx.lineTo(-240,-70);ctx.quadraticCurveTo(-230,-96,-170,-100);ctx.lineTo(-110,-104);ctx.quadraticCurveTo(-70,-170,10,-174);ctx.lineTo(90,-174);ctx.quadraticCurveTo(140,-170,170,-104);ctx.lineTo(230,-96);ctx.quadraticCurveTo(250,-80,250,-10);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,.14)';ctx.fillRect(-230,-92,470,6);
  ctx.fillStyle='#9fb8cf';ctx.beginPath();ctx.moveTo(-86,-106);ctx.quadraticCurveTo(-56,-156,8,-158);ctx.lineTo(8,-106);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(26,-106);ctx.lineTo(26,-158);ctx.lineTo(88,-158);ctx.quadraticCurveTo(128,-150,150,-106);ctx.closePath();ctx.fill();
  if(head){ctx.save();ctx.beginPath();ctx.moveTo(26,-106);ctx.lineTo(26,-158);ctx.lineTo(88,-158);ctx.quadraticCurveTo(128,-150,150,-106);ctx.closePath();ctx.clip();rbFace(88,-120,.1,{headOnly:true,px:20,smile:20});ctx.restore()}
  ctx.fillStyle='rgba(255,255,255,.35)';ctx.beginPath();ctx.moveTo(-60,-150);ctx.lineTo(-40,-150);ctx.lineTo(-70,-108);ctx.lineTo(-86,-108);ctx.closePath();ctx.fill();
  ctx.fillStyle='#fff3c0';rr(226,-74,22,16,5);ctx.fill();glow(260,-66,90,'rgba(255,240,190,A)',.4);ctx.fillStyle='#d33';rr(-242,-74,12,16,4);ctx.fill();
  for(const wx of[-150,150]){ctx.fillStyle='#0b0b0e';ctx.beginPath();ctx.arc(wx,-8,40,0,7);ctx.fill();ctx.save();ctx.translate(wx,-8);ctx.rotate(u*14);ctx.fillStyle='#a8acb8';ctx.beginPath();ctx.arc(0,0,18,0,7);ctx.fill();ctx.strokeStyle='#555';ctx.lineWidth=4;for(let k=0;k<5;k++){ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.cos(k*1.256)*18,Math.sin(k*1.256)*18);ctx.stroke()}ctx.restore()}
  ctx.restore()}

// colegas de escritório (paletas diferentes)
const COL=[{hood:'#3f8f7a',hoodS:'#2c6c5b',hoodL:'#62b39c',pants:'#3b3b46',pantsS:'#2a2a33',skin:'#8d5a3b',skinS:'#6e4429',hair:'#151010',hairL:'#2c2220'},
           {hood:'#8a5cc4',hoodS:'#6a42a0',hoodL:'#a985da',pants:'#2f3a52',pantsS:'#232c40',skin:'#f0c7a4',skinS:'#d6a582',hair:'#a5532a',hairL:'#c56e3e'},
           {hood:'#e2b23c',hoodS:'#b98c22',hoodL:'#f2cb68',pants:'#4a4038',pantsS:'#382f29',skin:'#c58c62',skinS:'#a56f49',hair:'#2a1b14',hairL:'#4a3226'}];
function coworker(i,x,y,s,pose){withP(COL[i%3],()=>personFront(x,y,s,pose))}

// =============================== CENAS ===============================
// 0. GANCHO: no espelho, o rosto do chefe — e a mão dele tocando o rosto, em choque (2000–2003.5)
scene(2000,2003.5,(t)=>{const u=t-2000;const z=lerp(1.18,1.04,easeOut(seg(u,0,.6)))+u*.02,sh=u<.3?Math.sin(u*90)*12:0;
  CAM(W/2+sh,H*.5,z,()=>s2Mirror(u,()=>{ctx.fillStyle=lg(250,1400,['#9fb2c0','#7c92a4']);ctx.fillRect(110,250,860,1150);rbFace(540,880,1.05,{open:1.4,brow:1,mouthO:.9,pupil:.6,px:-6,py:6});
    ctx.save();ctx.translate(250,1020);ctx.rotate(.3);ctx.fillStyle=RB.skin;ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.beginPath();ctx.ellipse(0,0,90,130,0,0,7);ctx.fill();ctx.stroke();for(let k=0;k<4;k++){ctx.beginPath();ctx.ellipse(-40+k*28,-120,18,48,0,0,7);ctx.fill();ctx.stroke()}ctx.restore()}));
  ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,110,W,430);
  hookTitle('IMAGINE...|NO CORPO DO|SEU CHEFE 😳',seg(u,0,.35),240);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.85*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(2000.05);

// 1. apresentação: só o Matheus, de frente, fundo de uma cor só (pedido do usuário) (2004–2007.5)
scene(2004,2007.5,(t)=>{const u=t-2004;ctx.fillStyle='#2f7fd0';ctx.fillRect(0,0,W,H);
  CAM(W/2,1200,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{
    personFront(540,1250,2.7,{smile:12,brow:.2,eye:(u>1.6&&u<1.72)?.1:1});});
  const k=easeBack(seg(u,.3,.7));ctx.save();ctx.translate(lerp(-460,90,k),330);ctx.fillStyle='rgba(255,122,40,.97)';rr(0,0,440,120,20);ctx.fill();ctx.fillStyle='#fff';ctx.font='800 34px Inter';ctx.fillText('24 ANOS',30,46);ctx.font='900 54px Inter';ctx.fillText('MATHEUS',30,102);ctx.restore();
  letterIn(u);
});

// 2. o prédio no centro de São Paulo: a câmera desce do céu até a portaria (2008–2011.5)
scene(2008,2011.5,(t)=>{const u=t-2008;const k=easeIO(seg(u,0,3.5));
  ctx.save();ctx.translate(0,lerp(-500,0,k));
  sky('#6aa4e0','#bcd8f0','#ffd9a8');ctx.fillRect(0,-600,W,600);sun(820,200,70,'#fff6dc','rgba(255,220,150,.85)');
  semBlur(()=>buildings(77,1500,700,1300,'#9bb0c8','#fff0c0',.12,300,1));
  // o prédio do escritório, no centro
  ctx.fillStyle='#5f6f89';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.rect(300,-260,480,1860);ctx.fill();ctx.stroke();
  for(let y=-220;y<1480;y+=90)for(let x=330;x<760;x+=70){ctx.fillStyle=(Math.sin(x*3.1+y*1.7)>.4)?'#ffe9a8':'rgba(190,220,255,.55)';ctx.fillRect(x,y,46,62)}
  ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(300,-260,40,1860);
  ctx.fillStyle='#d8c27a';ctx.font='700 46px Oswald';ctx.textAlign='center';ctx.fillText('ALMEIDA & CIA',540,1420);
  ctx.fillStyle='#2b2b33';ctx.fillRect(460,1440,160,160);ctx.fillStyle='#cfe6ff';ctx.fillRect(476,1456,128,144);
  ctx.fillStyle='#8c8f98';ctx.fillRect(0,1600,W,60);ctx.fillStyle=lg(1660,H+400,['#3e4048','#2c2e34']);ctx.fillRect(0,1660,W,700);
  // pombos levantando voo (ambiente)
  for(let i=0;i<5;i++){const bx=200+i*90+u*120*(1+i*.1),by=1500-u*160*(1+i*.15)+Math.sin(u*9+i)*10;ctx.strokeStyle='#3a3a44';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(bx-22,by-Math.abs(Math.sin(u*12+i))*14);ctx.quadraticCurveTo(bx,by+6,bx+22,by-Math.abs(Math.sin(u*12+i))*14);ctx.stroke()}
  ctx.restore();grade('rgba(255,170,90,.2)','rgba(40,60,120,.2)');letterIn(u);
});

// 3. o chefe, seu Roberto: na sala de vidro, braços cruzados, cara fechada (2012–2015.5)
scene(2012,2015.5,(t)=>{const u=t-2012;CAM(W/2,1200,lerp(1.15,1.0,easeOut(seg(u,0,1.2)))+u*.015,()=>{
  s2BossOffice(u,{pan:u*10});rbFront(540,1300,1.9,{arms:'cross',brow:-.6,look:Math.sin(u*1.4)*.2});s2BigDesk(540,1352,1.15);});
  // etiqueta de personagem
  const k=easeBack(seg(u,.5,.9));ctx.save();ctx.translate(lerp(-400,90,k),420);ctx.fillStyle='rgba(200,53,43,.95)';rr(0,0,430,120,20);ctx.fill();ctx.fillStyle='#fff';ctx.font='800 34px Inter';ctx.fillText('O CHEFE',30,46);ctx.font='900 50px Inter';ctx.fillText('SEU ROBERTO',30,100);ctx.restore();
  grade('rgba(90,140,220,.25)','rgba(255,150,80,.18)');letterIn(u);
});

// 4. ontem: o Matheus entrega o pedido de aumento, o chefe pega o papel (2016–2019.5)
scene(2016,2019.5,(t)=>{const u=t-2016;CAM(W/2,1250,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{
  s2BossOffice(u,{pan:u*8});
  const k=easeIO(seg(u,.6,1.8));
  personFront(330,1300,1.55,{look:.6,smile:10,brow:.2});
  rbFront(770,1300,1.75,{arms:'point',look:-.5,brow:-.5});
  // papel indo da mão dele para a do chefe
  const px=lerp(420,870,k),py=lerp(1150,1050,k)-Math.sin(k*Math.PI)*60;ctx.save();ctx.translate(px,py);ctx.rotate(lerp(-.1,.15,k));ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.beginPath();rr(-80,-100,160,200,8);ctx.fill();ctx.stroke();ctx.fillStyle='#2b2b33';ctx.font='800 22px Inter';ctx.textAlign='center';ctx.fillText('PEDIDO DE',0,-60);ctx.fillText('AUMENTO',0,-32);ctx.fillStyle='rgba(0,0,0,.25)';for(let i=0;i<5;i++)ctx.fillRect(-56,-6+i*20,112,6);ctx.restore();
  });
  ctx.save();ctx.globalAlpha=seg(u,0,.4)*(1-seg(u,3.1,3.5));txtC('ONTEM',W/2,330,'800 64px Oswald','#ffd84a',14);ctx.restore();
  grade('rgba(90,140,220,.25)','rgba(255,150,80,.18)');letterIn(u);
});

// 5. close no papel: o carimbo vermelho NEGADO desce com força (2020–2023.5)
scene(2020,2023.5,(t)=>{const u=t-2020;ctx.fillStyle='#5a3a26';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(255,255,255,.05)';for(let y=0;y<H;y+=40)ctx.fillRect(0,y,W,3);
  glow(W/2,700,900,'rgba(255,220,170,A)',.3);
  CAM(W/2,H/2,lerp(1.05,1.12,seg(u,0,3.5)),()=>{softShadow(560,1520,420,50,.5);ctx.save();ctx.translate(W/2,H*.5);ctx.rotate(-.05);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-360,-520,720,1000,12);ctx.fill();ctx.stroke();
    ctx.fillStyle='#2b2b33';ctx.font='900 64px Inter';ctx.textAlign='center';ctx.fillText('PEDIDO DE AUMENTO',0,-400);ctx.font='600 40px Inter';ctx.textAlign='left';ctx.fillText('Nome: Matheus',-300,-300);ctx.fillText('Cargo: Assistente',-300,-240);ctx.fillText('Tempo de casa: 3 anos',-300,-180);
    ctx.fillStyle='rgba(0,0,0,.22)';for(let i=0;i<6;i++)ctx.fillRect(-300,-100+i*50,560-(i%3)*80,14);
    // marcas de pedidos anteriores (De novo!)
    ctx.save();ctx.globalAlpha=.35;ctx.translate(180,320);ctx.rotate(-.35);ctx.strokeStyle='#c22';ctx.lineWidth=8;ctx.strokeRect(-150,-50,300,100);ctx.fillStyle='#c22';ctx.font='900 64px Inter';ctx.textAlign='center';ctx.fillText('NEGADO',0,22);ctx.restore();
    // o carimbo novo
    const k=seg(u,.9,1.15);if(u>.9){ctx.save();ctx.translate(-20,140);ctx.rotate(-.12);const sc=lerp(2.2,1,easeOut(k));ctx.scale(sc,sc);ctx.globalAlpha=clamp(k*3);ctx.strokeStyle='#d22';ctx.lineWidth=14;ctx.strokeRect(-250,-80,500,160);ctx.fillStyle='#d22';ctx.font='900 120px Inter';ctx.textAlign='center';ctx.fillText('NEGADO',0,42);ctx.restore()}
    ctx.restore();
    // o carimbo (objeto) descendo e subindo
    const sy=u<.9?lerp(-400,560,easeIO(seg(u,.2,.9))):lerp(560,-300,easeOut(seg(u,1.05,1.7)));ctx.save();ctx.translate(520,sy);ctx.fillStyle='#4a2a1a';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-50,-260,100,200,30);ctx.fill();ctx.stroke();ctx.fillStyle='#2a2a2e';ctx.beginPath();rr(-150,-70,300,80,10);ctx.fill();ctx.stroke();ctx.fillStyle='#c22';ctx.fillRect(-140,0,280,16);ctx.restore();});
  letterIn(u);
});
SHAKE.push(2020.92);

// 6. à noite, o Matheus deitado no quartinho, chateado (2024–2027.5)
scene(2024,2027.5,(t)=>{const u=t-2024;CAM(W/2,1200,lerp(1.06,1.0,easeOut(seg(u,0,3.5))),()=>{s2SmallRoom(u,{hh:23,mm:58});
  // ele deitado (corpo de lado, cabeça no travesseiro), olhando pro teto
  ctx.save();ctx.translate(500,1225);ctx.rotate(-Math.PI/2);person(0,0,1.0,{f:1,look:-.1,mouth:-6,brow:4,blink:(u%3)<.15,noShadow:true});ctx.restore();
  ctx.fillStyle='#4b5b92';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(470,1270);ctx.quadraticCurveTo(700,1220+Math.sin(u*1.6)*6,1060,1250);ctx.lineTo(1060,1440);ctx.lineTo(470,1440);ctx.closePath();ctx.fill();ctx.stroke();});
  grade('rgba(60,80,200,.25)','rgba(255,140,60,.15)');letterIn(u);
});

// 7. o relógio do quarto: o ponteiro chega na meia-noite e PARA (pista) (2028–2031.5)
scene(2028,2031.5,(t)=>{const u=t-2028;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(120,150,255,A)',.18);
  const mm=59+Math.min(1,seg(u,.2,1.2));const z=lerp(1,1.15,easeIO(seg(u,0,3.5)));CAM(W/2,H*.45,z,()=>{softShadow(W/2+30,H*.45+430,360,40,.4);clockFace(W/2,H*.45,380,mm>=60?0:23,mm>=60?0:mm);
    // ponteiro dos segundos: anda... e trava no 12
    const sa=u<1.2?(u/1.2)*Math.PI*2*.25-Math.PI*.25:0;const tr=u>1.2?Math.sin(u*40)*.02*Math.exp(-(u-1.2)*3):0;ctx.save();ctx.translate(W/2,H*.45);ctx.rotate(sa+tr);ctx.strokeStyle='#d22';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(0,60);ctx.lineTo(0,-330);ctx.stroke();ctx.fillStyle='#d22';ctx.beginPath();ctx.arc(0,0,18,0,7);ctx.fill();ctx.restore();});
  if(u>1.25){ctx.save();ctx.globalAlpha=seg(u,1.25,1.6);txtC('00:00',W/2,H*.82,'700 120px Oswald','#ff5a5a',16);ctx.restore()}
  letterIn(u);
});

// 8. sete da manhã: o despertador toca no celular (2032–2035.5)
scene(2032,2035.5,(t)=>{const u=t-2032;CAM(W/2,H*.48,lerp(1.0,1.06,seg(u,0,3.5)),()=>s2Phone(u,{ring:1,alarm:1,time:'07:00',bg:['#f6e5c8','#e7cfa8','#c8a77c']}));letterIn(u)});

// 9/10. o quarto de luxo: alguém se senta na cama gigante; a câmera vai até a vista da cidade (2036–2043.5)
scene(2036,2043.5,(t)=>{const u=t-2036;const pan=lerp(0,520,easeIO(seg(u,3.6,7.2)));CAM(W/2,1200,lerp(1.12,1.0,easeOut(seg(u,0,1.5))),()=>{
  s2LuxRoom(u,{pan});
  // o "Matheus" sentando na cama (só se vê o corpo grande de pijama de seda e as costas)
  const k=easeOut(seg(u,.3,1.4));ctx.save();ctx.translate(320-pan*.15,1260-k*120);ctx.fillStyle='#7a2f3a';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.ellipse(0,0,150,170,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle=RB.skin;ctx.beginPath();ctx.ellipse(0,-200,82,92,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle=RB.hair;ctx.beginPath();ctx.ellipse(-70,-190,22,50,0,0,7);ctx.ellipse(70,-190,22,50,0,0,7);ctx.fill();ctx.restore();
  ctx.fillStyle='#f6f2ea';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(-80-pan*.15,1300);ctx.quadraticCurveTo(300,1260,740-pan*.15,1300);ctx.lineTo(740-pan*.15,1570);ctx.lineTo(-80-pan*.15,1570);ctx.closePath();ctx.fill();ctx.stroke();});
  dust(u,8,30,'rgba(255,235,190,A)');grade('rgba(255,180,100,.28)','rgba(80,100,180,.15)');letterIn(u);
});

// 11. ele corre pro banheiro: a câmera avança pelo corredor até a porta (2044–2047.5)
scene(2044,2047.5,(t)=>{const u=t-2044;const d=easeIO(seg(u,0,3.4));ctx.fillStyle='#e9dcc6';ctx.fillRect(0,0,W,H);
  const vx=W/2,vy=H*.46,sc=lerp(.35,1.25,d);
  // corredor em perspectiva (paredes passando)
  ctx.fillStyle='#d8c6a8';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(vx-300*sc,vy-520*sc);ctx.lineTo(vx-300*sc,vy+620*sc);ctx.lineTo(0,H);ctx.closePath();ctx.fill();
  ctx.fillStyle='#cdb999';ctx.beginPath();ctx.moveTo(W,0);ctx.lineTo(vx+300*sc,vy-520*sc);ctx.lineTo(vx+300*sc,vy+620*sc);ctx.lineTo(W,H);ctx.closePath();ctx.fill();
  ctx.fillStyle='#9a7a58';ctx.beginPath();ctx.moveTo(0,H);ctx.lineTo(vx-300*sc,vy+620*sc);ctx.lineTo(vx+300*sc,vy+620*sc);ctx.lineTo(W,H);ctx.closePath();ctx.fill();
  for(let i=0;i<6;i++){const z=((i/6+d*1.8)%1);const s=lerp(.35,3,z*z);ctx.fillStyle=`rgba(80,50,30,${.25*z})`;ctx.fillRect(vx-300*s-6,vy-520*s,12,1140*s);ctx.fillRect(vx+300*s-6,vy-520*s,12,1140*s)}
  // porta do banheiro com luz
  ctx.fillStyle='#fff8ea';ctx.beginPath();rr(vx-260*sc,vy-480*sc,520*sc,1100*sc,10);ctx.fill();glow(vx,vy,700*sc,'rgba(255,250,235,A)',.6);
  ctx.strokeStyle='#6a4a36';ctx.lineWidth=24*sc;ctx.strokeRect(vx-260*sc,vy-480*sc,520*sc,1100*sc);
  // borrão de movimento
  ctx.save();ctx.globalAlpha=.25*Math.sin(d*Math.PI);ctx.fillStyle='#fff';for(let i=0;i<14;i++){const a=i/14*Math.PI*2;ctx.save();ctx.translate(vx,vy);ctx.rotate(a);ctx.fillRect(400,-3,500,6);ctx.restore()}ctx.restore();
  letterIn(u);
});

// 12. o espelho: o vapor some e quem olha de volta é o seu Roberto (2048–2051.5)
scene(2048,2051.5,(t)=>{const u=t-2048;const z=lerp(1.0,1.2,easeOut(seg(u,.3,.7)));const sh=(u>.3&&u<.8)?Math.sin(u*80)*10:0;
  CAM(W/2+sh,H*.45,z,()=>s2Mirror(u,()=>{rbFace(540,900,1.0,{open:lerp(1,1.45,seg(u,.25,.45)),brow:seg(u,.25,.45),mouthO:seg(u,.3,.5)*.9,pupil:.65,glasses:1})},{fog:lerp(.85,0,easeOut(seg(u,0,.35)))}));
  if(u>.3&&u<.5){ctx.fillStyle=`rgba(255,255,255,${.6*(1-seg(u,.3,.5))})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(2048.32);

// 13. bigode, gravata e trinta anos a mais: ele mexe no bigode, puxa a gravata (2052–2055.5)
scene(2052,2055.5,(t)=>{const u=t-2052;ctx.fillStyle=lg(0,H,['#cfd8e0','#a9b8c6','#7e8fa0']);ctx.fillRect(0,0,W,H);glow(W*.3,H*.2,800,'rgba(255,245,220,A)',.4);
  const z=lerp(1.0,1.08,seg(u,0,3.5));CAM(W/2,H*.5,z,()=>{rbFace(W/2,H*.45,.95,{open:1.2,brow:.6,px:Math.sin(u*3)*14,py:12,mouthO:.25});
    // dedos alisando o bigode
    const k=Math.sin(u*5)*20;ctx.save();ctx.translate(W/2+150+k,H*.45+190);ctx.rotate(-.5);ctx.fillStyle=RB.skin;ctx.strokeStyle=OUT;ctx.lineWidth=9;for(let i=0;i<3;i++){ctx.beginPath();ctx.ellipse(i*34-34,0,17,60,0,0,7);ctx.fill();ctx.stroke()}ctx.restore();});
  // contadores divertidos
  const items=[['BIGODE ✓',.4],['GRAVATA ✓',1.2],['+30 ANOS ✓',2.0]];items.forEach(([s,a],i)=>{const k=easeBack(seg(u,a,a+.3));if(k<=0)return;ctx.save();ctx.translate(i%2?W-60:60,420+i*130);ctx.scale(k,k);ctx.textAlign=i%2?'right':'left';ctx.font='900 64px Inter';ctx.lineWidth=14;ctx.strokeStyle='#000';ctx.strokeText(s,0,0);ctx.fillStyle='#ffd84a';ctx.fillText(s,0,0);ctx.restore()});
  letterIn(u);
});

// 14. "E você? O que faria primeiro?": ele olha pra câmera, levanta a sobrancelha e dá um sorrisinho (2056–2059.5)
scene(2056,2059.5,(t)=>{const u=t-2056;ctx.fillStyle=lg(0,H,['#2b3452','#3f4b74','#1d2439']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,210,150,A)',.35);
  CAM(W/2,H*.5,lerp(1.12,1.0,easeOut(seg(u,0,.8))),()=>rbFace(W/2,H*.47,.92,{open:1,brow:lerp(0,.8,seg(u,.6,1)),smile:lerp(0,26,seg(u,.8,1.3)),smirk:lerp(0,26,seg(u,.8,1.3)),px:0,py:0}));
  const k=easeBack(seg(u,.4,.8));ctx.save();ctx.translate(W/2,360);ctx.scale(k,k);txtC('E VOCÊ? 👀',0,0,'900 110px Inter','#ffd84a',20);ctx.restore();
  letterIn(u);
});

// 15/16. a mensagem misteriosa no celular (2060–2063.5, com continuação)
scene(2060,2066,(t)=>{const u=t-2060;CAM(W/2,H*.48,lerp(1.0,1.15,easeIO(seg(u,0,6))),()=>s2Phone(u,{time:'07:04',screen:['#1b1430','#3a2a66','#120c22'],big:seg(u,.3,.8),bg:['#2a2440','#3c3260','#1a1630']}));
  if(u<.6){glow(W/2,H*.55,500,'rgba(160,120,255,A)',.4*(1-u/.6))}letterIn(u)});

// 17. no trânsito, de lado: o carrão preto anda para a DIREITA; prédios, postes e faixas passam para a ESQUERDA (2068–2071.5)
scene(2068,2071.5,(t)=>{const u=t-2068,gx=u*620;s2Street(gx,u);
  // pombos/folhas no vento (ambiente) passam junto com o cenário
  for(let i=0;i<6;i++){const r=rng(i+40);const x=((r()*W*2-gx*1.2)%(W+200)+W+200)%(W+200)-100,y=1100+r()*300+Math.sin(u*4+i)*20;ctx.save();ctx.translate(x,y);ctx.rotate(u*3+i);ctx.fillStyle=['#c9852a','#a8b84a','#d9a23a'][i%3];ctx.beginPath();ctx.ellipse(0,0,14,7,0,0,7);ctx.fill();ctx.restore()}
  s2Sedan(560,1500,1.5,u,true);
  // linhas de velocidade
  ctx.save();ctx.globalAlpha=.25;ctx.fillStyle='#fff';for(let i=0;i<8;i++){const r=rng(i+9);const y=1340+r()*420;const x=((r()*W-gx*2)%W+W)%W;ctx.fillRect(x,y,160,4)}ctx.restore();
  grade('rgba(255,170,90,.22)','rgba(40,60,120,.2)');letterIn(u);
});

// 18. ele entra no escritório (vindo na direção da câmera) e todo mundo se levanta (2072–2075.5)
scene(2072,2075.5,(t)=>{const u=t-2072;CAM(W/2,1300,lerp(1.0,1.06,seg(u,0,3.5)),()=>{s2Office(u,{pan:200});
  const up=easeBack(seg(u,.5,1.0));
  [[0,170,1230],[1,400,1200],[2,690,1200],[0,910,1230]].forEach(([i,x,y],j)=>{coworker(i,x,y-up*30,1.05,{up:j%2?.0:.0,look:x<540?.6:-.6,smile:14,mouthO:Math.max(0,Math.sin(u*6+j))*.4});s2Desk(x,y+160,.62,{})});
  // o chefe vem pelo corredor, andando em direção à câmera (cresce)
  const k=seg(u,0,3.5);rbFront(540,lerp(1320,1500,k),lerp(1.2,1.8,k),{walk:u*7,arms:'wave',u,smile:16,look:Math.sin(u*2)*.4});});
  if(u>.9){const k=easeBack(seg(u,.9,1.2));ctx.save();ctx.translate(W/2,420);ctx.scale(k,k);txtC('BOM DIA, CHEFE!',0,0,'900 96px Inter','#fff',18);ctx.restore()}
  grade('rgba(255,170,90,.2)','rgba(40,60,120,.18)');letterIn(u);
});

// 19. na mesa do chefe, uma pasta azul (vista de cima, câmera descendo) (2076–2079.5)
scene(2076,2079.5,(t)=>{const u=t-2076;ctx.fillStyle='#5a3a26';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(255,255,255,.04)';for(let y=0;y<H;y+=46)ctx.fillRect(0,y,W,3);glow(W*.7,H*.2,900,'rgba(255,220,170,A)',.35);
  CAM(W/2,H*.5,lerp(.9,1.1,easeIO(seg(u,0,3.5))),()=>{
    // objetos da mesa
    ctx.save();ctx.translate(200,400);ctx.fillStyle='#e85a3a';ctx.beginPath();ctx.arc(0,0,70,0,7);ctx.fill();ctx.fillStyle='#3a1e14';ctx.beginPath();ctx.arc(0,0,52,0,7);ctx.fill();ctx.restore();
    ctx.save();ctx.translate(880,1500);ctx.rotate(.4);ctx.fillStyle='#16161c';rr(-60,-120,120,240,20);ctx.fill();ctx.restore();
    softShadow(W/2+20,H*.5+40,460,380,.45);
    ctx.save();ctx.translate(W/2,H*.5);ctx.rotate(-.06);ctx.fillStyle='#2f6fc9';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-340,-460,680,920,22);ctx.fill();ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(-340,-460,680,40);ctx.fillStyle='#fffdf6';ctx.beginPath();rr(-220,-260,440,140,12);ctx.fill();ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 58px Inter';ctx.textAlign='center';ctx.fillText('CONFIDENCIAL',0,-170);ctx.restore();});
  letterIn(u);
});

// 20/21. a pasta abre: "AUMENTOS DO MÊS" — e o nome dele com NEGADO, circulado (2080–2087)
scene(2080,2087,(t)=>{const u=t-2080;ctx.fillStyle='#5a3a26';ctx.fillRect(0,0,W,H);glow(W*.7,H*.2,900,'rgba(255,220,170,A)',.35);
  const k=easeIO(seg(u,3.6,5));CAM(W/2,lerp(H*.5,H*.62,k),lerp(1.0,1.35,k),()=>{softShadow(W/2,H*.52+520,460,50,.45);
    ctx.save();ctx.translate(W/2,H*.5);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-400,-560,800,1120,12);ctx.fill();ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 70px Inter';ctx.textAlign='center';ctx.fillText('AUMENTOS DO MÊS',0,-440);ctx.fillStyle='#c8352b';ctx.fillRect(-300,-410,600,8);
    const L=[['Ana Paula','APROVADO'],['Carlos','APROVADO'],['Juliana','APROVADO'],['Matheus','NEGADO'],['Pedro','APROVADO']];
    L.forEach(([n,s],i)=>{const y=-300+i*140;const a=seg(u,.3+i*.15,.6+i*.15);ctx.globalAlpha=a;ctx.textAlign='left';ctx.fillStyle='#22222a';ctx.font='700 54px Inter';ctx.fillText(n,-340,y);ctx.textAlign='right';ctx.fillStyle=s==='NEGADO'?'#d22':'#2a8a4a';ctx.font='900 50px Inter';ctx.fillText(s,340,y);ctx.globalAlpha=1;ctx.fillStyle='rgba(0,0,0,.1)';ctx.fillRect(-340,y+30,680,3)});
    // assinatura em branco embaixo
    ctx.textAlign='left';ctx.fillStyle='#555';ctx.font='600 36px Inter';ctx.fillText('Assinatura:',-340,440);ctx.strokeStyle='#555';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-120,446);ctx.lineTo(340,446);ctx.stroke();
    // círculo vermelho no nome dele
    if(u>3.6){const c=seg(u,3.6,4.4);ctx.strokeStyle='#ff3b3b';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();for(let a=0;a<=c*6.6;a+=.05){const x=Math.cos(a)*(380+10*Math.sin(a*3)),y=-300+3*140-18+Math.sin(a)*80;a?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke();
      if(u>4.3){ctx.globalAlpha=seg(u,4.3,4.6);ctx.fillStyle='#ff3b3b';ctx.font='700 80px Caveat';ctx.textAlign='center';ctx.fillText('é ele!',220,40);ctx.globalAlpha=1}}
    ctx.restore();});
  letterIn(u);
});

// 22. pela porta de vidro da sala, uma silhueta se aproxima (2088–2091.5)
scene(2088,2091.5,(t)=>{const u=t-2088;s2Office(u,{pan:420});ctx.fillStyle='rgba(20,26,40,.25)';ctx.fillRect(0,0,W,H);
  // vidro fosco com faixa
  ctx.save();ctx.beginPath();ctx.rect(180,260,720,1340);ctx.clip();blurred(14,()=>{const k=easeIO(seg(u,.2,3.4));withP({},()=>person(lerp(180,560,k),1300,1.6,{f:1,walk:u*7}))});ctx.fillStyle='rgba(220,235,250,.45)';ctx.fillRect(180,260,720,1340);ctx.fillStyle='rgba(255,255,255,.65)';ctx.fillRect(180,820,720,120);ctx.fillStyle='#2b3452';ctx.font='800 50px Oswald';ctx.textAlign='center';ctx.fillText('DIRETORIA',540,896);ctx.restore();
  ctx.strokeStyle='#cfd6e4';ctx.lineWidth=18;ctx.strokeRect(180,260,720,1340);ctx.fillStyle='#9aa4b4';ctx.fillRect(840,900,22,140);
  letterIn(u);
});

// 23. ele mesmo! O Matheus passa pela frente do vidro, andando para a DIREITA (câmera parada) (2092–2095.5)
scene(2092,2095.5,(t)=>{const u=t-2092;CAM(W/2,1300,lerp(1.0,1.06,seg(u,0,3.5)),()=>{s2Office(u,{pan:0,cat:true});
  const x=lerp(80,820,easeIO(seg(u,0,3.2)));person(x,1300,1.6,{f:1,walk:u*8.5,look:.05,brow:-6});
  for(let i=0;i<2;i++){const r=rng(i+3);coworker(i+1,220+i*600,1240,1.0,{look:i?-.5:.5});s2Desk(220+i*600,1400,.62,{})}});
  if(u>.8){const k=easeBack(seg(u,.8,1.1));ctx.save();ctx.translate(W/2,420);ctx.scale(k,k);txtC('ELE MESMO?! 😳',0,0,'900 100px Inter','#ffd84a',18);ctx.restore()}
  grade('rgba(255,170,90,.2)','rgba(40,60,120,.18)');letterIn(u);
});

// 24/25. o "Matheus" senta e grita "CADÊ MEU CAFÉ?" — os colegas não entendem nada (2100–2107)
scene(2100,2107,(t)=>{const u=t-2100;CAM(W/2,1300,lerp(1.0,1.1,easeIO(seg(u,0,7))),()=>{s2Office(u,{pan:80});
  coworker(0,170,1240,1.0,{look:.6,brow:u>3?.8:0,mouthO:u>3?.4:0});s2Desk(170,1400,.62,{});coworker(1,910,1240,1.0,{look:-.6,brow:u>3?.8:0,mouthO:u>3?.3:0});s2Desk(910,1400,.62,{});
  const yell=seg(u,.6,.9)*(1-seg(u,2.8,3.2));const shk=yell>0?Math.sin(u*60)*4*yell:0;
  personFront(540+shk,1300,1.5,{up:yell*.9,brow:-1.2*yell,mouthO:yell*1.1,look:0});s2Desk(540,1460,1.05,{});});
  if(u>.7&&u<3.1){const k=easeBack(seg(u,.7,.95));ctx.save();ctx.translate(W/2+150,620);ctx.scale(k,k);ctx.fillStyle='#fff';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-330,-110,660,200,50);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(-120,88);ctx.lineTo(-180,170);ctx.lineTo(-40,88);ctx.fill();ctx.stroke();txtC('CADÊ MEU CAFÉ?!',0,-8,'900 70px Inter','#d22');ctx.restore()}
  if(u>3.2){for(let i=0;i<3;i++){const k=easeBack(seg(u,3.2+i*.2,3.5+i*.2));ctx.save();ctx.translate([170,910,540][i],[880,880,700][i]+Math.sin(u*4+i)*10);ctx.scale(k,k);txtC('?',0,0,'900 140px Inter','#ffd84a',16);ctx.restore()}}
  grade('rgba(255,170,90,.2)','rgba(40,60,120,.18)');letterIn(u);
});

// 26/27. a troca: o rosto do Matheus vira o do chefe e vice-versa (setas girando) — "SÓ POR HOJE" (2108–2115)
scene(2108,2115,(t)=>{const u=t-2108;ctx.fillStyle=lg(0,H,['#1d1a3a','#3a2a6a','#120f26']);ctx.fillRect(0,0,W,H);glow(W/2,H/2,900,'rgba(170,120,255,A)',.35);
  const sw=easeIO(seg(u,.4,1.4));const a=sw*Math.PI;
  // dois "cartões" que trocam de lado
  const pos=(s)=>[W/2+Math.cos(a+s)*260,H*.47+Math.sin(a+s)*140];
  const [x1,y1]=pos(Math.PI),[x2,y2]=pos(0);
  const card=(x,y,lab,fn)=>{ctx.save();ctx.translate(x,y);ctx.fillStyle='rgba(255,255,255,.95)';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-210,-260,420,520,40);ctx.fill();ctx.stroke();ctx.save();ctx.beginPath();rr(-190,-240,380,400,30);ctx.clip();ctx.fillStyle='#cfe0f0';ctx.fillRect(-190,-240,380,400);fn();ctx.restore();txtC(lab,0,210,'900 50px Inter','#16161c');ctx.restore()};
  card(x1,y1,'CORPO DO CHEFE',()=>{rbFace(0,-10,.5,{open:1.3,brow:.8,mouthO:.5})});
  card(x2,y2,'CORPO DO MATHEUS',()=>{face(0,0,.5,{open:1,brow:-1,mouthO:.6})});
  // setas girando
  ctx.save();ctx.translate(W/2,H*.47);ctx.rotate(u*2);ctx.strokeStyle='#ffd84a';ctx.lineWidth=14;ctx.lineCap='round';for(const s of[0,Math.PI]){ctx.beginPath();ctx.arc(0,0,420,s+.3,s+1.4);ctx.stroke();const e=s+1.4;ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.moveTo(Math.cos(e)*420,Math.sin(e)*420);ctx.lineTo(Math.cos(e-.12)*470,Math.sin(e-.12)*470);ctx.lineTo(Math.cos(e-.12)*370,Math.sin(e-.12)*370);ctx.closePath();ctx.fill()}ctx.restore();
  txtC('TROCARAM DE VIDA!',W/2,360,'900 90px Inter','#fff',18);
  if(u>3.6){const k=easeBack(seg(u,3.6,4));ctx.save();ctx.translate(W/2,H*.8);ctx.scale(k,k);ctx.fillStyle='#c8352b';rr(-300,-80,600,160,30);ctx.fill();txtC('SÓ POR HOJE ⏳',0,0,'900 76px Inter','#fff');ctx.restore()}
  letterIn(u);
});

// 28/29. o telefone da mesa toca: "DIRETOR" (2116–2123)
scene(2116,2123,(t)=>{const u=t-2116;ctx.fillStyle='#4a3020';ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,220,170,A)',.3);
  const ring=u<1.6||(u>2&&u<2.2);const vb=ring?Math.sin(u*70)*6:0;CAM(W/2,H*.5,lerp(1.0,1.1,easeIO(seg(u,0,7))),()=>{
  softShadow(W/2,H*.62,420,50,.5);ctx.save();ctx.translate(W/2+vb,H*.55);ctx.fillStyle='#1f2027';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-340,-160,680,320,40);ctx.fill();ctx.stroke();
  ctx.fillStyle='#9fd3a6';ctx.beginPath();rr(-260,-120,300,120,12);ctx.fill();ctx.fillStyle='#10301a';ctx.font='800 52px Oswald';ctx.textAlign='center';ctx.fillText('DIRETOR',-110,-44);
  ctx.fillStyle='#3a3b44';for(let i=0;i<3;i++)for(let j=0;j<3;j++){ctx.beginPath();rr(90+i*70,-120+j*70,54,54,10);ctx.fill()}
  // monofone sobe quando ele atende
  const up=easeOut(seg(u,1.6,2.2));ctx.save();ctx.translate(-40,-200-up*300);ctx.rotate(-up*.3);ctx.fillStyle='#2a2b33';ctx.beginPath();rr(-300,-50,600,100,50);ctx.fill();ctx.stroke();ctx.restore();ctx.restore();
  if(ring){for(let i=0;i<3;i++){const ph=(u*1.6+i/3)%1;ctx.strokeStyle=`rgba(255,200,120,${.7*(1-ph)})`;ctx.lineWidth=8;ctx.beginPath();ctx.arc(W/2,H*.5,420+ph*220,-2.6,-.5);ctx.stroke()}}});
  // a voz do diretor (balão de ligação)
  if(u>2.6){const k=easeBack(seg(u,2.6,2.9));ctx.save();ctx.translate(W/2,520);ctx.scale(k,k);ctx.fillStyle='rgba(255,255,255,.96)';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-420,-150,840,300,40);ctx.fill();ctx.stroke();txtC('📞 "ATÉ AS SEIS!"',0,0,'900 76px Inter','#c8352b');ctx.restore()}
  letterIn(u);
});

// 30. a caneta na mão dele, em cima da linha da assinatura (2124–2127.5)
scene(2124,2127.5,(t)=>{const u=t-2124;ctx.fillStyle='#fffdf6';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(0,0,0,.06)';for(let y=200;y<H;y+=90)ctx.fillRect(80,y,W-160,4);
  CAM(W/2,H*.55,lerp(1.0,1.18,easeIO(seg(u,0,3.5))),()=>{ctx.fillStyle='#555';ctx.font='600 60px Inter';ctx.fillText('Assinatura:',80,1150);ctx.strokeStyle='#333';ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(420,1160);ctx.lineTo(1000,1160);ctx.stroke();
  const hov=Math.sin(u*3)*14;ctx.save();ctx.translate(700+hov,1060);ctx.rotate(-.7);softShadow(40,120,160,20,.25);ctx.fillStyle='#d8b04a';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-24,-420,48,420,20);ctx.fill();ctx.stroke();ctx.fillStyle='#2a2a30';ctx.beginPath();ctx.moveTo(-24,0);ctx.lineTo(24,0);ctx.lineTo(0,70);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle=RB.skin;ctx.beginPath();ctx.ellipse(10,-160,90,110,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle=RB.suit;ctx.beginPath();rr(-80,-330,180,160,30);ctx.fill();ctx.stroke();ctx.fillStyle=RB.shirt;ctx.fillRect(-80,-200,180,30);ctx.restore();});
  glow(W*.8,H*.2,700,'rgba(255,220,170,A)',.25);letterIn(u);
});

// 31. tentação A: o holerite dele com o salário subindo sem parar (2128–2131.5)
scene(2128,2131.5,(t)=>{const u=t-2128;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.3);
  // notas caindo
  for(let i=0;i<14;i++){const r=rng(i+60);const x=r()*W,y=((r()*H+u*(300+r()*200))%(H+200))-100;ctx.save();ctx.translate(x,y);ctx.rotate(u*2+i);ctx.fillStyle='#8fd18f';ctx.strokeStyle='#2f6a3a';ctx.lineWidth=4;ctx.beginPath();rr(-60,-30,120,60,6);ctx.fill();ctx.stroke();ctx.fillStyle='#2f6a3a';ctx.font='900 30px Inter';ctx.textAlign='center';ctx.fillText('R$',0,10);ctx.restore()}
  CAM(W/2,H*.48,lerp(1.0,1.08,seg(u,0,3.5)),()=>{softShadow(W/2,H*.48+420,380,40,.4);ctx.save();ctx.translate(W/2,H*.48);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-380,-400,760,800,20);ctx.fill();ctx.stroke();
  ctx.fillStyle='#16161c';ctx.font='900 60px Inter';ctx.textAlign='center';ctx.fillText('HOLERITE · MATHEUS',0,-300);ctx.fillStyle='#777';ctx.font='600 44px Inter';ctx.fillText('SALÁRIO',0,-160);
  const v=Math.round(lerp(2100,9900,easeIO(seg(u,.3,2.8)))/100)*100;ctx.fillStyle='#1f8a4a';ctx.font='900 150px Oswald';ctx.fillText('R$ '+v.toLocaleString('pt-BR'),0,20);
  ctx.fillStyle='#1f8a4a';ctx.font='900 120px Inter';ctx.fillText('⬆',0,220);ctx.restore()});
  txtC('A?',W/2,330,'900 120px Inter','#7dffa8',20);letterIn(u);
});

// 32. ou B: a equipe inteira comemorando o aumento, confete (2132–2135.5)
scene(2132,2135.5,(t)=>{const u=t-2132;CAM(W/2,1300,lerp(1.04,1.0,seg(u,0,3.5)),()=>{s2Office(u,{pan:300});
  const j=(i)=>Math.abs(Math.sin(u*6+i))*50;
  coworker(0,170,1260-j(0),1.0,{up:1,smile:20,mouthO:.5});coworker(1,400,1230-j(1),1.05,{up:1,smile:20,mouthO:.6});coworker(2,680,1230-j(2),1.05,{up:1,smile:20,mouthO:.5});withP({},()=>personFront(910,1260-j(3),1.0,{up:1,smile:20,mouthO:.6}));});
  for(let i=0;i<40;i++){const r=rng(i+77);const x=(r()*W+Math.sin(u*2+i)*40),y=((r()*H*.6+u*(260+r()*200))%(H))-50;ctx.save();ctx.translate(x,y);ctx.rotate(u*5+i);ctx.fillStyle=['#ffd84a','#ff5a7a','#5ad1ff','#7dffa8'][i%4];ctx.fillRect(-10,-5,20,10);ctx.restore()}
  txtC('B?',W/2,330,'900 120px Inter','#ffd84a',20);grade('rgba(255,170,90,.2)','rgba(40,60,120,.18)');letterIn(u);
});

// 33. "mas cuidado": o relógio do escritório marca 17:59 e o chefe-Matheus engole seco; luz fica vermelha (2136–2139.5)
scene(2136,2139.5,(t)=>{const u=t-2136;ctx.fillStyle=lg(0,H,['#2a1620','#4a2030','#1a0e14']);ctx.fillRect(0,0,W,H);glow(W/2,H*.3,900,'rgba(255,90,90,A)',.25+.1*Math.sin(u*4));
  clockFace(W/2,420,170,17,59);
  CAM(W/2,H*.6,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>rbFace(W/2,H*.62,.85,{open:1.1,brow:.9,py:-14,px:-10,sweat:1,smile:-14}));
  txtC('CONSEQUÊNCIAS...',W/2,750,'900 80px Inter','#ff6a6a',16);letterIn(u);
});

// 34/35. ESCOLHA: A (verde) x B — sobre o rosto dele, com a caneta (2140–2147)
scene(2140,2147,(t)=>{const u=t-2140;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=.5;rbFace(W/2,H*.7,.8,{open:1,brow:.5,px:-20,py:10});ctx.restore();ctx.fillStyle='rgba(10,8,14,.42)';ctx.fillRect(0,0,W,H);
  txtC('O QUE ELE FAZ?',W/2,320,'900 92px Inter','#fff',18);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,140,80,.95)';rr(70,430,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('A',120,590);ctx.font='800 50px Inter';ctx.fillText('Aumentar o PRÓPRIO',250,530);ctx.fillText('salário 💰',250,595);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(60,90,200,.95)';rr(70,690,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('B',120,850);ctx.font='800 50px Inter';ctx.fillText('Aumento pra equipe',250,790);ctx.fillText('INTEIRA 🎉',250,855);ctx.restore();
  if(u>1.4){const k=.5+.5*Math.sin(u*5);ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('COMENTA A OU B 👇',W/2,1080,'900 74px Inter',`rgb(255,${200+55*k},74)`,16);ctx.restore()}
});

// FINAL: cartela da série (2096–2099.2)
scene(2096,2099.2,(t)=>{const u=t-2096;ctx.fillStyle='#07070c';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,50,W/2,H*.42,900);g.addColorStop(0,'rgba(120,90,255,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.36);ctx.scale(k,k);ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='900 92px Inter';ctx.fillText('E SE VOCÊ',0,0);ctx.fillText('ACORDASSE NA',0,110);ctx.fillStyle='#ffd84a';ctx.font='900 128px Inter';ctx.fillText('VIDA DE OUTRA',0,250);ctx.fillText('PESSOA?',0,390);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 2 · AMANHÃ 18H',W/2,H*.36+560);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.36+660);ctx.restore()});
