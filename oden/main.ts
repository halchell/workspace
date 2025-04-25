import OpenAI from "https://deno.land/x/openai@v4.62.1/mod.ts";

const openai = new OpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});