// ===== S3 EP1 — "Não abre a porta" =====
// usa teaser.js (tz*) + m5.js. window.LINES=[{a,b,txt}], window.MK={...} marcas de palavras
const E1={wall:'#2a2f5e',wallD:'#1d2148',floor:'#3a2c3f',wood:'#8a5a3a',woodD:'#5e3b25'};
function e1Hud(txt){if(!txt)return;ctx.save();ctx.font='800 30px Inter';const w=ctx.measureText(txt).width+44;ctx.fillStyle='rgba(10,12,30,.72)';rr(40,60,w,58,29);ctx.fill();
  ctx.fillStyle='#ff4d4d';ctx.beginPath();ctx.arc(64,89,7,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.textBaseline='middle';ctx.fillText(txt,80,90);ctx.restore()}
function e1Cat(x,y,s,f,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s*f,s);const L='#7a3d12';ctx.lineJoin='round';ctx.lineCap='round';
  const leap=o.leap||0, st=(a,b,c,d)=>{ctx.strokeStyle=L;ctx.lineWidth=17;ctx.beginPath();ctx.moveTo(a,b);ctx.lineTo(c,d);ctx.stroke();ctx.strokeStyle='#f39a4a';ctx.lineWidth=11;ctx.stroke()};
  // rabo
  ctx.strokeStyle=L;ctx.lineWidth=15;ctx.beginPath();ctx.moveTo(-58,-50);ctx.quadraticCurveTo(-110,-70-leap*20,-96,-120+Math.sin((o.t||0)*4)*8);ctx.stroke();ctx.strokeStyle='#f39a4a';ctx.lineWidth=9;ctx.stroke();
  // pernas
  if(leap>.5){st(-40,-40,-84,-6);st(-28,-40,-70,-2);st(38,-46,86,-70);st(50,-46,96,-58)}
  else{st(-40,-40,-42,0);st(-24,-40,-22,0);st(30,-40,30,0);st(46,-40,48,0)}
  // corpo
  ctx.fillStyle='#f39a4a';ctx.strokeStyle=L;ctx.lineWidth=4.5;ctx.beginPath();ctx.ellipse(0,-56,66,32,leap>.5?-.12:0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle='#fff6ea';ctx.beginPath();ctx.ellipse(14,-42,34,16,0,0,7);ctx.fill();
  ctx.strokeStyle='rgba(122,61,18,.5)';ctx.lineWidth=4;for(const k of [-30,-12,6]){ctx.beginPath();ctx.moveTo(k,-86);ctx.lineTo(k+6,-70);ctx.stroke()}
  // cabeça
  ctx.save();ctx.translate(64,-86-leap*6);ctx.fillStyle='#f39a4a';ctx.strokeStyle=L;ctx.lineWidth=4.5;
  for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(sx*12-4,-22);ctx.lineTo(sx*26,-50);ctx.lineTo(sx*32+4,-14);ctx.closePath();ctx.fill();ctx.stroke()}
  ctx.beginPath();ctx.ellipse(0,0,38,32,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#fff6ea';ctx.beginPath();ctx.ellipse(6,14,20,13,0,0,7);ctx.fill();
  for(const sx of[-1,1]){ctx.fillStyle='#2a170d';ctx.beginPath();ctx.ellipse(sx*14+6,-4,6,8,0,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(sx*14+4,-7,2.4,0,7);ctx.fill()}
  ctx.fillStyle='#ff8a9a';ctx.beginPath();ctx.moveTo(2,8);ctx.lineTo(12,8);ctx.lineTo(7,13);ctx.fill();
  ctx.strokeStyle='#2f6fd6';ctx.lineWidth=7;ctx.beginPath();ctx.arc(0,4,34,.7,2.4);ctx.stroke();ctx.fillStyle='#ffd23f';ctx.beginPath();ctx.arc(-2,38,6,0,7);ctx.fill();
  ctx.restore();ctx.restore()}
function e1Cup(x,y,s,rot,water){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);
  ctx.fillStyle='rgba(200,230,255,.55)';ctx.strokeStyle='#7fa6c9';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-26,-70);ctx.lineTo(26,-70);ctx.lineTo(20,0);ctx.lineTo(-20,0);ctx.closePath();ctx.fill();ctx.stroke();
  if(water){ctx.fillStyle='rgba(90,170,255,.55)';ctx.beginPath();ctx.moveTo(-23,-40);ctx.lineTo(23,-40);ctx.lineTo(20,0);ctx.lineTo(-20,0);ctx.closePath();ctx.fill()}
  ctx.fillStyle='rgba(255,255,255,.5)';ctx.fillRect(-16,-62,6,50);ctx.restore()}
