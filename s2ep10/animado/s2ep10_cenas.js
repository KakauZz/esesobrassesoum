// ===================== SÉRIE 2 · EP. 10 (FINAL DA TEMPORADA) — A ÚLTIMA VIDA: A SUA =====================
// Faixa 3800–3999 (cartela final 4000–4003.2). Consequência do voto B do EP. 9: a vó (Matheus dentro) pediu que o Lucas
// fosse na quarta e ESCUTASSE. Hoje o Matheus acorda nele mesmo. O relógio do quarto (o 1º) ainda está parado, e embaixo
// dele há um envelope com a letra dele: o "M." é o Matheus de 10 anos no futuro, que mostrou as vidas e parou os relógios
// "pra te dar tempo". Todas as vidas giravam em volta do aumento escondido do Lucas. Às 19h, na pracinha da escola, ele
// pede desculpa com a própria voz; o Lucas perdoa; o relógio da praça e todos os outros voltam a andar. Mensagem final.
// Ambiente (não falado): folhas da pracinha (s8Plaza), gato laranja no pé da cama, luz do poste acendendo.

// ---------- helpers ----------
function s10BG(c,gc,ga){ctx.fillStyle=lg(0,H,c);ctx.fillRect(0,0,W,H);if(gc)glow(W/2,H*.45,900,gc,ga??.3)}
function s10Pill(u,t0,y,txt,bg,fg,fs){if(u<t0)return;fs=fs||60;const k=easeBack(seg(u,t0,t0+.3));ctx.save();ctx.translate(W/2,y);ctx.scale(k,k);ctx.font=`900 ${fs}px Inter`;const w=Math.min(1010,ctx.measureText(txt).width+100);ctx.fillStyle=bg;rr(-w/2,-fs*1.05,w,fs*2.1,34);ctx.fill();txtC(txt,0,2,`900 ${fs}px Inter`,fg);ctx.restore()}
function s10Pop(u,t0,y,txt,col,fs,st){if(u<t0)return;const k=easeBack(seg(u,t0,t0+.3));ctx.save();ctx.translate(W/2,y);ctx.scale(k,k);txtC(txt,0,0,`900 ${fs}px Inter`,col,st??16);ctx.restore()}
// o Matheus do futuro (10 anos depois): mesmo traço, barba, fios grisalhos nas têmporas
function mfFace(cx,cy,s,o){o=o||{};withP({hairL:'#b9b9b9',hood:'#c85a32',hoodS:'#9a4024'},()=>face(cx,cy,s,o));ctx.save();ctx.translate(cx,cy);ctx.scale(s,s);ctx.lineJoin='round';
  ctx.fillStyle='#3a2a22';ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(-284,20);ctx.quadraticCurveTo(-272,225,-150,305);ctx.quadraticCurveTo(0,380,150,305);ctx.quadraticCurveTo(272,225,284,20);ctx.lineTo(244,44);
  ctx.quadraticCurveTo(225,210,125,270);ctx.quadraticCurveTo(0,305,-125,270);ctx.quadraticCurveTo(-225,210,-244,44);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.moveTo(-78,192);ctx.quadraticCurveTo(-40,160,0,176);ctx.quadraticCurveTo(40,160,78,192);ctx.quadraticCurveTo(40,186,0,190);ctx.quadraticCurveTo(-40,186,-78,192);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(200,200,200,.55)';ctx.lineWidth=5;for(let i=0;i<9;i++){const r=rng(i+3890);const x=(r()-.5)*420,y=250+r()*80;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+6,y+18);ctx.stroke()}
  ctx.strokeStyle='#cfcfcf';ctx.lineWidth=16;ctx.lineCap='round';for(const sx of[-1,1]){ctx.beginPath();ctx.moveTo(sx*300,-60);ctx.quadraticCurveTo(sx*316,-10,sx*306,40);ctx.stroke()}
  ctx.restore()}
// as 9 vidas da temporada (rosto de cada um)
const S10L=[['O CHEFE',(x,y,s)=>rbFace(x,y,s,{smile:4}),'#cfe0f4'],['A DIRETORA',(x,y,s)=>hlFace(x,y,s,{smile:2}),'#f0d8e0'],['O LUCAS',(x,y,s)=>luFace(x,y,s,{smile:8}),'#cfeee0'],
  ['O SEU ZÉ',(x,y,s)=>zeFace(x,y,s,{smile:8}),'#fff0cc'],['A SÍNDICA',(x,y,s)=>rosaFace(x,y,s,{smile:4}),'#e8dcf4'],['A BIA',(x,y,s)=>biaFace(x,y,s,{smile:10}),'#ffe0ec'],
  ['A MÃE',(x,y,s)=>celiaFace(x,y,s,{smile:10}),'#ffe4d0'],['A PROFESSORA',(x,y,s)=>neideFace(x,y,s,{smile:6}),'#fff1c8'],['A AVÓ',(x,y,s)=>cidaFace(x,y,s,{smile:8}),'#ffe0ec']];
function s10Port(i,x,y,r,k,dim){if(k<=0)return;const L=S10L[i];const s=easeBack(clamp(k));ctx.save();ctx.translate(x,y);ctx.scale(s,s);if(dim)ctx.globalAlpha=dim;
  ctx.save();ctx.beginPath();ctx.arc(0,0,r,0,7);ctx.fillStyle=L[2];ctx.fill();ctx.clip();L[1](0,r*.15,r/520);ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.arc(0,0,r,0,7);ctx.stroke();
  ctx.fillStyle='#16161c';rr(-r*1.05,r*.88,r*2.1,64,22);ctx.fill();txtC(L[0],0,r*.88+33,`900 ${Math.round(r*.24)}px Inter`,'#ffd84a',0);ctx.restore()}
const S10G=[[200,620],[540,620],[880,620],[200,960],[540,960],[880,960],[200,1300],[540,1300],[880,1300]];
// carta do "M." (papel com a letra dele aparecendo)
function s10Letter(u,k,lines,sign){s10BG(['#141a3a','#22305e','#0e1430'],'rgba(160,180,255,A)',.25);
  CAM(W/2,H*.45,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.44);ctx.rotate(-.025);softShadow(10,440,400,24,.35);
    ctx.fillStyle='#fffaf0';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillRect(-400,-430,800,860);ctx.strokeRect(-400,-430,800,860);
    ctx.strokeStyle='rgba(80,120,200,.25)';ctx.lineWidth=3;for(let y=-300;y<400;y+=110){ctx.beginPath();ctx.moveTo(-360,y+30);ctx.lineTo(360,y+30);ctx.stroke()}
    ctx.strokeStyle='rgba(220,80,80,.35)';ctx.beginPath();ctx.moveTo(-300,-430);ctx.lineTo(-300,430);ctx.stroke();
    const tot=lines.join('').length;let n=Math.floor(clamp(k)*tot);ctx.fillStyle='#24305e';ctx.font='700 100px Caveat';ctx.textAlign='left';
    lines.forEach((l,i)=>{const m=Math.max(0,Math.min(l.length,n));n-=l.length;if(m>0)ctx.fillText(l.slice(0,m),-270,-300+i*110+10)});
    if(sign&&k>=1){ctx.fillStyle='#c8352b';ctx.font='700 120px Caveat';ctx.textAlign='right';ctx.fillText(sign,330,350)}ctx.restore()});
  letterIn(u)}
