// ===================== SÉRIE 2 · EP. 7 — NO CORPO DA MÃE =====================
// Faixa 3200–3399 (cartão final 3390–3393.2). Consequência do voto B do EP. 6 (no corpo da Bia, live na padaria pra limpar o nome do Zé):
// o nome do Zé ficou limpo e a fila da padaria voltou, MAS na live perguntaram do salário e ele teve que admitir: é verdade.
// Hoje (domingo) o Matheus acorda no corpo da dona Célia, a MÃE dele; ela está no corpo do Matheus (almoço de domingo, lasanha).
// Elementos novos (máx. 2): a dona Célia + a foto de infância (Matheus e Lucas, 7 anos) na geladeira.
// Pista retomada: a pergunta do Lucas (EP. 3) que o Matheus nunca respondeu. Pista escondida: relógio da cozinha parado em 00:00 (8º relógio).
// Ambiente (não falado): chuva fina na janela da cozinha e o gato laranja na janela.

const CELIA={skin:'#e6b08c',skinS:'#c78e6a',hair:'#4a2c20',hairL:'#6e4634',hood:'#e98aa6',hoodS:'#c86a86',pants:'#5a4a6a',pantsS:'#463a54'};
// cabelo curto (chanel) com franja de lado, óculos em cima da cabeça e brinquinhos (coordenadas do face())
function celiaTop(o){o=o||{};ctx.lineJoin='round';
  // laterais do chanel (cobrem as orelhas)
  for(const sx of[-1,1]){ctx.fillStyle=CELIA.hair;ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(sx*250,-260);ctx.quadraticCurveTo(sx*372,-120,sx*352,150);ctx.quadraticCurveTo(sx*345,232,sx*262,228);ctx.quadraticCurveTo(sx*286,60,sx*262,-140);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.strokeStyle=CELIA.hairL;ctx.lineWidth=10;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(sx*312,-120);ctx.quadraticCurveTo(sx*332,20,sx*318,150);ctx.stroke()}
  // franja de lado
  ctx.fillStyle=CELIA.hair;ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(-290,-120);ctx.quadraticCurveTo(-250,-330,0,-360);ctx.quadraticCurveTo(220,-350,290,-150);ctx.quadraticCurveTo(140,-250,-40,-190);ctx.quadraticCurveTo(-180,-150,-290,-120);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.strokeStyle=CELIA.hairL;ctx.lineWidth=14;ctx.beginPath();ctx.moveTo(-160,-290);ctx.quadraticCurveTo(20,-340,160,-290);ctx.stroke();
  // óculos em cima da cabeça
  ctx.strokeStyle='#7a3a5a';ctx.lineWidth=14;for(const sx of[-1,1]){ctx.fillStyle='rgba(220,240,255,.55)';ctx.beginPath();ctx.ellipse(sx*95,-300,72,50,0,0,7);ctx.fill();ctx.stroke()}
  ctx.beginPath();ctx.moveTo(-25,-305);ctx.quadraticCurveTo(0,-320,25,-305);ctx.stroke();
  ctx.strokeStyle='rgba(255,255,255,.8)';ctx.lineWidth=6;for(const sx of[-1,1]){ctx.beginPath();ctx.arc(sx*95-20,-312,26,3.5,4.6);ctx.stroke()}
  // linhas de sorriso
  ctx.strokeStyle='rgba(150,90,60,.4)';ctx.lineWidth=7;for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(sx*214,-6);ctx.lineTo(sx*240,-16);ctx.stroke()}
  // brinquinhos
  ctx.fillStyle='#ffd84a';ctx.strokeStyle=OUT;ctx.lineWidth=5;for(const sx of[-1,1]){ctx.beginPath();ctx.arc(sx*300,238,16,0,7);ctx.fill();ctx.stroke()}}
// avental florido por cima da blusa (coordenadas do face(), corpo de -560..560 × 380..980)
function celiaApron(){ctx.save();ctx.fillStyle='#fffaf0';ctx.strokeStyle=OUT;ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(-230,560);ctx.lineTo(230,560);ctx.lineTo(260,990);ctx.lineTo(-260,990);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.lineWidth=22;ctx.strokeStyle='#fffaf0';ctx.beginPath();ctx.moveTo(-200,570);ctx.lineTo(-120,420);ctx.moveTo(200,570);ctx.lineTo(120,420);ctx.stroke();ctx.lineWidth=6;ctx.strokeStyle=OUT;
  ctx.beginPath();ctx.moveTo(-212,560);ctx.lineTo(-134,414);ctx.moveTo(-188,560);ctx.lineTo(-108,426);ctx.moveTo(212,560);ctx.lineTo(134,414);ctx.moveTo(188,560);ctx.lineTo(108,426);ctx.stroke();
  ctx.beginPath();ctx.moveTo(-230,560);ctx.lineTo(230,560);ctx.lineTo(260,990);ctx.lineTo(-260,990);ctx.closePath();ctx.clip();
  for(let i=0;i<16;i++){const r=rng(i+3207);const x=-240+r()*480,y=590+r()*380;const c=['#ff6a8a','#ffb03a','#6ab8ff'][i%3];ctx.fillStyle=c;for(let k=0;k<5;k++){const a=k/5*6.283;ctx.beginPath();ctx.arc(x+Math.cos(a)*16,y+Math.sin(a)*16,12,0,7);ctx.fill()}ctx.fillStyle='#ffe066';ctx.beginPath();ctx.arc(x,y,9,0,7);ctx.fill()}
  ctx.restore()}
function celiaFace(cx,cy,s,o){o=o||{};withP(CELIA,()=>face(cx,cy,s,o));ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);if(!o.headOnly)celiaApron();celiaTop(o);ctx.restore()}
function celiaFront(x,y,s,pose){pose=pose||{};withP(CELIA,()=>personFront(x,y,s,pose));const p=pose.walk;const bob=p!=null?-5*Math.abs(Math.cos(p)):0;
  if(pose.back){ctx.save();ctx.translate(x,y+bob);ctx.scale(s,s);ctx.strokeStyle='#fffaf0';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-40,-40);ctx.lineTo(40,-40);ctx.stroke();ctx.strokeStyle=OUT;ctx.lineWidth=2;ctx.stroke();ctx.fillStyle='#fffaf0';ctx.beginPath();ctx.ellipse(-10,-40,12,7,.5,0,7);ctx.ellipse(10,-40,12,7,-.5,0,7);ctx.fill();ctx.stroke();
    ctx.translate(0,-196);ctx.fillStyle=CELIA.hair;ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.beginPath();ctx.ellipse(0,8,56,46,0,0,7);ctx.fill();ctx.stroke();ctx.restore();return}
  ctx.save();ctx.translate(x,y+bob);ctx.scale(s,s);
  // avental no tronco (estreito, não cobre os braços)
  ctx.fillStyle='#fffaf0';ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-30,-84);ctx.lineTo(30,-84);ctx.lineTo(34,14);ctx.lineTo(-34,14);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.strokeStyle='#fffaf0';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(-24,-84);ctx.lineTo(-12,-124);ctx.moveTo(24,-84);ctx.lineTo(12,-124);ctx.stroke();
  for(let i=0;i<7;i++){const r=rng(i+3219);ctx.fillStyle=['#ff6a8a','#ffb03a','#6ab8ff'][i%3];ctx.beginPath();ctx.arc(-24+r()*48,-74+r()*80,5,0,7);ctx.fill()}
  ctx.restore();
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.translate((pose.look||0)*8,-196+bob);ctx.scale(.16,.16);celiaTop(pose);ctx.restore()}
// selo "DENTRO: DONA CÉLIA" (a mãe está no corpo do Matheus)
function celiaInside(x,y){ctx.save();ctx.translate(x,y);ctx.fillStyle='rgba(255,255,255,.95)';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-180,-60,360,120,30);ctx.fill();ctx.stroke();
  ctx.save();ctx.beginPath();ctx.arc(-120,0,44,0,7);ctx.clip();ctx.fillStyle='#ffe0ea';ctx.fillRect(-170,-50,100,100);celiaFace(-120,22,.09,{headOnly:true,smile:6});ctx.restore();
  ctx.fillStyle='#16161c';ctx.font='900 32px Inter';ctx.textAlign='left';ctx.fillText('DENTRO:',-66,-8);ctx.fillStyle='#c8356a';ctx.fillText('A MÃE DELE',-66,30);ctx.restore()}
