const CH=1350;
function cBg(c1,c2,rays){ctx.setTransform(1,0,0,1,0,0);const g=ctx.createLinearGradient(0,0,0,CH);g.addColorStop(0,c1);g.addColorStop(1,c2);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);if(rays)tzRays(540,560,0,'rgba(255,255,255,1)',.06)}
function cT(lines,y,size,col,gap){lines.forEach((l,i)=>tzTitle(l,y+i*(gap||size*1.08),1,size,Array.isArray(col)?col[i]:col))}
function cHandle(){txtC('@matheusvoce.decide',540,CH-46,'800 30px Inter','rgba(255,255,255,.75)')}
function cArrow(){ctx.save();ctx.fillStyle='#ffd23f';rr(760,CH-150,260,70,35);ctx.fill();txtC('ARRASTA →',890,CH-114,'900 30px Inter','#1b1440');ctx.restore()}
function cPill(txt,y,col){tzKicker(txt,y,1,col||'#ff7a33')}
function cGround(y,a){ctx.save();ctx.globalAlpha=a||.3;m5ell(540,y,260,26,'#000');ctx.restore()}
const ENTp={expr:'sorriso',hair:'short',top:'sweater',cap:'#d63a3a',capD:'#a82a2a',capShade:74,pal:{skin:'#d9a07a',skinS:'#c48a64',hair:'#2a1d15',hairD:'#1c130d',hood:'#2c3e6b',hoodS:'#243459',hoodD:'#1c2948',hoodL:'#3a4f85',jean:'#2a2d36',jeanS:'#23262e',jeanD:'#1a1c22',shoe:'#1f1f25',shoeS:'#2c2c35',shoeD:'#3a3a44'},armL:[30,-95,'rest'],armR:[30,-95,'rest'],t:0};
function CAR1(i){const t=.3;
 if(i===0){cBg('#141a45','#3a1f6e',1);cPill('NOVA TEMPORADA',110,'#ff7a33');cT(['E SE O SEU CELULAR','RECEBESSE MENSAGENS','DO FUTURO?'],220,84,['#fff','#fff','#7fd3ff']);
   tzPhone(330,860,.95,-.08,()=>{tzLock(0,'23:59');tzNotif(-30,1,'Você (do futuro)','Nova mensagem')});glow(330,860,300,'rgba(150,180,255,A)',.25);
   matheus5(780,1210,1.05,{expr:'surpreso',t,blink:0,armL:[40,-150,'open'],armR:[40,-150,'open']});cGround(1214,.25);cArrow();cHandle()}
 if(i===1){cBg('#ff9a4d','#e0562a',1);cPill('TEMPORADA 3',110,'#2b1b12');cT(['ESSE É O','NOVO MATHEUS'],230,100,'#fff');
   matheus5(540,1195,1.2,{expr:'feliz',t,blink:0,head:5,armR:[128,42,'open']});cGround(1199);
   txtC('24 anos • mora sozinho em São Paulo',540,1255,'800 34px Inter','#fff');cHandle()}
 if(i===2){cBg('#1d2350','#2c3264');cPill('REMODELADO DO ZERO',110,'#4f5bd5');cT(['DE FRENTE, DE LADO','E DE COSTAS'],230,80,'#fff');
   matheus5(230,1150,1.05,{expr:'feliz',t,blink:0});matheusView(540,1150,1.05,'side',{t});matheusView(850,1150,1.05,'back',{t});
   [230,540,850].forEach(x=>{ctx.save();ctx.globalAlpha=.3;m5ell(x,1154,120,16,'#000');ctx.restore()});
   txtC('Qual ângulo ficou melhor? 👇',540,1250,'800 36px Inter','#ffd23f');cHandle()}
 if(i===3){cBg('#0b0e22','#1b1f45');cPill('23:59 • NÚMERO DESCONHECIDO',110,'#5a6178');cT(['A PRIMEIRA','MENSAGEM...'],230,90,'#fff');
   e1Bubble(540,560,1.5,['Oi, Matheus. Sou eu.','Você, daqui a 10 anos.'],0,1,'+55 11 9????-????');
   matheus5(540,1225,.82,{expr:'desconfiado',t,blink:0,armR:[24,-145,'fist'],head:6});txtC('O que você responderia? 👇',540,1262,'800 36px Inter','#ffd23f');cHandle()}
 if(i===4){cBg('#1a0b14','#3a0f1f');cPill('E DEPOIS...',110,'#c33');cT(['O AVISO'],230,110,'#ff6b7d');
   e1Bubble(540,470,1.5,['Amanhã, NÃO abre a porta.','Aconteça o que acontecer.'],1,1,'VOCÊ (DO FUTURO)');
   matheus5(540,1235,.95,{expr:'assustado',t,blink:0,armL:[40,-150,'open'],armR:[40,-150,'open']});cHandle()}
 if(i===5){cBg('#090b1c','#141833');cPill('DIA 2 • 19:00 • TOC TOC TOC',110,'#5a6178');cT(['QUEM ESTÁ','NA PORTA?'],230,110,['#fff','#ffd23f']);
   ctx.save();ctx.translate(0,-120);e1Peep(0,0);ctx.restore();ctx.fillStyle='#090b1c';ctx.fillRect(0,0,W,380);cT(['QUEM ESTÁ','NA PORTA?'],200,110,['#fff','#ffd23f']);cPill('DIA 2 • 19:00 • TOC TOC TOC',90,'#5a6178');
   ctx.fillStyle='#090b1c';ctx.fillRect(0,1240,W,CH);txtC('Você abriria? Comenta SIM ou NÃO 👇',540,1270,'800 36px Inter','#ffd23f');cHandle()}
 if(i===6){cBg('#ff7a33','#5b2a9e',1);cT(['EP. 1','HOJE ÀS 18H'],190,140,['#fff','#ffd23f']);
   matheus5(540,1170,1.0,{expr:'rindo',t,blink:0,armL:[150,20,'fist'],armR:[150,20,'fist']});cGround(1174);
   cPill('VOCÊ DECIDE O PRÓXIMO EPISÓDIO',1190,'#1b1440');txtC('Segue pra não perder 🔔',540,1258,'800 38px Inter','#fff');cHandle()}
}
const MSGS=[['Não compra aquele','celular amanhã.'],['Não manda mensagem','pra ela hoje.'],['Hoje, não sai de casa.'],['Aceita o convite','que vai chegar.'],['Não abre a porta.']];
const POSES=[{expr:'desconfiado',armR:[24,-145,'fist'],head:6},{expr:'surpreso',armL:[40,-150,'open'],armR:[40,-150,'open']},{expr:'pensativo',armR:[24,-145,'fist'],head:-6},{expr:'feliz',armR:[80,-5,'point']},{expr:'assustado',armL:[40,-150,'open'],armR:[40,-150,'open']}];
const BGS=[['#1d2350','#4f5bd5'],['#2a0f3a','#7a2a8e'],['#0f2a3a','#1f6e8e'],['#3a2a0f','#c4762a'],['#1a0b14','#6e1f2f']];
function CAR2(i){const t=.3;
 if(i===0){cBg('#141a45','#3a1f6e',1);cPill('SEU EU DO FUTURO TE MANDA',110,'#ff7a33');cT(['1 MENSAGEM.','QUAL VOCÊ','OBEDECERIA?'],250,100,['#fff','#fff','#ffd23f']);
   tzPhone(540,900,.8,0,()=>{tzLock(0,'23:59');tzNotif(-30,1,'Você (do futuro)','5 mensagens')});glow(540,900,320,'rgba(150,180,255,A)',.25);cArrow();cHandle()}
 else if(i<=5){const k=i-1;cBg(BGS[k][0],BGS[k][1]);cT([`MENSAGEM ${k+1}`],150,96,'#fff');
   e1Bubble(540,420,1.6,MSGS[k],k===4,1,'VOCÊ (DO FUTURO)');
   matheus5(540,1215,.95,Object.assign({t,blink:0},POSES[k]));cGround(1219);
   txtC(k===4?'(essa aqui o Matheus recebeu de verdade 👀)':'Obedece ou ignora? 👇',540,1270,'800 34px Inter','#ffd23f');cHandle()}
 else {cBg('#ff7a33','#5b2a9e',1);cT(['COMENTA O NÚMERO','DA QUE VOCÊ','IGNORARIA 👇'],200,90,['#fff','#fff','#ffd23f']);
   matheus5(540,1170,.95,{expr:'rindo',t,blink:0,armR:[128,42,'open']});cGround(1174);
   cPill('SÉRIE NOVA TODO DIA ÀS 18H',1200,'#1b1440');txtC('O Matheus recebeu a nº 5... e agora?',540,1262,'800 34px Inter','#fff');cHandle()}
}