function e1Bowl(x,y,s,u){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle='#e8e2d6';ctx.strokeStyle='#8a7f70';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-56,-40);ctx.quadraticCurveTo(-50,4,0,4);ctx.quadraticCurveTo(50,4,56,-40);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle='#f2c14e';ctx.beginPath();ctx.ellipse(0,-40,54,12,0,0,7);ctx.fill();ctx.strokeStyle='#d99a2a';ctx.lineWidth=3;for(let k=-40;k<40;k+=12){ctx.beginPath();ctx.moveTo(k,-42);ctx.quadraticCurveTo(k+6,-48,k+12,-40);ctx.stroke()}
  ctx.strokeStyle='#5e3b25';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(20,-60);ctx.lineTo(60,-110);ctx.moveTo(30,-56);ctx.lineTo(72,-100);ctx.stroke();
  ctx.strokeStyle='rgba(255,255,255,.35)';ctx.lineWidth=5;for(const k of[-20,4]){ctx.beginPath();ctx.moveTo(k,-60);ctx.bezierCurveTo(k-12,-80-Math.sin(u*3+k)*6,k+12,-100,k,-124-((u*20)%20));ctx.stroke()}
  ctx.restore()}
function e1PhoneSmall(x,y,s,lit,buzz){ctx.save();ctx.translate(x+(buzz?Math.sin(performance.now()/16)*3:0),y);ctx.scale(s,s);ctx.fillStyle='#14161f';rr(-26,-8,52,16,5);ctx.fill();ctx.fillStyle=lit?'#8fa4ff':'#2a2e40';rr(-22,-6,44,12,3);ctx.fill();if(lit)glow(0,0,80,'rgba(140,160,255,A)',.6);ctx.restore()}
// sala do apartamento. o: {night, cupRot, cupX, cupY, cupFall, cat, tvOn, day}
function e1Apto(u,o){o=o||{};const night=!o.day;
  ctx.fillStyle=night?lg(0,H,['#20244c','#2a2f5e','#20244c']):lg(0,H,['#f3dcc0','#ecd0ae','#e3c19a']);ctx.fillRect(0,0,W,1300);
  // rodapé + chão
  ctx.fillStyle=night?'#2e2440':'#b88a5e';ctx.fillRect(0,1300,W,H-1300);ctx.fillStyle=night?'rgba(255,255,255,.04)':'rgba(0,0,0,.06)';for(let x=-200;x<W;x+=140){ctx.beginPath();ctx.moveTo(x,1300);ctx.lineTo(x-200,H);ctx.lineTo(x-190,H);ctx.lineTo(x+8,1300);ctx.fill()}
  ctx.fillStyle=night?'#191c3a':'#d9b892';ctx.fillRect(0,1290,W,14);
  // janela
  ctx.save();rr(70,330,330,470,12);ctx.clip();ctx.fillStyle=night?lg(330,800,['#0a1235','#1b2459']):lg(330,800,['#8fd0ff','#cfeeff']);ctx.fillRect(70,330,330,470);
  const r=rng(12);for(let i=0;i<12;i++){const bx=70+i*30,bh=90+r()*220;ctx.fillStyle=night?'#0b1030':'#9fb6cf';ctx.fillRect(bx,800-bh,28,bh);if(night)for(let j=0;j<6;j++)if(r()<.45){ctx.fillStyle='rgba(255,210,120,.85)';ctx.fillRect(bx+6+(j%2)*10,800-bh+14+j*24,6,9)}}
  if(night){ctx.fillStyle='#f4f1d8';ctx.beginPath();ctx.arc(330,400,30,0,7);ctx.fill();ctx.fillStyle='#152054';ctx.beginPath();ctx.arc(318,392,27,0,7);ctx.fill()}
  ctx.restore();ctx.strokeStyle=night?'#3a4380':'#fff';ctx.lineWidth=14;rr(70,330,330,470,12);ctx.stroke();ctx.beginPath();ctx.moveTo(235,330);ctx.lineTo(235,800);ctx.stroke();
  // quadro + relógio de parede
  ctx.fillStyle=night?'#3b4277':'#c98b5e';rr(560,420,190,140,8);ctx.fill();ctx.fillStyle=night?'#5865b0':'#ffb36b';ctx.beginPath();ctx.moveTo(580,540);ctx.lineTo(640,470);ctx.lineTo(690,520);ctx.lineTo(730,490);ctx.lineTo(730,540);ctx.closePath();ctx.fill();
  // TV no rack (direita)
  ctx.fillStyle='#14161f';rr(800,640,250,160,10);ctx.fill();ctx.fillStyle=o.tvOn?lg(650,790,['#4a6bd8','#8a5bd8']):'#1f2333';rr(812,652,226,136,6);ctx.fill();
  if(o.tvOn){glow(925,720,320,'rgba(120,140,255,A)',.25+.08*Math.sin(u*7))}
  ctx.fillStyle=night?'#3a2a3a':'#8a5a3a';rr(780,800,290,90,8);ctx.fill();
  // sofá
  ctx.fillStyle=night?'#4b3f7a':'#5f7fd6';rr(640,1000,450,200,40);ctx.fill();ctx.fillStyle=night?'#5a4c8f':'#7393e6';rr(620,1080,490,160,40);ctx.fill();ctx.fillStyle='rgba(0,0,0,.18)';ctx.fillRect(640,1236,450,60);
  // abajur aceso
  if(night){glow(560,900,380,'rgba(255,200,120,A)',.28);ctx.fillStyle='#ffd58a';ctx.beginPath();ctx.moveTo(520,860);ctx.lineTo(600,860);ctx.lineTo(585,800);ctx.lineTo(535,800);ctx.closePath();ctx.fill();ctx.fillStyle='#3a2a20';ctx.fillRect(556,860,8,300);ctx.fillRect(530,1160,60,10)}
}
function e1Table(x,y,s,o){o=o||{};ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  ctx.fillStyle=E1.woodD;ctx.fillRect(-170,0,22,190);ctx.fillRect(148,0,22,190);ctx.fillStyle=E1.wood;rr(-200,-24,400,34,10);ctx.fill();ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(-190,-20,380,6);
  if(o.bowl)e1Bowl(-90,-24,.9,o.u||0);if(o.phone)e1PhoneSmall(-10,-28,1.1,o.phoneLit,o.buzz);
  ctx.restore()}
