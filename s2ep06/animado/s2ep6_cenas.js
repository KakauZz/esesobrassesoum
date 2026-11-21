// ===================== SÉRIE 2 · EP. 6 — NO CORPO DA FOFOQUEIRA =====================
// Faixa 3000–3199 (cartão final 3190–3193.2). Consequência do voto A do EP. 5 (no corpo da síndica, ele disse no grupo que era mentira do Zé):
// a cobrança do portão sumiu e ninguém mais falou do salário, mas o seu Zé virou "o mentiroso da rua" e a padaria ficou vazia.
// Hoje (sábado) o Matheus acorda no corpo da Bia, do apto 104: foi ela quem espalhou a fofoca no grupo. Ela tem o perfil "Fofoca da Rua" (20 mil).
// Elementos novos (máx. 2): a Bia + o perfil dela. Pista retomada: o número desconhecido do dia 1 agora assina "M." (o Matheus do futuro — não revelar).
// Pista escondida: o relógio do quarto da Bia parado em 00:00 (7º relógio). Ambiente (não falado): o gato na janela e pombos voando na rua.

const BIA={skin:'#b97a52',skinS:'#98603c',hair:'#1e1410',hairL:'#3a2a22',hood:'#ff5fa2',hoodS:'#d8407f',hoodL:'#ff9cc6',pants:'#3f5f9a',pantsS:'#304a7a'};
// cabelo cacheado volumoso, argolas douradas e cílios (coordenadas do face())
function biaTop(o){o=o||{};ctx.lineJoin='round';
  const curl=(x,y,r)=>{ctx.fillStyle=BIA.hair;ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill();ctx.stroke();ctx.strokeStyle=BIA.hairL;ctx.lineWidth=7;ctx.beginPath();ctx.arc(x-r*.15,y-r*.15,r*.55,3.6,5.4);ctx.stroke()};
  const C=[];for(let i=0;i<=10;i++){const a=Math.PI*(1.06+i*.088);C.push([Math.cos(a)*300,-90+Math.sin(a)*300,92])}
  C.push([-330,60,78],[330,60,78],[-345,150,62],[345,150,62]);
  for(const [x,y,r] of C)curl(x,y,r);
  // cílios
  if(!o.noLash){ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.lineCap='round';for(const sx of[-1,1]){for(let k=0;k<3;k++){const ax=sx*(95+k*30),ay=-52+Math.abs(k-1)*6;ctx.beginPath();ctx.moveTo(ax,ay);ctx.lineTo(ax+sx*(10+k*6),ay-30);ctx.stroke()}}}
  // argolas douradas
  ctx.strokeStyle='#e8b830';ctx.lineWidth=14;for(const sx of[-1,1]){ctx.beginPath();ctx.arc(sx*300,210,46,0,7);ctx.stroke()}
  ctx.strokeStyle='rgba(255,240,170,.8)';ctx.lineWidth=5;for(const sx of[-1,1]){ctx.beginPath();ctx.arc(sx*300,210,46,3.6,4.6);ctx.stroke()}}
function biaFace(cx,cy,s,o){o=o||{};withP(BIA,()=>face(cx,cy,s,o));ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);biaTop(o);ctx.restore()}
function biaFront(x,y,s,pose){pose=pose||{};withP(BIA,()=>personFront(x,y,s,pose));const p=pose.walk;const bob=p!=null?-5*Math.abs(Math.cos(p)):0;
  ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.translate((pose.look||0)*8,-196+bob);ctx.scale(.16,.16);biaTop(pose.back?{noLash:true}:pose);ctx.restore()}
// selo "DENTRO: BIA" (a Bia está no corpo do Matheus)
function biaInside(x,y){ctx.save();ctx.translate(x,y);ctx.fillStyle='rgba(255,255,255,.95)';ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-60,340,120,30);ctx.fill();ctx.stroke();
  ctx.save();ctx.beginPath();ctx.arc(-110,0,44,0,7);ctx.clip();ctx.fillStyle='#ffd6e8';ctx.fillRect(-160,-50,100,100);biaFace(-110,22,.09,{headOnly:true,smile:6});ctx.restore();
  ctx.fillStyle='#16161c';ctx.font='900 32px Inter';ctx.textAlign='left';ctx.fillText('DENTRO:',-56,-8);ctx.fillStyle='#d8407f';ctx.fillText('BIA (104)',-56,30);ctx.restore()}
// placar de todas as redes (igual ao EP. 10): comentários subindo, contador passa de +9999 → VENCEU A (sem números reais)
function s6Placar(u,win){ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(90,140,255,A)',.25);
  txtC('PLACAR DO EP. 5',W/2,300,'900 86px Inter','#fff',16);txtC('somando todas as redes',W/2,390,'700 46px Inter','#bcd',0);
  const NET=[['TikTok','#111','#25f4ee'],['Instagram','#c13584','#fff'],['YouTube','#e62117','#fff']];const TX=['A','aaaa','A 🤫','AAAA','a!!','é a A','A','A 👀','Aaaa','b','A','A A A'];
  ctx.save();ctx.beginPath();ctx.rect(0,460,W,860);ctx.clip();
  const n=Math.floor(u*6);for(let i=0;i<n;i++){const r=rng(i+3004);const age=u-i/6;const y=1300-age*560;if(y<420)continue;const side=i%2===0;const nt=NET[i%3];const txt=TX[Math.floor(r()*TX.length)];
    ctx.save();ctx.globalAlpha=Math.min(1,age*4);ctx.translate(side?70:590,y);ctx.fillStyle='rgba(255,255,255,.95)';rr(0,-46,420,92,30);ctx.fill();
    ctx.fillStyle=nt[1];ctx.beginPath();ctx.arc(46,0,30,0,7);ctx.fill();ctx.fillStyle=nt[2];ctx.font='900 28px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nt[0][0],46,2);
    ctx.textAlign='left';ctx.fillStyle='#777';ctx.font='700 24px Inter';ctx.fillText(nt[0],90,-16);ctx.fillStyle=txt.toUpperCase().startsWith('B')?'#c33':'#1a8a4a';ctx.font='900 40px Inter';ctx.fillText(txt,90,22);ctx.restore()}
  ctx.restore();
  const c=Math.floor(Math.pow(clamp(u/2.9),2.2)*9999);const k=easeBack(seg(u,.1,.4));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-470,-90,940,180,36);ctx.fill();txtC(c>=9999?'+9999 COMENTÁRIOS':'💬 '+c.toLocaleString('pt-BR')+' comentários',0,0,'900 66px Oswald','#16161c');ctx.restore();
  if(win){const k2=easeBack(clamp(win));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(k2,k2);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(-W,-H,W*2,H*2);ctx.fillStyle='rgba(30,150,80,.97)';rr(-470,-150,940,300,46);ctx.fill();
    txtC('VENCEU A',0,-50,'900 110px Inter','#fff');txtC('ERA MENTIRA DO ZÉ 🤫',0,60,'900 60px Inter','#fff');ctx.restore()}}
