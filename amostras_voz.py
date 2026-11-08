# amostras_voz.py — gera o mesmo trecho do EP. 3 com várias vozes do Gemini, pra comparar com o áudio real do episódio.
import os, sys, json, urllib.error, wave, subprocess
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gerar_voz as g
F = g.falas("ep03/animado")[:6]
os.makedirs("amostras", exist_ok=True)
for voz in sys.argv[1:]:
    for estilo_nome, estilo in (("atuada", g.ESTILO_BASE), ("narrador", "Narre em português do Brasil, como narrador de suspense: voz grave, calma e misteriosa, com pausas dramáticas.")):
        g.VOZ = voz
        texto = estilo + "\nTEXTO:\n\n" + "\n\n".join(F)
        for k in g.chaves():
            try:
                pcm = g.tts(texto, k, g.MODELOS[0]); break
            except urllib.error.HTTPError as e:
                print(voz, estilo_nome, "erro", e.code); pcm = None
        if not pcm: continue
        f = f"amostras/{voz}_{estilo_nome}.wav"
        with wave.open(f, "wb") as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(24000); w.writeframes(pcm)
        print("ok", f)
