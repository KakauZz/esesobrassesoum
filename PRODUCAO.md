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
- **Tudo tem que servir (regra do usuário):** cada objeto, pista ou cena nova precisa ter **função na história**: levar à escolha do final, revelar algo, ou ser retomado em um próximo episódio (anote no fim do PRODUCAO.md, em "Pistas em aberto"). Nada de enfeite só para ganhar tempo. Exemplo do que NÃO fazer: um rádio que fala uma frase solta e some. Exemplo do que fazer: o rádio diz "segue a luz", o celular diz "entra no vagão", e a escolha A/B é em quem confiar.
- Para chegar a mais de 1min30, aprofunde a trama (mais passos até a revelação, mais reações, consequências), não acrescente objetos soltos.
- Todo personagem é **pessoa comum**: a "sombra" é só alguém se escondendo. O tom é mistério e aventura, para todas as idades.

## Detalhes de ambiente (pedido do usuário): deixam o clima mais bonito
Essa é a ÚNICA exceção à regra "tudo tem que servir": são detalhes de **atmosfera**, não objetos da trama. Eles não são falados na narração, só aparecem.
- **Exemplos bons (fofos e leves, nunca feios ou assustadores):** um gato fofinho atravessando a rua ou dormindo num muro, pombos levantando voo, folhas voando com o vento, uma chuva fina começando, gotas escorrendo no vidro, poça refletindo a luz, neblina leve, vagalumes, estrelas cadentes, luz de poste piscando de leve, cortina mexendo com o vento, vapor saindo de um bueiro, um balão solto subindo.
- **Quando usar:** só em momentos que combinam. Chuva começando quando a tensão sobe; folhas voando quando ele corre ou abre uma porta para a rua; um gato num momento calmo, antes de uma revelação; estrelas no fim do episódio. **De 1 a 3 por episódio, no máximo**, nunca em toda cena.
- **Sem roubar a atenção:** o detalhe fica no fundo ou de passagem, nunca na frente da pista principal, da legenda ou do rosto dele.
- **Coerência (as mesmas regras de direção):** o gato anda na direção para onde olha, a chuva cai na perspectiva da cena e as folhas seguem o vento. **Se começou a chover, continua chovendo** nas cenas seguintes ao ar livre do mesmo momento (ou para de forma visível), e o chão fica molhado.
- O gato pode virar um **mascote recorrente** (o mesmo gato: laranja e branco, com uma coleira azul), aparecendo de vez em quando. Ele nunca se machuca, nunca some de forma triste e nunca dá susto.
- Nada de bichos feios, insetos nojentos, ratos ou baratas, e nada que dê medo.

## Bíblia da história (o rumo da série; os votos mudam o caminho, não o destino)
- **Quem mais sobrou:** Matheus não está sozinho.
  - **A sombra** é uma **criança** (pegadas pequenas) que se esconde de medo.
  - **O fotógrafo** é um **adulto** que acompanha Matheus desde o dia 1, escreveu a carta da praça e mantém um diário. Ele não é vilão: ele observa porque sabe de algo.
