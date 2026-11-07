# gerar_voz.py — gera a narração "atuada" do episódio com o Gemini (voz Zubenelgenubi, a mesma da série).
# Uso:  python gerar_voz.py epNN/animado
# Lê:   epNN/animado/plano.py (lista FALAS) e, se existir, epNN/animado/direcao.txt (direção de atuação por fala)
# Chaves: chaves_api.txt (GEMINI_API_KEY_1, _2, _3...) — se uma der erro de cota/permissão, tenta a próxima.
# Saída: epNN/animado/saida/voz_full.wav
import os, sys, re, ast, json, base64, wave, subprocess, urllib.request, urllib.error, time

RAIZ = os.path.dirname(os.path.abspath(__file__))
VOZ = "Zubenelgenubi"
MODELOS = ["gemini-2.5-flash-preview-tts", "gemini-2.5-pro-preview-tts"]
VELOCIDADE = 1.05  # a série usa a narração 5% mais rápida

ESTILO_BASE = """Você é um ATOR brasileiro jovem de São Paulo narrando uma série de suspense para um vídeo viral vertical.
Interprete de verdade, como em uma dublagem: mude a emoção da voz a cada trecho, respire, varie o ritmo.
Fale de forma natural e humana, nunca robótica, nunca lenta. NÃO leia estas instruções, leia apenas o TEXTO.
A primeira fala (a recapitulação "Vocês escolheram...") é animada e direta. A penúltima, a pergunta da escolha, é tensa e dramática.
A última ("Comenta A ou B!") é animada e convidativa, chamando o público."""

def chaves():
    p = os.path.join(RAIZ, "chaves_api.txt")
    ks = [l.split("=", 1)[1].strip() for l in open(p, encoding="utf-8") if re.match(r"^\s*GEMINI_API_KEY_\d+\s*=", l)]
    if os.environ.get("GEMINI_API_KEY"): ks.insert(0, os.environ["GEMINI_API_KEY"])
    if not ks: sys.exit("nenhuma chave em chaves_api.txt")
    return ks

def falas(pasta):
    src = open(os.path.join(pasta, "plano.py"), encoding="utf-8").read()
    m = re.search(r"^FALAS\s*=\s*(\[.*?\])\s*$", src, re.M | re.S)
    return ast.literal_eval(m.group(1))

def tts(texto, chave, modelo):
    body = {"contents": [{"parts": [{"text": texto}]}],
            "generationConfig": {"responseModalities": ["AUDIO"],
                                 "speechConfig": {"voiceConfig": {"prebuiltVoiceConfig": {"voiceName": VOZ}}}}}
    req = urllib.request.Request(f"https://generativelanguage.googleapis.com/v1beta/models/{modelo}:generateContent",
                                 data=json.dumps(body).encode(), headers={"Content-Type": "application/json", "x-goog-api-key": chave})
    d = json.load(urllib.request.urlopen(req, timeout=300))
    return base64.b64decode(d["candidates"][0]["content"]["parts"][0]["inlineData"]["data"])

def main(pasta):
    pasta = os.path.abspath(pasta); out = os.path.join(pasta, "saida"); os.makedirs(out, exist_ok=True)
    F = falas(pasta)
    dirp = os.path.join(pasta, "direcao.txt")
    direcao = open(dirp, encoding="utf-8").read().strip() if os.path.exists(dirp) else ""
    texto = ESTILO_BASE + ("\nDireção por fala (na ordem):\n" + direcao if direcao else "") + "\nTEXTO:\n\n" + "\n\n".join(F)
    erros = []
    for modelo in MODELOS:
        for i, k in enumerate(chaves()):
            for tentativa in range(2):
                try:
                    print(f"gerando voz: chave {i+1}, {modelo}", flush=True)
                    pcm = tts(texto, k, modelo); break
                except urllib.error.HTTPError as e:
                    msg = e.read().decode("utf-8", "ignore")[:200]; erros.append(f"chave {i+1} {modelo}: {e.code} {msg}")
                    if e.code in (500, 503) and tentativa == 0: time.sleep(20); continue
                    pcm = None; break
                except Exception as e:
                    erros.append(f"chave {i+1} {modelo}: {e}"); pcm = None; break
            if pcm: break
        if pcm: break
    if not pcm: sys.exit("falhou em todas as chaves:\n" + "\n".join(erros))
    raw = os.path.join(out, "voz_raw.wav")
    with wave.open(raw, "wb") as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(24000); w.writeframes(pcm)
    dst = os.path.join(out, "voz_full.wav")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", raw, "-af",
                    f"silenceremove=start_periods=1:start_threshold=-45dB,atempo={VELOCIDADE}", "-ar", "24000", "-ac", "1", dst], check=True)
    for f in ("ts_raw.json", "roger_ts.json", "el_meta.json"):  # tempos de outra voz não servem mais
        if os.path.exists(os.path.join(out, f)): os.remove(os.path.join(out, f))
    d = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", dst]))
    print(f"voz ok: {dst} ({d:.1f}s, {len(F)} falas)")

if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else ".")
