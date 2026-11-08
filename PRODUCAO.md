# Produção diária — "E se sobrasse só UM?"

Este é o passo a passo que a tarefa diária segue. Ela roda **todo dia às 6h (Brasília)**, conta os votos do último episódio, cria o próximo e agenda o post para o mesmo dia.

## Onde fica cada coisa
- **Repositório:** `KakauZz/esesobrassesoum` (público). As chaves do Gemini ficam só na secret `GEMINI_KEYS` do GitHub Actions, nunca em arquivo.
- **Vídeos:** `videos/epNN_final.mp4` dentro do repositório. Link público para o Metricool: `https://raw.githubusercontent.com/KakauZz/esesobrassesoum/main/videos/epNN_final.mp4`
- **Personagem e estilo:** `epNN/animado/animacao.html` acumula todas as cenas da série. Cada episódio ganha sua própria faixa de tempo: EP1 0–60, EP2 400–433, EP3 500–644, **EP4 700–799, EP5 800–899** e assim por diante.

## Passo a passo
1. **Achar o último episódio postado.** É o maior `epNN` com `epNN_final.mp4` no repositório. As opções A e B dele estão no fim de `epNN_cenas.js` (a cena da "escolha").
2. **Contar os votos** pelo Windsor.ai (`instagram` e `tiktok_organic`; antes de `get_data`, chame `get_fields`), só nos comentários do post desse episódio:
   - **A:** "A", "Aaaa", "🔥A", "𝑨", ou a opção A escrita por extenso. **B:** a mesma lógica. O resto vai em "outros".
   - Rajadas (vários votos iguais em poucos segundos) contam como **1 voto**.
   - **Empate:** vence a opção com mais comentários por extenso. Se ainda empatar, vence a A.
   - Guarde 3 a 5 comentários escritos que tragam ideias para usar no roteiro.
3. **Preparar a pasta:** `python novo_ep.py preparar N`.
4. **Escrever o episódio** (é a parte criativa; siga o `epN-1_cenas.js` como modelo):
   - `epN_cenas.js`: de 10 a 14 cenas, criadas com `scene(a,b,(t)=>{...})` dentro da faixa do episódio. Reaproveite as funções que já existem (personagem, `miniScene`, `lg`, `rr`, `rng`, `seg`, `easeOut`...).
   - Abertura com o recap: "NO EPISÓDIO N-1, VOCÊS ESCOLHERAM" + a opção que venceu, com o confete.
   - **Duração: por volta de 1min30 (entre 80 e 100 s).** São de 20 a 26 falas e de 16 a 20 cenas. A história continua da escolha vencedora e termina num gancho.
   - No fim, a escolha nova com **A em verde e B** (o mesmo visual do EP. 3), depois o cartão "E SE SOBRASSE SÓ UM?", "EP. N+1 · EM BREVE" e "Segue pra não perder 👆".
   - `plano.py`: `FALAS` com 20 a 26 frases curtas. A primeira é "Vocês escolheram: X. ..." e as duas últimas são a pergunta A/B e "Comenta A ou B! A mais votada vira o episódio N+1.". `SHOTS` tem uma lista por fala, como no EP. 3, com o HUD "DIA 48 · HH:MM" avançando no tempo da história.
   - `direcao.txt`: uma linha por fala com a emoção da voz.
   - **Continuidade:** Matheus, 24 anos, sozinho em São Paulo desde o "dia 1". Mantenha os fatos já mostrados: a carta da praça, a janela acesa, as fotos dele, a câmera e a sombra.
5. **Montar:**
   ```
   python novo_ep.py html N
   git add -A && git commit -m "epNN: roteiro" && git push
   # voz: SEMPRE ElevenLabs, voz Roger (a voz da série). É gerada pelo GitHub Actions (workflow gerar-voz, secret ELEVENLABS_API_KEY).
   # NUNCA use outra voz (Gemini etc.) como plano B: se a ElevenLabs falhar, NÃO poste e avise o usuário.
   gh api -X POST repos/KakauZz/esesobrassesoum/actions/workflows/voz.yml/dispatches -f ref=main -f 'inputs[pasta]=epNN/animado'
   # espere o run terminar (gh api repos/KakauZz/esesobrassesoum/actions/runs --jq '.workflow_runs[0]|.status,.conclusion'),
   # depois: git pull  → epNN/animado/saida/voz_full.wav. Se o run falhar, veja o log em
   # gh api repos/KakauZz/esesobrassesoum/actions/runs/<id>/jobs e corrija/tente de novo (no máx. 2 vezes).
   cd epNN/animado && python plano.py && python musica3.py && python editor.py tudo epNN_final.mp4
   ```
   Fontes: `fonts/` (Oswald, Anton, Caveat). Precisa de Python, Pillow, numpy, scipy, playwright (chromium) e ffmpeg.
