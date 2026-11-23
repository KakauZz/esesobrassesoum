// ===================== SÉRIE 2 · EP. 8 — NO CORPO DA PROFESSORA =====================
// Faixa 3400–3599 (cartão final 3590–3593.2). Consequência do voto B do EP. 7 (no corpo da mãe, respondeu ao Lucas: "Foi sim. Ele mesmo vai te explicar."):
// o Lucas sabe de tudo e marcou a conversa: "Amanhã, 19h, na pracinha da escola."
// Hoje (segunda) o Matheus acorda no corpo da professora Neide, que deu aula pra ele e pro Lucas no 2º ano (2009); ela está no corpo do Matheus.
// Elementos novos (máx. 2): a professora Neide + a redação "Meu melhor amigo" (Matheus, 7 anos), assinada só com "M." (igual às mensagens misteriosas).
// Pista escondida: relógio do quarto da professora parado em 00:00 (9º relógio).
// Ambiente (não falado): gato laranja na janela da sala; folhas voando no fim de tarde.

const NEIDE={skin:'#a8714e',skinS:'#87553a',hair:'#8a8a92',hairL:'#b4b4bc',hood:'#d9a43a',hoodS:'#b0832a',pants:'#4a4a5a',pantsS:'#36364a'};
// cabelo curtinho cacheado grisalho (coordenadas do face())
function neideTop(o){o=o||{};ctx.lineJoin='round';
  const R=[];for(let i=0;i<19;i++){const a=Math.PI*(1.02+i/18*.96);R.push([Math.cos(a)*300,Math.sin(a)*330-40])}
  ctx.fillStyle=NEIDE.hair;ctx.strokeStyle=OUT;ctx.lineWidth=10;
  ctx.beginPath();ctx.moveTo(-305,-20);R.forEach(([x,y])=>ctx.lineTo(x,y));ctx.lineTo(305,-20);ctx.quadraticCurveTo(240,-210,0,-230);ctx.quadraticCurveTo(-240,-210,-305,-20);ctx.closePath();ctx.fill();
  R.forEach(([x,y],i)=>{ctx.fillStyle=i%2?NEIDE.hair:'#7a7a82';ctx.beginPath();ctx.arc(x,y,62,0,7);ctx.fill();ctx.stroke()});
  for(let i=0;i<9;i++){const x=-200+i*50;ctx.fillStyle=i%2?'#9a9aa2':NEIDE.hair;ctx.beginPath();ctx.arc(x,-300+Math.abs(i-4)*14,58,0,7);ctx.fill();ctx.stroke()}
  ctx.strokeStyle=NEIDE.hairL;ctx.lineWidth=8;ctx.lineCap='round';for(let i=0;i<10;i++){const r=rng(i+3401);const x=-230+r()*460,y=-320+r()*160;ctx.beginPath();ctx.arc(x,y,20,0.3,2.6);ctx.stroke()}
  // linhas de sorriso
  ctx.strokeStyle='rgba(90,50,30,.4)';ctx.lineWidth=7;for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(sx*214,-6);ctx.lineTo(sx*240,-16);ctx.stroke()}}
// cardigan aberto + óculos pendurados na cordinha (coordenadas do face(), corpo -560..560 × 380..980)
function neideChest(){ctx.save();
  ctx.fillStyle='#f4efe4';ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(-170,400);ctx.lineTo(170,400);ctx.lineTo(150,990);ctx.lineTo(-150,990);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle='#fff';for(let i=0;i<4;i++){ctx.beginPath();ctx.arc(-200,560+i*110,16,0,7);ctx.fill();ctx.stroke()}
  // cordinha
  ctx.strokeStyle='#c8356a';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(-290,100);ctx.quadraticCurveTo(-200,520,-90,610);ctx.moveTo(290,100);ctx.quadraticCurveTo(200,520,90,610);ctx.stroke();
  // óculos
  ctx.strokeStyle='#3a2a44';ctx.lineWidth=12;for(const sx of[-1,1]){ctx.fillStyle='rgba(220,240,255,.6)';ctx.beginPath();ctx.ellipse(sx*82,640,66,46,0,0,7);ctx.fill();ctx.stroke()}
  ctx.beginPath();ctx.moveTo(-20,630);ctx.quadraticCurveTo(0,615,20,630);ctx.stroke();ctx.restore()}
function neideFace(cx,cy,s,o){o=o||{};withP(NEIDE,()=>face(cx,cy,s,o));ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);if(!o.headOnly)neideChest();neideTop(o);ctx.restore()}
function neideFront(x,y,s,pose){pose=pose||{};withP(NEIDE,()=>personFront(x,y,s,pose));
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);
  // blusa clara no meio do cardigan + óculos na cordinha
  ctx.fillStyle='#f4efe4';ctx.strokeStyle=OUT;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-14,-110);ctx.lineTo(14,-110);ctx.lineTo(14,10);ctx.lineTo(-14,10);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.strokeStyle='#c8356a';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-30,-150);ctx.quadraticCurveTo(-24,-90,-10,-74);ctx.moveTo(30,-150);ctx.quadraticCurveTo(24,-90,10,-74);ctx.stroke();
  ctx.strokeStyle='#3a2a44';ctx.lineWidth=3;ctx.fillStyle='rgba(220,240,255,.7)';for(const sx of[-1,1]){ctx.beginPath();ctx.ellipse(sx*11,-70,10,7,0,0,7);ctx.fill();ctx.stroke()}
  ctx.restore();
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.translate((pose.look||0)*8,-196);ctx.scale(.16,.16);neideTop(pose);ctx.restore()}
// selo "DENTRO: A PROFESSORA" (a professora está no corpo do Matheus)
function neideInside(x,y){ctx.save();ctx.translate(x,y);ctx.fillStyle='rgba(255,255,255,.95)';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-180,-60,360,120,30);ctx.fill();ctx.stroke();
  ctx.save();ctx.beginPath();ctx.arc(-120,0,44,0,7);ctx.clip();ctx.fillStyle='#fff0c8';ctx.fillRect(-170,-50,100,100);neideFace(-120,22,.09,{headOnly:true,smile:6});ctx.restore();
  ctx.fillStyle='#16161c';ctx.font='900 32px Inter';ctx.textAlign='left';ctx.fillText('DENTRO:',-66,-8);ctx.fillStyle='#b0832a';ctx.fillText('A PROFESSORA',-66,30);ctx.restore()}
// placar de todas as redes (igual ao EP. 10): comentários subindo, contador passa de +9999 → VENCEU B (sem números reais)
function s8Placar(u,win){ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(90,140,255,A)',.25);
  txtC('PLACAR DO EP. 7',W/2,300,'900 86px Inter','#fff',16);txtC('somando todas as redes',W/2,390,'700 46px Inter','#bcd',0);
  const NET=[['TikTok','#111','#25f4ee'],['Instagram','#c13584','#fff'],['YouTube','#e62117','#fff']];const TX=['B','bbbb','B 💬','BBBB','b!!','a verdade!','B','B 👀','Bbbb','a','B','B B B'];
  ctx.save();ctx.beginPath();ctx.rect(0,460,W,860);ctx.clip();
  const n=Math.floor(u*6);for(let i=0;i<n;i++){const r=rng(i+3404);const age=u-i/6;const y=1300-age*560;if(y<420)continue;const side=i%2===0;const nt=NET[i%3];const txt=TX[Math.floor(r()*TX.length)];
    ctx.save();ctx.globalAlpha=Math.min(1,age*4);ctx.translate(side?70:590,y);ctx.fillStyle='rgba(255,255,255,.95)';rr(0,-46,420,92,30);ctx.fill();
    ctx.fillStyle=nt[1];ctx.beginPath();ctx.arc(46,0,30,0,7);ctx.fill();ctx.fillStyle=nt[2];ctx.font='900 28px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nt[0][0],46,2);
    ctx.textAlign='left';ctx.fillStyle='#777';ctx.font='700 24px Inter';ctx.fillText(nt[0],90,-16);ctx.fillStyle=txt.toUpperCase().startsWith('A')&&txt.length<3?'#1a8a4a':'#2f55c8';ctx.font='900 40px Inter';ctx.fillText(txt,90,22);ctx.restore()}
  ctx.restore();
  const c=Math.floor(Math.pow(clamp(u/2.9),2.2)*9999);const k=easeBack(seg(u,.1,.4));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-470,-90,940,180,36);ctx.fill();txtC(c>=9999?'+9999 COMENTÁRIOS':'💬 '+c.toLocaleString('pt-BR')+' comentários',0,0,'900 66px Oswald','#16161c');ctx.restore();
  if(win){const k2=easeBack(clamp(win));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(k2,k2);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(-W,-H,W*2,H*2);ctx.fillStyle='rgba(60,90,200,.97)';rr(-470,-150,940,300,46);ctx.fill();
    txtC('VENCEU B',0,-50,'900 110px Inter','#fff');txtC('CONTAR A VERDADE 💬',0,60,'900 56px Inter','#fff');ctx.restore()}}