- **O segredo:** as pessoas não sumiram. Quem "saiu do lugar" foram eles três: estão numa São Paulo "cópia", vazia. O mundo real continua do outro lado. As falhas (rádio chiando, celular ligando sozinho, luzes piscando) são o mundo real tentando aparecer. Daí o rádio dizer "não confia no que você vê".
- **O relógio da série:** o calendário dos dias riscados. Perto do **dia 60**, a passagem de volta se abre no lugar onde tudo começou, o quarto em que Matheus acordou no dia 1.
- **O final (sem morte, sem perda):** os três chegam juntos à passagem, mas ela só abre para **um de cada vez** ("E se sobrasse só UM?"). A última votação decide **quem atravessa primeiro e o que cada um leva de volta**, e todos voltam, cada um do seu jeito. O mistério se resolve com reencontro.
- **Pistas a plantar, no máximo uma por episódio, sem pressa (e sempre explicada na narração):** a criança (pegadas, um tênis pequeno, um desenho), o diário do fotógrafo, falhas do mundo real (vozes no rádio, celular, TVs ligando sozinhas), o calendário avançando e o lugar do dia 1. Nunca contradiga fatos já mostrados.

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
   - `direcao.txt`: uma linha por fala com a emoção da voz. Marque na linha da fala: `[carta]` para leitura de carta, bilhete ou mensagem (eco), `[radio]` para voz saindo de rádio ou walkie-talkie (chiado e clique) e `[telefone]` para voz de ligação (som de telefone). **Toda fala que sai de um rádio, telefone ou carta TEM que ter a tag.** No 1º EP. 4 faltou o efeito no rádio; isso não pode se repetir.
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
   cd epNN/animado && python plano.py && python ../../efeitos_voz.py . && python musica3.py && python editor.py tudo epNN_final.mp4
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
   - **Legendas:** nenhuma legenda pode aparecer por cima de outra. Confira com:
     `python3 -c "import re;t=lambda x:sum(float(a)*b for a,b in zip(x.split(':'),(3600,60,1)));e=sorted((t(p[1]),t(p[2])) for p in (l.split(',',9) for l in open('saida/legenda.ass',encoding='utf-8') if l.startswith('Dialogue')) if p[3]=='Cap');print('sobrepostas:',sum(b[0]<a[1]-.005 for a,b in zip(e,e[1:])))"` → tem que dar 0.
   - **Erros que já aconteceram e NÃO podem se repetir:** personagem subindo quando a fala diz que desce; carro parado enquanto ele corre na avenida; voz diferente da Sadachbia; fala sobre algo que não está na tela; legendas sobrepostas; objeto que aparece e não serve para nada (o rádio do 1º rascunho do EP. 4).
   - **O usuário NÃO revisa os vídeos.** A revisão é toda sua: seja rigoroso.
   - Se encontrar qualquer erro: corrija, renderize de novo e revise de novo. Na dúvida, NÃO poste e avise o usuário.
   **Conferir também:** tire 6 quadros (`ffmpeg -ss T -frames:v 1`) espalhados pelo vídeo e olhe cada um. Nada pode estar quebrado, em branco, com texto vazando ou com o personagem deformado. **A duração do vídeo final tem que ser MAIOR que 92 s (meta de 95 a 110 s).** Se der menos, acrescente falas e cenas e gere a voz de novo. NUNCA poste com 90 s ou menos. A voz tem que bater com a legenda (compare `plano.json` → `falas` com a duração da voz).
   Se algo falhar e não der para corrigir em 2 tentativas: **não poste**. Avise o usuário com o motivo.
7. **Publicar o arquivo:** copie para `videos/epNN_final.mp4`, faça `git add -f videos/epNN_final.mp4`, commit e push (antes, `git pull --rebase`). Confira com `curl -I` que o link raw responde 200.
8. **Agendar no Metricool** (brandId `7941222`, fuso `America/Sao_Paulo`). Antes, confira os horários do dia com `getBestTimeToPostByNetwork`; o padrão é este:
   - **Instagram 10h:** `instagramData {type:"REEL", isAiGenerated:false}`
   - **TikTok 10h:** `tiktokData {title:"E se sobrasse só UM? EP. N — <TÍTULO>", isAigc:false, privacyOption:"PUBLIC_TO_EVERYONE"}` (o título é obrigatório)
   - **YouTube 16h:** `youtubeData {type:"short", isAiGeneratedContent:false, title:"…", madeForKids:false, category:"FILM_ANIMATION", privacy:"public"}`
   - Em `media`, use o link do release. Se o horário já tiver passado, poste 30 min depois de agora.
   - Legenda no padrão da série:
     ```
     <frase-gancho do episódio> 👀 EP. N
     Comenta A ou B 👇 você decide o que o Matheus faz!
     #esesobrassesoum #animação #historia #suspense #misterio #fy #viral
     ```
   - Título do YouTube: `E se sobrasse só UM? EP. N — <TÍTULO> #shorts`
9. **Avisar o usuário** (SendUserMessage + notificação): o placar de cada rede e quem venceu, o resumo do episódio novo, os links do vídeo e dos posts agendados no Metricool, e qualquer problema que tenha aparecido.


