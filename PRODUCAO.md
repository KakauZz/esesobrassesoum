# Produção diária — "E se sobrasse só UM?"

Este é o passo a passo que a tarefa diária segue. Ela roda **todo dia às 6h (Brasília)**, conta os votos do último episódio, cria o próximo e agenda o post para o mesmo dia.

## Onde fica cada coisa
- **Repositório:** `KakauZz/esesobrassesoum` (público). As chaves do Gemini ficam só na secret `GEMINI_KEYS` do GitHub Actions, nunca em arquivo.
- **Vídeos:** `videos/epNN_final.mp4` dentro do repositório. Link público para o Metricool: `https://raw.githubusercontent.com/KakauZz/esesobrassesoum/main/videos/epNN_final.mp4`
- **Personagem e estilo:** `epNN/animado/animacao.html` acumula todas as cenas da série. Cada episódio ganha sua própria faixa de tempo: EP1 0–60, EP2 400–433, EP3 500–644, **EP4 700–799, EP5 800–899** e assim por diante.

## Regras de conteúdo (do usuário, obrigatórias)
- **Nada de morte** nem nada perto disso: ninguém morre, se machuca de verdade, desmaia, sangra, some para sempre, e não aparecem corpos, armas ou ameaças de morte.
- **Nada de terror:** sem monstros, criaturas, fantasmas, gore, gritos de dor ou imagens assustadoras.
- **Suspense pode:** algo passando atrás dele, uma sombra no fundo, luzes piscando, porta rangendo, uma mensagem misteriosa, passos no corredor. É o "frio na barriga", não o susto.
- Todo personagem é **pessoa comum**: a "sombra" é só alguém se escondendo. O tom é mistério e aventura, para todas as idades.

## Bíblia da história (o rumo da série; os votos mudam o caminho, não o destino)
- **Quem mais sobrou:** Matheus não está sozinho.
  - **A sombra** é uma **criança** (pegadas pequenas) que se esconde de medo.
  - **O fotógrafo** é um **adulto** que acompanha Matheus desde o dia 1, escreveu a carta da praça e mantém um diário. Ele não é vilão: ele observa porque sabe de algo.
- **O segredo:** as pessoas não sumiram. Quem "saiu do lugar" foram eles três: estão numa São Paulo "cópia", vazia. O mundo real continua do outro lado. As falhas (rádio chiando, celular ligando sozinho, luzes piscando) são o mundo real tentando aparecer. Daí o rádio dizer "não confia no que você vê".
- **O relógio da série:** o calendário dos dias riscados. Perto do **dia 60**, a passagem de volta se abre no lugar onde tudo começou, o quarto em que Matheus acordou no dia 1.
- **O final (sem morte, sem perda):** os três chegam juntos à passagem, mas ela só abre para **um de cada vez** ("E se sobrasse só UM?"). A última votação decide **quem atravessa primeiro e o que cada um leva de volta**, e todos voltam, cada um do seu jeito. O mistério se resolve com reencontro.
- **Pistas a plantar, uma por episódio, sem pressa:** a criança (pegadas, um tênis pequeno, um desenho), o diário do fotógrafo, falhas do mundo real (vozes no rádio, celular, TVs ligando sozinhas), o calendário avançando e o lugar do dia 1. Nunca contradiga fatos já mostrados.

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
   - **DURAÇÃO OBRIGATÓRIA: MAIS DE 1min30 SEMPRE (o usuário só ganha dinheiro acima disso). Meta: 95 a 110 s.**
     A voz Sadachbia fala cerca de 2,7 s por fala, então escreva **de 34 a 40 falas** e **de 24 a 30 cenas**. A história continua da escolha vencedora, tem pelo menos 2 reviravoltas no meio e termina num gancho.
     Não encha linguiça (cartela parada, repetição): o tempo extra tem que ser história.
   - No fim, a escolha nova com **A em verde e B** (o mesmo visual do EP. 3), depois o cartão "E SE SOBRASSE SÓ UM?", "EP. N+1 · EM BREVE" e "Segue pra não perder 👆".
   - `plano.py`: `FALAS` com 34 a 40 frases curtas. A primeira é "Vocês escolheram: X. ..." e as duas últimas são a pergunta A/B e "Comenta A ou B! A mais votada vira o episódio N+1.". `SHOTS` tem uma lista por fala, como no EP. 3, com o HUD "DIA 48 · HH:MM" avançando no tempo da história.
   - `direcao.txt`: uma linha por fala com a emoção da voz. Marque `[carta]` na linha de qualquer fala que seja leitura de carta ou bilhete (ganha eco).
   - **Continuidade:** Matheus, 24 anos, sozinho em São Paulo desde o "dia 1". Mantenha os fatos já mostrados: a carta da praça, a janela acesa, as fotos dele, a câmera e a sombra.
5. **Montar:**
   ```
   python novo_ep.py html N
   git add -A && git commit -m "epNN: roteiro" && git push
   # voz: SEMPRE Gemini, voz SADACHBIA, gemini-2.5-flash-preview-tts, 1.05x, realce de agudos, eco só em carta ([carta] no direcao.txt).
   # Tempos: gemini-3.5-flash (ts_raw.json). Gerada pelo GitHub Actions (workflow gerar-voz, secret GEMINI_KEYS; ~10 gerações/dia por chave).
   # NUNCA troque de voz: se falhar, NÃO poste e avise o usuário.
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
   - **Direção de veículos e cenário (regra do usuário):** a orientação de tudo segue a da rua e a da câmera. Se a cena é de frente (ele andando para o fundo, rua em perspectiva), os carros aparecem **de frente ou de traseira**, em perspectiva, nunca de lado. Se a cena é de lado (ele andando da esquerda para a direita), a rua é horizontal e os carros aparecem **de lado**. Postes, faixas, calçadas e sombras seguem o mesmo ponto de fuga. Antes de desenhar cada cena, decida onde fica a rua e a câmera, e desenhe tudo coerente com isso.
   - **Movimento coerente:** se o personagem corre (faixas da rua e postes passando), tudo o que está no chão (carros, postes, placas) também tem que passar na perspectiva. Nada fica parado enquanto o cenário anda.
   - **Continuidade:** a mesma roupa, o horário do HUD sempre avançando e os fatos dos episódios anteriores mantidos.
   - Renderize 3 quadros seguidos (0,1 s de intervalo) de cada cena com personagem andando ou correndo e confirme o sentido do movimento.
   - **Fala x imagem:** cada fala tem que descrever exatamente o que aparece na tela naquele momento. Se a fala cita uma porta, a porta precisa aparecer. Se não aparecer, mude a fala ou a cena.
   - **Erros que já aconteceram e NÃO podem se repetir:** personagem subindo quando a fala diz que desce; carro parado enquanto ele corre na avenida; voz diferente da Sadachbia; fala sobre algo que não está na tela.
   - **O usuário NÃO revisa os vídeos.** A revisão é toda sua: seja rigoroso.
   - Se encontrar qualquer erro: corrija, renderize de novo e revise de novo. Na dúvida, NÃO poste e avise o usuário.
   **Conferir também:** tire 6 quadros (`ffmpeg -ss T -frames:v 1`) espalhados pelo vídeo e olhe cada um. Nada pode estar quebrado, em branco, com texto vazando ou com o personagem deformado. **A duração do vídeo final tem que ser MAIOR que 92 s (meta de 95 a 110 s).** Se der menos, acrescente falas e cenas e gere a voz de novo. NUNCA poste com 90 s ou menos. A voz tem que bater com a legenda (compare `plano.json` → `falas` com a duração da voz).
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