// quarto da professora (manhã): o:{prov:1 pilha de provas, clock:true}
function s8Room(u,o){o=o||{};ctx.fillStyle=lg(0,H,['#fff1d8','#f7dfba','#ecc996']);ctx.fillRect(0,0,W,H);
  // janela com sol da manhã
  ctx.save();ctx.beginPath();rr(600,260,400,480,14);ctx.clip();ctx.fillStyle=lg(260,740,['#9fd4f4','#d8f0fa']);ctx.fillRect(600,260,400,480);semBlur(()=>buildings(84,740,60,220,'#a8bccc','#eef4f8',.08,0,1));ctx.restore();
  ctx.strokeStyle='#fffdf6';ctx.lineWidth=16;ctx.beginPath();rr(600,260,400,480,14);ctx.stroke();ctx.fillStyle='#8fc6a8';ctx.fillRect(560,230,60,560);ctx.fillRect(980,230,60,560);
  // estante de livros
  ctx.fillStyle='#a8744a';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(60,300,300,40);ctx.strokeRect(60,300,300,40);for(let i=0;i<7;i++){ctx.fillStyle=['#c8356a','#2f55c8','#1f8a4a','#e8a13a'][i%4];ctx.fillRect(74+i*40,200+(i%3)*12,34,100-(i%3)*12);ctx.strokeRect(74+i*40,200+(i%3)*12,34,100-(i%3)*12)}
  // relógio parado (pista escondida)
  clockFace(210,560,70,0,0);
  ctx.fillStyle=lg(1400,H,['#b88e66','#9a7450']);ctx.fillRect(0,1400,W,H-1400)}
function s8Stack(x,y,s,n){ctx.save();ctx.translate(x,y);ctx.scale(s,s);for(let i=0;i<n;i++){const r=rng(i+3433);ctx.save();ctx.translate((r()-.5)*24,-i*16);ctx.rotate((r()-.5)*.08);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=3;ctx.fillRect(-110,-14,220,16);ctx.strokeRect(-110,-14,220,16);ctx.restore()}
  ctx.save();ctx.translate(0,-n*16-70);ctx.rotate(-.05);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.fillRect(-110,-60,220,130);ctx.strokeRect(-110,-60,220,130);
  ctx.fillStyle='#2f55c8';ctx.font='700 30px Caveat';ctx.textAlign='left';ctx.fillText('PROVA · 2º ano',-96,-22);ctx.strokeStyle='#9ab';ctx.lineWidth=2;for(let k=0;k<3;k++){ctx.beginPath();ctx.moveTo(-96,10+k*20);ctx.lineTo(96,10+k*20);ctx.stroke()}ctx.restore();ctx.restore()}
// sala de aula vista da mesa da professora: o:{mouth, look, cat, hand}
function s8Class(u,o){o=o||{};ctx.fillStyle=lg(0,H,['#fdf1d6','#f4e2b8','#e9d09a']);ctx.fillRect(0,0,W,H);
  // parede do fundo: varal de desenhos e janela
  ctx.strokeStyle='#8a6a4a';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(40,300);ctx.quadraticCurveTo(300,340,560,300);ctx.stroke();
  for(let i=0;i<5;i++){const x=80+i*100;ctx.save();ctx.translate(x,320+Math.sin(i)*6);ctx.rotate((i%2?.05:-.05));ctx.fillStyle='#fff';ctx.strokeStyle=OUT;ctx.lineWidth=3;ctx.fillRect(-36,0,72,86);ctx.strokeRect(-36,0,72,86);ctx.fillStyle=['#ff6a8a','#ffb03a','#6ab8ff','#7cc46a','#c88aff'][i];ctx.beginPath();ctx.arc(0,36,20,0,7);ctx.fill();ctx.restore()}
  ctx.save();ctx.beginPath();rr(640,240,360,400,14);ctx.clip();ctx.fillStyle=lg(240,640,['#9fd4f4','#d8f0fa']);ctx.fillRect(640,240,360,400);ctx.fillStyle='#7cc46a';ctx.beginPath();ctx.arc(720,640,140,0,7);ctx.arc(900,660,160,0,7);ctx.fill();if(o.cat)o.cat();ctx.restore();
  ctx.strokeStyle='#fffdf6';ctx.lineWidth=16;ctx.beginPath();rr(640,240,360,400,14);ctx.stroke();ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(820,240);ctx.lineTo(820,640);ctx.stroke();ctx.fillStyle='#fffdf6';ctx.fillRect(620,630,400,26);
  ctx.fillStyle='#c8a878';ctx.fillRect(0,820,W,H-820);
  // 3 fileiras de crianças nas carteiras (fundo → frente)
  const KP=[{hood:'#e05a5a',hoodS:'#b84444',hair:'#2b1d16'},{hood:'#5a8ae0',hoodS:'#3f6ac0',hair:'#6a3a1a',skin:'#c98a62',skinS:'#a86c48'},{hood:'#7cc46a',hoodS:'#5aa04a',hair:'#1a1210',skin:'#8d5a3b',skinS:'#6e4429'},{hood:'#ffb03a',hoodS:'#d08a20',hair:'#d8a040'},{hood:'#c88aff',hoodS:'#a06ad8',hair:'#3a2418',skin:'#e6b08c',skinS:'#c78e6a'},{hood:'#3fb0b0',hoodS:'#2a8a8a',hair:'#151010',skin:'#6e4429',skinS:'#5a3420'},{hood:'#ff8ab0',hoodS:'#d86a90',hair:'#7a4a2a'}];
  const ROWS=[[880,.14,7],[1080,.18,7],[1330,.23,6]];let id=0;
  ROWS.forEach(([y,s,n],ri)=>{for(let i=0;i<n;i++){const x=(W/(n))*(i+.5);const p=KP[(i+ri*3)%KP.length];const bob=Math.sin(u*3+i+ri)*4;
      const isHand=o.hand&&ri===2&&i===2;
      if(isHand&&o.hand>0){// braço levantado (só UM braço aparece: o corpo do face() não tem braços)
        const up=easeOut(clamp(o.hand));withP(p,()=>{ctx.save();ctx.strokeStyle=OUT;ctx.lineWidth=46*s/.23;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x+60,y+90);ctx.lineTo(x+70+up*10,y+90-up*230);ctx.stroke();ctx.strokeStyle=p.hood;ctx.lineWidth=34*s/.23;ctx.stroke();ctx.restore();
          ctx.fillStyle=P.skin||'#e8b48c';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.beginPath();ctx.arc(x+70+up*10,y+80-up*250,24,0,7);ctx.fill();ctx.stroke()})}
      withP(p,()=>face(x,y+bob,s,{smile:o.mouth?0:10,mouthO:o.mouth?(.35+.25*Math.abs(Math.sin(u*8+i))):0,px:o.look||0,py:6,open:(Math.floor(u*3+i*7)%11===0)?.1:1}));
      id++}
    // carteiras na frente de cada fileira
    ctx.fillStyle='#d89a5a';ctx.strokeStyle=OUT;ctx.lineWidth=5;for(let i=0;i<n;i++){const x=(W/n)*(i+.5);const w=W/n*.8;ctx.beginPath();rr(x-w/2,y+120*s/.18,w,60*s/.18,10);ctx.fill();ctx.stroke()}});
  // mesa da professora (frente, embaixo)
  ctx.fillStyle='#8a5a34';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillRect(-20,1640,W+40,300);ctx.strokeRect(-20,1640,W+40,300);ctx.fillStyle='#a8744a';ctx.fillRect(-20,1640,W+40,40)}
