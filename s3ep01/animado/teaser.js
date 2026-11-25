// ===== TEASER TEMPORADA 3 =====
// window.LINES = [{a,b,txt}] (tempos das falas em s)
function tzStars(u,seed,n){const r=rng(seed);for(let i=0;i<n;i++){const x=r()*W,y=r()*H*.6,s=1+r()*2.5,tw=.4+.6*Math.abs(Math.sin(u*1.5+i));ctx.fillStyle=`rgba(255,255,255,${(.35*tw).toFixed(2)})`;ctx.beginPath();ctx.arc(x,y,s,0,7);ctx.fill()}}
function tzKicker(txt,y,k,col){if(k<=0)return;ctx.save();ctx.globalAlpha=Math.min(1,k*2);ctx.font='900 34px Inter';const w=ctx.measureText(txt).width+56;ctx.translate(W/2,y+(1-easeOut(Math.min(1,k)))*30);
  ctx.fillStyle=col||'#ff7a33';rr(-w/2,-30,w,60,30);ctx.fill();txtC(txt,0,2,'900 34px Inter','#fff');ctx.restore()}
function tzTitle(txt,y,k,size,col){if(k<=0)return;ctx.save();ctx.translate(W/2,y);const s=lerp(1.5,1,easeOut(Math.min(1,k*1.6)));ctx.scale(s,s);ctx.globalAlpha=Math.min(1,k*3);
  ctx.font=`700 ${size||110}px Oswald`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';ctx.lineWidth=16;ctx.strokeStyle='rgba(20,10,5,.9)';ctx.strokeText(txt,0,0);ctx.fillStyle=col||'#fff';ctx.fillText(txt,0,0);ctx.restore()}
function tzConfetti(u,seed,n){const r=rng(seed);const cols=['#ff7a33','#ffd23f','#3ddc97','#4f8cff','#ff4f8b','#ffffff'];for(let i=0;i<n;i++){const x0=r()*W,sp=380+r()*420,y=-60+((u*sp+r()*H*1.2)%(H+120)),x=x0+Math.sin(u*2+i)*40,a=u*(2+r()*4)+i;
  ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.fillStyle=cols[i%cols.length];ctx.fillRect(-9,-5*Math.abs(Math.cos(a*1.3))-1,18,10*Math.abs(Math.cos(a*1.3))+2);ctx.restore()}}
function tzRays(cx,cy,u,col,a){ctx.save();ctx.translate(cx,cy);ctx.rotate(u*.25);ctx.fillStyle=col;ctx.globalAlpha=a;for(let i=0;i<16;i++){ctx.rotate(Math.PI/8);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-90,-1800);ctx.lineTo(90,-1800);ctx.closePath();ctx.fill()}ctx.restore()}
function tzStudio(top,bot){ctx.fillStyle=lg(0,H,[top,bot]);ctx.fillRect(0,0,W,H);
  ctx.fillStyle='rgba(255,255,255,.04)';for(let x=0;x<W;x+=90)ctx.fillRect(x,0,2,H);
  // chão
  ctx.fillStyle='rgba(0,0,0,.25)';ctx.fillRect(0,1380,W,H-1380);ctx.fillStyle='rgba(255,255,255,.06)';ctx.fillRect(0,1378,W,4)}
function tzSpot(x,y,a){ctx.save();ctx.globalCompositeOperation='lighter';const g=ctx.createLinearGradient(0,0,0,y);g.addColorStop(0,`rgba(255,240,210,${a*.0})`);g.addColorStop(1,`rgba(255,240,210,${a*.22})`);ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(x-90,0);ctx.lineTo(x+90,0);ctx.lineTo(x+330,y);ctx.lineTo(x-330,y);ctx.closePath();ctx.fill();ctx.restore();
  softShadow(x,y,330,60,.0);glow(x,y,340,'rgba(255,230,190,A)',a*.35)}
