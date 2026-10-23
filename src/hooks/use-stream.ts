"use client";

import { useCallback, useRef, useState } from "react";

export type StreamStatus = "idle" | "loading" | "streaming" | "done" | "error";

/**
 * POST a JSON body to a route that streams text/plain back.
 *
 *   const { text, status, error, mode, run, reset, abort } = useStream("/api/generate");
 *   run({ context, question });
 *
 * `status`: loading (waiting first byte) → streaming → done | error.
 * `mode`: "mock" | "live" from the x-ai-mode header.
 */
export function useStream(url: string) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<StreamStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<"mock" | "live" | null>(null);
  const controller = useRef<AbortController | null>(null);

  const abort = useCallback(() => controller.current?.abort(), []);

  const reset = useCallback(() => {
    abort();
    setText("");
    setStatus("idle");
    setError(null);
  }, [abort]);

  const run = useCallback(
    async (body: unknown): Promise<string> => {
      abort();
      const ac = new AbortController();
      controller.current = ac;
      setText("");
      setError(null);
      setStatus("loading");

      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
          signal: ac.signal,
        });
        setMode((res.headers.get("x-ai-mode") as "mock" | "live") ?? null);

        if (!res.ok || !res.body) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error ?? `Error ${res.status}`);
        }

        setStatus("streaming");
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setText(acc);
        }
        setStatus("done");
        return acc;
      } catch (err) {
        if ((err as Error).name === "AbortError") {
          setStatus("idle");
          return "";
        }
        setError((err as Error).message || "Error desconocido");
        setStatus("error");
        return "";
      }
    },
    [url, abort],
  );

  return { text, status, error, mode, run, reset, abort };
}
