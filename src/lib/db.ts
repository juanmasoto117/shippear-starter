/**
 * Minimal data layer with zero cloud setup.
 *
 *  - Node >= 22.13: uses the built-in `node:sqlite` module, file at data/app.db
 *  - Older Node (or if sqlite fails to load): in-memory Map (lost on restart)
 *
 * One table, `items`, with a free-form JSON `data` column so you don't have to
 * write migrations during the hackathon. Add typed helpers below as needed.
 */

export type Item = {
  id: string;
  kind: string; // e.g. "generation", "lead", "order" — whatever your idea needs
  data: Record<string, unknown>;
  createdAt: string; // ISO
};

type Store = {
  insert(item: Item): void;
  list(kind?: string, limit?: number): Item[];
  get(id: string): Item | undefined;
  remove(id: string): void;
  backend: "sqlite" | "memory";
};

// Keep the store on globalThis so Next.js hot reload doesn't create duplicates.
const g = globalThis as unknown as { __store?: Store };

function memoryStore(): Store {
  const map = new Map<string, Item>();
  return {
    backend: "memory",
    insert: (item) => void map.set(item.id, item),
    get: (id) => map.get(id),
    remove: (id) => void map.delete(id),
    list: (kind, limit = 50) =>
      [...map.values()]
        .filter((i) => !kind || i.kind === kind)
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
        .slice(0, limit),
  };
}

async function sqliteStore(): Promise<Store> {
  // Dynamic import so bundlers/older Node don't choke at module load.
  const { DatabaseSync } = await import("node:sqlite");
  const path = await import("node:path");
  const fs = await import("node:fs");
  const dir = path.join(process.cwd(), "data");
  fs.mkdirSync(dir, { recursive: true });
  const db = new DatabaseSync(path.join(dir, "app.db"));
  db.exec(`CREATE TABLE IF NOT EXISTS items (
    id TEXT PRIMARY KEY,
    kind TEXT NOT NULL,
    data TEXT NOT NULL,
    created_at TEXT NOT NULL
  )`);
  const ins = db.prepare("INSERT OR REPLACE INTO items (id, kind, data, created_at) VALUES (?, ?, ?, ?)");
  const getQ = db.prepare("SELECT * FROM items WHERE id = ?");
  const del = db.prepare("DELETE FROM items WHERE id = ?");
  const listAll = db.prepare("SELECT * FROM items ORDER BY created_at DESC LIMIT ?");
  const listKind = db.prepare("SELECT * FROM items WHERE kind = ? ORDER BY created_at DESC LIMIT ?");

  type Row = { id: string; kind: string; data: string; created_at: string };
  const toItem = (r: Row): Item => ({ id: r.id, kind: r.kind, data: JSON.parse(r.data), createdAt: r.created_at });

  return {
    backend: "sqlite",
    insert: (i) => void ins.run(i.id, i.kind, JSON.stringify(i.data), i.createdAt),
    get: (id) => {
      const r = getQ.get(id) as Row | undefined;
      return r ? toItem(r) : undefined;
    },
    remove: (id) => void del.run(id),
    list: (kind, limit = 50) =>
      ((kind ? listKind.all(kind, limit) : listAll.all(limit)) as Row[]).map(toItem),
  };
}

export async function getStore(): Promise<Store> {
  if (g.__store) return g.__store;
  try {
    g.__store = await sqliteStore();
  } catch (err) {
    console.warn("[db] node:sqlite unavailable, using in-memory store:", (err as Error).message);
    g.__store = memoryStore();
  }
  return g.__store;
}

export function newItem(kind: string, data: Record<string, unknown>): Item {
  return { id: crypto.randomUUID(), kind, data, createdAt: new Date().toISOString() };
}
