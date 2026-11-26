const C3=[
 {n:'1',t:['ACORDOU BEM','E SORRINDO'],bg:['#ffb347','#ff7a33'],p:{expr:'feliz',armL:[150,20,'fist'],armR:[150,20,'fist']},s:'"Bom diaaa, mundo!" ☀️'},
 {n:'2',t:['MODO ZUMBI','ATIVADO'],bg:['#2a3a3a','#5d7a6a'],p:{expr:'desconfiado',head:8,armL:[10,-20,'open'],armR:[10,-20,'open']},s:'"Cafééé... preciso de café..." ☕'},
 {n:'3',t:['ATRASADO','PRA TUDO'],bg:['#7a1f2f','#d63a3a'],p:{expr:'assustado',armL:[40,-150,'open'],armR:[40,-150,'open']},s:'"SÃO 7:55?! A AULA É 8H!" 🏃'},
 {n:'4',t:['NEM ACORDOU','AINDA'],bg:['#141a45','#3a1f6e'],p:{expr:'pensativo',head:-12,armR:[24,-145,'fist']},s:'"só mais 5 minutinhos..." 😴'}];
function CAR3(i){const t=.3;
 if(i===0){cBg('#ffb347','#ff5e8a',1);cPill('7 HORAS DA MANHÃ',110,'#1b1440');cT(['QUAL MATHEUS','É VOCÊ?'],250,120,['#fff','#1b1440']);
   [0,1,2,3].forEach(k=>{const x=170+k*247;ctx.save();ctx.globalAlpha=.9;ctx.fillStyle='#1b1440';ctx.beginPath();ctx.arc(x,520,70,0,7);ctx.fill();ctx.restore();txtC(String(k+1),x,550,'900 84px Inter','#ffd23f')});
   matheus5(540,1190,.8,{expr:'surpreso',t,blink:0,armR:[128,42,'open']});cGround(1194);cArrow();cHandle()}
 else if(i<=4){const o=C3[i-1];cBg(o.bg[0],o.bg[1]);
   ctx.save();ctx.fillStyle='#ffd23f';ctx.beginPath();ctx.arc(540,190,95,0,7);ctx.fill();ctx.restore();txtC(o.n,540,222,'900 120px Inter','#1b1440');
   cT(o.t,360,96,['#fff','#ffd23f']);
   matheus5(540,1130,.8,Object.assign({t,blink:0},o.p));cGround(1134);
   txtC(o.s,540,1184,'800 36px Inter','#fff');cHandle();if(i<4)cArrow()}
 else {cBg('#ff7a33','#5b2a9e',1);cT(['COMENTA O','NÚMERO 👇'],190,120,['#fff','#ffd23f']);
   matheus5(540,1010,.8,{expr:'rindo',t,blink:0,armR:[128,42,'open']});cGround(1014);
   ctx.fillStyle='#ffd23f';rr(300,1100,480,96,48);ctx.fill();txtC('SEGUIR 👉',540,1164,'900 44px Inter','#1b1440');
   txtC('tem mais do Matheus no perfil',540,1250,'800 34px Inter','#fff');cHandle()}
}