## Pistas em aberto (retomar nos próximos episódios)
- EP. 4 (O METRÔ): o **rádio** (canal 13) com a voz que mandou "seguir a luz". De quem é a voz? (o fotógrafo)
- EP. 4: o **celular** desconhecido que mandou "entrar no vagão". Quem mandou? (a criança, que quer ajuda, mas está com medo)
- EP. 4: as **pegadas pequenas** e a catraca girando (a criança)
- EP. 4: o mapa "VOCÊ ESTÁ AQUI · dia 48" e a foto de Matheus correndo (o fotógrafo)
- EP. 5 (O VAGÃO, versão final simplificada): quem manda as mensagens é a **criança** (tênis vermelho do tamanho das pegadas do EP. 4). O **desenho** "eu, você e o moço da câmera" (três de mãos dadas na frente de uma porta) mostra que ela quer os três juntos. O trem voltou para a Sé e a criança subiu a escada.
- EP. 5: a **lanterna** do túnel (a luz que o rádio mandou seguir no EP. 4) aponta para a **saída de emergência**, que tem o mesmo desenho colado: é "a porta do desenho". Escolha: A) seguir a criança / B) abrir a porta do desenho.
- Ficaram DE FORA do EP. 5 final (não use como se tivessem acontecido): o "dia 60" no verso, o alto-falante do trem e o mapa da volta. Podem entrar no futuro, explicados com calma, um por episódio.

## Postagem (decisão do usuário)
- **Não marcar como conteúdo de IA:** `isAiGenerated:false` (Instagram), `isAigc:false` (TikTok), `isAiGeneratedContent:false` (YouTube).
- **Voz de IMPACTO e sem sussurro na narração (pedido do usuário, 10/11).** A narração é sempre forte, presente e com energia, como trailer de suspense ("cadê a voz impactante?"). Sussurro SÓ quando um personagem literalmente sussurra na história; contar a história sussurrando não pode. No `direcao.txt` use palavras como "forte", "IMPACTO", "com energia", "revelação com peso"; nunca "sussurrado", "cochichando", "baixo", "devagar" ou "calmo" para o narrador. O ESTILO do `gerar_voz.py` já pede isso.
- Ritmo da voz: o usuário achou o EP. 4-A rápido demais. Mantenha 1.05x, mas a direção pede pausas entre as falas (já está no ESTILO do gerar_voz.py). Se a voz sair com mais de 3,2 falas por 10 s, gere de novo pedindo um ritmo mais calmo.

## Crescimento: rodar TODO DIA, antes de criar o episódio
1. **Números:** pelo Windsor.ai (instagram: media_views, media_reach, media_comments_count, media_shares, media_saved; tiktok_organic: views, comments e shares por vídeo) e pelo Metricool (getAnalyticsDataByMetrics), compare os últimos episódios: qual teve mais views, retenção, comentários e compartilhamentos, e em que horário saiu.
2. **Horários:** cruze `getBestTimeToPostByNetwork` com o desempenho real de cada post. Se um horário render claramente mais (ex.: +30% de views em 2 posts), mude o horário padrão daquela rede e anote abaixo.
3. **Comentários públicos:** leia os comentários (que não são só "A"/"B") do último episódio. Procure pedidos ("quero ver X", "parte 2"), dúvidas sobre a história, o que o público gostou ou não gostou e reclamações (voz, legenda, ritmo). Use o que fizer sentido no roteiro do dia, sempre respeitando as regras de conteúdo e a bíblia da história.
4. **Gancho:** a primeira frase depois do recap tem que prender em 2 s. Se as views caírem, teste um gancho mais forte (pergunta ou revelação já no começo).
5. **Anote aqui** em "Aprendizados" (data, o que mudou e por quê) e faça commit. Nunca mude as regras do usuário: só horários, ganchos, ritmo e tipo de mistério.

## Aprendizados
- 08/11: números de partida no TikTok: 39 seguidores, EP. 1 com 3,5 mil views (média de 28 s assistidos de 94 s, só 4% viram até o fim), EP. 2 com 143 views (73 s de 76 s, 19% até o fim). Instagram: 60 seguidores, EP. 2 com 1,7 mil views. Meta: reter mais no começo.
- 08/11: horários iniciais Instagram 10h, TikTok 10h e YouTube 16h (dados do Metricool). EP. 4-A ficou com a voz rápida demais; o EP. 4-B (2min14) ficou melhor no ritmo.
- 09/11: EP. 3 teve 9×0 para A (Instagram 4, TikTok 5): votação unânime = pouco debate. Deixar as duas opções mais tentadoras. Foi ao ar o EP. 4-A (O METRÔ, 1min42).
- 09/11: TikTok EP. 1 (postado às 17h) fez 3,8 mil views; EP. 2 e EP. 3 (12h) fizeram 201 e 48. O Metricool marca 18h como pico de segunda (1096, empatado com 10h). **Novo padrão TikTok: 18h** (testar 1 semana). Retenção EP. 3 no TikTok: 35,6 s de 72 s (11% até o fim); no Instagram 42% pulam nos 3 primeiros segundos → gancho mais forte já no 1º quadro.
- 09/11: cota do Metricool em novembro: 7/20 usados, 13 restantes para 15 dias úteis (10 a 30/11). Fins de semana e 2 dias úteis ficam para postagem manual no TikTok.

