# Agenda única de postagens (Instagram + carrossel diário)

Tudo que precisa sair num horário no Instagram vai para `agenda.json` (o Instagram via Windsor só publica na hora, por isso existe a tarefa "Agenda do Matheus" que roda às 12h, 18h e 20h).

Formato de cada item: `quando` (AAAA-MM-DDTHH:MM, horário de Brasília), `rede` "instagram", `tipo` "video" | "carrossel" | "story", `video_url` ou `imagens` (links raw.githubusercontent, de preferência fixados num commit), `legenda`, `comentario`, `story_url` (opcional), `episodio` (para vídeo do episódio), `feito` false/true + `id` depois de publicar.

NÃO criar tarefas agendadas avulsas para postar no Instagram: adicione um item aqui.
