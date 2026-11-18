// ===================== SÉRIE 2 · EP. 3 — NO CORPO DO MELHOR AMIGO =====================
// Faixa 2400–2599 (cartão final 2590–2593.2). Consequência do voto A do EP. 2 (arquivou a auditoria e ficou com o aumento):
// a verba do mês acabou e a promoção do Lucas (melhor amigo do Matheus) foi cancelada. Hoje ele acorda no corpo do Lucas;
// o Lucas está no corpo do Matheus e liga: viu o holerite de quase dez mil.
// Elementos novos (máx. 2): o Lucas e a entrevista na Nova Era Tech. Pista: o relógio parado em 00:00 (quarto do Lucas e recepção).
// Ambiente (não falado): folhas voando na rua, balão amarelo subindo. O gato laranja reconhece o Matheus.

const LU=COL[0]; // Lucas: moletom verde, pele morena, cabelo preto (mesmo traço do Matheus)
function luFace(cx,cy,s,o){withP(LU,()=>face(cx,cy,s,o||{}))}
function luFront(x,y,s,pose){withP(LU,()=>personFront(x,y,s,pose||{}))}
function luSide(x,y,s,pose){withP(LU,()=>person(x,y,s,pose||{}))}

// quarto do Lucas (manhã): parede azul, pôsteres, janela, cama, relógio pequeno parado em 00:00. o:{pan}
function s2cRoom(u,o){o=o||{};const pan=o.pan||0;
  ctx.fillStyle=lg(0,H,['#cfe0f2','#b9cfe6','#8fa9c6']);ctx.fillRect(0,0,W,H);
  ctx.save();ctx.translate(-pan,0);
  // pôster de futebol
  ctx.save();ctx.translate(250,520);ctx.rotate(-.04);ctx.fillStyle='#1f7a3a';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(-150,-210,300,420);ctx.strokeRect(-150,-210,300,420);
  ctx.strokeStyle='#e9f5e9';ctx.lineWidth=5;ctx.strokeRect(-120,-180,240,360);ctx.beginPath();ctx.moveTo(-120,0);ctx.lineTo(120,0);ctx.stroke();ctx.beginPath();ctx.arc(0,0,50,0,7);ctx.stroke();
  ctx.font='70px Inter';ctx.textAlign='center';ctx.fillText('⚽',0,24);ctx.fillStyle='#fff';ctx.font='900 40px Oswald';ctx.fillText('CAMPEÃO',0,-130);ctx.restore();
  // pôster de banda
  ctx.save();ctx.translate(620,470);ctx.rotate(.05);ctx.fillStyle='#2a2440';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(-130,-170,260,340);ctx.strokeRect(-130,-170,260,340);
  ctx.fillStyle='#ffd84a';ctx.font='900 64px Oswald';ctx.textAlign='center';ctx.fillText('ROCK',0,-60);ctx.font='90px Inter';ctx.fillText('🎸',0,90);ctx.restore();
  // relógio pequeno, igual ao do Matheus, parado em 00:00 (pista escondida, não falada)
  clockFace(900,330,52,0,0);
  // janela
  ctx.save();ctx.beginPath();rr(1120,300,560,700,14);ctx.clip();sky('#86bde8','#cfe5f2','#ffe2b6');sun(1500,520,50,'#fff6dc','rgba(255,220,150,.7)');semBlur(()=>buildings(77,1000,200,480,'#a7bcd0','#fff0c0',.1,300,1));ctx.restore();
  ctx.strokeStyle='#f4f1ea';ctx.lineWidth=18;ctx.beginPath();rr(1120,300,560,700,14);ctx.stroke();ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(1400,300);ctx.lineTo(1400,1000);ctx.stroke();
  ctx.fillStyle='#e9e4da';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(1090,1000,620,40);ctx.strokeRect(1090,1000,620,40);
  beams(1450,420,2.2,5,1300,.06);
  // bola no chão
  ctx.save();ctx.translate(1000,1480);ctx.fillStyle='#fff';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();ctx.arc(0,0,60,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#16161c';ctx.beginPath();for(let k=0;k<5;k++){const a=k*1.2566-1.57;ctx.lineTo(Math.cos(a)*22,Math.sin(a)*22)}ctx.closePath();ctx.fill();ctx.restore();
  ctx.restore();
  ctx.fillStyle=lg(1280,H,['#a98a6a','#86684c']);ctx.fillRect(0,1280,W,H-1280);
  ctx.strokeStyle='rgba(60,40,20,.2)';ctx.lineWidth=3;for(let i=-8;i<16;i++){const x0=W/2+(i*130-pan%130);ctx.beginPath();ctx.moveTo(W/2+(x0-W/2)*.4,1280);ctx.lineTo(W/2+(x0-W/2)*2.2,H);ctx.stroke()}
  dust(u,41,22,'rgba(255,240,200,A)')}
function s2cBed(x,y,pan){ctx.fillStyle='#f6f2ea';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(x-pan,y,760,320,30);ctx.fill();ctx.stroke()}
function s2cBlanket(x,y,pan,u){ctx.fillStyle='#d9573a';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(x-10-pan,y+100);ctx.quadraticCurveTo(x+380-pan,y+60+Math.sin(u*1.5)*5,x+770-pan,y+100);ctx.lineTo(x+770-pan,y+330);ctx.lineTo(x-10-pan,y+330);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.strokeStyle='rgba(255,255,255,.35)';ctx.lineWidth=10;for(let k=1;k<4;k++){ctx.beginPath();ctx.moveTo(x-10-pan+k*190,y+90);ctx.lineTo(x-10-pan+k*190,y+330);ctx.stroke()}}

// placar de todas as redes (estilo EP. 10)
function s2cPlacar(u,win){ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(90,140,255,A)',.25);
  txtC('PLACAR DO EP. 2',W/2,300,'900 86px Inter','#fff',16);txtC('somando todas as redes',W/2,390,'700 46px Inter','#bcd',0);
  const NET=[['TikTok','#111','#25f4ee'],['YouTube','#e62117','#fff'],['Instagram','#c13584','#fff']];const TX=['A','aaaa','A 💰','B','A!!','é a A','b','A 👀','Aaaaa','A'];
  ctx.save();ctx.beginPath();ctx.rect(0,460,W,860);ctx.clip();
  const n=Math.floor(u*6);for(let i=0;i<n;i++){const r=rng(i+2400);const age=u-i/6;const y=1300-age*560;if(y<420)continue;const side=i%2===0;const nt=NET[i%3];const txt=TX[Math.floor(r()*TX.length)];
    ctx.save();ctx.globalAlpha=Math.min(1,age*4);ctx.translate(side?70:590,y);ctx.fillStyle='rgba(255,255,255,.95)';rr(0,-46,420,92,30);ctx.fill();
    ctx.fillStyle=nt[1];ctx.beginPath();ctx.arc(46,0,30,0,7);ctx.fill();ctx.fillStyle=nt[2];ctx.font='900 28px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nt[0][0],46,2);
    ctx.textAlign='left';ctx.fillStyle='#777';ctx.font='700 24px Inter';ctx.fillText(nt[0],90,-16);ctx.fillStyle=txt.toUpperCase().startsWith('B')?'#c33':'#1a8a4a';ctx.font='900 40px Inter';ctx.fillText(txt,90,22);ctx.restore()}
  ctx.restore();
  const c=Math.floor(Math.pow(clamp(u/2.9),2.2)*9999);const k=easeBack(seg(u,.1,.4));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-470,-90,940,180,36);ctx.fill();txtC(c>=9999?'+9999 COMENTÁRIOS':'💬 '+c.toLocaleString('pt-BR')+' comentários',0,0,'900 66px Oswald','#16161c');ctx.restore();
  if(win){const k2=easeBack(clamp(win));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(k2,k2);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(-W,-H,W*2,H*2);ctx.fillStyle='rgba(30,150,80,.97)';rr(-470,-230,940,460,46);ctx.fill();
    txtC('VENCEU A',0,-130,'900 110px Inter','#fff');txtC('ARQUIVAR E FICAR 💰',0,-20,'900 60px Inter','#fff');
    ctx.fillStyle='rgba(0,0,0,.22)';rr(-430,40,860,160,26);ctx.fill();txtC('TIKTOK A 2 × B 1',0,85,'800 40px Inter','#fff');txtC('TOTAL: A 2 × B 1',0,150,'900 52px Oswald','#ffd84a');ctx.restore()}}

