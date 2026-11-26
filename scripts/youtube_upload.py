"""Envia um vídeo como Short para o canal do YouTube pela API oficial (grátis).
Usa os secrets YT_CLIENT_ID, YT_CLIENT_SECRET e YT_REFRESH_TOKEN."""
import os, sys, json, argparse
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

ap = argparse.ArgumentParser()
ap.add_argument("--video", required=True)
ap.add_argument("--title", required=True)
ap.add_argument("--description", default="")
ap.add_argument("--tags", default="animação,história,série,você decide")
ap.add_argument("--publish_at", default="", help="ISO UTC, ex. 2026-11-17T21:00:00Z (agenda no próprio YouTube)")
a = ap.parse_args()

# aceita os 3 secrets separados OU um secret único YOUTUBE_IDS com "NOME\nvalor" em sequência
blob = os.environ.get("YOUTUBE_IDS", "")
if blob:
    linhas = [l.strip() for l in blob.splitlines() if l.strip()]
    for nome in ("YT_CLIENT_ID", "YT_CLIENT_SECRET", "YT_REFRESH_TOKEN"):
        if nome in linhas and not os.environ.get(nome):
            i = linhas.index(nome); val = []
            for l in linhas[i + 1:]:
                if l.startswith("YT_"): break
                val.append(l)
            os.environ[nome] = "".join(val)

creds = Credentials(None, refresh_token=os.environ["YT_REFRESH_TOKEN"],
                    token_uri="https://oauth2.googleapis.com/token",
                    client_id=os.environ["YT_CLIENT_ID"], client_secret=os.environ["YT_CLIENT_SECRET"],
                    scopes=["https://www.googleapis.com/auth/youtube.upload"])
yt = build("youtube", "v3", credentials=creds)
status = {"privacyStatus": "public", "selfDeclaredMadeForKids": False, "containsSyntheticMedia": False}
if a.publish_at == "teste":
    status.update(privacyStatus="private")
elif a.publish_at:
    status.update(privacyStatus="private", publishAt=a.publish_at)
body = {"snippet": {"title": a.title[:100], "description": a.description,
                    "tags": [t.strip() for t in a.tags.split(",") if t.strip()], "categoryId": "1",
                    "defaultLanguage": "pt-BR", "defaultAudioLanguage": "pt-BR"},
        "status": status}
req = yt.videos().insert(part="snippet,status", body=body,
                         media_body=MediaFileUpload(a.video, chunksize=8 * 1024 * 1024, resumable=True))
resp = None
while resp is None:
    st, resp = req.next_chunk()
    if st: print(f"enviando {int(st.progress()*100)}%")
if a.publish_at == "teste":
    try:
        yt.videos().delete(id=resp["id"]).execute()
        print("TESTE: enviado e APAGADO com sucesso (escopo youtube.force-ssl OK)")
    except Exception as e:
        print("TESTE: enviado (privado), mas não consegui apagar:", str(e)[:200])
print(json.dumps({"id": resp["id"], "url": f"https://youtube.com/shorts/{resp['id']}",
                  "status": resp.get("status", {})}, ensure_ascii=False))
