import { Hono } from 'hono';
import { DOMParser } from "@b-fuze/deno-dom"

const app = new Hono()

app.get('/api/title', async (c) => {
  const url = c.req.query("url") ?? "";

  const res = await fetch(url);
  const html = await res.text();

  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  const titleElement = document.querySelector("title");
  const title = titleElement?.textContent;

  return c.json<{ url: string; title: string }>({ url, title });
});

Deno.serve(app.fetch);