// quarto da Bia (manhã): parede rosa clara, janela, relógio parado em 00:00 (pista escondida), ring light
function s6Room(u,o){o=o||{};ctx.fillStyle=lg(0,H,['#fbe0ec','#f3cde0','#e2b2cc']);ctx.fillRect(0,0,W,H);
  ctx.fillStyle='rgba(255,255,255,.35)';for(let y=80;y<1250;y+=160)for(let x=(y/160%2)*80;x<W;x+=160){ctx.beginPath();ctx.arc(x,y,10,0,7);ctx.fill()}
  ctx.save();ctx.beginPath();rr(600,300,420,560,14);ctx.clip();ctx.fillStyle=lg(300,860,['#ffd9a0','#ffeccc','#cfe6f5']);ctx.fillRect(600,300,420,560);semBlur(()=>buildings(76,860,90,260,'#b9c6d8','#fff6dc',.1,0,1));ctx.restore();
  ctx.strokeStyle='#fffdf6';ctx.lineWidth=18;ctx.beginPath();rr(600,300,420,560,14);ctx.stroke();ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(810,300);ctx.lineTo(810,860);ctx.moveTo(600,580);ctx.lineTo(1020,580);ctx.stroke();
  ctx.fillStyle='#ff8ab8';ctx.fillRect(550,270,60,620);ctx.fillRect(1010,270,60,620);
  clockFace(150,400,64,0,0);
  // ring light no tripé
  ctx.strokeStyle='#2a2e36';ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(330,1250);ctx.lineTo(330,760);ctx.stroke();
  ctx.strokeStyle='#fffbe8';ctx.lineWidth=26;ctx.beginPath();ctx.arc(330,640,110,0,7);ctx.stroke();ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.beginPath();ctx.arc(330,640,124,0,7);ctx.stroke();ctx.beginPath();ctx.arc(330,640,96,0,7);ctx.stroke();
  glow(330,640,200,'rgba(255,250,220,A)',.25);
  ctx.fillStyle=lg(1250,H,['#c99ab4','#a77a94']);ctx.fillRect(0,1250,W,H-1250)}
// celular grande no centro; fn desenha a tela (coordenadas -280..280 × -560..560)
function s6Phone(u,o,fn){o=o||{};if(o.bg!==false){ctx.fillStyle=lg(0,H,o.bg||['#fbe0ec','#f3cde0','#e2b2cc']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,700,'rgba(255,240,230,A)',.35)}
  const vb=o.buzz?Math.sin(u*80)*6:0;ctx.save();ctx.translate(W/2+vb,H*.5);ctx.rotate(o.rot??-.03);softShadow(30,580,380,60,.4);
  ctx.fillStyle='#0d0e12';rr(-300,-580,600,1160,80);ctx.fill();ctx.strokeStyle='#5a5e6a';ctx.lineWidth=6;ctx.stroke();
  ctx.save();rr(-280,-560,560,1120,64);ctx.clip();fn();ctx.restore();
  ctx.fillStyle='#0d0e12';rr(-80,-540,160,38,19);ctx.fill();ctx.restore()}
// perfil "Fofoca da Rua" na tela do celular. o:{fol (número), hl}
function s6Profile(u,o){o=o||{};ctx.fillStyle='#fff';ctx.fillRect(-280,-560,560,1120);
  ctx.fillStyle=lg(-560,-300,['#ff5fa2','#ffb36b']);ctx.fillRect(-280,-560,560,250);
  ctx.save();ctx.beginPath();ctx.arc(0,-310,100,0,7);ctx.fillStyle='#fff';ctx.fill();ctx.beginPath();ctx.arc(0,-310,88,0,7);ctx.clip();ctx.fillStyle='#ffd6e8';ctx.fillRect(-100,-410,200,200);biaFace(0,-280,.19,{headOnly:true,smile:10});ctx.restore();
  txtC('@fofocadarua',0,-170,'900 44px Inter','#16161c',0);txtC('Fofoca da Rua 👀☕',0,-118,'700 32px Inter','#777',0);
  const f=o.fol??20000;const fs=f>=1000?(Math.floor(f/100)/10).toLocaleString('pt-BR')+' mil':String(f);
  txtC(fs,-150,-40,'900 48px Inter','#16161c',0);txtC('seguidores',-150,4,'700 26px Inter','#777',0);txtC('312',30,-40,'900 48px Inter','#16161c',0);txtC('posts',30,4,'700 26px Inter','#777',0);txtC('🔥',190,-40,'900 48px Inter','#16161c',0);txtC('viral',190,4,'700 26px Inter','#777',0);
  if(o.hl>0){ctx.save();ctx.globalAlpha=clamp(o.hl*3);ctx.strokeStyle='#ff3a6a';ctx.lineWidth=10;ctx.beginPath();ctx.ellipse(-150,-20,135,70,0,0,7*clamp(o.hl));ctx.stroke();ctx.restore()}
  const T=['DEZ MIL?! 😱','O PORTÃO','VOCÊ SOUBE?','QUE RICO 🤑','ZÉ CONTOU','👀👀'];const CL=['#ff8ab8','#8fc0ff','#ffd84a','#7dffa8','#ffb36b','#c9a0ff'];
  for(let i=0;i<6;i++){const x=-270+(i%3)*182,y=60+Math.floor(i/3)*240;ctx.fillStyle=CL[i];ctx.fillRect(x,y,176,232);txtC(T[i],x+88,y+116,'900 26px Inter','#16161c',0);txtC('▶ '+(12+i*7)+' mil',x+88,y+200,'800 22px Inter','#16161c',0)}}
// mensagem do número desconhecido (cartão)
function s6Msg(k,txt,sub){if(k<=0)return;ctx.save();ctx.globalAlpha=clamp(k*2);ctx.translate(0,(1-easeBack(clamp(k)))*-40);ctx.fillStyle='rgba(250,250,252,.97)';rr(-260,-40,520,320,30);ctx.fill();
  ctx.fillStyle='#7a5cff';ctx.beginPath();ctx.arc(-200,30,34,0,7);ctx.fill();txtC('?',-200,32,'900 40px Inter','#fff',0);
  ctx.textAlign='left';ctx.fillStyle='#7a5cff';ctx.font='800 32px Inter';ctx.fillText('Número desconhecido',-150,42);
  ctx.fillStyle='#16161c';ctx.font='700 44px Inter';const L=txt.split('|');L.forEach((l,i)=>ctx.fillText(l,-220,130+i*58));if(sub){ctx.fillStyle='#7a5cff';ctx.font='900 50px Caveat';ctx.fillText(sub,-220,130+L.length*58+10)}ctx.restore()}