function s10Msg(k,txt,sub){if(k<=0)return;ctx.save();ctx.globalAlpha=clamp(k*2);ctx.translate(0,(1-easeBack(clamp(k)))*-40);ctx.fillStyle='rgba(250,250,252,.97)';rr(-280,-40,560,420,30);ctx.fill();
  ctx.fillStyle='#7a5cff';ctx.beginPath();ctx.arc(-220,30,34,0,7);ctx.fill();txtC('?',-220,32,'900 40px Inter','#fff',0);ctx.textAlign='left';ctx.fillStyle='#7a5cff';ctx.font='800 32px Inter';ctx.fillText('Número desconhecido',-170,42);
  ctx.fillStyle='#16161c';ctx.font='700 44px Inter';const L=txt.split('|');L.forEach((l,i)=>ctx.fillText(l,-240,130+i*58));if(sub){ctx.fillStyle='#7a5cff';ctx.font='900 56px Caveat';ctx.fillText(sub,-240,130+L.length*58+16)}ctx.restore()}
// pracinha da escola ao anoitecer (19h): poste acendendo, relógio da praça parado (00:00), banco de frente
function s10Plaza(u,o){o=o||{};s8Plaza(u);ctx.fillStyle=`rgba(50,30,100,${o.dusk??.3})`;ctx.fillRect(0,0,W,H);
  ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillStyle='#2b2d36';ctx.fillRect(292,760,16,220);ctx.strokeRect(292,760,16,220);clockFace(300,720,58,o.hh??0,o.mm??0);
  lampPost(820,1000,1.1,o.lamp!==false);if(o.lamp!==false)glow(820,470,260,'rgba(255,220,150,A)',.35);
  if(o.bench){const b=o.bench;ctx.save();ctx.translate(b[0],b[1]);ctx.scale(b[2],b[2]);ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.fillStyle='#2b2d36';for(const x of[-250,230]){ctx.fillRect(x,-180,20,200);ctx.strokeRect(x,-180,20,200)}
    ctx.fillStyle='#8a5a34';rr(-300,-190,600,34,8);ctx.fill();ctx.stroke();rr(-300,-130,600,34,8);ctx.fill();ctx.stroke();ctx.fillStyle='#a8744a';rr(-310,-40,620,44,8);ctx.fill();ctx.stroke();ctx.restore()}}
function s10Placar(u,win){ctx.fillStyle=lg(0,H,['#101428','#1d2350','#0b0e1e']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,900,'rgba(90,140,255,A)',.25);
  txtC('PLACAR DO EP. 9',W/2,300,'900 86px Inter','#fff',16);txtC('somando todas as redes',W/2,390,'700 46px Inter','#bcd',0);
  const NET=[['TikTok','#111','#25f4ee'],['Instagram','#c13584','#fff'],['YouTube','#e62117','#fff']];const TX=['B','bbbb','B 👂','BBBB','b!!','escuta!','B','B 👀','Bbbb','a','B','B B B'];
  ctx.save();ctx.beginPath();ctx.rect(0,460,W,860);ctx.clip();
  const n=Math.floor(u*7);for(let i=0;i<n;i++){const r=rng(i+3804);const age=u-i/7;const y=1300-age*620;if(y<420)continue;const side=i%2===0;const nt=NET[i%3];const txt=TX[Math.floor(r()*TX.length)];
    ctx.save();ctx.globalAlpha=Math.min(1,age*4);ctx.translate(side?70:590,y);ctx.fillStyle='rgba(255,255,255,.95)';rr(0,-46,420,92,30);ctx.fill();
    ctx.fillStyle=nt[1];ctx.beginPath();ctx.arc(46,0,30,0,7);ctx.fill();ctx.fillStyle=nt[2];ctx.font='900 28px Inter';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(nt[0][0],46,2);
    ctx.textAlign='left';ctx.fillStyle='#777';ctx.font='700 24px Inter';ctx.fillText(nt[0],90,-16);ctx.fillStyle=txt.toUpperCase().startsWith('A')&&txt.length<3?'#1a8a4a':'#2f55c8';ctx.font='900 40px Inter';ctx.fillText(txt,90,22);ctx.restore()}
  ctx.restore();
  const c=Math.floor(Math.pow(clamp(u/2.7),2.2)*9999);const k=easeBack(seg(u,.1,.4));ctx.save();ctx.translate(W/2,1440);ctx.scale(k,k);ctx.fillStyle='#ffd84a';rr(-470,-90,940,180,36);ctx.fill();txtC(c>=9999?'+9999 COMENTÁRIOS':'💬 '+c.toLocaleString('pt-BR')+' comentários',0,0,'900 66px Oswald','#16161c');ctx.restore();
  if(win){const k2=easeBack(clamp(win));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(k2,k2);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(-W,-H,W*2,H*2);ctx.fillStyle='rgba(60,90,200,.97)';rr(-470,-150,940,300,46);ctx.fill();
    txtC('VENCEU B',0,-50,'900 110px Inter','#fff');txtC('IR E ESCUTAR 👂',0,60,'900 56px Inter','#fff');ctx.restore()}}
// quarto do Matheus (manhã de quarta): s2SmallRoom com o relógio parado em 00:00
function s10Room(u){s2SmallRoom(u,{hh:0,mm:0});ctx.save();ctx.beginPath();rr(560,330,380,520,12);ctx.clip();ctx.fillStyle=lg(330,850,['rgba(150,200,255,.75)','rgba(255,200,150,.7)']);ctx.fillRect(560,330,380,520);ctx.restore();ctx.strokeStyle='#3a3350';ctx.lineWidth=18;ctx.beginPath();rr(560,330,380,520,12);ctx.stroke();ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(750,330);ctx.lineTo(750,850);ctx.stroke();ctx.fillStyle='rgba(255,200,140,.10)';ctx.fillRect(0,0,W,H)}
function s10Blanket(){ctx.fillStyle='#e2683c';ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();rr(330,1270,730,190,30);ctx.fill();ctx.stroke();ctx.strokeStyle='rgba(255,255,255,.35)';ctx.lineWidth=5;for(let i=0;i<6;i++){ctx.beginPath();ctx.moveTo(380+i*120,1290);ctx.lineTo(380+i*120,1440);ctx.stroke()}}
function s10Mirror(u,fn,frame){CAM(W/2,H*.5,1,()=>{ctx.save();ctx.beginPath();rr(150,260,780,1300,380);ctx.clip();ctx.fillStyle=lg(260,1560,['#cfe2ee','#a9c4d6']);ctx.fillRect(150,260,780,1300);fn();
  ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.moveTo(150,260);ctx.lineTo(480,260);ctx.lineTo(150,900);ctx.closePath();ctx.fill();ctx.restore();ctx.strokeStyle=frame||'#c98f5e';ctx.lineWidth=28;ctx.beginPath();rr(150,260,780,1300,380);ctx.stroke()})}

