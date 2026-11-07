# Produção diária — "E se sobrasse só UM?"

Este é o passo a passo que a tarefa diária segue. Ela roda **todo dia às 6h (Brasília)**, conta os votos do último episódio, cria o próximo e agenda o post para o mesmo dia.

## Onde fica cada coisa
- **Projeto (privado):** repositório `esesobrassesoum` (cópia de `D:\BBS\Animacao`, com os scripts, as fontes, `chaves_api.txt` e este arquivo).
- **Vídeos (público):** repositório `esesobrassesoum-videos`. Cada episódio vira um *release* `epNN`, e o link do `.mp4` é o que o Metricool usa para postar.
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
   - História de 60 a 75 segundos que continua da escolha vencedora e termina num gancho.
   - No fim, a escolha nova com **A em verde e B** (o mesmo visual do EP. 3), depois o cartão "E SE SOBRASSE SÓ UM?", "EP. N+1 · EM BREVE" e "Segue pra não perder 👆".
   - `plano.py`: `FALAS` com 15 a 20 frases curtas. A primeira é "Vocês escolheram: X. ..." e as duas últimas são a pergunta A/B e "Comenta A ou B! A mais votada vira o episódio N+1.". `SHOTS` tem uma lista por fala, como no EP. 3, com o HUD "DIA 48 · HH:MM" avançando no tempo da história.
   - `direcao.txt`: uma linha por fala com a emoção da voz.
   - **Continuidade:** Matheus, 24 anos, sozinho em São Paulo desde o "dia 1". Mantenha os fatos já mostrados: a carta da praça, a janela acesa, as fotos dele, a câmera e a sombra.
5. **Montar:**
   ```
   python novo_ep.py html N
   python gerar_voz.py epNN/animado        # voz Zubenelgenubi; se uma chave falhar, troca sozinho pela próxima
   cd epNN/animado && python plano.py && python musica3.py && python editor.py tudo epNN_final.mp4
   ```
   Fontes: `fonts/` (Oswald, Anton, Caveat). Precisa de Python, Pillow, numpy, scipy, playwright (chromium) e ffmpeg.
6. **Conferir antes de postar:** tire 6 quadros (`ffmpeg -ss T -frames:v 1`) espalhados pelo vídeo e olhe cada um. Nada pode estar quebrado, em branco, com texto vazando ou com o personagem deformado. A duração tem que ficar entre 45 e 90 s. A voz tem que bater com a legenda (compare `plano.json` → `falas` com a duração da voz).
   Se algo falhar e não der para corrigir em 2 tentativas: **não poste**. Avise o usuário com o motivo.
7. **Publicar o arquivo:** suba o vídeo no repositório público de vídeos (`gh release create epNN epNN_final.mp4 --repo <dono>/esesobrassesoum-videos`). Depois faça commit e push do projeto (sem `saida/` e `cache/`) no repositório privado.
8. **Agendar no Metricool** (brandId `7941222`, fuso `America/Sao_Paulo`). Antes, confira os horários do dia com `getBestTimeToPostByNetwork`; o padrão é este:
   - **Instagram 10h:** `instagramData {type:"REEL", isAiGenerated:true}`
   - **TikTok 10h:** `tiktokData {isAigc:true, privacyOption:"PUBLIC_TO_EVERYONE"}`
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