// a redação "Meu melhor amigo" (papel pautado, letra de criança). o:{lines:0..1, sig, hl}
function s8Essay(x,y,w,rot,o){o=o||{};const h=w*1.35;ctx.save();ctx.translate(x,y);ctx.rotate(rot);softShadow(10,h*.5+8,w*.5,14,.3);
  ctx.fillStyle='#fffdf2';ctx.strokeStyle=OUT;ctx.lineWidth=Math.max(2,w*.008);ctx.fillRect(-w/2,-h/2,w,h);ctx.strokeRect(-w/2,-h/2,w,h);
  ctx.strokeStyle='rgba(80,120,200,.35)';ctx.lineWidth=Math.max(1,w*.004);for(let i=0;i<14;i++){const yy=-h/2+w*.32+i*w*.075;ctx.beginPath();ctx.moveTo(-w/2+w*.05,yy);ctx.lineTo(w/2-w*.05,yy);ctx.stroke()}
  ctx.strokeStyle='rgba(220,80,80,.5)';ctx.beginPath();ctx.moveTo(-w/2+w*.12,-h/2);ctx.lineTo(-w/2+w*.12,h/2);ctx.stroke();
  const f=(sz)=>`700 ${Math.round(w*sz)}px Caveat`;ctx.textAlign='left';ctx.textBaseline='alphabetic';
  ctx.fillStyle='#2a3a8a';ctx.font=f(.06);ctx.fillText('Matheus · 7 anos',-w/2+w*.16,-h/2+w*.12);ctx.textAlign='right';ctx.fillText('2º ano · 2009',w/2-w*.05,-h/2+w*.12);ctx.textAlign='left';
  ctx.fillStyle='#16161c';ctx.font=f(.1);ctx.textAlign='center';ctx.fillText('Meu melhor amigo',0,-h/2+w*.26);ctx.textAlign='left';
  const T=['O Lucas é meu melhor','amigo. A gente brinca','todo dia no recreio.','Amigo de verdade','não esconde nada.'];const n=Math.ceil(clamp(o.lines??1)*T.length);
  ctx.font=f(.075);T.slice(0,n).forEach((l,i)=>{const yy=-h/2+w*.385+i*w*.15;if(o.hl&&i>=3){ctx.fillStyle='rgba(255,216,74,.65)';ctx.fillRect(-w/2+w*.14,yy-w*.07,w*.76,w*.1)}ctx.fillStyle='#16161c';ctx.fillText(l,-w/2+w*.16,yy)});
  // desenho de giz de cera: dois amigos (laranja e verde)
  const dx=w*.2,dy=h/2-w*.33;ctx.lineWidth=Math.max(2,w*.012);ctx.lineCap='round';
  [['#e2683c',-w*.06],['#3f8f7a',w*.1]].forEach(([c,ox])=>{ctx.strokeStyle=c;ctx.beginPath();ctx.arc(dx+ox,dy,w*.035,0,7);ctx.moveTo(dx+ox,dy+w*.035);ctx.lineTo(dx+ox,dy+w*.12);ctx.moveTo(dx+ox-w*.05,dy+w*.07);ctx.lineTo(dx+ox+w*.05,dy+w*.07);ctx.moveTo(dx+ox,dy+w*.12);ctx.lineTo(dx+ox-w*.035,dy+w*.18);ctx.moveTo(dx+ox,dy+w*.12);ctx.lineTo(dx+ox+w*.035,dy+w*.18);ctx.stroke()});
  ctx.fillStyle='#ff5a7a';ctx.font=`900 ${Math.round(w*.05)}px Inter`;ctx.fillText('♥',dx-w*.005,dy-w*.06);
  // assinatura: só um "M."
  if(o.sig!==false){ctx.fillStyle='#2a3a8a';ctx.font=`700 ${Math.round(w*.11)}px Caveat`;ctx.fillText('M.',-w/2+w*.18,h/2-w*.1);
    if(o.ring){ctx.strokeStyle='#ff3a4a';ctx.lineWidth=Math.max(3,w*.012);ctx.beginPath();ctx.ellipse(-w/2+w*.25,h/2-w*.14,w*.13,w*.1,-.1,0,6.283*clamp(o.ring));ctx.stroke()}}
  ctx.restore()}
// celular com uma mensagem digitada (bolha verde): para o "B" (remarcar)
function s8Type(u,p,txt){ctx.fillStyle='#efe7d8';ctx.fillRect(-280,-560,560,1120);ctx.fillStyle='#2c6c5b';ctx.fillRect(-280,-560,560,200);
  ctx.save();ctx.beginPath();ctx.arc(-190,-450,46,0,7);ctx.clip();ctx.fillStyle='#cfeee0';ctx.fillRect(-240,-500,100,100);luFace(-190,-426,.12,{headOnly:true});ctx.restore();
  ctx.textAlign='left';ctx.fillStyle='#fff';ctx.font='900 44px Inter';ctx.fillText('Lucas 💚',-120,-440);
  ctx.fillStyle='#fff';rr(-250,-320,470,190,24);ctx.fill();ctx.fillStyle='#16161c';ctx.font='700 36px Inter';['Amanhã, 19h, na','pracinha da escola.'].forEach((l,i)=>ctx.fillText(l,-224,-260+i*48));
  const n=Math.floor(clamp(p)*txt.length);const L=txt.slice(0,n).split('|');ctx.fillStyle='#d4f5c0';rr(-200,-80,450,60+Math.max(1,L.length)*52,24);ctx.fill();ctx.fillStyle='#16161c';ctx.font='800 38px Inter';L.forEach((l,i)=>ctx.fillText(l+(i===L.length-1&&u%0.6<.3?'|':''),-176,-20+i*52));
  ctx.fillStyle='#d8d4cc';ctx.fillRect(-280,200,560,360);ctx.fillStyle='#fff';for(let r=0;r<3;r++)for(let c=0;c<9;c++){rr(-262+c*58+(r%2)*20,226+r*86,50,70,10);ctx.fill()}}
// pracinha da escola, fim de tarde (folhas voando). gx = deslocamento
function s8Plaza(u){ctx.fillStyle=lg(0,H,['#ff9a6a','#ffc48a','#ffe0b0']);ctx.fillRect(0,0,W,H);sun(W/2,820,120,'#fff2c0','rgba(255,240,190,.55)');
  semBlur(()=>buildings(91,980,80,300,'#c88a7a','#ffd8a0',.06,0,1));
  ctx.fillStyle='#8fbf6a';ctx.fillRect(0,960,W,H-960);ctx.fillStyle='#d8c098';ctx.beginPath();ctx.moveTo(380,960);ctx.lineTo(700,960);ctx.lineTo(1000,H);ctx.lineTo(80,H);ctx.closePath();ctx.fill();
  parkTree(140,1080,1.5,'#5aa04a');parkTree(940,1060,1.4,'#4a9040');
  // escolinha no fundo
  ctx.fillStyle='#ffe08a';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(380,760,320,200);ctx.strokeRect(380,760,320,200);ctx.fillStyle='#c8352b';ctx.beginPath();ctx.moveTo(360,770);ctx.lineTo(540,660);ctx.lineTo(720,770);ctx.closePath();ctx.fill();ctx.stroke();txtC('ESCOLA',540,800,'900 34px Inter','#16161c',0);
  for(let i=0;i<8;i++){const r=rng(i+3500);const x=((r()*W+u*(120+r()*80))%(W+100))-50,y=700+r()*700+Math.sin(u*2+i)*40;ctx.save();ctx.translate(x,y);ctx.rotate(u*2+i);ctx.fillStyle=i%2?'#e8a13a':'#c8602a';ctx.beginPath();ctx.ellipse(0,0,16,8,0,0,7);ctx.fill();ctx.restore()}}

