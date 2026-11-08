# editor.py — monta o vídeo POR CAMADAS, sem re-renderizar tudo a cada mudança.
#
#   python editor.py cenas    -> renderiza só as cenas que mudaram (cache em cache/)
#   python editor.py montar   -> monta o vídeo final: corta/ajusta as cenas no tempo da voz (ffmpeg),
#                                põe legenda + topo + flash dos cortes (camada ASS) e mixa o áudio
#   python editor.py tudo     -> as duas coisas
#
# Mudou a voz ou o texto?  -> python plano.py && python editor.py montar   (1-2 min)
# Mudou o desenho de uma cena? -> python editor.py tudo                   (só aquela cena é refeita)
import os, sys, json, hashlib, base64, subprocess, re
HERE = os.path.dirname(os.path.abspath(__file__)); O = os.path.join(HERE, "saida"); C = os.path.join(HERE, "cache")
os.makedirs(C, exist_ok=True)
FPS = 30; W, H = 1080, 1920
HTML = os.path.join(HERE, "animacao.html")

def md5(s): return hashlib.md5(s.encode("utf-8")).hexdigest()[:10]

# ---------------------------------------------------------------- 1) cache de cenas
def cenas():
    from playwright.sync_api import sync_playwright
    PL = json.load(open(os.path.join(O, "plano.json")))
    src = open(HTML, encoding="utf-8").read()
    idx_p = os.path.join(C, "index.json"); idx = json.load(open(idx_p)) if os.path.exists(idx_p) else {}
    with sync_playwright() as p:
        b = p.chromium.launch(); pg = b.new_page(viewport={"width": W, "height": H})
        pg.add_init_script("window.__RENDER__=true;window.NO_TITLES=true"); pg.goto("file://" + HTML)
        pg.evaluate("Promise.all([document.fonts.load('700 100px Oswald'),document.fonts.load('600 70px Caveat')])"); pg.wait_for_timeout(800)
        S = pg.evaluate("S.map(s=>[s.a,s.b,s.fn.toString()])")
        common = src
        for a, bb, fs in S: common = common.replace(fs, "")
        hc = md5(common)
        usadas = set()
        for sh in PL["shots"]:
            for a, bb, fs in S:
                if a <= sh["a"] < bb: usadas.add((a, bb, fs))
        for a, bb, fs in sorted(usadas):
            key = f"{a}_{bb}"; h = md5(fs + hc); fn = os.path.join(C, f"cena_{key}_{h}.mp4")
            if os.path.exists(fn): idx[key] = os.path.basename(fn); continue
            print("renderizando cena", key, flush=True)
            tmp = fn.replace(".mp4", ".tmp.mp4")
            ff = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", str(FPS), "-c:v", "mjpeg", "-i", "-",
                                   "-c:v", "libx264", "-crf", "17", "-preset", "veryfast", "-pix_fmt", "yuv420p", "-r", str(FPS), tmp], stdin=subprocess.PIPE)
            n = int(round((bb - a) * FPS))
            for f in range(n):
                t = a + f / FPS
                img = pg.evaluate("([t])=>(render(t,{treal:-1,tin:99,tout:99,hud:'',first:false,last:false}),document.getElementById('c').toDataURL('image/jpeg',0.92))", [t])
                ff.stdin.write(base64.b64decode(img.split(",")[1]))
            ff.stdin.close()
            if ff.wait() == 0:
                os.replace(tmp, fn); idx[key] = os.path.basename(fn)
                for old in os.listdir(C):  # apaga versões antigas da mesma cena
                    if old.startswith(f"cena_{key}_") and old != os.path.basename(fn): os.remove(os.path.join(C, old))
            json.dump(idx, open(idx_p, "w"), indent=1)
        b.close()
    print("cache ok")

