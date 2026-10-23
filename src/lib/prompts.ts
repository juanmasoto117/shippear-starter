/**
 * All prompts live here so the whole team edits one file.
 * Keep the system prompt stable (it is cached by the API); put the
 * user-specific input in the user message.
 */

export const SYSTEM_PROMPT = `Sos el motor de un producto que se está construyendo en una hackathon.
Respondé en español rioplatense, claro y concreto. Usá Markdown liviano
(títulos cortos, listas) y nunca inventes datos que no te dieron: si falta
información, decí qué falta y seguí con lo que tenés.`;

/** Build the user message from the form fields. Adapt to your idea. */
export function buildPrompt(input: { context: string; question: string }) {
  return `Contexto del usuario:\n${input.context.trim() || "(sin contexto)"}\n\nPedido:\n${input.question.trim()}`;
}

/** Canned answer used in mock mode (no API key / offline). */
export const MOCK_ANSWER = `## Modo mock (sin API key)

Esto es una respuesta **simulada** que se transmite palabra por palabra para
que puedas construir y probar la interfaz sin conexión.

### Qué hacer
1. Copiá \`.env.example\` a \`.env.local\` y pegá tu \`ANTHROPIC_API_KEY\`.
2. Reiniciá \`npm run dev\`.
3. Volvé a enviar el formulario: vas a ver la respuesta real del modelo.

Mientras tanto, la UI, el streaming, el estado de carga y el guardado en la
base de datos ya funcionan exactamente igual que con el modelo real.`;
