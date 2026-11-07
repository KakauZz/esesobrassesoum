# Animação — "E se sobrasse só UM?"
Série interativa pra TikTok/YouTube Shorts. Cada episódio termina com uma escolha do chat; a mais votada vira o próximo.

## Ep. 01 — Todo mundo sumiu
- `ep01/cenas.json`: roteiro (texto na tela + "fala" pra voz)
- `ep01/ep01_rascunho.mp4`: rascunho 1080x1920, 42s, sem voz
- `render.py`: gera o vídeo a partir do cenas.json (`python render.py`, precisa de Python + Pillow + ffmpeg)

## Próximos passos
1. Colocar a API do Gemini pra gerar a voz de cada "fala"
2. Sincronizar duração das cenas com a voz + música de fundo
3. Postar e ler os comentários A/B pra decidir o Ep. 02
