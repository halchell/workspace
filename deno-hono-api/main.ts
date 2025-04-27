import { Hono } from 'hono';
import { DOMParser } from "@b-fuze/deno-dom"

const app = new Hono()

async function fetchHtmlTitle(url: string): Promise<string | undefined>{
  try{
    const res = await fetch(url);
  const html = await res.text();

  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  const titleElement = document.querySelector("title");
  const title = titleElement?.textContent;

  return title;
  } catch{
    return undefined;
  }
}

app.get('/api/title', async (c) => {
  const url = c.req.query("url") ?? "";

  const title = await fetchHtmlTitle(url);

  if(!title){
    return c.json({ message: "ページタイトルが取得できませんでした"}, 400);
  }
  return c.json<{ url: string; title: string }>({ url, title });
});

app.post("/api/bookmarks", async (c) => {
  const body = await c.req.parseBody<{ url: string }>();
  const url = body.url;
})

Deno.serve(app.fetch);
