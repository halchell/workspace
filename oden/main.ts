import OpenAI from "https://deno.land/x/openai@v4.62.1/mod.ts";
import { render } from "jsr:@deno/gfm"

const openai = new OpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});

const RECIPE_ROUTE = new URLPattern({ pathname: "/:name" });

async function handler(req: Request){
  const match = RECIPE_ROUTE.exec(req.url);
  const name: string = match?.pathname.groups.name ?? "おでん"

  const completion = await openai.chat.completions.create({
    messages: [
      {role: "system", content: "レシピ作成アシスタント"},
      {role: "user", content: name} ,
    ],
    model: "gpt-4o-mini",
  });

  const markdown = completion.choices[0].message.content;
  const body = render(markdown ?? "結果なし");
  
  const response = new Response(
    `<!DOCTYPE html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css" type="text/css">
  </head>
  <body>
 ${body}
  </body>
<html>`,
  {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  }
 );

  return response;
}

Deno.serve(handler);