# ---------------------------------------------------------------- 2) camada de texto (ASS)
BIG = {"MORRE", "ALGUÉM", "AÍ", "UM"}
EMPH = re.compile(r"^(MORRE|ALGUÉM|AÍ|SUMINDO|RASTRO|MENOS|UM|VOCÊ|MATHEUS|NINGUÉM|CARTA|NÃO|SOZINHO|GRAÇA|SILÊNCIO|OITO|BILHÕES|A|B)$")
def ts(x):
    x = max(0, x); h = int(x // 3600); m = int(x % 3600 // 60); s = x % 60
    return f"{h}:{m:02d}:{s:05.2f}"
from PIL import ImageFont
HUDF = ImageFont.truetype(os.path.join(os.path.dirname(os.path.abspath(__file__)), "fonts", "Oswald.ttf"), 58)
try: HUDF.set_variation_by_axes([700])
except Exception: pass
def rrect(w, h, r):
    k = 0.55 * r
    return (f"m {r} 0 l {w-r} 0 b {w-r+k} 0 {w} {r-k} {w} {r} l {w} {h-r} b {w} {h-r+k} {w-r+k} {h} {w-r} {h} "
            f"l {r} {h} b {r-k} {h} 0 {h-r+k} 0 {h-r} l 0 {r} b 0 {r-k} {r-k} 0 {r} 0")
def circ(r):
    k = 0.55 * r; d = 2 * r
    return f"m {r} 0 b {r+k} 0 {d} {r-k} {d} {r} b {d} {r+k} {r+k} {d} {r} {d} b {r-k} {d} 0 {r+k} 0 {r} b 0 {r-k} {r-k} 0 {r} 0"
YEL, RED, GOLD, REDDOT = "&H4AD8FF&", "&H4A4AFF&", "&H5CC7F2&", "&H303BFF&"

def legenda_ass(PL, path):
    ev = []
    # legenda palavra por palavra
    for c in PL["caps"]:
        ws = c["words"]; n = len(ws)
        if c.get("wts"): st = c["wts"]
        else:
            wt = [len(w) + 2 for w in ws]; tot = sum(wt); acc = 0; st = []
            for x in wt: st.append(c["start"] + acc / tot * (c["end"] - c["start"])); acc += x
        chunks = []; ch = []
        for i, w in enumerate(ws):
            ln = sum(len(ws[j]) + 1 for j in ch) + len(w)
            big = re.sub(r"[^A-ZÁÉÍÓÚÂÊÔÃÕÇ0-9]", "", w.upper()) in BIG
            if ch and (len(ch) >= 3 or ln > 15 or big): chunks.append(ch); ch = []
            ch.append(i)
            if big: chunks.append(ch); ch = []
        if ch: chunks.append(ch)
        for i in range(n):
            t0 = st[i]; t1 = st[i + 1] if i + 1 < n else c["end"] + 0.25
            bk = next(b for b in chunks if i in b)
            lines = []; ln = []
            for j in bk:
                L = sum(len(ws[k]) + 1 for k in ln) + len(ws[j])
                if ln and L > 11: lines.append(ln); ln = []
                ln.append(j)
            lines.append(ln)
            parts = []
            for L in lines:
                seg = []
                for j in L:
                    w = ws[j].upper(); clean = re.sub(r"[^A-ZÁÉÍÓÚÂÊÔÃÕÇ0-9]", "", w)
                    if j == i and clean in BIG: seg.append("{\\1a&H00&\\c" + RED + "\\fscx165\\fscy165\\t(0,140,\\fscx135\\fscy135)}" + w + "{\\fscx100\\fscy100}")
                    elif j == i: seg.append("{\\1a&H00&\\c" + (RED if EMPH.match(clean) else YEL) + "}" + w)
                    elif j < i: seg.append("{\\1a&H00&\\c&HFFFFFF&}" + w)
                    else: seg.append("{\\1a&H9A&\\c&HFFFFFF&}" + w)
                parts.append(" ".join(seg))
            pop = "{\\fscx72\\fscy72\\t(0,130,\\fscx100\\fscy100)}" if i == bk[0] else ""
            ev.append(f"Dialogue: 2,{ts(t0)},{ts(t1)},Cap,,0,0,0,,{{\\pos(540,1760)}}{pop}" + "\\N".join(parts))
    # topo: ponto vermelho piscando + cidade/dia/hora
    for sh in PL["shots"]:
        if not sh.get("hud"): continue
        a, d = sh["start"], sh["dur"]; t = a
        while t < a + d - 1e-3:
            t2 = min(a + d, t + 0.25); txt = sh["hud"]
            if txt.startswith("DIAS:"):
                _, x0, x1 = txt.split(":"); p = (t - a) / d; txt = f"DIA {round(int(x0) + (int(x1) - int(x0)) * p ** 1.3)} · 03:00"
            on = int(t * 2) % 2 == 0
            lab = f"SÃO PAULO · {txt}"; tw = HUDF.getlength(lab) * 0.572  # escala medida do libass
            pw = int(tw + 46 + 36 + 40); x0 = 540 - pw // 2; y0, ph = 160 - 42, 84
            # selo (retângulo arredondado), bolinha dentro do selo, texto à direita da bolinha
            ev.append(f"Dialogue: 3,{ts(t)},{ts(t2)},Pill,,0,0,0,,{{\\an7\\pos({x0},{y0})\\p1}}{rrect(pw, ph, 18)}")
            ev.append(f"Dialogue: 4,{ts(t)},{ts(t2)},Pill,,0,0,0,,{{\\an7\\pos({x0 + 36},{160 - 12})\\p1\\1c{REDDOT}\\1a{'&H00&' if on else '&HB0&'}}}{circ(12)}")
            ev.append(f"Dialogue: 5,{ts(t)},{ts(t2)},Hud,,0,0,0,,{{\\an4\\pos({x0 + 36 + 46},160)}}{lab}")
            t = t2
    # contador de notificações no gancho
    t = 0.0
    while t < 6.2 and "ep01" in HERE:
        nn = int(12 + (min(1, t / 6)) ** 1.4 * 987)
        ev.append(f"Dialogue: 3,{ts(t)},{ts(t + 0.1)},Cnt,,0,0,0,,{{\\pos(540,300)}}{{\\fs34\\1a&H40&}}NOTIFICAÇÕES\\N{{\\fs96\\1a&H00&}}{nn}")
        t += 0.1
    # flash branco nos cortes (menos nos cortes contínuos)
    for k, sh in enumerate(PL["shots"][1:], 1):
        if sh.get("cont"): continue
        a0 = sh["start"]
        ev.append(f"Dialogue: 1,{ts(a0)},{ts(a0 + 0.16)},Flash,,0,0,0,,{{\\pos(0,0)\\an7\\p1\\1a&H60&\\fad(0,150)}}m 0 0 l {W} 0 {W} {H} 0 {H}")
    head = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {W}
PlayResY: {H}
WrapStyle: 2
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,Anton,142,&H00FFFFFF,&H00FFFFFF,&H00000000,&H70000000,0,0,0,0,100,100,1,0,1,6,5,5,20,20,20,1
Style: Hud,Oswald,58,&H00{GOLD[2:-1]},&H00FFFFFF,&H00000000,&H00000000,-1,0,0,0,100,100,1,0,1,0,0,5,20,20,20,1
Style: Pill,Arial,20,&H28220E0E,&H00FFFFFF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,0,0,7,0,0,0,1
Style: Cnt,Oswald,52,&H00FFFFFF,&H00FFFFFF,&H30281614,&H00000000,-1,0,0,0,100,100,0,0,3,16,0,5,20,20,20,1
Style: Flash,Arial,20,&H00FFFFFF,&H00FFFFFF,&H00FFFFFF,&H00000000,0,0,0,0,100,100,0,0,1,0,0,7,0,0,0,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    open(path, "w", encoding="utf-8").write(head + "\n".join(ev) + "\n")

# ---------------------------------------------------------------- 3) montagem
def montar(saida="ep01_final.mp4"):
    PL = json.load(open(os.path.join(O, "plano.json"))); idx = json.load(open(os.path.join(C, "index.json")))
    keys = [tuple(map(float, k.split("_"))) for k in idx]
    ins = []; fl = []
    for k, sh in enumerate(PL["shots"]):
        A, B = next((a, b) for a, b in keys if a <= sh["a"] < b)
        f = os.path.join(C, idx[f"{A:g}_{B:g}"] if f"{A:g}_{B:g}" in idx else idx[f"{int(A)}_{int(B)}"])
        ins += ["-i", f]
        ss = sh["a"] - A; ln = sh["b"] - sh["a"]; d = sh["dur"]; nfr = int(round(d * FPS))
        fl.append(f"[{k}:v]trim=start={ss:.4f}:duration={ln:.4f},setpts=(PTS-STARTPTS)*{d/ln:.5f},fps={FPS},trim=end_frame={nfr},setpts=PTS-STARTPTS[s{k}]")
    n = len(PL["shots"])
    ass = os.path.join(O, "legenda.ass"); legenda_ass(PL, ass)
    fl.append("".join(f"[s{k}]" for k in range(n)) + f"concat=n={n}:v=1:a=0[cv]")
    fl.append(f"[cv]subtitles={ass}:fontsdir={os.path.join(HERE,'fonts')}[v]")
    mi = n; vi = n + 1
    fl.append(f"[{vi}:a]highpass=f=70,acompressor=threshold=0.08:ratio=3:attack=5:release=100,equalizer=f=3000:t=q:w=1:g=3,volume=1.7,aformat=channel_layouts=stereo,asplit=2[voz][sc];"
              f"[{mi}:a]volume=0.9[mus];[mus][sc]sidechaincompress=threshold=0.03:ratio=5:attack=20:release=300[duck];"
              f"[duck][voz]amix=inputs=2:normalize=0:duration=longest,loudnorm=I=-14:TP=-1.5:LRA=8,apad[a]")
    out = os.path.join(O, saida)
    cmd = ["ffmpeg", "-y", "-loglevel", "error"] + ins + ["-i", os.path.join(O, "musica.wav"), "-i", os.path.join(O, "voz_full.wav"),
           "-filter_complex", ";".join(fl), "-map", "[v]", "-map", "[a]", "-c:v", "libx264", "-crf", "24", "-preset", "veryfast", "-maxrate", "12M", "-bufsize", "24M",
           "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", "-t", f"{PL['total']:.3f}", out]
    subprocess.run(cmd, check=True); print("pronto:", out)

if __name__ == "__main__":
    m = sys.argv[1] if len(sys.argv) > 1 else "tudo"
    if m in ("cenas", "tudo"): cenas()
    if m in ("montar", "tudo"): montar(sys.argv[2] if len(sys.argv) > 2 else "ep01_final.mp4")
