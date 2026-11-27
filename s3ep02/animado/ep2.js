// ===== S3 EP2 — "Quem mora na 303?" (venceu A: ele NÃO abriu a porta) =====
// usa teaser.js (tz*), m5/m6/m7.js, e1flat.js e ep1.js (helpers e1*). window.LINES=[{a,b,txt}]
function tzLock(u,hh){ctx.fillStyle=lg(-440,440,['#1b2a6b','#3a1f6e','#0e1433']);ctx.fillRect(-210,-440,420,880);
  glow(80,-200,380,'rgba(120,140,255,A)',.35);
  txtC(hh,0,-250,'700 120px Oswald','#ffffff');txtC(hh.startsWith('00:')?'sábado, 28 de novembro':'sexta-feira, 27 de novembro',0,-165,'600 24px Inter','rgba(255,255,255,.8)')}
// chat com mensagens enviadas pelo Matheus (me:1, à direita)
function e2Chat(u,msgs,o){o=o||{};ctx.fillStyle='#0f1220';ctx.fillRect(-210,-440,420,880);
  ctx.fillStyle='#1b2034';ctx.fillRect(-210,-440,420,130);ctx.fillStyle='#ff7a33';ctx.beginPath();ctx.arc(-150,-360,34,0,7);ctx.fill();txtC('?',-150,-358,'900 38px Inter','#fff');
  ctx.textAlign='left';ctx.textBaseline='alphabetic';ctx.font='800 24px Inter';ctx.fillStyle='#fff';ctx.fillText('Você (do futuro)',-100,-370);ctx.font='600 18px Inter';ctx.fillStyle=o.online?'#3ddc97':'#7fd3ff';ctx.fillText(o.online?'online':'mesmo número',-100,-340);
  let y=-270;for(const m of msgs){if(m.k<=0)continue;const k=Math.min(1,m.k);ctx.save();ctx.globalAlpha=Math.min(1,k*2);ctx.translate(0,(1-easeBack(k))*24);
    ctx.font='700 27px Inter';const lw=Math.max(...m.l.map(s=>ctx.measureText(s).width));const h=32*m.l.length+44;const bw=Math.max(lw+52,170);const x0=m.me?186-bw:-186;
    ctx.fillStyle=m.me?'#1f6f54':(m.red?'#5a1d2a':'#262c46');rr(x0,y,bw,h,24);ctx.fill();if(m.red){ctx.strokeStyle='#ff4d6d';ctx.lineWidth=3;ctx.stroke()}
    ctx.fillStyle='#fff';ctx.textAlign='left';let n=m.type!=null?Math.floor(m.type*m.l.join('').length):1e9;m.l.forEach((s,i)=>{ctx.fillText(s.slice(0,Math.max(0,n)),x0+24,y+40+i*32);n-=s.length});
    ctx.font='600 16px Inter';ctx.fillStyle='rgba(255,255,255,.5)';ctx.textAlign='right';ctx.fillText((m.time||'23:59')+(m.me?' ✓✓':''),x0+bw-14,y+h-12);
    ctx.restore();y+=h+18}
  if(o.typing){ctx.fillStyle='#262c46';rr(-186,y,120,60,30);ctx.fill();for(let k=0;k<3;k++){ctx.fillStyle=`rgba(255,255,255,${(.4+.6*Math.max(0,Math.sin(u*9-k))).toFixed(2)})`;ctx.beginPath();ctx.arc(-154+k*28,y+30,8,0,7);ctx.fill()}}
  if(o.kb){ctx.fillStyle='#1b2034';ctx.fillRect(-210,250,420,190);ctx.fillStyle='#262c46';rr(-196,190,392,50,25);ctx.fill();
    for(let r=0;r<3;r++)for(let c=0;c<9;c++){const on=Math.floor(u*12)%27===r*9+c;fRect(-196+c*44,262+r*56,38,46,on?'#5a6390':'#2e3450',8)}}}
const F1={l:['Você não abriu.','Muito bem.']},ME1={l:['Foi você que mandou','mensagem às 19:04?'],me:1},F2={l:['Não. Eu só consigo','falar às 23:59.']},F3={l:['E fica LONGE','da 303.'],red:1},F4={l:['Não acredita nele.','Vai na 303.'],red:1,time:'00:01'};
// entregador DE COSTAS (rosto nunca aparece). o:{walk, box, bend}
function e2CourierBack(x,y,s,o){o=o||{};const w=o.walk,sw=w==null?0:Math.sin(w),bob=w==null?0:Math.abs(Math.cos(w))*6;ctx.save();ctx.translate(x,y-bob*s);ctx.scale(s,s);
  ctx.fillStyle='rgba(0,0,0,.25)';ctx.beginPath();ctx.ellipse(0,bob,95,14,0,0,7);ctx.fill();
  // pernas
  fRect(-46,-200+sw*6,38,200-sw*6,'#262b40',14);fRect(8,-200-sw*6,38,200+sw*6,'#2e3450',14);
  fRect(-52,-22+sw*6,50,24,'#e9e9f0',10);fRect(4,-22-sw*6,50,24,'#e9e9f0',10);
  // jaqueta
  const bd=o.bend||0;ctx.save();ctx.translate(0,-200);ctx.rotate(-bd*.25);
  if(o.box){fRect(-150,-150,300,90,'#c79a5e',8);fRect(-150,-114,300,12,'#a87c42')}
  fPoly([[-92,0],[92,0],[100,-250],[60,-290],[-60,-290],[-100,-250]],'#3e4c6b');fRect(-92,-20,184,26,'#34405c',10);
  fPoly([[-20,-280],[20,-280],[14,-200],[-14,-200]],'#34405c');
  // braços (balançam ao andar; segurando a caixa à frente quando box)
  if(o.box){fRect(-118,-260,40,150,'#3e4c6b',18);fRect(78,-260,40,150,'#3e4c6b',18);fCirc(-120,-118,20,'#e0b48a');fCirc(120,-118,20,'#e0b48a')}
  else{ctx.save();ctx.translate(-100,-262);ctx.rotate(sw*.25+bd*.4);fRect(-20,0,40,190,'#3e4c6b',18);fCirc(0,196,20,'#e0b48a');ctx.restore();
    ctx.save();ctx.translate(100,-262);ctx.rotate(-sw*.25+bd*.4);fRect(-20,0,40,190,'#3e4c6b',18);fCirc(0,196,20,'#e0b48a');ctx.restore()}
  // nuca + cabelo + boné de costas
  fRect(-22,-310,44,40,'#d0a27c',10);fCirc(0,-360,62,'#2a1b14');
  ctx.fillStyle='#c33';ctx.beginPath();ctx.ellipse(0,-382,66,48,0,Math.PI,0);ctx.fill();fRect(-66,-386,132,16,'#c33');fRect(-18,-376,36,10,'#2a1b14',4);fRect(-24,-380,48,6,'#8a1f1f',3);
  ctx.restore();ctx.restore()}