// cartão de chamada no topo (telefone): avatar + nome + tempo
function s2cCall(u,name,sub,k){if(k<=0)return;ctx.save();ctx.globalAlpha=clamp(k*2);ctx.translate(W/2,300+(1-easeBack(clamp(k)))*-60);ctx.fillStyle='rgba(20,24,36,.92)';rr(-460,-90,920,180,50);ctx.fill();
  ctx.fillStyle='#2fbf71';ctx.beginPath();ctx.arc(-360,0,56,0,7);ctx.fill();txtC('📞',-360,4,'900 56px Inter','#fff');
  ctx.textAlign='left';ctx.fillStyle='#fff';ctx.font='900 52px Inter';ctx.fillText(name,-270,-6);ctx.fillStyle='#9fe3b9';ctx.font='700 34px Inter';ctx.fillText(sub,-270,46);ctx.restore()}
// rosto do Matheus com o Lucas dentro (selo pequeno)
function s2cInside(x,y){ctx.save();ctx.translate(x,y);ctx.fillStyle='rgba(255,255,255,.95)';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-150,-60,300,120,30);ctx.fill();ctx.stroke();
  ctx.save();ctx.beginPath();ctx.arc(-90,0,44,0,7);ctx.clip();ctx.fillStyle='#cfe0f0';ctx.fillRect(-140,-50,100,100);luFace(-90,10,.12,{headOnly:true,smile:6});ctx.restore();
  ctx.fillStyle='#16161c';ctx.font='900 34px Inter';ctx.textAlign='left';ctx.fillText('DENTRO:',-36,-8);ctx.fillStyle='#2c6c5b';ctx.fillText('LUCAS',-36,30);ctx.restore()}
// recepção da Nova Era Tech. o:{pan}
function s2cLobby(u,o){o=o||{};const pan=o.pan||0;ctx.fillStyle=lg(0,H,['#eef2f4','#dfe6ea','#c3ced6']);ctx.fillRect(0,0,W,H);
  ctx.save();ctx.translate(-pan,0);
  ctx.fillStyle='#2f9a6a';ctx.beginPath();rr(160,300,760,200,30);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.stroke();txtC('NOVA ERA TECH',540,400,'900 84px Oswald','#fff');
  clockFace(1040,700,96,0,0);
  for(const px of[120,1420]){ctx.save();ctx.translate(px,1250);ctx.fillStyle='#c9774a';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(-60,0);ctx.lineTo(60,0);ctx.lineTo(44,110);ctx.lineTo(-44,110);ctx.closePath();ctx.fill();ctx.stroke();
    for(let i=0;i<7;i++){const a=-Math.PI/2+(i-3)*.32+Math.sin(u*2+i+px)*.05;ctx.fillStyle=i%2?'#4f9a55':'#3f8547';ctx.save();ctx.rotate(a+Math.PI/2);ctx.beginPath();ctx.ellipse(0,-110,26,90,0,0,7);ctx.fill();ctx.stroke();ctx.restore()}ctx.restore()}
  ctx.restore();ctx.fillStyle=lg(1300,H,['#b9c2c9','#98a3ac']);ctx.fillRect(0,1300,W,H-1300)}
function s2cCounter(y,pan){ctx.fillStyle='#f4f6f8';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(140-pan,y,800,70,14);ctx.fill();ctx.stroke();ctx.fillStyle='#2f9a6a';ctx.fillRect(160-pan,y+70,760,300);ctx.strokeRect(160-pan,y+70,760,300);ctx.fillStyle='rgba(255,255,255,.15)';ctx.fillRect(160-pan,y+120,760,14)}