// padaria vista de fora (fachada, de frente), manhã
function s6Facade(u,o){o=o||{};sky('#8fbbe6','#d6e8f4','#f6e2c4');sun(900,200,55,'#fff6dc','rgba(255,220,150,.6)');
  ctx.fillStyle='#e9d2a8';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.fillRect(60,330,960,950);ctx.strokeRect(60,330,960,950);
  ctx.fillStyle='#b5651d';rr(140,380,800,150,30);ctx.fill();ctx.stroke();txtC('PADARIA DO ZÉ 🥖',540,456,'900 70px Oswald','#fff6dc',0);
  // toldo listrado
  for(let i=0;i<8;i++){ctx.fillStyle=i%2?'#fff6dc':'#c8352b';ctx.fillRect(60+i*120,560,120,90)}ctx.strokeRect(60,560,960,90);
  // vitrine com pães e o Zé lá dentro (pequeno)
  ctx.save();ctx.beginPath();rr(120,690,560,520,10);ctx.clip();ctx.fillStyle=lg(690,1210,['#f6e7cc','#e9cfa4']);ctx.fillRect(120,690,560,520);
  if(o.ze)zeFront(400,1150,.95,{smile:-8,look:0,brow:.6});
  ctx.fillStyle='#8a5a36';ctx.fillRect(120,1060,560,150);for(let i=0;i<4;i++)s4Pao(190+i*130,1040,.7,(i%2?.1:-.1));
  ctx.fillStyle='rgba(255,255,255,.22)';ctx.beginPath();ctx.moveTo(120,690);ctx.lineTo(330,690);ctx.lineTo(120,1000);ctx.closePath();ctx.fill();ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(120,690,560,520,10);ctx.stroke();
  // porta
  ctx.fillStyle='#7a4a2a';ctx.fillRect(740,720,220,560);ctx.strokeRect(740,720,220,560);ctx.fillStyle='#fffdf6';rr(770,780,160,70,10);ctx.fill();ctx.stroke();txtC('ABERTO',850,816,'900 34px Inter','#1f8a4a',0);
  ctx.fillStyle='#8c8f98';ctx.fillRect(0,1280,W,50);ctx.fillStyle=lg(1330,H,['#a9a49c','#8a857e']);ctx.fillRect(0,1330,W,H-1330)}

