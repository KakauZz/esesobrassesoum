// ===== SÉRIE 2: "A FAMÍLIA DO MATHEUS" — EP.1 O almoço de domingo =====
const CH={
 LUCAS:{hair:'curly',top:'tee',pal:{skin:'#b57650',skinS:'#9e6240',skinD:'#87512f',hair:'#1f1410',hairD:'#120b08',hairM:'#2e1f18',hairL:'#4a3326',hood:'#2bb673',hoodS:'#23a064',hoodD:'#1b8a55',hoodL:'#3cc785',jean:'#3d3f4a',jeanS:'#33353f',jeanD:'#26282f',shoe:'#e8463d',shoeS:'#c93a32',shoeD:'#f2f2f2',iris:'#2b170c'}},
 MAE:{hair:'bun',top:'sweater',bottom:'skirt',lashes:1,earrings:1,necklace:1,pal:{skin:'#f3c6a3',skinS:'#e6ad88',hair:'#6b3a1f',hairD:'#4e2914',hairM:'#84492a',hairL:'#a25f38',hood:'#b58ad6',hoodS:'#9f74c2',hoodD:'#8a62ad',hoodL:'#c7a2e3',jean:'#2f3b6e',jeanS:'#283260',jeanD:'#1f2750',shoe:'#7a4a33',shoeS:'#6a3e2a',shoeD:'#5a3322',mouth:'#c4475a'}},
 PAI:{hair:'short',top:'tee',beard:.85,glasses:'#2a2a2a',pal:{skin:'#eab48c',skinS:'#d99c74',hair:'#3a2a20',hairD:'#2a1d15',hairM:'#4c3a2e',hairL:'#8d8a86',hood:'#3e6fd1',hoodS:'#335fbb',hoodD:'#2a4f9e',hoodL:'#5585e0',jean:'#c2a77d',jeanS:'#b0956b',jeanD:'#9a815a',shoe:'#6b4430',shoeS:'#5a3826',shoeD:'#4a2d1e'}},
 BIA:{hair:'pigtails',top:'tee',bottom:'skirt',tie:'#ffd23f',pal:{hair:'#6b3a1f',hairD:'#4e2914',hairM:'#84492a',hairL:'#a25f38',hood:'#ff7fb0',hoodS:'#f06aa0',hoodD:'#d9558a',hoodL:'#ff9cc4',jean:'#ffc93c',jeanS:'#f0b72a',jeanD:'#d89f1c',shoe:'#ff7fb0',shoeS:'#f06aa0',shoeD:'#fff'}},
 VO:{hair:'bun',top:'sweater',bottom:'skirt',glasses:'#b48a3c',earrings:1,necklace:1,lashes:1,pal:{skin:'#f1c4a4',skinS:'#e2ab88',hair:'#c9c6c2',hairD:'#a9a5a0',hairM:'#dddad6',hairL:'#f2f0ee',hood:'#4aa37a',hoodS:'#3f9169',hoodD:'#357d5a',hoodL:'#5cb98c',jean:'#7a4f3a',jeanS:'#6a4332',jeanD:'#583627',shoe:'#3a3a48',shoeS:'#2e2e3a',shoeD:'#22222c',mouth:'#b2475a'}},
 ENT:{hair:'short',top:'sweater',cap:'#d63a3a',capD:'#a82a2a',capShade:74,pal:{skin:'#d9a07a',skinS:'#c48a64',hair:'#2a1d15',hairD:'#1c130d',hood:'#2c3e6b',hoodS:'#243459',hoodD:'#1c2948',hoodL:'#3a4f85',jean:'#2a2d36',jeanS:'#23262e',jeanD:'#1a1c22',shoe:'#1f1f25',shoeS:'#2c2c35',shoeD:'#3a3a44'}},
 FUT:{beard:.55,pal:{hood:'#4a4f5c',hoodS:'#3f444f',hoodD:'#343843',hoodL:'#5a6070',jean:'#23262e',jeanS:'#1d2027',jeanD:'#15171c',shoe:'#e8e4de'}},
 MAT:{}};