// =============================== CENAS ===============================
// 0. GANCHO: o espelho pisca as 9 vidas... e para no próprio rosto (3800–3803.5)
scene(3800,3803.5,(t)=>{const u=t-3800;const z=lerp(1.18,1.04,easeOut(seg(u,0,.6)))+u*.02,sh=(u<.3||(u>.9&&u<1.1))?Math.sin(u*90)*12:0;
  CAM(W/2+sh,H*.52,z,()=>{ctx.fillStyle=lg(0,H,['#ffe8d0','#ffd0a8','#f0a878']);ctx.fillRect(0,0,W,H);glow(W/2,H*.45,800,'rgba(255,245,230,A)',.4);
    if(u<.9){const i=Math.floor(u/.1)%9;S10L[i][1](540,1030,.9);ctx.fillStyle='rgba(255,255,255,.12)';ctx.fillRect(0,0,W,H)}
    else face(540,1030,.9,{open:1.4,brow:1,mouthO:lerp(.9,.5,seg(u,1.6,2.4)),pupil:.6,smile:10});
    for(let i=0;i<14;i++){const r=rng(i+3800);ctx.fillStyle='rgba(255,255,255,.6)';ctx.beginPath();ctx.arc(r()*W,(r()*H+u*80)%H,3+r()*4,0,7);ctx.fill()}});
  ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,110,W,430);
  hookTitle('IMAGINE...|VOLTAR A|SER VOCÊ 😳',seg(u,0,.35),240);
  if(u>.9&&u<1.05){ctx.fillStyle=`rgba(255,255,255,${.8*(1-seg(u,.9,1.05))})`;ctx.fillRect(0,0,W,H)}
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.85*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});
SHAKE.push(3800.05,3800.92);
// 1. placar → VENCEU B (3804–3807.5)
scene(3804,3807.5,(t)=>{const u=t-3804;s10Placar(u*1.35,seg(u,2.0,2.3));letterIn(u)});
// 2. ontem, no corpo da avó, ele pediu pro Lucas (3808–3811.5)
scene(3808,3811.5,(t)=>{const u=t-3808;s10BG(['#5a1a3a','#a8305a','#3a0a24'],'rgba(255,190,220,A)',.28);
  CAM(W/2,H*.55,lerp(1.0,1.06,seg(u,0,3.5)),()=>cidaFace(W/2,H*.64,.8,{open:1.05,smile:6,px:-10}));
  ctx.save();ctx.globalAlpha=seg(u,0,.4);txtC('ONTEM',W/2,300,'800 70px Oswald','#fff',12);ctx.restore();
  s10Pill(u,.7,430,'ELE, NO CORPO DA AVÓ 👵','rgba(22,22,28,.92)','#fff',48);
  mtInside(W/2,590);letterIn(u);
});
// 3. "Vai na quarta. E escuta o Matheus." (3812–3815.5)
scene(3812,3815.5,(t)=>{const u=t-3812;s10BG(['#14204a','#24357a','#0d1534'],'rgba(140,170,255,A)',.3);
  CAM(W/2,H*.56,lerp(1.0,1.06,seg(u,0,3.5)),()=>cidaFace(W/2,H*.68,.78,{brow:.4,smile:8,mouthO:u>.3&&u<2.6?.22+.2*Math.abs(Math.sin(u*8)):0,px:10}));
  s2bBubble(W/2,560,900,200,seg(u,.3,.6),'VAI NA QUARTA.|E ESCUTA O MATHEUS. 👂','#2f55c8',-60);
  letterIn(u);
});
// 4. "E o Lucas prometeu: tá bom, vó. Eu vou." (3816–3819.5)
scene(3816,3819.5,(t)=>{const u=t-3816;s10BG(['#1f4a3c','#2c6c5b','#163a2e'],'rgba(160,255,200,A)',.22);
  CAM(W/2,H*.55,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>luFace(W/2,H*.66,.78,{smile:lerp(-4,10,seg(u,1.2,2)),brow:.2,mouthO:u>1.0&&u<2.8?.18+.2*Math.abs(Math.sin(u*8)):0}));
  s2bBubble(W/2,560,760,200,seg(u,1.0,1.3),'TÁ BOM, VÓ.|EU VOU. 💚','#2c6c5b',-60);
  s10Pill(u,.2,330,'O LUCAS PROMETEU 🤝','#16161c','#ffd84a',54);
  letterIn(u);
});
// 7. quarta, sete da manhã: ele abre os olhos — no quartinho dele (3828–3831.5)
scene(3828,3831.5,(t)=>{const u=t-3828;const op=u<.5?0:u<.7?.3:easeOut(seg(u,.8,1.3));
  CAM(W/2,H*.6,lerp(1.0,1.18,easeIO(seg(u,0,3.5))),()=>{s10Room(u);
    face(400,1175,.3,{headOnly:true,open:op*1.1,lid:op>.3?lerp(.4,0,seg(u,1.0,1.5)):0,brow:op>.9?.6:0,px:op>.9?18:0});s10Blanket()});
  s10Pill(u,1.4,330,'ABRE OS OLHOS... 👀','#16161c','#ffd84a',58);
  grade('rgba(255,220,200,.15)','rgba(60,40,90,.12)');letterIn(u);
});
// 8. "O quartinho dele. A cama dele!" — ele senta na cama, sorrindo (3832–3835.5)
scene(3832,3835.5,(t)=>{const u=t-3832;const up=easeOut(seg(u,.2,1.0));
  CAM(W/2,H*.55,lerp(1.04,1.0,easeOut(seg(u,0,1.5))),()=>{s10Room(u);
    face(420,lerp(1200,1080,up),.36,{open:1.2,brow:.6,smile:lerp(2,16,up),px:lerp(0,30,seg(u,1.2,1.8))});s10Blanket()});
  if(u<1.6)s10Pill(u,.4,330,'O QUARTINHO DELE 🏠','#e2683c','#fff',60);
  s10Pill(u,1.6,330,'A CAMA DELE! 🛏️','#16161c','#ffd84a',58);
  letterIn(u);
});
// 9. no espelho: o próprio rosto — ele voltou! (3836–3839.5)
scene(3836,3839.5,(t)=>{const u=t-3836;const z=lerp(1.0,1.1,easeOut(seg(u,.3,.7)));const sh=(u>.3&&u<.8)?Math.sin(u*80)*10:0;
  CAM(W/2+sh,H*.5,z,()=>{ctx.fillStyle=lg(0,H,['#ffe8d0','#ffd0a8','#f0a878']);ctx.fillRect(0,0,W,H);
    s10Mirror(u,()=>personFront(540,1430,3.0,{look:0,eye:1.25,brow:.8,smile:lerp(4,18,seg(u,1.2,1.8)),mouthO:u<1.2?.5:0}))});
  if(u>.3&&u<.5){ctx.fillStyle=`rgba(255,255,255,${.6*(1-seg(u,.3,.5))})`;ctx.fillRect(0,0,W,H)}
  s10Pop(u,.6,320,'O PRÓPRIO ROSTO! 🧡','#ffd84a',80,18);
  s10Pill(u,1.6,1480,'ELE VOLTOU! 🎉','#e2683c','#fff',70);
  if(u>1.6){for(let i=0;i<26;i++){const r=rng(i+3836);const k=seg(u,1.6+r()*.3,3.4);ctx.save();ctx.fillStyle=['#ffd84a','#e2683c','#2fbf71','#2f55c8'][i%4];ctx.translate(r()*W,lerp(-40,H*.9,k)+Math.sin(u*4+i)*20);ctx.rotate(u*4+i);ctx.fillRect(-10,-6,20,12);ctx.restore()}}
});
SHAKE.push(3836.32);
// 10. "HOJE ELE É: ELE MESMO" — crachá girando (3840–3843.5)
scene(3840,3843.5,(t)=>{const u=t-3840;s10BG(['#7a2a10','#e2683c','#5a1a08'],'rgba(255,220,180,A)',.3);
  const sp=lerp(Math.PI*2,0,easeOut(seg(u,0,1.0)));CAM(W/2,H*.5,lerp(1.0,1.06,seg(u,0,3.5)),()=>{ctx.save();ctx.translate(W/2,H*.52);ctx.scale(Math.cos(sp),1);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-330,-430,660,860,30);ctx.fill();ctx.stroke();
    ctx.fillStyle='#e2683c';ctx.beginPath();rr(-330,-430,660,150,30);ctx.fill();ctx.fillRect(-330,-320,660,40);ctx.fillStyle='#fff';ctx.font='800 50px Oswald';ctx.textAlign='center';ctx.fillText('HOJE ELE É',0,-335);
    ctx.save();ctx.beginPath();rr(-170,-240,340,340,20);ctx.clip();ctx.fillStyle='#ffe0c8';ctx.fillRect(-170,-240,340,340);face(0,-10,.27,{smile:16});ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.beginPath();rr(-170,-240,340,340,20);ctx.stroke();
    ctx.fillStyle='#16161c';ctx.font='900 66px Inter';ctx.fillText('ELE',0,180);ctx.fillText('MESMO!',0,250);ctx.fillStyle='#e2683c';ctx.font='800 46px Inter';ctx.fillText('o Matheus 🧡',0,325);ctx.restore()});
  letterIn(u);
});
// 11. o gato laranja no pé da cama (3844–3847.5)
scene(3844,3847.5,(t)=>{const u=t-3844;CAM2(...((z)=>[Math.min(Math.max(820,540/z),W-540/z),Math.min(Math.max(1160,960/z),H-960/z),z])(lerp(1.5,1.7,easeIO(seg(u,0,3.5)))),()=>{s10Room(u);s10Blanket();
    s2bCatFace(860,1200,.4,u,{blink:u<.4||(u>2.6&&u<2.72),meow:u>1.2&&u<2.0?Math.sin(seg(u,1.2,2.0)*Math.PI):0,tilt:Math.sin(u*1.2)*.06})});
  for(let i=0;i<5;i++){const k=seg(u,1.3+i*.25,2.6+i*.25);if(k<=0||k>=1)continue;const x=i%2?150:930,y=1450-k*500-i*40;ctx.save();ctx.globalAlpha=1-k;txtC('💙',x,y,'900 70px Inter','#fff');ctx.restore()}
  letterIn(u);
});
// 12. mas o relógio da parede continua parado (3848–3851.5)
scene(3848,3851.5,(t)=>{const u=t-3848;const m=easeIO(seg(u,.2,1.8));CAM2(...((z)=>[Math.min(Math.max(lerp(W/2,260,m),540/z),W-540/z),Math.min(Math.max(lerp(H*.5,520,m),960/z),H-960/z),z])(lerp(1.0,2.2,m)),()=>s10Room(u));
  s10Pill(u,.2,1460,'MAS... 👀','#16161c','#ffd84a',70);
  s10Pill(u,1.9,1460,'AINDA PARADO! 00:00','#c8352b','#fff',62);
  letterIn(u);
});
SHAKE.push(3849.9);
// 13. embaixo dele, um envelope — com a letra dele: M. (3852–3855.5)
scene(3852,3855.5,(t)=>{const u=t-3852;s10BG(['#1b1d36','#262a4a','#15172b'],'rgba(255,220,160,A)',.2);
  CAM(W/2,H*.5,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>{clockFace(540,580,140,0,0);
    const k=easeBack(seg(u,.2,.6));ctx.save();ctx.translate(540,1050);ctx.scale(k,k);ctx.rotate(-.04);softShadow(0,330,330,20,.35);ctx.fillStyle='#fffaf0';ctx.strokeStyle=OUT;ctx.lineWidth=9;ctx.beginPath();rr(-380,-240,760,480,18);ctx.fill();ctx.stroke();
      ctx.fillStyle='#f0e6d0';ctx.beginPath();ctx.moveTo(-380,-240);ctx.lineTo(0,40);ctx.lineTo(380,-240);ctx.closePath();ctx.fill();ctx.stroke();
      if(u>1.5){ctx.save();ctx.globalAlpha=seg(u,1.5,1.9);ctx.fillStyle='#c8352b';ctx.font='700 190px Caveat';ctx.textAlign='center';ctx.fillText('M.',0,190);ctx.restore()}ctx.restore()});
  s10Pill(u,.3,300,'UM ENVELOPE ✉️','#16161c','#ffd84a',60);
  s10Pill(u,1.8,1480,'A LETRA DELE! ✍️','#c8352b','#fff',60);
  letterIn(u);
});
SHAKE.push(3853.6);
// 14–15. [carta] a carta do M. (3856–3863.5)
scene(3856,3859.5,(t)=>{const u=t-3856;s10Letter(u,seg(u,.1,2.8),['Oi, Matheus.','Sou eu. Você,','daqui a 10 anos.'],'')});
scene(3860,3863.5,(t)=>{const u=t-3860;s10Letter(u,seg(u,.1,2.6),['Fui eu que te','mandei todas','aquelas vidas.'],'');s10Pill(u,2.6,1480,'FOI ELE! 😳','#c8352b','#fff',66)});
SHAKE.push(3862.65);
// 16. o chefe, a diretora, o Lucas, o seu Zé (3864–3867.5)
scene(3864,3867.5,(t)=>{const u=t-3864;s10BG(['#1a1430','#2e2450','#120e22'],'rgba(180,150,255,A)',.25);
  CAM(W/2,H*.5,lerp(1.0,1.04,seg(u,0,3.5)),()=>{for(let i=0;i<4;i++)s10Port(i,S10G[i][0],S10G[i][1],150,seg(u,.1+i*.7,.4+i*.7))});
  txtC('AS VIDAS 👇',W/2,300,'900 70px Inter','#fff',14);letterIn(u);
});
// 17. a síndica, a Bia, a mãe, a professora, a avó (3868–3871.5)
scene(3868,3871.5,(t)=>{const u=t-3868;s10BG(['#1a1430','#2e2450','#120e22'],'rgba(180,150,255,A)',.25);
  CAM(W/2,H*.5,lerp(1.04,1.0,seg(u,0,3.5)),()=>{for(let i=0;i<9;i++)s10Port(i,S10G[i][0],S10G[i][1],150,i<4?1:seg(u,.1+(i-4)*.55,.4+(i-4)*.55))});
  txtC('AS VIDAS 👇',W/2,300,'900 70px Inter','#fff',14);
});
// 18. todas tinham uma coisa em comum: linhas ligando tudo ao centro (3872–3875.5)
scene(3872,3875.5,(t)=>{const u=t-3872;s10BG(['#1a1430','#2e2450','#120e22'],'rgba(255,210,120,A)',.2);
  CAM(W/2,H*.5,lerp(1.0,1.05,easeIO(seg(u,0,3.5))),()=>{const L=easeOut(seg(u,.3,1.6));ctx.strokeStyle='#ffd84a';ctx.lineWidth=8;ctx.setLineDash([22,16]);ctx.lineDashOffset=-u*60;
    for(let i=0;i<9;i++){if(i===4)continue;const [x,y]=S10G[i];ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(lerp(x,540,L),lerp(y,960,L));ctx.stroke()}ctx.setLineDash([]);
    for(let i=0;i<9;i++)if(i!==4)s10Port(i,S10G[i][0],S10G[i][1],135,1);
    const k=easeBack(seg(u,1.5,1.9));if(k>0){ctx.save();ctx.translate(540,960);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.arc(0,0,130,0,7);ctx.fill();ctx.stroke();txtC('?',0,6,'900 170px Inter','#16161c',0);ctx.restore()}});
  s10Pill(u,.2,300,'UMA COISA EM COMUM 🤔','#16161c','#ffd84a',56);letterIn(u);
});
// 19. o aumento que ele escondeu do melhor amigo (3876–3879.5)
scene(3876,3879.5,(t)=>{const u=t-3876;s10BG(['#1a1430','#2e2450','#120e22'],'rgba(255,210,120,A)',.25);
  CAM(W/2,H*.5,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{for(let i=0;i<9;i++)if(i!==4)s10Port(i,S10G[i][0],S10G[i][1],135,1,.35);
    const k=easeBack(seg(u,.1,.5));ctx.save();ctx.translate(540,960);ctx.scale(k,k);ctx.rotate(-.04);softShadow(0,300,280,20,.4);ctx.fillStyle='#fffdf6';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();rr(-300,-230,600,460,20);ctx.fill();ctx.stroke();
      ctx.fillStyle='#2f55c8';rr(-300,-230,600,90,20);ctx.fill();txtC('HOLERITE · MATHEUS',0,-185,'900 40px Inter','#fff',0);
      txtC('SALÁRIO',0,-80,'800 44px Inter','#666',0);txtC('R$ 9.900',0,20,'900 120px Oswald','#1a8a4a',0);
      if(u>1.2){const k2=easeBack(seg(u,1.2,1.5));ctx.save();ctx.translate(0,150);ctx.rotate(-.12);ctx.scale(k2,k2);ctx.strokeStyle='#c8352b';ctx.lineWidth=10;rr(-250,-50,500,100,14);ctx.stroke();txtC('ESCONDIDO 🤫',0,4,'900 62px Inter','#c8352b',0);ctx.restore()}ctx.restore()});
  s10Pill(u,1.9,1480,'DO MELHOR AMIGO 💚','#2c6c5b','#fff',62);letterIn(u);
});
SHAKE.push(3877.25);
// 20–22. [carta] o resto da carta (3880–3891.5)
scene(3880,3883.5,(t)=>{const u=t-3880;s10Letter(u,seg(u,.1,2.8),['Eu não contei.','E fiquei 10 anos','longe do Lucas.'],'')});
scene(3884,3887.5,(t)=>{const u=t-3884;s10Letter(u,seg(u,.1,2.8),['Por isso eu parei','os relógios.','Pra te dar tempo.'],'');
  for(let i=0;i<4;i++){const k=easeBack(seg(u,1.0+i*.15,1.3+i*.15));if(k<=0)continue;const [x,y]=[[140,330],[940,330],[140,1440],[940,1440]][i];ctx.save();ctx.translate(x,y);ctx.scale(k,k);clockFace(0,0,80,0,0);ctx.restore()}});
