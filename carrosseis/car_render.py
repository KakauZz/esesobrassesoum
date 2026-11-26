import os,sys,base64,io
from playwright.sync_api import sync_playwright
from PIL import Image
out=sys.argv[1];fn=sys.argv[2];n=int(sys.argv[3])
with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page(viewport={"width":1080,"height":1920})
    pg.add_init_script("window.__RENDER__=true;window.NO_TITLES=true");pg.goto("file:///home/claude/esesobrassesoum/ep10/animado/animacao.html")
    pg.evaluate("Promise.all([document.fonts.load('700 100px Oswald'),document.fonts.load('900 40px Inter'),document.fonts.load('600 20px Inter'),document.fonts.load('800 20px Inter')])");pg.wait_for_timeout(600)
    for x in ['/tmp/m5.js','/tmp/s3/teaser.js','/tmp/m6.js','/tmp/m7.js','/tmp/s3/e1flat.js','/tmp/s3/ep1.js','/tmp/s3/car.js','/tmp/s3/pano.js','/tmp/s3/pano2.js','/tmp/s3/car3.js']:pg.add_script_tag(content=open(x).read())
    pg.evaluate('window.MK={};window.LINES=[]')
    pg.wait_for_timeout(800)
    for i in range(n):
        d=pg.evaluate(f"(()=>{{ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;{fn}({i});return cv.toDataURL('image/png')}})()")
        im=Image.open(io.BytesIO(base64.b64decode(d.split(',')[1]))).convert('RGB').crop((0,0,1080,1350))
        im.save(f'{out}_{i+1}.jpg',quality=92)
    b.close()