// caixa com etiqueta
function e2Box(x,y,s,label){ctx.save();ctx.translate(x,y);ctx.scale(s,s);fRect(-110,-150,220,150,'#c79a5e',8);fPoly([[-110,-150],[110,-150],[90,-178],[-90,-178]],'#d8ac70');fRect(-14,-178,28,178,'#e6c68f');
  if(label){fRect(-80,-110,124,70,'#fff',6);txtC('MATHEUS',-18,-86,'900 20px Inter','#222');txtC('AP 302',-18,-60,'800 18px Inter','#c33')}ctx.restore()}
// corredor visto pelo olho mágico (perspectiva). o:{cour:{x,y,s,walk,box,bend}|null, gap, box:{x,y,s}|null, arm, elev, elevIn, flick}
function e2Hall(u,o){o=o||{};ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);ctx.save();ctx.beginPath();ctx.arc(540,880,470,0,7);ctx.clip();
  ctx.translate(540,880);ctx.scale(1.05,1.05);ctx.translate(-540,-880);if(o.zoom){const z=o.zoom;ctx.translate(540,880);ctx.scale(z[2],z[2]);ctx.translate(-z[0],-z[1])}
  const VX=540,FT=600,FB=790,FL=470,FR=610;const L=(d)=>({x:lerp(FR,1180,d),t:lerp(FT,120,d),b:lerp(FB,1560,d)}),LL=(d)=>({x:lerp(FL,-100,d),t:lerp(FT,120,d),b:lerp(FB,1560,d)});
  const lit=o.flick?(.75+.25*(Math.sin(u*37)>.6?0:1)):1;
  fPoly([[-100,120],[1180,120],[FR,FT],[FL,FT]],'#e8dcc0');                               // teto
  fPoly([[-100,1560],[1180,1560],[FR,FB],[FL,FB]],'#8c7553');                             // chão
  for(let k=1;k<6;k++){const d=Math.pow(k/6,1.6);const a=LL(d),b=L(d);ctx.strokeStyle='rgba(0,0,0,.08)';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(a.x,a.b);ctx.lineTo(b.x,b.b);ctx.stroke()}
  fPoly([[-100,120],[FL,FT],[FL,FB],[-100,1560]],'#c9b98f');fPoly([[1180,120],[FR,FT],[FR,FB],[1180,1560]],'#bfae84');   // paredes
  fRect(FL,FT,FR-FL,FB-FT,'#a89566');                                                       // parede do fundo
  // elevador no fundo
  fRect(500,640,80,150,'#55606e');if(o.elevIn){fRect(504,644,72,146,'#ffe9b0');ctx.save();ctx.globalAlpha=o.elevIn;fRect(522,690,36,100,'#1d1a18',14);fCirc(540,684,16,'#1d1a18');fRect(522,668,36,10,'#c33',4);ctx.restore()}
  {const e=o.elev??1;fRect(504,644,36*e,146,'#8d99a8');fRect(576-36*e,644,36*e,146,'#8d99a8')}fRect(530,622,20,12,'#ff4d4d',3);
  // luminárias
  for(const d of[.25,.6]){const a=L(d),b=LL(d);glow(540,lerp(FT,120,d)+10,200*(1+d),'rgba(255,240,200,A)',.35*lit)}
  // porta 303 na parede da direita
  const d1=.2,d2=.38,A=L(d1),B=L(d2),hA=A.t+(A.b-A.t)*.18,hB=B.t+(B.b-B.t)*.18;
  fPoly([[A.x-8,hA-10],[B.x+8,hB-14],[B.x+8,B.b],[A.x-8,A.b]],'#6b5a3c');
  fPoly([[A.x,hA],[B.x,hB],[B.x,B.b],[A.x,A.b]],'#7a5a3a');
  const g=o.gap||0;if(g>0){const gx=lerp(A.x,B.x,.06+g*.32);fPoly([[A.x,hA],[gx,lerp(hA,hB,.06+g*.32)],[gx,lerp(A.b,B.b,.06+g*.32)],[A.x,A.b]],'#120d0a')}
  {const cx=lerp(A.x,B.x,.5),cy=lerp(hA,hB,.5)+40;fPoly([[cx-34,cy-14],[cx+34,cy-20],[cx+34,cy+22],[cx-34,cy+24]],'#d8b35a');txtC('303',cx,cy+3,'900 30px Inter','#3a2418')}
  fCirc(lerp(A.x,B.x,.85),lerp(A.b,B.b,.85)-(lerp(A.b,B.b,.85)-lerp(hA,hB,.85))*.48,9,'#d8b35a');
  fPoly([[A.x,A.b],[B.x,B.b],[B.x-60,B.b+14],[A.x-50,A.b+10]],'#5e4a30');                          // capacho
  // braço de manga amarela saindo da fresta
  const gx=lerp(A.x,B.x,.06+g*.32),gy=lerp(A.b,B.b,.06+g*.32)-40;
  if(o.box)e2Box(o.box.x,o.box.y,o.box.s,0);
  if(o.arm>0){const ex=lerp(gx,o.armTo?o.armTo[0]:gx-60,o.arm),ey=lerp(gy,o.armTo?o.armTo[1]:gy,o.arm);ctx.strokeStyle='#f2c230';ctx.lineWidth=34;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(gx+10,gy-6);ctx.lineTo(ex,ey);ctx.stroke();
    ctx.strokeStyle='#d9a91c';ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(gx+6,gy+6);ctx.lineTo(ex,ey+10);ctx.stroke();fCirc(ex-6,ey,17,'#c98f62')}
  if(o.cour)e2CourierBack(o.cour.x,o.cour.y,o.cour.s,o.cour);
  ctx.restore();
  const gr=ctx.createRadialGradient(540,880,220,540,880,470);gr.addColorStop(0,'rgba(0,0,0,0)');gr.addColorStop(1,'rgba(0,0,0,.9)');ctx.fillStyle=gr;ctx.beginPath();ctx.arc(540,880,470,0,7);ctx.fill();
  ctx.strokeStyle='#222';ctx.lineWidth=20;ctx.beginPath();ctx.arc(540,880,470,0,7);ctx.stroke()}