scene(3888,3891.5,(t)=>{const u=t-3888;s10Letter(u,seg(u,.1,2.2),['Hoje, às 19h,','a escolha','é sua.'],'— M.')});
SHAKE.push(3889.6);
// 23. então era isso: o M. era ele mesmo, do futuro (3892–3895.5)
scene(3892,3895.5,(t)=>{const u=t-3892;s10BG(['#2a1a40','#5a3a6a','#ffb88a'],'rgba(255,230,180,A)',.4);beams(W/2,200,1.57,5,1500,.08);
  const sh=u>1.0&&u<1.3?Math.sin(u*80)*10:0;CAM(W/2+sh,H*.56,lerp(1.1,1.0,easeOut(seg(u,0,1.2))),()=>{mfFace(W/2,H*.66,.78,{smile:10,open:1.05,px:0});
    const d=1-seg(u,.9,1.3);if(d>0){ctx.fillStyle=`rgba(14,10,24,${.92*d})`;ctx.fillRect(0,0,W,H)}});
  if(u>1.0&&u<1.2){ctx.fillStyle=`rgba(255,255,255,${.7*(1-seg(u,1.0,1.2))})`;ctx.fillRect(0,0,W,H)}
  if(u<1.3)s10Pill(u,.1,330,'O "M." ERA...','#16161c','#fff',64);
  s10Pill(u,1.3,330,'ELE MESMO, DO FUTURO! 🧡','#e2683c','#fff',56);
});
SHAKE.push(3893.02);
// 24. "E você? O que diria pra você de dez anos atrás?" (3896–3899.5)
scene(3896,3899.5,(t)=>{const u=t-3896;s10BG(['#c85a32','#ff9a6a','#a8401a'],'rgba(255,230,200,A)',.3);
  CAM(W/2,H*.52,lerp(1.12,1.0,easeOut(seg(u,0,.8))),()=>mfFace(W/2,H*.66,.8,{open:1.1,brow:.4,smile:lerp(2,10,seg(u,.6,1.2))}));
  s10Pop(u,.2,300,'E VOCÊ? 👀','#fff',120,20);
  s10Pill(u,1.0,450,'O QUE DIRIA PRO SEU EU','#16161c','#ffd84a',50);s10Pill(u,1.3,580,'DE 10 ANOS ATRÁS? 🤔','#16161c','#ffd84a',50);
  letterIn(u);
});
// 25. o dia inteiro, ele ensaia na frente do espelho (3900–3903.5)
scene(3900,3903.5,(t)=>{const u=t-3900;ctx.fillStyle=lg(0,H,['#f8e6d0','#f0d0b0','#e0b890']);ctx.fillRect(0,0,W,H);
  CAM(W/2,H*.5,lerp(1.0,1.05,easeIO(seg(u,0,3.5))),()=>s10Mirror(u,()=>personFront(540,1430,3.0,{look:Math.sin(u*1.4)*.3,eye:1.05,brow:.3,mouthO:.18+.25*Math.abs(Math.sin(u*7))})));
  const L=['"Lucas, eu..."','"Então, Lucas..."','"Lucas! Eu preciso..."'];L.forEach((l,i)=>{const k=seg(u,.4+i*.9,1.2+i*.9);if(k<=0||k>=1)return;ctx.save();ctx.globalAlpha=Math.sin(k*Math.PI);ctx.fillStyle='#fff';rr(140+(i%2)*180,1340-i*20,620,96,30);ctx.fill();ctx.fillStyle='#24305e';ctx.font='700 64px Caveat';ctx.textAlign='left';ctx.fillText(l,180+(i%2)*180,1405-i*20);ctx.restore()});
  s10Pill(u,.2,330,'ENSAIANDO 😅','#16161c','#ffd84a',66);
});
// 26. seis e meia: ele vai até a pracinha da escola (3904–3907.5)
scene(3904,3907.5,(t)=>{const u=t-3904;const p=easeIO(seg(u,0,3.5));
  CAM(W/2,H*.55,1.0,()=>{s10Plaza(u,{dusk:.15,lamp:false});personFront(lerp(560,520,p),lerp(1060,1420,p),lerp(.9,2.2,p),{walk:u*9,look:0,smile:-2,brow:.3})});
  s10Pill(u,.2,330,'A PRACINHA DA ESCOLA 🏫','#16161c','#ffd84a',54);
  letterIn(u);
});
// 27. sete horas, e nada do Lucas (3908–3911.5)
scene(3908,3911.5,(t)=>{const u=t-3908;
  CAM(W/2,H*.56,lerp(1.0,1.05,easeIO(seg(u,0,3.5))),()=>{s10Plaza(u,{bench:[440,1420,1]});personFront(800,1420,2.1,{look:Math.sin(u*2.2),brow:.4,smile:-4})});
  s10Pill(u,.1,330,'📱 19:00','#16161c','#fff',66);
  s10Pill(u,1.4,470,'NADA DO LUCAS... 😟','#c8352b','#fff',56);
  letterIn(u);
});
// 28. sete e cinco... sete e dez... será que ele não vem? (3912–3915.5)
scene(3912,3915.5,(t)=>{const u=t-3912;
  CAM(W/2,H*.6,lerp(1.0,1.12,easeIO(seg(u,0,3.5))),()=>{s10Plaza(u,{bench:[440,1420,1],dusk:.38});personFront(800,1420,2.1,{look:-.3,py:14,brow:.6,smile:-10})});
  s10Pill(u,.1,330,u<1.2?'📱 19:05':'📱 19:10','#16161c','#fff',66);
  s10Pill(u,1.9,470,'SERÁ QUE ELE NÃO VEM? 😟','#c8352b','#fff',50);
});
// 29. aí, passos no caminho: é o Lucas! (3916–3919.5)
scene(3916,3919.5,(t)=>{const u=t-3916;const p=easeOut(seg(u,.2,3.2));
  CAM(W/2,H*.56,1.0,()=>{s10Plaza(u,{bench:[440,1420,1],dusk:.38});luFront(lerp(520,470,p),lerp(1040,1360,p),lerp(.85,1.9,p),{walk:u*9,look:0,smile:-2});
    personFront(800,1420,2.1,{look:lerp(.2,-1,seg(u,.5,1.0)),brow:.7,eye:1.2,smile:2})});
  s10Pill(u,.1,330,'PASSOS... 👣','#16161c','#fff',62);
  s10Pill(u,1.5,330,'O LUCAS! 💚','#2c6c5b','#fff',70);
  letterIn(u);
});
SHAKE.push(3917.5);
// 30. "Minha vó pediu pra eu vir. E escutar." (3920–3923.5)
scene(3920,3923.5,(t)=>{const u=t-3920;s10BG(['#1f4a3c','#2c6c5b','#163a2e'],'rgba(255,210,150,A)',.22);
  CAM(W/2,H*.55,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>luFace(W/2,H*.66,.78,{smile:-4,brow:.2,mouthO:u>.3&&u<2.6?.18+.2*Math.abs(Math.sin(u*8)):0}));
  s2bBubble(W/2,560,880,200,seg(u,.2,.5),'MINHA VÓ PEDIU PRA|EU VIR. E ESCUTAR. 👂','#2c6c5b',-60);
  s10Pill(u,1.6,330,'POR CAUSA DE VOCÊS 👆','#2f55c8','#fff',56);
  letterIn(u);
});
// 31. sem corpo trocado: agora é a voz dele mesmo (3924–3927.5)
scene(3924,3927.5,(t)=>{const u=t-3924;s10BG(['#ff9a6a','#ffc48a','#ffe0b0'],'rgba(255,250,220,A)',.4);
  CAM(W/2,H*.56,lerp(1.0,1.1,easeIO(seg(u,0,3.5))),()=>face(W/2,H*.66,.8,{brow:-.2,smile:2,open:1.05}));
  s10Pill(u,.2,330,'SEM CORPO TROCADO','#16161c','#fff',58);
  s10Pill(u,1.4,470,'A VOZ DELE MESMO 🗣️','#e2683c','#fff',58);
  letterIn(u);
});
// 32. "Lucas, o aumento foi meu. E cortaram a sua promoção." (3928–3931.5)
scene(3928,3931.5,(t)=>{const u=t-3928;s10BG(['#3a2050','#5a3a6a','#ff9a6a'],'rgba(255,220,180,A)',.3);
  CAM(W/2,H*.56,lerp(1.0,1.05,easeIO(seg(u,0,3.5))),()=>face(W/2,H*.68,.78,{brow:.4,smile:-4,mouthO:u>.2&&u<3.0?.2+.22*Math.abs(Math.sin(u*8)):0}));
  s2bBubble(W/2,580,840,200,seg(u,.2,.5),'LUCAS, O AUMENTO|FOI MEU. 😔','#e2683c',-60);s10Pill(u,1.5,330,'E A SUA PROMOÇÃO FOI CORTADA ✂️','#16161c','#ffd84a',44);
  letterIn(u);
});
// 33. "Eu escondi por vergonha. Me desculpa." (3932–3935.5)
scene(3932,3935.5,(t)=>{const u=t-3932;s10BG(['#3a2050','#5a3a6a','#ff9a6a'],'rgba(255,220,180,A)',.3);
  CAM(W/2,H*.58,lerp(1.05,1.12,easeIO(seg(u,0,3.5))),()=>face(W/2,H*.68,.78,{brow:.8,smile:-8,py:8,mouthO:u>.2&&u<2.6?.18+.2*Math.abs(Math.sin(u*8)):0}));
  s2bBubble(W/2,580,880,200,seg(u,.2,.5),'EU ESCONDI POR|VERGONHA. DESCULPA.','#e2683c',-60);
  letterIn(u);
});
// 34. silêncio. o Lucas olha pro chão (3936–3939.5)
scene(3936,3939.5,(t)=>{const u=t-3936;s10BG(['#14204a','#24357a','#0d1534'],'rgba(140,170,255,A)',.22);
  CAM(W/2,H*.56,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>luFace(W/2,H*.66,.78,{smile:-8,brow:.3,py:lerp(0,28,seg(u,.3,1)),open:.85}));
  s10Pop(u,.3,330,'SILÊNCIO... 😶','#fff',96,18);
  letterIn(u);
});
// 35. "Por que você não me contou?" (3940–3943.5)
scene(3940,3943.5,(t)=>{const u=t-3940;s10BG(['#1f4a3c','#2c6c5b','#163a2e'],'rgba(255,210,150,A)',.22);
  CAM(W/2,H*.55,lerp(1.06,1.0,easeOut(seg(u,0,1))),()=>luFace(W/2,H*.66,.78,{smile:-10,brow:-.3,px:-6,mouthO:u>.2&&u<2.4?.18+.2*Math.abs(Math.sin(u*8)):0}));
  s2bBubble(W/2,560,800,200,seg(u,.2,.5),'POR QUE VOCÊ|NÃO ME CONTOU?','#2c6c5b',-60);
  letterIn(u);
});
// 36. "Porque eu tinha medo de perder você." (3944–3947.5)
scene(3944,3947.5,(t)=>{const u=t-3944;s10BG(['#3a2050','#5a3a6a','#ff9a6a'],'rgba(255,220,180,A)',.3);
  CAM(W/2,H*.56,lerp(1.0,1.08,easeIO(seg(u,0,3.5))),()=>face(W/2,H*.68,.78,{brow:.7,smile:-2,mouthO:u>.2&&u<2.6?.18+.2*Math.abs(Math.sin(u*8)):0}));
  s2bBubble(W/2,580,900,200,seg(u,.2,.5),'PORQUE EU TINHA MEDO|DE PERDER VOCÊ.','#e2683c',-60);
  letterIn(u);
});
// 37. o Lucas respira fundo... e sorri (3948–3951.5)
scene(3948,3951.5,(t)=>{const u=t-3948;s10BG(['#ff9a6a','#ffc48a','#ffe0b0'],'rgba(255,250,220,A)',.4);
  const br=1+.03*Math.sin(seg(u,.2,1.4)*Math.PI);CAM(W/2,H*.56,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.66);ctx.scale(br,br);luFace(0,0,.78,{mouthO:u>1.8?.12:0,smile:lerp(-6,60,seg(u,1.5,2.2)),brow:lerp(.4,.1,seg(u,1.5,2.2)),open:u<1.4?.7:1,py:lerp(10,0,seg(u,1.3,1.8))});ctx.restore()});
  s10Pop(u,.2,320,'RESPIRA FUNDO...','#fff',80,16);
  s10Pill(u,1.8,470,'...E SORRI 🙂','#2c6c5b','#fff',66);
  letterIn(u);
});
// 38. "Era só isso que eu queria. A verdade." (3952–3955.5)
scene(3952,3955.5,(t)=>{const u=t-3952;s10BG(['#1f4a3c','#2c6c5b','#163a2e'],'rgba(255,230,160,A)',.3);
  CAM(W/2,H*.55,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>luFace(W/2,H*.66,.78,{smile:16,brow:.2,mouthO:u>.2&&u<2.6?.16+.2*Math.abs(Math.sin(u*8)):0}));
  s2bBubble(W/2,560,900,200,seg(u,.2,.5),'ERA SÓ ISSO QUE EU|QUERIA. A VERDADE. 💚','#2c6c5b',-60);
  letterIn(u);
});
// 39. os dois se abraçam: amigos de novo! (3956–3959.5)
scene(3956,3959.5,(t)=>{const u=t-3956;s10BG(['#ff9a6a','#ffc48a','#ffe0b0'],'rgba(255,250,220,A)',.5);beams(W/2,200,1.57,5,1500,.08);
  const p=easeOut(seg(u,0,.8));CAM(W/2,H*.56,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{
    ctx.save();ctx.translate(lerp(820,690,p),1080);ctx.rotate(-.12*p);luFace(0,0,.5,{smile:20,open:u>1?.25:1});ctx.restore();
    ctx.save();ctx.translate(lerp(260,390,p),1080);ctx.rotate(.12*p);face(0,0,.5,{smile:20,open:u>1?.25:1});ctx.restore();
    // braço do Matheus por cima do ombro do Lucas (o outro braço fica fora do quadro)
    if(p>.6){ctx.save();ctx.globalAlpha=seg(p,.6,1);ctx.strokeStyle=OUT;ctx.lineWidth=96;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(520,1330);ctx.quadraticCurveTo(650,1230,790,1260);ctx.stroke();
      ctx.strokeStyle=P.hood;ctx.lineWidth=80;ctx.stroke();ctx.fillStyle=P.skin;ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.beginPath();ctx.ellipse(825,1268,44,36,.3,0,7);ctx.fill();ctx.stroke();ctx.restore()}
    const k=easeBack(seg(u,.9,1.2));if(k>0){ctx.save();ctx.translate(540,700);ctx.scale(k,k);txtC('💚🧡',0,0,'900 120px Inter','#fff');ctx.restore()}});
  s10Pill(u,1.2,330,'AMIGOS DE NOVO! 🎉','#16161c','#ffd84a',62);
  if(u>1.0){for(let i=0;i<30;i++){const r=rng(i+3956);const k=seg(u,1.0+r()*.3,3.4);ctx.save();ctx.fillStyle=['#ffd84a','#e2683c','#2fbf71','#2f55c8'][i%4];ctx.translate(r()*W,lerp(-40,H*.85,k)+Math.sin(u*4+i)*20);ctx.rotate(u*4+i);ctx.fillRect(-10,-6,20,12);ctx.restore()}}
});
SHAKE.push(3956.85);
// 40. o relógio da praça, parado na meia-noite, volta a andar (3960–3963.5)
scene(3960,3963.5,(t)=>{const u=t-3960;s10BG(['#2a1a50','#4a3a7a','#ff9a6a'],'rgba(255,230,180,A)',.35);
  const mm=Math.round(easeIO(seg(u,1.0,2.6))*(19*60+13));CAM(W/2,H*.5,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.fillStyle='#2b2d36';ctx.fillRect(520,1000,40,700);ctx.strokeRect(520,1000,40,700);
    if(u>1.0&&u<2.8){for(let i=0;i<14;i++){const a=i/14*6.283+u*2;const d=330+40*Math.sin(u*9+i);ctx.fillStyle='rgba(255,220,120,.85)';ctx.beginPath();ctx.arc(540+Math.cos(a)*d,800+Math.sin(a)*d,8,0,7);ctx.fill()}}
    clockFace(540,800,260,Math.floor(mm/60),mm%60)});
  if(u<1.0)s10Pill(u,.1,330,'PARADO: 00:00','#16161c','#fff',62);
  s10Pill(u,2.0,1480,'VOLTOU A ANDAR! ⏰','#2fbf71','#fff',62);
});
SHAKE.push(3961.0);
// 41. e todos os outros relógios também (3964–3967.5)
scene(3964,3967.5,(t)=>{const u=t-3964;ctx.fillStyle='rgba(20,16,40,1)';ctx.fillRect(0,0,W,H);glow(W/2,H*.5,900,'rgba(255,220,120,A)',.2);
  const L=['QUARTO','DIRETORA','LUCAS','RECEPÇÃO','PADARIA','PORTARIA','BIA','MÃE','PROFESSORA','AVÓ'];
  CAM(W/2,H*.5,lerp(1.0,1.05,seg(u,0,3.5)),()=>L.forEach((l,i)=>{const kk=easeBack(seg(u,.05+i*.06,.3+i*.06));if(kk<=0)return;const x=i<9?190+(i%3)*350:540,y=560+Math.floor(i/3)*260;const m=Math.floor(Math.max(0,u-.5)*240+i*7);ctx.save();ctx.translate(x,y);ctx.scale(kk,kk);clockFace(0,0,70,Math.floor(m/60),m%60);txtC(l,0,112,'900 28px Inter','#ffd84a',0);ctx.restore()}));
  s10Pop(u,.3,330,'TODOS OS RELÓGIOS! ⏰','#2fbf71',76,16);letterIn(u);
});
// 42. aí o celular vibra uma última vez (3968–3971.5)
scene(3968,3971.5,(t)=>{const u=t-3968;
  CAM(W/2,H*.55,lerp(1.0,1.06,easeIO(seg(u,0,3.5))),()=>{s10Plaza(u,{dusk:.42,hh:19,mm:14});const vb=u%1<.6?Math.sin(u*80)*10:0;ctx.save();ctx.translate(W/2+vb,1180);ctx.rotate(-.08);ctx.fillStyle='#0d0e12';ctx.strokeStyle=OUT;ctx.lineWidth=8;rr(-170,-300,340,600,40);ctx.fill();ctx.stroke();ctx.fillStyle='#7a5cff';rr(-148,-276,296,552,28);ctx.fill();txtC('M.',0,-20,'700 150px Caveat','#fff',0);txtC('nova mensagem',0,110,'800 34px Inter','#e8e0ff',0);ctx.restore()});
  if(u%1<.6){ctx.save();ctx.translate(W/2,330);const k=1+.06*Math.sin(u*30);ctx.scale(k,k);txtC('BZZZ! 📳',0,0,'900 100px Inter','#ffd84a',16);ctx.restore()}
  s10Pill(u,1.6,470,'UMA ÚLTIMA VEZ','#16161c','#fff',58);
  letterIn(u);
});
// 43. [carta] "Obrigado. Agora o meu futuro também mudou. — M." (3972–3975.5)
scene(3972,3975.5,(t)=>{const u=t-3972;s10BG(['#1a1430','#2e2450','#120e22'],'rgba(180,150,255,A)',.3);
  CAM(W/2,H*.5,lerp(1.15,1.3,easeIO(seg(u,0,3.5))),()=>{ctx.save();ctx.translate(W/2,H*.42);s10Msg(seg(u,.1,.4),'Obrigado. Agora o|meu futuro|também mudou.',u>2.2?'— M.':'');ctx.restore()});
  s10Pop(u,2.4,1480,'O FUTURO MUDOU! 🧡','#ffd84a',84,18);letterIn(u);
});
// 44. lá no fim da praça, alguém de moletom laranja vai embora (de costas, andando para o fundo) (3976–3979.5)
scene(3976,3979.5,(t)=>{const u=t-3976;const p=easeIO(seg(u,0,3.5));
  CAM(W/2,H*.55,lerp(1.0,1.04,p),()=>{s10Plaza(u,{dusk:.45,hh:19,mm:16});withP({hairL:'#b9b9b9',hood:'#c85a32',hoodS:'#9a4024'},()=>personFront(lerp(560,545,p),lerp(1300,1040,p),lerp(1.7,.8,p),{back:true,walk:u*8}))});
  s10Pill(u,.3,330,'QUEM É? 👀','#16161c','#ffd84a',66);
  if(u>1.6){ctx.save();ctx.globalAlpha=seg(u,1.6,2.0);ctx.fillStyle='#c8352b';ctx.font='700 110px Caveat';ctx.textAlign='center';ctx.fillText('M.?',W/2,520);ctx.restore()}
  letterIn(u);
});
// 45–46. a mensagem final: os dois amigos de costas, olhando o pôr do sol (3980–3987.5)
function s10Sunset(u,z){CAM(W/2,H*.55,z,()=>{ctx.fillStyle=lg(0,H,['#3a2a6a','#ff8a6a','#ffd08a']);ctx.fillRect(0,0,W,H);sun(W/2,1000,130,'#fff2c0','rgba(255,220,160,.6)');
  semBlur(()=>buildings(97,1100,80,300,'#7a4a6a','#ffd8a0',.06,0,1));ctx.fillStyle='#6a8a4a';ctx.fillRect(0,1080,W,H-1080);
  luFront(640,1500,2.5,{back:true});personFront(420,1500,2.5,{back:true})})}