// chat do celular
function e1Chat(u,msgs,o){o=o||{};ctx.fillStyle='#0f1220';ctx.fillRect(-210,-440,420,880);
  ctx.fillStyle='#1b2034';ctx.fillRect(-210,-440,420,130);ctx.fillStyle=o.future?'#ff7a33':'#5a6178';ctx.beginPath();ctx.arc(-150,-360,34,0,7);ctx.fill();txtC('?',-150,-358,'900 38px Inter','#fff');
  ctx.textAlign='left';ctx.textBaseline='alphabetic';ctx.font='800 24px Inter';ctx.fillStyle='#fff';ctx.fillText(o.future?'Você (do futuro)':'+55 11 9????-????',-100,-370);ctx.font='600 18px Inter';ctx.fillStyle=o.future?'#7fd3ff':'#9aa3c0';ctx.fillText(o.future?'mesmo número':'número desconhecido',-100,-340);
  let y=-270;for(const m of msgs){if(m.k<=0)continue;const k=Math.min(1,m.k);ctx.save();ctx.globalAlpha=k;ctx.translate(0,(1-easeBack(k))*24);
    ctx.font='700 27px Inter';const lw=Math.max(...m.l.map(s=>ctx.measureText(s).width));const h=32*m.l.length+44;
    ctx.fillStyle=m.red?'#5a1d2a':'#262c46';rr(-186,y,Math.max(lw+52,170),h,24);ctx.fill();if(m.red){ctx.strokeStyle='#ff4d6d';ctx.lineWidth=3;ctx.stroke()}
    ctx.fillStyle='#fff';ctx.textAlign='left';m.l.forEach((s,i)=>ctx.fillText(s,-162,y+40+i*32));ctx.font='600 16px Inter';ctx.fillStyle='rgba(255,255,255,.5)';ctx.textAlign='right';ctx.fillText(m.time||'23:59',-186+Math.max(lw+52,170)-14,y+h-12);
    ctx.restore();y+=h+18}
  if(o.typing){ctx.fillStyle='#262c46';rr(-186,y,120,60,30);ctx.fill();for(let k=0;k<3;k++){ctx.fillStyle=`rgba(255,255,255,${(.4+.6*Math.max(0,Math.sin(u*9-k))).toFixed(2)})`;ctx.beginPath();ctx.arc(-154+k*28,y+30,8,0,7);ctx.fill()}}
}
function e1PhoneScene(u,draw,o){o=o||{};ctx.fillStyle='#070914';ctx.fillRect(0,0,W,H);glow(540,900,700,o.red?'rgba(255,70,90,A)':'rgba(90,110,255,A)',.3);
  const gl=o.glitch&&(Math.floor(u*14)%9===0)?10:0;const bz=o.buzz?Math.sin(u*80)*6:0;
  tzPhone(540+gl+bz,920,o.s||1.3,o.rot||0,()=>draw());
  if(gl){ctx.fillStyle='rgba(255,60,120,.15)';ctx.fillRect(0,700+((u*900)%600),W,36)}}
