# uso: frames.py lines.json sheet.jpg t1 t2...   |  frames.py lines.json --video out_dir fps dur
import sys,base64,io,json,os,subprocess
from playwright.sync_api import sync_playwright
from PIL import Image
L=json.load(open(sys.argv[1]))
with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page(viewport={"width":1080,"height":1920})
    pg.add_init_script("window.__RENDER__=true;window.NO_TITLES=true");pg.goto("file:///home/claude/esesobrassesoum/ep10/animado/animacao.html")
    pg.evaluate("Promise.all([document.fonts.load('700 100px Oswald'),document.fonts.load('900 40px Inter'),document.fonts.load('600 20px Inter'),document.fonts.load('800 20px Inter'),document.fonts.load('700 50px Caveat')])");pg.wait_for_timeout(600)
    pg.add_script_tag(content=open('/home/claude/esesobrassesoum/s3ep01/animado/m5.js').read());pg.add_script_tag(content=open('/home/claude/esesobrassesoum/s3ep01/animado/teaser.js').read())
    for x in os.environ.get('EXTRA','').split():pg.add_script_tag(content=open(x).read())
    FN=os.environ.get('FN','TZ');MK=os.environ.get('MK','{}');pg.evaluate(f'window.MK={MK}')
    pg.evaluate(f"window.LINES={json.dumps(L)}")
    if sys.argv[2]=='--video':
        out,fps,dur=sys.argv[3],int(sys.argv[4]),float(sys.argv[5])
        ff=subprocess.Popen(['ffmpeg','-y','-loglevel','error','-f','image2pipe','-framerate',str(fps),'-c:v','mjpeg','-i','-','-c:v','libx264','-preset','veryfast','-crf','18','-pix_fmt','yuv420p',out],stdin=subprocess.PIPE)
        n=int(dur*fps)
        for i in range(n):
            d=pg.evaluate(f"(()=>{{ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;{FN}({i/fps});return cv.toDataURL('image/jpeg',.92)}})()")
            ff.stdin.write(base64.b64decode(d.split(',')[1]))
        ff.stdin.close();ff.wait()
    else:
        ims=[]
        for t in sys.argv[3:]:
            d=pg.evaluate(f"(()=>{{ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;{FN}({float(t)});return cv.toDataURL('image/jpeg',.85)}})()")
            ims.append(Image.open(io.BytesIO(base64.b64decode(d.split(',')[1]))).convert('RGB'))
        w,h=int(os.environ.get("TW",360)),int(os.environ.get("TW",360))*16//9;cols=min(len(ims),5);rows=(len(ims)+cols-1)//cols
        sh=Image.new('RGB',(w*cols,h*rows))
        for i,im in enumerate(ims): sh.paste(im.resize((w,h)),((i%cols)*w,(i//cols)*h))
        sh.save(sys.argv[2],quality=85)
    b.close()
