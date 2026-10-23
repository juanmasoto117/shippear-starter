import { NextRequest } from "next/server";
import { z } from "zod";
import { getStore, newItem } from "@/lib/db";

export const runtime = "nodejs";

const Body = z.object({
  kind: z.string().min(1).default("generation"),
  data: z.record(z.string(), z.unknown()),
});

/** GET /api/items?kind=generation&limit=20 */
export async function GET(req: NextRequest) {
  const store = await getStore();
  const kind = req.nextUrl.searchParams.get("kind") ?? undefined;
  const limit = Number(req.nextUrl.searchParams.get("limit") ?? 20);
  return Response.json({ backend: store.backend, items: store.list(kind, limit) });
}

/** POST /api/items  { kind, data } */
export async function POST(req: NextRequest) {
  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: "Datos inválidos" }, { status: 400 });
  const store = await getStore();
  const item = newItem(parsed.data.kind, parsed.data.data);
  store.insert(item);
  return Response.json({ item }, { status: 201 });
}

/** DELETE /api/items?id=... */
export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return Response.json({ error: "Falta id" }, { status: 400 });
  const store = await getStore();
  store.remove(id);
  return Response.json({ ok: true });
}