const M1={l:['Oi, Matheus. Sou eu.','Você, daqui a 10 anos.']},M2={l:['Agora o copo vai','cair da mesa.']},M3={l:['Só consigo falar com','você às 23:59.']},M4={l:['Amanhã, NÃO abre','a porta. Aconteça o','que acontecer.'],red:1},M5m={l:['Matheus, abre.','É importante.'],time:'19:04',red:1};
const mm=(m,k)=>Object.assign({},m,{k});
// porta de entrada
function e1Door(u,o){o=o||{};ctx.fillStyle=o.night===false?'#e9d2b4':lg(0,H,['#232850','#2c3262']);ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#2e2440';ctx.fillRect(0,1500,W,H-1500);
  const sh=o.knock?Math.sin(u*90)*7*o.knock:0;ctx.save();ctx.translate(sh,0);
  ctx.fillStyle='#3a2418';rr(250,260,580,1250,10);ctx.fill();ctx.fillStyle='#6b4026';rr(280,290,520,1220,8);ctx.fill();
  ctx.fillStyle='rgba(0,0,0,.18)';rr(330,350,420,450,8);ctx.fill();rr(330,860,420,560,8);ctx.fill();ctx.fillStyle='rgba(255,255,255,.06)';rr(336,356,408,12,4);ctx.fill();rr(336,866,408,12,4);ctx.fill();
  ctx.fillStyle='#d8b35a';ctx.beginPath();ctx.arc(720,880,26,0,7);ctx.fill();ctx.fillStyle='#b8933a';rr(700,900,40,90,10);ctx.fill();
  ctx.fillStyle='#111';ctx.beginPath();ctx.arc(540,560,16,0,7);ctx.fill();ctx.strokeStyle='#d8b35a';ctx.lineWidth=6;ctx.stroke();
  // luz por baixo da porta
  ctx.fillStyle=`rgba(255,220,150,${o.under?.55:0})`;ctx.fillRect(280,1500,520,10);if(o.under){glow(540,1510,260,'rgba(255,210,140,A)',.35)}
  // sombra de pés por baixo
  if(o.feet){ctx.fillStyle='rgba(0,0,0,.8)';ctx.fillRect(440,1500,50,10);ctx.fillRect(590,1500,50,10)}
  ctx.restore()}
function e1Delivery(cx,cy,s,u,talk){ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);
  ctx.fillStyle='#3e4c6b';ctx.beginPath();ctx.moveTo(-120,260);ctx.quadraticCurveTo(-130,60,-80,30);ctx.lineTo(80,30);ctx.quadraticCurveTo(130,60,120,260);ctx.closePath();ctx.fill();
  ctx.fillStyle='#e0b48a';ctx.fillRect(-20,-10,40,50);ctx.beginPath();ctx.ellipse(0,-70,62,72,0,0,7);ctx.fill();
  ctx.fillStyle='rgba(0,0,0,.55)';ctx.beginPath();ctx.ellipse(0,-90,62,36,0,0,7);ctx.fill();
  ctx.fillStyle='#c33';ctx.beginPath();ctx.ellipse(0,-112,66,40,0,Math.PI,0);ctx.fill();ctx.fillRect(-66,-114,132,14);ctx.beginPath();ctx.ellipse(18,-100,74,16,0,0,7);ctx.fill();
  ctx.fillStyle='#4a1c18';ctx.beginPath();ctx.ellipse(0,-30,16,4+(talk?Math.abs(Math.sin(u*18))*10:0),0,0,7);ctx.fill();
  ctx.fillStyle='#c79a5e';rr(-110,110,220,150,10);ctx.fill();ctx.fillStyle='#a87c42';ctx.fillRect(-110,170,220,12);ctx.fillStyle='#fff';rr(-30,200,70,40,4);ctx.fill();
  ctx.fillStyle='#e0b48a';ctx.beginPath();ctx.ellipse(-112,180,20,24,0,0,7);ctx.ellipse(112,180,20,24,0,0,7);ctx.fill();ctx.restore()}
function e1Peep(u,talk){ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);ctx.save();ctx.beginPath();ctx.arc(540,880,470,0,7);ctx.clip();
  ctx.translate(540,880);ctx.scale(1.18,1.18);ctx.translate(-540,-880);
  ctx.fillStyle=lg(400,1400,['#c9b98f','#a89566']);ctx.fillRect(0,0,W,H);ctx.fillStyle='#7d6a48';ctx.beginPath();ctx.moveTo(0,1250);ctx.lineTo(W,1250);ctx.lineTo(W,H);ctx.lineTo(0,H);ctx.fill();
  ctx.fillStyle='#6b5a3c';ctx.fillRect(110,500,140,750);ctx.fillRect(830,500,140,750);glow(540,420,300,'rgba(255,240,200,A)',.5);
  e1Delivery(540,900,1.5+.02*Math.sin(u*2),u,talk);ctx.restore();
  const g=ctx.createRadialGradient(540,880,200,540,880,470);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.92)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(540,880,470,0,7);ctx.fill();
  ctx.strokeStyle='#222';ctx.lineWidth=20;ctx.beginPath();ctx.arc(540,880,470,0,7);ctx.stroke()}
