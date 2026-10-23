// Quick pre-flight: is the API key valid and the model reachable?
//   npm run check
// Reads .env.local manually so it works without next.
import { readFileSync, existsSync } from "node:fs";
import Anthropic from "@anthropic-ai/sdk";

if (existsSync(".env.local")) {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const key = process.env.ANTHROPIC_API_KEY;
const model = process.env.ANTHROPIC_MODEL || "claude-opus-5-5";
if (!key) {
  console.log("⚠️  ANTHROPIC_API_KEY no está en .env.local → la app corre en modo MOCK.");
  process.exit(0);
}

const client = new Anthropic();
const t0 = Date.now();
try {
  const msg = await client.messages.create({
    model,
    max_tokens: 64,
    output_config: { effort: "low" },
    messages: [{ role: "user", content: "Respondé solo: ok" }],
  });
  const text = msg.content.find((b) => b.type === "text")?.text ?? "";
  console.log(`✅ ${model} respondió "${text.trim()}" en ${Date.now() - t0} ms (stop: ${msg.stop_reason})`);
} catch (err) {
  console.error(`❌ Falló la llamada a ${model}:`, err?.status ?? "", err?.message ?? err);
  process.exit(1);
}
