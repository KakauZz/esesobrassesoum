# novo_ep.py — prepara a pasta de um episódio novo a partir do anterior e monta o HTML.
#   python novo_ep.py preparar 4   -> cria ep04/animado copiando os scripts do ep03 (sem saida/cache),
#                                     com ep4_cenas.js e plano.py prontos pra editar
#   python novo_ep.py html 4       -> refaz ep04/animado/animacao.html = HTML do ep03 + ep4_cenas.js
#                                     (cada episódio usa uma faixa de tempo própria: EP4 = 700–799, EP5 = 800–899...)
import os, sys, shutil, re

RAIZ = os.path.dirname(os.path.abspath(__file__))
def pasta(n): return os.path.join(RAIZ, f"ep{n:02d}", "animado")

def preparar(n):
    src, dst = pasta(n - 1), pasta(n)
    if os.path.exists(dst): sys.exit(f"{dst} já existe")
    shutil.copytree(src, dst, ignore=shutil.ignore_patterns("saida", "cache", "ep*_cenas.js", "direcao.txt", "*.mp4"))
    os.makedirs(os.path.join(dst, "saida"), exist_ok=True)
    base = (n + 3) * 100  # EP3 = 500–644 → EP4 = 700, EP5 = 800...
    open(os.path.join(dst, f"ep{n}_cenas.js"), "w", encoding="utf-8").write(
        f"// ===================== EP. {n} — TÍTULO =====================\n"
        f"// Cenas do EP. {n} na faixa {base}–{base+99}. Use scene({base},{base+4},(t)=>{{...}}) como no ep{n-1}_cenas.js.\n"
        f"// Termine com a cena da escolha A/B e o cartão final 'EP. {n+1} · EM BREVE' em {base+40}–{base+44}.\n")
    # plano.py: zera FALAS/SHOTS e aponta o cartão final pra faixa nova
    p = os.path.join(dst, "plano.py"); s = open(p, encoding="utf-8").read()
    s = re.sub(r"^FALAS\s*=.*?$", "FALAS=[]  # escreva as falas do episódio", s, count=1, flags=re.M)
    s = re.sub(r"^SHOTS\s*=\s*\[.*?\]\]\s*$", "SHOTS=[]  # uma lista de tomadas por fala: (inicio_anim, fim_anim, fração, HUD[, 'cont'])", s, count=1, flags=re.M | re.S)
    s = re.sub(r'shots\.append\(\{"a":\d+(\.\d+)?,"b":\d+(\.\d+)?', f'shots.append({{"a":{base+40},"b":{base+43.2}', s)
    open(p, "w", encoding="utf-8").write(s)
    print("pasta pronta:", dst)

def html(n):
    ant = os.path.join(pasta(n - 1), "animacao.html"); h = open(ant, encoding="utf-8").read()
    cenas = open(os.path.join(pasta(n), f"ep{n}_cenas.js"), encoding="utf-8").read()
    i = h.index("function render(")
    h = h[:i] + cenas.rstrip() + "\n\n" + h[i:]
    h = re.sub(r"<title>.*?</title>", f"<title>E se sobrasse só UM — Ep.{n}</title>", h, count=1)
    open(os.path.join(pasta(n), "animacao.html"), "w", encoding="utf-8").write(h)
    print("html pronto:", os.path.join(pasta(n), "animacao.html"))

if __name__ == "__main__":
    cmd, n = sys.argv[1], int(sys.argv[2])
    {"preparar": preparar, "html": html}[cmd](n)