// placar de todas as redes (igual ao EP. 10): comentários subindo, contador passa de +9999 → VENCEU B (sem números reais)
function s7Placar(u,win){ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(90,140,255,A)',.25);
  txtC('PLACAR DO EP. 6',W/2,300,'900 86px Inter','#fff',16);txtC('somando todas as redes',W/2,390,'700 46px Inter','#bcd',0);
  const NET=[['TikTok','#111','#25f4ee'],['Instagram','#c13584','#fff'],['YouTube','#e62117','#fff']];const TX=['B','bbbb','B 🥖','BBBB','b!!','é a B','B','B 👀','Bbbb','a','B','B B B'];
  ctx.save();ctx.beginPath();ctx.rect(0,460,W,860);ctx.clip();
  const n=Math.floor(u*6);for(let i=0;i<n;i++){const r=rng(i+3204);const age=u-i/6;const y=1300-age*560;if(y<420)continue;const side=i%2===0;const nt=NET[i%3];const txt=TX[Math.floor(r()*TX.length)];
    ctx.save();ctx.globalAlpha=Math.min(1,age*4);ctx.translate(side?70:590,y);ctx.fillStyle='rgba(255,255,255,.95)';rr(0,-46,420,92,30);ctx.fill();
    ctx.fillStyle=nt[1];ctx.beginPath();ctx.arc(46,0,30,0,7);ctx.fill();ctx.fillStyle=nt[2];ctx.font='900 28px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nt[0][0],46,2);
    ctx.textAlign='left';ctx.fillStyle='#777';ctx.font='700 24px Inter';ctx.fillText(nt[0],90,-16);ctx.fillStyle=txt.toUpperCase().startsWith('B')?'#2f55c8':'#1a8a4a';ctx.font='900 40px Inter';ctx.fillText(txt,90,22);ctx.restore()}
  ctx.restore();
  const c=Math.floor(Math.pow(clamp(u/2.9),2.2)*9999);const k=easeBack(seg(u,.1,.4));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-470,-90,940,180,36);ctx.fill();txtC(c>=9999?'+9999 COMENTÁRIOS':'💬 '+c.toLocaleString('pt-BR')+' comentários',0,0,'900 66px Oswald','#16161c');ctx.restore();
  if(win){const k2=easeBack(clamp(win));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(k2,k2);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(-W,-H,W*2,H*2);ctx.fillStyle='rgba(60,90,200,.97)';rr(-470,-150,940,300,46);ctx.fill();
    txtC('VENCEU B',0,-50,'900 110px Inter','#fff');txtC('LIVE PRO ZÉ 🥖',0,60,'900 60px Inter','#fff');ctx.restore()}}
// tela da live na padaria (dentro do celular): o Zé atrás do balcão, AO VIVO, a Bia no cantinho. o:{smile, view, hearts}
function s7Live(u,o){o=o||{};ctx.save();ctx.translate(-540,-560);ctx.save();ctx.translate(540,0);ctx.scale(.52,.58);ctx.translate(-540,0);s4Bakery(u,{pan:0});zeFront(540,1360,1.7,{smile:o.smile??14,look:0});s4Counter(1300,0);ctx.restore();ctx.restore();
  ctx.fillStyle='#ff2a4a';rr(-250,-520,170,56,12);ctx.fill();txtC('AO VIVO',-165,-491,'900 30px Inter','#fff',0);txtC('👁 '+(o.view||(1200+Math.floor(u*500))),120,-491,'800 32px Inter','#fff',6);
  // a Bia (o Matheus dentro) no cantinho da live
  ctx.save();ctx.beginPath();rr(110,-440,150,190,24);ctx.clip();ctx.fillStyle='#ffd6e8';ctx.fillRect(110,-440,150,190);biaFace(185,-330,.2,{headOnly:true,smile:o.biaSmile??8,open:o.biaOpen??1,brow:o.biaBrow||0,mouthO:o.biaMouth||0});ctx.restore();ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.beginPath();rr(110,-440,150,190,24);ctx.stroke();
  if(o.hearts!==false)for(let i=0;i<6;i++){const ph=(u*.7+i/6)%1;ctx.save();ctx.globalAlpha=1-ph;txtC('❤️',200,420-ph*400,'900 50px Inter','#fff');ctx.restore()}}
// cozinha da mãe (manhã de domingo, chuva fina na janela): o:{rain:true}
function s7Kitchen(u,o){o=o||{};ctx.fillStyle=lg(0,H,['#fff3dc','#f6e2c0','#e8cfa4']);ctx.fillRect(0,0,W,H);
  // azulejos
  ctx.strokeStyle='rgba(160,120,80,.18)';ctx.lineWidth=3;for(let y=860;y<1250;y+=70){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}for(let x=0;x<W;x+=70){ctx.beginPath();ctx.moveTo(x,860);ctx.lineTo(x,1250);ctx.stroke()}
  // janela com chuva fina
  ctx.save();ctx.beginPath();rr(330,330,400,440,14);ctx.clip();ctx.fillStyle=lg(330,770,['#9fb4c8','#c3d0dc','#d9e0e6']);ctx.fillRect(330,330,400,440);semBlur(()=>buildings(78,770,60,240,'#8f9fb2','#e8eef2',.08,0,1));
  ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=3;for(let i=0;i<26;i++){const r=rng(i+3270);const x=330+r()*440,y=((r()*440+u*900)%480)+300;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-12,y+40);ctx.stroke()}
  ctx.fillStyle='rgba(255,255,255,.6)';for(let i=0;i<12;i++){const r=rng(i+3290);const x=345+r()*370,y=350+((r()*400+u*(20+r()*30))%410);ctx.beginPath();ctx.ellipse(x,y,5,8,0,0,7);ctx.fill()}
  if(o.cat)o.cat();ctx.restore();
  ctx.strokeStyle='#fffdf6';ctx.lineWidth=18;ctx.beginPath();rr(330,330,400,440,14);ctx.stroke();ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(530,330);ctx.lineTo(530,770);ctx.stroke();
  ctx.fillStyle='#e8c0d0';ctx.fillRect(290,300,40,500);ctx.fillRect(730,300,40,500);ctx.fillStyle='#fffdf6';ctx.fillRect(300,770,460,30);ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.strokeRect(300,770,460,30);
  // relógio da cozinha parado em 00:00 (pista escondida)
  clockFace(150,420,64,0,0);
  // geladeira com a foto
  ctx.fillStyle='#f4f6f8';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(800,360,250,980,24);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(800,700);ctx.lineTo(1050,700);ctx.stroke();
  ctx.fillStyle='#b8c0c8';rr(820,560,18,110,9);ctx.fill();rr(820,740,18,160,9);ctx.fill();
  s7Photo(935,520,150,.06,1);
  // fogão e forno à esquerda
  ctx.fillStyle='#d9dde2';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(40,1000,300,340,16);ctx.fill();ctx.stroke();ctx.fillStyle='#2a2e36';rr(70,1110,240,170,12);ctx.fill();ctx.fillStyle='rgba(255,170,80,.45)';rr(80,1120,220,150,10);ctx.fill();
  for(let i=0;i<3;i++){ctx.fillStyle='#16161c';ctx.beginPath();ctx.arc(100+i*90,1050,14,0,7);ctx.fill()}
  // bancada
  ctx.fillStyle='#c98f5e';ctx.fillRect(340,1250,460,90);ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.strokeRect(340,1250,460,90);
  ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(470,1240,46,16,0,0,7);ctx.fill();ctx.stroke();ctx.fillStyle='#fff';ctx.strokeStyle=OUT;ctx.lineWidth=5;rr(440,1180,60,60,10);ctx.fill();ctx.stroke();s4Steam(470,1170,u,3,26);
  ctx.fillStyle=lg(1340,H,['#b88e66','#9a7450']);ctx.fillRect(0,1340,W,H-1340)}