6. **Revisão obrigatória (o usuário exige ZERO erros):**
   - Monte uma folha de contato com 1 quadro a cada 1,5 s do vídeo final e olhe TODOS, comparando cada quadro com a fala que está tocando.
   - **Direção:** quem anda olha para o lado para onde vai. Descer escada = olhar e andar para o lado em que os degraus descem (`person`: `f:1` olha para a direita, `f:-1` para a esquerda). O chão e os degraus se movem no sentido oposto ao do personagem.
   - **Movimento coerente:** se o personagem corre (faixas da rua e postes passando), tudo o que está no chão (carros, postes, placas) também tem que passar na perspectiva. Nada fica parado enquanto o cenário anda.
   - **Continuidade:** a mesma roupa, o horário do HUD sempre avançando e os fatos dos episódios anteriores mantidos.
   - Renderize 3 quadros seguidos (0,1 s de intervalo) de cada cena com personagem andando ou correndo e confirme o sentido do movimento.
   - **Fala x imagem:** cada fala tem que descrever exatamente o que aparece na tela naquele momento. Se a fala cita uma porta, a porta precisa aparecer. Se não aparecer, mude a fala ou a cena.
   - **Erros que já aconteceram e NÃO podem se repetir:** personagem subindo quando a fala diz que desce; carro parado enquanto ele corre na avenida; voz diferente da Roger; fala sobre algo que não está na tela.
   - **O usuário NÃO revisa os vídeos.** A revisão é toda sua: seja rigoroso.
   - Se encontrar qualquer erro: corrija, renderize de novo e revise de novo. Na dúvida, NÃO poste e avise o usuário.
   **Conferir também:** tire 6 quadros (`ffmpeg -ss T -frames:v 1`) espalhados pelo vídeo e olhe cada um. Nada pode estar quebrado, em branco, com texto vazando ou com o personagem deformado. A duração tem que ficar entre 80 e 100 s. A voz tem que bater com a legenda (compare `plano.json` → `falas` com a duração da voz).
   Se algo falhar e não der para corrigir em 2 tentativas: **não poste**. Avise o usuário com o motivo.
7. **Publicar o arquivo:** copie para `videos/epNN_final.mp4`, faça `git add -f videos/epNN_final.mp4`, commit e push (antes, `git pull --rebase`). Confira com `curl -I` que o link raw responde 200.
8. **Agendar no Metricool** (brandId `7941222`, fuso `America/Sao_Paulo`). Antes, confira os horários do dia com `getBestTimeToPostByNetwork`; o padrão é este:
   - **Instagram 10h:** `instagramData {type:"REEL", isAiGenerated:true}`
   - **TikTok 10h:** `tiktokData {title:"E se sobrasse só UM? EP. N — <TÍTULO>", isAigc:true, privacyOption:"PUBLIC_TO_EVERYONE"}` (o título é obrigatório)
   - **YouTube 16h:** `youtubeData {type:"short", title:"…", madeForKids:false, category:"FILM_ANIMATION", privacy:"public"}`
   - Em `media`, use o link do release. Se o horário já tiver passado, poste 30 min depois de agora.
   - Legenda no padrão da série:
     ```
     <frase-gancho do episódio> 👀 EP. N
     Comenta A ou B 👇 você decide o que o Matheus faz!
     #esesobrassesoum #animação #historia #suspense #misterio #fy #viral
     ```
   - Título do YouTube: `E se sobrasse só UM? EP. N — <TÍTULO> #shorts`
9. **Avisar o usuário** (SendUserMessage + notificação): o placar de cada rede e quem venceu, o resumo do episódio novo, os links do vídeo e dos posts agendados no Metricool, e qualquer problema que tenha aparecido.
