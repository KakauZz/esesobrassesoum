// ===================== SÉRIE 2 · EP. 4 — NO CORPO DO PADEIRO =====================
// Faixa 2600–2799 (cartão final 2790–2793.2). Consequência do voto B do EP. 3 (entrou na entrevista e deu o emprego pro Lucas):
// o Lucas foi contratado na Nova Era Tech, virou ALIADO ("te devo uma"), mas saiu da empresa (mesa vazia).
// Hoje o Matheus acorda no corpo do seu Zé, o padeiro da rua dele (e o Zé está no corpo do Matheus).
// Elementos novos (máx. 2): o seu Zé e o caderno do fiado (Matheus deve R$ 340 = exatamente o que falta pro aluguel).
// Pista escondida: o relógio da padaria parado em 00:00. Ambiente (não falado): vapor do pão, pombos levantando voo.

const ZE={skin:'#d9a27c',skinS:'#b98260',hair:'#8e8e96',hairL:'#b8b8c0',hood:'#f3efe6',hoodS:'#d6cfc0',hoodL:'#ffffff',pants:'#5a4636',pantsS:'#46362a'};
// bigode + chapéu de padeiro (coordenadas do face())
function zeTop(o){o=o||{};ctx.lineJoin='round';
  if(o.flour){ctx.fillStyle='rgba(255,255,255,.92)';ctx.beginPath();ctx.ellipse(20,105,50,34,.2,0,7);ctx.ellipse(-150,-150,40,24,-.3,0,7);ctx.fill()}
  ctx.fillStyle=ZE.hair;ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.beginPath();ctx.ellipse(-72,168,92,36,.18,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.ellipse(72,168,92,36,-.18,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle=ZE.hairL;ctx.beginPath();ctx.ellipse(-80,156,50,12,.18,0,7);ctx.ellipse(80,156,50,12,-.18,0,7);ctx.fill();
  if(o.noHat)return;
  ctx.fillStyle='#ffffff';ctx.strokeStyle=OUT;ctx.lineWidth=11;ctx.beginPath();ctx.arc(-170,-540,150,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(170,-540,150,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(0,-610,175,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle='#ffffff';ctx.fillRect(-300,-560,600,160);
  ctx.fillStyle='#f4f1ea';ctx.beginPath();rr(-300,-450,600,130,34);ctx.fill();ctx.stroke();ctx.fillStyle='rgba(0,0,0,.06)';ctx.fillRect(-290,-360,580,30)}
function zeFace(cx,cy,s,o){o=o||{};withP(ZE,()=>face(cx,cy,s,o));ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);zeTop(o);ctx.restore()}
function zeFront(x,y,s,pose){pose=pose||{};withP(ZE,()=>personFront(x,y,s,pose));const p=pose.walk;const bob=p!=null?-5*Math.abs(Math.cos(p)):0;
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.translate((pose.look||0)*8,-196+bob);ctx.scale(.16,.16);zeTop(pose);ctx.restore()}
// selo "DENTRO: ZÉ" (o Zé está no corpo do Matheus)
function zeInside(x,y){ctx.save();ctx.translate(x,y);ctx.fillStyle='rgba(255,255,255,.95)';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-150,-60,300,120,30);ctx.fill();ctx.stroke();
  ctx.save();ctx.beginPath();ctx.arc(-90,0,44,0,7);ctx.clip();ctx.fillStyle='#f4e2c4';ctx.fillRect(-140,-50,100,100);zeFace(-90,16,.1,{headOnly:true,smile:6});ctx.restore();
  ctx.fillStyle='#16161c';ctx.font='900 34px Inter';ctx.textAlign='left';ctx.fillText('DENTRO:',-36,-8);ctx.fillStyle='#b5651d';ctx.fillText('SEU ZÉ',-36,30);ctx.restore()}
// pão francês
function s4Pao(x,y,s,rot){ctx.save();ctx.translate(x,y);ctx.rotate(rot||0);ctx.scale(s,s);ctx.fillStyle='#d9963f';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();ctx.ellipse(0,0,70,40,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle='rgba(255,230,170,.5)';ctx.beginPath();ctx.ellipse(-14,-14,40,12,-.1,0,7);ctx.fill();ctx.strokeStyle='#a86a24';ctx.lineWidth=6;for(let k=-1;k<=1;k++){ctx.beginPath();ctx.moveTo(k*30-14,-14);ctx.quadraticCurveTo(k*30,-4,k*30+14,-18);ctx.stroke()}ctx.restore()}
// vapor (ambiente)
function s4Steam(x,y,u,n,w){for(let k=0;k<(n||3);k++){const ph=(u*.6+k/(n||3))%1;ctx.strokeStyle=`rgba(255,255,255,${.45*(1-ph)})`;ctx.lineWidth=10;ctx.lineCap='round';const xx=x+(k-((n||3)-1)/2)*(w||50);ctx.beginPath();ctx.moveTo(xx,y-ph*160);ctx.quadraticCurveTo(xx+26,y-50-ph*160,xx,y-100-ph*160);ctx.stroke()}}
// padaria por dentro (05h da manhã: lá fora ainda azul). o:{pan}
function s4Bakery(u,o){o=o||{};const pan=o.pan||0;ctx.fillStyle=lg(0,H,['#f6e7cc','#efd8b2','#d9b98a']);ctx.fillRect(0,0,W,H);
  ctx.save();ctx.translate(-pan,0);
  // azulejos
  ctx.strokeStyle='rgba(160,120,70,.18)';ctx.lineWidth=3;for(let y=640;y<1250;y+=70){ctx.beginPath();ctx.moveTo(-200,y);ctx.lineTo(W+900,y);ctx.stroke()}for(let x=-200;x<W+900;x+=70){ctx.beginPath();ctx.moveTo(x,640);ctx.lineTo(x,1250);ctx.stroke()}
  // placa
  ctx.fillStyle='#b5651d';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(120,200,640,150,30);ctx.fill();ctx.stroke();txtC('PADARIA DO ZÉ 🥖',440,276,'900 64px Oswald','#fff6dc');
  // relógio parado em 00:00 (pista escondida)
  clockFace(880,520,70,0,0);
  // prateleiras com pães
  for(let r=0;r<2;r++){const y=520+r*190;ctx.fillStyle='#8a5a36';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(100,y+40,640,26);ctx.strokeRect(100,y+40,640,26);for(let i=0;i<5;i++)s4Pao(170+i*125,y+8,.8,(i%2?.1:-.08))}
  // janela (lá fora, madrugada azul) com a rua
  ctx.save();ctx.beginPath();rr(1120,380,600,600,16);ctx.clip();ctx.fillStyle=lg(380,980,['#1f2a55','#3a4a85','#7a7fb0']);ctx.fillRect(1120,380,600,600);
  for(let i=0;i<16;i++){const r=rng(i+2604);ctx.fillStyle=`rgba(255,255,255,${.4+r()*.5})`;ctx.beginPath();ctx.arc(1120+r()*600,400+r()*300,2+r()*2,0,7);ctx.fill()}
  semBlur(()=>buildings(61,980,120,360,'#2a3566','#ffd98a',.2,500,1));ctx.restore();
  ctx.strokeStyle='#f4f1ea';ctx.lineWidth=16;ctx.beginPath();rr(1120,380,600,600,16);ctx.stroke();ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(1420,380);ctx.lineTo(1420,980);ctx.stroke();
  // forno com brilho
  ctx.fillStyle='#5a4a42';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(1800,560,420,520,20);ctx.fill();ctx.stroke();ctx.fillStyle='#ffb04a';ctx.beginPath();rr(1850,700,320,200,14);ctx.fill();ctx.stroke();glow(2010,800,320,'rgba(255,170,70,A)',.35);
  ctx.restore();
  ctx.fillStyle=lg(1250,H,['#b98a5a','#8d643e']);ctx.fillRect(0,1250,W,H-1250);
  ctx.strokeStyle='rgba(70,40,20,.18)';ctx.lineWidth=3;for(let i=-8;i<16;i++){const x0=W/2+(i*130-pan%130);ctx.beginPath();ctx.moveTo(W/2+(x0-W/2)*.4,1250);ctx.lineTo(W/2+(x0-W/2)*2.2,H);ctx.stroke()}}
// balcão-vitrine com pães (na frente das pessoas)
function s4Counter(y,pan){ctx.fillStyle='rgba(210,235,245,.55)';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(60-pan,y,960,240,16);ctx.fill();ctx.stroke();
  for(let i=0;i<6;i++)s4Pao(160+i*150-pan,y+150,.85,(i%2?.12:-.1));ctx.fillStyle='rgba(255,255,255,.25)';ctx.fillRect(80-pan,y+16,920,18);
  ctx.fillStyle='#8a5a36';ctx.fillRect(40-pan,y+240,1000,300);ctx.strokeRect(40-pan,y+240,1000,300);ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(40-pan,y+280,1000,14)}
// caderno do fiado aberto. o:{hl (destaca linha do Matheus), circ (círculo 0..1), rows}
function s4Book(cx,cy,s,o){o=o||{};ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);softShadow(10,470,480,50,.4);
  ctx.fillStyle='#2f5fa0';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-470,-440,940,900,24);ctx.fill();ctx.stroke();
  for(const sx of[-1,1]){ctx.fillStyle='#fffaf0';ctx.beginPath();rr(sx>0?6:-450,-420,444,860,12);ctx.fill();ctx.stroke();ctx.strokeStyle='rgba(80,120,200,.35)';ctx.lineWidth=3;for(let y=-330;y<420;y+=70){ctx.beginPath();ctx.moveTo(sx>0?30:-430,y);ctx.lineTo(sx>0?430:-30,y);ctx.stroke()}ctx.strokeStyle=OUT;ctx.lineWidth=8}
  ctx.fillStyle='#c8352b';ctx.font='700 64px Caveat';ctx.textAlign='center';ctx.fillText('FIADO',-225,-350);ctx.fillText('nov.',225,-350);
  const rows=o.rows||[['Dona Rosa','R$ 12'],['Bia','R$ 30'],['Seu Nico','R$ 8'],['Matheus','R$ 340']];
  rows.forEach(([n,v],i)=>{const y=-250+i*140;const side=i<2?-1:1;const yy=i<2?y:-250+(i-2)*140;const big=n==='Matheus';
    ctx.textAlign='left';ctx.fillStyle=big?'#16161c':'#3a3a48';ctx.font=(big?'700 66px':'700 60px')+' Caveat';ctx.fillText(n,side>0?40:-420,yy);ctx.textAlign='right';ctx.fillStyle=big?'#c8352b':'#3a3a48';ctx.fillText(v,side>0?420:-50,yy);
    if(big&&o.circ>0){ctx.save();ctx.strokeStyle='#c8352b';ctx.lineWidth=10;ctx.beginPath();ctx.ellipse(230,yy-20,220,70,-.04,-Math.PI/2,-Math.PI/2+Math.PI*2*clamp(o.circ));ctx.stroke();ctx.restore()}});
  ctx.restore()}
// placar de todas as redes (estilo EP. 10) — EP. 3: venceu B
function s4Placar(u,win){ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(90,140,255,A)',.25);
  txtC('PLACAR DO EP. 3',W/2,300,'900 86px Inter','#fff',16);txtC('somando todas as redes',W/2,390,'700 46px Inter','#bcd',0);
  const NET=[['TikTok','#111','#25f4ee'],['Instagram','#c13584','#fff'],['YouTube','#e62117','#fff']];const TX=['B','bbbbb','B 🚪','BBBBB','b!!','é a B','bbb','B 👀','Bbbbb','B'];
  ctx.save();ctx.beginPath();ctx.rect(0,460,W,860);ctx.clip();
  const n=Math.floor(u*6);for(let i=0;i<n;i++){const r=rng(i+2604);const age=u-i/6;const y=1300-age*560;if(y<420)continue;const side=i%2===0;const nt=NET[i%3];const txt=TX[Math.floor(r()*TX.length)];
    ctx.save();ctx.globalAlpha=Math.min(1,age*4);ctx.translate(side?70:590,y);ctx.fillStyle='rgba(255,255,255,.95)';rr(0,-46,420,92,30);ctx.fill();
    ctx.fillStyle=nt[1];ctx.beginPath();ctx.arc(46,0,30,0,7);ctx.fill();ctx.fillStyle=nt[2];ctx.font='900 28px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nt[0][0],46,2);
    ctx.textAlign='left';ctx.fillStyle='#777';ctx.font='700 24px Inter';ctx.fillText(nt[0],90,-16);ctx.fillStyle='#2f55c8';ctx.font='900 40px Inter';ctx.fillText(txt,90,22);ctx.restore()}
  ctx.restore();
  const c=Math.floor(Math.pow(clamp(u/2.9),2.2)*9999);const k=easeBack(seg(u,.1,.4));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-470,-90,940,180,36);ctx.fill();txtC(c>=9999?'+9999 COMENTÁRIOS':'💬 '+c.toLocaleString('pt-BR')+' comentários',0,0,'900 66px Oswald','#16161c');ctx.restore();
  if(win){const k2=easeBack(clamp(win));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(k2,k2);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(-W,-H,W*2,H*2);ctx.fillStyle='rgba(50,85,200,.97)';rr(-470,-260,940,520,46);ctx.fill();
    txtC('VENCEU B',0,-160,'900 110px Inter','#fff');txtC('ENTRAR E AJUDAR 🚪',0,-50,'900 60px Inter','#fff');
    ctx.fillStyle='rgba(0,0,0,.22)';rr(-430,10,860,220,26);ctx.fill();txtC('TIKTOK B 3 × A 0',0,55,'800 40px Inter','#fff');txtC('INSTAGRAM B 4 × A 0',0,110,'800 40px Inter','#fff');txtC('TOTAL: B 7 × A 0',0,180,'900 52px Oswald','#ffd84a');ctx.restore()}}

// =============================== CENAS ===============================
// 0. GANCHO: o reflexo na vitrine — bigode, chapéu de padeiro, cara de choque (2600–2603.5)
scene(2600,2603.5,(t)=>{const u=t-2600;const z=lerp(1.18,1.04,easeOut(seg(u,0,.6)))+u*.02,sh=u<.3?Math.sin(u*90)*12:0;
  CAM(W/2+sh,H*.52,z,()=>{ctx.fillStyle=lg(0,H,['#f6e7cc','#e9cfa4','#c9a476']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,220,160,A)',.4);
    zeFace(540,1000,.95,{open:1.4,brow:1,mouthO:.9,pupil:.6,flour:1});
    // mão no bigode
    ctx.save();ctx.translate(790,1180);ctx.rotate(-.5);ctx.fillStyle=ZE.skin;ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.beginPath();ctx.ellipse(0,0,80,116,0,0,7);ctx.fill();ctx.stroke();for(let k=0;k<4;k++){ctx.beginPath();ctx.ellipse(-38+k*26,-108,16,44,0,0,7);ctx.fill();ctx.stroke()}ctx.restore();
    for(let i=0;i<18;i++){const r=rng(i+2600);ctx.fillStyle='rgba(255,255,255,.8)';ctx.beginPath();ctx.arc(r()*W,(r()*H+u*120)%H,3+r()*4,0,7);ctx.fill()}});
  ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,110,W,430);
  hookTitle('IMAGINE...|ACORDAR NO|PADEIRO DA RUA 😳',seg(u,0,.35),240);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.85*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(2600.05);
// 1. placar → VENCEU B (2604–2609.5)
scene(2604,2609.5,(t)=>{const u=t-2604;s4Placar(u,seg(u,3.2,3.6));letterIn(u)});
// 2. ontem: no corpo do Lucas, ele entra na sala de entrevistas (a porta se abre, luz) (2610–2613.5)
scene(2610,2613.5,(t)=>{const u=t-2610;const op=easeIO(seg(u,.3,1.4));const k=easeIO(seg(u,.8,3.4));
  CAM(W/2,1100,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{ctx.fillStyle=lg(0,H,['#2a2f3a','#3a4150','#1c2028']);ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#fff6dc';ctx.fillRect(360,420,360,760);glow(540,800,lerp(400,800,op),'rgba(255,240,190,A)',lerp(.3,.7,op));
    // porta abrindo para a direita (gira na dobradiça da direita)
    ctx.save();ctx.translate(720,0);ctx.scale(lerp(1,.18,op),1);ctx.translate(-720,0);ctx.fillStyle='#6a4a32';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(360,420,360,760);ctx.strokeRect(360,420,360,760);
    ctx.fillStyle='#2f9a6a';rr(400,500,250,70,10);ctx.fill();txtC('ENTREVISTAS',525,536,'900 32px Inter','#fff');ctx.fillStyle='#e9d48a';ctx.beginPath();ctx.arc(400,820,16,0,7);ctx.fill();ctx.stroke();ctx.restore();
    ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.strokeRect(360,420,360,760);
    ctx.fillStyle=lg(1180,H,['#4a5060','#30343e']);ctx.fillRect(0,1180,W,H-1180);
    luFront(540,lerp(1460,1250,k),lerp(1.7,1.25,k),{back:true,walk:u>.8?u*7:null});});
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('ONTEM',W/2,300,'800 64px Oswald','#ff8a8a',0);ctx.restore();
  grade('rgba(255,200,120,.2)','rgba(30,40,80,.2)');letterIn(u);
});
// 3. o emprego foi pro Lucas: crachá CONTRATADO + confete (2614–2617.5)
scene(2614,2617.5,(t)=>{const u=t-2614;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,170,255,A)',.3);
  for(let i=0;i<40;i++){const r=rng(i+2614);const x=r()*W,y=((r()*H*.6+u*(380+r()*240))%(H+100))-80;ctx.save();ctx.translate(x,y);ctx.rotate(u*5+i);ctx.fillStyle=['#ffd84a','#ff7a5c','#7dffa8','#8fc0ff'][i%4];ctx.fillRect(-12,-6,24,12);ctx.restore()}
  CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>{ctx.strokeStyle='#2f9a6a';ctx.lineWidth=18;ctx.beginPath();ctx.moveTo(540,0);ctx.quadraticCurveTo(470,300,540,520);ctx.stroke();
    softShadow(W/2+20,1400,420,50,.45);ctx.save();ctx.translate(W/2,H*.52);ctx.rotate(Math.sin(u*2)*.04);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-330,-430,660,860,30);ctx.fill();ctx.stroke();
    ctx.fillStyle='#2f9a6a';ctx.beginPath();rr(-330,-430,660,150,30);ctx.fill();ctx.fillRect(-330,-320,660,40);txtC('NOVA ERA TECH',0,-350,'900 54px Oswald','#fff');
    ctx.save();ctx.beginPath();rr(-170,-240,340,340,20);ctx.clip();ctx.fillStyle='#cfe0f0';ctx.fillRect(-170,-240,340,340);luFace(0,-40,.42,{smile:16});ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-240,340,340,20);ctx.stroke();
    txtC('LUCAS',0,200,'900 72px Inter','#16161c');txtC('COORDENADOR',0,280,'900 52px Inter','#2f9a6a');
    if(u>.9){const k=seg(u,.9,1.15);ctx.save();ctx.translate(0,40);ctx.rotate(-.14);const sc=lerp(2.2,1,easeOut(k));ctx.scale(sc,sc);ctx.globalAlpha=clamp(k*3);ctx.strokeStyle='#1f8a4a';ctx.lineWidth=12;ctx.strokeRect(-290,-70,580,140);ctx.fillStyle='#1f8a4a';ctx.font='900 84px Inter';ctx.textAlign='center';ctx.fillText('CONTRATADO',0,30);ctx.restore()}
    ctx.restore()});
  letterIn(u);
});
SHAKE.push(2614.92);
// 4. por causa da escolha de vocês, o Lucas mandou uma mensagem (2618–2621.5)
scene(2618,2621.5,(t)=>{const u=t-2618;CAM(W/2,H*.48,lerp(1.0,1.06,seg(u,0,3.5)),()=>s2Phone(u,{time:'18:30',date:'quarta-feira',screen:['#163a2e','#2c6c5b','#0f261e'],bg:['#cfe0f2','#b9cfe6','#8fa9c6'],msgs:[['LUCAS 💚','Nova mensagem','agora',seg(u,.4,.8),'#2f9a6a']]}));
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('POR CAUSA DE VOCÊS...',W/2,300,'900 70px Inter','#16161c',0);ctx.restore();letterIn(u)});
// 5. [carta] "Consegui! Te devo uma, amigo!" (2622–2625.5)
scene(2622,2625.5,(t)=>{const u=t-2622;CAM(W/2,H*.5,lerp(1.05,1.14,easeIO(seg(u,0,3.5))),()=>s2bPhoneMsg(u,{time:'18:30',screen:['#163a2e','#2c6c5b','#0f261e'],bg:['#cfe0f2','#b9cfe6','#8fa9c6'],date:'quarta-feira',k:seg(u,.15,.5),tag:'Lucas',col:'#2f9a6a',icon:'💬',l1:'CONSEGUI!! 🎉',l2:'Te devo uma,',l3:'amigo! 💚'}));letterIn(u)});
// 6. agora o Lucas é um aliado: ele de frente, fundo de uma cor só, selo ALIADO (2626–2629.5)
scene(2626,2629.5,(t)=>{const u=t-2626;ctx.fillStyle='#e9b949';ctx.fillRect(0,0,W,H);
  CAM(W/2,1200,lerp(1.1,1.0,easeOut(seg(u,0,1.2))),()=>luFront(540,1280,2.4,{smile:14,look:0,eye:(u>2.2&&u<2.32)?.1:1}));
  const k=easeBack(seg(u,.5,.9));ctx.save();ctx.translate(W/2,420);ctx.scale(k,k);ctx.fillStyle='rgba(30,110,70,.96)';rr(-330,-80,660,160,36);ctx.fill();txtC('ALIADO 🤝',0,2,'900 84px Inter','#fff');ctx.restore();
  letterIn(u);
});
// 7. mas saiu da empresa: a mesa do Lucas vazia (2630–2633.5)
scene(2630,2633.5,(t)=>{const u=t-2630;CAM(W/2,1300,lerp(1.1,1.0,easeIO(seg(u,0,3.5))),()=>{s2Office(u,{pan:120});s2Desk(540,1400,1.0,{});
  ctx.save();ctx.translate(540,1300);ctx.fillStyle='#2c6c5b';ctx.strokeStyle=OUT;ctx.lineWidth=6;rr(-130,-40,260,80,10);ctx.fill();ctx.stroke();txtC('LUCAS',0,2,'900 46px Inter','#fff');ctx.restore();
  dust(u,2630,18,'rgba(255,240,200,A)')});
  if(u>.8){const k=easeBack(seg(u,.8,1.1));ctx.save();ctx.translate(W/2,420);ctx.scale(k,k);ctx.fillStyle='rgba(20,20,30,.85)';rr(-360,-80,720,160,36);ctx.fill();txtC('MESA VAZIA 😢',0,2,'900 66px Inter','#fff');ctx.restore()}
  grade('rgba(255,170,90,.15)','rgba(40,60,120,.22)');letterIn(u);
});
// 9. cinco da manhã: a padaria acesa, vapor saindo do pão (2634–2637.5)
scene(2634,2637.5,(t)=>{const u=t-2634;const pan=lerp(0,320,easeIO(seg(u,0,3.5)));CAM(W/2,1100,lerp(1.08,1.0,easeOut(seg(u,0,1.5))),()=>{s4Bakery(u,{pan});s4Counter(1250,pan*.2);
  for(let i=0;i<6;i++)s4Steam(160+i*150-pan*.2,1360,u+i*.3,2,30)});
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('05:00',W/2,1500,'800 70px Oswald','#fff6dc',12);ctx.restore();
  grade('rgba(255,190,120,.22)','rgba(60,40,20,.15)');letterIn(u);
});
// 10. ele acorda debruçado no balcão, com farinha no nariz (2638–2641.5)
scene(2638,2641.5,(t)=>{const u=t-2638;ctx.fillStyle=lg(0,H,['#f6e7cc','#efd8b2','#d9b98a']);ctx.fillRect(0,0,W,H);glow(W*.3,H*.25,800,'rgba(255,220,160,A)',.4);
  const op=u<.4?0:u<.6?.3:easeOut(seg(u,.7,1.1));
  CAM(W/2,H*.5,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>zeFace(W/2,H*.56,.95,{open:op*1.1,lid:op>.3?lerp(.4,0,seg(u,.9,1.4)):0,brow:op>.9?.6:0,flour:1,noHat:false}));
  for(let i=0;i<24;i++){const r=rng(i+2638);ctx.fillStyle='rgba(255,255,255,.75)';ctx.beginPath();ctx.arc(r()*W,(r()*H+u*90)%H,2+r()*4,0,7);ctx.fill()}
  if(u>1.5)s2bBubble(W/2,420,560,160,seg(u,1.5,1.8),'FARINHA? 😅','#b5651d',-60);
  letterIn(u);
});
// 11. na vitrine: o reflexo — bigode e chapéu de padeiro (2642–2645.5)
scene(2642,2645.5,(t)=>{const u=t-2642;const z=lerp(1.0,1.15,easeOut(seg(u,.3,.7)));const sh=(u>.3&&u<.8)?Math.sin(u*80)*10:0;
  CAM(W/2+sh,H*.47,z,()=>{ctx.fillStyle=lg(0,H,['#f6e7cc','#efd8b2','#d9b98a']);ctx.fillRect(0,0,W,H);
    ctx.save();ctx.beginPath();rr(110,300,860,1100,30);ctx.clip();ctx.fillStyle=lg(300,1400,['#bcd6e2','#93b4c6']);ctx.fillRect(110,300,860,1100);
    zeFace(540,980,.9,{open:lerp(1,1.45,seg(u,.25,.45)),brow:seg(u,.25,.45),mouthO:seg(u,.3,.5)*.9,pupil:.65});
    ctx.fillStyle='rgba(255,255,255,.16)';ctx.beginPath();ctx.moveTo(110,300);ctx.lineTo(430,300);ctx.lineTo(110,820);ctx.closePath();ctx.fill();
    for(let i=0;i<5;i++)s4Pao(220+i*160,1330,.9,(i%2?.1:-.1));ctx.restore();
    ctx.strokeStyle='#8a5a36';ctx.lineWidth=24;ctx.beginPath();rr(110,300,860,1100,30);ctx.stroke()});
  if(u>.3&&u<.5){ctx.fillStyle=`rgba(255,255,255,${.6*(1-seg(u,.3,.5))})`;ctx.fillRect(0,0,W,H)}
  if(u>.9){const k=easeBack(seg(u,.9,1.2));ctx.save();ctx.translate(W/2,230);ctx.scale(k,k);txtC('UM BIGODE?! 😱',0,0,'900 96px Inter','#ffd84a',18);ctx.restore()}
});
SHAKE.push(2642.32);
// 12. "HOJE ELE É: SEU ZÉ" — crachá girando (2646–2649.5)
scene(2646,2649.5,(t)=>{const u=t-2646;ctx.fillStyle=lg(0,H,['#5a3416','#8a5426','#3a2210']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,210,150,A)',.28);
  const sp=lerp(Math.PI*2,0,easeOut(seg(u,0,1.0)));CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{ctx.save();ctx.translate(W/2,H*.52);ctx.scale(Math.cos(sp),1);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-330,-430,660,860,30);ctx.fill();ctx.stroke();
    ctx.fillStyle='#b5651d';ctx.beginPath();rr(-330,-430,660,150,30);ctx.fill();ctx.fillRect(-330,-320,660,40);ctx.fillStyle='#fff';ctx.font='800 50px Oswald';ctx.textAlign='center';ctx.fillText('HOJE ELE É',0,-335);
    ctx.save();ctx.beginPath();rr(-170,-240,340,340,20);ctx.clip();ctx.fillStyle='#f4e2c4';ctx.fillRect(-170,-240,340,340);zeFace(0,30,.3,{smile:8});ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-240,340,340,20);ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 80px Inter';ctx.fillText('SEU ZÉ',0,210);ctx.fillStyle='#b5651d';ctx.font='800 46px Inter';ctx.fillText('o padeiro da rua',0,290);ctx.restore()});
  letterIn(u);
});
// 13. o mesmo que vende pão pra ele todo dia: atrás do balcão, com a foto do freguês (2650–2653.5)
scene(2650,2653.5,(t)=>{const u=t-2650;CAM(W/2,1150,lerp(1.12,1.02,easeOut(seg(u,0,3.5))),()=>{s4Bakery(u,{pan:0});
  // foto polaroid do freguês na parede
  ctx.save();ctx.translate(640,880);ctx.rotate(.08);ctx.fillStyle='#fbf7ee';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.fillRect(-90,-100,180,220);ctx.strokeRect(-90,-100,180,220);ctx.save();ctx.beginPath();ctx.rect(-74,-84,148,148);ctx.clip();ctx.fillStyle='#cfe0f0';ctx.fillRect(-74,-84,148,148);face(0,-6,.2,{headOnly:true,smile:10});ctx.restore();ctx.strokeRect(-74,-84,148,148);txtC('freguês 🥖',0,92,'700 34px Caveat','#3a2a20');ctx.restore();
  zeFront(400,1300,1.5,{smile:10,look:.3});s4Counter(1250,0);
  // saquinho de pão no balcão
  ctx.save();ctx.translate(800,1240);ctx.fillStyle='#e9d7b0';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-70,0);ctx.lineTo(-60,-180);ctx.lineTo(60,-180);ctx.lineTo(70,0);ctx.closePath();ctx.fill();ctx.stroke();s4Pao(-10,-190,.6,-.5);ctx.restore()});
  if(u>.6){ctx.save();ctx.globalAlpha=seg(u,.6,1.0);txtC('TODO DIA 🥖',W/2,1480,'900 84px Inter','#b5651d',14);ctx.restore()}
  letterIn(u);
});
// 14. na porta, o gato laranja mia: close no rosto dele, a porta azul da madrugada ao fundo (2654–2657.5)
scene(2654,2657.5,(t)=>{const u=t-2654;ctx.fillStyle=lg(0,H,['#f6e7cc','#efd8b2','#d9b98a']);ctx.fillRect(0,0,W,H);
  ctx.save();ctx.beginPath();rr(200,300,680,1300,10);ctx.clip();ctx.fillStyle=lg(300,1600,['#3a4a85','#7a7fb0','#c9a9b8']);ctx.fillRect(200,300,680,1300);ctx.restore();ctx.strokeStyle='#8a5a36';ctx.lineWidth=30;ctx.beginPath();rr(200,300,680,1300,10);ctx.stroke();
  CAM(W/2,H*.5,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{s2bCatFace(W/2,H*.56,1.15,u,{blink:u<.4||(u>2.6&&u<2.72),meow:u>1.0&&u<2.0?Math.sin(seg(u,1.0,2.0)*Math.PI):0,tilt:Math.sin(u*1.2)*.06})});
  if(u>1.0)s2bBubble(W/2,480,420,160,seg(u,1.0,1.3),'MIAU! 💙','#e8752a',-60);
  grade('rgba(255,190,120,.2)','rgba(60,40,20,.12)');letterIn(u);
});
// 15. aí o telefone da padaria toca: telefone vermelho tremendo no balcão (2658–2661.5)
scene(2658,2661.5,(t)=>{const u=t-2658;ctx.fillStyle=lg(0,H,['#f6e7cc','#efd8b2','#d9b98a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,700,'rgba(255,120,90,A)',.18);
  const vb=Math.sin(u*70)*(u%1<.6?8:0);CAM(W/2,H*.52,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{ctx.fillStyle='#8a5a36';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(0,1200,W,40);ctx.strokeRect(-10,1200,W+20,40);
    ctx.save();ctx.translate(540+vb,1060);softShadow(0,140,300,30,.35);ctx.fillStyle='#d43c32';ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-260,140);ctx.lineTo(-200,-40);ctx.lineTo(200,-40);ctx.lineTo(260,140);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#f4f1ea';ctx.beginPath();ctx.arc(0,50,90,0,7);ctx.fill();ctx.stroke();for(let k=0;k<10;k++){const a=k/10*6.283;ctx.fillStyle='#d43c32';ctx.beginPath();ctx.arc(Math.cos(a)*62,50+Math.sin(a)*62,14,0,7);ctx.fill()}
    ctx.save();ctx.translate(0,-80-Math.abs(Math.sin(u*35))*(u%1<.6?14:0));ctx.fillStyle='#d43c32';ctx.beginPath();rr(-300,-50,600,80,40);ctx.fill();ctx.stroke();ctx.beginPath();ctx.ellipse(-260,0,70,56,0,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.ellipse(260,0,70,56,0,0,7);ctx.fill();ctx.stroke();ctx.restore();ctx.restore()});
  if(u%1<.6){ctx.save();ctx.translate(W/2,520);const k=1+.06*Math.sin(u*30);ctx.scale(k,k);txtC('TRIIIM! 📞',0,0,'900 120px Inter','#d43c32',18);ctx.restore()}
  letterIn(u);
});
// 16. [telefone] "Menino! Sou eu, o Zé! Tô no seu corpo!" — o rosto do Matheus (com o Zé dentro) (2662–2665.5)
scene(2662,2665.5,(t)=>{const u=t-2662;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.6,lerp(1.0,1.06,seg(u,0,3.5)),()=>face(W/2,H*.64,.85,{open:1.3,brow:1,mouthO:.4+.3*Math.abs(Math.sin(u*9)),px:Math.sin(u*3)*8}));
  s2cCall(u,'MATHEUS','ligando pra padaria',seg(u,0,.3));
  s2bBubble(W/2,640,820,200,seg(u,.4,.7),'MENINO! SOU EU,|O ZÉ! 😱','#b5651d',-80);
  zeInside(W-180,470);letterIn(u);
});
// 17. [telefone] "Abre a gaveta do balcão!" (2666–2669.5)
scene(2666,2669.5,(t)=>{const u=t-2666;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.62,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>face(W/2,H*.68,.8,{open:1.1,brow:.6,mouthO:.3+.3*Math.abs(Math.sin(u*8)),px:-14}));
  s2cCall(u,'MATHEUS','chamada · 00:1'+Math.min(9,Math.floor(u+1)),1);
  s2bBubble(W/2,640,760,200,seg(u,.3,.6),'ABRE A GAVETA|DO BALCÃO! 📒','#b5651d',-80);
  zeInside(W-180,470);letterIn(u);
});
// 18. a gaveta abre: o caderno do fiado (2670–2673.5)
scene(2670,2673.5,(t)=>{const u=t-2670;ctx.fillStyle=lg(0,H,['#5a3a22','#7a5030','#3a2414']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,800,'rgba(255,210,150,A)',.3);
  const k=easeOut(seg(u,.1,.9));CAM(W/2,H*.55,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{
    ctx.fillStyle='#3a2414';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillRect(140,lerp(820,760,k),800,lerp(80,560,k));ctx.strokeRect(140,lerp(820,760,k),800,lerp(80,560,k));
    ctx.save();ctx.translate(540,lerp(1000,1060,k));ctx.globalAlpha=clamp(k*2);ctx.rotate(-.05);ctx.fillStyle='#2f5fa0';ctx.beginPath();rr(-230,-280,460,420,18);ctx.fill();ctx.stroke();ctx.fillStyle='#fffaf0';ctx.beginPath();rr(-160,-200,320,130,12);ctx.fill();ctx.stroke();ctx.fillStyle='#c8352b';ctx.font='700 90px Caveat';ctx.textAlign='center';ctx.fillText('FIADO',0,-110);ctx.restore();
    ctx.fillStyle='#8a5a36';ctx.fillRect(100,lerp(900,1320,k),880,110);ctx.strokeRect(100,lerp(900,1320,k),880,110);ctx.fillStyle='#e9d48a';ctx.beginPath();ctx.arc(540,lerp(955,1375,k),20,0,7);ctx.fill();ctx.stroke()});
  if(u>1.1){ctx.save();ctx.globalAlpha=seg(u,1.1,1.5);txtC('CADERNO DO FIADO 📒',W/2,300,'900 76px Inter','#fff',14);txtC('compra agora, paga depois',W/2,400,'800 50px Inter','#ffd84a',10);ctx.restore()}
  letterIn(u);
});
// 19. as páginas passam… um nome conhecido (2674–2677.5)
scene(2674,2677.5,(t)=>{const u=t-2674;ctx.fillStyle=lg(0,H,['#5a3a22','#7a5030','#3a2414']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,800,'rgba(255,210,150,A)',.3);
  CAM(W/2,H*.52,lerp(1.0,1.06,seg(u,0,3.5)),()=>{s4Book(W/2,H*.52,1.0,{});
    // página virando (da direita para a esquerda), duas vezes
    for(let j=0;j<2;j++){const f=seg(u,.2+j*.7,.8+j*.7);if(f<=0||f>=1)continue;ctx.save();ctx.translate(W/2,H*.52);ctx.scale(Math.cos(f*Math.PI),1);ctx.fillStyle='#f6efe0';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(6,-420,444,860,12);ctx.fill();ctx.stroke();ctx.restore()}});
  if(u>1.8){ctx.save();ctx.globalAlpha=seg(u,1.8,2.2);txtC('UM NOME CONHECIDO... 👀',W/2,300,'900 70px Inter','#fff',14);ctx.restore()}
  letterIn(u);
});
// 20. "Matheus: trezentos e quarenta reais!" — o círculo vermelho (2678–2681.5)
scene(2678,2681.5,(t)=>{const u=t-2678;ctx.fillStyle=lg(0,H,['#5a3a22','#7a5030','#3a2414']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,800,'rgba(255,210,150,A)',.3);
  CAM(lerp(W/2,780,easeIO(seg(u,0,1.2))),lerp(H*.52,H*.52+70,easeIO(seg(u,0,1.2))),lerp(1.0,1.6,easeIO(seg(u,0,1.2))),()=>s4Book(W/2,H*.52,1.0,{circ:seg(u,1.0,1.8)}));
  if(u>1.8){const k=easeBack(seg(u,1.8,2.1));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#c8352b';rr(-400,-80,800,160,36);ctx.fill();txtC('MATHEUS: R$ 340 😳',0,2,'900 68px Inter','#fff');ctx.restore()}
  letterIn(u);
});
SHAKE.push(2679.85);
// 21. seis meses de pão de queijo: chuva de pão de queijo + risquinhos (2682–2685.5)
scene(2682,2685.5,(t)=>{const u=t-2682;ctx.fillStyle=lg(0,H,['#ffd27a','#ffb44a','#e08a2a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,250,210,A)',.35);
  for(let i=0;i<26;i++){const r=rng(i+2682);const x=r()*W,y=((r()*H+u*(260+r()*200))%(H+200))-100;ctx.save();ctx.translate(x,y);ctx.rotate(u+i);ctx.fillStyle='#f2c055';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.beginPath();ctx.arc(0,0,40,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='rgba(255,255,255,.35)';ctx.beginPath();ctx.arc(-12,-12,12,0,7);ctx.fill();ctx.restore()}
  CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>{ctx.save();ctx.translate(W/2,H*.52);ctx.rotate(-.04);ctx.fillStyle='#fffaf0';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-380,-260,760,520,20);ctx.fill();ctx.stroke();
    const n=Math.floor(seg(u,.2,2.4)*30);ctx.strokeStyle='#2f5fa0';ctx.lineWidth=9;ctx.lineCap='round';for(let i=0;i<n;i++){const g=Math.floor(i/5),j=i%5;const x=-320+(g%6)*110,y=-160+Math.floor(g/6)*0;if(j<4){ctx.beginPath();ctx.moveTo(x+j*18,y-60+Math.floor(i/30)*0);ctx.lineTo(x+j*18,y+60);ctx.stroke()}else{ctx.beginPath();ctx.moveTo(x-10,y+40);ctx.lineTo(x+70,y-40);ctx.stroke()}}
    ctx.fillStyle='#c8352b';ctx.font='700 88px Caveat';ctx.textAlign='center';ctx.fillText('pão de queijo',0,120);ctx.fillStyle='#16161c';ctx.font='700 64px Caveat';ctx.fillText('— Matheus',0,200);ctx.restore()});
  if(u>.5){const k=easeBack(seg(u,.5,.8));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);txtC('6 MESES! 😅',0,0,'900 120px Inter','#fff',20);ctx.restore()}
  letterIn(u);
});
// 22. "E repara no relógio." — a câmera vai até o relógio da padaria (2686–2689.5)
scene(2686,2689.5,(t)=>{const u=t-2686;const m=easeIO(seg(u,.5,3.0));CAM(lerp(W/2,880,m),lerp(1100,520,m),lerp(1.0,2.2,m),()=>{s4Bakery(u,{pan:0});zeFront(300,1300,1.5,{look:.6,smile:0});s4Counter(1250,0)});
  if(u>.2){ctx.save();ctx.globalAlpha=seg(u,.2,.6)*(1-seg(u,2.6,3.0));txtC('REPARA... 👀',W/2,1480,'900 90px Inter','#ffd84a',16);ctx.restore()}
  letterIn(u);
});
// 23. parado na meia-noite — igual a todos os outros (2690–2693.5)
scene(2690,2693.5,(t)=>{const u=t-2690;ctx.fillStyle=lg(0,H,['#1a1530','#2e2558','#0f0c20']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(170,140,255,A)',.3);
  CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{clockFace(W/2,620,230,0,0);txtC('PADARIA',W/2,920,'900 54px Inter','#cbb8ff',0);
    const L=['QUARTO','DIRETORA','LUCAS','RECEPÇÃO'];L.forEach((l,i)=>{const k=easeBack(seg(u,.9+i*.25,1.2+i*.25));if(k<=0)return;const x=160+i*253;ctx.save();ctx.translate(x,1180);ctx.scale(k,k);clockFace(0,0,90,0,0);txtC(l,0,140,'900 34px Inter','#cbb8ff',0);ctx.restore()})});
  txtC('00:00',W/2,300,'900 110px Oswald','#ffd84a',16);
  if(u>2.1){ctx.save();ctx.globalAlpha=seg(u,2.1,2.5);txtC('TODOS IGUAIS!',W/2,1480,'900 80px Inter','#fff',14);ctx.restore()}
  letterIn(u);
});
SHAKE.push(2691.15);
// 24. embaixo do caixa, um papel aparecendo (2694–2697.5)
scene(2694,2697.5,(t)=>{const u=t-2694;ctx.fillStyle=lg(0,H,['#f6e7cc','#efd8b2','#d9b98a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,800,'rgba(255,220,160,A)',.3);
  CAM(W/2,H*.55,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>{ctx.fillStyle='#8a5a36';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(-10,1180,W+20,60);ctx.strokeRect(-10,1180,W+20,60);
    // papel saindo de baixo da máquina (para a esquerda)
    const k=easeOut(seg(u,.4,1.6));ctx.save();ctx.translate(lerp(600,330,k),1150);ctx.rotate(-.06);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(-180,-30,360,60);ctx.strokeRect(-180,-30,360,60);ctx.fillStyle='#c8352b';ctx.font='900 32px Inter';ctx.textAlign='center';ctx.fillText('ALUGUEL ⚠',-40,12);ctx.restore();
    // caixa registradora
    ctx.save();ctx.translate(640,1180);ctx.fillStyle='#6a7380';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-230,0);ctx.lineTo(-200,-260);ctx.lineTo(200,-260);ctx.lineTo(230,0);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#1f2a20';ctx.beginPath();rr(-150,-420,300,140,14);ctx.fill();ctx.stroke();ctx.fillStyle='#7dffa8';ctx.font='900 64px "DejaVu Sans Mono", monospace';ctx.textAlign='center';ctx.fillText('0,00',0,-326);
    for(let r=0;r<3;r++)for(let c=0;c<4;c++){ctx.fillStyle='#e9eef0';ctx.beginPath();ctx.arc(-120+c*80,-200+r*60,22,0,7);ctx.fill();ctx.stroke()}ctx.restore()});
  if(u>1.6){ctx.save();ctx.globalAlpha=seg(u,1.6,2.0);txtC('UM PAPEL... 📄',W/2,330,'900 84px Inter','#5a3416',0);ctx.restore()}
  letterIn(u);
});
// 25. ALUGUEL DA PADARIA · R$ 1.200 · VENCE HOJE (2698–2701.5)
scene(2698,2701.5,(t)=>{const u=t-2698;ctx.fillStyle='#fffdf6';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(0,0,0,.06)';for(let y=200;y<H;y+=90)ctx.fillRect(80,y,W-160,4);
  CAM(W/2,H*.55,lerp(1.12,1.0,easeOut(seg(u,0,3.5))),()=>{ctx.fillStyle='#16161c';ctx.font='900 66px Inter';ctx.textAlign='center';ctx.fillText('ALUGUEL DA PADARIA',W/2,540);ctx.fillStyle='#b5651d';ctx.fillRect(160,580,760,8);
    ctx.textAlign='left';ctx.fillStyle='#666';ctx.font='700 50px Inter';ctx.fillText('Valor:',140,760);ctx.fillStyle='#16161c';ctx.font='900 70px Inter';ctx.fillText('R$ 1.200',430,760);
    ctx.fillStyle='#666';ctx.font='700 50px Inter';ctx.fillText('Vencimento:',140,900);ctx.fillStyle='#16161c';ctx.font='900 56px Inter';ctx.fillText('19/11',500,900);
    if(u>1.2){const k=seg(u,1.2,1.45);ctx.save();ctx.translate(540,1150);ctx.rotate(-.12);const sc=lerp(2.2,1,easeOut(k));ctx.scale(sc,sc);ctx.globalAlpha=clamp(k*3);ctx.strokeStyle='#c8352b';ctx.lineWidth=14;ctx.strokeRect(-330,-85,660,170);ctx.fillStyle='#c8352b';ctx.font='900 100px Inter';ctx.textAlign='center';ctx.fillText('VENCE HOJE',0,36);ctx.restore()}});
  letterIn(u);
});
SHAKE.push(2699.22);
// 26. no caixa, só oitocentos e sessenta: notas sendo contadas (2702–2705.5)
scene(2702,2705.5,(t)=>{const u=t-2702;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.25);
  const v=Math.round(easeOut(seg(u,.2,2.0))*86)*10;
  CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>{ctx.fillStyle='#3a3f48';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(140,900,800,420,20);ctx.fill();ctx.stroke();for(let c=0;c<4;c++){ctx.fillStyle='#2a2e36';ctx.fillRect(170+c*195,930,175,360);ctx.strokeRect(170+c*195,930,175,360)}
    const n=Math.floor(seg(u,.2,2.0)*9);for(let i=0;i<n;i++){const r=rng(i+2702);ctx.save();ctx.translate(260+(i%4)*195,1080+Math.floor(i/4)*-20);ctx.rotate((r()-.5)*.3);ctx.fillStyle=['#8fd18f','#e8c06a','#9ec4e8'][i%3];ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.beginPath();rr(-70,-120,140,240,8);ctx.fill();ctx.stroke();ctx.fillStyle='rgba(0,0,0,.35)';ctx.font='900 34px Inter';ctx.textAlign='center';ctx.fillText('R$',0,10);ctx.restore()}});
  txtC('NO CAIXA',W/2,420,'800 60px Oswald','#bff0cc',0);txtC('R$ '+v,W/2,600,'900 170px Oswald','#fff',20);
  letterIn(u);
});
// 27. a conta: 1.200 − 860 = 340 (2706–2709.5)
scene(2706,2709.5,(t)=>{const u=t-2706;ctx.fillStyle='#1d2238';ctx.fillRect(0,0,W,H);ctx.strokeStyle='rgba(255,255,255,.05)';ctx.lineWidth=3;for(let y=0;y<H;y+=80){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}
  CAM(W/2,H*.48,lerp(1.0,1.08,seg(u,0,3.5)),()=>{ctx.textAlign='right';const a=seg(u,.1,.4),b=seg(u,.6,.9),c=seg(u,1.4,1.8);
    ctx.globalAlpha=a;ctx.fillStyle='#fff';ctx.font='900 150px Oswald';ctx.fillText('1.200',860,620);
    ctx.globalAlpha=b;ctx.fillStyle='#ff8a8a';ctx.fillText('− 860',860,820);ctx.globalAlpha=b;ctx.fillStyle='#fff';ctx.fillRect(260,880,620,14);
    ctx.globalAlpha=1;if(c>0){const k=easeBack(c);ctx.save();ctx.translate(700,1060);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.font='900 190px Oswald';ctx.textAlign='center';ctx.fillText('340',0,0);ctx.restore()}});
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('FALTA...',W/2,300,'900 90px Inter','#ffd84a',14);ctx.restore();letterIn(u);
});
SHAKE.push(2707.45);
// 28. é a dívida dele! (caderno R$ 340 = falta R$ 340) (2710–2713.5)
scene(2710,2713.5,(t)=>{const u=t-2710;ctx.fillStyle=lg(0,H,['#5a1f1a','#8a2e24','#3a1410']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,170,120,A)',.3);
  const card=(x,y,rot,k,top,val,col)=>{if(k<=0)return;ctx.save();ctx.translate(x,lerp(y+400,y,easeOut(clamp(k))));ctx.rotate(rot);ctx.globalAlpha=clamp(k*3);ctx.fillStyle='#fffaf0';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-210,-200,420,400,18);ctx.fill();ctx.stroke();
    ctx.fillStyle='#555';ctx.font='700 56px Caveat';ctx.textAlign='center';ctx.fillText(top,0,-110);ctx.fillStyle=col;ctx.font='900 110px Oswald';ctx.fillText(val,0,60);ctx.restore()};
  CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{card(290,900,-.06,seg(u,.1,.5),'fiado: Matheus','R$ 340','#c8352b');card(790,900,.06,seg(u,.4,.8),'falta no aluguel','R$ 340','#16161c');
    if(u>.9){const k=easeBack(seg(u,.9,1.2));ctx.save();ctx.translate(540,900);ctx.scale(k,k);txtC('=',0,0,'900 160px Inter','#ffd84a',16);ctx.restore()}});
  if(u>1.3){const k=easeBack(seg(u,1.3,1.6));ctx.save();ctx.translate(W/2,330);ctx.scale(k,k);txtC('A DÍVIDA DELE! 😳',0,0,'900 96px Inter','#fff',18);ctx.restore()}
  letterIn(u);
});
SHAKE.push(2710.92);
// 29. "E você? Já esqueceu uma conta assim?" — o seu Zé (Matheus dentro) olha pra câmera (2714–2717.5)
scene(2714,2717.5,(t)=>{const u=t-2714;ctx.fillStyle=lg(0,H,['#b5651d','#d0843a','#7a4214']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,230,170,A)',.3);
  CAM(W/2,H*.52,lerp(1.12,1.0,easeOut(seg(u,0,.8))),()=>zeFace(W/2,H*.6,.8,{open:1.15,brow:.7,smile:lerp(0,-6,seg(u,.6,1)),sweat:1}));
  const k=easeBack(seg(u,.3,.7));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);txtC('E VOCÊ? 👀',0,0,'900 120px Inter','#fff',20);ctx.restore();
  if(u>1.1){ctx.save();ctx.globalAlpha=seg(u,1.1,1.5);txtC('JÁ ESQUECEU UMA CONTA?',W/2,430,'900 62px Inter','#ffd84a',14);ctx.restore()}
  letterIn(u);
});
// 30. A: rasgar a página — a folha do Matheus se parte em duas (2718–2721.5)
scene(2718,2721.5,(t)=>{const u=t-2718;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.3);
  const r=easeOut(seg(u,.8,1.6));CAM(W/2,H*.52,lerp(1.0,1.08,seg(u,0,3.5)),()=>{
    for(const sx of[-1,1]){ctx.save();ctx.translate(540+sx*r*110,900+r*40);ctx.rotate(sx*r*.18);ctx.beginPath();if(sx<0){ctx.moveTo(-320,-360);ctx.lineTo(10,-360);for(let k=0;k<=8;k++)ctx.lineTo(k%2?-14:16,-360+k*90);ctx.lineTo(-320,360)}else{ctx.moveTo(320,-360);ctx.lineTo(10,-360);for(let k=0;k<=8;k++)ctx.lineTo(k%2?-14:16,-360+k*90);ctx.lineTo(320,360)}ctx.closePath();
      ctx.fillStyle='#fffaf0';ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.stroke();ctx.clip();ctx.strokeStyle='rgba(80,120,200,.35)';ctx.lineWidth=3;for(let y=-290;y<360;y+=70){ctx.beginPath();ctx.moveTo(-300,y);ctx.lineTo(300,y);ctx.stroke()}
      ctx.fillStyle='#16161c';ctx.font='700 80px Caveat';ctx.textAlign='center';ctx.fillText(sx<0?'Mathe':'us',sx<0?-140:130,-40);ctx.fillStyle='#c8352b';ctx.fillText(sx<0?'R$ 3':'40',sx<0?-140:130,80);ctx.restore()}});
  txtC('A?',W/2,330,'900 120px Inter','#7dffa8',20);if(u>1.4){ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('RASGAR A PÁGINA 🤫',W/2,1480,'900 64px Inter','#fff',14);ctx.restore()}
  letterIn(u);
});
SHAKE.push(2718.85);
// 31. B: pagar pelo celular do Matheus — Pix pra Padaria do Zé (2722–2725.5)
scene(2722,2725.5,(t)=>{const u=t-2722;CAM(W/2,H*.48,lerp(1.0,1.06,seg(u,0,3.5)),()=>{s2Phone(u,{time:'05:40',date:'quinta-feira',screen:['#1a2a6a','#2f4bb0','#121c4a'],bg:['#14204a','#24357a','#0d1534']});
    ctx.save();ctx.translate(W/2,H*.48);ctx.rotate(-.04);ctx.fillStyle='rgba(250,250,252,.97)';rr(-250,-120,500,520,36);ctx.fill();
    txtC('PIX 💸',0,-50,'900 58px Inter','#2f4bb0');txtC('Padaria do Zé',0,40,'800 44px Inter','#16161c');txtC('R$ 340',0,150,'900 100px Oswald','#16161c');
    const p=seg(u,1.0,1.3);ctx.fillStyle=p>0?'#1f8a4a':'#2f4bb0';rr(-200,250,400,100,30);ctx.fill();txtC(p>0?'PAGO ✓':'PAGAR',0,302,'900 50px Inter','#fff');ctx.restore()});
  txtC('B?',W/2,230,'900 120px Inter','#ffd84a',20);if(u>1.4){ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('PAGAR PELO CELULAR',W/2,1500,'900 62px Inter','#fff',14);ctx.restore()}
  letterIn(u);
});
// 32a. só que aí o Zé vê... o app do banco: SALDO (2726–2729.5)
scene(2726,2729.5,(t)=>{const u=t-2726;CAM(W/2,H*.48,lerp(1.0,1.14,easeIO(seg(u,0,3.5))),()=>{s2Phone(u,{time:'05:41',date:'quinta-feira',screen:['#1a2a6a','#2f4bb0','#121c4a'],bg:['#1b1d36','#262a4a','#15172b']});
    ctx.save();ctx.translate(W/2,H*.48);ctx.rotate(-.04);ctx.fillStyle='rgba(250,250,252,.97)';rr(-250,-120,500,420,36);ctx.fill();txtC('BANCO · MATHEUS',0,-50,'800 40px Inter','#2f4bb0');txtC('salário recebido',0,40,'700 40px Inter','#666');
    ctx.save();ctx.beginPath();rr(-230,90,460,140,20);ctx.clip();txtC('R$ 9.900',0,165,'900 104px Oswald','#1f8a4a');if(u<1.2){ctx.fillStyle='#c9cdd8';ctx.fillRect(-230,90,460*(1-seg(u,.6,1.2)),140)}ctx.restore();ctx.restore()});
  if(u>1.3){const k=easeBack(seg(u,1.3,1.6));ctx.save();ctx.translate(W/2,220);ctx.scale(k,k);txtC('👀👀',0,0,'110px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 32b. o Zé (no corpo do Matheus) arregala os olhos: DEZ MIL?! (2730–2733.5)
scene(2730,2733.5,(t)=>{const u=t-2730;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.6,lerp(1.1,1.0,easeOut(seg(u,0,.8))),()=>face(W/2,H*.64,.85,{open:1.45,brow:1.2,mouthO:.8,pupil:.6}));
  s2bBubble(W/2,560,640,180,seg(u,.2,.5),'DEZ MIL?! 😳','#c8352b',-60);zeInside(W-180,320);letterIn(u);
});
SHAKE.push(2730.25);
// 33. e o Zé é o maior fofoqueiro da rua: as janelas acendem com balões; pombos voam (2734–2737.5)
scene(2734,2737.5,(t)=>{const u=t-2734;sky('#7fb0e0','#cde2f0','#ffdcb0');sun(850,300,60,'#fff6dc','rgba(255,220,150,.7)');
  CAM(W/2,1100,lerp(1.0,1.06,seg(u,0,3.5)),()=>{
    const hs=[[60,'#e9a27a'],[400,'#9fc0d8'],[740,'#c9d68a']];hs.forEach(([x,c],i)=>{ctx.fillStyle=c;ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(x,560,300,700);ctx.strokeRect(x,560,300,700);ctx.fillStyle='#8a4a3a';ctx.beginPath();ctx.moveTo(x-20,570);ctx.lineTo(x+150,430);ctx.lineTo(x+320,570);ctx.closePath();ctx.fill();ctx.stroke();
      for(let w=0;w<2;w++){const on=u>.4+i*.35+w*.15;ctx.fillStyle=on?'#ffe9a0':'#5a6a80';ctx.fillRect(x+40+w*130,660,90,110);ctx.strokeRect(x+40+w*130,660,90,110)}});
    ctx.fillStyle='#8c8f98';ctx.fillRect(0,1260,W,60);ctx.fillStyle=lg(1320,H,['#3e4048','#2c2e34']);ctx.fillRect(0,1320,W,H-1320);
    // pombos levantando voo (ambiente)
    for(let i=0;i<4;i++){const r=rng(i+2734);const f=seg(u,.2+i*.1,3.5);const x=200+r()*700+f*300,y=1250-f*700-r()*60;ctx.save();ctx.translate(x,y);ctx.fillStyle='#9aa0ac';ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.beginPath();ctx.ellipse(0,0,26,16,0,0,7);ctx.fill();ctx.stroke();const wg=Math.sin(u*20+i)*18;ctx.beginPath();ctx.moveTo(-6,-4);ctx.quadraticCurveTo(-20,-30-wg,-44,-20-wg);ctx.quadraticCurveTo(-24,-6,-6,-4);ctx.fill();ctx.stroke();ctx.restore()}
    personFront(540,1390,1.3,{smile:10,mouthO:.3+.25*Math.abs(Math.sin(u*10)),look:Math.sin(u*2)*.5})});
  const B=[['VOCÊ SOUBE?!',330,520,.5],['DEZ MIL! 😱',800,600,.9],['O MATHEUS?!',340,880,1.3]];B.forEach(([s,x,y,a])=>{if(u>a)s2bBubble(x,y,440,130,seg(u,a,a+.3),s,'#c8352b',0)});
  txtC('O MAIOR FOFOQUEIRO 🗣️',W/2,300,'900 62px Inter','#16161c',0);zeInside(W-180,1500);letterIn(u);
});
// 34. a mensagem: "O que ninguém vê... também conta." — a página do caderno sob a luz (2738–2741.5)
scene(2738,2741.5,(t)=>{const u=t-2738;ctx.fillStyle=lg(0,H,['#2a1a40','#5a3a6a','#ffb88a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,900,'rgba(255,230,180,A)',.45);beams(W/2,200,1.57,5,1500,.07);
  CAM(W/2,H*.55,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,1050);ctx.rotate(Math.sin(u)*.03);ctx.fillStyle='#fffaf0';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-300,-360,600,720,14);ctx.fill();ctx.stroke();ctx.strokeStyle='rgba(80,120,200,.35)';ctx.lineWidth=3;for(let y=-280;y<360;y+=70){ctx.beginPath();ctx.moveTo(-270,y);ctx.lineTo(270,y);ctx.stroke()}
    ctx.fillStyle='#16161c';ctx.font='700 84px Caveat';ctx.textAlign='center';ctx.fillText('Matheus',0,-60);ctx.fillStyle='#c8352b';ctx.fillText('R$ 340',0,60);ctx.restore()});
  txtC('O QUE NINGUÉM VÊ...',W/2,300,'900 80px Inter','#fff',16);if(u>1.4){ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('...TAMBÉM CONTA 📒',W/2,410,'900 76px Inter','#ffd84a',14);ctx.restore()}
  letterIn(u);
});
// 35/36. ESCOLHA: A (verde) x B — sobre o rosto do seu Zé (2742–2749)
scene(2742,2749,(t)=>{const u=t-2742;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  zeFace(W/2,H*.72,.75,{open:1,brow:.5,px:-20,py:10});ctx.fillStyle='rgba(10,8,14,.68)';ctx.fillRect(0,0,W,H);
  txtC('O QUE ELE FAZ?',W/2,320,'900 92px Inter','#fff',18);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));ctx.textAlign='left';
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,140,80,.95)';rr(70,430,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('A',120,590);ctx.font='800 50px Inter';ctx.fillText('RASGAR a página',250,530);ctx.fillText('e ninguém sabe 🤫',250,595);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(60,90,200,.95)';rr(70,690,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('B',120,850);ctx.font='800 50px Inter';ctx.fillText('PAGAR e a rua',250,790);ctx.fillText('saber do salário 🗣️',250,855);ctx.restore();
  if(u>1.4){const k=.5+.5*Math.sin(u*5);ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('COMENTA A OU B 👇',W/2,1080,'900 74px Inter',`rgb(255,${200+55*k},74)`,16);ctx.restore()}
});
// FINAL: cartela da série (2790–2793.2)
scene(2790,2793.2,(t)=>{const u=t-2790;ctx.fillStyle='#07070c';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,50,W/2,H*.42,900);g.addColorStop(0,'rgba(220,150,80,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.36);ctx.scale(k,k);ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='900 92px Inter';ctx.fillText('E SE VOCÊ',0,0);ctx.fillText('ACORDASSE NA',0,110);ctx.fillStyle='#ffd84a';ctx.font='900 128px Inter';ctx.fillText('VIDA DE OUTRA',0,250);ctx.fillText('PESSOA?',0,390);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 5 · AMANHÃ 18H',W/2,H*.36+560);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.36+660);ctx.restore()});