function e1Bubble(x,y,s,lines,red,k,tag){if(k<=0)return;ctx.save();ctx.translate(x,y);const z=s*easeBack(Math.min(1,k));ctx.scale(z,z);ctx.globalAlpha=Math.min(1,k*2);
  ctx.font='800 34px Inter';const w=Math.max(...lines.map(l=>ctx.measureText(l).width))+60,h=lines.length*42+50;ctx.fillStyle=red?'#5a1d2a':'#262c46';rr(-w/2,-h/2,w,h,26);ctx.fill();ctx.strokeStyle=red?'#ff4d6d':'#7fd3ff';ctx.lineWidth=4;ctx.stroke();
  ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';lines.forEach((l,i)=>ctx.fillText(l,0,-h/2+46+i*42));if(tag){ctx.font='800 22px Inter';ctx.fillStyle=red?'#ff9aaa':'#7fd3ff';ctx.fillText(tag,0,-h/2-24)}ctx.restore()}
function e1Choice(k,letter,txt,col,y){if(k<=0)return;ctx.save();ctx.translate(W/2,y);const s=easeBack(Math.min(1,k));ctx.scale(s,s);ctx.fillStyle=col;rr(-460,-110,920,220,40);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=8;ctx.stroke();
  ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(-350,0,74,0,7);ctx.fill();txtC(letter,-350,4,'700 100px Oswald',col);
  ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillStyle='#fff';ctx.font='700 56px Oswald';txt.forEach((l,i)=>ctx.fillText(l,-250,(i-(txt.length-1)/2)*62));ctx.restore()}

const HUD1=['','','','NOITE 1 · 23:40','NOITE 1 · 23:41','NOITE 1 · 23:59','NOITE 1 · 23:59','NOITE 1 · 23:59','NOITE 1 · 23:59','NOITE 1 · 23:59','NOITE 1 · 23:59','NOITE 1 · 23:59','NOITE 1 · 23:59','NOITE 1 · 23:59','NOITE 1 · 23:59','NOITE 1 · 23:59','NOITE 1 · 00:00','NOITE 1 · 03:12','DIA 2 · 14:00','DIA 2 · 14:20','DIA 2 · 19:00','DIA 2 · 19:00','DIA 2 · 19:01','DIA 2 · 19:02','DIA 2 · 19:02','DIA 2 · 19:03','DIA 2 · 19:04','DIA 2 · 19:04','DIA 2 · 19:04','DIA 2 · 19:04','DIA 2 · 19:05','DIA 2 · 19:05','','',''];
function EP1(t){const L=window.LINES,MK=window.MK||{};const st=i=>i===0?0:L[i].a-.12;const en=i=>i<L.length-1?L[i+1].a-.12:99;
  let i=0;for(let k=0;k<L.length;k++)if(t>=st(k))i=k;
  if(i<=2){TZ(t);e1Hud('');return}
  const a=st(i),b=Math.min(en(i),a+30),u=t-a,D=b-a,p=clamp(u/D);
  ctx.save();
  const bl=(sd)=>tzBlink(t,sd);
  switch(i){
  case 3:{const z=1+.03*p;ctx.translate(540,1100);ctx.scale(z,z);ctx.translate(-540,-1100);e1Apto(t,{tvOn:1});
    matheus5(360,1500,1.35,Object.assign({},M5POSES.acenando,{t,armR:[150+Math.sin(t*7)*16,30,'open'],blink:bl(1)}));
    ctx.restore();ctx.save();tzKicker('MATHEUS • 24 ANOS',330,seg(u,.2,.5),'#ff7a33');break}
  case 4:{e1Apto(t,{tvOn:1});e1Table(700,1360,1,{bowl:1,phone:1,u:t});
    matheus5(330,1500,1.3,{expr:'feliz',t,head:-6,look:1,armL:[14,-30,'rest'],armR:[40,-40,'rest'],blink:bl(2)});
    tzKicker('UMA NOITE NORMAL',330,seg(u,.1,.4),'#4f5bd5');break}
  case 5:{ctx.fillStyle='#07080f';ctx.fillRect(0,0,W,H);const fl=u>D*.5;const z=1+.06*p;ctx.translate(540,900);ctx.scale(z,z);ctx.translate(-540,-900);
    ctx.fillStyle='#111320';rr(140,640,800,480,40);ctx.fill();ctx.strokeStyle='#2a2e44';ctx.lineWidth=10;ctx.stroke();
    txtC(fl?'23:59':'23:58',540,890,'700 300px Oswald','#ff3b3b');glow(540,880,520,'rgba(255,50,50,A)',.35);
    const f=seg(u,D*.5,D*.5+.25);if(f>0&&f<1){ctx.fillStyle=`rgba(255,80,80,${((1-f)*.35).toFixed(2)})`;ctx.fillRect(0,0,W,H)}break}
  case 6:{e1PhoneScene(u,()=>{tzLock(u,'23:59');tzNotif(-30,seg(u,.25,.6),'+55 11 9????-????','Número desconhecido')},{buzz:u<1.2,s:1.25});break}
  case 7:{e1PhoneScene(u,()=>e1Chat(u,[mm(M1,seg(u,.5,.8))],{typing:u<.5}));break}
  case 8:{e1Apto(t,{tvOn:1});matheus5(540,1900,2.4,{expr:'rindo',t,head:Math.sin(t*10)*3,armL:[14,-30,'rest'],armR:[14,-30,'rest']});
    tzKicker('TROTE?',330,seg(u,.2,.5),'#5a6178');break}
  case 9:{e1PhoneScene(u,()=>e1Chat(u,[mm(M1,1),mm(M2,seg(u,.35,.65))],{typing:u<.35}),{buzz:u<.4});break}
  case 10:{e1Apto(t,{tvOn:1});const z=1.25;ctx.translate(540,1300);ctx.scale(z,z);ctx.translate(-540,-1300);
    matheus5(300,1500,1.3,{expr:'desconfiado',t,head:8,look:1,armL:[14,-30,'rest'],armR:[14,-30,'rest'],blink:0});e1Table(700,1360,1,{bowl:1,phone:1,u:t});e1Cup(820,1336,1,Math.sin(t*1.5)*.01,1);
    // foco no copo
    ctx.restore();ctx.save();const r=seg(u,.2,.8);ctx.strokeStyle=`rgba(255,210,80,${(.8*r).toFixed(2)})`;ctx.lineWidth=6;ctx.setLineDash([16,12]);ctx.beginPath();ctx.arc(540+(820-540)*1.25,1300+(1290-1300)*1.25,110,0,7);ctx.stroke();ctx.setLineDash([]);break}
  case 11:{e1Apto(t,{tvOn:1});const z=1.25;ctx.translate(540,1300);ctx.scale(z,z);ctx.translate(-540,-1300);
    const J=MK.cai!=null?MK.cai-a:D*.55;
    matheus5(300,1500,1.3,{expr:u<J?'desconfiado':'assustado',t,head:8,look:1,armL:u<J?[14,-30,'rest']:[38,-150,'open'],armR:u<J?[14,-30,'rest']:[38,-150,'open'],blink:0});
    e1Table(700,1360,1,{bowl:1,phone:1,u:t});
    // copo cai
    const cf=seg(u,J-.1,J+.45);const cx=820+cf*70,cy=1336+(cf<.3?0:Math.pow((cf-.3)/.7,2)*160),rot=Math.min(1.57,cf*3);e1Cup(cx,cy,1,rot,cf<.25);
    if(cf>.25){ctx.fillStyle='rgba(90,170,255,.5)';ctx.beginPath();ctx.ellipse(860+cf*60,1342+(cf>.9?150:0),40+cf*80,8+cf*6,0,0,7);ctx.fill()}
    // gato pulando da direita
    const jq=seg(u,J-1.75,J-.5);const cxat=lerp(1250,700,easeOut(jq)),cyat=lerp(1700,1336,easeOut(jq))-Math.sin(jq*Math.PI)*220;if(jq>0)e1Cat(cxat,cyat,1.15,-1,{leap:jq<1?1:0,t});
    ctx.restore();ctx.save();if(u>J)tzTitle('CAIU!',420,seg(u,J,J+.25),130,'#ffd23f');break}
  case 12:{ctx.fillStyle=lg(0,H,['#1b1f45','#2a2f5e']);ctx.fillRect(0,0,W,H);tzRays(540,900,t,'rgba(255,255,255,1)',.05);
    matheus5(540,2150,3.1,{expr:'assustado',t,blink:0});tzTitle('COMO ELE SABIA?',400,seg(u,.3,.6),100,'#7fd3ff');break}
  case 13:{e1PhoneScene(u,()=>e1Chat(u,[mm(M1,1),mm(M2,1)],{typing:1}),{buzz:u<.5});break}
  case 14:{e1PhoneScene(u,()=>e1Chat(u,[mm(M1,1),mm(M2,1),mm(M3,seg(u,.05,.35))]));break}
  case 15:{e1PhoneScene(u,()=>e1Chat(u,[mm(M2,1),mm(M3,1),mm(M4,seg(u,.05,.35))]),{glitch:1,red:1});break}
  case 16:{const off=seg(u,.1,.35);e1PhoneScene(u,()=>{e1Chat(u,[mm(M3,1),mm(M4,1)]);ctx.fillStyle=`rgba(0,0,0,${off})`;ctx.fillRect(-210,-440,420,880)});
    if(u>D*.5){tzTitle('00:00',420,seg(u,D*.5,D*.5+.25),130,'#ff3b3b')}break}
  case 17:{tzRoom(t,'03:12');matheus5(250,1390,1.3,{expr:'triste',t,armL:[14,-30,'rest'],armR:[14,-30,'rest'],blink:bl(4)});tzKicker('QUASE NÃO DORME',330,seg(u,.2,.5),'#4f5bd5');break}
  case 18: case 19:{e1Apto(t,{day:1});
    // mesa com notebook
    ctx.fillStyle=E1.woodD;ctx.fillRect(560,1180,22,200);ctx.fillRect(960,1180,22,200);ctx.fillStyle=E1.wood;rr(530,1150,480,36,10);ctx.fill();
    ctx.fillStyle='#2a2e3a';ctx.beginPath();ctx.moveTo(660,1150);ctx.lineTo(880,1150);ctx.lineTo(860,960);ctx.lineTo(680,960);ctx.closePath();ctx.fill();ctx.fillStyle='#9fc4ff';ctx.beginPath();ctx.moveTo(672,1140);ctx.lineTo(868,1140);ctx.lineTo(850,972);ctx.lineTo(690,972);ctx.closePath();ctx.fill();
    if(i===19){ctx.fillStyle='#fff';for(let k=0;k<5;k++)ctx.fillRect(700,990+k*28,(60+((t*80+k*40)%100)),8)}
    e1Cup(950,1150,.7,0,1);
    matheus5(380,1500,1.3,{expr:i===18?'pensativo':'feliz',t,head:i===18?8:4,look:1,armL:[14,-30,'rest'],armR:i===19?[60,-60,'rest']:[14,-30,'rest'],blink:bl(5)});
    tzKicker(i===18?'NO DIA SEGUINTE':'HOME OFFICE',330,seg(u,.1,.4),'#ff7a33');break}
  case 20:{const ks=[MK.toc1,MK.toc2,MK.toc3].map(x=>x!=null?x-a:null);let kn=0;ks.forEach((k,j)=>{const kk=k??(D*.4+j*.4);if(u>=kk)kn=Math.max(kn,1-seg(u,kk,kk+.22))});
    e1Door(u,{knock:kn*(u>((ks[0]??D*.4))?1:0),under:1,feet:1});
    ks.forEach((k,j)=>{const kk=k??(D*.4+j*.4);if(u>=kk)tzTitleAt2('TOC',[300,540,780][j],[700,560,720][j],seg(u,kk,kk+.2),[-.15,.05,.18][j])});break}
  case 21:{e1Apto(t,{});
    // porta na direita
    ctx.fillStyle='#3a2418';rr(760,560,300,740,8);ctx.fill();ctx.fillStyle='#6b4026';rr(776,576,268,724,6);ctx.fill();ctx.fillStyle='#d8b35a';ctx.beginPath();ctx.arc(800,950,14,0,7);ctx.fill();ctx.fillStyle='rgba(255,220,150,.6)';ctx.fillRect(776,1296,268,6);
    const kn=Math.max(0,Math.sin(u*14))*(u<1.2?1:0);ctx.save();ctx.translate(kn*4,0);ctx.restore();
    matheus5(330,1500,1.35,{expr:'surpreso',t,head:6,look:1,armL:[14,-30,'rest'],armR:[14,-30,'rest'],blink:0});break}
  case 22:{ctx.fillStyle=lg(0,H,['#1b1f45','#2a2f5e']);ctx.fillRect(0,0,W,H);matheus5(540,2150,3.1,{expr:'assustado',t,blink:0});
    e1Bubble(540,330,1.25,['NÃO ABRE A PORTA'],1,seg(u,MK.naoabre!=null?MK.naoabre-a-.1:D*.45,(MK.naoabre!=null?MK.naoabre-a-.1:D*.45)+.3),'MENSAGEM DE ONTEM');break}
  case 23: case 24:{e1Peep(t,i===24);if(i===23)tzKicker('OLHO MÁGICO',140,seg(u,.1,.4),'#5a6178');else tzKicker('“ENTREGA PRO MATHEUS!”',140,seg(u,.05,.3),'#c33');break}
  case 25:{const kk=.5;e1Door(u,{knock:(1-seg(u,kk,kk+.4))*(u>kk?1:0),under:1,feet:1});if(u>kk)tzTitleAt2('TOC TOC',540,640,seg(u,kk,kk+.2),0);
    ctx.save();matheus5(140,1500,.95,{expr:'assustado',t,head:6,look:1,armL:[38,-150,'open'],armR:[38,-150,'open'],blink:0});ctx.restore();break}
  case 26:{e1Apto(t,{});ctx.translate(540,1400);ctx.scale(1.8,1.8);ctx.translate(-540,-1400);e1Table(540,1400,1,{phone:1,phoneLit:1,buzz:1});ctx.restore();ctx.save();
    if(u>.2){const q=(u*2.2)%1;ctx.strokeStyle=`rgba(180,200,255,${(.5*(1-q)).toFixed(2)})`;ctx.lineWidth=6;for(const sd of[-1,1]){ctx.beginPath();ctx.arc(540+sd*(70+q*60),1340,40+q*40,sd<0?Math.PI*.7:-Math.PI*.3,sd<0?Math.PI*1.3:Math.PI*.3);ctx.stroke()}}break}
  case 27:{e1PhoneScene(u,()=>{tzLock(u,'19:04');tzNotif(-30,seg(u,.1,.4),'Você (do futuro)','1 mensagem')},{buzz:u<.6,s:1.25});tzKicker('FORA DO HORÁRIO!',200,seg(u,D*.35,D*.35+.3),'#e0463d');break}
  case 28:{e1PhoneScene(u,()=>e1Chat(u,[mm(M3,1),mm(M4,1),mm(M5m,seg(u,.3,.6))],{future:1,typing:u<.3}),{glitch:1,red:1});break}
  case 29:{e1PhoneScene(u,()=>e1Chat(u,[mm(M3,1),mm(M4,1),mm(M5m,1)],{future:1}),{s:1.3+.2*easeOut(seg(u,0,1.2))});ctx.save();ctx.restore();
    if(MK.futuro2!=null&&t>MK.futuro2-.05)tzTitle('DO FUTURO',215,seg(t,MK.futuro2-.05,MK.futuro2+.25),100,'#7fd3ff');break}
  case 30: case 31:{ctx.fillStyle=lg(0,H,['#11163a','#1d2350']);ctx.fillRect(0,0,W,H);tzStars(t,7,50);
    if(i===31){matheus5(540,1700,1.5,{expr:'desconfiado',t,look:Math.sin(u*3)>0?-1:1,head:Math.sin(u*3)>0?6:-6,armL:[14,-30,'rest'],armR:[14,-30,'rest'],blink:bl(6)})}
    const y0=i===30?720:430;e1Bubble(i===30?540:290,y0,i===30?1.2:.9,['NÃO ABRE','A PORTA'],0,i===30?seg(u,.05,.35):1,'ONTEM • 23:59');
    e1Bubble(i===30?540:790,i===30?1150:y0,i===30?1.2:.9,['ABRE.','É IMPORTANTE.'],1,i===30?seg(u,.6,.9):1,'HOJE • 19:04');
    if(i===31)tzTitle('QUAL É A VERDADEIRA?',780,seg(u,.2,.5),84,'#ffd23f');break}
  case 32: case 33: case 34:{ctx.fillStyle=lg(0,H,['#0b0f26','#1a1446','#2b0f3a']);ctx.fillRect(0,0,W,H);tzStars(t,8,70);
    if(i<34){e1Choice(i===32?seg(u,.05,.35):1,'A',['OBEDECER','e NÃO abrir'],'#2bb673',560);e1Choice(i===33?seg(u,.05,.35):(i>33?1:0),'B',['DESAFIAR','e ABRIR a porta'],'#e0463d',860);
      matheus5(540,1480,.9,{expr:'desconfiado',t,look:i===32?-1:1,armL:[14,-30,'rest'],armR:[14,-30,'rest'],blink:bl(7)});tzKicker('VOCÊ DECIDE',330,seg(i===32?u:9,.05,.35),'#ff7a33')}
    else{const ec=seg(t,(MK.fim||97.7),(MK.fim||97.7)+.4);if(ec<1){ctx.save();ctx.globalAlpha=1-ec;e1Choice(1,'A',['OBEDECER','e NÃO abrir'],'#2bb673',460);e1Choice(1,'B',['DESAFIAR','e ABRIR a porta'],'#e0463d',740);ctx.restore()}ctx.fillStyle=`rgba(8,10,25,${(ec*.92).toFixed(2)})`;ctx.fillRect(0,0,W,H);
      matheus5(540,1460,1.0,Object.assign({},M5POSES.acenando,{t,armR:[150+Math.sin(t*7)*16,30,'open'],blink:bl(8)}));
      if(ec>0){tzKicker('E SE O SEU CELULAR RECEBESSE',230,ec,'#4f5bd5');tzKicker('MENSAGENS DO FUTURO?',305,ec,'#4f5bd5');tzTitle('EP. 2 • EM BREVE',460,ec,96,'#ff7a33');tzKicker('SEGUE PRA NÃO PERDER!',580,ec,'#2b1b12')}
      else tzKicker('COMENTA A OU B',260,seg(u,.05,.35),'#ff7a33')}
    break}
  }
  ctx.restore();
  vignette(.45);e1Hud(HUD1[i]);tzCaption(t);
}
function tzTitleAt2(txt,x,y,k,rot){if(k<=0)return;ctx.save();ctx.translate(x,y);ctx.rotate(rot);tzTitleAt(txt,k);ctx.restore()}