// =============================== CENAS ===============================
// 0. GANCHO: o espelho — cachos, argolas, cara de choque (3000–3003.5)
scene(3000,3003.5,(t)=>{const u=t-3000;const z=lerp(1.18,1.04,easeOut(seg(u,0,.6)))+u*.02,sh=u<.3?Math.sin(u*90)*12:0;
  CAM(W/2+sh,H*.52,z,()=>{ctx.fillStyle=lg(0,H,['#fbe0ec','#f3cde0','#e2b2cc']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,230,240,A)',.4);
    biaFace(540,1010,.92,{open:1.4,brow:1,mouthO:.9,pupil:.6});
    for(let i=0;i<14;i++){const r=rng(i+3000);ctx.fillStyle='rgba(255,255,255,.6)';ctx.beginPath();ctx.arc(r()*W,(r()*H+u*80)%H,3+r()*4,0,7);ctx.fill()}});
  ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,110,W,430);
  hookTitle('IMAGINE...|ACORDAR NA|FOFOQUEIRA 😳',seg(u,0,.35),240);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.85*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(3000.05);
// 1. placar → VENCEU A (3004–3009.5)
scene(3004,3009.5,(t)=>{const u=t-3004;s6Placar(u,seg(u,3.2,3.6));letterIn(u)});
// 2. ontem: no corpo da síndica, ele escreveu no grupo "era mentira do Zé" (3010–3013.5)
scene(3010,3013.5,(t)=>{const u=t-3010;CAM(W/2,H*.5,lerp(1.0,1.08,seg(u,0,3.5)),()=>s5Chat(u,{count:'99+',scroll:0,msgs:S5M.slice(3).map(m=>[m[0],m[1],m[2],1]),mine:['Gente, era MENTIRA|do Zé! 🙄 — Rosa',seg(u,.4,.7)]}));
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('ONTEM',W/2,250,'800 64px Oswald','#c8352b',12);ctx.restore();
  if(u>1.0){const k=easeBack(seg(u,1.0,1.3));ctx.save();ctx.translate(W/2,1450);ctx.scale(k,k);ctx.fillStyle='rgba(120,70,150,.95)';rr(-420,-60,840,120,30);ctx.fill();txtC('ELE, NO CORPO DA SÍNDICA',0,2,'900 48px Inter','#fff');ctx.restore()}letterIn(u);
});
// 6. sábado, sete da manhã: ela acorda — cílios, cachos (3014–3017.5)
scene(3014,3017.5,(t)=>{const u=t-3014;const op=u<.4?0:u<.6?.3:easeOut(seg(u,.7,1.1));
  CAM(lerp(W/2,W/2+40,easeIO(seg(u,0,3.5))),H*.5,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{s6Room(u);
    ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(90,1180,900,360,90);ctx.fill();ctx.stroke();
    biaFace(W/2,1250,.72,{headOnly:true,open:op*1.1,lid:op>.3?lerp(.4,0,seg(u,.9,1.4)):0,brow:op>.9?.7:0,tilt:.28,mouthO:op>.9?.4:0});
    ctx.fillStyle='#ff8ab8';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-20,1480,W+40,500,40);ctx.fill();ctx.stroke()});
  if(u>1.3)s2bBubble(W/2,520,640,160,seg(u,1.3,1.6),'CÍLIOS? CACHOS?! 😵','#d8407f',-60);
  grade('rgba(255,210,170,.18)','rgba(120,40,80,.15)');letterIn(u);
});
// 7. no espelho: argolas douradas e moletom rosa — ela inteira de frente (3018–3021.5)
scene(3018,3021.5,(t)=>{const u=t-3018;const z=lerp(1.0,1.12,easeOut(seg(u,.3,.7)));const sh=(u>.3&&u<.8)?Math.sin(u*80)*10:0;
  CAM(W/2+sh,H*.5,z,()=>{ctx.fillStyle=lg(0,H,['#fbe0ec','#f3cde0','#e2b2cc']);ctx.fillRect(0,0,W,H);
    ctx.save();ctx.beginPath();rr(150,260,780,1300,380);ctx.clip();ctx.fillStyle=lg(260,1560,['#cfe2ee','#a9c4d6']);ctx.fillRect(150,260,780,1300);
    biaFront(540,1430,3.0,{look:0,eye:1.3,brow:1,mouthO:.7});
    ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.moveTo(150,260);ctx.lineTo(480,260);ctx.lineTo(150,900);ctx.closePath();ctx.fill();ctx.restore();
    ctx.strokeStyle='#e8b830';ctx.lineWidth=28;ctx.beginPath();rr(150,260,780,1300,380);ctx.stroke()});
  if(u>.3&&u<.5){ctx.fillStyle=`rgba(255,255,255,${.6*(1-seg(u,.3,.5))})`;ctx.fillRect(0,0,W,H)}
  if(u>.9){const k=easeBack(seg(u,.9,1.2));ctx.save();ctx.translate(W/2,320);ctx.scale(k,k);txtC('ARGOLAS?! 😱',0,0,'900 92px Inter','#ffd84a',18);ctx.restore()}
});
SHAKE.push(3018.32);
// 8. "HOJE ELE É: BIA" — crachá girando (3022–3025.5)
scene(3022,3025.5,(t)=>{const u=t-3022;ctx.fillStyle=lg(0,H,['#5a1238','#a8306a','#3a0a24']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,180,220,A)',.28);
  const sp=lerp(Math.PI*2,0,easeOut(seg(u,0,1.0)));CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{ctx.save();ctx.translate(W/2,H*.52);ctx.scale(Math.cos(sp),1);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-330,-430,660,860,30);ctx.fill();ctx.stroke();
    ctx.fillStyle='#d8407f';ctx.beginPath();rr(-330,-430,660,150,30);ctx.fill();ctx.fillRect(-330,-320,660,40);ctx.fillStyle='#fff';ctx.font='800 50px Oswald';ctx.textAlign='center';ctx.fillText('HOJE ELE É',0,-335);
    ctx.save();ctx.beginPath();rr(-170,-240,340,340,20);ctx.clip();ctx.fillStyle='#ffd6e8';ctx.fillRect(-170,-240,340,340);biaFace(0,40,.3,{smile:10});ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-240,340,340,20);ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 92px Inter';ctx.fillText('BIA',0,210);ctx.fillStyle='#d8407f';ctx.font='800 46px Inter';ctx.fillText('apartamento 104',0,290);ctx.restore()});
  letterIn(u);
});
// 9. foi ela quem espalhou a fofoca no grupo: a mensagem dela destacada (3026–3029.5)
scene(3026,3029.5,(t)=>{const u=t-3026;CAM(W/2,H*.5,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>s5Chat(u,{count:'99+',scroll:420,msgs:S5M.map(m=>[m[0],m[1],m[2],1]).concat([['Bia · 104','O MATHEUS DO 302|GANHA DEZ MIL! 🤑','#c13584',1]])}));
  // círculo na mensagem da Bia
  const k=seg(u,.5,1.2);if(k>0){ctx.save();ctx.strokeStyle='#ff3a6a';ctx.lineWidth=14;ctx.beginPath();ctx.ellipse(W/2-60,1095,330,130,-.03,0,7*k);ctx.stroke();ctx.restore()}
  if(u>1.3){const k2=easeBack(seg(u,1.3,1.6));ctx.save();ctx.translate(W/2,300);ctx.scale(k2,k2);ctx.fillStyle='#d8407f';rr(-300,-70,600,140,36);ctx.fill();txtC('FOI ELA! 👀',0,2,'900 76px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 10. "E repara no relógio. Meia-noite. O sétimo!" — a câmera vai até o relógio do quarto (3030–3033.5)
scene(3030,3033.5,(t)=>{const u=t-3030;const m=easeIO(seg(u,.2,1.8));CAM(lerp(W/2,150,m),lerp(H*.5,400,m),lerp(1.0,2.4,m),()=>s6Room(u));
  if(u>1.9){const k=seg(u,1.9,2.2);ctx.fillStyle=`rgba(20,16,40,${.85*k})`;ctx.fillRect(0,0,W,H);
    const L=['QUARTO','DIRETORA','LUCAS','RECEPÇÃO','PADARIA','PORTARIA','BIA'];L.forEach((l,i)=>{const kk=easeBack(seg(u,2.0+i*.08,2.25+i*.08));if(kk<=0)return;const x=120+(i%4)*280,y=i<4?800:1120;ctx.save();ctx.translate(i<4?x:x+140,y);ctx.scale(kk,kk);clockFace(0,0,80,0,0);txtC(l,0,130,'900 30px Inter',i===6?'#ffd84a':'#cbb8ff',0);ctx.restore()});
    const k2=easeBack(seg(u,2.5,2.8));ctx.save();ctx.translate(W/2,420);ctx.scale(k2,k2);txtC('7º RELÓGIO',0,-60,'900 96px Inter','#ffd84a',16);txtC('PARADO! 00:00',0,60,'900 80px Inter','#fff',14);ctx.restore()}
  else{ctx.save();ctx.globalAlpha=seg(u,.1,.5);txtC('REPARA... 👀',W/2,1460,'900 90px Inter','#ffd84a',16);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3032.5);
// 11. no celular dela, um perfil: Fofoca da Rua (3034–3037.5)
scene(3034,3037.5,(t)=>{const u=t-3034;CAM(W/2,H*.5,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>s6Phone(u,{},()=>s6Profile(u,{})));
  const k=easeBack(seg(u,.4,.7));ctx.save();ctx.translate(W/2,170);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-330,-60,660,120,30);ctx.fill();txtC('FOFOCA DA RUA ☕',0,2,'900 60px Inter','#ff8ab8');ctx.restore();
  letterIn(u);
});
// 12. vinte mil seguidores! tudo que ela posta viraliza (3038–3041.5)
scene(3038,3041.5,(t)=>{const u=t-3038;const f=Math.floor(easeOut(seg(u,0,1.4))*20000);
  CAM(W/2,lerp(H*.5,H*.4,easeIO(seg(u,0,1))),lerp(1.0,1.5,easeIO(seg(u,0,1))),()=>s6Phone(u,{},()=>s6Profile(u,{fol:f,hl:seg(u,1.4,2)})));
  for(let i=0;i<8;i++){const k=seg(u,.6+i*.25,2.2+i*.25);if(k<=0||k>=1)continue;const r=rng(i+3038);const x=150+r()*780,y=1500-k*900;ctx.save();ctx.globalAlpha=1-k;txtC(i%2?'❤️':'🔥',x,y,'900 80px Inter','#fff');ctx.restore()}
  if(u>2.0){const k=easeBack(seg(u,2.0,2.3));ctx.save();ctx.translate(W/2,1460);ctx.scale(k,k);ctx.fillStyle='#ff3a6a';rr(-330,-70,660,140,36);ctx.fill();txtC('VIRALIZA! 🔥',0,2,'900 76px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 13. na janela, o gato laranja: só ele reconhece o Matheus (3042–3045.5)
scene(3042,3045.5,(t)=>{const u=t-3042;ctx.fillStyle=lg(0,H,['#fbe0ec','#f3cde0','#e2b2cc']);ctx.fillRect(0,0,W,H);
  ctx.save();ctx.beginPath();rr(140,300,800,1200,20);ctx.clip();ctx.fillStyle=lg(300,1500,['#ffd9a0','#ffeccc','#cfe6f5']);ctx.fillRect(140,300,800,1200);semBlur(()=>buildings(77,1500,200,600,'#b9c6d8','#fff6dc',.1,u*6,1));ctx.restore();
  ctx.strokeStyle='#fffdf6';ctx.lineWidth=30;ctx.beginPath();rr(140,300,800,1200,20);ctx.stroke();
  CAM(W/2,H*.5,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>{s2bCatFace(W/2,H*.56,1.15,u,{blink:u<.4||(u>2.6&&u<2.72),meow:u>1.0&&u<1.8?Math.sin(seg(u,1.0,1.8)*Math.PI):0,tilt:Math.sin(u*1.2)*.06})});
  for(let i=0;i<5;i++){const k=seg(u,1.3+i*.25,2.6+i*.25);if(k<=0||k>=1)continue;const x=300+i*120,y=1000-k*500;ctx.save();ctx.globalAlpha=1-k;txtC('💙',x,y,'900 70px Inter','#fff');ctx.restore()}
  if(u>1.0)s2bBubble(W/2,480,560,160,seg(u,1.0,1.3),'MIAU! (é você!)','#e8752a',-60);
  grade('rgba(255,200,150,.18)','rgba(120,40,80,.12)');letterIn(u);
});
// 14. ele desce até a padaria do seu Zé: a Bia de costas andando pela calçada até a padaria lá no fundo (câmera parada); pombos voando (3046–3049.5)
scene(3046,3049.5,(t)=>{const u=t-3046;sky('#8fbbe6','#d6e8f4','#f6e2c4');sun(820,260,50,'#fff6dc','rgba(255,220,150,.6)');
  const VX=540,VY=900;
  // prédios dos dois lados, em perspectiva até o ponto de fuga
  ctx.fillStyle='#c9b49a';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(380,620);ctx.lineTo(380,960);ctx.lineTo(0,1250);ctx.closePath();ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.stroke();
  ctx.fillStyle='#a9bcd0';ctx.beginPath();ctx.moveTo(W,0);ctx.lineTo(700,620);ctx.lineTo(700,960);ctx.lineTo(W,1250);ctx.closePath();ctx.fill();ctx.stroke();
  // a padaria lá no fundo, de frente
  ctx.fillStyle='#e9d2a8';ctx.fillRect(380,700,320,260);ctx.strokeRect(380,700,320,260);ctx.fillStyle='#b5651d';rr(400,715,280,56,12);ctx.fill();txtC('PADARIA DO ZÉ',540,744,'900 30px Oswald','#fff6dc',0);
  for(let i=0;i<5;i++){ctx.fillStyle=i%2?'#fff6dc':'#c8352b';ctx.fillRect(380+i*64,780,64,30)}ctx.fillStyle='#7a4a2a';ctx.fillRect(600,830,70,130);ctx.fillStyle='#f6e7cc';ctx.fillRect(400,830,170,100);
  // chão: calçada e rua em perspectiva
  ctx.fillStyle='#b8b2a8';ctx.beginPath();ctx.moveTo(380,960);ctx.lineTo(700,960);ctx.lineTo(W+200,H);ctx.lineTo(-200,H);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(60,50,40,.25)';ctx.lineWidth=4;for(let i=1;i<8;i++){const z=i/8;const y=lerp(960,H,z*z);const xl=lerp(380,-200,z*z),xr=lerp(700,W+200,z*z);ctx.beginPath();ctx.moveTo(xl,y);ctx.lineTo(xr,y);ctx.stroke()}
  // pombos levantando voo (ambiente): sobem para a esquerda, na direção em que olham
  for(let i=0;i<4;i++){const r=rng(i+3046);const k=seg(u,.6+i*.15,2.8+i*.15);const x=780+r()*160-k*520,y=1500+r()*80-k*900-Math.sin(k*3)*40;if(k>=1)continue;ctx.save();ctx.translate(x,y);ctx.scale(-1,1);ctx.fillStyle='#8a8f9a';ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.beginPath();ctx.ellipse(0,0,30,18,0,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(26,-12,12,0,7);ctx.fill();ctx.stroke();
    const fl=k>0?Math.sin(u*30+i)*.8:0;ctx.fillStyle='#a8adb8';ctx.beginPath();ctx.moveTo(-6,-4);ctx.lineTo(-30,-40*(.3+fl));ctx.lineTo(14,-6);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#e8a33a';ctx.beginPath();ctx.moveTo(37,-12);ctx.lineTo(48,-9);ctx.lineTo(37,-6);ctx.fill();ctx.restore()}
  // a Bia de costas, se afastando (anda para o fundo, olha para o fundo)
  const k=easeIO(seg(u,0,3.5));biaFront(540,lerp(1800,1330,k),lerp(2.0,1.15,k),{back:true,walk:u*7});
  txtC('PADARIA DO ZÉ 🥖',W/2,300,'900 70px Inter','#fff',14);letterIn(u);
});
// 15. sábado de manhã... e nenhum cliente: a padaria vazia (3050–3053.5)
scene(3050,3053.5,(t)=>{const u=t-3050;CAM(lerp(W/2-60,W/2+60,easeIO(seg(u,0,3.5))),1050,lerp(1.02,1.08,seg(u,0,3.5)),()=>{s4Bakery(u,{pan:0});s4Counter(1300,0)});
  if(u>.8){const k=easeBack(seg(u,.8,1.1));ctx.save();ctx.translate(W/2,1500);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-330,-70,660,140,36);ctx.fill();txtC('0 CLIENTES 😶',0,2,'900 70px Inter','#ffd84a');ctx.restore()}
  letterIn(u);
});
// 16. o Zé tá sozinho. os pães sobrando (3054–3057.5)
scene(3054,3057.5,(t)=>{const u=t-3054;CAM(W/2,1050,lerp(1.08,1.0,easeOut(seg(u,0,1.5))),()=>{s4Bakery(u,{pan:0});zeFront(540,1360,1.7,{smile:-10,look:0,brow:.7});s4Counter(1300,0);
    const PX=[150,280,800,930];for(let i=0;i<8;i++){const k=easeBack(seg(u,.6+i*.1,.9+i*.1));if(k<=0)continue;const x=PX[i%4],y=1270-Math.floor(i/4)*60;s4Pao(x,y,.8*k,(i%2?.1:-.1))}});
  if(u>1.4){const k=easeBack(seg(u,1.4,1.7));ctx.save();ctx.translate(W/2,1470);ctx.scale(k,k);txtC('PÃES SOBRANDO...',0,0,'900 84px Inter','#fff',16);ctx.restore()}
  letterIn(u);
});
// 17. ninguém quer comprar do mentiroso da rua: vizinhos passam direto pela padaria (3058–3061.5)
scene(3058,3061.5,(t)=>{const u=t-3058;s6Facade(u,{});
  const V=[[{hood:'#3a8a5a',hoodS:'#2a6a44',hair:'#5a3a22',pants:'#3a3a48',pantsS:'#2a2a36'},1300,0],[{hood:'#e0a030',hoodS:'#b88020',hair:'#c8c8d0',pants:'#5a4636',pantsS:'#46362a',skin:'#d9a27c',skinS:'#b98260'},1700,1.1]];
  V.forEach(([pal,x0,d])=>{const x=x0-(u-0)*360;withP(pal,()=>person(x,1500,1.25,{walk:u*7+d,f:-1}))});
  if(u>.6)s2bBubble(330,1000,560,150,seg(u,.6,.9),'DO MENTIROSO?|NÃO! 🙅','#c8352b',0);
  if(u>1.8)s2bBubble(720,880,520,140,seg(u,1.8,2.1),'VOU NA OUTRA!','#c8352b',0);
  letterIn(u);
});
// 18. aí o telefone toca: o número do Matheus no celular da Bia (3062–3065.5)
scene(3062,3065.5,(t)=>{const u=t-3062;ctx.fillStyle=lg(0,H,['#f6e7cc','#efd8b2','#d9b98a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,700,'rgba(255,120,150,A)',.15);
  const vb=Math.sin(u*70)*(u%1<.6?6:0);CAM(W/2+vb,H*.55,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>biaFace(W/2,H*.64,.8,{open:1.25,brow:.9,mouthO:.35}));
  s2cCall(u,'MATHEUS (302)','chamada recebida',seg(u,.1,.4));
  if(u%1<.6){ctx.save();ctx.translate(W/2,560);const k=1+.06*Math.sin(u*30);ctx.scale(k,k);txtC('TRIIIM! 📞',0,0,'900 110px Inter','#c8352b',18);ctx.restore()}
  letterIn(u);
});
// 19. [telefone] "Sou eu, a Bia! Tô no corpo do Matheus!" (3066–3069.5)
scene(3066,3069.5,(t)=>{const u=t-3066;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.6,lerp(1.0,1.06,seg(u,0,3.5)),()=>face(W/2,H*.64,.85,{open:1.3,brow:1,mouthO:.4+.3*Math.abs(Math.sin(u*9)),px:Math.sin(u*3)*8}));
  s2cCall(u,'MATHEUS (302)','chamada · 00:0'+Math.min(9,Math.floor(u*2+1)),1);
  s2bBubble(W/2,640,820,200,seg(u,.4,.7),'SOU EU, A BIA!|TÔ NO SEU CORPO! 😱','#d8407f',-80);
  biaInside(W-200,1460);letterIn(u);
});
// 20. [telefone] "Posta a dancinha das nove, senão eu perco seguidor!" (3070–3073.5)
scene(3070,3073.5,(t)=>{const u=t-3070;ctx.fillStyle=lg(0,H,['#1b1d36','#262a4a','#15172b']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,800,'rgba(255,200,150,A)',.3);
  CAM(W/2,H*.62,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>{face(W/2,H*.68,.8,{open:1.15,brow:.8,mouthO:.3+.3*Math.abs(Math.sin(u*8)),px:-14,sweat:1});
    for(let i=0;i<4;i++){const k=seg(u,.4+i*.3,1.8+i*.3);if(k<=0||k>=1)continue;ctx.save();ctx.globalAlpha=1-k;txtC(i%2?'🎵':'💃',220+i*220,1250-k*400,'900 90px Inter','#fff');ctx.restore()}});
  s2cCall(u,'MATHEUS (302)','chamada · 00:1'+Math.min(9,Math.floor(u*2)),1);
  s2bBubble(W/2,640,820,200,seg(u,.3,.6),'POSTA A DANCINHA|DAS NOVE! 💃','#d8407f',-80);
  biaInside(W-200,1460);letterIn(u);
});
// tela da câmera (preview com a Bia, ring light, botão de gravar). o:{rec, notif}
function s6Cam(u,o){o=o||{};ctx.fillStyle=lg(-560,560,['#fbe0ec','#f3cde0','#e2b2cc']);ctx.fillRect(-280,-560,560,1120);
  ctx.strokeStyle='rgba(255,250,220,.9)';ctx.lineWidth=20;ctx.beginPath();ctx.arc(0,-60,250,0,7);ctx.stroke();
  biaFace(0,40,.42,{smile:o.smile??6,open:o.open??1,brow:o.brow??0,mouthO:o.mouthO||0});
  ctx.fillStyle='rgba(0,0,0,.35)';ctx.fillRect(-280,-560,560,90);txtC('09:00',0,-480,'800 36px Inter','#fff',0);
  ctx.fillStyle='rgba(255,255,255,.9)';ctx.beginPath();ctx.arc(0,430,70,0,7);ctx.fill();ctx.fillStyle=o.rec?'#ff2a4a':'#ff6a80';ctx.beginPath();ctx.arc(0,430,o.rec?40:54,0,7);ctx.fill();
  txtC('🎵 dancinha das 9',0,320,'800 34px Inter','#fff',6);
  if(o.notif>0){const k=easeBack(clamp(o.notif));ctx.save();ctx.translate(0,-400+(1-k)*-160);ctx.fillStyle='rgba(250,250,252,.97)';rr(-260,-70,520,140,30);ctx.fill();ctx.fillStyle='#7a5cff';ctx.beginPath();ctx.arc(-200,0,34,0,7);ctx.fill();txtC('?',-200,2,'900 40px Inter','#fff',0);
    ctx.textAlign='left';ctx.fillStyle='#7a5cff';ctx.font='800 30px Inter';ctx.fillText('Número desconhecido',-150,-10);ctx.fillStyle='#16161c';ctx.font='700 30px Inter';ctx.fillText('nova mensagem',-150,32);ctx.restore()}}
// 21. ele abre a câmera. tudo pronto (3074–3077.5)
scene(3074,3077.5,(t)=>{const u=t-3074;CAM(W/2,H*.5,lerp(1.1,1.0,easeOut(seg(u,0,1.2))),()=>s6Phone(u,{},()=>s6Cam(u,{rec:u%1<.5})));
  const k=easeBack(seg(u,.5,.8));ctx.save();ctx.translate(W/2,170);ctx.scale(k,k);ctx.fillStyle='#16161c';rr(-300,-60,600,120,30);ctx.fill();txtC('TUDO PRONTO 🎥',0,2,'900 60px Inter','#fff');ctx.restore();
  letterIn(u);
});
// 22. mas chega uma mensagem de um número desconhecido (3078–3081.5)
scene(3078,3081.5,(t)=>{const u=t-3078;CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>s6Phone(u,{buzz:u>.4&&u<1.4},()=>s6Cam(u,{notif:seg(u,.4,.8),smile:0,open:1.2,brow:.6})));
  if(u>.4&&u<1.6){ctx.save();ctx.translate(W/2,170);const k=1+.06*Math.sin(u*30);ctx.scale(k,k);txtC('BZZZ! 📳',0,0,'900 100px Inter','#7a5cff',16);ctx.restore()}
  if(u>1.8){const k=easeBack(seg(u,1.8,2.1));ctx.save();ctx.translate(W/2,170);ctx.scale(k,k);ctx.fillStyle='#7a5cff';rr(-380,-60,760,120,30);ctx.fill();txtC('NÚMERO DESCONHECIDO',0,2,'900 54px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 23. [carta] "Toda mentira muda de lugar. Assinado: M." (3082–3085.5)
scene(3082,3085.5,(t)=>{const u=t-3082;ctx.fillStyle=lg(0,H,['#1a1530','#2e2558','#0f0c20']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(170,140,255,A)',.35);
  CAM(W/2,H*.48,lerp(1.25,1.4,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.42);s6Msg(seg(u,.1,.4),'Toda mentira|muda de lugar.',u>1.6?'— M.':'');ctx.restore()});
  if(u>1.6){const k=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(W/2,1460);ctx.scale(k,k);txtC('M.?! 😳',0,0,'900 120px Inter','#ffd84a',18);ctx.restore()}
  letterIn(u);
});
SHAKE.push(3083.7);
// 24. é o mesmo número do primeiro dia! (dia 1 x hoje) (3086–3089.5)
scene(3086,3089.5,(t)=>{const u=t-3086;ctx.fillStyle=lg(0,H,['#1a1530','#2e2558','#0f0c20']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(170,140,255,A)',.3);
  CAM(W/2,H*.5,lerp(1.0,1.05,seg(u,0,3.5)),()=>{
    ctx.save();ctx.translate(W/2,560);ctx.scale(.95,.95);txtC('DIA 1',0,-110,'900 56px Oswald','#cbb8ff',0);s6Msg(seg(u,0,.3),'Só até você dormir.|Escolha bem.');ctx.restore();
    ctx.save();ctx.translate(W/2,1060);ctx.scale(.95,.95);txtC('HOJE',0,-110,'900 56px Oswald','#ffd84a',0);s6Msg(seg(u,.5,.8),'Toda mentira|muda de lugar.','— M.');ctx.restore()});
  if(u>1.4){const k=easeBack(seg(u,1.4,1.7));ctx.save();ctx.translate(W/2,1470);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-390,-70,780,140,36);ctx.fill();txtC('MESMO NÚMERO! 😳',0,2,'900 68px Inter','#16161c');ctx.restore()}
  letterIn(u);
});
// 25. "E você? Já deixou alguém levar a culpa no seu lugar?" — a Bia (Matheus dentro) olha pra câmera (3090–3093.5)
scene(3090,3093.5,(t)=>{const u=t-3090;ctx.fillStyle=lg(0,H,['#d8407f','#ff7ab0','#a8306a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.4,900,'rgba(255,230,250,A)',.3);
  CAM(W/2,H*.52,lerp(1.12,1.0,easeOut(seg(u,0,.8))),()=>biaFace(W/2,H*.62,.8,{open:1.15,brow:.6,smile:lerp(0,6,seg(u,.6,1)),px:0,py:6}));
  const k=easeBack(seg(u,.3,.7));ctx.save();ctx.translate(W/2,290);ctx.scale(k,k);txtC('E VOCÊ? 👀',0,0,'900 120px Inter','#fff',20);ctx.restore();
  if(u>1.1){ctx.save();ctx.globalAlpha=seg(u,1.1,1.5);txtC('JÁ DEIXOU ALGUÉM',W/2,420,'900 62px Inter','#ffd84a',14);txtC('LEVAR A CULPA? 🤔',W/2,500,'900 62px Inter','#ffd84a',14);ctx.restore()}
  letterIn(u);
});
// 26. pela vitrine, ele vê o Zé. cabisbaixo (3094–3097.5)
scene(3094,3097.5,(t)=>{const u=t-3094;const m=easeIO(seg(u,0,2.4));CAM(lerp(W/2,420,m),lerp(1000,980,m),lerp(1.0,1.4,m),()=>s6Facade(u,{ze:true}));
  if(u>1.8){ctx.save();ctx.globalAlpha=seg(u,1.8,2.2);txtC('CABISBAIXO... 😔',W/2,1470,'900 80px Inter','#fff',16);ctx.restore()}
  letterIn(u);
});
// 27. A?: postar só a dancinha (3098–3101.5)
scene(3098,3101.5,(t)=>{const u=t-3098;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(120,255,170,A)',.3);
  CAM(W/2,H*.52,lerp(1.0,1.06,seg(u,0,3.5)),()=>s6Phone(u,{bg:false,rot:.0},()=>{ctx.fillStyle=lg(-560,560,['#fbe0ec','#f3cde0','#e2b2cc']);ctx.fillRect(-280,-560,560,1120);
    const sw=Math.sin(u*9);ctx.save();ctx.translate(sw*40,0);ctx.rotate(sw*.06);biaFront(0,420,1.6,{smile:14,look:sw*.5});ctx.restore();
    for(let i=0;i<4;i++){const ph=(u*.8+i/4)%1;ctx.save();ctx.globalAlpha=1-ph;txtC('🎵',-200+i*130,300-ph*600,'900 60px Inter','#fff');ctx.restore()}
    txtC('▶ 0:09',-180,-500,'800 34px Inter','#fff',6)}));
  txtC('A?',W/2,170,'900 110px Inter','#7dffa8',20);
  if(u>1.0){ctx.save();ctx.globalAlpha=seg(u,1.0,1.4);ctx.fillStyle='rgba(0,0,0,.6)';rr(90,1400,900,120,30);ctx.fill();txtC('POSTAR A DANCINHA 💃',W/2,1462,'900 62px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 28. a Bia ganha seguidores; o salário continua segredo (3102–3105.5)
scene(3102,3105.5,(t)=>{const u=t-3102;ctx.fillStyle=lg(0,H,['#0f3a24','#1f6a42','#0b2a1a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(120,255,170,A)',.3);
  const f=20000+Math.floor(easeOut(seg(u,.2,1.6))*15000);
  CAM(W/2,H*.42,1.0,()=>{ctx.save();ctx.translate(W/2,620);ctx.fillStyle='#fff';ctx.strokeStyle=OUT;ctx.lineWidth=8;rr(-380,-200,760,400,40);ctx.fill();ctx.stroke();
    txtC('@fofocadarua',0,-120,'900 50px Inter','#16161c',0);txtC((Math.floor(f/100)/10).toLocaleString('pt-BR')+' mil',0,10,'900 120px Oswald','#1f8a4a',0);txtC('seguidores ⬆',0,120,'800 44px Inter','#777',0);ctx.restore();
    if(u>1.6){const k=easeBack(seg(u,1.6,1.9));ctx.save();ctx.translate(W/2,1180);ctx.rotate(-.04);ctx.scale(k,k);ctx.fillStyle='#fff7a8';ctx.strokeStyle=OUT;ctx.lineWidth=7;rr(-330,-170,660,340,20);ctx.fill();ctx.stroke();txtC('🔒',0,-60,'900 120px Inter','#16161c');txtC('SALÁRIO: SEGREDO',0,90,'900 52px Inter','#16161c');ctx.restore()}});
  letterIn(u);
});
// 29. mas o Zé continua sendo o mentiroso da rua (3106–3109.5)
scene(3106,3109.5,(t)=>{const u=t-3106;ctx.fillStyle=lg(0,H,['#5a1f1a','#8a2e24','#3a1410']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(255,170,120,A)',.25);
  CAM(W/2,H*.55,lerp(1.0,1.08,seg(u,0,3.5)),()=>zeFace(W/2,H*.62,.75,{smile:-10,brow:.8,py:10}));
  const T=[[230,720,-.2,.3],[850,820,.18,.6],[200,1180,.15,.9],[880,1240,-.16,1.2]];T.forEach(([x,y,r,a])=>{const k=easeBack(seg(u,a,a+.3));if(k<=0)return;ctx.save();ctx.translate(x,y);ctx.rotate(r);ctx.scale(k,k);ctx.fillStyle='#fff';ctx.strokeStyle='#c8352b';ctx.lineWidth=7;rr(-160,-50,320,100,16);ctx.fill();ctx.stroke();txtC('MENTIROSO',0,2,'900 40px Inter','#c8352b');ctx.restore()});
  txtC('MAS O ZÉ...',W/2,300,'900 90px Inter','#fff',16);letterIn(u);
});
// 30. B?: uma live na padaria pra limpar o nome do Zé (3110–3113.5)
scene(3110,3113.5,(t)=>{const u=t-3110;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(140,170,255,A)',.3);
  CAM(W/2,H*.52,lerp(1.0,1.06,seg(u,0,3.5)),()=>s6Phone(u,{bg:false,rot:0},()=>{ctx.save();ctx.translate(-540,-560);ctx.scale(1,1);
      ctx.save();ctx.translate(540,0);ctx.scale(.52,.58);ctx.translate(-540,0);s4Bakery(u,{pan:0});zeFront(540,1360,1.7,{smile:lerp(-6,16,seg(u,.8,1.4)),look:0});s4Counter(1300,0);ctx.restore();ctx.restore();
    ctx.fillStyle='#ff2a4a';rr(-250,-520,170,56,12);ctx.fill();txtC('AO VIVO',-165,-491,'900 30px Inter','#fff',0);txtC('👁 '+(800+Math.floor(u*400)),120,-491,'800 32px Inter','#fff',6);
    for(let i=0;i<6;i++){const ph=(u*.7+i/6)%1;ctx.save();ctx.globalAlpha=1-ph;txtC('❤️',200,400-ph*500,'900 50px Inter','#fff');ctx.restore()}}));
  txtC('B?',W/2,170,'900 110px Inter','#ffd84a',20);
  if(u>1.0){ctx.save();ctx.globalAlpha=seg(u,1.0,1.4);ctx.fillStyle='rgba(0,0,0,.6)';rr(70,1400,940,120,30);ctx.fill();txtC('LIMPAR O NOME DO ZÉ 🥖',W/2,1462,'900 58px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 31. só que todo mundo vai perguntar: o salário é verdade? (3114–3117.5)
scene(3114,3117.5,(t)=>{const u=t-3114;ctx.fillStyle=lg(0,H,['#14204a','#24357a','#0d1534']);ctx.fillRect(0,0,W,H);
  CAM(W/2,H*.55,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>biaFace(W/2,H*.66,.78,{open:1.2,brow:.9,mouthO:.25,sweat:1}));
  const C=[['ENTÃO O SALÁRIO|É VERDADE?? 🤑',W/2,560,.3],['O MATHEUS GANHA|DEZ MIL MESMO?',370,880,.9],['👀👀👀',820,1060,1.4]];C.forEach(([s,x,y,a])=>{if(u>a)s2bBubble(x,y,s.includes('|')?600:300,s.includes('|')?190:130,seg(u,a,a+.3),s,'#2f55c8',0)});
  txtC('TODO MUNDO VAI PERGUNTAR...',W/2,260,'900 60px Inter','#fff',14);letterIn(u);
});
// 32. a mensagem: "Uma mentira não some. Ela só muda de lugar." — a etiqueta MENTIRA pulando de um rosto para o outro (3118–3121.5)
scene(3118,3121.5,(t)=>{const u=t-3118;ctx.fillStyle=lg(0,H,['#2a1a40','#5a3a6a','#ffb88a']);ctx.fillRect(0,0,W,H);glow(W/2,H*.55,900,'rgba(255,230,180,A)',.45);beams(W/2,200,1.57,5,1500,.07);
  CAM(W/2,H*.55,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{
    const circ=(x,fn,col)=>{ctx.save();ctx.beginPath();ctx.arc(x,1000,170,0,7);ctx.fillStyle=col;ctx.fill();ctx.clip();fn();ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.arc(x,1000,170,0,7);ctx.stroke()};
    circ(260,()=>face(260,1080,.36,{smile:4}),'#cfe0f0');circ(820,()=>zeFace(820,1080,.36,{smile:-6,brow:.5}),'#f6e7cc');
    txtC('MATHEUS',260,1220,'900 44px Inter','#fff',10);txtC('SEU ZÉ',820,1220,'900 44px Inter','#fff',10);
    const p=easeIO(seg(u,.6,1.8));const x=lerp(260,820,p),y=790-Math.sin(p*Math.PI)*260;ctx.save();ctx.translate(x,y);ctx.rotate(-.08);ctx.fillStyle='#c8352b';ctx.strokeStyle=OUT;ctx.lineWidth=6;rr(-150,-46,300,92,18);ctx.fill();ctx.stroke();txtC('MENTIRA',0,2,'900 46px Inter','#fff');ctx.restore()});
  txtC('UMA MENTIRA NÃO SOME...',W/2,300,'900 70px Inter','#fff',16);
  if(u>1.8){const k=easeBack(seg(u,1.8,2.1));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);txtC('...SÓ MUDA DE LUGAR',0,0,'900 76px Inter','#ffd84a',16);ctx.restore()}
  letterIn(u);
});
// 33/34. ESCOLHA: A (verde) x B — sobre o rosto da Bia (3122–3129)
scene(3122,3129,(t)=>{const u=t-3122;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  biaFace(W/2,H*.72,.75,{open:1,brow:.5,px:-20,py:10});ctx.fillStyle='rgba(10,8,14,.68)';ctx.fillRect(0,0,W,H);
  txtC('O QUE ELE FAZ?',W/2,320,'900 92px Inter','#fff',18);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));ctx.textAlign='left';
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,140,80,.95)';rr(70,430,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('A',120,590);ctx.font='800 50px Inter';ctx.fillText('postar só a',250,530);ctx.fillText('DANCINHA 💃',250,595);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(60,90,200,.95)';rr(70,690,940,220,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 140px Inter';ctx.fillText('B',120,850);ctx.font='800 50px Inter';ctx.fillText('live pra limpar',250,790);ctx.fillText('o nome do ZÉ 🥖',250,855);ctx.restore();
  if(u>1.4){const k=.5+.5*Math.sin(u*5);ctx.save();ctx.globalAlpha=seg(u,1.4,1.8);txtC('COMENTA A OU B 👇',W/2,1080,'900 74px Inter',`rgb(255,${200+55*k},74)`,16);ctx.restore()}
});
// FINAL: cartela da série (3190–3193.2)
scene(3190,3193.2,(t)=>{const u=t-3190;ctx.fillStyle='#07070c';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,50,W/2,H*.42,900);g.addColorStop(0,'rgba(255,120,180,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.36);ctx.scale(k,k);ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='900 92px Inter';ctx.fillText('E SE VOCÊ',0,0);ctx.fillText('ACORDASSE NA',0,110);ctx.fillStyle='#ffd84a';ctx.font='900 128px Inter';ctx.fillText('VIDA DE OUTRA',0,250);ctx.fillText('PESSOA?',0,390);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 7 · AMANHÃ 18H',W/2,H*.36+560);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.36+660);ctx.restore()});
