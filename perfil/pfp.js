function PFP(t){ctx.setTransform(1,0,0,1,0,0);
  const g=ctx.createRadialGradient(540,470,40,540,540,760);g.addColorStop(0,'#9fe3ff');g.addColorStop(.45,'#4f6bdc');g.addColorStop(1,'#2a1f6e');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.translate(540,520);ctx.globalAlpha=.12;ctx.fillStyle='#fff';for(let k=0;k<16;k++){ctx.rotate(Math.PI/8);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(-70,-900);ctx.lineTo(70,-900);ctx.closePath();ctx.fill()}ctx.restore();
  glow(540,470,420,'rgba(220,240,255,A)',.3);
  matheus5(540,1690,2.3,{expr:'feliz',t,blink:0,head:5,armR:[128,42,'open'],armL:[10,-60,'pocket']});
}