// bilhete
function e2Note(cx,cy,s,k,rot){ctx.save();ctx.translate(cx,cy);ctx.rotate(rot||0);ctx.scale(s,s);
  ctx.fillStyle='rgba(0,0,0,.35)';rr(-330,-230,680,480,10);ctx.fill();fRect(-340,-240,680,480,'#fbf6e6',6);
  ctx.fillStyle='rgba(80,110,170,.22)';for(let y=-150;y<230;y+=70)ctx.fillRect(-300,y,600,3);
  const L=['Sua caixa tá comigo.','Vem buscar :)'],tot=L.join('').length;let n=Math.floor((k??1)*tot*1.25);ctx.textAlign='left';ctx.textBaseline='alphabetic';
  L.forEach((l,i)=>{ctx.font='700 72px Caveat';ctx.fillStyle='#1f2f6b';ctx.fillText(l.slice(0,Math.max(0,n)),-290,-80+i*90);n-=l.length});
  if(n>0){ctx.font='700 80px Caveat';ctx.fillStyle='#c0392b';ctx.fillText('— 303',60,180);ctx.fillStyle='#f2c230';ctx.beginPath();for(let j=0;j<10;j++){const r=j%2?12:28,a=j*Math.PI/5-Math.PI/2;ctx.lineTo(250+Math.cos(a)*r,150+Math.sin(a)*r)}ctx.fill()}
  ctx.restore()}
// gato dormindo enroladinho (detalhe de ambiente)
function e2CatSleep(x,y,s,t){ctx.save();ctx.translate(x,y);ctx.scale(s,s);const br=1+.03*Math.sin(t*2.2);ctx.scale(br,1/br);
  ctx.strokeStyle='#7a3d12';ctx.lineWidth=15;ctx.lineCap='round';ctx.beginPath();ctx.arc(10,-20,70,.2,1.6);ctx.stroke();ctx.strokeStyle='#f39a4a';ctx.lineWidth=9;ctx.stroke();
  ctx.fillStyle='#f39a4a';ctx.strokeStyle='#7a3d12';ctx.lineWidth=4.5;ctx.beginPath();ctx.ellipse(0,-40,80,42,0,0,7);ctx.fill();ctx.stroke();
  ctx.strokeStyle='rgba(122,61,18,.5)';ctx.lineWidth=4;for(const k of[-30,-10,10]){ctx.beginPath();ctx.moveTo(k,-80);ctx.lineTo(k+6,-62);ctx.stroke()}
  ctx.save();ctx.translate(-62,-38);ctx.fillStyle='#f39a4a';ctx.strokeStyle='#7a3d12';ctx.lineWidth=4.5;for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(sx*10-4,-20);ctx.lineTo(sx*22,-44);ctx.lineTo(sx*28+4,-12);ctx.closePath();ctx.fill();ctx.stroke()}
  ctx.beginPath();ctx.ellipse(0,0,34,28,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#fff6ea';ctx.beginPath();ctx.ellipse(4,12,17,11,0,0,7);ctx.fill();
  ctx.strokeStyle='#2a170d';ctx.lineWidth=3.5;for(const sx of[-1,1]){ctx.beginPath();ctx.arc(sx*12+2,-2,7,.2,Math.PI-.2);ctx.stroke()}
  ctx.strokeStyle='#2f6fd6';ctx.lineWidth=6;ctx.beginPath();ctx.arc(0,4,30,.7,2.4);ctx.stroke();ctx.restore();
  for(let j=0;j<3;j++){const q=((t*.6+j/3)%1);ctx.globalAlpha=1-q;txtC('z',-40+q*60,-120-q*90,`800 ${30+q*26}px Inter`,'#cfd6ff');ctx.globalAlpha=1}
  ctx.restore()}
