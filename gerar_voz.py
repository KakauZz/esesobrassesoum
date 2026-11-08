# gerar_voz.py — narração do episódio com a MESMA voz da série: ElevenLabs, voz "Roger".
# Uso:  python gerar_voz.py epNN/animado
# Lê:   epNN/animado/plano.py (lista FALAS)
# Chave: variável de ambiente ELEVENLABS_API_KEY (no GitHub: secret ELEVENLABS_API_KEY)
# Saída: epNN/animado/saida/voz_full.wav  +  saida/el_meta.json (tempos exatos de cada letra,
#        o mesmo formato dos EPs 1–3, que o plano.py usa para sincronizar legenda e cortes)
import os, sys, re, ast, json, base64, subprocess, urllib.request, urllib.error, time

VOZ_ID = "CwhRBWXzGAHq8TQ4Fs17"          # Roger (ElevenLabs) — a voz dos EPs 1, 2 e 3
MODELO = "eleven_multilingual_v2"
AJUSTES = {"stability": 0.5, "similarity_boost": 0.75, "style": 0.0, "use_speaker_boost": True}

def falas(pasta):
    src = open(os.path.join(pasta, "plano.py"), encoding="utf-8").read()
    m = re.search(r"^FALAS\s*=\s*(\[.*?\])\s*$", src, re.M | re.S)
    return ast.literal_eval(m.group(1))

def chaves():
    ks = [k for k in re.split(r"\s+", os.environ.get("ELEVENLABS_API_KEY", "")) if k]
    if not ks: sys.exit("ELEVENLABS_API_KEY não definida")
    return ks

def tts(texto, chave):
    body = {"text": texto, "model_id": MODELO, "voice_settings": AJUSTES, "language_code": "pt"}
    req = urllib.request.Request(f"https://api.elevenlabs.io/v1/text-to-speech/{VOZ_ID}/with-timestamps?output_format=mp3_44100_128",
                                 data=json.dumps(body).encode(), headers={"Content-Type": "application/json", "xi-api-key": chave})
    return json.load(urllib.request.urlopen(req, timeout=300))

def main(pasta):
    pasta = os.path.abspath(pasta); out = os.path.join(pasta, "saida"); os.makedirs(out, exist_ok=True)
    F = falas(pasta); texto = " ".join(F)
    offs, p = [], 0
    for f in F: offs.append(p); p += len(f) + 1
    d, erros = None, []
    for i, k in enumerate(chaves()):
        for tent in range(2):
            try:
                print(f"gerando voz Roger (ElevenLabs), chave {i+1}", flush=True); d = tts(texto, k); break
            except urllib.error.HTTPError as e:
                erros.append(f"chave {i+1}: {e.code} {e.read().decode('utf-8','ignore')[:200]}")
                if e.code in (429, 500, 503) and tent == 0: time.sleep(20); continue
                break
        if d: break
    if not d: sys.exit("falhou:\n" + "\n".join(erros))
    mp3 = os.path.join(out, "voz_raw.mp3"); open(mp3, "wb").write(base64.b64decode(d["audio_base64"]))
    al = d.get("alignment") or d["normalized_alignment"]
    ch, st, en = al["characters"], al["character_start_times_seconds"], al["character_end_times_seconds"]
    if "".join(ch) != texto: print("aviso: alinhamento difere do texto; usando o que veio", flush=True)
    json.dump({"offs": offs, "lens": [len(f) for f in F], "chars": ch, "st": st, "en": en}, open(os.path.join(out, "el_meta.json"), "w"))
    wav = os.path.join(out, "voz_full.wav")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", mp3, "-ar", "44100", "-ac", "1", wav], check=True)
    for f in ("ts_raw.json", "roger_ts.json"):
        if os.path.exists(os.path.join(out, f)): os.remove(os.path.join(out, f))
    dur = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", wav]))
    print(f"voz ok: {wav} ({dur:.1f}s, {len(F)} falas)")

if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else ".")
