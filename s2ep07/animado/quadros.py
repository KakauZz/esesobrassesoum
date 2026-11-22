# uso: python3 quadros.py saida.jpg t1 t2 t3 ...  (tempos de animação) -> folha de quadros
import sys,base64,os
from playwright.sync_api import sync_playwright
from PIL import Image
import io
out=sys.argv[1]; ts=[float(x) for x in sys.argv[2:]]
HTML=os.path.abspath("animacao.html")
ims=[]
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":1080,"height":1920})
    pg.add_init_script("window.__RENDER__=true;window.NO_TITLES=true"); pg.goto("file://"+HTML)
    pg.evaluate("Promise.all([document.fonts.load('700 100px Oswald'),document.fonts.load('600 70px Caveat')])"); pg.wait_for_timeout(600)
    for t in ts:
        d=pg.evaluate(f"(()=>{{render({t},{{treal:-1,tin:99,tout:99,hud:''}});return document.querySelector('canvas').toDataURL('image/jpeg',.85)}})()")
        ims.append(Image.open(io.BytesIO(base64.b64decode(d.split(',')[1]))).convert('RGB'))
    b.close()
w=540;h=960;cols=min(len(ims),4);rows=(len(ims)+cols-1)//cols
sheet=Image.new('RGB',(w*cols,h*rows))
for i,im in enumerate(ims): sheet.paste(im.resize((w,h)),((i%cols)*w,(i//cols)*h))
sheet.save(out,quality=85)