// foto de infância: Matheus (moletom laranja) e Lucas (verde), 7 anos, abraçados. (x,y)=centro
function s7Photo(x,y,w,rot,k){if(k<=0)return;const h=w*1.18;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.globalAlpha=clamp(k*2);softShadow(8,h*.5+6,w*.5,10,.3);
  ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=Math.max(2,w*.02);ctx.fillRect(-w/2,-h/2,w,h);ctx.strokeRect(-w/2,-h/2,w,h);
  const iw=w*.86,ih=w*.8,ix=-iw/2,iy=-h/2+w*.07;ctx.save();ctx.beginPath();ctx.rect(ix,iy,iw,ih);ctx.clip();ctx.fillStyle=lg(iy,iy+ih,['#9fd0f0','#cfe8f4']);ctx.fillRect(ix,iy,iw,ih);ctx.fillStyle='#7cc46a';ctx.fillRect(ix,iy+ih*.72,iw,ih*.3);
  const sc=w/600;
  withP(P,()=>face(ix+iw*.32,iy+ih*.52,sc*.42,{smile:16,open:.9}));
  withP(COL[0],()=>face(ix+iw*.7,iy+ih*.54,sc*.4,{smile:18,open:.85}));
  ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=Math.max(1.5,w*.012);ctx.strokeRect(ix,iy,iw,ih);
  ctx.fillStyle='#3a3a48';ctx.font=`600 ${Math.round(w*.13)}px Caveat`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('eu e o Lucas · 7 anos',0,h/2-w*.1);
  // ímã
  ctx.fillStyle='#ff5a7a';ctx.strokeStyle=OUT;ctx.lineWidth=Math.max(1.5,w*.012);ctx.beginPath();ctx.arc(0,-h/2+2,w*.06,0,7);ctx.fill();ctx.stroke();ctx.restore()}
// grupo da família (celular grande). o:{msgs:[[nome,txt,cor,k]], buzz, count}
function s7Chat(u,o){o=o||{};ctx.fillStyle=lg(0,H,o.bg||['#fff3dc','#f6e2c0','#e8cfa4']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,700,'rgba(255,240,230,A)',.35);
  const vb=o.buzz?Math.sin(u*80)*6:0;ctx.save();ctx.translate(W/2+vb,H*.48);ctx.rotate(-.03);softShadow(30,580,380,60,.4);
  ctx.fillStyle='#0d0e12';rr(-300,-580,600,1160,80);ctx.fill();ctx.strokeStyle='#5a5e6a';ctx.lineWidth=6;ctx.stroke();
  ctx.save();rr(-280,-560,560,1120,64);ctx.clip();ctx.fillStyle='#efe7d8';ctx.fillRect(-280,-560,560,1120);
  let y=-280-(o.scroll||0);(o.msgs||[]).forEach(([nm,tx,col,k])=>{if(!(k>0))return;const L=tx.split('|');const hh=70+L.length*50;ctx.save();ctx.globalAlpha=clamp(k*3);ctx.translate((1-easeOut(clamp(k)))*-40,0);
    ctx.fillStyle='#fff';rr(-250,y,470,hh,24);ctx.fill();ctx.fillStyle=col;ctx.font='800 28px Inter';ctx.textAlign='left';ctx.fillText(nm,-224,y+38);ctx.fillStyle='#16161c';ctx.font='700 38px Inter';L.forEach((l,i)=>ctx.fillText(l,-224,y+86+i*50));ctx.restore();y+=hh+22});
  ctx.fillStyle='#c8356a';ctx.fillRect(-280,-560,560,240);ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(-190,-420,50,0,7);ctx.fill();txtC('❤️',-190,-416,'900 54px Inter','#000');
  ctx.textAlign='left';ctx.fillStyle='#fff';ctx.font='900 46px Inter';ctx.fillText('FAMÍLIA ❤️',-120,-430);ctx.fillStyle='#ffd6e4';ctx.font='700 28px Inter';ctx.fillText('14 parentes · '+(o.count||'99+')+' novas',-120,-382);
  ctx.restore();ctx.restore()}
const S7M=[['Tia Vera','VIRAM A LIVE DA|FOFOCA DA RUA?? 😱','#c13584'],['Prima Duda','o Matheus ganha|DEZ MIL! 🤑','#2f55c8'],['Vó Lurdes','quem é fofoca? 🤔','#1f8a4a'],['Prima Duda','é verdade, ele falou!','#2f55c8']];
// mensagem do Lucas (cartão)
function s7LucasMsg(k,txt){if(k<=0)return;ctx.save();ctx.globalAlpha=clamp(k*2);ctx.translate(0,(1-easeBack(clamp(k)))*-40);ctx.fillStyle='rgba(250,250,252,.97)';rr(-300,-40,600,380,30);ctx.fill();
  ctx.save();ctx.beginPath();ctx.arc(-230,30,40,0,7);ctx.clip();ctx.fillStyle='#cfeee0';ctx.fillRect(-270,-10,80,80);luFace(-230,52,.1,{headOnly:true,smile:-4});ctx.restore();
  ctx.textAlign='left';ctx.fillStyle='#2c6c5b';ctx.font='800 34px Inter';ctx.fillText('Lucas 💚',-170,42);
  ctx.fillStyle='#16161c';ctx.font='700 44px Inter';txt.split('|').forEach((l,i)=>ctx.fillText(l,-260,140+i*58));ctx.restore()}
// tela de digitar resposta (pra mãe responder ao Lucas). txt aparece letra por letra (p 0..1)
function s7Reply(u,p,txt,col){ctx.fillStyle='#efe7d8';ctx.fillRect(-280,-560,560,1120);ctx.fillStyle='#2c6c5b';ctx.fillRect(-280,-560,560,200);
  ctx.save();ctx.beginPath();ctx.arc(-190,-450,46,0,7);ctx.clip();ctx.fillStyle='#cfeee0';ctx.fillRect(-240,-500,100,100);luFace(-190,-426,.12,{headOnly:true});ctx.restore();
  ctx.textAlign='left';ctx.fillStyle='#fff';ctx.font='900 44px Inter';ctx.fillText('Lucas 💚',-120,-440);
  ctx.fillStyle='#fff';rr(-250,-320,470,240,24);ctx.fill();ctx.fillStyle='#16161c';ctx.font='700 36px Inter';['Dona Célia, cortaram','minha promoção por','causa do Matheus?'].forEach((l,i)=>ctx.fillText(l,-224,-260+i*48));
  const n=Math.floor(clamp(p)*txt.length);const sh=txt.slice(0,n);const L=sh.split('|');ctx.fillStyle=col;rr(-200,-40,450,60+Math.max(1,L.length)*52,24);ctx.fill();ctx.fillStyle='#16161c';ctx.font='800 40px Inter';L.forEach((l,i)=>ctx.fillText(l+(i===L.length-1&&u%0.6<.3?'|':''),-176,20+i*52));
  // teclado
  ctx.fillStyle='#d8d4cc';ctx.fillRect(-280,200,560,360);ctx.fillStyle='#fff';for(let r=0;r<3;r++)for(let c=0;c<9;c++){rr(-262+c*58+(r%2)*20,226+r*86,50,70,10);ctx.fill()}}

