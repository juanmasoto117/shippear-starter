"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AIResult } from "@/components/ai-result";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useStream } from "@/hooks/use-stream";

type SavedItem = { id: string; kind: string; data: { question?: string; answer?: string }; createdAt: string };

/**
 * The form → AI result pattern. Replace the two fields with whatever your
 * idea needs; keep the shape (submit → run → save → refresh list).
 */
export function GenerateForm() {
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [saved, setSaved] = useState<SavedItem[]>([]);
  const [backend, setBackend] = useState<string>("");
  const ai = useStream("/api/generate");

  async function loadSaved() {
    const res = await fetch("/api/items?kind=generation&limit=5");
    if (res.ok) {
      const data = await res.json();
      setSaved(data.items);
      setBackend(data.backend);
    }
  }
  useEffect(() => {
    loadSaved();
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const answer = await ai.run({ context, question });
    if (answer) {
      await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "generation", data: { context, question, answer } }),
      });
      loadSaved();
    }
  }

  const busy = ai.status === "loading" || ai.status === "streaming";

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Entrada</CardTitle>
          <CardDescription>Cambiá estos campos por los de tu idea. El resto ya funciona.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="context">Contexto</Label>
              <Textarea
                id="context"
                placeholder="Ej: Soy dueño de un kiosco en Rosario, vendo 200 productos…"
                value={context}
                onChange={(e) => setContext(e.target.value)}
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="question">Pedido</Label>
              <Textarea
                id="question"
                required
                placeholder="Ej: Armame un plan de reposición para la semana que viene"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={3}
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit" disabled={busy || !question.trim()}>
                {busy ? "Generando…" : "Generar"}
              </Button>
              {busy ? (
                <Button type="button" variant="outline" onClick={ai.abort}>
                  Cancelar
                </Button>
              ) : (
                ai.status !== "idle" && (
                  <Button type="button" variant="ghost" onClick={ai.reset}>
                    Limpiar
                  </Button>
                )
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <AIResult
          status={ai.status}
          text={ai.text}
          error={ai.error}
          mode={ai.mode}
          onRetry={() => ai.run({ context, question })}
        />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Últimos guardados</span>
              {backend && <span className="text-xs font-normal text-muted-foreground">db: {backend}</span>}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {saved.length === 0 ? (
              <p className="text-sm text-muted-foreground">Todavía no hay nada guardado.</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {saved.map((s) => (
                  <li key={s.id} className="rounded-md border px-3 py-2">
                    <div className="truncate font-medium">{s.data.question}</div>
                    <div className="truncate text-muted-foreground">{s.data.answer?.slice(0, 90)}</div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
