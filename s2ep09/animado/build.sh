python3 - <<'P'
import re
h=open('../../s2ep08/animado/animacao.html',encoding='utf-8').read()
c=open('s2ep9_cenas.js',encoding='utf-8').read()
i=h.index("function render(")
h=h[:i]+c.rstrip()+"\n\n"+h[i:]
h=re.sub(r"<title>.*?</title>","<title>E se você acordasse — S2 Ep.9</title>",h,count=1)
open('animacao.html','w',encoding='utf-8').write(h)
P
