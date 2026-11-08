# gerar_voz.py — narração do episódio com a voz da série (Gemini / Google AI Studio).
#   Voz: Sadachbia · modelo gemini-2.5-flash-preview-tts · 1.05x · leve realce de agudos · eco só em leitura de carta
#   Tempos de cada fala: transcritos com gemini-3.5-flash (saida/ts_raw.json, em segundos do áudio ANTES do 1.05x)
# Uso:  python gerar_voz.py epNN/animado
# Lê:   epNN/animado/plano.py (FALAS) e, se existir, epNN/animado/direcao.txt (1 linha por fala; tags [carta]/[radio]/[telefone] → efeitos_voz.py)
# Chaves: env GEMINI_KEYS (várias, separadas por espaço/linha) — cada chave tem ~10 gerações/dia; troca sozinho se acabar.
import os, sys, re, ast, json, base64, wave, subprocess, urllib.request, urllib.error, time
import numpy as np

RAIZ = os.path.dirname(os.path.abspath(__file__))
VOZ = "Sadachbia"
MODELO_TTS = "gemini-2.5-flash-preview-tts"
MODELO_TEMPOS = "gemini-3.5-flash"
VELOCIDADE = 1.05

ESTILO = """Você é um narrador JOVEM brasileiro de TikTok narrando uma série de suspense em vídeo vertical.
Voz VIVA e CLARA, ritmo ágil MAS SEM CORRER: dê uma pausa curta entre uma frase e outra, deixe as revelações respirarem, como quem conta uma história empolgante pros amigos.
Atue com emoção, mas SEM exagero: nada de voz grave, arrastada, sussurrada demais ou "voz morta" de documentário.
Dê IMPACTO nos momentos fortes (revelações, sustos) e fique ANIMADO e convidativo no "Comenta A ou B".
Fale português do Brasil natural, de São Paulo. Respire e varie o ritmo a cada fala.
NÃO leia estas instruções, leia apenas o TEXTO."""

def chaves():
    ks = [k for k in re.split(r"\s+", os.environ.get("GEMINI_KEYS", "")) if k]
    p = os.path.join(RAIZ, "chaves_api.txt")
    if os.path.exists(p):
        ks += [l.split("=", 1)[1].strip() for l in open(p, encoding="utf-8") if re.match(r"^\s*GEMINI_API_KEY_\d+\s*=", l)]
    if not ks: sys.exit("nenhuma chave do Gemini (GEMINI_KEYS)")
    return ks

def falas(pasta):
    src = open(os.path.join(pasta, "plano.py"), encoding="utf-8").read()
    return ast.literal_eval(re.search(r"^FALAS\s*=\s*(\[.*?\])\s*$", src, re.M | re.S).group(1))

def chamar(modelo, body, chave):
    req = urllib.request.Request(f"https://generativelanguage.googleapis.com/v1beta/models/{modelo}:generateContent",
                                 data=json.dumps(body).encode(), headers={"Content-Type": "application/json", "x-goog-api-key": chave})
    return json.load(urllib.request.urlopen(req, timeout=300))

def com_rodizio(fn, nome):
    erros = []
    for i, k in enumerate(chaves()):
        for tent in range(2):
            try:
                print(f"{nome}: chave {i+1}", flush=True); return fn(k)
            except urllib.error.HTTPError as e:
                erros.append(f"chave {i+1}: {e.code} {e.read().decode('utf-8','ignore')[:160]}")
                if e.code in (500, 503) and tent == 0: time.sleep(20); continue
                break
            except Exception as e:
                erros.append(f"chave {i+1}: {e}"); break
    sys.exit(f"{nome} falhou em todas as chaves:\n" + "\n".join(erros))

def main(pasta):
    pasta = os.path.abspath(pasta); out = os.path.join(pasta, "saida"); os.makedirs(out, exist_ok=True)
    F = falas(pasta)
    dp = os.path.join(pasta, "direcao.txt")
    D = [l.strip() for l in open(dp, encoding="utf-8")] if os.path.exists(dp) else []
    direcao = "\n".join(D)
    texto = ESTILO + ("\nDireção por fala (na ordem):\n" + direcao if direcao else "") + "\nTEXTO:\n\n" + "\n\n".join(F)

    # 1) voz
    body = {"contents": [{"parts": [{"text": texto}]}],
            "generationConfig": {"responseModalities": ["AUDIO"],
                                 "speechConfig": {"voiceConfig": {"prebuiltVoiceConfig": {"voiceName": VOZ}}}}}
    d = com_rodizio(lambda k: chamar(MODELO_TTS, body, k), "voz Sadachbia")
    pcm = base64.b64decode(d["candidates"][0]["content"]["parts"][0]["inlineData"]["data"])
    raw = os.path.join(out, "voz_raw.wav")
    with wave.open(raw, "wb") as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(24000); w.writeframes(pcm)

    # 2) tempos de cada fala (no áudio original), transcritos pelo Gemini
    lista = "\n".join(f"{i+1}. {f}" for i, f in enumerate(F))
    pedido = ("Este áudio é a leitura, em ordem, destas falas:\n" + lista +
              "\n\nResponda SÓ com um JSON: uma lista com " + str(len(F)) +
              " pares [inicio, fim] em segundos (com 2 casas), um por fala, na ordem.")
    b64 = base64.b64encode(open(raw, "rb").read()).decode()
    body2 = {"contents": [{"parts": [{"inline_data": {"mime_type": "audio/wav", "data": b64}}, {"text": pedido}]}],
             "generationConfig": {"responseMimeType": "application/json"}}
    for f in ("ts_raw.json", "roger_ts.json", "el_meta.json"):
        if os.path.exists(os.path.join(out, f)): os.remove(os.path.join(out, f))
    dur_raw = len(pcm) / 2 / 24000
    def valido(ts):
        if len(ts) != len(F) or not all(len(x) == 2 for x in ts): return False
        st = [float(a) for a, b in ts]
        if st[0] > 2 or st[-1] > dur_raw - .5: return False                     # fora do áudio
        if any(b2 <= a2 for a2, b2 in zip(st, st[1:])): return False             # fora de ordem
        media = dur_raw / len(F)
        return all(b2 - a2 < max(6, media * 3) for a2, b2 in zip(st, st[1:]))   # saltos absurdos
    ts = None
    for tentativa in range(2):
        try:
            r = com_rodizio(lambda k: chamar(MODELO_TEMPOS, body2, k), "tempos")
            cand = json.loads(r["candidates"][0]["content"]["parts"][0]["text"])
            if valido(cand): ts = cand; break
            print(f"aviso: transcrição inválida (tentativa {tentativa+1})")
        except SystemExit as e:
            print("aviso: sem tempos transcritos (", e, ")"); break
    if ts:
        json.dump([[round(float(a), 2), round(float(b), 2)] for a, b in ts], open(os.path.join(out, "ts_raw.json"), "w")); print("tempos ok")
    else:
        print("aviso: sem tempos confiáveis; o plano.py usa só as pausas reais do áudio")

    # 3) efeitos ([carta], [radio], [telefone]) são aplicados depois, pelo efeitos_voz.py

    # 4) 1.05x + leve realce de agudos
    dst = os.path.join(out, "voz_full.wav")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", raw, "-af",
                    f"atempo={VELOCIDADE},treble=g=3:f=4500", "-ar", "24000", "-ac", "1", dst], check=True)
    dur = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", dst]))
    print(f"voz ok: {dst} ({dur:.1f}s, {len(F)} falas, voz {VOZ})")

if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else ".")
