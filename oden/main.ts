Deno.serve(
  (_req: Request) => 
    new Response("<h1>Hello World</h1>",{
      headers: {
        "content-type": "text/html",
      },
    })
);