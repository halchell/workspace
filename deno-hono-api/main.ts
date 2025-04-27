import { Hono } from 'hono';

const app = new Hono()

app.get('/api/title', (c) => {
  const url = c.req.query("url") ?? "";
  return c.json<{ url: string }>({ url });
})

Deno.serve(app.fetch);