- 10/11: EP. 4 teve 4×0 para A (Instagram 2, TikTok 2). Retenção caiu: TikTok EP. 4 com 11,3 s de média em 102 s (1,7% até o fim) e Instagram com 49% pulando nos 3 primeiros segundos. Mas o TikTok às 18h fez 383 views em 12 h (o EP. 3 às 12h fez 101): **18h confirmado no TikTok**. Mudanças no EP. 5: o recap já mostra o vagão aceso no fundo (imagem de mistério no 1º quadro) e a 2ª fala já é uma reviravolta ("as portas se fecham"). Instagram testa 18h hoje (EP. 2–4 saíram ao meio-dia e caíram de 1,8 mil para 399).
- 10/11: EP. 5 (O VAGÃO) saiu com **2min31** (37 falas): com as pausas novas a Sadachbia está falando ~4 s por fala, não 2,7 s. Para ficar na meta de 95–115 s, use **34–35 falas mais curtas** (até ~8 palavras cada). Agendado: TikTok 18h (Metricool, 8/20 no mês) e Instagram 18h (Windsor, tarefa única).

## Limpeza (para o repositório não estourar)
- Depois de agendar o episódio do dia, apague de `videos/` todos os .mp4 com mais de 3 episódios (`git rm`). O Metricool já guarda a cópia dele, e os arquivos *_teste.mp4 que não foram usados podem sair também. Deixe sempre o `epNN_final.mp4` dos últimos 3 episódios.
- Não versione arquivos grandes de trabalho (cache/, saida/*.mp4).

## Plano B de postagem (quando o Metricool acabar)
O Metricool grátis tem **20 posts publicados por mês**, contados por rede, e o contador volta a zerar todo dia 1º. Se o `createScheduledPost` der erro de limite de posts:
1. **Instagram pelo Windsor.ai:** a ação `create_video_post` (conector `instagram`, conta 17841458074935033) com `video_url` = link raw do vídeo, `caption` = legenda e `share_to_feed: true`. Essa ação publica NA HORA, então crie uma tarefa agendada única (create_trigger com run_once_at no melhor horário do Instagram, initiation own_followup) cujo prompt seja: "chame add_repo KakauZz/esesobrassesoum se precisar e publique no Instagram pelo Windsor.ai (create_video_post) o vídeo <link> com a legenda <legenda>; depois avise o usuário em 1 linha". Se o horário já passou, publique na hora.
2. **TikTok e YouTube:** se o Metricool não aceitar, não poste nessas redes nesse dia e avise o usuário ("Metricool sem posts no mês; postei só no Instagram pelo Windsor").
3. **Windsor.ai:** o período de teste vai até cerca de 07/12/2026. Depois, o plano grátis aceita só 1 fonte de dados; mantenha só o **Instagram** (postagem + comentários/votos). Se o Windsor recusar, avise o usuário.

## Divisão das redes (decisão do usuário, a partir de 09/11/2026)
- **Metricool = só TikTok.** Os 20 posts grátis do mês ficam para o TikTok. Antes de agendar, leia `metricool_contagem.json`. Se o mês já tiver 20, NÃO use o Metricool. Depois de agendar, some +1 e faça commit.
  - Distribua a cota para ter TikTok no maior número de dias possível: prefira **segunda a sexta** (maior alcance) e use os dias que sobrarem.
  - **Nos dias sem cota (1 vídeo por dia é obrigatório):** mande o vídeo para o usuário (SendUserFile) com a legenda e o título prontos e peça para ele postar no TikTok à mão, no melhor horário.
- **Instagram = Windsor.ai** (`create_video_post`), todo dia, no melhor horário, por meio de uma tarefa agendada única (ver "Plano B de postagem"). Não usa cota do Metricool.
- 10/11: o usuário pediu para o EP. 5 sair no YouTube pelo Metricool (gastou 1 da cota; 9/20 usados). Ele vai configurar o YouTube depois. Até lá, o padrão abaixo continua.
- **YouTube = sem postagem automática por enquanto**, até o usuário configurar a API do YouTube. Todo dia, mande o vídeo e um título pronto para ele postar à mão, se quiser.
- 10/11 (tarde): o usuário achou o EP. 5 sem graça ("não fiquei com vontade de assistir"). Refeito: abertura-gancho de 1,8 s ("QUEM DESENHOU ISSO? 😳" + o desenho, com círculo em "é ele!"), recap em 1,6 s, 40 falas curtas, 2 falas falando com o público e a pista do desenho colado na porta. Ficou com **1min51**. Legenda do post começa com a pergunta. Medida de ritmo: use **letras por segundo** (EP. 4-A rápido demais = 16/s; EP. 5 = 12/s), não falas por 10 s.
- **Armadilhas técnicas (10/11):** (1) se mudar a faixa de uma cena (ex.: 800–803.6 → 800–801.8), apague a entrada antiga de `cache/index.json`, senão o editor usa o vídeo velho; (2) se o `ts_raw.json` não vier (o Gemini de tempos deu 503), o `plano.py` alinha pelas pausas: confira se nenhuma fala ficou com mais de 5 s (no EP. 5 isso foi resolvido com o limiar -32 dB); (3) a voz do Gemini às vezes vai ficando mais alta até o fim: nivele o volume antes do `efeitos_voz.py`.

## História simples e narração fiel (dica do usuário, 10/11: "não coloque tantas coisas, senão as pessoas ficam perdidas")
- **Um mistério por episódio.** Cada episódio tem UMA pergunta central (ex.: "quem deixou o desenho?") e tudo gira em volta dela.
- **No máximo 2 elementos novos por episódio** (objeto, pista, lugar ou personagem). O EP. 5 teve elementos demais (trem andando sozinho, lanterna, celular, tênis, desenho, dia 60, alto-falante, volta do trem, criança, porta), e a partir de agora isso não se repete. O que não couber fica para o próximo episódio.
- **Explique cada coisa que aparece.** Quando algo novo entra, a narração diz o que é e por que importa, com palavras simples ("É o desenho de uma criança. E ele está nele."). Nada fica no ar sem explicação.
- **Narração fiel ao que acontece:** a fala descreve exatamente o que está na tela, na ordem em que acontece, sem pular passos e sem afirmar o que a imagem não mostra. Se a imagem mostra uma coisa e a fala diz outra, corrija antes de postar.
- **Retome, não acumule:** antes de criar pista nova, use as que já estão em "Pistas em aberto" e explique para que ela serve. Pista retomada é mais clara que pista nova.
- **Teste do amigo:** depois de escrever, resuma o episódio em 2 frases. Se não der, está complicado demais: corte.
- 10/11: **o usuário aprovou o EP. 5 final** ("bem explicadinho e legal"). Use ele como MODELO de estrutura: gancho com o desenho (2 s) → lembrança do EP. 1 (6 falas) → recap do voto → 1 mistério só → cada pista explicada na hora → 2 viradas → final ligando pistas antigas → escolha A/B equilibrada. Voz forte, sem sussurro, ~1min50.

## Prender a atenção SEMPRE (pedido do usuário, 10/11: "tem que chamar a atenção do seguidor sempre")
Vale para TODO episódio, do primeiro ao último segundo. Revise cada item antes de postar.
1. **0 a 2 s, o gancho visual:** antes do recap, abra com um *flash-forward* de 1,5 s do momento mais intrigante do episódio (ex.: o desenho "eu, você e o moço da câmera", a placa "ESTAÇÃO SÉ"), com um tremor/zoom rápido. O 1º quadro nunca é tela parada nem só texto.
2. **Título-gancho na tela nos 3 primeiros segundos:** uma frase curta em letras grandes no topo, desenhada na cena de abertura (ex.: "ELE NÃO DEVIA TER ENTRADO 😳", "QUEM DESENHOU ISSO?"). Uma pergunta ou uma revelação, nunca o nome do episódio.
3. **Lembrança do começo da série (pedido do usuário, 10/11), logo depois do gancho, em TODO episódio:** 5 a 6 falas curtas (~15 s) para quem chegou agora, reaproveitando as cenas antigas (sem desenhar de novo): ele acorda no dia 1 (cena 0–4), todos os jornais dizendo que as pessoas estão sumindo (110–117), o contador do mundo caindo até 1 e "VOCÊ" (120–125), a cidade vazia pela janela (7–11), a carta no dia 48 (41–46) e a parede de fotos (560–570). Use o HUD "DIA 1 · 07:12" nas cenas do passado. No EP. 5 o texto foi: "Pra quem chegou agora: dia um. Matheus acorda... / e em todos os jornais, a mesma notícia: / as pessoas estão sumindo. No mundo inteiro. / Até sobrar só ele. Sozinho em São Paulo. / No dia quarenta e oito, ele acha uma carta... / e descobre que alguém fotografa ele desde o primeiro dia." Varie as palavras a cada episódio e, conforme a história avança, troque a última fala pelo fato mais importante até agora.
4. **Recap do episódio anterior em no máximo 3 s.** Logo depois, a 1ª reviravolta tem que vir em até 8 s.
5. **Mini-gancho a cada 15–20 s:** uma pergunta, um som, algo aparecendo no fundo ou uma frase do tipo "mas não era só isso…". Nunca passe 20 s sem uma novidade.
6. **Corte ou movimento a cada 2–3 s:** zoom, troca de câmera ou algo entrando no quadro. Nenhuma cena parada por mais de 3 s.
7. **Falar com quem assiste** pelo menos 2 vezes no meio do episódio ("e você, entraria?", "repara no canto da tela…"), para puxar comentário antes do final.
8. **Pista escondida:** coloque 1 detalhe pequeno que só quem presta atenção vê (e diga na legenda/primeiro comentário "achou a pista escondida? 👀"). Isso faz rever e comentar. A pista tem que servir à história.
9. **Final em gancho forte:** a última imagem antes da escolha é uma revelação ou uma pergunta sem resposta. As opções A e B precisam dividir o público.
10. **Legenda do post e primeiro comentário** começam com uma pergunta ou uma frase de choque (até 8 palavras), sem spoiler do final.
11. **Duração:** com as falas curtas, fique entre 95 e 115 s. Vídeo mais curto e mais denso segura mais gente até o fim.
Meça todo dia: se a média assistida no TikTok não subir dos 11 s do EP. 4, deixe o gancho dos 2 primeiros segundos ainda mais forte e anote em "Aprendizados".

## Tudo para crescer (o objetivo agora: 10 mil seguidores e 100 mil views em 30 dias no TikTok)
- **1 episódio por dia, sem falhar.** A constância é o que mais faz crescer.
- **Gancho nos primeiros 2 segundos:** o recap é rápido e a primeira imagem já é um mistério. A legenda do post começa com uma pergunta ou uma revelação.
- **Recap sempre** no começo, para quem chega pelo episódio do dia entender e maratonar os anteriores.
- **Legenda:** frase-gancho + "EP. N" + "Comenta A ou B 👇" + "Assista do EP. 1 no perfil 👆" + hashtags (#esesobrassesoum #animação #historia #suspense #misterio #serie #fy #viral, mais 1 ou 2 do assunto do episódio).
- **Primeiro comentário** (Metricool `firstCommentText` no TikTok e Windsor `create_comment` no Instagram, logo depois de publicar): uma pergunta que puxa conversa, por exemplo "Quem vocês acham que tirou a foto? 👀", sem spoiler.
- **Responder comentários** pelo Windsor (`reply_to_comment`), só no Instagram, até **10 por dia**: respostas curtas, simpáticas e em português, como o narrador da série ("Boa teoria 👀 fica de olho no próximo EP!"). Nunca dê spoiler, nunca discuta, nunca prometa nada e ignore ofensas. Priorize quem deu uma teoria ou fez uma pergunta.
- **Story de aviso no Instagram** (Windsor `create_story`, de graça): logo depois de publicar o episódio, poste uma imagem 9:16 com um quadro marcante do episódio e o texto "EP. N saiu! Você decide 👇". O story é imagem, então exporte um quadro em JPEG, coloque no repositório e use o link raw.
- **Capa:** use como capa o quadro mais intrigante do episódio (`thumb_offset` no Instagram, `videoCoverMilliseconds` no TikTok pelo Metricool).
- **Votação equilibrada:** as duas opções A/B precisam ser tentadoras. Quanto mais dividido o voto, mais comentários.
- **Medir e ajustar:** todo dia, compare a retenção (`video_average_time_watched`, `video_full_watched_rate` no tiktok_organic) e as views por episódio. Se a retenção cair no começo, deixe o gancho mais forte; se cair no meio, deixe o ritmo mais apertado. Anote em "Aprendizados".
