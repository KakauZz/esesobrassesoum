// carrossel panorâmico: 5 slides emendados (mundo 5400 x 1350)
const PW=1080,PN=5,PHt=1350;
function pArrowPath(){ // pontos do caminho da seta no mundo
  return [[440,820],[700,900],[1000,1000],[1300,860],[1600,700],[1900,950],[2200,1175],[2600,1120],[2900,900],[3150,700],[3500,760],[3900,800],[4200,760],[4400,720],[4520,700]]}
function pSmooth(P){ctx.beginPath();ctx.moveTo(P[0][0],P[0][1]);for(let i=1;i<P.length-1;i++){const mx=(P[i][0]+P[i+1][0])/2,my=(P[i][1]+P[i+1][1])/2;ctx.quadraticCurveTo(P[i][0],P[i][1],mx,my)}const L=P[P.length-1];ctx.lineTo(L[0],L[1])}
function PANO(i){ctx.setTransform(1,0,0,1,0,0);ctx.save();ctx.translate(-i*PW,0);
  // céu contínuo
  const g=ctx.createLinearGradient(0,0,PW*PN,0);g.addColorStop(0,'#0e1233');g.addColorStop(.5,'#2a1f6e');g.addColorStop(.8,'#5b2a9e');g.addColorStop(1,'#ff7a33');ctx.fillStyle=g;ctx.fillRect(0,0,PW*PN,PHt);
  const r=rng(9);for(let k=0;k<260;k++){const x=r()*PW*PN,y=r()*700,s=1+r()*2.2;ctx.fillStyle=`rgba(255,255,255,${(.2+.5*r()).toFixed(2)})`;ctx.beginPath();ctx.arc(x,y,s,0,7);ctx.fill()}
  // skyline contínuo atravessando todos os slides
  const r2=rng(4);let x=0;while(x<PW*PN){const w=90+r2()*140,h=220+r2()*420;ctx.fillStyle='#161a3f';ctx.fillRect(x,PHt-h,w-8,h);
    for(let yy=PHt-h+30;yy<PHt-40;yy+=46)for(let xx=x+18;xx<x+w-30;xx+=34)if(r2()<.33){ctx.fillStyle=r2()<.5?'#ffd27a':'#7fd3ff';ctx.globalAlpha=.75;ctx.fillRect(xx,yy,14,20);ctx.globalAlpha=1}x+=w}
  ctx.fillStyle='rgba(10,12,30,.55)';ctx.fillRect(0,PHt-120,PW*PN,120);
  // ---- SLIDE 1 ----
  tzKicker('PSIU... VEM COMIGO',140,1,'#ff7a33');
  ctx.save();ctx.translate(0,0);cT(['TEM COISA','NOVA NO','PERFIL...'],300,110,['#fff','#fff','#ffd23f']);ctx.restore();
  matheus5(300,1150,.8,{expr:'feliz',t:.3,blink:0,armR:[80,-5,'point']});
  ctx.save();ctx.fillStyle='#ffd23f';rr(700,1240,330,70,35);ctx.fill();ctx.restore();txtC('ARRASTA →',865,1276,'900 32px Inter','#1b1440');
  // ---- SLIDE 2: Matheus andando seguindo a seta, cruzando a emenda 2|3 ----
  txtC('SEGUE A SETA',1620,260,'700 92px Oswald','#fff');txtC('👀',1620,380,'80px Inter','#fff');
  matheusView(2120,1150,1.0,'side',{t:.3,walk:1.2,stride:1,expr:'feliz'});
  // ---- SLIDE 3: celular gigante atravessando a emenda 3|4 ----
  txtC('UMA MENSAGEM...',2700,200,'700 80px Oswald','#7fd3ff');
  tzPhone(2960,640,.85,.06,()=>{tzLock(0,'18:00');tzNotif(-30,1,'Você (do futuro)','Vai no perfil. AGORA.')});glow(2960,640,320,'rgba(150,180,255,A)',.22);
  // ---- SLIDE 4: letreiro neon atravessando a emenda 4|5 ----
  ctx.save();ctx.translate(4320,300);ctx.rotate(-.04);ctx.fillStyle='#1b1440';rr(-520,-110,1040,220,40);ctx.fill();ctx.strokeStyle='#ff7a33';ctx.lineWidth=10;ctx.shadowColor='#ff7a33';ctx.shadowBlur=40;rr(-520,-110,1040,220,40);ctx.stroke();ctx.shadowBlur=0;ctx.restore();
  ctx.save();ctx.translate(4320,300);ctx.rotate(-.04);ctx.shadowColor='#ffd23f';ctx.shadowBlur=30;txtC('TEMPORADA NOVA!',0,6,'700 120px Oswald','#ffd23f');ctx.restore();
  txtC('JÁ ESTREOU! EP. 1 NO AR',3780,560,'800 44px Inter','#ffd23f');
  // ---- SLIDE 5: cartão do perfil (thumbs coladas depois no PIL) ----
  ctx.save();ctx.fillStyle='rgba(255,255,255,.96)';rr(4380,480,960,760,40);ctx.fill();ctx.restore();
  ctx.fillStyle='#ff7a33';ctx.beginPath();ctx.arc(4500,600,84,0,7);ctx.fill();
  txtC('@matheusvoce.decide',4840,570,'900 36px Inter','#14161f');txtC('Série interativa • você decide',4840,620,'600 28px Inter','#666');
  ctx.fillStyle='#ff2d55';rr(4610,660,380,64,16);ctx.fill();txtC('SEGUIR',4800,694,'900 32px Inter','#fff');
  txtC('OLHA LÁ 👇 TEMPORADA 3 NO PERFIL',4860,1290,'900 34px Inter','#fff');
  // SETA tracejada contínua
  const P=pArrowPath();ctx.save();ctx.lineCap='round';ctx.lineJoin='round';
  ctx.strokeStyle='rgba(255,210,63,.25)';ctx.lineWidth=46;pSmooth(P);ctx.stroke();
  ctx.strokeStyle='#ffd23f';ctx.lineWidth=18;ctx.setLineDash([46,30]);pSmooth(P);ctx.stroke();ctx.setLineDash([]);
  const A=P[P.length-1],B=P[P.length-2],an=Math.atan2(A[1]-B[1],A[0]-B[0]);ctx.translate(A[0],A[1]);ctx.rotate(an);ctx.fillStyle='#ffd23f';ctx.beginPath();ctx.moveTo(70,0);ctx.lineTo(-30,-56);ctx.lineTo(-10,0);ctx.lineTo(-30,56);ctx.closePath();ctx.fill();ctx.restore();
  ctx.restore()}
