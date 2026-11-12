// ===================== EP. 7 — O QUARTO =====================
// (vencedora do EP. 6: B — seguir as pegadas da criança). Faixa 1000–1099.
// Um mistério só: pra onde as pegadas levam? (resposta: pro quarto onde ele acordou no dia 1)
// Elementos novos (2): a foto do dia 1 deixada no travesseiro com "VOLTA AQUI NO DIA 60" no verso, e o armário (onde a criança se esconde).
// Retomados: pegadas de dois tênis (EP6), capa amarela (EP6), relógio voltando a andar (EP6: 07:13), foto "dia 1 — dormindo" (EP3), flash no 13º andar (EP6).
// Ambiente (não falado): a chuva para de forma visível na frente do prédio (gotas no vidro depois), o gato laranja de coleira azul dormindo no muro.

// pegada molhada de tênis, mais brilhante (piso claro de dentro de casa)
function e7Print(x,y,s,rot,a){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);ctx.globalAlpha=a??1;
  ctx.fillStyle='rgba(150,180,235,.42)';ctx.beginPath();ctx.ellipse(0,-22,34,50,0,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(0,46,27,30,0,0,7);ctx.fill();
  ctx.fillStyle='rgba(225,238,255,.5)';ctx.beginPath();ctx.ellipse(-8,-34,12,20,0,0,7);ctx.fill();
  ctx.strokeStyle='rgba(10,12,20,.5)';ctx.lineWidth=5;for(let i=-3;i<=3;i++){ctx.beginPath();ctx.moveTo(-26,-24+i*14);ctx.lineTo(26,-24+i*14);ctx.stroke()}
  ctx.restore()}

// porta do apartamento dele (vista de frente), entreaberta: ab = 0 fechada .. 1 bem aberta
function e7Door(x,y,w,h,ab,num){ctx.save();ctx.strokeStyle=OUT;ctx.lineWidth=6;
  ctx.fillStyle='#3a2a20';ctx.fillRect(x-14,y-14,w+28,h+14);ctx.strokeRect(x-14,y-14,w+28,h+14);
  ctx.fillStyle='#050508';ctx.fillRect(x,y,w,h); // escuro lá dentro
  const dw=w*(1-ab*.55);ctx.fillStyle='#6b4630';ctx.fillRect(x,y,dw,h);ctx.strokeRect(x,y,dw,h);
  ctx.fillStyle='rgba(255,255,255,.06)';ctx.fillRect(x+dw*.12,y+h*.06,dw*.76,h*.38);ctx.fillRect(x+dw*.12,y+h*.52,dw*.76,h*.4);
  ctx.strokeStyle='rgba(0,0,0,.3)';ctx.lineWidth=4;ctx.strokeRect(x+dw*.12,y+h*.06,dw*.76,h*.38);ctx.strokeRect(x+dw*.12,y+h*.52,dw*.76,h*.4);
  ctx.fillStyle='#d8b26a';ctx.beginPath();ctx.arc(x+dw-w*.1,y+h*.52,w*.035,0,7);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=3;ctx.stroke();
  if(num){ctx.fillStyle='#d8b26a';ctx.font=`900 ${Math.round(w*.13)}px Inter`;ctx.textAlign='center';ctx.fillText(num,x+dw/2,y+h*.04+w*.12);ctx.textAlign='left'}
  ctx.restore()}