const chr=(k,x,y,s,o)=>matheus5(x,y,s,Object.assign({},CH[k],o||{}));
function s2hand(gx,gy,s,side,p){const r=m5chain(side*62,-372,side*p[0],side*p[1],76,60);return [gx+r[2]*s,gy+r[3]*s]}
function coxinha(x,y,s,rot){ctx.save();ctx.translate(x,y);ctx.rotate(rot||0);ctx.scale(s,s);
  ctx.fillStyle='#d98a3a';ctx.beginPath();ctx.moveTo(0,-42);ctx.bezierCurveTo(14,-30,34,-6,30,10);ctx.bezierCurveTo(26,26,-26,26,-30,10);ctx.bezierCurveTo(-34,-6,-14,-30,0,-42);ctx.fill();
  ctx.fillStyle='#bd6d22';ctx.beginPath();ctx.moveTo(10,-30);ctx.bezierCurveTo(26,-10,34,4,28,14);ctx.bezierCurveTo(22,22,10,22,8,20);ctx.bezierCurveTo(18,0,16,-16,10,-30);ctx.fill();
  ctx.fillStyle='#f0b066';for(const [a,b] of [[-14,-6],[-6,8],[-18,10],[2,-18],[-8,-26]]){ctx.beginPath();ctx.arc(a,b,2.6,0,7);ctx.fill()}
  ctx.restore()}
function s2Room(t,o){o=o||{};
  // parede com papel florido
  fRect(-400,0,2600,1300,'#f7e3c4');ctx.fillStyle='#efd0a6';for(let y=40;y<1000;y+=90)for(let x=-380+(Math.floor(y/90)%2)*45;x<2200;x+=90){ctx.beginPath();ctx.arc(x,y,7,0,7);ctx.fill();ctx.fillStyle='#e9c493';ctx.beginPath();ctx.arc(x+10,y+6,4,0,7);ctx.fill();ctx.fillStyle='#efd0a6'}
  fRect(-400,1000,2600,300,'#8fc49a');fRect(-400,992,2600,14,'#7a5a3c',4);
  fRect(-400,1300,2600,2400,'#b9844f');ctx.fillStyle='#a87444';for(let x=-400;x<2200;x+=110)ctx.fillRect(x,1300,6,2400);
  // janela com cortina de renda
  fRect(-20,300,330,440,'#ffffff',14);fRect(0,320,290,400,'#a8dcf7',8);ctx.save();rr(0,320,290,400,8);ctx.clip();for(const [x,y] of [[80,400],[220,460]]){fCirc(x,y,24,'#fff');fCirc(x+26,y+5,18,'#fff');fCirc(x-22,y+6,16,'#fff')}fRect(0,600,290,120,'#7cc47f');fCirc(60,600,60,'#6ab86e');fCirc(220,610,70,'#5fae63');ctx.restore();
  fRect(139,320,12,400,'#fff');for(const sd of[0,1]){fPoly(sd?[[230,296],[340,296],[330,760],[260,760]]:[[-50,296],[60,296],[30,760],[-40,760]],'#fff6ec');ctx.fillStyle='#f0e2d0';for(let y=320;y<760;y+=30){ctx.beginPath();ctx.arc(sd?290:5,y,5,0,7);ctx.fill()}}
  fRect(-60,286,410,14,'#b07e57',7);
  // relógio cuco
  ctx.save();ctx.translate(560,380);fPoly([[-70,-40],[0,-100],[70,-40]],'#7a4a2c');fRect(-56,-40,112,120,'#9a643c',8);fCirc(0,10,38,'#fff4dc');ctx.strokeStyle='#3a2a20';ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(0,10);ctx.lineTo(Math.sin(t*.5)*24,10-Math.cos(t*.5)*24);ctx.moveTo(0,10);ctx.lineTo(16,2);ctx.stroke();
  ctx.fillStyle='#c9a24a';ctx.fillRect(-20+Math.sin(t*2)*10,80,4,90);fCirc(-18+Math.sin(t*2)*10,175,10,'#c9a24a');ctx.restore();
  // quadros de família
  for(const [x,y,w,h,c] of [[820,380,160,200,'#ff9a5e'],[1020,420,140,140,'#7ab8e8'],[1200,360,170,220,'#b58ad6']]){fRect(x,y,w,h,'#7a4a2c',10);fRect(x+12,y+12,w-24,h-24,c,6);fCirc(x+w/2,y+h*.45,h*.16,'#fff2df');fRect(x+w/2-h*.2,y+h*.62,h*.4,h*.24,'#fff2df',12)}
  // cristaleira
  fRect(1500,500,330,800,'#8a5a3a',16);fRect(1530,530,270,360,'#cfe8f2',8);fRect(1530,930,270,330,'#7a4a2c',8);
  for(const [x,y,c] of [[1580,620,'#fff'],[1660,620,'#ffd9a8'],[1740,620,'#fff'],[1600,780,'#b8d8ff'],[1700,780,'#fff']]){fCirc(x,y,30,c);fCirc(x,y,18,'rgba(0,0,0,.06)')}fRect(1530,700,270,10,'#7a4a2c');fRect(1530,840,270,10,'#7a4a2c');
  // planta
  fPlant(1960,1300,1.2,false)}