function tzBlink(t,seed){const p=(t+seed)%3.3;return p<.12?1:0}
function tzPhone(cx,cy,s,rot,draw){ctx.save();ctx.translate(cx,cy);ctx.rotate(rot);ctx.scale(s,s);
  ctx.fillStyle='#14161f';rr(-230,-460,460,920,64);ctx.fill();ctx.strokeStyle='#3a3f52';ctx.lineWidth=8;ctx.stroke();
  ctx.save();rr(-208,-438,416,876,48);ctx.clip();draw();ctx.restore();
  ctx.fillStyle='#14161f';rr(-60,-430,120,30,15);ctx.fill();ctx.restore()}
function tzLock(u,hh){ctx.fillStyle=lg(-440,440,['#1b2a6b','#3a1f6e','#0e1433']);ctx.fillRect(-210,-440,420,880);
  glow(80,-200,380,'rgba(120,140,255,A)',.35);
  txtC(hh,0,-250,'700 120px Oswald','#ffffff');txtC('quarta-feira, 25 de novembro',0,-165,'600 24px Inter','rgba(255,255,255,.8)')}
function tzNotif(y,k,who,msg){if(k<=0)return;ctx.save();ctx.translate(0,y+(1-easeBack(Math.min(1,k)))*-60);ctx.globalAlpha=Math.min(1,k*2.5);
  ctx.fillStyle='rgba(255,255,255,.92)';rr(-190,-62,380,124,26);ctx.fill();
  ctx.fillStyle='#3ddc97';rr(-172,-44,60,60,16);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(-142,-16,18,15,0,0,7);ctx.fill();ctx.beginPath();ctx.moveTo(-152,-4);ctx.lineTo(-158,8);ctx.lineTo(-142,0);ctx.fill();
  ctx.textAlign='left';ctx.textBaseline='middle';ctx.font='800 24px Inter';ctx.fillStyle='#14161f';ctx.fillText(who,-98,-28);
  ctx.font='600 22px Inter';ctx.fillStyle='#555';ctx.fillText(msg,-98,8);ctx.font='600 18px Inter';ctx.fillStyle='#888';ctx.textAlign='right';ctx.fillText('agora',176,-28);ctx.restore()}