// corredor do prédio dele em perspectiva, com a porta dele no fundo
function e7Corridor(u,ab){ctx.fillStyle='#14131c';ctx.fillRect(0,0,W,H);
  const vx=540,top=620,bot=1380;
  ctx.fillStyle='#2b2a38';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(330,top);ctx.lineTo(330,bot);ctx.lineTo(0,H);ctx.closePath();ctx.fill();
  ctx.fillStyle='#262532';ctx.beginPath();ctx.moveTo(W,0);ctx.lineTo(750,top);ctx.lineTo(750,bot);ctx.lineTo(W,H);ctx.closePath();ctx.fill();
  ctx.fillStyle='#1d1c27';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(W,0);ctx.lineTo(750,top);ctx.lineTo(330,top);ctx.closePath();ctx.fill();
  ctx.fillStyle='#4a4038';ctx.beginPath();ctx.moveTo(0,H);ctx.lineTo(330,bot);ctx.lineTo(750,bot);ctx.lineTo(W,H);ctx.closePath();ctx.fill();
  // lajotas do piso convergindo
  ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=3;for(let i=1;i<9;i++){const k=Math.pow(i/9,1.7),y=lerp(bot,H,k),xl=lerp(330,0,k),xr=lerp(750,W,k);ctx.beginPath();ctx.moveTo(xl,y);ctx.lineTo(xr,y);ctx.stroke()}
  for(let i=-3;i<=3;i++){ctx.beginPath();ctx.moveTo(540+i*60,bot);ctx.lineTo(540+i*230,H);ctx.stroke()}
  // portas dos vizinhos nas laterais (fechadas)
  for(const [k,side] of [[.25,-1],[.55,-1],[.3,1],[.62,1]]){const xa=side<0?lerp(0,330,k):lerp(W,750,k),xb=side<0?lerp(0,330,k+.18):lerp(W,750,k+.18),ya=lerp(0,top,k),yb=lerp(0,top,k+.18),ba=lerp(H,bot,k),bb=lerp(H,bot,k+.18);
    ctx.fillStyle='#3d2c22';ctx.beginPath();ctx.moveTo(xa,lerp(ya,ba,.25));ctx.lineTo(xb,lerp(yb,bb,.25));ctx.lineTo(xb,bb);ctx.lineTo(xa,ba);ctx.closePath();ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=4;ctx.stroke()}
  // luz fraca de emergência no teto
  const g=ctx.createRadialGradient(540,640,10,540,640,520);g.addColorStop(0,'rgba(140,170,255,.22)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  e7Door(400,top+40,280,bot-top-40,ab,'');
  // pegadas molhadas indo até a porta e entrando
  for(let i=0;i<8;i++){const k=i/8,y=lerp(1860,bot+10,Math.pow(k,.8)),s=lerp(.85,.2,k);e7Print(540+(i%2?22:-22)*lerp(1,.35,k),y,s,0,.9)}
}

// o quarto dele, à noite (mesma geometria do quarto do EP. 1: janela à direita, relógio de parede, cama à esquerda)
function e7Bedroom(u,o){o=o||{};
  ctx.fillStyle=lg(0,H,['#151628','#1e1f36','#10101c']);ctx.fillRect(0,0,W,H);
  // janela: noite, cidade escura, gotas no vidro (a chuva já parou)
  ctx.fillStyle=lg(380,940,['#0d1430','#1a2348']);ctx.fillRect(620,380,340,560);
  ctx.save();ctx.beginPath();ctx.rect(620,380,340,560);ctx.clip();
  ctx.fillStyle='#0a0d1e';for(let i=0;i<6;i++){const bx=620+i*62,bh=160+((i*53)%4)*70;ctx.fillRect(bx,940-bh,56,bh)}
  // prédio alto lá no fundo (o do 13º andar)
  ctx.fillStyle='#0c1026';ctx.fillRect(840,520,70,420);
  const fl=o.flash||0;ctx.fillStyle=o.win13?'rgba(255,214,130,.95)':'rgba(255,255,255,.05)';ctx.fillRect(866,600,14,18);
  if(fl>0){const g=ctx.createRadialGradient(873,609,2,873,609,90);g.addColorStop(0,`rgba(255,255,255,${fl})`);g.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=g;ctx.fillRect(780,520,190,190)}
  const r=rng(7);ctx.fillStyle='rgba(200,220,255,.45)';for(let i=0;i<22;i++){const x=630+r()*320,y0=390+r()*540,k=((u*.15+r())%1);ctx.beginPath();ctx.ellipse(x,y0+k*30,4,6,0,0,7);ctx.fill()}
  ctx.restore();
  ctx.fillStyle='#2b2638';ctx.fillRect(782,380,16,560);ctx.fillRect(620,650,340,16);ctx.strokeStyle='#2b2638';ctx.lineWidth=26;ctx.strokeRect(620,380,340,560);
  ctx.fillStyle='#5a2236';ctx.fillRect(590,360,46,600);ctx.fillRect(944,360,46,600);
  // luz da lua entrando
  ctx.save();ctx.globalAlpha=.10;ctx.fillStyle='#bcd0ff';ctx.beginPath();ctx.moveTo(620,380);ctx.lineTo(960,380);ctx.lineTo(560,1700);ctx.lineTo(-200,1700);ctx.fill();ctx.restore();
  // pôster e relógio de parede (07:13 — o tempo voltou a andar aqui também)
  ctx.fillStyle='#3a3452';ctx.fillRect(120,520,220,300);ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.strokeRect(120,520,220,300);ctx.fillStyle='#8a4a30';ctx.beginPath();ctx.arc(230,640,60,0,7);ctx.fill();
  clockFace(440,520,58,7,o.mm??13,false);
  // estante
  ctx.fillStyle='#2e2440';ctx.fillRect(80,900,360,18);ctx.fillRect(80,1000,360,18);
  [['#8a4a30',40],['#34507a',30],['#8a7a32',36],['#2f6a44',28],['#8a857a',34]].forEach(([c,h],i)=>{ctx.fillStyle=c;ctx.fillRect(100+i*34,900-h*2,26,h*2)});
  ctx.fillStyle='#120f1a';ctx.fillRect(0,1380,W,540);
  // cama arrumada (vazia)
  ctx.strokeStyle=OUT;ctx.lineWidth=6;
  ctx.fillStyle='#3e2a20';rr(48,990,74,440,22);ctx.fill();ctx.stroke();
  ctx.fillStyle='#3e2a20';rr(100,1270,730,140,18);ctx.fill();ctx.stroke();
  ctx.fillStyle='#9a96a8';rr(100,1205,730,80,24);ctx.fill();ctx.stroke();
  ctx.fillStyle='#b8b4c4';rr(112,1140,175,88,40);ctx.fill();ctx.stroke(); // travesseiro
  ctx.fillStyle='#2f4a7a';ctx.beginPath();ctx.moveTo(300,1200);ctx.quadraticCurveTo(560,1185,830,1200);ctx.lineTo(838,1330);ctx.quadraticCurveTo(570,1350,300,1330);ctx.closePath();ctx.fill();ctx.stroke();
  // a foto no travesseiro
  if(o.photo){ctx.save();ctx.translate(200,1178);ctx.rotate(-.12);ctx.fillStyle='#f3efe6';ctx.fillRect(-34,-40,68,80);ctx.fillStyle='#3a3550';ctx.fillRect(-28,-34,56,56);ctx.restore()}
  // criado-mudo
  ctx.fillStyle='#3a2a20';rr(850,1190,150,230,12);ctx.fill();ctx.stroke();
  // pegadas molhadas no chão indo até a cama
  if(o.prints)for(let i=0;i<6;i++){const k=i/6;e7Print(lerp(980,420,k)+(i%2?16:-16),lerp(1860,1440,k),lerp(.55,.32,k),-1.05,.8)}
}

// o armário do quarto (contraplano: a parede oposta à janela). op = abertura da porta direita
function e7Wardrobe(u,op,cape){ctx.fillStyle=lg(0,H,['#141526','#1b1c30','#0f0f1a']);ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=.08;ctx.fillStyle='#bcd0ff';ctx.beginPath();ctx.moveTo(1080,300);ctx.lineTo(1080,900);ctx.lineTo(300,1700);ctx.lineTo(700,1700);ctx.fill();ctx.restore();
  ctx.fillStyle='#120f1a';ctx.fillRect(0,1500,W,420);
  const x=250,y=380,w=580,h=1140;ctx.strokeStyle=OUT;ctx.lineWidth=7;
  ctx.fillStyle='#4a3424';ctx.fillRect(x-20,y-30,w+40,h+30);ctx.strokeRect(x-20,y-30,w+40,h+30);
  ctx.fillStyle='#050508';ctx.fillRect(x+w/2,y,w/2,h);
  // lá dentro: a pontinha de uma capa amarela
  if(cape>0){ctx.save();ctx.beginPath();ctx.rect(x+w/2,y,w/2,h);ctx.clip();ctx.globalAlpha=cape;ctx.fillStyle='#f2c230';ctx.beginPath();ctx.moveTo(x+w/2+4,y+h);ctx.quadraticCurveTo(x+w/2+2,y+h-220,x+w/2+20,y+h-330);ctx.lineTo(x+w/2+66,y+h-310);ctx.quadraticCurveTo(x+w/2+60,y+h-150,x+w/2+70,y+h);ctx.closePath();ctx.fill();
    ctx.fillStyle='rgba(180,120,10,.4)';ctx.fillRect(x+w/2+4,y+h-60,66,60);ctx.restore()}
  // porta esquerda (fechada) e porta direita (abrindo para fora, em perspectiva)
  ctx.fillStyle='#6b4630';ctx.fillRect(x,y,w/2,h);ctx.strokeRect(x,y,w/2,h);
  ctx.strokeStyle='rgba(0,0,0,.3)';ctx.lineWidth=4;ctx.strokeRect(x+30,y+40,w/2-60,h/2-60);ctx.strokeRect(x+30,y+h/2+20,w/2-60,h/2-60);
  const dw=(w/2)*(1-op*.5),dx=x+w/2+(w/2-dw)*0;ctx.fillStyle='#7a5238';ctx.beginPath();ctx.moveTo(x+w/2+ (w/2)*op*.9,y-op*30);ctx.lineTo(x+w,y);ctx.lineTo(x+w,y+h);ctx.lineTo(x+w/2+(w/2)*op*.9,y+h+op*30);ctx.closePath();ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.stroke();
  ctx.fillStyle='#d8b26a';ctx.beginPath();ctx.arc(x+w/2-30,y+h*.52,12,0,7);ctx.fill();ctx.beginPath();ctx.arc(x+w/2+(w/2)*op*.9+30,y+h*.52,12,0,7);ctx.fill();
}

// 0. ABERTURA-GANCHO (1000–1001.8): chão do corredor, a porta dele entreaberta e as pegadas molhadas entrando
scene(1000,1001.8,(t)=>{const u=t-1000;const z=lerp(1.25,1.05,easeOut(seg(u,0,.6)))+u*.03,sh=u<.35?Math.sin(u*90)*14:0;
  ctx.save();ctx.translate(W/2+sh,H*.6);ctx.scale(z,z);ctx.translate(-W/2,-H*.6);
  e7Corridor(u,.35+.05*seg(u,.4,1.6));
  ctx.restore();
  ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,150,W,330);
  hookTitle('ELA ENTROU|NA CASA DELE 😳',seg(u,0,.35),290);
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${.8*(1-u/.12)})`;ctx.fillRect(0,0,W,H)}
});

// 1. recap rápido do voto (1002–1003.6): B venceu
scene(1002,1003.6,(t)=>{const u=(t-1002)*2.25;ctx.fillStyle='#0e0c14';ctx.fillRect(0,0,W,H);
  ctx.save();ctx.globalAlpha=.45;for(let i=0;i<7;i++)e6Print(560+(i%2?40:-40),1860-i*150,.8,0,'shoe',1);ctx.restore();
  const g=ctx.createRadialGradient(W/2,H*.42,40,W/2,H*.42,900);g.addColorStop(0,'rgba(60,200,130,.28)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 50px "DejaVu Sans Mono", monospace';ctx.globalAlpha=easeOut(seg(u,0,.4));ctx.fillText('NO EPISÓDIO 6, VOCÊS ESCOLHERAM',W/2,560);ctx.globalAlpha=1;ctx.textAlign='left';
  // A (perdeu) sai para a esquerda
  const ka=easeOut(seg(u,.9,1.5));ctx.save();ctx.globalAlpha=1-ka;ctx.translate(-ka*700,0);ctx.fillStyle='rgba(120,120,130,.9)';rr(70,660,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,805);ctx.font='800 48px Inter';ctx.fillText('Ir até a janela acesa',250,780);ctx.restore();
  // B (venceu) sobe e cresce, em verde
  const kb=easeBack(seg(u,1.2,1.8)),sc=1+kb*.12,yy=lerp(900,760,kb);
  ctx.save();ctx.translate(W/2,yy+95);ctx.scale(sc,sc);ctx.translate(-W/2,-(yy+95));
  ctx.fillStyle='rgba(30,140,90,.96)';rr(70,yy,940,190,36);ctx.fill();ctx.strokeStyle='rgba(255,255,255,'+(.25+.25*Math.sin(u*6))+')';ctx.lineWidth=6;ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,yy+145);ctx.font='800 44px Inter';ctx.fillText('Seguir as pegadas da criança',250,yy+120);
  if(u>1.6){const k=easeBack(seg(u,1.6,2));ctx.save();ctx.translate(930,yy+40);ctx.scale(k,k);ctx.fillStyle='#ffd84a';ctx.beginPath();ctx.arc(0,0,58,0,7);ctx.fill();ctx.strokeStyle='#1c1422';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-26,2);ctx.lineTo(-6,22);ctx.lineTo(28,-20);ctx.stroke();ctx.restore()}
  ctx.restore();
  if(u>1.6){const r=rng(9);for(let i=0;i<40;i++){const a=r()*7,sp=300+r()*500,k=seg(u,1.6,3.2),x=W/2+Math.cos(a)*sp*k,y=860+Math.sin(a)*sp*k+k*k*300;ctx.fillStyle=['#ffd84a','#3ccf8e','#fff'][i%3];ctx.globalAlpha=1-k;ctx.fillRect(x,y,10,16);ctx.globalAlpha=1}}
});

// 2. de lado: ele segue as pegadas (dois tênis) na chuva, andando para a DIREITA; calçada, postes e pegadas passam para a ESQUERDA.
//    No fim ele diminui o passo e PARA (o cenário para junto). (1004–1010.4)
function e7SideStreet(gx,u,rk){e6Night();
  ctx.fillStyle='#11141f';for(let i=-1;i<7;i++){const x=((i*260-gx*.35)%2080+2080)%2080-260,h=380+((i*137)%5)*90;ctx.fillRect(x,1160-h,240,h);
    ctx.fillStyle='rgba(255,255,255,.04)';for(let yy=1160-h+30;yy<1120;yy+=70)for(let xx=x+24;xx<x+220;xx+=60)ctx.fillRect(xx,yy,26,36);ctx.fillStyle='#11141f'}
  for(let i=-1;i<4;i++){const x=((i*720-gx)%2880+2880)%2880-720;ctx.fillStyle='#1b1f2d';ctx.fillRect(x,560,700,820);ctx.fillStyle='#232838';ctx.fillRect(x+60,820,580,560);
    ctx.fillStyle='#2a3a3a';ctx.fillRect(x-10,760,720,50);ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.strokeRect(x-10,760,720,50)}
  ctx.fillStyle='#2e3240';ctx.fillRect(0,1378,W,200);ctx.fillStyle='#454a5c';ctx.fillRect(0,1570,W,16);ctx.fillStyle='#1d2029';ctx.fillRect(0,1586,W,334);
  for(let i=-1;i<4;i++){const x=((i*520-gx)%2080+2080)%2080-260;ctx.fillStyle='rgba(255,214,140,.12)';ctx.fillRect(x-40,1380,80,190);lampPost(x,1560,1.1,true)}
  for(let i=0;i<60;i++){const wx=i*95,x=wx-gx+560;if(x<-60||x>W+60)continue;e6Print(x,1470+(i%2?22:-22),.45,Math.PI/2,'shoe',x<520?.45:1)}
}
scene(1004,1010.4,(t)=>{const u=t-1004,v=320;
  // anda com velocidade v até 4.4 s, depois freia até parar em 5.6 s
  const T1=4.4,T2=5.6;const gx=u<T1?u*v:(u<T2?T1*v+v*((u-T1)-(u-T1)*(u-T1)/(2*(T2-T1))):T1*v+v*(T2-T1)/2);
  e7SideStreet(gx,u,1);
  const moving=u<T2;
  person(470,1540-140*1.25,1.25,{f:1,walk:moving?gx/v*8.6:null,look:u>T2?-.05:.12,brow:u>T2?.3:0});
  e6Rain(u,1,{ground:1586});vignette(.45);
});

// 3. de frente: a rua dele — o prédio dele à direita, com a janela do quarto (cortinas vinho) (1010.6–1014.6)
function e7HisStreet(u,rk){e6Night();
  // prédio da esquerda
  ctx.fillStyle='#10131f';ctx.beginPath();ctx.moveTo(0,200);ctx.lineTo(420,760);ctx.lineTo(420,960);ctx.lineTo(0,1500);ctx.closePath();ctx.fill();
  // o prédio dele, à direita, mais claro, com a janela do quarto
  ctx.fillStyle='#262a40';ctx.beginPath();ctx.moveTo(W,120);ctx.lineTo(660,700);ctx.lineTo(660,960);ctx.lineTo(W,1500);ctx.closePath();ctx.fill();
  for(let r=0;r<5;r++)for(let c=0;c<3;c++){const k0=c/3,k1=(c+.6)/3;const xa=lerp(W,660,k0),xb=lerp(W,660,k1);const ya=lerp(lerp(160,720,k0),lerp(1460,950,k0),.12+r*.17),yb=lerp(lerp(160,720,k1),lerp(1460,950,k1),.12+r*.17),hh=lerp(90,40,k0);
    ctx.fillStyle=(r==2&&c==1)?'#7a2a46':'rgba(255,255,255,.06)';ctx.beginPath();ctx.moveTo(xa,ya);ctx.lineTo(xb,yb);ctx.lineTo(xb,yb+hh*.8);ctx.lineTo(xa,ya+hh);ctx.closePath();ctx.fill()}
  ctx.fillStyle='#2a2d38';ctx.beginPath();ctx.moveTo(0,1500);ctx.lineTo(420,960);ctx.lineTo(660,960);ctx.lineTo(W,1500);ctx.lineTo(W,H);ctx.lineTo(0,H);ctx.closePath();ctx.fill();
  ctx.fillStyle='#1d2029';ctx.beginPath();ctx.moveTo(160,H);ctx.lineTo(500,960);ctx.lineTo(580,960);ctx.lineTo(920,H);ctx.closePath();ctx.fill();
  for(let i=0;i<4;i++){const k=Math.pow(i/4,1.3),s=lerp(1,.2,k);const x=lerp(170,480,k),y=lerp(1580,965,k);lampPost(x,y,s*1.1,true);
    const g=ctx.createRadialGradient(x,y-515*s,2,x,y-515*s,120*s);g.addColorStop(0,'rgba(255,220,150,.5)');g.addColorStop(1,'rgba(255,220,150,0)');ctx.fillStyle=g;ctx.fillRect(x-130*s,y-640*s,260*s,260*s)}
  // pegadas na rua seguindo para o prédio dele (à direita)
  for(let i=0;i<7;i++){const k=i/7,y=lerp(1800,1180,k),x=lerp(560,760,k)+(i%2?14:-14)*(1-k),s=lerp(.5,.2,k);e6Print(x,y,s,.35,'shoe',.8)}
}
scene(1010.6,1014.6,(t)=>{const u=t-1010.6;const z=lerp(1,1.08,ease(seg(u,0,4)));ctx.save();ctx.translate(800,900);ctx.scale(z,z);ctx.translate(-800,-900);
  e7HisStreet(u,1);
  // destaque: a janela do quarto dele
  if(u>1.4){const k=seg(u,1.4,2);ctx.strokeStyle='#ffd84a';ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();for(let q=0;q<=k*6.6;q+=.05){const xx=898+Math.cos(q)*(85+5*Math.sin(q*3)),yy=810+Math.sin(q)*75;q?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy)}ctx.stroke();
    if(k>=1){ctx.fillStyle='#ffd84a';ctx.font='700 70px Caveat';ctx.fillText('o quarto dele',640,700)}}
  ctx.restore();
  personFront(400,1540,1.3,{back:true});
  e6Rain(u,1,{ground:1500});vignette(.45);
});

// 4. a entrada do prédio dele: as pegadas entram pela porta de vidro; o gato dorme no muro; a chuva PARA (1014.8–1018.6)
scene(1014.8,1018.6,(t)=>{const u=t-1014.8;const z=lerp(1,1.06,ease(seg(u,0,3.8)));ctx.save();ctx.translate(W/2,H*.55);ctx.scale(z,z);ctx.translate(-W/2,-H*.55);
  e6Night();
  ctx.fillStyle='#262a40';ctx.fillRect(0,0,W,1420);
  ctx.fillStyle='rgba(255,255,255,.05)';for(let r=0;r<3;r++)for(let c=0;c<4;c++)ctx.fillRect(60+c*260,120+r*260,150,170);
  // marquise e porta de vidro
  ctx.fillStyle='#3b3e4c';ctx.fillRect(250,700,580,40);ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.strokeRect(250,700,580,40);
  ctx.fillStyle='#0d1222';ctx.fillRect(330,740,420,680);ctx.strokeRect(330,740,420,680);
  ctx.fillStyle='rgba(140,180,255,.12)';ctx.fillRect(340,750,190,660);ctx.fillRect(550,750,190,660);
  ctx.fillStyle='#d8b26a';ctx.fillRect(525,1060,10,90);ctx.fillRect(545,1060,10,90);
  // degrau e calçada molhada
  ctx.fillStyle='#4a4c58';ctx.fillRect(290,1420,500,40);ctx.fillStyle='#2a2d38';ctx.fillRect(0,1460,W,460);
  ctx.fillStyle='rgba(255,214,140,.10)';ctx.fillRect(380,1460,320,300);
  // muro baixo à esquerda com o gato dormindo (ambiente)
  ctx.fillStyle='#3a3d4a';ctx.fillRect(0,1240,250,220);ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.strokeRect(-10,1240,260,220);
  e6Cat(130,1242,.75,u);
  // pegadas: da calçada até a porta, entrando
  for(let i=0;i<6;i++){const k=i/6;e6Print(540+(i%2?26:-26)*(1-k*.5),lerp(1880,1430,k),lerp(.7,.4,k),0,'shoe',.85)}
  ctx.restore();
  // a chuva vai parando (some de forma visível até 2,6 s); depois só pingos caindo da marquise
  const rk=1-seg(u,.6,2.6);e6Rain(u,rk,{ground:1460});
  if(u>2){for(let i=0;i<4;i++){const ph=((u-2)*1.3+i/4)%1;ctx.fillStyle=`rgba(200,220,255,${.8*(1-ph)})`;ctx.beginPath();ctx.ellipse(300+i*160,760+ph*660,5,9,0,0,7);ctx.fill()}}
  vignette(.45);
});

// 5. de lado: a escada do prédio dele — ele SOBE para a DIREITA (onde os degraus sobem), as marcas molhadas nos degraus à frente (1018.8–1025)
function e7StairY(x){return 1760-x*.86}
scene(1018.8,1025,(t)=>{const u=t-1018.8;ctx.fillStyle='#1a1822';ctx.fillRect(0,0,W,H);
  tileWall(0,0,W,H,'#3a3646','#34303f');
  const gl=ctx.createRadialGradient(900,500,10,900,500,600);gl.addColorStop(0,'rgba(140,170,255,.25)');gl.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=gl;ctx.fillRect(0,0,W,H);
  // placa do andar
  ctx.fillStyle='#d8d2c0';rr(840,300,160,110,10);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=5;ctx.stroke();ctx.fillStyle='#2a2a33';ctx.font='900 70px Inter';ctx.textAlign='center';ctx.fillText('3º',920,380);ctx.textAlign='left';
  ctx.fillStyle='#4a4652';ctx.beginPath();ctx.moveTo(0,H);ctx.lineTo(0,e7StairY(0));for(let x=0;x<=W+90;x+=90){const y=e7StairY(x);ctx.lineTo(x,y);ctx.lineTo(x+90,y)}ctx.lineTo(W+90,H);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#8a8296';ctx.lineWidth=6;for(let x=0;x<=W;x+=90){const y=e7StairY(x);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+90,y);ctx.stroke()}
  ctx.strokeStyle='#6a6474';ctx.lineWidth=10;ctx.beginPath();ctx.moveTo(0,e7StairY(0)-230);ctx.lineTo(W,e7StairY(W)-230);ctx.stroke();
  const k=seg(u,0,6),x=lerp(120,900,k),gy=e7StairY(Math.floor(x/90)*90)+18,s=1.15;
  // marcas molhadas nos degraus à frente dele (brilho no piso)
  for(let sx=0;sx<=W;sx+=90){if(sx<x+40)continue;const y=e7StairY(sx);ctx.fillStyle='rgba(170,200,255,.45)';ctx.beginPath();ctx.ellipse(sx+45,y+4,24,6,0,0,7);ctx.fill();ctx.fillStyle='rgba(20,24,40,.5)';ctx.beginPath();ctx.ellipse(sx+45,y+5,16,3,0,0,7);ctx.fill()}
  person(x,gy-140*s,s,{f:1,walk:u*7,lean:.12,look:-.12});
});

// 6. o corredor: a porta do apartamento dele está aberta; ele, de costas, no primeiro plano (1025.2–1030.4)
scene(1025.2,1030.4,(t)=>{const u=t-1025.2;const z=lerp(1,1.12,ease(seg(u,0,5.2)));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(z,z);ctx.translate(-W/2,-H*.5);
  e7Corridor(u,.35);ctx.restore();
  personFront(220,1620,1.35,{back:true});vignette(.5);
});

// 7. close no rosto dele, iluminado pela fresta da porta (1030.6–1033.4) — fala com o público
scene(1030.6,1033.4,(t)=>{const u=t-1030.6;ctx.fillStyle='#0c0b12';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(780,900,40,780,900,900);g.addColorStop(0,'rgba(140,170,255,.25)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  face(W/2,H*.5,1.05+u*.03,{open:1.2,px:lerp(10,-22,seg(u,.3,1.2)),py:0,brow:.6,mouthO:.3,lid:0});
  vignette(.7);
});

// 8. dentro do apartamento escuro: ele entra devagar, andando para o fundo (de costas); a porta do quarto lá no fim (1033.6–1036.6)
function e7Living(u){ctx.fillStyle='#0d0d16';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#181826';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(300,640);ctx.lineTo(300,1300);ctx.lineTo(0,H);ctx.closePath();ctx.fill();
  ctx.fillStyle='#151522';ctx.beginPath();ctx.moveTo(W,0);ctx.lineTo(780,640);ctx.lineTo(780,1300);ctx.lineTo(W,H);ctx.closePath();ctx.fill();
  ctx.fillStyle='#1b1b2a';ctx.fillRect(300,640,480,660);
  ctx.fillStyle='#2a2430';ctx.beginPath();ctx.moveTo(0,H);ctx.lineTo(300,1300);ctx.lineTo(780,1300);ctx.lineTo(W,H);ctx.closePath();ctx.fill();
  // janela na parede esquerda (luar)
  ctx.fillStyle='#1d2850';ctx.beginPath();ctx.moveTo(60,420);ctx.lineTo(230,640);ctx.lineTo(230,980);ctx.lineTo(60,1100);ctx.closePath();ctx.fill();
  ctx.save();ctx.globalAlpha=.10;ctx.fillStyle='#bcd0ff';ctx.beginPath();ctx.moveTo(60,420);ctx.lineTo(230,640);ctx.lineTo(900,1920);ctx.lineTo(200,1920);ctx.fill();ctx.restore();
  // sofá (silhueta) à direita
  ctx.fillStyle='#1f1a26';ctx.beginPath();ctx.moveTo(980,1280);ctx.lineTo(800,1220);ctx.lineTo(800,1380);ctx.lineTo(980,1500);ctx.closePath();ctx.fill();
  // porta do quarto, no fundo, entreaberta
  e7Door(440,780,200,520,.3,'');
  for(let i=0;i<9;i++){const k=i/9,y=lerp(1900,1310,Math.pow(k,.85)),s=lerp(.55,.14,k);e7Print(540+(i%2?22:-22)*lerp(1,.35,k),y,s,0,.9)}
}
scene(1033.6,1036.6,(t)=>{const u=t-1033.6;e7Living(u);
  const k=ease(seg(u,0,3));personFront(W/2+20,lerp(1720,1500,k),lerp(1.3,.95,k),{back:true,walk:u*4.2});vignette(.55);
});

// 9. o chão: as pegadas atravessam a sala e entram por baixo da porta do quarto (1036.8–1040)
scene(1036.8,1040,(t)=>{const u=t-1036.8;const z=lerp(1,1.15,ease(seg(u,0,3.2)));ctx.save();ctx.translate(W/2,700);ctx.scale(z,z);ctx.translate(-W/2,-700);
  ctx.fillStyle='#2a2430';ctx.fillRect(0,0,W,H);ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=4;for(let y=0;y<H;y+=120){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}
  // pé da porta do quarto lá em cima, com a fresta escura
  ctx.fillStyle='#6b4630';ctx.fillRect(180,0,720,420);ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.strokeRect(180,0,720,420);ctx.fillStyle='#050508';ctx.fillRect(180,420,720,26);
  ctx.save();ctx.globalAlpha=.10;ctx.fillStyle='#bcd0ff';ctx.fillRect(0,600,W,1320);ctx.restore();
  for(let i=0;i<7;i++){const y=1760-i*200;e7Print(540+(i%2?60:-60),y,1.05,0,seg(u,.1+i*.14,.4+i*.14))}
  ctx.restore();vignette(.55);
});

// 10. o quarto onde ele acordou no dia 1 — à noite, vazio, cama arrumada; ele entra de costas (1040.2–1043.4)
scene(1040.2,1043.4,(t)=>{const u=t-1040.2;const z=lerp(1.12,1.02,easeOut(seg(u,0,3.2)));ctx.save();ctx.translate(W/2,H*.6);ctx.scale(z,z);ctx.translate(-W/2,-H*.6);
  e7Bedroom(u,{photo:true,prints:true});ctx.restore();
  personFront(820,1600,1.3,{back:true});vignette(.5);
});

// 11. zoom no travesseiro: uma foto (1043.6–1046.6). Também usada na fala "alguém trouxe ela até aqui" (pegadas até a cama).
scene(1043.6,1046.6,(t)=>{const u=t-1043.6;const z=lerp(1.2,2.3,ease(seg(u,0,2.6)));ctx.save();ctx.translate(W/2,H*.5);ctx.scale(z,z);ctx.translate(-260,-1220);
  e7Bedroom(u,{photo:true,prints:true});ctx.restore();vignette(.55);
});

// 12. a foto, de perto: é ele dormindo no dia 1 (a mesma foto da parede do fotógrafo) (1046.8–1050)
scene(1046.8,1050,(t)=>{const u=t-1046.8;ctx.fillStyle='#14131e';ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#b8b4c4';rr(-100,1300,1300,700,120);ctx.fill();
  const z=1+u*.04;ctx.save();ctx.translate(W/2,H*.47);ctx.scale(z,z);ctx.rotate(-.04);polaroid(0,0,800,0,0,2.0,1.55,420,1180,'dia 1 — dormindo');ctx.restore();
  if(u<.12){ctx.fillStyle=`rgba(255,255,255,${(1-u/.12)*.6})`;ctx.fillRect(0,0,W,H)}
  vignette(.5);
});

// 13. a foto vira: no verso, em giz de cera, letra de criança — VOLTA AQUI NO DIA 60 (1050.2–1057)
scene(1050.2,1057,(t)=>{const u=t-1050.2;ctx.fillStyle='#14131e';ctx.fillRect(0,0,W,H);ctx.fillStyle='#b8b4c4';rr(-100,1300,1300,700,120);ctx.fill();
  const fl=easeOut(seg(u,0,.6)),sx=Math.abs(Math.cos(fl*Math.PI));
  ctx.save();ctx.translate(W/2,H*.47);ctx.rotate(.03);ctx.scale(Math.max(.02,sx),1);
  if(fl<.5){polaroid(0,0,800,0,0,2.0,1.55,420,1180,'dia 1 — dormindo')}
  else{const w=800,h=w*1.18;ctx.fillStyle='rgba(0,0,0,.35)';ctx.fillRect(-w/2+6,-h/2+8,w,h);ctx.fillStyle='#ece6d6';ctx.fillRect(-w/2,-h/2,w,h);
    // texto em giz de cera, aparecendo letra por letra (a partir de 2,6 s, junto com a fala)
    const L1='VOLTA AQUI',L2='NO DIA 60';const n=Math.floor(seg(u,2.6,4.6)*(L1.length+L2.length));
    ctx.font='700 150px Caveat';ctx.textAlign='center';ctx.fillStyle='#c0392b';ctx.save();ctx.rotate(-.05);
    ctx.fillText(L1.slice(0,Math.min(n,L1.length)),0,-90);ctx.fillStyle='#2f5fb8';ctx.fillText(L2.slice(0,Math.max(0,n-L1.length)),10,90);ctx.restore();
    // um desenhinho da capa amarela no canto (quem escreveu)
    if(u>4.8){ctx.globalAlpha=seg(u,4.8,5.4);ctx.fillStyle='#f2c230';ctx.strokeStyle='#8a6a10';ctx.lineWidth=5;ctx.beginPath();ctx.arc(250,250,36,0,7);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(220,280);ctx.lineTo(200,390);ctx.lineTo(300,390);ctx.lineTo(280,280);ctx.closePath();ctx.fill();ctx.stroke();ctx.globalAlpha=1}
    ctx.textAlign='left'}
  ctx.restore();vignette(.5);
});

// 14. faltam 12 dias: os dias de 48 a 60, um quadradinho por dia (1057.2–1063)
scene(1057.2,1063,(t)=>{const u=t-1057.2;ctx.fillStyle='#0f0e18';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.45,40,W/2,H*.45,900);g.addColorStop(0,'rgba(200,40,40,.22)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.textAlign='center';
  const k1=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,560);ctx.scale(k1,k1);ctx.fillStyle='#f4e2b0';ctx.font='700 60px "DejaVu Sans Mono", monospace';ctx.fillText('HOJE',0,-120);ctx.fillStyle='#fff';ctx.font='900 200px Inter';ctx.fillText('DIA 48',0,60);ctx.restore();
  // 13 quadradinhos: 48 (hoje) até 60
  for(let d=48;d<=60;d++){const i=d-48,c=i%5,r=Math.floor(i/5),x=170+c*185,y=860+r*190,kk=easeBack(seg(u,.6+i*.1,.9+i*.1));if(kk<=0)continue;
    ctx.save();ctx.translate(x+70,y+70);ctx.scale(kk,kk);ctx.fillStyle=d==48?'#3a3550':d==60?'#c62828':'#f3efe6';rr(-70,-70,140,140,16);ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.stroke();
    ctx.fillStyle=d==60||d==48?'#fff':'#333';ctx.font='800 64px Inter';ctx.fillText(d,0,22);ctx.restore()}
  if(u>2.4){const k=easeBack(seg(u,2.4,2.8));ctx.save();ctx.translate(W/2,1580);ctx.scale(k,k);ctx.fillStyle='#ff3b3b';ctx.font='900 120px Inter';ctx.fillText('FALTAM 12',0,0);ctx.restore()}
  ctx.textAlign='left';
});

// 15. o relógio de parede do quarto: 07:13 — e anda (tic... tac) (1063.2–1069.6)
scene(1063.2,1069.6,(t)=>{const u=t-1063.2;
  const z=lerp(1.6,3.2,ease(seg(u,0,2.4)));ctx.save();ctx.translate(W/2,H*.45);ctx.scale(z,z);ctx.translate(-440,-560);
  e7Bedroom(u,{photo:true,mm:13});ctx.restore();
  // o ponteiro dos segundos girando, em sobreposição ao centro do relógio ampliado
  if(u>2.6){const R=58*3.2,cx=W/2,cy=H*.45+(-40)*3.2;const a=Math.floor((u-2.6)*1.2)/60*Math.PI*2*5;ctx.save();ctx.translate(cx,cy);ctx.strokeStyle='#d33';ctx.lineWidth=6;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.sin(a)*R*.85,-Math.cos(a)*R*.85);ctx.stroke();ctx.restore();
    const ph=(u-2.6)%0.83;if(ph<.15){ctx.strokeStyle=`rgba(255,255,255,${.5*(1-ph/.15)})`;ctx.lineWidth=8;ctx.beginPath();ctx.arc(cx,cy,R*1.25+ph*200,0,7);ctx.stroke()}}
  vignette(.55);
});

// 16. contraplano: ele no primeiro plano; um rangido atrás dele — ele vira para o armário (1069.8–1073.4)
scene(1069.8,1073.4,(t)=>{const u=t-1069.8;e7Wardrobe(u,0,0);
  const turn=lerp(0,1,ease(seg(u,.8,1.8)));
  ctx.save();ctx.translate(0,0);personTurn(330,1620,1.45,{eye:1.15,brow:turn*.5,mouthO:turn>.5?.3:0},turn*.9);ctx.restore();
  // ondinhas do rangido saindo do armário
  if(u>.3&&u<1.6){const ph=(u-.3)/1.3;ctx.strokeStyle=`rgba(255,255,255,${.5*(1-ph)})`;ctx.lineWidth=7;for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(830,950,40+i*40+ph*80,-.9,.9);ctx.stroke()}}
  vignette(.55);
});

// 17. o armário: a porta abre um pouquinho... lá dentro, a pontinha da capa amarela (1073.6–1080)
scene(1073.6,1080,(t)=>{const u=t-1073.6;const z=lerp(1,1.28,ease(seg(u,0,6.4)));ctx.save();ctx.translate(640,1300);ctx.scale(z,z);ctx.translate(-640,-1300);
  e7Wardrobe(u,.28*ease(seg(u,.2,1.6)),seg(u,2.6,3.4));ctx.restore();
  if(u>3.4){const k=seg(u,3.4,4);ctx.strokeStyle='#ffd84a';ctx.lineWidth=9;ctx.lineCap='round';ctx.beginPath();for(let q=0;q<=k*6.6;q+=.05){const xx=575+Math.cos(q)*(90+5*Math.sin(q*3)),yy=1400+Math.sin(q)*170;q?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy)}ctx.stroke()}
  vignette(.55);
});

// 18. pela janela do quarto: lá longe, o 13º andar acende e pisca um FLASH (1080.2–1086)
scene(1080.2,1086,(t)=>{const u=t-1080.2;const z=lerp(1.6,3.4,ease(seg(u,0,3.4)));ctx.save();ctx.translate(W/2,H*.45);ctx.scale(z,z);ctx.translate(-860,-640);
  const fl=(u>2.2&&u<2.5)?1-seg(u,2.2,2.5):(u>4.4&&u<4.7?1-seg(u,4.4,4.7):0);
  e7Bedroom(u,{photo:true,win13:u>1,flash:fl});ctx.restore();
  if(fl>.6){ctx.fillStyle=`rgba(255,255,255,${(fl-.6)*.5})`;ctx.fillRect(0,0,W,H)}
  vignette(.55);
});

// 19. escolha (1086.2–1093)
scene(1086.2,1093,(t)=>{const u=t-1086.2;ctx.fillStyle='#0c0a10';ctx.fillRect(0,0,W,H);
  // fundo: à esquerda o armário com a capa amarela; à direita a janela com o flash
  ctx.save();ctx.globalAlpha=.55;ctx.fillStyle='#6b4630';ctx.fillRect(60,1000,260,620);ctx.fillStyle='#050508';ctx.fillRect(190,1000,130,620);ctx.fillStyle='#f2c230';ctx.fillRect(200,1460,60,160);
  ctx.fillStyle='#1d2850';ctx.fillRect(760,1000,260,360);ctx.fillStyle=(u%1.6<.12)?'#fff':'#ffd682';ctx.fillRect(900,1080,20,24);ctx.restore();
  ctx.fillStyle='rgba(10,8,14,.40)';ctx.fillRect(0,0,W,H);
  personTurn(540,1700,1.0,{eye:1.2,brow:-.5,lid:0},Math.sin(u*1.4)*.9);
  const ca=easeOut(seg(u,.3,.8)),cb=easeOut(seg(u,.6,1.1));
  ctx.save();ctx.globalAlpha=ca;ctx.translate(lerp(-600,0,ca),0);ctx.fillStyle='rgba(30,120,80,.92)';rr(70,420,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('A',120,565);ctx.font='800 48px Inter';ctx.fillText('Abrir o armário',250,540);ctx.restore();
  ctx.save();ctx.globalAlpha=cb;ctx.translate(lerp(600,0,cb),0);ctx.fillStyle='rgba(170,60,60,.92)';rr(70,650,940,190,36);ctx.fill();ctx.fillStyle='#fff';ctx.font='900 130px Inter';ctx.fillText('B',120,795);ctx.font='800 48px Inter';ctx.fillText('Ir atrás do flash',250,770);ctx.restore();
});

// 20. cartela final (1095–1098.2)
scene(1095,1098.2,(t)=>{const u=t-1095;ctx.fillStyle='#050507';ctx.fillRect(0,0,W,H);
  const g=ctx.createRadialGradient(W/2,H*.45,50,W/2,H*.45,900);g.addColorStop(0,'rgba(200,30,30,.35)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const k=easeBack(seg(u,0,.4));ctx.save();ctx.translate(W/2,H*.4);ctx.scale(k,k);ctx.textAlign='center';
  const gl=u<.5||(u%1.3<.08)?1:0;ctx.font='900 118px Inter';
  if(gl){ctx.fillStyle='rgba(255,0,60,.7)';ctx.fillText('E SE SOBRASSE',-8,0);ctx.fillStyle='rgba(0,220,255,.7)';ctx.fillText('E SE SOBRASSE',8,0)}
  ctx.fillStyle='#fff';ctx.fillText('E SE SOBRASSE',0,0);ctx.font='900 220px Inter';ctx.fillStyle='#ff3b3b';ctx.fillText('SÓ UM?',0,220);ctx.restore();
  const k2=seg(u,.6,1);ctx.save();ctx.globalAlpha=k2;ctx.textAlign='center';ctx.fillStyle='#f4e2b0';ctx.font='700 56px "DejaVu Sans Mono", monospace';ctx.fillText('EP. 8 · EM BREVE',W/2,H*.4+420);
  ctx.fillStyle='#fff';ctx.font='800 50px Inter';ctx.fillText('Segue pra não perder 👆',W/2,H*.4+520);ctx.restore()});
