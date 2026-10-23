import { NextRequest } from "next/server";
import { z } from "zod";
import { describeError, isMockMode, streamText } from "@/lib/ai";
import { buildPrompt } from "@/lib/prompts";

export const runtime = "nodejs";
export const maxDuration = 60;

const Body = z.object({
  context: z.string().max(8000).default(""),
  question: z.string().min(1, "Escribí un pedido").max(4000),
});

/**
 * POST /api/generate  → text/plain stream of the model's answer.
 * Header `x-ai-mode: mock|live` tells the client which path ran.
 */
export async function POST(req: NextRequest) {
  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Datos inválidos" }, { status: 400 });
  }

  try {
    const stream = streamText({ prompt: buildPrompt(parsed.data), signal: req.signal });
    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "x-ai-mode": isMockMode() ? "mock" : "live",
      },
    });
  } catch (err) {
    return Response.json({ error: describeError(err) }, { status: 500 });
  }
}