function tzRoom(u,clock){ctx.fillStyle=lg(0,H,['#0c1430','#141d42','#0b1026']);ctx.fillRect(0,0,W,H);
  // janela
  ctx.save();ctx.fillStyle='#070b1c';rr(600,330,380,520,14);ctx.fill();ctx.save();rr(600,330,380,520,14);ctx.clip();ctx.fillStyle=lg(330,850,['#0a1235','#1b2459']);ctx.fillRect(600,330,380,520);
  ctx.fillStyle='#f4f1d8';ctx.beginPath();ctx.arc(880,420,40,0,7);ctx.fill();ctx.fillStyle='#0f1840';ctx.beginPath();ctx.arc(866,410,36,0,7);ctx.fill();
  const r=rng(9);for(let i=0;i<14;i++){const bx=600+i*30,bh=80+r()*200;ctx.fillStyle='#090d22';ctx.fillRect(bx,850-bh,28,bh);for(let j=0;j<6;j++)if(r()<.4){ctx.fillStyle='rgba(255,210,120,.8)';ctx.fillRect(bx+6+(j%2)*10,850-bh+14+j*22,6,8)}}
  ctx.restore();ctx.strokeStyle='#2b3566';ctx.lineWidth=14;rr(600,330,380,520,14);ctx.stroke();ctx.beginPath();ctx.moveTo(790,330);ctx.lineTo(790,850);ctx.moveTo(600,590);ctx.lineTo(980,590);ctx.stroke();
  // cortina mexendo de leve
  ctx.fillStyle='rgba(90,110,190,.35)';ctx.beginPath();ctx.moveTo(580,310);ctx.quadraticCurveTo(620+Math.sin(u*1.3)*14,600,590+Math.sin(u*1.1)*10,880);ctx.lineTo(540,880);ctx.lineTo(540,310);ctx.closePath();ctx.fill();ctx.restore();
  // chão
  ctx.fillStyle='#0a0e22';ctx.fillRect(0,1380,W,H-1380);
  // cama
  ctx.fillStyle='#2a3160';rr(640,1120,440,260,24);ctx.fill();ctx.fillStyle='#e9e6f5';rr(700,1080,200,90,30);ctx.fill();ctx.fillStyle='#4b58a6';rr(640,1180,440,200,20);ctx.fill();
  // criado + relógio
  ctx.fillStyle='#3a2a20';rr(430,1180,170,200,10);ctx.fill();ctx.fillStyle='#22170f';ctx.fillRect(430,1270,170,6);
  ctx.fillStyle='#0b0b10';rr(450,1100,130,80,12);ctx.fill();txtC(clock,515,1142,'700 50px Oswald','#ff3b3b');glow(515,1140,140,'rgba(255,60,60,A)',.35);
  glow(820,520,420,'rgba(110,130,255,A)',.18);
}
function tzCaption(t){const L=window.LINES;if(!L)return;for(const l of L){if(t<l.a-.05||t>l.b+.15)continue;const k=seg(t,l.a-.05,l.a+.15),o=1-seg(t,l.b,l.b+.15);
  ctx.save();ctx.globalAlpha=Math.min(k,o);const words=l.txt.toUpperCase().split(' ');ctx.font='700 66px Oswald';
  // quebra em linhas de até ~880px
  const lines=[];let cur='';for(const w of words){const tt=cur?cur+' '+w:w;if(ctx.measureText(tt).width>880&&cur){lines.push(cur);cur=w}else cur=tt}lines.push(cur);
  lines.forEach((ln,i)=>{const y=1610+i*80-(lines.length-1)*40+(1-easeOut(k))*20;txtC(ln,W/2,y,'700 66px Oswald','#ffffff',14)});ctx.restore()}}