// placar no estilo do EP. 10 (sem números reais)
function e2Placar(u,winA){ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(90,140,255,A)',.25);
  txtC('RESULTADO DO EP. 1',W/2,300,'900 80px Inter','#fff',16);txtC('somando todas as redes',W/2,390,'700 46px Inter','#bcd',0);
  const NET=[['TikTok','#111','#25f4ee'],['Instagram','#c13584','#fff'],['YouTube','#e62117','#fff']];const TX=['A','AAAA','A!!','vai na A','B','A','A 👀','AAA','A A A','b','não abre! A','A'];
  ctx.save();ctx.beginPath();ctx.rect(0,460,W,860);ctx.clip();
  const n=Math.floor(u*7);for(let i=0;i<n;i++){const r=rng(i+700);const t0=i/7;const age=u-t0;const y=1300-age*600;if(y<420)continue;const side=i%2===0;const nt=NET[i%3];const txt=TX[Math.floor(r()*TX.length)];
    ctx.save();ctx.globalAlpha=Math.min(1,age*4);ctx.translate(side?70:590,y);ctx.fillStyle='rgba(255,255,255,.95)';rr(0,-46,420,92,30);ctx.fill();
    ctx.fillStyle=nt[1];ctx.beginPath();ctx.arc(46,0,30,0,7);ctx.fill();ctx.fillStyle=nt[2];ctx.font='900 28px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nt[0][0],46,2);
    ctx.textAlign='left';ctx.fillStyle='#777';ctx.font='700 24px Inter';ctx.fillText(nt[0],90,-16);ctx.fillStyle=txt.toUpperCase().startsWith('B')?'#c33':'#1a8a4a';ctx.font='900 40px Inter';ctx.fillText(txt,90,22);ctx.restore()}
  ctx.restore();
  const c=Math.floor(Math.pow(clamp(u/1.9),2.2)*9999);const k=easeBack(seg(u,.1,.4));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-470,-90,940,180,36);ctx.fill();txtC(c>=9999?'+9999 COMENTÁRIOS':'💬 '+c.toLocaleString('pt-BR')+' comentários',0,0,'900 66px Oswald','#16161c');ctx.restore();
  if(winA>0){const k2=easeBack(clamp(winA));ctx.fillStyle=`rgba(0,0,0,${(.55*clamp(winA*2)).toFixed(2)})`;ctx.fillRect(0,0,W,H);ctx.save();ctx.translate(W/2,H*.5);ctx.scale(k2,k2);ctx.fillStyle='rgba(30,150,80,.97)';rr(-470,-150,940,300,46);ctx.fill();txtC('VENCEU A',0,-50,'900 110px Inter','#fff');txtC('NÃO ABRIU A PORTA',0,60,'900 64px Inter','#fff');ctx.restore();tzConfetti(u-1.9,5,60)}}
// abertura (gancho)
function e2Open(t,u,D){ctx.fillStyle='#03040a';ctx.fillRect(0,0,W,H);
  const slam=seg(u,.05,.32),imp=u>.32?Math.max(0,1-(u-.32)*4):0,M=D*.55,imp2=u>M?Math.max(0,1-(u-M)*3.2):0;const sh=imp*26+imp2*30;
  ctx.save();ctx.translate(Math.sin(t*90)*sh,Math.cos(t*77)*sh);
  tzRays(540,900,t*1.4,u>M?'rgba(255,70,90,1)':'rgba(80,140,255,1)',.06+.1*seg(u,M,M+.2));
  glow(540,900,700,u>M?'rgba(255,60,80,A)':'rgba(70,110,255,A)',.25+.35*imp+.35*seg(u,M,M+.15));
  if(slam>0){const s=lerp(2.2,1.12,easeOut(slam)),y=lerp(-500,860,easeOut(slam));ctx.save();ctx.translate(540,y);ctx.rotate(lerp(-.4,-.04,easeOut(slam)));
    tzPhone(0,0,s,0,()=>{e2Chat(u,[{l:['Amanhã, NÃO abre','a porta.'],red:1,k:seg(u,.3,.55)},{l:['Matheus, abre.','É importante.'],red:1,time:'19:04',k:seg(u,.7,.95)}]);
      if(u>M){ctx.fillStyle=`rgba(255,60,90,${(.18*Math.max(0,Math.sin(t*20))).toFixed(2)})`;ctx.fillRect(-210,-440,420,880)}});ctx.restore()}
  for(const [t0,col] of [[.32,'255,255,255'],[M,'255,90,110']]){const q=seg(u,t0,t0+.6);if(q>0&&q<1){ctx.strokeStyle=`rgba(${col},${(1-q).toFixed(2)})`;ctx.lineWidth=40*(1-q);ctx.beginPath();ctx.arc(540,900,120+1000*easeOut(q),0,7);ctx.stroke()}}
  ctx.restore();
  tzKicker('IMAGINE...',230,seg(u,.1,.4),'#e0463d');
  if(u>M){tzTitle('ALGUÉM ESTÁ',300,seg(u,M,M+.2),96,'#fff');tzTitle('MENTINDO 😳',1440,seg(u,M+.1,M+.3),130,'#ff4d6d')}
  const fl=Math.max(Math.max(0,1-Math.abs(u-.33)/.08),Math.max(0,1-Math.abs(u-M)/.07)*.8);if(fl>0){ctx.fillStyle=`rgba(255,255,255,${fl.toFixed(2)})`;ctx.fillRect(0,0,W,H)}
  if((u>.32&&u<.6)||(u>M&&u<M+.25))e1Glitch(6,Math.floor(t*30))}
// sala no escuro (meia-noite)
function e2Dark(a){ctx.fillStyle=`rgba(4,6,20,${a})`;ctx.fillRect(0,0,W,H)}
// janela grande com chuva fina (detalhe de ambiente)
function e2Window(t){fRect(0,0,W,H,'#1a1e44');fRect(0,1500,W,H-1500,'#241d36');
  ctx.save();rr(130,220,820,1060,16);ctx.clip();ctx.fillStyle=lg(220,1280,['#070b26','#16205a']);ctx.fillRect(130,220,820,1060);
  const r=rng(41);for(let i=0;i<16;i++){const bx=130+i*54,bh=180+r()*520;fRect(bx,1280-bh,50,bh,'#0b1030');for(let j=0;j<10;j++)if(r()<.4)fRect(bx+8+(j%2)*20,1280-bh+18+j*34,10,14,'rgba(255,210,120,.85)')}
  fCirc(800,360,40,'#f4f1d8');fCirc(784,350,36,'#0d1440');
  ctx.strokeStyle='rgba(190,210,255,.35)';ctx.lineWidth=3;for(let i=0;i<60;i++){const q=rng(i+3);const x=130+q()*820,sp=900+q()*500,y=220+((t*sp+q()*1060)%1060);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-8,y+40);ctx.stroke()}
  for(let i=0;i<14;i++){const q=rng(i+90);const x=160+q()*760,y=240+((t*(40+q()*50)+q()*1000)%1040);fCirc(x,y,7,'rgba(200,220,255,.45)')}
  ctx.restore();ctx.strokeStyle='#3a4380';ctx.lineWidth=22;rr(130,220,820,1060,16);ctx.stroke();ctx.beginPath();ctx.moveTo(540,220);ctx.lineTo(540,1280);ctx.stroke();fRect(100,1270,880,40,'#2e3466',10)}