// câmera que leva o ponto (px,py) ao centro da tela com zoom z
const CAM2=(px,py,z,fn)=>{ctx.save();ctx.translate(W/2,H/2);ctx.scale(z,z);ctx.translate(-px,-py);fn();ctx.restore()};
// =============================== CENAS ===============================
// 0. GANCHO: o espelho — óculos na cabeça, cara de choque (3200–3203.5)
scene(3200,3203.5,(t)=>{const u=t-3200;const z=lerp(1.18,1.04,easeOut(seg(u,0,.6)))+u*.02,sh=u<.3?Math.sin(u*90)*12:0;
  CAM(W/2+sh,H*.52,z,()=>{ctx.fillStyle=lg(0,H,['#ffe6ee','#f8d0dc','#e9b4c6']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,235,240,A)',.4);
    celiaFace(540,1010,.92,{open:1.4,brow:1,mouthO:.9,pupil:.6});
    for(let i=0;i<14;i++){const r=rng(i+3200);ctx.fillStyle='rgba(255,255,255,.6)';ctx.beginPath();ctx.arc(r()*W,(r()*H+u*80)%H,3+r()*4,0,7);ctx.fill()}});
  ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,110,W,430);
  hookTitle('IMAGINE...|ACORDAR NA|SUA MÃE 😳',seg(u,0,.35),240);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.85*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(3200.05);
// 1. placar → VENCEU B (3204–3209.5)
scene(3204,3209.5,(t)=>{const u=t-3204;s7Placar(u,seg(u,3.2,3.6));letterIn(u)});
// 2. ontem, como Bia, ele fez uma live na padaria (3210–3213.5)
scene(3210,3213.5,(t)=>{const u=t-3210;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(140,170,255,A)',.3);
  CAM(W/2,H*.52,lerp(1.0,1.06,seg(u,0,3.5)),()=>s6Phone(u,{bg:false,rot:0},()=>s7Live(u,{smile:-4})));
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('ONTEM',W/2,300,'800 70px Oswald','#ffd84a',12);ctx.restore();
  if(u>1.0){const k=easeBack(seg(u,1.0,1.3));ctx.save();ctx.translate(W/2,1450);ctx.scale(k,k);ctx.fillStyle='rgba(216,64,127,.95)';rr(-400,-60,800,120,30);ctx.fill();txtC('ELE, NO CORPO DA BIA',0,2,'900 50px Inter','#fff');ctx.restore()}letterIn(u);
});
// 3. "o Zé não mentiu" — o Zé sorrindo na live (3214–3217.5)
scene(3214,3217.5,(t)=>{const u=t-3214;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(140,170,255,A)',.3);
  CAM(W/2,lerp(H*.52,H*.5,seg(u,0,3.5)),lerp(1.06,1.12,easeIO(seg(u,0,3.5))),()=>s6Phone(u,{bg:false,rot:0},()=>s7Live(u,{smile:lerp(-4,16,seg(u,.6,1.2)),biaMouth:u<1.6?.25+.25*Math.abs(Math.sin(u*9)):0})));
  s2bBubble(W/2,380,780,170,seg(u,.3,.6),'O ZÉ NÃO MENTIU! 🥖','#1f8a4a',60);
  letterIn(u);
});
// 4. só que, na live, perguntaram do salário: comentários subindo (3222–3225.5)
scene(3222,3225.5,(t)=>{const u=t-3222;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);
  CAM(W/2,H*.52,1.06,()=>s6Phone(u,{bg:false,rot:0},()=>{s7Live(u,{hearts:false,biaOpen:1.2,biaBrow:.8});
    const C=['O SALÁRIO É VERDADE?','DEZ MIL MESMO? 🤑','QUANTO ELE GANHA?','FALA DO SALÁRIO!','É VERDADE??'];for(let i=0;i<5;i++){const k=seg(u,.2+i*.35,2.6+i*.35);if(k<=0)continue;const y=480-k*620;if(y<-300)continue;ctx.save();ctx.globalAlpha=Math.min(1,k*5);ctx.fillStyle='rgba(0,0,0,.6)';rr(-260,y-34,470,68,20);ctx.fill();ctx.textAlign='left';ctx.fillStyle='#fff';ctx.font='800 32px Inter';ctx.fillText(C[i],-240,y+12);ctx.restore()}}));
  const k=easeBack(seg(u,.4,.7));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);ctx.fillStyle='#ff3a6a';rr(-360,-64,720,128,34);ctx.fill();txtC('E O SALÁRIO?! 💸',0,2,'900 64px Inter','#fff');ctx.restore();
  letterIn(u);
});
// 5. "E ele teve que dizer: é verdade." — a Bia (Matheus dentro) confirma, carimbo (3226–3229.5)
scene(3226,3229.5,(t)=>{const u=t-3226;ctx.fillStyle=lg(0,H,['#d8407f','#ff7ab0','#a8306a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,230,250,A)',.3);
  const nod=u>.5&&u<1.5?Math.sin((u-.5)*12)*14:0;CAM(W/2,H*.52,lerp(1.0,1.06,seg(u,0,3.5)),()=>biaFace(W/2,H*.62+nod,.8,{open:1.1,brow:.6,mouthO:u<1.2?.3:0,sweat:1,smile:-4}));
  if(u>1.3){const k=easeBack(seg(u,1.3,1.55));ctx.save();ctx.translate(W/2,420);ctx.rotate(-.12);ctx.scale(k*1.0,k*1.0);ctx.strokeStyle='#c8352b';ctx.lineWidth=14;rr(-360,-90,720,180,20);ctx.stroke();txtC('É VERDADE 😬',0,4,'900 96px Inter','#c8352b',0);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3227.35);
// 6. mas, por causa de vocês, a fila da padaria voltou! (3218–3221.5)
scene(3218,3221.5,(t)=>{const u=t-3218;CAM(lerp(W/2-40,W/2+40,easeIO(seg(u,0,3.5))),1050,lerp(1.0,1.06,seg(u,0,3.5)),()=>{s4Bakery(u,{pan:0});zeFront(540,1360,1.7,{smile:18,look:0});s4Counter(1300,0);
    // fila de clientes de costas, em frente ao balcão (parados, esperando a vez)
    const V=[[{hood:'#3a8a5a',hoodS:'#2a6a44',hair:'#5a3a22',pants:'#3a3a48',pantsS:'#2a2a36'},200],[{hood:'#e0a030',hoodS:'#b88020',hair:'#c8c8d0',pants:'#5a4636',pantsS:'#46362a',skin:'#d9a27c',skinS:'#b98260'},430],[{hood:'#5a6ac8',hoodS:'#3f4ea0',hair:'#1a1210',pants:'#3a3a48',pantsS:'#2a2a36',skin:'#8d5a3b',skinS:'#6e4429'},660],[{hood:'#c84a6a',hoodS:'#a03a54',hair:'#7a4a2a',pants:'#4a4a5a',pantsS:'#36364a'},890]];
    V.forEach(([pal,x],i)=>{withP(pal,()=>personFront(x,1760,2.2,{back:true}))})});
  if(u>.6){const k=easeBack(seg(u,.6,.9));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#1f8a4a';rr(-380,-70,760,140,36);ctx.fill();txtC('A FILA VOLTOU! 🥖',0,2,'900 72px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 8. domingo, oito da manhã. cheiro de café: ela acorda (3230–3233.5)
scene(3230,3233.5,(t)=>{const u=t-3230;const op=u<.4?0:u<.6?.3:easeOut(seg(u,.7,1.1));
  CAM(lerp(W/2,W/2+40,easeIO(seg(u,0,3.5))),H*.5,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{ctx.fillStyle=lg(0,H,['#fde7d6','#f6d4be','#e6b89c']);ctx.fillRect(0,0,W,H);
    // janela com chuva fina e cortina
    ctx.save();ctx.beginPath();rr(620,260,380,520,14);ctx.clip();ctx.fillStyle=lg(260,780,['#9fb4c8','#c3d0dc']);ctx.fillRect(620,260,380,520);ctx.strokeStyle='rgba(255,255,255,.5)';ctx.lineWidth=3;for(let i=0;i<20;i++){const r=rng(i+3230);const x=620+r()*420,y=((r()*520+u*900)%560)+230;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-12,y+40);ctx.stroke()}ctx.restore();
    ctx.strokeStyle='#fffdf6';ctx.lineWidth=16;ctx.beginPath();rr(620,260,380,520,14);ctx.stroke();ctx.fillStyle='#f2a6b8';ctx.fillRect(580,230,60,600);ctx.fillRect(980,230,60,600);
    // xícara de café no criado-mudo com vapor
    ctx.fillStyle='#a8744a';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillRect(80,900,260,30);ctx.strokeRect(80,900,260,30);ctx.fillStyle='#fff';rr(170,830,80,70,12);ctx.fill();ctx.stroke();s4Steam(210,820,u,3,30);
    ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(90,1180,900,360,90);ctx.fill();ctx.stroke();
    celiaFace(W/2,1250,.72,{headOnly:true,open:op*1.1,lid:op>.3?lerp(.4,0,seg(u,.9,1.4)):0,brow:op>.9?.7:0,tilt:.28,mouthO:op>.9?.4:0});
    ctx.fillStyle='#9ad0b8';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-20,1480,W+40,500,40);ctx.fill();ctx.stroke()});
  if(u>1.3)s2bBubble(W/2,520,620,160,seg(u,1.3,1.6),'CHEIRO DE CAFÉ ☕','#a8744a',-60);
  grade('rgba(255,210,170,.18)','rgba(120,60,40,.12)');letterIn(u);
});
// 9. no espelho: óculos na cabeça, avental florido — ela inteira de frente (3234–3237.5)
scene(3234,3237.5,(t)=>{const u=t-3234;const z=lerp(1.0,1.12,easeOut(seg(u,.3,.7)));const sh=(u>.3&&u<.8)?Math.sin(u*80)*10:0;
  CAM(W/2+sh,H*.5,z,()=>{ctx.fillStyle=lg(0,H,['#ffe6ee','#f8d0dc','#e9b4c6']);ctx.fillRect(0,0,W,H);
    ctx.save();ctx.beginPath();rr(150,260,780,1300,380);ctx.clip();ctx.fillStyle=lg(260,1560,['#cfe2ee','#a9c4d6']);ctx.fillRect(150,260,780,1300);
    celiaFront(540,1430,3.0,{look:0,eye:1.3,brow:1,mouthO:.7});
    ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.moveTo(150,260);ctx.lineTo(480,260);ctx.lineTo(150,900);ctx.closePath();ctx.fill();ctx.restore();
    ctx.strokeStyle='#c98f5e';ctx.lineWidth=28;ctx.beginPath();rr(150,260,780,1300,380);ctx.stroke()});
  if(u>.3&&u<.5){ctx.fillStyle=`rgba(255,255,255,${.6*(1-seg(u,.3,.5))})`;ctx.fillRect(0,0,W,H)}
  if(u>.9){const k=easeBack(seg(u,.9,1.2));ctx.save();ctx.translate(W/2,330);ctx.scale(k,k);txtC('AVENTAL?! 😱',0,0,'900 92px Inter','#ffd84a',18);ctx.restore()}
});
SHAKE.push(3234.32);
// 10. "HOJE ELE É: DONA CÉLIA — A MÃE DELE" — crachá girando (3238–3241.5)
scene(3238,3241.5,(t)=>{const u=t-3238;ctx.fillStyle=lg(0,H,['#5a1238','#a8306a','#3a0a24']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,180,220,A)',.28);
  const sp=lerp(Math.PI*2,0,easeOut(seg(u,0,1.0)));CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{ctx.save();ctx.translate(W/2,H*.52);ctx.scale(Math.cos(sp),1);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-330,-430,660,860,30);ctx.fill();ctx.stroke();
    ctx.fillStyle='#c8356a';ctx.beginPath();rr(-330,-430,660,150,30);ctx.fill();ctx.fillRect(-330,-320,660,40);ctx.fillStyle='#fff';ctx.font='800 50px Oswald';ctx.textAlign='center';ctx.fillText('HOJE ELE É',0,-335);
    ctx.save();ctx.beginPath();rr(-170,-240,340,340,20);ctx.clip();ctx.fillStyle='#ffe0ea';ctx.fillRect(-170,-240,340,340);celiaFace(0,40,.3,{smile:12});ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-240,340,340,20);ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 80px Inter';ctx.fillText('DONA CÉLIA',0,200);ctx.fillStyle='#c8356a';ctx.font='800 50px Inter';ctx.fillText('a mãe do Matheus',0,285);ctx.restore()});
  letterIn(u);
});
// 11. "E repara no relógio. Meia-noite. O oitavo!" — a câmera vai até o relógio da cozinha (3242–3245.5)
scene(3242,3245.5,(t)=>{const u=t-3242;const m=easeIO(seg(u,.2,1.8));CAM2(...((z)=>[Math.min(Math.max(lerp(W/2,190,m),540/z),W-540/z),Math.min(Math.max(lerp(H*.5,520,m),960/z),H-960/z),z])(lerp(1.0,2.4,m)),()=>s7Kitchen(u));
  if(u>1.9){const k=seg(u,1.9,2.2);ctx.fillStyle=`rgba(20,16,40,${.85*k})`;ctx.fillRect(0,0,W,H);
    const L=['QUARTO','DIRETORA','LUCAS','RECEPÇÃO','PADARIA','PORTARIA','BIA','MÃE'];L.forEach((l,i)=>{const kk=easeBack(seg(u,2.0+i*.07,2.25+i*.07));if(kk<=0)return;const x=140+(i%4)*267,y=i<4?800:1120;ctx.save();ctx.translate(x,y);ctx.scale(kk,kk);clockFace(0,0,80,0,0);txtC(l,0,130,'900 30px Inter',i===7?'#ffd84a':'#cbb8ff',0);ctx.restore()});
    const k2=easeBack(seg(u,2.5,2.8));ctx.save();ctx.translate(W/2,440);ctx.scale(k2,k2);txtC('8º RELÓGIO',0,-60,'900 96px Inter','#ffd84a',16);txtC('PARADO! 00:00',0,60,'900 80px Inter','#fff',14);ctx.restore()}
  else{ctx.save();ctx.globalAlpha=seg(u,.1,.5);txtC('REPARA... 👀',W/2,1460,'900 90px Inter','#ffd84a',16);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3244.5);
// 12. na geladeira, uma foto: Matheus e Lucas, crianças — a câmera vai até a foto (3246–3249.5)
scene(3246,3249.5,(t)=>{const u=t-3246;const m=easeIO(seg(u,.1,1.6));CAM2(...((z)=>[Math.min(Math.max(lerp(W/2,935,m),540/z),W-540/z),Math.min(Math.max(lerp(H*.5,560,m),960/z),H-960/z),z])(lerp(1.0,2.6,m)),()=>s7Kitchen(u));
  if(u>1.7){ctx.save();ctx.globalAlpha=seg(u,1.7,2.0);ctx.fillStyle='rgba(0,0,0,.55)';rr(140,1380,800,130,30);ctx.fill();txtC('MATHEUS 🧡  +  LUCAS 💚',W/2,1446,'900 56px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 13. melhores amigos desde os sete anos: a foto grande, de frente (3250–3253.5)
scene(3250,3253.5,(t)=>{const u=t-3250;ctx.fillStyle=lg(0,H,['#ffd9a0','#ffb88a','#f08a7a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,250,220,A)',.4);
  CAM(W/2,H*.5,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>s7Photo(W/2,H*.47,760,-.03,1));
  for(let i=0;i<6;i++){const k=seg(u,.8+i*.25,2.4+i*.25);if(k<=0||k>=1)continue;const r=rng(i+3250);ctx.save();ctx.globalAlpha=1-k;txtC(i%2?'🧡':'💚',140+r()*800,1500-k*700,'900 70px Inter','#fff');ctx.restore()}
  if(u>.6){const k=easeBack(seg(u,.6,.9));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-380,-64,760,128,34);ctx.fill();txtC('DESDE OS 7 ANOS',0,2,'900 68px Inter','#ffd84a');ctx.restore()}
  letterIn(u);
});
// 14. na janela, o gato laranja (com a chuva fina): só ele reconhece o Matheus (3254–3257.5)
scene(3254,3257.5,(t)=>{const u=t-3254;CAM2(...((z)=>[Math.min(Math.max(530,540/z),W-540/z),Math.min(Math.max(640,960/z),H-960/z),z])(lerp(2.0,2.15,easeIO(seg(u,0,3.5)))),()=>s7Kitchen(u,{cat:()=>s2bCatFace(530,640,.42,u,{blink:u<.4||(u>2.6&&u<2.72),meow:u>1.0&&u<1.8?Math.sin(seg(u,1.0,1.8)*Math.PI):0,tilt:Math.sin(u*1.2)*.06})}));
  for(let i=0;i<5;i++){const k=seg(u,1.3+i*.25,2.6+i*.25);if(k<=0||k>=1)continue;const x=i%2?110:970,y=1500-k*500-i*40;ctx.save();ctx.globalAlpha=1-k;txtC('💙',x,y,'900 70px Inter','#fff');ctx.restore()}
  if(u>1.0)s2bBubble(W/2,1420,560,160,seg(u,1.0,1.3),'MIAU! (é você!)','#e8752a',-60);
  letterIn(u);
});
// 15. aí o celular toca: o número do Matheus (3258–3261.5)
scene(3258,3261.5,(t)=>{const u=t-3258;ctx.fillStyle=lg(0,H,['#fff3dc','#f6e2c0','#e8cfa4']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,700,'rgba(255,120,150,A)',.15);
  const vb=Math.sin(u*70)*(u%1<.6?6:0);CAM(W/2+vb,H*.55,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>celiaFace(W/2,H*.64,.8,{open:1.25,brow:.9,mouthO:.35}));
  s2cCall(u,'MATHEUS (FILHO)','chamada recebida',seg(u,.1,.4));
  if(u%1<.6){ctx.save();ctx.translate(W/2,560);const k=1+.06*Math.sin(u*30);ctx.scale(k,k);txtC('TRIIIM! 📞',0,0,'900 110px Inter','#c8352b',18);ctx.restore()}
  letterIn(u);
});
// 16. [telefone] "Filho, sou eu! Tô no seu corpo!" — o rosto do Matheus com a mãe dentro (3262–3265.5)
scene(3262,3265.5,(t)=>{const u=t-3262;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.6,lerp(1.0,1.06,seg(u,0,3.5)),()=>face(W/2,H*.64,.85,{open:1.3,brow:1,mouthO:.4+.3*Math.abs(Math.sin(u*9)),px:Math.sin(u*3)*8}));
  s2cCall(u,'MATHEUS (FILHO)','chamada · 00:0'+Math.min(9,Math.floor(u*2+1)),1);
  s2bBubble(W/2,640,820,200,seg(u,.4,.7),'FILHO, SOU EU!|TÔ NO SEU CORPO! 😱','#c8356a',-80);
  celiaInside(W-210,1460);letterIn(u);
});
// 17. [telefone] "Tem almoço hoje! Não deixa a lasanha queimar!" (3266–3269.5)
scene(3266,3269.5,(t)=>{const u=t-3266;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.62,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>{face(W/2,H*.68,.8,{open:1.15,brow:.8,mouthO:.3+.3*Math.abs(Math.sin(u*8)),px:-14,sweat:1});
    for(let i=0;i<4;i++){const k=seg(u,.4+i*.3,1.8+i*.3);if(k<=0||k>=1)continue;ctx.save();ctx.globalAlpha=1-k;txtC(i%2?'🍝':'🍽️',220+i*220,1250-k*400,'900 90px Inter','#fff');ctx.restore()}});
  s2cCall(u,'MATHEUS (FILHO)','chamada · 00:1'+Math.min(9,Math.floor(u*2)),1);
  s2bBubble(W/2,640,820,200,seg(u,.3,.6),'NÃO DEIXA A|LASANHA QUEIMAR! 🍝','#c8356a',-80);
  celiaInside(W-210,1460);letterIn(u);
});
// 18. ele corre pro forno: a mão de luva tira a lasanha, vapor — salva! (3270–3273.5)
scene(3270,3273.5,(t)=>{const u=t-3270;ctx.fillStyle=lg(0,H,['#fff3dc','#f6e2c0','#e8cfa4']);ctx.fillRect(0,0,W,H);
  const pull=easeOut(seg(u,.5,1.6));CAM(W/2,H*.55,lerp(1.12,1.0,easeOut(seg(u,0,.6))),()=>{
    // forno de frente, porta aberta
    ctx.fillStyle='#d9dde2';ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.beginPath();rr(140,560,800,820,30);ctx.fill();ctx.stroke();ctx.fillStyle='#2a2e36';rr(200,640,680,560,20);ctx.fill();glow(540,920,420,'rgba(255,150,60,A)',.35);
    ctx.fillStyle='#ffb05a';ctx.globalAlpha=.4;rr(220,1120,640,30,10);ctx.fill();ctx.globalAlpha=1;
    // assadeira com lasanha (sai do forno, vem pra frente)
    const ly=lerp(960,1260,pull),ls=lerp(.8,1.15,pull);ctx.save();ctx.translate(540,ly);ctx.scale(ls,ls);
    ctx.fillStyle='#8a8f9a';ctx.strokeStyle=OUT;ctx.lineWidth=8;rr(-300,-60,600,140,20);ctx.fill();ctx.stroke();ctx.fillStyle='#e8a13a';rr(-280,-80,560,70,16);ctx.fill();ctx.stroke();
    ctx.fillStyle='#c8352b';for(let i=0;i<6;i++){ctx.beginPath();ctx.ellipse(-220+i*88,-58,30,12,0,0,7);ctx.fill()}ctx.fillStyle='#ffe9a8';for(let i=0;i<7;i++){ctx.beginPath();ctx.arc(-240+i*80,-70,10,0,7);ctx.fill()}
    // luva (mão direita) segurando a assadeira pela alça
    ctx.fillStyle='#ff8ab0';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.ellipse(330,-10,70,56,.3,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.ellipse(300,-62,26,40,-.4,0,7);ctx.fill();ctx.stroke();
    ctx.fillStyle=CELIA.hood;ctx.beginPath();ctx.moveTo(380,20);ctx.lineTo(560,180);ctx.lineTo(620,90);ctx.lineTo(400,-40);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();
    s4Steam(540,ly-110*ls,u,5,60)});
  if(u>1.6){const k=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#1f8a4a';rr(-330,-70,660,140,36);ctx.fill();txtC('SALVA! 😮‍💨',0,2,'900 80px Inter','#fff');ctx.restore()}
  else{ctx.save();ctx.translate(W/2,320);const k=1+.05*Math.sin(u*30);ctx.scale(k,k);txtC('CORRE! 🏃',0,0,'900 100px Inter','#c8352b',16);ctx.restore()}
  letterIn(u);
});
// 19. mas o grupo da família não para de apitar (3274–3277.5)
scene(3274,3277.5,(t)=>{const u=t-3274;const n=Math.floor(clamp(u/1.4)*99);CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>s7Chat(u,{buzz:u%0.7<.35,count:String(Math.max(1,n))+(n>=99?'+':''),msgs:[]}));
  for(let i=0;i<6;i++){const k=seg(u,.2+i*.35,1.4+i*.35);if(k<=0||k>=1)continue;const r=rng(i+3274);ctx.save();ctx.globalAlpha=1-k;txtC('🔔',150+r()*780,1300-k*500,'900 80px Inter','#fff');ctx.restore()}
  ctx.save();ctx.translate(W/2,1480);const k=1+.05*Math.sin(u*30);ctx.scale(k,k);txtC('PLIM! PLIM! PLIM!',0,0,'900 80px Inter','#c8356a',16);ctx.restore();
  letterIn(u);
});
// 20. todo mundo viu a live da Fofoca da Rua (3278–3281.5)
scene(3278,3281.5,(t)=>{const u=t-3278;CAM(W/2,H*.5,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>s7Chat(u,{count:'99+',msgs:S7M.map((m,i)=>[m[0],m[1],m[2],seg(u,.1+i*.45,.4+i*.45)])}));
  const k=easeBack(seg(u,.3,.6));ctx.save();ctx.translate(W/2,1480);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-360,-60,720,120,30);ctx.fill();txtC('A FAMÍLIA VIU! 😱',0,2,'900 60px Inter','#ff8ab8');ctx.restore();
  letterIn(u);
});
// 21. Tio Juca: então o Matheus paga o churrasco! (3282–3285.5)
scene(3282,3285.5,(t)=>{const u=t-3282;CAM(W/2,lerp(H*.5,H*.56,easeIO(seg(u,0,1.2))),lerp(1.0,1.3,easeIO(seg(u,0,1.2))),()=>s7Chat(u,{count:'99+',scroll:120,msgs:S7M.map(m=>[m[0],m[1],m[2],1]).concat([['Tio Juca 🍖','ENTÃO O MATHEUS|PAGA O CHURRASCO!','#e8752a',seg(u,.2,.5)]])}));
  for(let i=0;i<6;i++){const k=seg(u,.8+i*.2,2.2+i*.2);if(k<=0||k>=1)continue;const r=rng(i+3282);ctx.save();ctx.globalAlpha=1-k;txtC(i%2?'🍖':'😂',i%2?90+r()*60:930+r()*60,1500-k*600,'900 80px Inter','#fff');ctx.restore()}
  if(u>1.2){const k=easeBack(seg(u,1.2,1.5));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#e8752a';rr(-360,-64,720,128,34);ctx.fill();txtC('TIO JUCA! 🍖😂',0,2,'900 66px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 22. e aí chega uma mensagem do Lucas: notificação por cima do grupo (3286–3289.5)
scene(3286,3289.5,(t)=>{const u=t-3286;CAM(W/2,H*.5,lerp(1.0,1.05,seg(u,0,3.5)),()=>{s7Chat(u,{count:'99+',scroll:120,buzz:u>.3&&u<1.2,msgs:S7M.map(m=>[m[0],m[1],m[2],1])});
    const k=easeBack(seg(u,.3,.7));if(k>0){ctx.save();ctx.translate(W/2,H*.48-400+(1-k)*-200);ctx.fillStyle='rgba(250,250,252,.98)';ctx.strokeStyle=OUT;ctx.lineWidth=5;rr(-270,-80,540,160,30);ctx.fill();ctx.stroke();
      ctx.save();ctx.beginPath();ctx.arc(-200,0,46,0,7);ctx.clip();ctx.fillStyle='#cfeee0';ctx.fillRect(-250,-50,100,100);luFace(-200,24,.12,{headOnly:true});ctx.restore();
      ctx.textAlign='left';ctx.fillStyle='#2c6c5b';ctx.font='900 36px Inter';ctx.fillText('Lucas 💚',-136,-12);ctx.fillStyle='#16161c';ctx.font='700 32px Inter';ctx.fillText('nova mensagem',-136,32);ctx.restore()}});
  if(u>.3&&u<1.5){ctx.save();ctx.translate(W/2,1480);const k=1+.06*Math.sin(u*30);ctx.scale(k,k);txtC('BZZZ! 📳',0,0,'900 100px Inter','#2c6c5b',16);ctx.restore()}
  if(u>1.7){const k=easeBack(seg(u,1.7,2.0));ctx.save();ctx.translate(W/2,1480);ctx.scale(k,k);ctx.fillStyle='#2c6c5b';rr(-320,-64,640,128,34);ctx.fill();txtC('É O LUCAS 😳',0,2,'900 68px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 23. [carta] "Dona Célia, cortaram minha promoção por causa do Matheus?" (3290–3293.5)
scene(3290,3293.5,(t)=>{const u=t-3290;ctx.fillStyle=lg(0,H,['#0f2a22','#1f4a3c','#0a1e18']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,190,A)',.22);
  CAM(W/2,H*.46,lerp(1.2,1.32,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.4);s7LucasMsg(seg(u,.1,.4),'Dona Célia, cortaram|minha promoção|por causa do Matheus?');ctx.restore()});
  if(u>1.8){const k=easeBack(seg(u,1.8,2.1));ctx.save();ctx.translate(W/2,1470);ctx.scale(k,k);txtC('E AGORA?! 😳',0,0,'900 110px Inter','#ffd84a',18);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3292.0);
// 25. "E você? Contaria a verdade pro seu amigo?" — a mãe (Matheus dentro) olha pra câmera (3294–3297.5)
scene(3294,3297.5,(t)=>{const u=t-3294;ctx.fillStyle=lg(0,H,['#c8356a','#ff7ab0','#a8306a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,230,250,A)',.3);
  CAM(W/2,H*.52,lerp(1.12,1.0,easeOut(seg(u,0,.8))),()=>celiaFace(W/2,H*.62,.8,{open:1.15,brow:.6,smile:lerp(0,6,seg(u,.6,1)),px:0,py:6}));
  const k=easeBack(seg(u,.3,.7));ctx.save();ctx.translate(W/2,300);ctx.scale(k,k);txtC('E VOCÊ? 👀',0,0,'900 120px Inter','#fff',20);ctx.restore();
  if(u>1.1){ctx.save();ctx.globalAlpha=seg(u,1.1,1.5);txtC('CONTARIA A VERDADE',W/2,430,'900 62px Inter','#ffd84a',14);txtC('PRO SEU AMIGO? 🤔',W/2,510,'900 62px Inter','#ffd84a',14);ctx.restore()}
  letterIn(u);
});
// 26. ele olha de novo a foto dos dois: a mãe de costas, na frente da geladeira (3298–3301.5)
scene(3298,3301.5,(t)=>{const u=t-3298;const m=easeIO(seg(u,0,3.5));CAM2(...((z)=>[Math.min(Math.max(lerp(800,925,m),540/z),W-540/z),Math.min(Math.max(lerp(1000,780,m),960/z),H-960/z),z])(lerp(1.3,1.7,m)),()=>{s7Kitchen(u);celiaFront(925,1560,2.6,{back:true})});
  if(u>1.4){ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);ctx.fillStyle='rgba(0,0,0,.55)';rr(160,330,760,120,30);ctx.fill();txtC('7 ANOS DE AMIZADE... 💚🧡',W/2,392,'900 52px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 27. A?: responder "não foi ele, querido" (3302–3305.5)
scene(3302,3305.5,(t)=>{const u=t-3302;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(120,255,170,A)',.3);
  CAM(W/2,H*.52,lerp(1.0,1.06,seg(u,0,3.5)),()=>s6Phone(u,{bg:false,rot:0},()=>s7Reply(u,seg(u,.5,2.2),'Não foi ele,|querido ❤️','#d4f5c0')));
  txtC('A?',W/2,300,'900 110px Inter','#7dffa8',20);
  if(u>1.0){ctx.save();ctx.globalAlpha=seg(u,1.0,1.4);ctx.fillStyle='rgba(0,0,0,.6)';rr(90,1400,900,120,30);ctx.fill();txtC('"NÃO FOI ELE" 🤫',W/2,1462,'900 62px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 28. o Lucas fica tranquilo, a amizade em paz (3306–3309.5)
scene(3306,3309.5,(t)=>{const u=t-3306;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.3);
  CAM(W/2,H*.55,lerp(1.0,1.06,seg(u,0,3.5)),()=>luFace(W/2,H*.62,.78,{smile:lerp(0,16,seg(u,.3,.9)),open:lerp(1,.8,seg(u,.3,.9))}));
  for(let i=0;i<5;i++){const k=seg(u,.8+i*.3,2.2+i*.3);if(k<=0||k>=1)continue;ctx.save();ctx.globalAlpha=1-k;txtC('💚',180+i*180,1300-k*500,'900 70px Inter','#fff');ctx.restore()}
  if(u>1.3){const k=easeBack(seg(u,1.3,1.6));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#fff';rr(-360,-64,720,128,34);ctx.fill();txtC('AMIZADE EM PAZ 🕊️',0,2,'900 62px Inter','#1f8a4a');ctx.restore()}
  letterIn(u);
});
// 29. mas a mentira muda de lugar: agora é a mãe que mente — a etiqueta MENTIRA pula do Matheus pra mãe (3310–3313.5)
scene(3310,3313.5,(t)=>{const u=t-3310;ctx.fillStyle=lg(0,H,['#5a1f1a','#8a2e24','#3a1410']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,900,'rgba(255,170,120,A)',.25);
  CAM(W/2,H*.55,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{
    const circ=(x,fn,col)=>{ctx.save();ctx.beginPath();ctx.arc(x,1000,170,0,7);ctx.fillStyle=col;ctx.fill();ctx.clip();fn();ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.arc(x,1000,170,0,7);ctx.stroke()};
    circ(260,()=>face(260,1080,.36,{smile:4}),'#cfe0f0');circ(820,()=>celiaFace(820,1080,.36,{smile:-6,brow:.5}),'#ffe0ea');
    txtC('MATHEUS',260,1220,'900 44px Inter','#fff',10);txtC('A MÃE',820,1220,'900 44px Inter','#fff',10);
    const p=easeIO(seg(u,.6,1.8));const x=lerp(260,820,p),y=790-Math.sin(p*Math.PI)*260;ctx.save();ctx.translate(x,y);ctx.rotate(-.08);ctx.fillStyle='#c8352b';ctx.strokeStyle=OUT;ctx.lineWidth=6;rr(-150,-46,300,92,18);ctx.fill();ctx.stroke();txtC('MENTIRA',0,2,'900 46px Inter','#fff');ctx.restore()});
  txtC('A MENTIRA MUDA DE LUGAR...',W/2,300,'900 64px Inter','#fff',16);
  if(u>1.8){const k=easeBack(seg(u,1.8,2.1));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);txtC('...AGORA É A MÃE 😟',0,0,'900 76px Inter','#ffd84a',16);ctx.restore()}
  letterIn(u);
});
// 30. B?: contar "foi sim. ele mesmo vai te explicar" (3314–3317.5)
scene(3314,3317.5,(t)=>{const u=t-3314;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(140,170,255,A)',.3);
  CAM(W/2,H*.52,lerp(1.0,1.06,seg(u,0,3.5)),()=>s6Phone(u,{bg:false,rot:0},()=>s7Reply(u,seg(u,.4,2.4),'Foi sim. Ele mesmo|vai te explicar.','#cfe0ff')));
  txtC('B?',W/2,300,'900 110px Inter','#ffd84a',20);
  if(u>1.0){ctx.save();ctx.globalAlpha=seg(u,1.0,1.4);ctx.fillStyle='rgba(0,0,0,.6)';rr(90,1400,900,120,30);ctx.fill();txtC('CONTAR A VERDADE 💬',W/2,1462,'900 62px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 31. o Lucas vai saber de tudo. e pode ficar bravo (3318–3321.5)
scene(3318,3321.5,(t)=>{const u=t-3318;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);
  const sh=u>1.2&&u<1.5?Math.sin(u*80)*8:0;CAM(W/2+sh,H*.55,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>luFace(W/2,H*.64,.78,{open:lerp(1,1.3,seg(u,.2,.6)),brow:lerp(0,-.6,seg(u,1.0,1.4)),mouthO:u>.3&&u<1.0?.5:0,smile:u>1.0?-14:0}));
  s2bBubble(W/2,620,560,170,seg(u,.3,.6),'O QUÊ?! 😳','#2c6c5b',-60);
  if(u>1.4){const k=easeBack(seg(u,1.4,1.7));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);ctx.fillStyle='#c8352b';rr(-360,-64,720,128,34);ctx.fill();txtC('PODE FICAR BRAVO 😠',0,2,'900 60px Inter','#fff');ctx.restore()}
  letterIn(u);
});
SHAKE.push(3319.2);
// 32. "A verdade dói uma vez. A mentira pesa todo dia." — duas mochilas: a da verdade leva UMA pedra; a da mentira ganha uma pedra por dia (3322–3325.5)
scene(3322,3325.5,(t)=>{const u=t-3322;ctx.fillStyle=lg(0,H,['#2a1a40','#5a3a6a','#ffb88a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,900,'rgba(255,230,180,A)',.45);beams(W/2,200,1.57,5,1500,.07);
  CAM(W/2,H*.55,lerp(1.0,1.05,easeIO(seg(u,0,3.5))),()=>{
    const pan=(x,y,col,lab)=>{ctx.fillStyle=col;ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.ellipse(x,y,190,40,0,0,7);ctx.fill();ctx.stroke();txtC(lab,x,y+110,'900 50px Inter','#fff',10)};
    // balança: o lado da mentira vai descendo a cada pedra
    const nd=Math.floor(clamp(seg(u,.8,2.6))*6);const tilt=-.02+nd*.03;
    ctx.strokeStyle=OUT;ctx.lineWidth=14;ctx.beginPath();ctx.moveTo(W/2,1380);ctx.lineTo(W/2,700);ctx.stroke();ctx.fillStyle='#e8c070';ctx.beginPath();ctx.arc(W/2,690,26,0,7);ctx.fill();ctx.stroke();
    ctx.save();ctx.translate(W/2,700);ctx.rotate(tilt);ctx.lineWidth=12;ctx.beginPath();ctx.moveTo(-320,0);ctx.lineTo(320,0);ctx.stroke();ctx.restore();
    const ly=700-Math.sin(tilt)*320+200,ry=700+Math.sin(tilt)*320+200;const lx=W/2-320*Math.cos(tilt),rx=W/2+320*Math.cos(tilt);
    ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(lx,ly-200);ctx.lineTo(lx-150,ly);ctx.moveTo(lx,ly-200);ctx.lineTo(lx+150,ly);ctx.moveTo(rx,ry-200);ctx.lineTo(rx-150,ry);ctx.moveTo(rx,ry-200);ctx.lineTo(rx+150,ry);ctx.stroke();
    pan(lx,ly,'#7dbcff','VERDADE');pan(rx,ry,'#ff8a7a','MENTIRA');
    // uma pedra só na verdade
    const k1=easeOut(seg(u,.2,.6));ctx.fillStyle='#9a9aa6';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();ctx.ellipse(lx,lerp(ly-400,ly-34,k1),48,32,0,0,7);ctx.fill();ctx.stroke();
    // uma pedra por dia na mentira
    const D=['SEG','TER','QUA','QUI','SEX','SÁB'];for(let i=0;i<nd;i++){const px=rx-100+(i%3)*100,py=ry-34-Math.floor(i/3)*56;ctx.fillStyle='#6a6a76';ctx.beginPath();ctx.ellipse(px,py,46,28,0,0,7);ctx.fill();ctx.stroke();txtC(D[i],px,py+2,'900 24px Inter','#fff',0)}});
  txtC('A VERDADE DÓI UMA VEZ...',W/2,300,'900 64px Inter','#fff',16);
  if(u>1.6){const k=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(W/2,1480);ctx.scale(k,k);txtC('...A MENTIRA PESA TODO DIA',0,0,'900 60px Inter','#ffd84a',14);ctx.restore()}
  letterIn(u);
});
// 33/34. ESCOLHA: A (verde) x B — sobre o rosto da mãe (3326–3333)
scene(3326,3333,(t)=>{const u=t-3326;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  celiaFace(W/2,H*.72,.75,{open:1,brow:.5,px:-20,py:10});ctx.fillStyle='rgba(10,8,14,.68)';ctx.fillRect(0,0,W,H);
  txtC('O QUE ELE RESPONDE?',W/2,320,'900 80px Inter','#fff',18);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));ctx.textAlign='left';
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,140,80,.95)';rr(70,430,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('A',120,590);ctx.font='800 50px Inter';ctx.fillText('dizer que',250,530);ctx.fillText('NÃO FOI ELE 🤫',250,595);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(60,90,200,.95)';rr(70,690,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('B',120,850);ctx.font='800 50px Inter';ctx.fillText('contar a',250,790);ctx.fillText('VERDADE 💬',250,855);ctx.restore();
  if(u>1.4){const k=.5+.5*Math.sin(u*5);ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('COMENTA A OU B 👇',W/2,1080,'900 74px Inter',`rgb(255,${200+55*k},74)`,16);ctx.restore()}
});
// FINAL: cartela da série (3390–3393.2)
scene(3390,3393.2,(t)=>{const u=t-3390;ctx.fillStyle='#07070c';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,50,W/2,H*.42,900);g.addColorStop(0,'rgba(255,120,180,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.36);ctx.scale(k,k);ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='900 92px Inter';ctx.fillText('E SE VOCÊ',0,0);ctx.fillText('ACORDASSE NA',0,110);ctx.fillStyle='#ffd84a';ctx.font='900 128px Inter';ctx.fillText('VIDA DE OUTRA',0,250);ctx.fillText('PESSOA?',0,390);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 8 · AMANHÃ 18H',W/2,H*.36+560);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.36+660);ctx.restore()});