// =============================== CENAS ===============================
// 0. GANCHO: no espelho, o rosto do Lucas — a mão no rosto, em choque (2400–2403.5)
scene(2400,2403.5,(t)=>{const u=t-2400;const z=lerp(1.18,1.04,easeOut(seg(u,0,.6)))+u*.02,sh=u<.3?Math.sin(u*90)*12:0;
  CAM(W/2+sh,H*.5,z,()=>s2Mirror(u,()=>{ctx.fillStyle=lg(250,1400,['#a9bcd0','#8299b2']);ctx.fillRect(110,250,860,1150);luFace(540,880,1.0,{open:1.4,brow:1,mouthO:.9,pupil:.6,px:-6,py:6});
    ctx.save();ctx.translate(820,1060);ctx.rotate(-.3);ctx.fillStyle=LU.skin;ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.beginPath();ctx.ellipse(0,0,86,124,0,0,7);ctx.fill();ctx.stroke();for(let k=0;k<4;k++){ctx.beginPath();ctx.ellipse(-40+k*28,-116,17,46,0,0,7);ctx.fill();ctx.stroke()}ctx.restore()}));
  ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,110,W,430);
  hookTitle('IMAGINE...|ACORDAR NO SEU|MELHOR AMIGO 😳',seg(u,0,.35),240);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.85*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(2400.05);
// 1. placar → VENCEU A (2404–2409.5)
scene(2404,2409.5,(t)=>{const u=t-2404;s2cPlacar(u,seg(u,3.2,3.6));letterIn(u)});
// 2. ontem: no corpo da diretora, o carimbo ARQUIVADO desce na pasta vermelha (2410–2413.5)
scene(2410,2413.5,(t)=>{const u=t-2410;ctx.fillStyle='#3a3040';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(255,255,255,.04)';for(let y=0;y<H;y+=46)ctx.fillRect(0,y,W,3);glow(W*.7,H*.2,900,'rgba(255,220,170,A)',.35);
  CAM(W/2,H*.52,lerp(1.1,1.0,easeOut(seg(u,0,3.5))),()=>{softShadow(W/2+20,H*.52+40,460,380,.45);ctx.save();ctx.translate(W/2,H*.52);ctx.rotate(-.04);ctx.fillStyle='#c8352b';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-340,-440,680,880,22);ctx.fill();ctx.stroke();
    ctx.fillStyle='#fffdf6';ctx.beginPath();rr(-230,-300,460,130,12);ctx.fill();ctx.stroke();ctx.fillStyle='#16161c';ctx.font='900 58px Inter';ctx.textAlign='center';ctx.fillText('AUDITORIA',0,-214);
    ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Matheus',0,-40);
    if(u>.8){const k=seg(u,.8,1.05);ctx.save();ctx.translate(0,180);ctx.rotate(-.14);const sc=lerp(2.2,1,easeOut(k));ctx.scale(sc,sc);ctx.globalAlpha=clamp(k*3);ctx.strokeStyle='#ffd84a';ctx.lineWidth=14;ctx.strokeRect(-300,-80,600,160);ctx.fillStyle='#ffd84a';ctx.font='900 104px Inter';ctx.fillText('ARQUIVADO',0,38);ctx.restore()}
    ctx.restore();
    // a mão da diretora (manga vinho) segurando o carimbo, subindo depois de carimbar
    const up=u<.8?lerp(-200,0,easeIO(seg(u,.2,.8))):lerp(0,-260,easeOut(seg(u,1.05,1.6)));ctx.save();ctx.translate(W/2+40,H*.52+120+up-260);ctx.fillStyle='#5a3a2a';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-70,-40,140,80,14);ctx.fill();ctx.stroke();ctx.fillRect(-18,-200,36,170);ctx.strokeRect(-18,-200,36,170);
    ctx.fillStyle=HL.skin;ctx.beginPath();ctx.ellipse(0,-230,70,60,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle=HL.blz;ctx.beginPath();rr(-70,-420,140,180,30);ctx.fill();ctx.stroke();ctx.restore()});
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('ONTEM',W/2,300,'800 64px Oswald','#ff8a8a',0);ctx.restore();letterIn(u);
});
SHAKE.push(2410.82);
// 3. o salário de quase dez mil ficou (holerite + dinheiro caindo) (2414–2417.5)
scene(2414,2417.5,(t)=>{const u=t-2414;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.3);
  for(let i=0;i<14;i++){const r=rng(i+460);const x=r()*W,y=((r()*H+u*(300+r()*200))%(H+200))-100;ctx.save();ctx.translate(x,y);ctx.rotate(u*2+i);ctx.fillStyle='#8fd18f';ctx.strokeStyle='#2f6a3a';ctx.lineWidth=4;ctx.beginPath();rr(-60,-30,120,60,6);ctx.fill();ctx.stroke();ctx.fillStyle='#2f6a3a';ctx.font='900 30px Inter';ctx.textAlign='center';ctx.fillText('R$',0,10);ctx.restore()}
  CAM(W/2,H*.48,lerp(1.0,1.08,seg(u,0,3.5)),()=>{softShadow(W/2,H*.48+420,380,40,.4);ctx.save();ctx.translate(W/2,H*.48);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-380,-400,760,800,20);ctx.fill();ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 60px Inter';ctx.textAlign='center';ctx.fillText('HOLERITE · MATHEUS',0,-300);ctx.fillStyle='#777';ctx.font='600 44px Inter';ctx.fillText('SALÁRIO',0,-160);
    ctx.fillStyle='#1f8a4a';ctx.font='900 150px Oswald';ctx.fillText('R$ 9.900',0,20);
    if(u>.7){const k=easeBack(seg(u,.7,1.0));ctx.save();ctx.translate(0,220);ctx.scale(k,k);ctx.fillStyle='#1f8a4a';rr(-200,-60,400,120,30);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 70px Inter';ctx.fillText('FICOU ✓',0,26);ctx.restore()}
    ctx.restore()});
  letterIn(u);
});
// 4. "por causa da escolha de vocês": o sistema do RH — VERBA DO MÊS: ESGOTADA (barra zerando) (2418–2421.5)
scene(2418,2421.5,(t)=>{const u=t-2418;ctx.fillStyle=lg(0,H,['#1a1f2e','#2a3148','#121521']);ctx.fillRect(0,0,W,H);const al=(Math.floor(u*4)%2)?1:.4;glow(W/2,H*.45,900,'rgba(255,70,70,A)',.18*al);
  CAM(W/2,H*.5,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>{softShadow(W/2,1420,460,40,.5);ctx.fillStyle='#22252e';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(110,560,860,620,26);ctx.fill();ctx.stroke();ctx.fillRect(500,1180,80,140);ctx.beginPath();rr(360,1310,360,30,10);ctx.fill();ctx.stroke();
    ctx.fillStyle=lg(580,1160,['#f4f6fa','#dde3ee']);ctx.fillRect(140,590,800,560);
    ctx.fillStyle='#2b3452';ctx.fillRect(140,590,800,70);ctx.fillStyle='#fff';ctx.font='800 34px Inter';ctx.textAlign='left';ctx.fillText('SISTEMA DE RH · ALMEIDA & CIA',170,638);
    ctx.fillStyle='#16161c';ctx.font='900 50px Inter';ctx.fillText('VERBA DO MÊS',180,760);
    const v=1-easeIO(seg(u,.3,1.8));ctx.fillStyle='#d9dde6';rr(180,800,720,80,20);ctx.fill();ctx.fillStyle=v>.25?'#2a8a4a':'#d22';rr(180,800,Math.max(40,720*v),80,20);ctx.fill();
    ctx.fillStyle='#555';ctx.font='700 40px Inter';ctx.fillText('aumento Matheus: −R$ 7.800',180,950);
    if(u>1.8){const k=easeBack(seg(u,1.8,2.1));ctx.save();ctx.translate(540,1060);ctx.scale(k,k);ctx.fillStyle='rgba(210,40,40,.95)';rr(-330,-60,660,120,24);ctx.fill();ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='900 64px Inter';ctx.fillText('⚠ ESGOTADA',0,22);ctx.restore()}});
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('ONTEM · 18:00',W/2,330,'800 60px Oswald','#ff8a8a',0);ctx.restore();letterIn(u);
});
SHAKE.push(2419.85);
// 5. faltou verba pra outra promoção: PROMOÇÃO · LUCAS — CANCELADA (2422–2425.5)
scene(2422,2425.5,(t)=>{const u=t-2422;ctx.fillStyle='#fffdf6';ctx.fillRect(0,0,W,H);ctx.fillStyle='rgba(0,0,0,.06)';for(let y=200;y<H;y+=90)ctx.fillRect(80,y,W-160,4);
  CAM(W/2,H*.55,lerp(1.12,1.0,easeOut(seg(u,0,3.5))),()=>{ctx.fillStyle='#16161c';ctx.font='900 66px Inter';ctx.textAlign='center';ctx.fillText('PROMOÇÕES DO MÊS',W/2,540);ctx.fillStyle='#2b3452';ctx.fillRect(160,580,760,8);
    ctx.textAlign='left';ctx.fillStyle='#666';ctx.font='700 50px Inter';ctx.fillText('Funcionário:',140,760);ctx.fillStyle='#16161c';ctx.font='900 60px Inter';ctx.fillText('LUCAS',520,760);
    ctx.fillStyle='#666';ctx.font='700 50px Inter';ctx.fillText('Motivo:',140,900);ctx.fillStyle='#c8352b';ctx.font='900 56px Inter';ctx.fillText('falta de verba',400,900);
    if(u>.9){const k=seg(u,.9,1.15);ctx.save();ctx.translate(540,1150);ctx.rotate(-.12);const sc=lerp(2.2,1,easeOut(k));ctx.scale(sc,sc);ctx.globalAlpha=clamp(k*3);ctx.strokeStyle='#c8352b';ctx.lineWidth=14;ctx.strokeRect(-330,-85,660,170);ctx.fillStyle='#c8352b';ctx.font='900 104px Inter';ctx.textAlign='center';ctx.fillText('CANCELADA',0,38);ctx.restore()}});
  letterIn(u);
});
SHAKE.push(2422.92);
// 6. "De quem? Do Lucas. O melhor amigo dele.": os dois lado a lado, fundo de uma cor só (2426–2429.5)
scene(2426,2429.5,(t)=>{const u=t-2426;ctx.fillStyle='#3f8f7a';ctx.fillRect(0,0,W,H);
  CAM(W/2,1200,lerp(1.1,1.0,easeOut(seg(u,0,1.2))),()=>{personFront(330,1200,1.6,{smile:6,look:.5,eye:(u>2.2&&u<2.32)?.1:1});luFront(750,1200,1.6,{smile:8,look:-.5,eye:(u>1.3&&u<1.42)?.1:1})});
  const k=easeBack(seg(u,.5,.9));ctx.save();ctx.translate(lerp(W+40,560,k),330);ctx.fillStyle='rgba(20,60,50,.95)';rr(0,0,460,130,22);ctx.fill();ctx.fillStyle='#bff0dc';ctx.font='800 36px Inter';ctx.textAlign='left';ctx.fillText('O MELHOR AMIGO',30,50);ctx.fillStyle='#fff';ctx.font='900 58px Inter';ctx.fillText('LUCAS',30,110);ctx.restore();
  const k2=easeBack(seg(u,.9,1.3));ctx.save();ctx.translate(lerp(-500,60,k2),360);ctx.fillStyle='rgba(180,70,30,.95)';rr(0,0,360,100,22);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 50px Inter';ctx.textAlign='left';ctx.fillText('MATHEUS',30,68);ctx.restore();
  if(u>1.6){const k3=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(540,640);ctx.scale(k3,k3);txtC('💚',0,0,'110px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 8. sete da manhã: o quarto dos pôsteres — alguém de moletom verde se senta na cama (de costas) (2432–2435.5)
scene(2432,2435.5,(t)=>{const u=t-2432;CAM(W/2,1200,lerp(1.12,1.0,easeOut(seg(u,0,1.5))),()=>{s2cRoom(u,{pan:0});s2cBed(80,1250,0);
  const k=easeOut(seg(u,.3,1.4));ctx.save();ctx.translate(460,1340-k*110);ctx.fillStyle=LU.hood;ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.ellipse(0,0,140,160,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle=LU.skinS;ctx.beginPath();ctx.ellipse(0,-190,78,88,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle=LU.hair;ctx.beginPath();ctx.moveTo(-86,-170);ctx.quadraticCurveTo(-96,-288,0,-290);ctx.quadraticCurveTo(96,-288,86,-170);ctx.quadraticCurveTo(60,-130,0,-126);ctx.quadraticCurveTo(-60,-130,-86,-170);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();
  s2cBlanket(80,1250,0,u);});
  grade('rgba(255,190,120,.22)','rgba(60,90,140,.15)');letterIn(u);
});
// 9. a câmera vai até a janela: o gato laranja no parapeito (2436–2439.5)
scene(2436,2439.5,(t)=>{const u=t-2436;const pan=lerp(0,640,easeIO(seg(u,0,2.6)));CAM(W/2,1100,lerp(1.0,1.08,seg(u,0,3.5)),()=>{s2cRoom(u,{pan});
  e6Cat(1400-pan,1000,1.3,u);s2cBed(80,1250,pan);s2cBlanket(80,1250,pan,u);});
  grade('rgba(255,190,120,.2)','rgba(60,90,140,.15)');letterIn(u);
});
// 10. close no gato: ele olha pra câmera e mia (2440–2443.5)
scene(2440,2443.5,(t)=>{const u=t-2440;ctx.fillStyle=lg(0,H,['#cfe5f2','#b9d4e8','#9ab8d0']);ctx.fillRect(0,0,W,H);glow(W*.7,H*.25,800,'rgba(255,240,200,A)',.5);dust(u,43,20,'rgba(255,240,200,A)');
  CAM(W/2,H*.5,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{s2bCatFace(W/2,H*.5,1.2,u,{blink:u<.4||(u>2.6&&u<2.72),meow:u>1.2&&u<2.1?Math.sin(seg(u,1.2,2.1)*Math.PI):0,tilt:Math.sin(u*1.2)*.06})});
  if(u>1.2)s2bBubble(W/2,520,420,160,seg(u,1.2,1.5),'MIAU! 💙','#e8752a',-60);
  letterIn(u);
});
// 11. o espelho: o vapor some e quem olha de volta é o LUCAS (2444–2447.5)
scene(2444,2447.5,(t)=>{const u=t-2444;const z=lerp(1.0,1.2,easeOut(seg(u,.3,.7)));const sh=(u>.3&&u<.8)?Math.sin(u*80)*10:0;
  CAM(W/2+sh,H*.45,z,()=>s2Mirror(u,()=>{ctx.fillStyle=lg(250,1400,['#a9bcd0','#8299b2']);ctx.fillRect(110,250,860,1150);luFace(540,900,1.0,{open:lerp(1,1.45,seg(u,.25,.45)),brow:seg(u,.25,.45),mouthO:seg(u,.3,.5)*.9,pupil:.65})},{fog:lerp(.85,0,easeOut(seg(u,0,.35)))}));
  if(u>.3&&u<.5){ctx.fillStyle=`rgba(255,255,255,${.6*(1-seg(u,.3,.5))})`;ctx.fillRect(0,0,W,H)}
  if(u>.9){const k=easeBack(seg(u,.9,1.2));ctx.save();ctx.translate(W/2,1500);ctx.scale(k,k);txtC('O LUCAS?! 😱',0,0,'900 100px Inter','#ffd84a',18);ctx.restore()}
});
SHAKE.push(2444.32);
// 12. "HOJE ELE É: LUCAS" — crachá girando (2448–2451.5)
scene(2448,2451.5,(t)=>{const u=t-2448;ctx.fillStyle=lg(0,H,['#1d3a34','#2c6c5b','#12261f']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(150,255,210,A)',.25);
  const sp=lerp(Math.PI*2,0,easeOut(seg(u,0,1.0)));CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{ctx.save();ctx.translate(W/2,H*.52);ctx.scale(Math.cos(sp),1);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-330,-430,660,860,30);ctx.fill();ctx.stroke();
    ctx.fillStyle='#2c6c5b';ctx.beginPath();rr(-330,-430,660,150,30);ctx.fill();ctx.fillRect(-330,-320,660,40);ctx.fillStyle='#fff';ctx.font='800 50px Oswald';ctx.textAlign='center';ctx.fillText('HOJE ELE É',0,-335);
    ctx.save();ctx.beginPath();rr(-170,-240,340,340,20);ctx.clip();ctx.fillStyle='#cfe0f0';ctx.fillRect(-170,-240,340,340);luFace(0,-40,.42,{smile:8});ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-240,340,340,20);ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 80px Inter';ctx.fillText('LUCAS',0,210);ctx.fillStyle='#2c6c5b';ctx.font='800 46px Inter';ctx.fillText('o melhor amigo',0,290);ctx.restore()});
  letterIn(u);
});
// 13. o celular toca: quem liga é o número do próprio Matheus (2452–2455.5)
scene(2452,2455.5,(t)=>{const u=t-2452;CAM(W/2,H*.48,lerp(1.0,1.06,seg(u,0,3.5)),()=>{s2Phone(u,{time:'07:06',date:'quarta-feira',ring:true,screen:['#163a2e','#2c6c5b','#0f261e'],bg:['#cfe0f2','#b9cfe6','#8fa9c6']});
    const k=easeBack(seg(u,.2,.6));ctx.save();ctx.translate(W/2,H*.5);ctx.rotate(-.04);ctx.scale(k,k);ctx.fillStyle='rgba(250,250,252,.97)';rr(-250,-80,500,420,40);ctx.fill();
    ctx.save();ctx.beginPath();ctx.arc(0,40,90,0,7);ctx.clip();ctx.fillStyle='#ffd9c0';ctx.fillRect(-100,-60,200,200);face(0,60,.24,{headOnly:true,smile:6});ctx.restore();
    txtC('MATHEUS',0,190,'900 60px Inter','#16161c');txtC('(o número DELE!)',0,260,'800 38px Inter','#c8352b');ctx.restore()});
  letterIn(u);
});
// 14. [telefone] "Matheus? Sou eu, o Lucas! Tô no seu corpo!" — o rosto do Matheus no telefone (2456–2459.5)
scene(2456,2459.5,(t)=>{const u=t-2456;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.6,lerp(1.0,1.06,seg(u,0,3.5)),()=>face(W/2,H*.64,.85,{open:1.3,brow:1,mouthO:.4+.3*Math.abs(Math.sin(u*9)),px:Math.sin(u*3)*8}));
  s2cCall(u,'MATHEUS','chamada · 00:0'+Math.min(9,Math.floor(u+1)),seg(u,0,.3));
  s2bBubble(W/2,640,820,200,seg(u,.4,.7),'SOU EU, O LUCAS!|TÔ NO SEU CORPO! 😱','#2c6c5b',-80);
  s2cInside(W/2,1460);letterIn(u);
});
// 15. [telefone] "E eu vi o seu holerite. Dez mil?!" (2460–2463.5)
scene(2460,2463.5,(t)=>{const u=t-2460;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.62,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>face(W/2,H*.68,.8,{open:1.45,brow:1.2,mouthO:.8,pupil:.6}));
  // o holerite subindo na frente
  const k=easeOut(seg(u,.2,.8));ctx.save();ctx.translate(W/2+160,lerp(H+300,1180,k));ctx.rotate(.08);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-230,-170,460,340,16);ctx.fill();ctx.stroke();
  ctx.fillStyle='#16161c';ctx.font='900 36px Inter';ctx.textAlign='center';ctx.fillText('HOLERITE · MATHEUS',0,-100);ctx.fillStyle='#1f8a4a';ctx.font='900 90px Oswald';ctx.fillText('R$ 9.900',0,40);ctx.restore();
  s2cCall(u,'MATHEUS','chamada · 00:1'+Math.min(9,Math.floor(u+2)),1);
  if(u>1.2)s2bBubble(W/2,620,620,180,seg(u,1.2,1.5),'DEZ MIL?! 😳','#c8352b',-60);
  letterIn(u);
});
SHAKE.push(2461.22);
// 16. silêncio na linha: o Lucas (com o Matheus dentro) suando, "..." (2464–2467.5)
scene(2464,2467.5,(t)=>{const u=t-2464;ctx.fillStyle=lg(0,H,['#cfe0f2','#b9cfe6','#8fa9c6']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,240,210,A)',.3);
  CAM(W/2,H*.55,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>luFace(W/2,H*.6,.85,{open:1.05,brow:.7,sweat:1,smile:-8,px:lerp(0,-26,seg(u,1,1.5)),py:10}));
  // celular na orelha (mão do Lucas)
  ctx.save();ctx.translate(W/2+340,H*.6-40);ctx.rotate(.25);ctx.fillStyle='#0d0e12';ctx.strokeStyle=OUT;ctx.lineWidth=6;rr(-50,-120,100,240,20);ctx.fill();ctx.stroke();ctx.fillStyle=LU.skin;ctx.beginPath();ctx.ellipse(10,60,70,90,0,0,7);ctx.fill();ctx.stroke();ctx.restore();
  const n=Math.floor(u*2.5)%4;txtC('.'.repeat(n)||' ',W/2,420,'900 160px Inter','#2b3452',0);
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('SILÊNCIO...',W/2,300,'900 80px Inter','#2b3452',0);ctx.restore();letterIn(u);
});
// 17. [telefone] "Foi por isso que cortaram minha promoção?" — o rosto do Matheus, triste (2468–2471.5)
scene(2468,2471.5,(t)=>{const u=t-2468;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(150,170,255,A)',.25);
  CAM(W/2,H*.62,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>face(W/2,H*.68,.8,{open:.9,brow:-.6,lid:.25,smile:-14,py:12}));
  s2cCall(u,'MATHEUS','chamada · 00:2'+Math.min(9,Math.floor(u+1)),1);
  s2bBubble(W/2,640,860,200,seg(u,.3,.6),'CORTARAM MINHA|PROMOÇÃO POR ISSO? 😔','#2b3452',-80);
  s2cInside(W/2,1460);letterIn(u);
});
// 18. "E agora? Ele conta a verdade?" — o Lucas (Matheus dentro) olha pra câmera (2472–2475.5)
scene(2472,2475.5,(t)=>{const u=t-2472;ctx.fillStyle=lg(0,H,['#2c6c5b','#3f8f7a','#1d4a3e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,230,170,A)',.3);
  CAM(W/2,H*.5,lerp(1.12,1.0,easeOut(seg(u,0,.8))),()=>luFace(W/2,H*.52,.9,{open:1.2,brow:.8,sweat:1,smile:lerp(0,-10,seg(u,.6,1))}));
  const k=easeBack(seg(u,.4,.8));ctx.save();ctx.translate(W/2,330);ctx.scale(k,k);txtC('E AGORA? 😬',0,0,'900 120px Inter','#ffd84a',20);ctx.restore();
  if(u>1.2){ctx.save();ctx.globalAlpha=seg(u,1.2,1.6);txtC('ELE CONTA A VERDADE?',W/2,1480,'900 64px Inter','#fff',14);ctx.restore()}
  letterIn(u);
});
// 19. antes de responder, chega uma notificação (2476–2479.5)
scene(2476,2479.5,(t)=>{const u=t-2476;CAM(W/2,H*.48,lerp(1.0,1.06,seg(u,0,3.5)),()=>s2Phone(u,{time:'07:09',date:'quarta-feira',screen:['#163a2e','#2c6c5b','#0f261e'],bg:['#cfe0f2','#b9cfe6','#8fa9c6'],msgs:[['E-MAIL · NOVA ERA TECH','Para: Lucas · ENTREVISTA','agora',seg(u,.4,.8),'#2f9a6a']]}));letterIn(u)});
// 20. [carta] o e-mail: entrevista hoje, dez horas (2480–2483.5)
scene(2480,2483.5,(t)=>{const u=t-2480;CAM(W/2,H*.5,lerp(1.05,1.16,easeIO(seg(u,0,3.5))),()=>s2bPhoneMsg(u,{time:'07:10',screen:['#163a2e','#2c6c5b','#0f261e'],bg:['#cfe0f2','#b9cfe6','#8fa9c6'],k:seg(u,.15,.5),tag:'RH · Nova Era Tech',col:'#2f9a6a',icon:'✉',l1:'Lucas: entrevista',l2:'HOJE, às 10h.',l3:'Empresa nova!'}));letterIn(u)});
// 21. um emprego melhor pro Lucas: vaga de coordenador (2484–2487.5)
scene(2484,2487.5,(t)=>{const u=t-2484;ctx.fillStyle=lg(0,H,['#103a2a','#1f6a4a','#0b2a1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(140,255,200,A)',.3);
  CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>{softShadow(W/2,H*.5+440,380,40,.4);ctx.save();ctx.translate(W/2,H*.5);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-380,-420,760,840,24);ctx.fill();ctx.stroke();
    ctx.fillStyle='#2f9a6a';ctx.beginPath();rr(-380,-420,760,150,24);ctx.fill();ctx.fillRect(-380,-300,760,30);txtC('NOVA ERA TECH',0,-345,'900 64px Oswald','#fff');
    const L=[['Vaga:','COORDENADOR','#16161c'],['Para:','LUCAS','#2c6c5b'],['Salário:','R$ 8.000','#1f8a4a']];
    L.forEach(([a,b,c],i)=>{const y=-150+i*170;ctx.globalAlpha=seg(u,.2+i*.35,.5+i*.35);ctx.textAlign='left';ctx.fillStyle='#666';ctx.font='700 48px Inter';ctx.fillText(a,-330,y);ctx.textAlign='right';ctx.fillStyle=c;ctx.font='900 60px Inter';ctx.fillText(b,330,y);ctx.globalAlpha=1;ctx.fillStyle='rgba(0,0,0,.1)';ctx.fillRect(-330,y+34,660,3)});
    if(u>1.5){const k=easeBack(seg(u,1.5,1.8));ctx.save();ctx.translate(0,330);ctx.scale(k,k);ctx.fillStyle='#1f8a4a';rr(-260,-56,520,112,28);ctx.fill();txtC('O SONHO DELE ⬆',0,2,'900 54px Inter','#fff');ctx.restore()}
    ctx.restore()});
  letterIn(u);
});
// 22. só que fica do outro lado da cidade: mapa com os dois pinos (2488–2491.5)
scene(2488,2491.5,(t)=>{const u=t-2488;ctx.fillStyle='#e9e3d2';ctx.fillRect(0,0,W,H);
  CAM(W/2,H*.5,lerp(1.2,1.0,easeIO(seg(u,0,2.5))),()=>{ctx.strokeStyle='#d4ccb6';ctx.lineWidth=26;for(let i=0;i<9;i++){ctx.beginPath();ctx.moveTo(0,300+i*170);ctx.lineTo(W,260+i*170+Math.sin(i)*60);ctx.stroke();ctx.beginPath();ctx.moveTo(80+i*130,200);ctx.lineTo(40+i*140,1700);ctx.stroke()}
    ctx.strokeStyle='#8fc3e8';ctx.lineWidth=60;ctx.beginPath();ctx.moveTo(-40,900);ctx.bezierCurveTo(300,760,700,1100,W+40,940);ctx.stroke();
    for(let i=0;i<12;i++){const r=rng(i+480);ctx.fillStyle='rgba(120,180,110,.5)';ctx.beginPath();ctx.arc(r()*W,300+r()*1300,30+r()*40,0,7);ctx.fill()}
    // linha pontilhada até a empresa nova
    const k=seg(u,.6,2.0);ctx.save();ctx.setLineDash([24,22]);ctx.strokeStyle='#c8352b';ctx.lineWidth=12;ctx.beginPath();const p0=[260,1380],p1=[820,460];ctx.moveTo(p0[0],p0[1]);ctx.quadraticCurveTo(200,700,lerp(p0[0],p1[0],k)*1,lerp(p0[1],p1[1],k));ctx.stroke();ctx.restore();
    const pin=(x,y,col,lab,a)=>{if(a<=0)return;const s=easeBack(clamp(a));ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.fillStyle=col;ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.arc(0,-90,56,Math.PI*.85,Math.PI*2.15);ctx.lineTo(0,0);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(0,-90,22,0,7);ctx.fill();
      ctx.fillStyle='rgba(20,20,30,.88)';rr(-200,24,400,80,20);ctx.fill();txtC(lab,0,64,'900 40px Inter','#fff');ctx.restore()};
    pin(260,1380,'#2b3452','ALMEIDA & CIA',seg(u,.1,.4));pin(820,460,'#2f9a6a','NOVA ERA TECH',seg(u,1.8,2.1));});
  if(u>2.2){const k=easeBack(seg(u,2.2,2.5));ctx.save();ctx.translate(W/2,1560);ctx.scale(k,k);ctx.fillStyle='#c8352b';rr(-420,-70,840,140,30);ctx.fill();txtC('OUTRO LADO DA CIDADE',0,2,'900 58px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 23. se o Lucas for, ele sai da empresa: a mesa dele vira uma caixa de mudança (2492–2495.5)
scene(2492,2495.5,(t)=>{const u=t-2492;CAM(W/2,1300,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{s2Office(u,{pan:120});
  s2Desk(540,1400,1.0,{});
  // plaquinha LUCAS
  ctx.save();ctx.translate(540,1300);ctx.fillStyle='#2c6c5b';ctx.strokeStyle=OUT;ctx.lineWidth=6;rr(-130,-40,260,80,10);ctx.fill();ctx.stroke();txtC('LUCAS',0,2,'900 46px Inter','#fff');ctx.restore();
  // caixa de mudança descendo
  const k=easeOut(seg(u,.8,1.6));ctx.save();ctx.translate(800,lerp(900,1300,k));ctx.globalAlpha=clamp(k*3);ctx.fillStyle='#c9a06a';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-120,-110,240,180,8);ctx.fill();ctx.stroke();ctx.fillStyle='#a8814e';ctx.fillRect(-120,-110,240,30);ctx.strokeRect(-120,-110,240,30);
  ctx.font='60px Inter';ctx.textAlign='center';ctx.fillText('🌵',-50,-120);ctx.fillText('☕',50,-118);ctx.restore();});
  if(u>1.7){const k=easeBack(seg(u,1.7,2.0));ctx.save();ctx.translate(W/2,420);ctx.scale(k,k);ctx.fillStyle='rgba(20,20,30,.85)';rr(-400,-80,800,160,36);ctx.fill();txtC('ELE SAI DA EMPRESA',0,2,'900 62px Inter','#fff');ctx.restore()}
  grade('rgba(255,170,90,.18)','rgba(40,60,120,.18)');letterIn(u);
});
// 24. sem almoço junto, sem café das três: duas fotos dos dois amigos (2496–2499.5)
scene(2496,2499.5,(t)=>{const u=t-2496;ctx.fillStyle=lg(0,H,['#3a2a20','#5a4030','#2a1c14']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,210,150,A)',.3);
  const photo=(x,y,rot,k,lab,draw)=>{if(k<=0)return;ctx.save();ctx.translate(x,lerp(y-500,y,easeOut(clamp(k))));ctx.rotate(rot);ctx.globalAlpha=clamp(k*3);softShadow(10,330,300,30,.4);ctx.fillStyle='#fbf7ee';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(-300,-300,600,640);ctx.strokeRect(-300,-300,600,640);
    ctx.save();ctx.beginPath();ctx.rect(-270,-270,540,500);ctx.clip();ctx.fillStyle='#f0d8b0';ctx.fillRect(-270,-270,540,500);draw();ctx.fillStyle='rgba(150,100,50,.18)';ctx.fillRect(-270,-270,540,500);ctx.restore();ctx.strokeRect(-270,-270,540,500);
    txtC(lab,0,290,'700 52px Caveat','#3a2a20');ctx.restore()};
  CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{
    photo(330,620,-.08,seg(u,.1,.6),'almoço junto 🍝',()=>{personFront(-110,140,.95,{smile:10,look:.4});luFront(110,140,.95,{smile:10,look:-.4});ctx.fillStyle='#8a6446';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.fillRect(-270,150,540,90);ctx.strokeRect(-270,150,540,90);ctx.font='60px Inter';ctx.textAlign='center';ctx.fillText('🍝',-110,160);ctx.fillText('🍝',110,160)});
    photo(750,1180,.07,seg(u,1.2,1.7),'café das 3 ☕',()=>{personFront(-110,140,.95,{smile:12,look:.5,eye:.1});luFront(110,140,.95,{smile:14,look:-.5});ctx.fillStyle='#8a6446';ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.fillRect(-270,150,540,90);ctx.strokeRect(-270,150,540,90);ctx.font='60px Inter';ctx.textAlign='center';ctx.fillText('☕',-110,160);ctx.fillText('☕',110,160)});});
  letterIn(u);
});
// 25. nove e meia: ele (no corpo do Lucas) anda para a DIREITA na calçada; a fachada da Nova Era chega pela direita (2500–2503.5)
scene(2500,2503.5,(t)=>{const u=t-2500;const gx=u*280;CAM(W/2,1250,1.0,()=>{s2Street(gx,u);
  // fachada da Nova Era (presa no chão, passa junto com os postes)
  const fx=1750-gx;ctx.fillStyle='#e9eef0';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(fx,700,560,560);ctx.strokeRect(fx,700,560,560);ctx.fillStyle='#2f9a6a';ctx.fillRect(fx,700,560,120);ctx.strokeRect(fx,700,560,120);txtC('NOVA ERA TECH',fx+280,762,'900 54px Oswald','#fff');
  ctx.fillStyle='#9fc8e0';ctx.fillRect(fx+180,920,200,340);ctx.strokeRect(fx+180,920,200,340);
  // folhas voando com o vento (da esquerda pra direita, ambiente)
  for(let i=0;i<7;i++){const r=rng(i+500);const x=((r()*W+u*(260+r()*120))%(W+100))-50,y=900+r()*500+Math.sin(u*3+i)*40;ctx.save();ctx.translate(x,y);ctx.rotate(u*4+i);ctx.fillStyle=i%2?'#e2a23c':'#c8702a';ctx.beginPath();ctx.ellipse(0,0,18,9,0,0,7);ctx.fill();ctx.restore()}
  luSide(430,1400,1.35,{f:1,walk:u*8.5,look:.05});});
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('09:30',W/2,330,'800 70px Oswald','#2b3452',0);ctx.restore();
  grade('rgba(255,190,120,.18)','rgba(40,60,120,.15)');letterIn(u);
});
// 26. "E repara: o relógio da recepção." — a câmera vai até o relógio (2504–2507.5)
scene(2504,2507.5,(t)=>{const u=t-2504;CAM(lerp(W/2,1040,easeIO(seg(u,.8,3.2))),lerp(1100,700,easeIO(seg(u,.8,3.2))),lerp(1.0,1.6,easeIO(seg(u,.8,3.2))),()=>{s2cLobby(u,{});
  coworker(1,540,1200,1.3,{smile:6,look:Math.sin(u)*.3});s2cCounter(1260,0);});
  if(u>.3){ctx.save();ctx.globalAlpha=seg(u,.3,.7)*(1-seg(u,2.6,3.0));txtC('REPARA... 👀',W/2,1500,'900 90px Inter','#ffd84a',16);ctx.restore()}
  letterIn(u);
});
// 27. parado na meia-noite — igual ao do quarto do Lucas (2508–2511.5)
scene(2508,2511.5,(t)=>{const u=t-2508;ctx.fillStyle=lg(0,H,['#1a1530','#2e2558','#0f0c20']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(170,140,255,A)',.3);
  CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>{clockFace(W/2,640,250,0,0);txtC('RECEPÇÃO',W/2,960,'900 54px Inter','#cbb8ff',0);
    if(u>1.0){const k=easeBack(seg(u,1.0,1.4));ctx.save();ctx.translate(W/2,1250);ctx.scale(k,k);clockFace(0,0,130,0,0);ctx.restore();txtC('= QUARTO DO LUCAS',W/2,1440,'900 54px Inter','#cbb8ff',0)}});
  txtC('00:00',W/2,300,'900 110px Oswald','#ffd84a',16);letterIn(u);
});
// 28. a recepcionista chama: "Lucas? É a sua vez!" (2512–2515.5)
scene(2512,2515.5,(t)=>{const u=t-2512;CAM(W/2,1150,lerp(1.1,1.2,seg(u,0,3.5)),()=>{s2cLobby(u,{});coworker(1,540,1200,1.3,{smile:10,mouthO:u>.4&&u<2.4?.3+.2*Math.sin(u*12):0,look:.2});s2cCounter(1260,0)});
  s2bBubble(W/2,560,780,190,seg(u,.4,.7),'LUCAS? É A SUA|VEZ! 😊','#2f9a6a',-40);letterIn(u);
});
// 29. o celular vibra: o "Matheus" de novo (é o Lucas) (2516–2519.5)
scene(2516,2519.5,(t)=>{const u=t-2516;CAM(W/2,H*.48,lerp(1.0,1.06,seg(u,0,3.5)),()=>s2Phone(u,{time:'09:58',date:'quarta-feira',ring:u<1.2,screen:['#163a2e','#2c6c5b','#0f261e'],bg:['#dfe6ea','#c3ced6','#a7b4be'],msgs:[['MATHEUS (é o Lucas!)','Nova mensagem 💬','agora',seg(u,.3,.7),'#ee6a35']]}));letterIn(u)});
// 30. [carta] "Faz o que achar certo. Eu confio em você." (2520–2523.5)
scene(2520,2523.5,(t)=>{const u=t-2520;CAM(W/2,H*.5,lerp(1.05,1.14,easeIO(seg(u,0,3.5))),()=>s2bPhoneMsg(u,{time:'09:58',screen:['#163a2e','#2c6c5b','#0f261e'],bg:['#dfe6ea','#c3ced6','#a7b4be'],k:seg(u,.15,.5),tag:'Matheus (é o Lucas)',col:'#ee6a35',icon:'💬',l1:'Faz o que achar',l2:'certo. Eu confio',l3:'em você. 💚'}));letterIn(u)});
// 31. a escolha é toda dele: de costas, na frente da porta das entrevistas (2524–2527.5)
scene(2524,2527.5,(t)=>{const u=t-2524;CAM(W/2,1100,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{ctx.fillStyle=lg(0,H,['#2a2f3a','#3a4150','#1c2028']);ctx.fillRect(0,0,W,H);
  // porta com luz saindo pela fresta
  ctx.fillStyle='#fff6dc';ctx.fillRect(360,420,360,760);glow(540,800,600,'rgba(255,240,190,A)',.45);ctx.fillStyle='#6a4a32';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(360,420,330,760);ctx.strokeRect(360,420,360,760);
  ctx.fillStyle='#e9d48a';ctx.beginPath();ctx.arc(650,820,16,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#2f9a6a';rr(400,500,250,70,10);ctx.fill();txtC('ENTREVISTAS',525,536,'900 32px Inter','#fff');
  ctx.fillStyle=lg(1180,H,['#4a5060','#30343e']);ctx.fillRect(0,1180,W,H-1180);
  luFront(540,1450,1.7,{back:true});});
  if(u>.8){ctx.save();ctx.globalAlpha=seg(u,.8,1.2);txtC('A ESCOLHA É DELE',W/2,330,'900 84px Inter','#ffd84a',16);ctx.restore()}
  grade('rgba(255,200,120,.2)','rgba(30,40,80,.2)');letterIn(u);
});
// 32. tentação A: faltar — as duas canecas juntinhas na mesa de sempre (2528–2531.5)
scene(2528,2531.5,(t)=>{const u=t-2528;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.3);
  CAM(W/2,H*.5,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{ctx.fillStyle='#8a6446';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(60,1100,960,90,14);ctx.fill();ctx.stroke();
    const mug=(x,col,lab)=>{ctx.save();ctx.translate(x,1100);ctx.fillStyle=col;ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-110,-260,220,260,24);ctx.fill();ctx.stroke();ctx.lineWidth=20;ctx.beginPath();ctx.arc(x<540?-120:120,-140,56,x<540?Math.PI*.5:-Math.PI*.5,x<540?Math.PI*1.5:Math.PI*.5);ctx.stroke();ctx.strokeStyle=col;ctx.lineWidth=10;ctx.stroke();txtC(lab,0,-130,'900 40px Inter','#fff');
      for(let k=0;k<3;k++){const ph=(u*.8+k/3)%1;ctx.strokeStyle=`rgba(255,255,255,${.5*(1-ph)})`;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(-40+k*40,-280-ph*120);ctx.quadraticCurveTo(-20+k*40,-320-ph*120,-40+k*40,-360-ph*120);ctx.stroke()}ctx.restore()};
    mug(400,'#ee6a35','MATH');mug(680,'#3f8f7a','LUCAS');
    if(u>.8){const k=easeBack(seg(u,.8,1.1));ctx.save();ctx.translate(540,700);ctx.scale(k,k);txtC('🤝',0,0,'150px Inter','#fff');ctx.restore()}});
  txtC('A?',W/2,330,'900 120px Inter','#7dffa8',20);if(u>1.4){ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('FALTAR E MANTER O AMIGO',W/2,1480,'900 60px Inter','#fff',14);ctx.restore()}
  letterIn(u);
});
// 33. ou B: entrar — o crachá novo do Lucas e confete (2532–2535.5)
scene(2532,2535.5,(t)=>{const u=t-2532;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,170,255,A)',.3);
  for(let i=0;i<40;i++){const r=rng(i+530);const x=r()*W,y=((r()*H*.6+u*(380+r()*240))%(H+100))-80;ctx.save();ctx.translate(x,y);ctx.rotate(u*5+i);ctx.fillStyle=['#ffd84a','#ff7a5c','#7dffa8','#8fc0ff'][i%4];ctx.fillRect(-12,-6,24,12);ctx.restore()}
  CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>{ctx.strokeStyle='#2f9a6a';ctx.lineWidth=18;ctx.beginPath();ctx.moveTo(540,0);ctx.quadraticCurveTo(470,300,540,520);ctx.stroke();
    softShadow(W/2+20,1400,420,50,.45);ctx.save();ctx.translate(W/2,H*.52);ctx.rotate(Math.sin(u*2)*.04);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-330,-430,660,860,30);ctx.fill();ctx.stroke();
    ctx.fillStyle='#2f9a6a';ctx.beginPath();rr(-330,-430,660,150,30);ctx.fill();ctx.fillRect(-330,-320,660,40);txtC('NOVA ERA TECH',0,-350,'900 54px Oswald','#fff');
    ctx.save();ctx.beginPath();rr(-170,-240,340,340,20);ctx.clip();ctx.fillStyle='#cfe0f0';ctx.fillRect(-170,-240,340,340);luFace(0,-40,.42,{smile:16});ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-240,340,340,20);ctx.stroke();
    txtC('LUCAS',0,200,'900 72px Inter','#16161c');txtC('COORDENADOR',0,280,'900 52px Inter','#2f9a6a');ctx.restore()});
  txtC('B?',W/2,330,'900 120px Inter','#ffd84a',20);if(u>1.4){ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('ENTRAR E DAR O EMPREGO',W/2,1500,'900 60px Inter','#fff',14);ctx.restore()}
  letterIn(u);
});
// 34. a mensagem para pensar: uma mão solta um balão amarelo que sobe sobre a cidade (2536–2539.5)
scene(2536,2539.5,(t)=>{const u=t-2536;ctx.fillStyle=lg(0,H,['#ffb88a','#ffd9b0','#a9c8e8']);ctx.fillRect(0,0,W,H);semBlur(()=>buildings(91,1500,200,600,'#8a9cb8','#fff0c0',.08,0,1));glow(W/2,H*.3,900,'rgba(255,240,200,A)',.35);
  const rise=easeIO(seg(u,.9,3.5));const bx=540+Math.sin(u*1.5)*40*rise,by=lerp(1080,460,rise);
  CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{ctx.strokeStyle='#fff';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(bx,by+150);ctx.quadraticCurveTo(bx-20,by+260,u<.9?540:bx+10*Math.sin(u*3),u<.9?1330:by+360);ctx.stroke();
    ctx.fillStyle='#ffd84a';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.ellipse(bx,by,110,140,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='rgba(255,255,255,.45)';ctx.beginPath();ctx.ellipse(bx-40,by-50,24,40,-.4,0,7);ctx.fill();ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.moveTo(bx-14,by+150);ctx.lineTo(bx+14,by+150);ctx.lineTo(bx,by+134);ctx.closePath();ctx.fill();ctx.stroke();
    // a mão (manga verde) se abre embaixo
    const op=seg(u,.6,.9);ctx.save();ctx.translate(540,1420);ctx.fillStyle=LU.hood;ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(-80,40,160,260,30);ctx.fill();ctx.stroke();ctx.fillStyle=LU.skin;ctx.beginPath();ctx.ellipse(0,0,80,90,0,0,7);ctx.fill();ctx.stroke();
    for(let k=0;k<4;k++){ctx.save();ctx.translate(-42+k*28,-70);ctx.rotate((k-1.5)*.25*op);ctx.beginPath();ctx.ellipse(0,-20*op,16,lerp(26,44,op),0,0,7);ctx.fill();ctx.stroke();ctx.restore()}ctx.restore()});
  txtC('ÀS VEZES, GOSTAR...',W/2,300,'900 84px Inter','#fff',16);if(u>1.6){ctx.save();ctx.globalAlpha=seg(u,1.6,2.0);txtC('...É DEIXAR IR 🎈',W/2,410,'900 76px Inter','#ffd84a',14);ctx.restore()}
  letterIn(u);
});
// 35. no espelho: o Lucas… e o reflexo vira o próprio Matheus (2540–2543.5)
scene(2540,2543.5,(t)=>{const u=t-2540;const z=lerp(1.0,1.12,easeIO(seg(u,0,3.5)));
  CAM(W/2,H*.45,z,()=>s2Mirror(u,()=>{ctx.fillStyle=lg(250,1400,['#7c8a9a','#5c6878']);ctx.fillRect(110,250,860,1150);const m=easeIO(seg(u,.8,1.8));
    ctx.save();ctx.globalAlpha=1-m;luFace(540,900,1.0,{open:1,brow:.3});ctx.restore();ctx.save();ctx.globalAlpha=m;face(540,900,1.0,{open:.9,brow:.4,py:6,lid:.25});ctx.restore()}));
  if(u>2){ctx.save();ctx.globalAlpha=seg(u,2,2.4);ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,1330,W,170);txtC('E SE FOSSE VOCÊ? 🪞',W/2,1415,'900 80px Inter','#ffd84a',14);ctx.restore()}
});
// 36/37. ESCOLHA: A (verde) x B — sobre o rosto do Lucas (2544–2551)
scene(2544,2551,(t)=>{const u=t-2544;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  luFace(W/2,H*.7,.8,{open:1,brow:.5,px:-20,py:10});ctx.fillStyle='rgba(10,8,14,.68)';ctx.fillRect(0,0,W,H);
  txtC('O QUE ELE FAZ?',W/2,320,'900 92px Inter','#fff',18);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));ctx.textAlign='left';
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,140,80,.95)';rr(70,430,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('A',120,590);ctx.font='800 50px Inter';ctx.fillText('FALTAR e manter',250,530);ctx.fillText('o amigo perto 🤝',250,595);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(60,90,200,.95)';rr(70,690,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('B',120,850);ctx.font='800 50px Inter';ctx.fillText('ENTRAR e dar o',250,790);ctx.fillText('emprego pro Lucas 🚪',250,855);ctx.restore();
  if(u>1.4){const k=.5+.5*Math.sin(u*5);ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('COMENTA A OU B 👇',W/2,1080,'900 74px Inter',`rgb(255,${200+55*k},74)`,16);ctx.restore()}
});
// FINAL: cartela da série (2590–2593.2)
scene(2590,2593.2,(t)=>{const u=t-2590;ctx.fillStyle='#07070c';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,50,W/2,H*.42,900);g.addColorStop(0,'rgba(90,200,160,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.36);ctx.scale(k,k);ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='900 92px Inter';ctx.fillText('E SE VOCÊ',0,0);ctx.fillText('ACORDASSE NA',0,110);ctx.fillStyle='#ffd84a';ctx.font='900 128px Inter';ctx.fillText('VIDA DE OUTRA',0,250);ctx.fillText('PESSOA?',0,390);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 4 · AMANHÃ 18H',W/2,H*.36+560);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.36+660);ctx.restore()});