function TZ(t){const L=window.LINES;const st=i=>i===0?0:L[i].a-.12;const en=i=>i<L.length-1?L[i+1].a-.12:99;
  let i=0;for(let k=0;k<L.length;k++)if(t>=st(k))i=k;const a=st(i),b=Math.min(en(i),a+30),u=t-a,D=b-a,p=clamp(u/D);
  ctx.save();
  if(i===0){ // Matheus antigo
    tzStudio('#1a2140','#0c1026');tzSpot(540,1390,1);dust(t,3,40,'rgba(255,230,190,A)');
    const z=1+.04*p;ctx.translate(540,1000);ctx.scale(z,z);ctx.translate(-540,-1000);
    personFront(540,1240,2.6,{smile:24,look:Math.sin(t*1.3)*.15,eye:tzBlink(t,.4)?0.02:1,up:0});
    ctx.restore();ctx.save();
    tzKicker('MODELO ANTIGO',330,seg(u,.15,.5),'#5a6491');tzTitle('ESSE É VOCÊ',450,seg(u,.05,.4),120);
  }
  else if(i===1){ // transformação
    tzStudio('#1a2140','#0c1026');const flash=.66;
    const g=seg(u/D,0,flash);tzSpot(540,1390,1-g*.5);
    tzRays(540,980,t*2,'rgba(255,190,120,1)',.10*g+(u/D>flash?.22*(1-seg(u/D,flash,1)):0));
    glow(540,980,300+500*g,'rgba(255,170,90,A)',.25+.5*g);
    // partículas convergindo
    {const r=rng(21);for(let k=0;k<60;k++){const ang=r()*7,d0=500+r()*500,ph=(r()+u*.9)%1,d=d0*(1-ph)*(1-g*.3);ctx.fillStyle=`rgba(255,${200+r()*55|0},${140+r()*80|0},${(ph*.9).toFixed(2)})`;ctx.beginPath();ctx.arc(540+Math.cos(ang)*d,980+Math.sin(ang)*d,2+r()*4,0,7);ctx.fill()}}
    const q=u/D;let phi=q<flash?Math.pow(q/flash,2.2)*Math.PI*7:Math.PI*7+easeOut(seg(q,flash,1))*Math.PI*1;const sx=Math.cos(phi);const lift=-60*Math.sin(Math.PI*clamp(q/1.0));
    ctx.save();ctx.translate(540,1240+lift);ctx.scale(Math.abs(sx)<.04?.04:sx,1);ctx.translate(-540,-1240);
    if(q<flash){ctx.filter=`brightness(${(1+1.3*g).toFixed(2)}) saturate(${(1-.4*g).toFixed(2)})`;personFront(540,1240,2.6,{smile:10,eye:1,up:0});ctx.filter='none'}
    else matheus5(540,1390,1.62,{expr:'surpreso',t,armL:[30,-20,'open'],armR:[30,-20,'open']});
    ctx.restore();
    // anéis + flash
    const fq=seg(q,flash-.03,flash+.12);if(fq>0&&fq<1){ctx.save();ctx.strokeStyle=`rgba(255,240,220,${1-fq})`;ctx.lineWidth=30*(1-fq);ctx.beginPath();ctx.arc(540,980,100+900*fq,0,7);ctx.stroke();ctx.restore()}
    const fl=Math.max(0,1-Math.abs(q-flash)/.06);if(fl>0){ctx.fillStyle=`rgba(255,250,240,${fl})`;ctx.fillRect(0,0,W,H)}
    {const r=rng(77);const bq=seg(q,flash,1);if(bq>0)for(let k=0;k<70;k++){const ang=r()*7,d=easeOut(bq)*(300+r()*600);ctx.fillStyle=`rgba(255,${180+r()*75|0},${80+r()*120|0},${(1-bq).toFixed(2)})`;ctx.beginPath();ctx.arc(540+Math.cos(ang)*d,980+Math.sin(ang)*d,3+r()*5,0,7);ctx.fill()}}
    tzKicker('REMODELANDO...',330,seg(u,.1,.4)*(1-seg(q,flash-.05,flash)),'#ff7a33');
  }
  else if(i===2){ // novo Matheus
    ctx.fillStyle=lg(0,H,['#ffb36b','#ff7a33','#e0541c']);ctx.fillRect(0,0,W,H);tzRays(540,980,t,'rgba(255,255,255,1)',.12);glow(540,1000,600,'rgba(255,240,200,A)',.35);
    ctx.fillStyle='rgba(0,0,0,.12)';ctx.fillRect(0,1390,W,H-1390);
    const jump=Math.abs(Math.sin(Math.min(u,1.2)*Math.PI/1.2))*-50*(u<1.2?1:0);
    matheus5(540,1390,1.62,Object.assign({},M5POSES.comemorando,{t,lift:jump,blink:tzBlink(t,1)}));
    tzConfetti(u,5,90);
    tzKicker('TEMPORADA 3',330,seg(u,.1,.4),'#2b1b12');tzTitle('NOVO MATHEUS',450,seg(u,0,.3),124);
  }
  else if(i===3){ // quarto à noite, relógio vira 23:59
    const z=1+.05*p;ctx.translate(540,1100);ctx.scale(z,z);ctx.translate(-540,-1100);
    tzRoom(t,u<D*.55?'23:58':'23:59');
    matheus5(250,1390,1.3,{expr:'pensativo',t,armR:[25,-150,'fist'],armL:[30,-75,'rest'],head:8,look:1,blink:tzBlink(t,2)});
    // flip do relógio
    const f=seg(u,D*.55,D*.55+.25);if(f>0&&f<1){ctx.fillStyle=`rgba(255,80,80,${(1-f)*.5})`;ctx.beginPath();ctx.arc(515,1140,90*f+40,0,7);ctx.fill()}
    ctx.restore();ctx.save();tzKicker('TODA NOITE',330,seg(u,.1,.4),'#4f5bd5');
  }
  else if(i===4){ // celular vibra
    ctx.fillStyle='#070914';ctx.fillRect(0,0,W,H);glow(540,900,700,'rgba(90,110,255,A)',.35);
    const buzz=u>.35?Math.sin(u*80)*6*(1-seg(u,.35,1.2)):0;
    tzPhone(540+buzz,900,1.25,-.03,()=>{tzLock(u,'23:59');tzNotif(-30,seg(u,.35,.75),'Nova mensagem','Toque para ler')});
    // ondas de vibração
    if(u>.35){const q=(u*2.2)%1;ctx.strokeStyle=`rgba(255,255,255,${(.35*(1-q)).toFixed(2)})`;ctx.lineWidth=6;for(const sd of[-1,1]){ctx.beginPath();ctx.arc(540+sd*330,900,60+q*80,sd<0?Math.PI*.7:-Math.PI*.3,sd<0?Math.PI*1.3:Math.PI*.3);ctx.stroke()}}
  }
  else if(i===5){ // rosto surpreso iluminado
    ctx.fillStyle=lg(0,H,['#0a0f26','#11173a']);ctx.fillRect(0,0,W,H);tzStars(t,4,60);
    const FU=15.25-a;const punch=u>FU?1+.08*easeOut(seg(u,FU,FU+.3)):1;ctx.translate(540,900);ctx.scale(punch,punch);ctx.translate(-540,-900);
    matheus5(540,2150,3.1,{expr:'surpreso',t,blink:0});
    ctx.save();ctx.globalCompositeOperation='lighter';const g=ctx.createLinearGradient(0,1900,0,500);g.addColorStop(0,'rgba(80,110,255,.45)');g.addColorStop(1,'rgba(80,110,255,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);ctx.restore();
    ctx.restore();ctx.save();ctx.translate(540,250);ctx.scale(1.35,1.35);tzNotif(0,seg(u,.05,.35),'VOCÊ (do futuro)','1 mensagem');ctx.restore();ctx.save();
    if(u>FU)tzTitle('DO FUTURO',450,seg(u,FU,FU+.3),120,'#7fd3ff');
  }
  else if(i===6){ // conversa no celular
    ctx.fillStyle='#070914';ctx.fillRect(0,0,W,H);glow(540,900,700,'rgba(90,110,255,A)',.3);
    const gl=(Math.floor(t*12)%17===0)?8:0;
    tzPhone(540+gl,900,1.3,0,()=>{ctx.fillStyle='#0f1220';ctx.fillRect(-210,-440,420,880);
      ctx.fillStyle='#1b2034';ctx.fillRect(-210,-440,420,130);ctx.fillStyle='#ff7a33';ctx.beginPath();ctx.arc(-150,-360,34,0,7);ctx.fill();txtC('?',-150,-358,'900 38px Inter','#fff');
      ctx.textAlign='left';ctx.font='800 26px Inter';ctx.fillStyle='#fff';ctx.fillText('Você',-100,-372);ctx.font='600 19px Inter';ctx.fillStyle='#7fd3ff';ctx.fillText('do futuro • online',-100,-340);
      const typ=u<.45;
      if(typ){ctx.fillStyle='#262c46';rr(-180,-240,120,64,30);ctx.fill();for(let k=0;k<3;k++){ctx.fillStyle=`rgba(255,255,255,${.4+.6*Math.max(0,Math.sin(t*9-k))})`;ctx.beginPath();ctx.arc(-148+k*28,-208,8,0,7);ctx.fill()}}
      else{const k=seg(u,.45,.7);ctx.save();ctx.globalAlpha=k;ctx.translate(0,(1-easeBack(k))*30);ctx.fillStyle='#262c46';rr(-180,-250,340,140,30);ctx.fill();
        ctx.font='700 34px Inter';ctx.fillStyle='#fff';ctx.textAlign='left';ctx.fillText('Não abre a porta',-150,-200);ctx.fillText('amanhã.',-150,-155);ctx.font='600 18px Inter';ctx.fillStyle='rgba(255,255,255,.5)';ctx.fillText('23:59',90,-125);ctx.restore()}
    });
    if(gl){ctx.fillStyle='rgba(255,60,120,.12)';ctx.fillRect(0,780,W,40)}
  }
  else if(i===7){ // obedece ou desafia
    ctx.fillStyle='#2bb673';ctx.fillRect(0,0,W/2,H);ctx.fillStyle='#e0463d';ctx.fillRect(W/2,0,W/2,H);
    ctx.fillStyle='rgba(255,255,255,.08)';for(let y=-200;y<H;y+=80){ctx.fillRect(0,y+(t*60)%80,W/2,30)}for(let y=-200;y<H;y+=80){ctx.fillRect(W/2,y-(t*60)%80,W/2,30)}
    ctx.fillStyle='rgba(0,0,0,.18)';ctx.fillRect(0,1390,W,H-1390);
    ctx.save();ctx.translate(W/2,0);ctx.fillStyle='#fff';ctx.fillRect(-5,0,10,H);ctx.restore();
    const lk=Math.sin(u*3.2)>0?-1:1;matheus5(540,1390,1.5,{expr:'desconfiado',t,look:lk,head:lk*-6,armL:[14,-40,'rest'],armR:[14,-40,'rest'],blink:tzBlink(t,3)});
    const ka=seg(u,.2,.5),kb=seg(u,19.95-a,20.25-a);
    ctx.save();ctx.translate(270,400);ctx.rotate(-.05);tzTitleAt('OBEDECE',ka);ctx.restore();ctx.save();ctx.translate(810,400);ctx.rotate(.05);tzTitleAt('DESAFIA',kb);ctx.restore();
    ctx.fillStyle='#14161f';ctx.beginPath();ctx.arc(540,420,58,0,7);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=6;ctx.stroke();txtC('OU',540,424,'700 56px Oswald','#fff');
  }
  else { // cartão final
    ctx.fillStyle=lg(0,H,['#0b0f26','#1a1446','#2b0f3a']);ctx.fillRect(0,0,W,H);tzStars(t,8,90);glow(540,1250,600,'rgba(255,122,51,A)',.25);
    ctx.fillStyle='rgba(0,0,0,.25)';ctx.fillRect(0,1390,W,H-1390);
    const wave=Math.sin(t*7)*18;matheus5(540,1390,1.25,Object.assign({},M5POSES.acenando,{t,armR:[150+wave,30,'open'],blink:tzBlink(t,5)}));
    tzKicker('E SE O SEU CELULAR RECEBESSE',230,seg(u,.0,.3),'#4f5bd5');tzKicker('MENSAGENS DO FUTURO?',305,seg(u,.1,.4),'#4f5bd5');
    tzTitle('TEMPORADA 3',450,seg(u,.15,.45),140,'#ff7a33');tzTitle('EM BREVE',580,seg(u,.35,.65),90,'#fff');
  }
  ctx.restore();
  vignette(.45);
  tzCaption(t);
}
function tzTitleAt(txt,k){if(k<=0)return;const s=lerp(1.6,1,easeOut(Math.min(1,k*1.6)));ctx.scale(s,s);ctx.globalAlpha=Math.min(1,k*3);ctx.font='700 84px Oswald';ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';ctx.lineWidth=16;ctx.strokeStyle='rgba(20,10,5,.9)';ctx.strokeText(txt,0,0);ctx.fillStyle='#fff';ctx.fillText(txt,0,0)}