scene(3980,3983.5,(t)=>{const u=t-3980;s10Sunset(u,lerp(1.0,1.05,easeIO(seg(u,0,3.5))));
  s10Pop(u,.2,330,'A GENTE ESCONDE AS COISAS','#fff',58,14);s10Pop(u,1.4,430,'PRA NÃO PERDER QUEM AMA','#ffd84a',58,14);letterIn(u)});
scene(3984,3987.5,(t)=>{const u=t-3984;s10Sunset(u,lerp(1.05,1.1,easeIO(seg(u,0,3.5))));
  s10Pop(u,.1,330,'MAS É A VERDADE','#fff',66,14);s10Pop(u,1.0,430,'QUE DEIXA QUEM A GENTE AMA','#ffd84a',52,14);s10Pop(u,1.8,520,'POR PERTO 💚🧡','#ffd84a',76,14)});
// 47. "Se você acordasse na vida de alguém, quem seria?" (3988–3991.5)
scene(3988,3991.5,(t)=>{const u=t-3988;s10BG(['#1a1430','#2e2450','#120e22'],'rgba(255,210,120,A)',.25);
  CAM(W/2,H*.5,lerp(1.0,1.04,seg(u,0,3.5)),()=>{for(let i=0;i<9;i++){if(i===4)continue;s10Port(i,S10G[i][0],S10G[i][1],135,seg(u,.05+i*.05,.3+i*.05))}
    const k=easeBack(seg(u,.4,.8));ctx.save();ctx.translate(540,960);ctx.scale(k*(1+.04*Math.sin(u*6)),k*(1+.04*Math.sin(u*6)));ctx.fillStyle='#ffd84a';ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.arc(0,0,140,0,7);ctx.fill();ctx.stroke();txtC('VOCÊ?',0,6,'900 66px Inter','#16161c',0);ctx.restore()});
  s10Pill(u,1.2,300,'NA VIDA DE QUEM? 👇','#c8352b','#fff',62);letterIn(u);
});
// 48. "Comenta! Fim da temporada. Amanhã, uma história nova." (3992–3995.5)
scene(3992,3995.5,(t)=>{const u=t-3992;s10BG(['#0c0a10','#1a1430','#0c0a10'],'rgba(255,190,90,A)',.3);
  CAM(W/2,H*.5,lerp(1.0,1.05,seg(u,0,3.5)),()=>{const circ=(x,fn,col)=>{ctx.save();ctx.beginPath();ctx.arc(x,1150,170,0,7);ctx.fillStyle=col;ctx.fill();ctx.clip();fn();ctx.restore();ctx.strokeStyle=OUT;ctx.lineWidth=8;ctx.beginPath();ctx.arc(x,1150,170,0,7);ctx.stroke()};
    circ(360,()=>face(360,1180,.32,{smile:18}),'#ffe0c8');circ(720,()=>luFace(720,1180,.32,{smile:18}),'#cfeee0')});
  s10Pop(u,.1,330,'COMENTA 👇','#ffd84a',110,18);
  s10Pill(u,.9,520,'FIM DA TEMPORADA 🎬','#fff','#16161c',62);
  s10Pill(u,1.9,1480,'AMANHÃ: HISTÓRIA NOVA 📱','#e2683c','#fff',54);
});
// FINAL: cartela da série (4000–4003.2)
scene(4000,4003.2,(t)=>{const u=t-4000;ctx.fillStyle='#07070c';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.42,50,W/2,H*.42,900);g.addColorStop(0,'rgba(255,190,90,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.3);ctx.scale(k,k);ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='900 92px Inter';ctx.fillText('E SE VOCÊ',0,0);ctx.fillText('ACORDASSE NA',0,110);ctx.fillStyle='#ffd84a';ctx.font='900 128px Inter';ctx.fillText('VIDA DE OUTRA',0,250);ctx.fillText('PESSOA?',0,390);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 52px "DejaVu Sans Mono", monospace';ctx.fillText('FIM DA TEMPORADA 2',W/2,H*.3+540);ctx.fillText('AMANHÃ 18H · NOVA TEMPORADA',W/2,H*.3+620);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.3+730);ctx.restore()});
