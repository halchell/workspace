import { Hono } from 'hono';
import { DOMParser } from "@b-fuze/deno-dom"

interface Bookmark{
  readonly url: string;
  readonly title: string;
}

const app = new Hono()

const kv = await Deno.openKv();

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

  const title = await fetchHtmlTitle(url);

  const result = await kv.set(["bookmark", url], { url, title });
  return c.json({ result }, 201);
})

app.get("/api/bookmarks", async (c) => {
  const bookmarkListIterator = kv.list<Bookmark>({ prefix: ["bookmark"]});

  const bookmarks = [];
  for await(const bookmark of bookmarkListIterator){
    bookmarks.push(bookmark);
  }
  const bookmarksReversed = bookmarks.toReversed();
  return c.json({ bookmarks: bookmarksReversed });
});

app.put("/api/bookmarks/:url", async (c) => {
  const url = c.req.param("url");
  const decodedUrl = decodeURIComponent(url);
  const body = await c.req.parseBody<{ title: string }>();
  const title = body.title;
  const result = await kv.set(["bookmark", decodedUrl], {
    url: decodedUrl,
    title,
  });
  return c.json({ result });
});

Deno.serve(app.fetch);