function s2Table(t,o){o=o||{};
  // toalha xadrez
  fRect(-200,1230,2300,40,'#fff7ef',10);ctx.save();ctx.beginPath();ctx.rect(-200,1230,2300,330);ctx.clip();fRect(-200,1250,2300,320,'#e64848');ctx.fillStyle='#ffffff';for(let x=-200;x<2100;x+=60)for(let y=1250;y<1560;y+=60)if(((x/60|0)+(y/60|0))%2===0)ctx.fillRect(x,y,30,30);
  ctx.fillStyle='rgba(255,255,255,.35)';for(let x=-200;x<2100;x+=60)ctx.fillRect(x,1250,30,320);ctx.restore();
  ctx.fillStyle='rgba(0,0,0,.12)';ctx.fillRect(-200,1550,2300,10);
  // pratos e copos
  for(const x of [200,470,740,1010,1260,1530]){ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(x,1236,66,14,0,0,7);ctx.fill();ctx.fillStyle='#e9e4dd';ctx.beginPath();ctx.ellipse(x,1236,42,8,0,0,7);ctx.fill();
    fPoly([[x+90,1236],[x+120,1236],[x+124,1170],[x+86,1170]],'rgba(255,190,80,.85)');fRect(x+84,1166,42,8,'rgba(255,255,255,.7)',4)}
  // jarra de suco
  fPoly([[600,1236],[660,1236],[670,1120],[592,1120]],'#ffb347');fRect(584,1110,92,16,'#fff',6);ctx.strokeStyle='#fff';ctx.lineWidth=8;ctx.beginPath();ctx.arc(676,1170,26,-1.2,1.2);ctx.stroke();
  // travessa
  const n=o.coxinhas??14;ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(900,1232,150,26,0,0,7);ctx.fill();ctx.fillStyle='#ece6de';ctx.beginPath();ctx.ellipse(900,1232,120,18,0,0,7);ctx.fill();
  const P=[[0,0],[-50,4],[50,4],[-95,8],[95,8],[-25,-30],[25,-30],[-72,-24],[72,-24],[0,-58],[-48,-54],[48,-54],[-22,-84],[22,-84]];
  for(let i=Math.min(n,P.length)-1;i>=0;i--){const [dx,dy]=P[i];coxinha(900+(n===1?0:dx),1222+(n===1?0:dy),n===1?1.15:.9,(i%3-1)*.15)}}
