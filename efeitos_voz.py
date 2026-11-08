# efeitos_voz.py — aplica efeitos na voz das falas marcadas no direcao.txt
#   [radio]    → voz de rádio/walkie-talkie: banda estreita, leve distorção, chiado de fundo e "clique" no começo e no fim
#   [telefone] → voz de ligação: banda de telefone, um pouco abafada e comprimida
#   [carta]    → leitura de carta/bilhete/mensagem: eco suave
# Uso (rodar DEPOIS do plano.py e ANTES do editor.py):  python efeitos_voz.py epNN/animado
# Usa os tempos de cada fala de saida/plano.json (ou, se não existir, saida/ts_raw.json).
# Guarda a voz original em saida/voz_sem_efeito.wav (rodar de novo é seguro: sempre parte da original).
import os, sys, json, re, wave, shutil
import numpy as np
from scipy.signal import butter, sosfilt

def ler(p):
    with wave.open(p) as w: sr = w.getframerate(); x = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(np.float32) / 32768
    return x, sr
def gravar(p, x, sr):
    with wave.open(p, "wb") as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr); w.writeframes((np.clip(x, -1, 1) * 32767).astype(np.int16).tobytes())
def banda(x, sr, lo, hi): return sosfilt(butter(4, [lo, hi], btype="band", fs=sr, output="sos"), x)

def radio(seg, sr, rng):
    y = banda(seg, sr, 450, 2600); y = np.tanh(y * 3.2) / np.tanh(3.2) * .9          # banda estreita + saturação
    chiado = banda(rng.standard_normal(len(y)) * .05, sr, 1500, 6000)               # chiado de fundo
    y = y + chiado * (.6 + .4 * np.sin(np.arange(len(y)) / sr * 9))
    k = int(.06 * sr); clique = banda(rng.standard_normal(k) * .5, sr, 1000, 5000) * np.linspace(1, 0, k)
    y[:k] += clique; y[-k:] += clique[::-1]                                          # "clique" de apertar/soltar o botão
    return y
def telefone(seg, sr, rng):
    y = banda(seg, sr, 320, 3300); y = np.tanh(y * 1.8) / np.tanh(1.8)
    return y * .95 + banda(rng.standard_normal(len(y)) * .006, sr, 300, 3300)
def carta(seg, sr, rng):
    y = seg.copy()
    for dl, g in ((0.11, .35), (0.23, .2), (0.37, .1)):
        n = int(dl * sr); y[n:] += g * seg[:-n]
    return y
EF = {"[radio]": radio, "[rádio]": radio, "[telefone]": telefone, "[ligação]": telefone, "[ligacao]": telefone, "[carta]": carta}

def main(pasta):
    pasta = os.path.abspath(pasta); out = os.path.join(pasta, "saida")
    voz = os.path.join(out, "voz_full.wav"); orig = os.path.join(out, "voz_sem_efeito.wav")
    if not os.path.exists(orig): shutil.copy(voz, orig)
    x, sr = ler(orig); y = x.copy(); rng = np.random.default_rng(13)
    dp = os.path.join(pasta, "direcao.txt")
    D = [l.strip().lower() for l in open(dp, encoding="utf-8")] if os.path.exists(dp) else []
    pp = os.path.join(out, "plano.json")
    if os.path.exists(pp):
        T = [(f["start"], f["end"]) for f in json.load(open(pp))["falas"]]
    else:
        T = [(a / 1.05, b / 1.05) for a, b in json.load(open(os.path.join(out, "ts_raw.json")))]
    feitos = []
    for i, linha in enumerate(D[:len(T)]):
        for tag, fn in EF.items():
            if tag in linha:
                a = max(0, int((T[i][0] - .03) * sr)); b = min(len(x), int((T[i][1] + (.45 if fn is carta else .08)) * sr))
                seg = x[a:b]; z = fn(seg, sr, rng)
                f = min(len(z), int(.015 * sr)); ramp = np.linspace(0, 1, f)
                z[:f] = z[:f] * ramp + seg[:f] * (1 - ramp); z[-f:] = z[-f:] * ramp[::-1] + seg[-f:] * (1 - ramp[::-1])
                y[a:b] = z; feitos.append(f"{i+1}{tag}"); break
    pk = np.max(np.abs(y)); y = y / pk * .95 if pk > .99 else y
    gravar(voz, y, sr); print("efeitos aplicados:", ", ".join(feitos) or "nenhum")

if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else ".")
