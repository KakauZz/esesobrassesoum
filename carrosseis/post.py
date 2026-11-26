import sys
from PIL import Image,ImageDraw
pre,pfp=sys.argv[1],sys.argv[2]=='1'
th=[Image.open(f'/tmp/s3/car/th_{t}.jpg').resize((290,362)) for t in (3,36,82)]
im=Image.open(f'/tmp/s3/car/{pre}_5.jpg')
for k,t in enumerate(th):
    m=Image.new('L',t.size,0);ImageDraw.Draw(m).rounded_rectangle((0,0,t.size[0],t.size[1]),18,fill=255);im.paste(t,(75+k*320,790),m)
if pfp:
    pf=Image.open('/tmp/s3/foto_perfil_matheus.png').resize((168,168));m=Image.new('L',(168,168),0);ImageDraw.Draw(m).ellipse((0,0,168,168),fill=255);im.paste(pf,(96,516),m)
im.save(f'/tmp/s3/car/{pre}_5.jpg',quality=92)
ims=[Image.open(f'/tmp/s3/car/{pre}_{i}.jpg') for i in range(1,6)]
s=Image.new('RGB',(1080*5+40*4,1350),'white')
for i,x in enumerate(ims):s.paste(x,(i*1120,0))
s.resize((s.width//4,s.height//4)).save(f'/tmp/s3/car/{pre}_sheet.jpg')