function s2Cam(cx,cy,z,fn,sx){ctx.save();ctx.translate(sx||540,960);ctx.scale(z,z);ctx.translate(-cx,-cy);fn();ctx.restore()}
const FAM=[['VO',200,1.15],['PAI',470,1.3],['MAE',740,1.28],['BIA',1010,.86],['MAT',1260,1.12],['LUCAS',1530,1.08]];
function s2Family(t,expr,extra){for(const [k,x,s] of FAM){const o=Object.assign({t,expr:(expr&&expr[k])||'feliz',blink:tzBlink(t,x*.01)},(extra&&extra[k])||{});chr(k,x,1560,s,o)}}
function s2Tag(txt,x,y,k,col){if(k<=0)return;ctx.save();ctx.translate(x,y-(1-easeBack(Math.min(1,k)))*30);ctx.globalAlpha=Math.min(1,k*2);ctx.font='900 34px Inter';const w=ctx.measureText(txt).width+44;ctx.fillStyle=col;rr(-w/2,-30,w,60,30);ctx.fill();txtC(txt,0,2,'900 34px Inter','#fff');ctx.restore()}
function S2(t){const L=window.LINES,MK=window.MK||{};const st=i=>i===0?0:L[i].a-.12;const en=i=>i<L.length-1?L[i+1].a-.12:99;
  let i=0;for(let k=0;k<L.length;k++)if(t>=st(k))i=k;const a=st(i),b=Math.min(en(i),a+30),u=t-a,D=b-a,p=clamp(u/D);
  fRect(0,0,W,H,'#f7e3c4');ctx.save();
  switch(i){
  case 0:{const z=lerp(.6,.64,p);s2Cam(870,1200,z,()=>{s2Room(t);s2Family(t);s2Table(t)});
    tzKicker('A FAMÍLIA DO MATHEUS',300,seg(u,.1,.4),'#ff7a33');tzTitle('O ALMOÇO',430,seg(u,.25,.55),130,'#fff');tzTitle('DE DOMINGO',560,seg(u,.4,.7),110,'#ffd23f');break}
  case 1:{const cx=lerp(330,1450,eIO(p));s2Cam(cx,1080,1.0,()=>{s2Room(t);s2Family(t,{BIA:'rindo',LUCAS:'rindo'},{MAT:{armR:[128,42,'open']}});s2Table(t);
      for(const [k,x,s,lb,c] of [['VO',200,1.15,'VÓ','#4aa37a'],['PAI',470,1.3,'PAI','#3e6fd1'],['MAE',740,1.28,'MÃE','#9f74c2'],['BIA',1010,.86,'BIA','#f06aa0'],['MAT',1260,1.12,'MATHEUS','#ff7a33'],['LUCAS',1530,1.08,'LUCAS','#23a064']]){s2Tag(lb,x,1560-640*s-30,clamp(1-(Math.abs(x-cx)-300)/80),c)}});break}
  case 2:{s2Cam(330,1060,1.7,()=>{s2Room(t);s2Family(t,{VO:'rindo'},{VO:{armL:[40,-60,'open'],armR:[40,-60,'open']}});s2Table(t)});
    tzTitle('MUITA COXINHA',360,seg(u,.4,.7),110,'#ff7a33');break}
  case 3:{const z=lerp(2.6,3.3,eIO(p));s2Cam(900,1190,z,()=>{s2Room(t);s2Table(t,{coxinhas:1})});
    ctx.save();ctx.fillStyle='rgba(10,8,20,.6)';ctx.beginPath();ctx.rect(0,0,W,H);ctx.moveTo(840,1060);ctx.arc(540,1060,300,0,Math.PI*2,true);ctx.fill('evenodd');ctx.restore();
    tzTitle('A ÚLTIMA',380,seg(u,.5,.8),150,'#ffd23f');break}
  case 4:{const P=[['PAI',0,0,1],['MAE',540,0,-1],['BIA',0,860,1],['MAT',540,860,-1]];
    P.forEach(([k,x,y,lk],j)=>{const k0=seg(u,j*.12,j*.12+.25);if(k0<=0)return;ctx.save();ctx.beginPath();ctx.rect(x+6,y+6+(y?0:0),528,848);ctx.clip();fRect(x,y,540,860,['#ffe0b8','#e7d3ff','#ffd3e6','#ffe1c7'][j]);
      tzRays(x+270,y+430,t,'rgba(255,255,255,1)',.25);const s=k==='BIA'?3.0:2.4;chr(k,x+270,y+430+480*s,s,{t,expr:'desconfiado',look:lk,head:lk*4,blink:0,still:1});ctx.restore()});
    ctx.fillStyle='#fff';ctx.fillRect(536,0,8,H);ctx.fillRect(0,856,W,8);break}
  case 5:{ctx.save();ctx.beginPath();ctx.rect(0,0,540,H);ctx.clip();s2Cam(470,1080,1.35,()=>{s2Room(t);chr('PAI',470,1560,1.3,{t,expr:'pensativo',head:-10,look:1});s2Table(t)},270);
      for(let k=0;k<3;k++){const q=(u*.8+k/3)%1;ctx.globalAlpha=1-q;txtC('♪',380+k*50,560-q*200,'900 70px Inter','#3e6fd1');ctx.globalAlpha=1}ctx.restore();
    ctx.save();ctx.beginPath();ctx.rect(540,0,540,H);ctx.clip();s2Cam(960,1100,1.3,()=>{s2Room(t);chr('BIA',1010,1560,.86,{t,expr:'desconfiado',look:-1,armL:[lerp(20,100,eIO(seg(u,.3,1))),-10,'open']});s2Table(t)},810);ctx.restore();
    ctx.fillStyle='#fff';ctx.fillRect(536,0,8,H);s2Tag('FINGINDO',270,330,seg(u,.1,.4),'#3e6fd1');s2Tag('JÁ NO PRATO',810,330,seg(u,.5,.8),'#f06aa0');break}
  case 6:{s2Cam(1530,1050,1.9,()=>{s2Room(t);const ch=Math.abs(Math.sin(t*9));chr('LUCAS',1530,1560,1.08,{t,expr:'feliz',talk:.2+ch*.6,armR:[40,-140,'fist']});const [hx,hy]=s2hand(1530,1560,1.08,1,[40,-140]);coxinha(hx-6,hy-30,1.05,-.4);s2Table(t)});
    for(let k=0;k<6;k++){const q=(u*1.4+k/6)%1;fCirc(560+Math.sin(k*2)*90,720+q*240,5,'#e0a050')}
    tzTitle('NHAC!',380,seg(u,D*.45,D*.45+.25),130,'#2bb673');break}
  case 7:{e1Door(u,{night:false,knock:u>.2&&u<.9?.6:0});tzTitleAt2('DING',360,700,seg(u,.15,.35),-.12);tzTitleAt2('DONG',720,820,seg(u,.45,.65),.12);break}
  case 8:{const half=D*.38;
    if(u<half){fRect(0,0,W,H,'#f7e3c4');fRect(0,1500,W,H-1500,'#b9844f');fRect(160,240,760,1270,'#7a4a2c',14);fRect(190,270,700,1240,'#fff2df');
      chr('ENT',540,1520,1.45,{t,expr:'sorriso',armL:[30,-95,'rest'],armR:[30,-95,'rest']});ctx.save();ctx.translate(540,1520-300*1.45);fRect(-120,-80,240,160,'#c79a5e',8);fRect(-120,-14,240,18,'#a87c42');fRect(30,30,64,36,'#fff',4);ctx.restore();
      s2Tag('ENTREGA PRA VÓ',540,250,seg(u,.1,.35),'#d63a3a')}
    else{const uu=u-half;s2Cam(870,1200,.62,()=>{s2Room(t);s2Family(t,{VO:'rindo',PAI:'rindo',MAE:'rindo',BIA:'rindo',MAT:'rindo',LUCAS:'rindo'},Object.fromEntries(FAM.map(([k])=>[k,{armL:[150,20,'fist'],armR:[150,20,'fist'],lift:Math.abs(Math.sin(t*6))*14}])));s2Table(t,{coxinhas:14});
        ctx.save();ctx.translate(1180,1180);fRect(-130,-60,260,70,'#c79a5e',8);fPoly([[-130,-60],[-110,-150],[110,-150],[130,-60]],'#d9ae72');for(let k=0;k<7;k++)coxinha(-90+k*30,-58-(k%2)*16,.8,(k%3-1)*.2);ctx.restore()});
      tzConfetti(uu,3,90);tzTitle('MAIS COXINHA!',420,seg(uu,0,.3),120,'#ff7a33')}
    break}
  case 9:{const half=D*.66;
    if(u<half){e1PhoneScene(u,()=>e1Chat(u,[mm({l:['Não come essa','coxinha.'],red:1,time:'13:02'},seg(u,.25,.5))],{future:1,typing:u<.25}),{glitch:1,red:1,buzz:u<.5})}
    else{const uu=u-half;s2Cam(1260,1060,2.0,()=>{s2Room(t);chr('MAT',1260,1560,1.12,{t,expr:'desconfiado',look:-1,armR:[40,-140,'fist']});const [hx,hy]=s2hand(1260,1560,1.12,1,[40,-140]);coxinha(hx-4,hy-30,1.1,-.3);s2Table(t)});
      tzKicker('VOCÊ (DO FUTURO)',300,seg(uu,0,.3),'#e0463d')}
    break}
  default:{fRect(0,0,W,H,'#1d2350');tzRays(540,1100,t,'rgba(255,255,255,1)',.05);
    e1Choice(seg(u,.05,.35),'A',['COME','a coxinha'],'#2bb673',520);e1Choice(seg(u,.25,.55),'B',['NÃO COME','(obedece)'],'#e0463d',800);
    chr('MAT',540,1530,.9,{t,expr:'desconfiado',look:Math.sin(u*3)>0?-1:1,armR:[40,-140,'fist']});const [hx,hy]=s2hand(540,1530,.9,1,[40,-140]);coxinha(hx-4,hy-24,.9,-.3);
    const ec=seg(t,(MK.fim||99),(MK.fim||99)+.4);if(ec>0){fRect(0,0,W,H,`rgba(15,18,45,${(ec*.94).toFixed(2)})`);tzKicker('A FAMÍLIA DO MATHEUS',330,ec,'#ff7a33');tzTitle('EP. 2 • EM BREVE',470,ec,96,'#ffd23f');tzKicker('SEGUE PRA NÃO PERDER!',600,ec,'#2bb673')}
    else tzKicker('COMENTA A OU B',300,seg(u,.05,.35),'#ff7a33')}
  }
  ctx.restore();tzCaption(t)}