const HUD2=['','','DIA 2 · 19:05','DIA 2 · 19:05','DIA 2 · 19:05','DIA 2 · 19:06','DIA 2 · 19:06','DIA 2 · 19:06','DIA 2 · 19:07','DIA 2 · 19:07','DIA 2 · 19:07','DIA 2 · 19:07','DIA 2 · 19:08','DIA 2 · 19:08','DIA 2 · 19:09','DIA 2 · 19:09','DIA 2 · 19:10','DIA 2 · 19:15','*','DIA 2 · 23:40','DIA 2 · 23:59','DIA 2 · 23:59','DIA 2 · 23:59','DIA 2 · 23:59','DIA 2 · 23:59','DIA 2 · 23:59','DIA 3 · 00:00','DIA 3 · 00:00','DIA 3 · 00:01','DIA 3 · 00:01','DIA 3 · 00:01','DIA 3 · 00:02','DIA 3 · 00:02','','',''];
function EP2(t){const L=window.LINES;const st=i=>i===0?0:L[i].a-.12;const en=i=>i<L.length-1?L[i+1].a-.12:L[i].b+3.4;
  let i=0;for(let k=0;k<L.length;k++)if(t>=st(k))i=k;const a=st(i),b=en(i),u=t-a,D=b-a,p=clamp(u/D);let hud=HUD2[i];
  const bl=(sd)=>tzBlink(t,sd);const sala=(day)=>{e1Apto(t,{noSofa:1,noTV:1,day});e1SofaF(250,830,1500,1.3,day)};
  ctx.save();
  switch(i){
  case 0:{e2Open(t,u,D);break}
  case 1:{e2Placar(u,seg(u,D*.48,D*.48+.35));break}
  case 2:{const z=1+.07*easeOut(p);ctx.translate(540,900);ctx.scale(z,z);ctx.translate(-540,-900);e1Door(u,{under:1,feet:1});
    matheus5(540,1540,1.75,{expr:'assustado',t,armL:[78,30,'open'],armR:[78,30,'open'],blink:0,head:Math.sin(t*1.5)*1.5});
    {const q=(u*.9)%1;fCirc(700,560+q*80,10,`rgba(140,200,255,${(1-q).toFixed(2)})`)}ctx.setTransform(1,0,0,1,0,0);tzKicker('NEM RESPIRA',330,seg(u,.2,.5),'#4f5bd5');break}
  case 3:{const ks=[D*.25,D*.25+.32,D*.62,D*.62+.32];let kn=0;ks.forEach(k=>{if(u>=k)kn=Math.max(kn,1-seg(u,k,k+.22))});e1Door(u,{knock:kn,under:1,feet:1});
    ks.forEach((k,j)=>{if(u>=k)tzTitleAt2('TOC',[320,760,360,740][j],[620,560,860,820][j],seg(u,k,k+.2),[-.15,.12,-.08,.16][j])});break}
  case 4:{e1Peep(t,true);tzKicker('“ÚLTIMA CHANCE!”',140,seg(u,.05,.3),'#c33');break}
  case 5:{e1Door(u,{under:1});const q=seg(u,D*.35,D);if(q<1){ctx.save();ctx.globalAlpha=1-q;const dx=q*260,st_=Math.floor(u*3)%2;fRect(440+dx,1500,50,10-(st_?4:0),'rgba(0,0,0,.8)');fRect(590+dx,1500,50,10-(st_?0:4),'rgba(0,0,0,.8)');ctx.restore()}
    for(let k=0;k<3;k++){const kk=D*.35+k*.45;if(u>kk)tzTitleAt2('TAP',600+k*120,1380-k*30,seg(u,kk,kk+.2)*(1-seg(u,kk+.5,kk+.8)),.1)}
    tzKicker('ELE NÃO ABRE',330,seg(u,.1,.4),'#2bb673');break}
  case 6:{const z=1+.5*Math.pow(seg(p,.35,1),2);ctx.translate(540,560);ctx.scale(z,z);ctx.translate(-540,-560);e1Door(u,{under:1});
    const lean=seg(p,.05,.5);matheusView(540,1640-lean*20,2.0,'back',{t,head:-lean*6});ctx.setTransform(1,0,0,1,0,0);
    const ir=seg(p,.78,1);if(ir>0){const rI=Math.max(1,1400*(1-ir));ctx.fillStyle='#000';ctx.beginPath();ctx.rect(0,0,W,H);ctx.moveTo(540+rI,880);ctx.arc(540,880,rI,0,Math.PI*2,true);ctx.fill('evenodd')}
    tzKicker('OLHO MÁGICO',330,seg(u,.1,.4)*(1-ir),'#5a6178');break}
  case 7:{const q=easeOut(seg(p,0,.8)),bd=seg(p,.8,1);
    e2Hall(t,{cour:{x:lerp(520,690,q),y:lerp(1560,1120,q),s:lerp(1.2,.72,q),walk:q<1?t*7:null,box:bd<.6,bend:Math.sin(bd*Math.PI)},box:bd>=.6?{x:745,y:1035,s:.42}:null});
    if(p>.55)tzKicker('APARTAMENTO 303',140,seg(p,.55,.7),'#d8b35a');break}
  case 8:{const q=easeOut(seg(p,.15,1));const sc=lerp(.72,.3,q);
    e2Hall(t,{cour:{x:lerp(690,540,q),y:lerp(1120,790,q),s:sc,walk:q<1?t*6:null},box:{x:745,y:1035,s:.42},gap:seg(p,0,.6)*.5,elev:1-seg(p,.6,.9),elevIn:0});break}
  case 9:{const g=.5,ar=seg(p,0,.4),pull=seg(p,.4,.95);const e=easeOut(pull);
    e2Hall(t,{zoom:[760,960,1.9*1+.1*p],gap:g,box:pull<.92?{x:lerp(745,768,e),y:lerp(1035,980,e),s:.42*(1-.25*e)}:null,arm:pull>0?1-pull*.8:ar,armTo:[730,1000],elev:0,elevIn:1});
    if(p>.35)tzKicker('MANGA AMARELA',140,seg(p,.35,.5),'#f2c230');break}
  case 10:{fRect(0,0,W,H,'#bba878');fRect(0,1150,W,H-1150,'#8c7553');fRect(760,0,320,1150,'#7a5a3a');const gp=lerp(820,760,seg(p,.6,1));fRect(gp-110,0,110,1150,'#120d0a');
    const pull=easeOut(seg(p,.05,.9));const z=1+.06*p;ctx.translate(540,900);ctx.scale(z,z);ctx.translate(-540,-900);
    e2Box(lerp(420,640,pull),1320,2.2,1);
    {const hx=lerp(640,860,pull);ctx.strokeStyle='#f2c230';ctx.lineWidth=90;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(hx,1100);ctx.lineTo(W+100,1000);ctx.stroke();fCirc(hx-20,1110,44,'#c98f62')}
    ctx.setTransform(1,0,0,1,0,0);tzTitle('É A CAIXA DELE!',330,seg(u,.2,.45),100,'#ffd23f');break}
  case 11:{e2Hall(t,{gap:.5*(1-seg(p,0,.4)),elev:1,flick:p>.5});tzKicker('CORREDOR VAZIO',140,seg(p,.45,.6),'#5a6178');break}
  case 12:{const z=1.6;ctx.translate(540,1000);ctx.scale(z,z);ctx.translate(-540,-1500);e1Door(u,{under:1});
    const q=easeOut(seg(p,.2,.9));ctx.save();ctx.translate(lerp(560,540,q),lerp(1505,1640,q));ctx.rotate(lerp(0,-.25,q));ctx.scale(1,lerp(.2,1,q));fRect(-110,-70,220,140,'#fbf6e6',4);ctx.fillStyle='rgba(31,47,107,.6)';for(let k=0;k<3;k++)ctx.fillRect(-80,-40+k*30,140-k*30,6);ctx.restore();
    ctx.setTransform(1,0,0,1,0,0);tzKicker('UM BILHETE',300,seg(p,.45,.6),'#ff7a33');break}
  case 13:{fRect(0,0,W,H,'#2e2440');glow(540,800,700,'rgba(255,220,150,A)',.2);e2Note(540,820,1.25-.05*p,seg(u,.15,D*.72),-.04);tzKicker('BILHETE DO 303',260,seg(u,.05,.3),'#c0392b');break}
  case 14:{sala(0);e1TableFront(t,{phone:1,cup:1});const S=1.5,X=540,Y=1730;ctx.save();ctx.globalAlpha=.3;m5ell(X,Y+6,120*S/1.3,18,'#000');ctx.restore();
    matheus5(X,Y,S,{expr:'desconfiado',t,blink:bl(4),head:6,look:Math.sin(u*2)>0?1:-1,armR:[22,-128,'fist'],armL:[10,-60,'pocket']});
    {const px=X+7*S,py=Y-330*S;ctx.save();ctx.translate(px,py-40);ctx.rotate(-.12);fRect(-60,-46,120,92,'#fbf6e6',4);ctx.fillStyle='rgba(31,47,107,.6)';for(let k=0;k<3;k++)ctx.fillRect(-44,-26+k*20,80-k*16,5);ctx.restore()}
    {const k=easeBack(seg(u,.3,.6));if(k>0){ctx.save();ctx.translate(840,520);ctx.scale(k,k);fCirc(0,0,120,'#fff');fCirc(-110,130,22,'#fff');fCirc(-140,170,12,'#fff');fRect(-50,-80,100,150,'#7a5a3a',6);fRect(-30,-50,60,26,'#d8b35a',4);txtC('303',0,-36,'900 20px Inter','#3a2418');txtC('?',0,30,'900 70px Oswald','#ff4d6d');ctx.restore()}}
    tzKicker('QUEM MORA NA 303?',330,seg(u,.1,.4),'#c0392b');break}
  case 15:{fRect(0,0,W,H,'#ff7a33');tzRays(540,900,t,'rgba(255,255,255,1)',.08);matheus5(540,2050,2.3,{expr:'surpreso',t,look:0,blink:bl(2),armL:[60,10,'open'],armR:[60,10,'open']});
    tzTitle('E VOCÊ?',380,seg(u,.05,.3),150,'#fff');tzKicker('IA BUSCAR A CAIXA?',560,seg(u,.4,.7),'#16161c');break}
  case 16:{sala(0);const q=clamp(p/.6);const xw=lerp(400,800,1-Math.pow(1-q,1.7));const sd=Math.pow(clamp((.6-p)/.2),.8);
    if(p<.6)matheusView(xw,1500,1.3,'side',{t,walk:t*6.5,stride:sd,expr:'pensativo'});else{const kT=seg(p,.6,.72);if(kT<1)e1Turn(kT,()=>matheusView(800,1500,1.3,'side',{t,expr:'pensativo'}),()=>matheus5(800,1500,1.3,{t,expr:'assustado'}),800,1500);else matheus5(800,1500,1.3,{t,expr:'assustado',blink:0,head:-4})}
    e1TableFront(t,{phone:1,cup:1});e1Bubble(540,420,1.15,['ACONTEÇA O QUE','ACONTECER'],1,seg(p,.6,.85),'MENSAGEM DE ONTEM');break}
  case 17:{sala(0);matheus5(540,1500,1.3,{sit:1,expr:'pensativo',t,head:8,blink:bl(9)});e1TableFront(t,{phone:1,cup:1,bowl:1});
    {const k=easeBack(seg(u,.3,.6));if(k>0){ctx.save();ctx.translate(820,470);ctx.scale(k,k);fRect(-160,-70,320,140,'#111320',24);txtC('23:59',0,4,'700 96px Oswald','#ff3b3b');ctx.restore()}}tzKicker('ESPERANDO...',330,seg(u,.1,.4),'#4f5bd5');break}
  case 18:{const h=Math.min(2,Math.floor(p*3));hud='DIA 2 · '+['20:00','21:00','22:00'][h];sala(0);
    const P=[{sit:1,expr:'pensativo',head:8},{sit:1,expr:'triste',head:14},{sit:1,expr:'desconfiado',head:-6,look:1}][h];matheus5(540,1500,1.3,Object.assign({t,blink:bl(3)},P));e1TableFront(t,{phone:1,cup:1,bowl:1});
    const f=1-seg(p,h/3,h/3+.06);ctx.save();ctx.translate(540,520);const kk=1+.15*f;ctx.scale(kk,kk);fRect(-260,-110,520,220,'#111320',30);txtC(['20:00','21:00','22:00'][h],0,6,'700 160px Oswald','#ff3b3b');ctx.restore();
    if(f>0){ctx.fillStyle=`rgba(255,255,255,${(f*.35).toFixed(2)})`;ctx.fillRect(0,0,W,H)}break}
  case 19:{sala(0);matheus5(450,1500,1.3,{sit:1,expr:'triste',t,head:10,blink:bl(6)});e2CatSleep(700,1352,.9,t);e1TableFront(t,{phone:1,cup:1,bowl:1});break}
  case 20:{if(p<.45){ctx.fillStyle='#07080f';ctx.fillRect(0,0,W,H);const fl=p>.22;const z=1+.06*p;ctx.translate(540,900);ctx.scale(z,z);ctx.translate(-540,-900);
      fRect(140,640,800,480,'#111320',40);txtC(fl?'23:59':'23:58',540,890,'700 300px Oswald','#ff3b3b');glow(540,880,520,'rgba(255,50,50,A)',.35);
      const f=seg(p,.22,.3);if(f>0&&f<1){ctx.fillStyle=`rgba(255,80,80,${((1-f)*.35).toFixed(2)})`;ctx.fillRect(0,0,W,H)}}
    else{const v=u-D*.45;e1PhoneScene(v,()=>{tzLock(v,'23:59');tzNotif(-30,seg(v,.1,.4),'Você (do futuro)','1 mensagem')},{buzz:v<1.2,s:1.25})}break}
  case 21:{e1PhoneScene(u,()=>e2Chat(u,[Object.assign({k:seg(u,.3,.6)},F1)],{typing:u<.3}));break}
  case 22:{e1PhoneScene(u,()=>e2Chat(u,[Object.assign({k:1},F1),Object.assign({k:seg(u,.1,.3),type:seg(u,.1,D*.8)},ME1)],{kb:u<D*.8}));break}
  case 23:{const on=p<.55;e1PhoneScene(u,()=>e2Chat(u,[Object.assign({k:1},F1),Object.assign({k:1},ME1)],{typing:on,online:1}));if(!on)tzKicker('...SUMIU',300,seg(p,.6,.75),'#5a6178');break}
  case 24:{e1PhoneScene(u,()=>e2Chat(u,[Object.assign({k:1},ME1),Object.assign({k:seg(u,.1,.4)},F2)]));tzKicker('NÃO FOI ELE?!',300,seg(p,.5,.65),'#e0463d');break}
  case 25:{e1PhoneScene(u,()=>e2Chat(u,[Object.assign({k:1},ME1),Object.assign({k:1},F2),Object.assign({k:seg(u,.05,.35)},F3)]),{red:1,glitch:1});break}
  case 26:{const off=seg(u,.1,.4);e1PhoneScene(u,()=>{e2Chat(u,[Object.assign({k:1},F2),Object.assign({k:1},F3)]);ctx.fillStyle=`rgba(0,0,0,${off})`;ctx.fillRect(-210,-440,420,880)});
    if(u>D*.4)tzTitle('00:00',420,seg(u,D*.4,D*.4+.25),130,'#ff3b3b');break}
  case 27:{fRect(0,0,W,H,'#0b0d22');glow(540,900,600,'rgba(90,110,255,A)',.18);matheus5(540,2150,2.6,{expr:'desconfiado',t,blink:bl(8),look:Math.sin(u*2.5)>0?-1:1});
    e1Bubble(540,420,1.15,['Matheus, abre.','É importante.'],1,seg(u,.2,.5),'HOJE • 19:04');tzTitle('QUEM MANDOU?',700,seg(u,D*.5,D*.5+.25),110,'#ffd23f');break}
  case 28:{sala(0);const J=D*.3,k=seg(u,J,J+.2),up=seg(u,J+.2,J+.8);const jy=Math.max(0,Math.sin(up*Math.PI))*80;const sq=(sy,f)=>{ctx.save();ctx.translate(540,1500);ctx.scale(1/Math.sqrt(sy),sy);ctx.translate(-540,-1500);f();ctx.restore()};
    if(k<=0)matheus5(540,1500,1.3,{sit:1,expr:'triste',t,head:10,blink:bl(2)});else if(k<1)sq(1-.12*Math.sin(k*Math.PI/2),()=>matheus5(540,1500,1.3,{sit:1,expr:'assustado',t,blink:0}));
    else sq(1+.04*Math.sin(up*Math.PI),()=>matheus5(540,1500-jy,1.3,{expr:'assustado',t,armL:[lerp(10,60,eIO(up)),-20,'open'],armR:[lerp(10,60,eIO(up)),-20,'open'],blink:0}));
    e2CatSleep(820,1352,.9,t);e1TableFront(t,{phone:1,cup:1,lit:u>J-.2,buzz:u>J-.2});e2Dark(.5);if(u>J-.2){glow(530,1460,420,'rgba(255,80,110,A)',.45+.15*Math.sin(t*20))}
    if(u>J)tzTitle('DE NOVO?!',360,seg(u,J,J+.25),120,'#ff4d6d');break}
  case 29:{e1PhoneScene(u,()=>e2Chat(u,[Object.assign({k:1},F3),Object.assign({k:seg(u,.15,.45)},F4)]),{glitch:1,red:1});tzKicker('FORA DO HORÁRIO DE NOVO',220,seg(p,.5,.65),'#e0463d');break}
  case 30:{ctx.fillStyle=lg(0,H,['#11163a','#1d2350']);ctx.fillRect(0,0,W,H);tzStars(t,7,50);
    e1Bubble(540,560,1.1,['FICA LONGE','DA 303'],0,seg(u,.05,.35),'23:59 • VOCÊ (DO FUTURO)');e1Bubble(540,1180,1.1,['VAI NA 303'],1,seg(u,.45,.75),'00:01 • MESMO NÚMERO');
    {const k=easeBack(seg(u,.8,1.05));if(k>0){ctx.save();ctx.translate(540,870);ctx.scale(k,k);fCirc(0,0,80,'#ffd23f');txtC('VS',0,4,'900 70px Oswald','#16161c');ctx.restore()}}break}
  case 31:{e2Window(t);matheusView(540,1960,1.7,'back',{t});ctx.fillStyle='rgba(20,30,80,.25)';ctx.fillRect(0,0,W,H);
    tzTitle('SEGURO...',380,seg(u,.2,.45),110,'#7fd3ff');tzTitle('OU MEDO?',520,seg(u,D*.5,D*.5+.25),120,'#ff4d6d');break}
  case 32:{ctx.fillStyle=lg(0,H,['#11163a','#1d2350']);ctx.fillRect(0,0,W,H);tzStars(t,7,50);
    matheus5(540,1580,1.15,{expr:'pensativo',t,look:Math.sin(u*3)>0?-1:1,head:6,armR:[24,-145,'fist'],blink:bl(6)});
    e1Bubble(290,430,.9,['FICA','LONGE'],0,1,'23:59');e1Bubble(790,430,.9,['VAI NA','303'],1,1,'00:01');tzTitle('EM QUEM CONFIAR?',700,seg(u,.2,.5),84,'#ffd23f');break}
  case 33: case 34: case 35:{ctx.fillStyle=lg(0,H,['#0b0f26','#1a1446','#2b0f3a']);ctx.fillRect(0,0,W,H);tzStars(t,8,70);
    const CA=['OBEDECER e ficar','LONGE da 303'],CB=['DESAFIAR e bater','na porta 303'];
    if(i<35){e1Choice(i===33?seg(u,.05,.35):1,'A',CA,'#2bb673',560);e1Choice(i===34?seg(u,.05,.35):0,'B',CB,'#e0463d',860);
      matheus5(540,1520,.75,{expr:'desconfiado',t,look:i===33?-1:1,armL:[14,-30,'rest'],armR:[14,-30,'rest'],blink:bl(7)});tzKicker('VOCÊ DECIDE',330,seg(i===33?u:9,.05,.35),'#ff7a33')}
    else{const T0=L[35].b+.1,ec=seg(t,T0,T0+.4);if(ec<1){ctx.save();ctx.globalAlpha=1-ec;e1Choice(1,'A',CA,'#2bb673',460);e1Choice(1,'B',CB,'#e0463d',740);tzKicker('COMENTA A OU B',260,seg(u,.05,.35),'#ff7a33');ctx.restore()}
      ctx.fillStyle=`rgba(8,10,25,${(ec*.92).toFixed(2)})`;ctx.fillRect(0,0,W,H);
      if(ec>0){e2Teaser(t,ec);ctx.save();ctx.globalAlpha=ec;tzKicker('AMANHÃ • 18H',250,ec,'#e0463d');tzTitle('QUEM MORA',380,ec,110,'#fff');tzTitle('NA 303?',500,ec,110,'#ffd23f');tzKicker('SEGUE PRA VER O EP. 3',1440,ec,'#ff7a33');ctx.restore()}}
    break}
  }
  ctx.restore();ctx.setTransform(1,0,0,1,0,0);
  e1Hud(hud);tzCaption(t)}
// teaser do EP. 3: a porta 303 entreaberta, só a manga amarela aparece
function e2Teaser(t,k){ctx.save();ctx.globalAlpha=k;fRect(0,0,W,H,'#090b1c');
  fRect(250,640,580,760,'#1a1220',10);fRect(270,660,540,740,'#7a5a3a');fRect(300,680,140,700,'#0a0706');
  fRect(560,780,120,46,'#d8b35a',6);txtC('303',620,804,'900 36px Inter','#3a2418');
  ctx.strokeStyle='#f2c230';ctx.lineWidth=40;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(420,1060);ctx.lineTo(470+10*Math.sin(t*2),1040);ctx.stroke();fCirc(482+10*Math.sin(t*2),1040,20,'#c98f62');
  glow(370,1030,260,'rgba(255,220,120,A)',.22);fRect(250,1400,580,14,'#2e2440');ctx.restore()}