// =============================== CENAS ===============================
// 0. GANCHO: o espelho — a professora em choque (3400–3403.5)
scene(3400,3403.5,(t)=>{const u=t-3400;const z=lerp(1.18,1.04,easeOut(seg(u,0,.6)))+u*.02,sh=u<.3?Math.sin(u*90)*12:0;
  CAM(W/2+sh,H*.52,z,()=>{ctx.fillStyle=lg(0,H,['#fff1c8','#f8dca0','#e9c47c']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,245,220,A)',.4);
    neideFace(540,1010,.92,{open:1.4,brow:1,mouthO:.9,pupil:.6});
    for(let i=0;i<14;i++){const r=rng(i+3400);ctx.fillStyle='rgba(255,255,255,.6)';ctx.beginPath();ctx.arc(r()*W,(r()*H+u*80)%H,3+r()*4,0,7);ctx.fill()}});
  ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,110,W,430);
  hookTitle('IMAGINE...|ACORDAR NA|PROFESSORA 😳',seg(u,0,.35),240);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.85*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(3400.05);
// 1. placar → VENCEU B (3404–3409.5)
scene(3404,3409.5,(t)=>{const u=t-3404;s8Placar(u,seg(u,3.2,3.6));letterIn(u)});
// 2. ontem, no corpo da mãe, ele contou a verdade (3410–3413.5)
scene(3410,3413.5,(t)=>{const u=t-3410;ctx.fillStyle=lg(0,H,['#c8356a','#ff7ab0','#a8306a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,230,250,A)',.3);
  CAM(W/2,H*.55,lerp(1.0,1.06,seg(u,0,3.5)),()=>celiaFace(W/2,H*.64,.8,{open:1.05,brow:-.2,smile:4,py:20}));
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('ONTEM',W/2,300,'800 70px Oswald','#ffd84a',12);ctx.restore();
  if(u>.9){const k=easeBack(seg(u,.9,1.2));ctx.save();ctx.translate(W/2,430);ctx.scale(k,k);ctx.fillStyle='rgba(22,22,28,.92)';rr(-400,-60,800,120,30);ctx.fill();txtC('ELE, NO CORPO DA MÃE',0,2,'900 50px Inter','#fff');ctx.restore()}
  if(u>1.8){const k=easeBack(seg(u,1.8,2.1));ctx.save();ctx.translate(W/2,1480);ctx.scale(k,k);ctx.fillStyle='#2f55c8';rr(-380,-64,760,128,34);ctx.fill();txtC('CONTOU A VERDADE 💬',0,2,'900 60px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 3. [carta] "Foi sim. Ele mesmo vai te explicar." — a resposta enviada (3414–3417.5)
scene(3414,3417.5,(t)=>{const u=t-3414;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(140,170,255,A)',.3);
  CAM(W/2,H*.5,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>s6Phone(u,{bg:false,rot:0},()=>s7Reply(u,seg(u,.1,1.6),'Foi sim. Ele mesmo|vai te explicar.','#cfe0ff')));
  if(u>2.0){const k=easeBack(seg(u,2.0,2.3));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);ctx.fillStyle='#2fbf71';rr(-280,-60,560,120,30);ctx.fill();txtC('ENVIADO ✓✓',0,2,'900 60px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 4. e o Lucas respondeu na hora: ele digitando (3418–3421.5)
scene(3418,3421.5,(t)=>{const u=t-3418;ctx.fillStyle=lg(0,H,['#0f2a22','#1f4a3c','#0a1e18']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,190,A)',.22);
  CAM(W/2,H*.55,lerp(1.08,1.0,easeOut(seg(u,0,1))),()=>luFace(W/2,H*.64,.78,{open:1.05,brow:-.4,smile:-8,py:24}));
  ctx.save();ctx.translate(W/2,560);ctx.fillStyle='rgba(250,250,252,.95)';rr(-260,-60,520,120,40);ctx.fill();ctx.textAlign='left';ctx.fillStyle='#2c6c5b';ctx.font='800 40px Inter';ctx.fillText('Lucas digitando',-220,14);
  for(let i=0;i<3;i++){const b=Math.max(0,Math.sin(u*8-i*1.2));ctx.fillStyle='#2c6c5b';ctx.beginPath();ctx.arc(150+i*34,4-b*10,10,0,7);ctx.fill()}ctx.restore();
  if(u>.5){const k=easeBack(seg(u,.5,.8));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#2c6c5b';rr(-330,-64,660,128,34);ctx.fill();txtC('NA HORA! ⚡',0,2,'900 72px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 5. [carta] "Amanhã, sete da noite, na pracinha da escola." (3422–3425.5)
scene(3422,3425.5,(t)=>{const u=t-3422;ctx.fillStyle=lg(0,H,['#0f2a22','#1f4a3c','#0a1e18']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,190,A)',.22);
  CAM(W/2,H*.46,lerp(1.2,1.3,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.4);s7LucasMsg(seg(u,.1,.4),'Amanhã, 19h,|na pracinha|da escola.');ctx.restore()});
  if(u>1.9){const k=easeBack(seg(u,1.9,2.2));ctx.save();ctx.translate(W/2,1470);ctx.scale(k,k);txtC('A CONVERSA 😬',0,0,'900 100px Inter','#ffd84a',18);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3424.0);
// 6. por causa de vocês, a conversa vai acontecer: Matheus 🧡 — 19H — Lucas 💚 (3426–3429.5)
scene(3426,3429.5,(t)=>{const u=t-3426;ctx.fillStyle=lg(0,H,['#ff9a6a','#ffc48a','#ffe0b0']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(255,250,220,A)',.4);
  CAM(W/2,H*.55,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{
    const circ=(x,fn,col)=>{ctx.save();ctx.beginPath();ctx.arc(x,1000,190,0,7);ctx.fillStyle=col;ctx.fill();ctx.clip();fn();ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.arc(x,1000,190,0,7);ctx.stroke()};
    const p=easeOut(seg(u,.2,1.0));circ(lerp(120,260,p),()=>face(lerp(120,260,p),1090,.4,{smile:-2,brow:.3}),'#ffe0c8');circ(lerp(960,820,p),()=>luFace(lerp(960,820,p),1090,.4,{smile:-4,brow:-.3}),'#cfeee0');
    const k=easeBack(seg(u,.9,1.2));ctx.save();ctx.translate(540,1000);ctx.scale(k,k);ctx.fillStyle='#16161c';ctx.beginPath();ctx.arc(0,0,110,0,7);ctx.fill();txtC('19H',0,4,'900 66px Oswald','#ffd84a');ctx.restore()});
  txtC('POR CAUSA DE VOCÊS 👆',W/2,320,'900 66px Inter','#fff',16);
  if(u>1.5){const k=easeBack(seg(u,1.5,1.8));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#2f55c8';rr(-420,-64,840,128,34);ctx.fill();txtC('A CONVERSA VAI ROLAR!',0,2,'900 58px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 8. segunda, sete da manhã: ela acorda com uma pilha de provas na cama (3430–3433.5)
scene(3430,3433.5,(t)=>{const u=t-3430;const op=u<.4?0:u<.6?.3:easeOut(seg(u,.7,1.1));
  CAM(lerp(W/2,W/2+40,easeIO(seg(u,0,3.5))),H*.5,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{s8Room(u);
    ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(90,1180,900,360,90);ctx.fill();ctx.stroke();
    neideFace(380,1250,.66,{headOnly:true,open:op*1.1,lid:op>.3?lerp(.4,0,seg(u,.9,1.4)):0,brow:op>.9?.7:0,mouthO:op>.9?.4:0,px:op>.9?30:0});
    ctx.fillStyle='#f2c46a';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-20,1440,W+40,520,40);ctx.fill();ctx.stroke();
    s8Stack(790,1500,1.25,Math.floor(lerp(4,14,easeOut(seg(u,.2,1.4)))))});
  if(u>1.3){const k=easeBack(seg(u,1.3,1.6));ctx.save();ctx.translate(W/2,330);ctx.scale(k,k);ctx.fillStyle='#2f55c8';rr(-400,-64,800,128,34);ctx.fill();txtC('PILHA DE PROVAS! 📚',0,2,'900 64px Inter','#fff');ctx.restore()}
  grade('rgba(255,220,170,.18)','rgba(120,70,40,.12)');letterIn(u);
});
// 9. no espelho: cabelo grisalho, óculos na cordinha — ela inteira de frente (3434–3437.5)
scene(3434,3437.5,(t)=>{const u=t-3434;const z=lerp(1.0,1.12,easeOut(seg(u,.3,.7)));const sh=(u>.3&&u<.8)?Math.sin(u*80)*10:0;
  CAM(W/2+sh,H*.5,z,()=>{ctx.fillStyle=lg(0,H,['#fff1c8','#f8dca0','#e9c47c']);ctx.fillRect(0,0,W,H);
    ctx.save();ctx.beginPath();rr(150,260,780,1300,380);ctx.clip();ctx.fillStyle=lg(260,1560,['#cfe2ee','#a9c4d6']);ctx.fillRect(150,260,780,1300);
    neideFront(540,1430,3.0,{look:0,eye:1.3,brow:1,mouthO:.7});
    ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.moveTo(150,260);ctx.lineTo(480,260);ctx.lineTo(150,900);ctx.closePath();ctx.fill();ctx.restore();
    ctx.strokeStyle='#c98f5e';ctx.lineWidth=28;ctx.beginPath();rr(150,260,780,1300,380);ctx.stroke()});
  if(u>.3&&u<.5){ctx.fillStyle=`rgba(255,255,255,${.6*(1-seg(u,.3,.5))})`;ctx.fillRect(0,0,W,H)}
  if(u>.8){const k=easeBack(seg(u,.8,1.1));ctx.save();ctx.translate(W/2,250);ctx.scale(k,k);txtC('GRISALHO?! 😱',0,0,'900 92px Inter','#ffd84a',18);ctx.restore()}
  if(u>1.6){const k=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(W/2,1700);ctx.scale(k,k);ctx.fillStyle='#c8356a';rr(-380,-60,760,120,30);ctx.fill();txtC('ÓCULOS NA CORDINHA 👓',0,2,'900 54px Inter','#fff');ctx.restore()}
});
SHAKE.push(3434.32);
// 10. "HOJE ELE É: PROFESSORA NEIDE" — crachá girando (3438–3441.5)
scene(3438,3441.5,(t)=>{const u=t-3438;ctx.fillStyle=lg(0,H,['#5a3a08','#a8741a','#3a2404']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,220,150,A)',.28);
  const sp=lerp(Math.PI*2,0,easeOut(seg(u,0,1.0)));CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{ctx.save();ctx.translate(W/2,H*.52);ctx.scale(Math.cos(sp),1);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-330,-430,660,860,30);ctx.fill();ctx.stroke();
    ctx.fillStyle='#b0832a';ctx.beginPath();rr(-330,-430,660,150,30);ctx.fill();ctx.fillRect(-330,-320,660,40);ctx.fillStyle='#fff';ctx.font='800 50px Oswald';ctx.textAlign='center';ctx.fillText('HOJE ELE É',0,-335);
    ctx.save();ctx.beginPath();rr(-170,-240,340,340,20);ctx.clip();ctx.fillStyle='#fff0c8';ctx.fillRect(-170,-240,340,340);neideFace(0,-20,.28,{smile:12});ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-240,340,340,20);ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 66px Inter';ctx.fillText('PROFESSORA',0,180);ctx.fillText('NEIDE',0,250);ctx.fillStyle='#b0832a';ctx.font='800 46px Inter';ctx.fillText('2º ano · 30 anos de aula',0,325);ctx.restore()});
  letterIn(u);
});
// 11. deu aula pro Matheus e pro Lucas: foto da turma de 2009 (3442–3445.5)
scene(3442,3445.5,(t)=>{const u=t-3442;ctx.fillStyle=lg(0,H,['#ffd9a0','#ffb88a','#f08a7a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,250,220,A)',.4);
  CAM(W/2,H*.5,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.47);ctx.rotate(-.03);softShadow(8,470,380,20,.3);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillRect(-380,-460,760,920);ctx.strokeRect(-380,-460,760,920);
    ctx.save();ctx.beginPath();ctx.rect(-340,-420,680,680);ctx.clip();ctx.fillStyle=lg(-420,260,['#9fd0f0','#cfe8f4']);ctx.fillRect(-340,-420,680,680);ctx.fillStyle='#7cc46a';ctx.fillRect(-340,120,680,140);
    neideFace(0,-60,.42,{smile:14});withP(P,()=>face(-200,90,.3,{smile:16}));withP(COL[0],()=>face(200,90,.3,{smile:18}));ctx.restore();ctx.strokeRect(-340,-420,680,680);
    ctx.fillStyle='#3a3a48';ctx.font='600 76px Caveat';ctx.textAlign='center';ctx.fillText('2º ano · 2009',0,370);ctx.restore();
    if(u>1.0){const k=easeBack(seg(u,1.0,1.3));ctx.save();ctx.scale(1,1);[[W/2-200,H*.47+250,'MATHEUS 🧡'],[W/2+200,H*.47+250,'LUCAS 💚']].forEach(([x,y,l])=>{ctx.save();ctx.translate(x,y);ctx.scale(k,k);ctx.fillStyle='rgba(22,22,28,.9)';rr(-150,-36,300,72,20);ctx.fill();txtC(l,0,2,'900 36px Inter','#fff');ctx.restore()});ctx.restore()}});
  if(u>.4){const k=easeBack(seg(u,.4,.7));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-400,-64,800,128,34);ctx.fill();txtC('A PROFESSORA DOS DOIS!',0,2,'900 56px Inter','#ffd84a');ctx.restore()}
  letterIn(u);
});
// 12. "E repara no relógio. Meia-noite. O nono!" — a câmera vai até o relógio do quarto (3446–3449.5)
scene(3446,3449.5,(t)=>{const u=t-3446;const m=easeIO(seg(u,.2,1.8));CAM2(...((z)=>[Math.min(Math.max(lerp(W/2,210,m),540/z),W-540/z),Math.min(Math.max(lerp(H*.5,560,m),960/z),H-960/z),z])(lerp(1.0,2.4,m)),()=>s8Room(u));
  if(u>1.9){const k=seg(u,1.9,2.2);ctx.fillStyle=`rgba(20,16,40,${.85*k})`;ctx.fillRect(0,0,W,H);
    const L=['QUARTO','DIRETORA','LUCAS','RECEPÇÃO','PADARIA','PORTARIA','BIA','MÃE','PROFESSORA'];L.forEach((l,i)=>{const kk=easeBack(seg(u,2.0+i*.07,2.25+i*.07));if(kk<=0)return;const x=190+(i%3)*350,y=720+Math.floor(i/3)*300;ctx.save();ctx.translate(x,y);ctx.scale(kk,kk);clockFace(0,0,80,0,0);txtC(l,0,130,'900 30px Inter',i===8?'#ffd84a':'#cbb8ff',0);ctx.restore()});
    const k2=easeBack(seg(u,2.5,2.8));ctx.save();ctx.translate(W/2,400);ctx.scale(k2,k2);txtC('9º RELÓGIO',0,-60,'900 96px Inter','#ffd84a',16);txtC('PARADO! 00:00',0,60,'900 80px Inter','#fff',14);ctx.restore()}
  else{ctx.save();ctx.globalAlpha=seg(u,.1,.5);txtC('REPARA... 👀',W/2,1460,'900 90px Inter','#ffd84a',16);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3448.5);
// 13. aí o celular toca: o número do Matheus (3450–3453.5)
scene(3450,3453.5,(t)=>{const u=t-3450;ctx.fillStyle=lg(0,H,['#fff1d8','#f7dfba','#ecc996']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,700,'rgba(255,120,150,A)',.15);
  const vb=Math.sin(u*70)*(u%1<.6?6:0);CAM(W/2+vb,H*.55,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>neideFace(W/2,H*.64,.8,{open:1.25,brow:.9,mouthO:.35}));
  s2cCall(u,'MATHEUS','chamada recebida',seg(u,.1,.4));
  if(u%1<.6){ctx.save();ctx.translate(W/2,560);const k=1+.06*Math.sin(u*30);ctx.scale(k,k);txtC('TRIIIM! 📞',0,0,'900 110px Inter','#c8352b',18);ctx.restore()}
  letterIn(u);
});
// 14. [telefone] "Matheus, sou eu! Tô no seu corpo!" — o rosto do Matheus com a professora dentro (3454–3457.5)
scene(3454,3457.5,(t)=>{const u=t-3454;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.6,lerp(1.0,1.06,seg(u,0,3.5)),()=>face(W/2,H*.64,.85,{open:1.3,brow:1,mouthO:.4+.3*Math.abs(Math.sin(u*9)),px:Math.sin(u*3)*8}));
  s2cCall(u,'MATHEUS','chamada · 00:0'+Math.min(9,Math.floor(u*2+1)),1);
  s2bBubble(W/2,640,820,200,seg(u,.4,.7),'MATHEUS, SOU EU!|TÔ NO SEU CORPO! 😱','#b0832a',-80);
  neideInside(W-210,1460);letterIn(u);
});
// 15. [telefone] "Vai pra escola! O segundo ano te espera!" (3458–3461.5)
scene(3458,3461.5,(t)=>{const u=t-3458;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.62,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>{face(W/2,H*.68,.8,{open:1.15,brow:.5,mouthO:.3+.3*Math.abs(Math.sin(u*8)),px:-14});
    for(let i=0;i<4;i++){const k=seg(u,.4+i*.3,1.8+i*.3);if(k<=0||k>=1)continue;ctx.save();ctx.globalAlpha=1-k;txtC(i%2?'✏️':'🏫',220+i*220,1250-k*400,'900 90px Inter','#fff');ctx.restore()}});
  s2cCall(u,'MATHEUS','chamada · 00:1'+Math.min(9,Math.floor(u*2)),1);
  s2bBubble(W/2,640,820,200,seg(u,.3,.6),'VAI PRA ESCOLA!|O 2º ANO TE ESPERA! 🏫','#b0832a',-80);
  neideInside(W-210,1460);letterIn(u);
});
// 16. ele entra na sala: vinte crianças olhando (3462–3465.5)
scene(3462,3465.5,(t)=>{const u=t-3462;CAM(W/2,lerp(H*.56,H*.5,easeOut(seg(u,0,1.4))),lerp(1.25,1.0,easeOut(seg(u,0,1.4))),()=>s8Class(u,{look:0}));
  if(u>1.2){const k=easeBack(seg(u,1.2,1.5));ctx.save();ctx.translate(W/2,180+130);ctx.scale(k,k);ctx.fillStyle='#c8352b';rr(-380,-64,760,128,34);ctx.fill();txtC('VINTE CRIANÇAS! 😳',0,2,'900 64px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 17. "Bom dia, professora Neide!" — todas falando juntas (3466–3469.5)
scene(3466,3469.5,(t)=>{const u=t-3466;const sh=u>.2&&u<.6?Math.sin(u*70)*6:0;CAM(W/2+sh,H*.52,lerp(1.0,1.05,seg(u,0,3.5)),()=>s8Class(u,{mouth:u>.2&&u<2.0}));
  s2bBubble(W/2,420,880,190,seg(u,.2,.5),'BOM DIA,|PROFESSORA NEIDE! 👋','#2f55c8',-60);
  letterIn(u);
});
SHAKE.push(3466.25);
// 18. na janela, o gato laranja: ele sabe quem é (3470–3473.5)
scene(3470,3473.5,(t)=>{const u=t-3470;CAM2(...((z)=>[Math.min(Math.max(730,540/z),W-540/z),Math.min(Math.max(520,960/z),H-960/z),z])(lerp(2.0,2.15,easeIO(seg(u,0,3.5)))),()=>s8Class(u,{cat:()=>s2bCatFace(722,570,.36,u,{blink:u<.4||(u>2.6&&u<2.72),meow:u>1.0&&u<1.8?Math.sin(seg(u,1.0,1.8)*Math.PI):0,tilt:Math.sin(u*1.2)*.06})}));
  for(let i=0;i<5;i++){const k=seg(u,1.3+i*.25,2.6+i*.25);if(k<=0||k>=1)continue;const x=i%2?110:970,y=1500-k*500-i*40;ctx.save();ctx.globalAlpha=1-k;txtC('💙',x,y,'900 70px Inter','#fff');ctx.restore()}
  if(u>1.0)s2bBubble(W/2,1420,560,160,seg(u,1.0,1.3),'MIAU! (é você!)','#e8752a',-60);
  letterIn(u);
});
// 19. na gaveta da mesa, uma pasta antiga (3474–3477.5)
scene(3474,3477.5,(t)=>{const u=t-3474;ctx.fillStyle=lg(0,H,['#5a3a22','#7a5434','#3a2414']);ctx.fillRect(0,0,W,H);
  const op=easeOut(seg(u,.3,1.2));CAM(W/2,H*.55,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{
    // mesa vista de frente, gaveta abrindo pra frente (cresce e desce)
    ctx.fillStyle='#8a5a34';ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.fillRect(60,560,960,800);ctx.strokeRect(60,560,960,800);ctx.fillStyle='#a8744a';ctx.fillRect(60,560,960,60);ctx.strokeRect(60,560,960,60);
    const gy=lerp(760,900,op),gs=lerp(1,1.12,op);ctx.save();ctx.translate(540,gy);ctx.scale(gs,gs);
    ctx.fillStyle='#4a2c18';ctx.fillRect(-380,-40,760,120*op+20);ctx.fillStyle='#9a6a40';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillRect(-400,60*op,800,240);ctx.strokeRect(-400,60*op,800,240);ctx.fillStyle='#e8c070';rr(-70,60*op+100,140,30,12);ctx.fill();ctx.stroke();
    // pasta saindo da gaveta
    if(op>.3){const pk=easeOut(seg(u,1.0,1.8));ctx.save();ctx.translate(0,-30-pk*250);ctx.rotate(-.04);ctx.fillStyle='#c8a050';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(-260,-150,520,300);ctx.strokeRect(-260,-150,520,300);ctx.fillStyle='#b08840';ctx.fillRect(-260,-150,180,40);
      ctx.fillStyle='#fffdf2';ctx.fillRect(-160,-60,320,110);ctx.strokeRect(-160,-60,320,110);ctx.fillStyle='#2a3a8a';ctx.font='700 54px Caveat';ctx.textAlign='center';ctx.fillText('TURMA 2009',0,16);ctx.restore()}
    ctx.restore()});
  for(let i=0;i<10;i++){const r=rng(i+3474);ctx.fillStyle='rgba(255,240,200,.5)';ctx.beginPath();ctx.arc(200+r()*680,(800+r()*600-u*60*r())%H,3+r()*4,0,7);ctx.fill()}
  if(u>1.8){const k=easeBack(seg(u,1.8,2.1));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-340,-64,680,128,34);ctx.fill();txtC('UMA PASTA ANTIGA 📁',0,2,'900 58px Inter','#ffd84a');ctx.restore()}
  letterIn(u);
});
// 20. redações da turma dele, aos sete anos: as folhas se espalham (3478–3481.5)
scene(3478,3481.5,(t)=>{const u=t-3478;ctx.fillStyle=lg(0,H,['#5a3a22','#7a5434','#3a2414']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,800,'rgba(255,230,170,A)',.25);
  const NM=['Ana · 7 anos','Lucas · 7 anos','Bia · 7 anos','Caio · 7 anos','Matheus · 7 anos'];
  CAM(W/2,H*.52,lerp(1.0,1.05,seg(u,0,3.5)),()=>{NM.forEach((n,i)=>{const k=easeOut(seg(u,.1+i*.2,.7+i*.2));const a=(i-2)*.22;const x=W/2+Math.sin(a)*420*k,y=1060-Math.cos(a)*180*k+Math.abs(i-2)*40*k;
    ctx.save();ctx.translate(x,y);ctx.rotate(a*.8*k);ctx.fillStyle='#fffdf2';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.fillRect(-170,-230,340,460);ctx.strokeRect(-170,-230,340,460);
    ctx.strokeStyle='rgba(80,120,200,.35)';ctx.lineWidth=2;for(let l=0;l<8;l++){ctx.beginPath();ctx.moveTo(-150,-120+l*42);ctx.lineTo(150,-120+l*42);ctx.stroke()}
    ctx.fillStyle=i===4?'#c8352b':'#2a3a8a';ctx.font='700 44px Caveat';ctx.textAlign='center';ctx.fillText(n,0,-170);ctx.restore()})});
  const k=easeBack(seg(u,.4,.7));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-380,-64,760,128,34);ctx.fill();txtC('TURMA DELE · 7 ANOS!',0,2,'900 58px Inter','#ffd84a');ctx.restore();
  letterIn(u);
});
// 21. uma tem o nome dele: "Meu melhor amigo" (3482–3485.5)
scene(3482,3485.5,(t)=>{const u=t-3482;ctx.fillStyle=lg(0,H,['#5a3a22','#7a5434','#3a2414']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,230,170,A)',.35);
  const z=lerp(.8,1.0,easeOut(seg(u,0,.8)));CAM(W/2,H*.5,z,()=>s8Essay(W/2,H*.5,820,-.02,{lines:0,sig:false}));
  if(u>1.1){ctx.save();ctx.globalAlpha=seg(u,1.1,1.4);ctx.strokeStyle='#ff3a4a';ctx.lineWidth=10;ctx.beginPath();ctx.ellipse(W/2,H*.5-410,370,80,0,0,6.283*seg(u,1.1,1.7));ctx.stroke();ctx.restore()}
  letterIn(u);
});
// 22. [carta] "O Lucas é meu melhor amigo. Amigo de verdade não esconde nada." (3486–3489.5)
scene(3486,3489.5,(t)=>{const u=t-3486;ctx.fillStyle=lg(0,H,['#5a3a22','#7a5434','#3a2414']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,230,170,A)',.35);
  const m=easeIO(seg(u,0,3.5));CAM(W/2,lerp(H*.5,H*.46,m),lerp(1.0,1.18,m),()=>s8Essay(W/2,H*.5,820,-.02,{lines:seg(u,.1,2.2),sig:false,hl:u>2.2}));
  letterIn(u);
});
// 23. "E repara na assinatura. Só um M." — zoom na assinatura (3490–3493.5)
scene(3490,3493.5,(t)=>{const u=t-3490;ctx.fillStyle=lg(0,H,['#5a3a22','#7a5434','#3a2414']);ctx.fillRect(0,0,W,H);
  const m=easeIO(seg(u,.1,1.4));const sx=W/2-820/2+820*.25,sy=H*.5+820*1.35/2-820*.14;
  CAM2(...((z)=>[Math.min(Math.max(lerp(W/2,sx,m),540/z),W-540/z),Math.min(Math.max(lerp(H*.5,sy,m),960/z),H-960/z),z])(lerp(1.0,2.2,m)),()=>{ctx.fillStyle=lg(0,H,['#5a3a22','#7a5434','#3a2414']);ctx.fillRect(-200,-200,W+400,H+400);s8Essay(W/2,H*.5,820,0,{lines:1,ring:seg(u,1.4,2.0)})});
  ctx.save();ctx.globalAlpha=seg(u,.1,.5);ctx.fillStyle='rgba(22,22,28,.88)';rr(W/2-330,260,660,140,34);ctx.fill();txtC('REPARA... 👀',W/2,330,'900 90px Inter','#ffd84a',16);ctx.restore();
  if(u>2.0){const k=easeBack(seg(u,2.0,2.3));ctx.save();ctx.translate(W/2,1500);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-300,-64,600,128,34);ctx.fill();txtC('SÓ UM "M."',0,2,'900 70px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 24. igual às mensagens misteriosas: a redação e a mensagem "— M." lado a lado (3494–3497.5)
scene(3494,3497.5,(t)=>{const u=t-3494;ctx.fillStyle=lg(0,H,['#1a1430','#2e2450','#120e22']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(180,150,255,A)',.25);
  CAM(W/2,H*.52,lerp(1.0,1.05,easeIO(seg(u,0,3.5))),()=>{
    ctx.save();ctx.translate(lerp(-200,280,easeOut(seg(u,0,.6))),620);ctx.scale(.62,.62);ctx.fillStyle='#fffdf2';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.rotate(-.05);ctx.fillRect(-300,-200,600,400);ctx.strokeRect(-300,-200,600,400);ctx.fillStyle='#2a3a8a';ctx.font='700 70px Caveat';ctx.textAlign='left';ctx.fillText('Meu melhor amigo',-250,-90);ctx.font='700 130px Caveat';ctx.fillText('M.',-230,120);
    ctx.strokeStyle='#ff3a4a';ctx.lineWidth=10;ctx.beginPath();ctx.ellipse(-170,80,120,90,0,0,7);ctx.stroke();ctx.restore();
    txtC('2009',280,860,'900 50px Inter','#cbb8ff',0);
    ctx.save();ctx.translate(lerp(W+200,W/2+60,easeOut(seg(u,.5,1.1))),1150);ctx.scale(.9,.9);s6Msg(1,'Toda mentira|muda de lugar.','— M.');ctx.restore();
    if(u>1.1)txtC('HOJE (mensagem misteriosa)',W/2+60,1520,'800 40px Inter','#cbb8ff',0)});
  if(u>1.4){const k=easeBack(seg(u,1.4,1.7));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);txtC('O MESMO "M."!? 😳',0,0,'900 92px Inter','#ffd84a',18);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3495.5);
// 25. aí um menino levanta a mão (3498–3501.5)
scene(3498,3501.5,(t)=>{const u=t-3498;const m=easeIO(seg(u,.3,2.0));const bx=(W/6)*2.5,by=1330;
  CAM2(...((z)=>[Math.min(Math.max(lerp(W/2,bx,m),540/z),W-540/z),Math.min(Math.max(lerp(H*.52,by-80,m),960/z),H-960/z),z])(lerp(1.0,1.7,m)),()=>s8Class(u,{hand:seg(u,.2,.7)}));
  if(u>.8){const k=easeBack(seg(u,.8,1.1));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-300,-64,600,128,34);ctx.fill();txtC('UMA MÃO! ✋',0,2,'900 70px Inter','#ffd84a');ctx.restore()}
  letterIn(u);
});
// 26. "Professora, fui eu que derrubei a tinta. Desculpa." — o menino de perto, tinta no chão (3502–3505.5)
scene(3502,3505.5,(t)=>{const u=t-3502;ctx.fillStyle=lg(0,H,['#fdf1d6','#f4e2b8','#e9d09a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,800,'rgba(255,250,230,A)',.35);
  CAM(W/2,H*.55,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{ctx.fillStyle='#c8a878';ctx.fillRect(0,1300,W,H-1300);
    // pote de tinta virado e a poça azul no chão
    ctx.fillStyle='#3a7ae0';ctx.beginPath();ctx.ellipse(860,1760,200,60,0,0,7);ctx.fill();ctx.save();ctx.translate(960,1730);ctx.rotate(1.3);ctx.fillStyle='#fff';ctx.strokeStyle=OUT;ctx.lineWidth=6;rr(-50,-60,100,120,14);ctx.fill();ctx.stroke();ctx.fillStyle='#3a7ae0';ctx.fillRect(-50,-60,100,30);ctx.restore();
    const KP={hood:'#5a8ae0',hoodS:'#3f6ac0',hair:'#6a3a1a',skin:'#c98a62',skinS:'#a86c48'};withP(KP,()=>face(440,1000,.62,{brow:-.5,smile:-10,py:16,px:-6,mouthO:u<2.4?.18+.2*Math.abs(Math.sin(u*8)):0}));
    // carteira na frente dele (esconde a base do corpo)
    ctx.fillStyle='#d89a5a';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(60,1420,760,90,14);ctx.fill();ctx.stroke();ctx.fillStyle='#b87a3a';ctx.fillRect(110,1510,660,260);ctx.strokeRect(110,1510,660,260)});
  s2bBubble(W/2,420,860,190,seg(u,.2,.5),'FUI EU QUE DERRUBEI|A TINTA... DESCULPA 😔','#2f55c8',-160);
  letterIn(u);
});
// 27. sete anos, e mais coragem que ele: a professora (Matheus dentro) olhando (3506–3509.5)
scene(3506,3509.5,(t)=>{const u=t-3506;ctx.fillStyle=lg(0,H,['#d9a43a','#f2c46a','#b0832a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,250,220,A)',.35);
  CAM(W/2,H*.55,lerp(1.08,1.0,easeOut(seg(u,0,1))),()=>neideFace(W/2,H*.64,.8,{open:1.1,brow:.6,smile:lerp(0,-6,seg(u,1,1.6)),py:4}));
  const k=easeBack(seg(u,.2,.5));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);txtC('7 ANOS...',0,0,'900 110px Inter','#fff',18);ctx.restore();
  if(u>1.2){const k2=easeBack(seg(u,1.2,1.5));ctx.save();ctx.translate(W/2,1480);ctx.scale(k2,k2);ctx.fillStyle='#16161c';rr(-430,-64,860,128,34);ctx.fill();txtC('MAIS CORAGEM QUE ELE 😮',0,2,'900 56px Inter','#ffd84a');ctx.restore()}
  letterIn(u);
});
// 28. "E você? Teria essa coragem?" (3510–3513.5)
scene(3510,3513.5,(t)=>{const u=t-3510;ctx.fillStyle=lg(0,H,['#c8356a','#ff7ab0','#a8306a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,230,250,A)',.3);
  CAM(W/2,H*.52,lerp(1.12,1.0,easeOut(seg(u,0,.8))),()=>neideFace(W/2,H*.62,.8,{open:1.15,brow:.6,smile:lerp(0,6,seg(u,.6,1)),px:0,py:6}));
  const k=easeBack(seg(u,.2,.6));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);txtC('E VOCÊ? 👀',0,0,'900 120px Inter','#fff',20);ctx.restore();
  if(u>1.0){ctx.save();ctx.globalAlpha=seg(u,1.0,1.4);txtC('TERIA ESSA CORAGEM? 🤔',W/2,440,'900 62px Inter','#ffd84a',14);ctx.restore()}
  letterIn(u);
});
// 29. fim da tarde: sala vazia, o celular vibra na mesa (3514–3517.5)
scene(3514,3517.5,(t)=>{const u=t-3514;ctx.fillStyle=lg(0,H,['#ff9a6a','#ffc48a','#e8a070']);ctx.fillRect(0,0,W,H);
  CAM(W/2,H*.55,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{
    ctx.save();ctx.beginPath();rr(300,260,480,520,14);ctx.clip();ctx.fillStyle=lg(260,780,['#ff8a5a','#ffc08a']);ctx.fillRect(300,260,480,520);sun(540,700,90,'#fff2c0','rgba(255,240,190,.55)');ctx.restore();ctx.strokeStyle='#fffdf6';ctx.lineWidth=16;ctx.beginPath();rr(300,260,480,520,14);ctx.stroke();
    ctx.fillStyle='#c8a878';ctx.fillRect(0,1100,W,H-1100);ctx.fillStyle='#8a5a34';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillRect(-20,1200,W+40,300);ctx.strokeRect(-20,1200,W+40,300);ctx.fillStyle='#a8744a';ctx.fillRect(-20,1200,W+40,40);
    s8Stack(240,1200,.9,8);
    const vb=u%1<.6?Math.sin(u*80)*8:0;ctx.save();ctx.translate(640+vb,1170);ctx.rotate(-.1);ctx.fillStyle='#0d0e12';rr(-80,-140,160,280,26);ctx.fill();ctx.fillStyle='#2fbf71';rr(-66,-124,132,248,18);ctx.fill();txtC('📞',0,-20,'900 60px Inter','#fff');txtC('MATHEUS',0,60,'900 24px Inter','#fff');ctx.restore()});
  if(u%1<.6){ctx.save();ctx.translate(W/2,1600);const k=1+.06*Math.sin(u*30);ctx.scale(k,k);txtC('BZZZ! 📳',0,0,'900 100px Inter','#c8352b',16);ctx.restore()}
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('FIM DA TARDE',W/2,960,'800 76px Oswald','#fff',12);ctx.restore();
  letterIn(u);
});
// 30. [telefone] "Tô indo encontrar o Lucas! O que eu falo?" — Matheus (a professora dentro) a caminho, na pracinha (3518–3521.5)
scene(3518,3521.5,(t)=>{const u=t-3518;CAM(W/2,H*.55,lerp(1.0,1.05,seg(u,0,3.5)),()=>{s8Plaza(u);
    ctx.save();ctx.beginPath();ctx.arc(W/2,1180,300,0,7);ctx.fillStyle='rgba(255,240,220,.92)';ctx.fill();ctx.clip();face(W/2,1260,.55,{open:1.25,brow:1,mouthO:.3+.3*Math.abs(Math.sin(u*9)),sweat:1});ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.arc(W/2,1180,300,0,7);ctx.stroke()});
  s2cCall(u,'MATHEUS','chamada · 00:0'+Math.min(9,Math.floor(u*2+1)),1);
  s2bBubble(W/2,620,820,200,seg(u,.3,.6),'TÔ INDO ENCONTRAR O|LUCAS! O QUE EU FALO? 😰','#b0832a',-80);
  neideInside(W-210,1640);letterIn(u);
});
// 31. A?: ela pede desculpa por ele — Matheus (professora dentro) e Lucas no banco da pracinha (3522–3525.5)
scene(3522,3525.5,(t)=>{const u=t-3522;CAM(W/2,H*.55,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{s8Plaza(u);
    const circ=(x,fn,col)=>{ctx.save();ctx.beginPath();ctx.arc(x,1150,190,0,7);ctx.fillStyle=col;ctx.fill();ctx.clip();fn();ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.arc(x,1150,190,0,7);ctx.stroke()};
    circ(270,()=>face(270,1240,.4,{smile:8,mouthO:u>.5&&u<2.2?.3+.2*Math.abs(Math.sin(u*9)):0,px:14}),'#ffe0c8');circ(810,()=>luFace(810,1240,.4,{smile:-2,px:-14}),'#cfeee0');
    neideInside(270,1430)});
  txtC('A?',W/2,300,'900 110px Inter','#7dffa8',20);
  s2bBubble(W/2,640,700,170,seg(u,.5,.8),'DESCULPA, LUCAS! 🙏','#1f8a4a',-260);
  letterIn(u);
});
// 32. o Lucas perdoa hoje... mas não foi ele que pediu (3526–3529.5)
scene(3526,3529.5,(t)=>{const u=t-3526;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.3);
  CAM(W/2,H*.55,lerp(1.0,1.06,seg(u,0,3.5)),()=>luFace(W/2,H*.62,.78,{smile:lerp(0,16,seg(u,.2,.7)),open:lerp(1,.8,seg(u,.2,.7))}));
  for(let i=0;i<5;i++){const k=seg(u,.4+i*.25,1.6+i*.25);if(k<=0||k>=1)continue;ctx.save();ctx.globalAlpha=1-k;txtC('💚',180+i*180,1300-k*500,'900 70px Inter','#fff');ctx.restore()}
  if(u>.4&&u<1.6){const k=easeBack(seg(u,.4,.7));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#fff';rr(-300,-64,600,128,34);ctx.fill();txtC('PERDOADO 💚',0,2,'900 66px Inter','#1f8a4a');ctx.restore()}
  if(u>1.6){const k=easeBack(seg(u,1.6,1.85));ctx.save();ctx.translate(W/2,330);ctx.rotate(-.08);ctx.scale(k,k);ctx.strokeStyle='#ffd84a';ctx.lineWidth=12;rr(-400,-80,800,160,20);ctx.stroke();txtC('MAS NÃO FOI ELE 😶',0,4,'900 70px Inter','#ffd84a',8);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3527.65);
// 33. B?: remarcar e pedir desculpa com a própria boca (3530–3533.5)
scene(3530,3533.5,(t)=>{const u=t-3530;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(140,170,255,A)',.3);
  CAM(W/2,H*.52,lerp(1.0,1.06,seg(u,0,3.5)),()=>s6Phone(u,{bg:false,rot:0},()=>s8Type(u,seg(u,.3,2.2),'Remarca pra amanhã?|Quero te pedir|desculpa EU MESMO.')));
  txtC('B?',W/2,300,'900 110px Inter','#ffd84a',20);
  if(u>1.0){ctx.save();ctx.globalAlpha=seg(u,1.0,1.4);ctx.fillStyle='rgba(0,0,0,.6)';rr(90,1400,900,120,30);ctx.fill();txtC('COM A PRÓPRIA BOCA 💬',W/2,1462,'900 60px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 34. mas o Lucas pode achar que ele fugiu de novo (3534–3537.5)
scene(3534,3537.5,(t)=>{const u=t-3534;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);
  const sh=u>1.2&&u<1.5?Math.sin(u*80)*8:0;CAM(W/2+sh,H*.55,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>luFace(W/2,H*.64,.78,{open:lerp(1,1.2,seg(u,.2,.6)),brow:lerp(0,-.6,seg(u,1.0,1.4)),smile:u>1.0?-14:0}));
  s2bBubble(W/2,620,700,170,seg(u,.3,.6),'FUGIU DE NOVO?! 😠','#2c6c5b',-60);
  letterIn(u);
});
SHAKE.push(3535.2);
// 35. "Pedir desculpa é fácil. Difícil é pedir com a própria voz." — o Matheus de verdade, ondas de voz saindo dele (3538–3541.5)
scene(3538,3541.5,(t)=>{const u=t-3538;ctx.fillStyle=lg(0,H,['#2a1a40','#5a3a6a','#ffb88a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,900,'rgba(255,230,180,A)',.45);beams(W/2,200,1.57,5,1500,.07);
  CAM(W/2,H*.56,lerp(1.0,1.05,easeIO(seg(u,0,3.5))),()=>{face(W/2,H*.68,.62,{open:1,brow:.2,mouthO:u>1.4?.3+.15*Math.abs(Math.sin(u*7)):0,smile:4});
    if(u>1.4){for(let i=0;i<4;i++){const ph=((u-1.4)*.8+i/4)%1;ctx.save();ctx.globalAlpha=(1-ph)*.9;ctx.strokeStyle='#ffd84a';ctx.lineWidth=10;const my=H*.68+215*.62;for(const sd of[-1,1]){ctx.beginPath();ctx.arc(W/2,my,230+ph*260,sd>0?-.5:Math.PI-.5,sd>0?.5:Math.PI+.5);ctx.stroke()}ctx.restore()}}});
  txtC('PEDIR DESCULPA É FÁCIL...',W/2,300,'900 62px Inter','#fff',16);
  if(u>1.6){const k=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(W/2,440);ctx.scale(k,k);txtC('...DIFÍCIL É COM A',0,0,'900 60px Inter','#ffd84a',14);txtC('PRÓPRIA VOZ 🗣️',0,80,'900 70px Inter','#ffd84a',14);ctx.restore()}
  letterIn(u);
});
// 36/37. ESCOLHA: A (verde) x B — sobre o rosto da professora (3542–3549)
scene(3542,3549,(t)=>{const u=t-3542;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  neideFace(W/2,H*.72,.75,{open:1,brow:.5,px:-20,py:10});ctx.fillStyle='rgba(10,8,14,.68)';ctx.fillRect(0,0,W,H);
  txtC('O QUE ELE FAZ?',W/2,320,'900 86px Inter','#fff',18);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));ctx.textAlign='left';
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,140,80,.95)';rr(70,430,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('A',120,590);ctx.font='800 50px Inter';ctx.fillText('ela pede desculpa',250,530);ctx.fillText('POR ELE 🙊',250,595);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(60,90,200,.95)';rr(70,690,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('B',120,850);ctx.font='800 50px Inter';ctx.fillText('remarcar e',250,790);ctx.fillText('ELE MESMO PEDIR 💬',250,855);ctx.restore();
  if(u>1.4){const k=.5+.5*Math.sin(u*5);ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('COMENTA A OU B 👇',W/2,1080,'900 74px Inter',`rgb(255,${200+55*k},74)`,16);ctx.restore()}
});
// FINAL: cartela da série (3590–3593.2)
scene(3590,3593.2,(t)=>{const u=t-3590;ctx.fillStyle='#07070c';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,50,W/2,H*.42,900);g.addColorStop(0,'rgba(255,190,90,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.36);ctx.scale(k,k);ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='900 92px Inter';ctx.fillText('E SE VOCÊ',0,0);ctx.fillText('ACORDASSE NA',0,110);ctx.fillStyle='#ffd84a';ctx.font='900 128px Inter';ctx.fillText('VIDA DE OUTRA',0,250);ctx.fillText('PESSOA?',0,390);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 9 · AMANHÃ 18H',W/2,H*.36+560);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.36+660);ctx.restore()});
