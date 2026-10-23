# Shippear #3 — Idea bank

Judging: creativity, originality, viability. Avoid clichés (no generic chatbots,
no "AI summarizes your PDF", no expense trackers). Every idea below passes the
test "what does the AI do here that a form or a spreadsheet couldn't?" and has
one demo flow that fits in 6 hours with this starter.

Legend per idea: **Problem** · **Who** · **AI does** · **Demo flow** · **Why not cliché**

---

## Vertical AI

### V1. Acta digital de alquiler (move-in / move-out)
- **Problem:** deposit fights. Tenants and landlords argue over "that stain was already there".
- **Who:** inmobiliarias and the ~20% of Argentine households that rent.
- **AI does:** vision over a photo walkthrough builds a structured inventory with
  condition per item at move-in; at move-out it compares photo-to-photo, prices
  the damage per item and drafts the deposit settlement.
- **Demo flow:** upload 3 "before" + 3 "after" photos → diff report with amounts → PDF acta.
- **Why not cliché:** temporal comparison, not description. Output is a legal-ish
  document with money attached, not a summary.
- **Risk:** needs decent photos on stage. Prepare them tonight.

### V2. Presupuestador de oficios por foto + audio
- **Problem:** plumbers, electricians, albañiles quote by WhatsApp from memory; quotes vary 3x.
- **Who:** 1M+ independent tradespeople in Argentina; the clients who can't compare.
- **AI does:** from photos + a voice note ("hay que cambiar la cañería, son 4 m"),
  produces an itemized quote (materials at local prices, hours, margin) and a formal PDF.
- **Demo flow:** photo of a bathroom + text description → itemized quote → "enviar por WhatsApp".
- **Why not cliché:** multimodal + domain reasoning that replaces a skill the user lacks (costing).

### V3. Pre-mediación vecinal
- **Problem:** neighbor conflicts (ruidos, medianeras, humedad, mascotas) clog
  community mediation centers and small-claims courts for months.
- **Who:** municipalities (Rosario runs Centros de Mediación Comunitaria), consorcios.
- **AI does:** each side tells its story separately; the model extracts facts vs
  claims, finds common ground, grounds it in the applicable ordenanza and drafts
  a proposed agreement both can sign or escalate to a human mediator.
- **Demo flow:** two text boxes (vecino A / vecino B) → "acuerdo propuesto" + what each side gives up.
- **Why not cliché:** two-party reasoning. Also fits Social.

## Futuro (5+ years out)

### F1. Agente negociador de facturas (agent vs agent)
- **Problem:** in 2031 every company has an agent handling retention and billing.
  Consumers need their own. Today: cancelling a telco plan in Argentina requires
  a 40-minute call.
- **Who:** anyone with a recurring bill; later, SMEs with suppliers.
- **AI does:** reads your bill + usage, picks a negotiation strategy, and runs the
  negotiation against the company's agent (simulated on stage), producing the
  final deal or the exact script/legal basis to send.
- **Demo flow:** paste your bill → watch two agents negotiate live (streamed) → "ahorro: $X/mes".
- **Why not cliché:** the demo is a live agent-vs-agent negotiation, very watchable.
- **Risk:** viability questions ("companies won't let you"). Answer: agent-to-agent
  protocols are where commerce is going; start with the human-side script.

### F2. Herencia digital / "testamento de agentes"
- **Problem:** in 5+ years people have dozens of agents, subscriptions and
  accounts acting for them. Death or incapacity leaves them running with nobody in charge.
- **Who:** adults 35+, estate lawyers, insurers.
- **AI does:** inventories digital assets from unstructured input, classifies what
  should stop / transfer / be deleted, and drafts a per-asset handover runbook
  plus a legally shaped digital will.
- **Demo flow:** describe your digital life → classified inventory → generated "runbook del albacea".
- **Why not cliché:** nobody at a hackathon does death. Original and viable (estate-tech exists).

### F3. Seguro de obsolescencia laboral
- **Problem:** AI displaces tasks, not jobs. People can't tell how exposed they are.
- **Who:** workers 25–45, unions, insurers.
- **AI does:** reads what you actually do in a week (not your title), maps each
  task's exposure, builds a 12-month pivot plan and prices a parametric income-protection policy.
- **Demo flow:** "describí tu semana" → exposure map → plan + premium.
- **Why not cliché:** the insurance pricing is the twist; "career coach" alone would be cliché.

## Finanzas

### $1. Perfil crediticio para informales
- **Problem:** ~40% of Argentine workers are informal and invisible to credit scoring.
- **Who:** monotributistas, changas, feriantes; fintechs and cooperativas that want to lend.
- **AI does:** reads messy evidence (exported WhatsApp chats with clients, screenshots
  of transfers, Mercado Pago movements) and reconstructs income regularity,
  client concentration and seasonality into a lender-ready profile with confidence levels.
- **Demo flow:** upload a chat export + a few screenshots → income profile → "monto sugerido".
- **Why not cliché:** AI builds the credit file from unstructured life, not from a form.
- **Flag:** privacy. Say "local, opt-in, the user owns the report".

### $2. Seguro paramétrico por lluvia para feriantes y repartidores
- **Problem:** rain cancels ferias and kills delivery income. No product covers it.
- **Who:** feriantes, repartidores de apps, kiosqueros con venta de paso.
- **AI does:** underwrites from a free-text description of your activity and location
  (where, which days, what you lose), sets a premium, explains it; payout triggers
  on public weather data, no claims process.
- **Demo flow:** describe your week → quote → "simular día de lluvia" → payout notice.
- **Why not cliché:** parametric micro-insurance for the gig economy barely exists in LatAm.
- **Bonus:** the email literally says "Shippear no se suspende por lluvia".

### $3. ¿Cuotas o contado?
- **Problem:** with inflation, "12 cuotas sin interés" vs cash is a real finance decision Argentines make weekly.
- **Who:** every consumer; retailers who want to show the honest comparison.
- **AI does:** reads a photo of the price tag / checkout, pulls the current
  inflation expectation and your stated cash-flow, and explains the verdict in one paragraph.
- **Demo flow:** photo of a price tag → verdict with reasoning.
- **Why not cliché:** borderline (it's a calculator with a model in front). Keep as fallback only.

## Social & Sector Público

### S1. Presupuesto participativo asistido  ⭐
- **Problem:** Rosario pioneered Presupuesto Participativo in Argentina (2002).
  Thousands of citizen proposals are filtered by hand for months: duplicates,
  out-of-competence requests (provincial, private land), uncosted wishes.
- **Who:** Rosario and the 100+ Latin American cities running PP; the neighbors who propose.
- **AI does:** on submission, (1) finds and merges near-duplicate proposals,
  (2) checks competence and feasibility against municipal rules, (3) costs it with
  the city's unit prices, (4) rewrites it into a clear, votable project, (5) tells
  the citizen *right now* "viable / needs change / fuera de competencia" and why.
- **Demo flow:** type a proposal ("una plaza con juegos en Grandoli y Gutiérrez")
  → streaming analysis → costed, deduped, feasibility-checked card lands on the
  neighborhood board next to 30 seeded proposals.
- **Why not cliché:** AI across the whole intake flow; the city can't do this at
  scale today. Local hook judges will recognize instantly.

### S2. Pre-mediación vecinal
- See V3. Position it here if the team is Social-minded.

### S3. Auditor ciudadano de compras públicas
- **Problem:** procurement data is public but unreadable; anomalies hide in volume.
- **Who:** journalists, NGOs, the city's own control bodies.
- **AI does:** reads a licitación and cross-references history: single bidder,
  price vs market, recurring vendor, split purchases; writes a plain-language flag report with evidence.
- **Demo flow:** pick a licitación → anomaly report.
- **Why not cliché:** cross-referencing at scale; political edge. Needs seed data prepared tonight.

## Retail

### R1. Devoluciones predictivas para e-commerce
- **Problem:** returns are a top-3 cost for sellers; most are "no era lo que esperaba" (size, color, material).
- **Who:** Mercado Libre / Tiendanube sellers, consumer brands.
- **AI does:** reads hundreds of reviews and Q&A for a product, extracts return
  causes, predicts return risk per listing, and rewrites the listing / adds a
  pre-purchase "¿tu talle?" check to prevent them.
- **Demo flow:** paste listing + reviews → return-risk score with causes → fixed listing.
- **Why not cliché:** it's not "AI writes your description"; it's reading at scale to prevent a cost.

### R2. Catálogo de WhatsApp → tienda para agentes
- **Problem:** small shops sell via WhatsApp lists; in 2–5 years buyers' agents
  shop for them, and those shops are invisible to agents.
- **Who:** almacenes, dietéticas, verdulerías, small brands.
- **AI does:** turns a pasted WhatsApp catalog into a structured, agent-readable
  storefront (schema + MCP/API endpoint), then a simulated buyer agent shops it live.
- **Demo flow:** paste catalog text → storefront → buyer agent buys "2 kg de yerba y algo para el mate".
- **Why not cliché:** agentic commerce from the seller side. Also fits Futuro.

### R3. Inventario por notas de voz para kioscos
- **Problem:** kiosqueros manage stock in their head; stockouts and dead stock are the norm.
- **Who:** ~100k kioscos and almacenes in Argentina.
- **AI does:** parses colloquial messages ("vendí dos cocas de litro, me quedan tres")
  into inventory movements, tracks price changes against inflation, suggests reorders.
- **Demo flow:** type/dictate 3 messages → inventory table updates → reorder list.
- **Why not cliché:** the hard part is parsing messy Spanish, not the table. Medium originality.

---

## Top 5 (demo-ability in 6 h × originality × viability)

| # | Idea | Demo-ability | Originality | Viability | Notes |
|---|------|--------------|-------------|-----------|-------|
| 1 | **S1 Presupuesto participativo asistido** | High (pure text, seed data generatable) | High | High (gov-tech, 100+ cities) | Rosario hook; AI runs the whole intake |
| 2 | V3/S2 Pre-mediación vecinal | High (two text boxes) | High | Medium-high | Emotional, clear before/after |
| 3 | F1 Agente negociador de facturas | High (two streams on stage) | High | Medium | Best *show*; weaker viability answer |
| 4 | $1 Perfil crediticio para informales | Medium (needs sample chat export) | High | High (fintech sponsors) | Inclusion narrative; privacy flag |
| 5 | R1 Devoluciones predictivas | High (paste reviews) | Medium-high | High | Safest Retail pick |

Alternates if the team leans there: $2 (rain insurance, fun), V1 (acta de alquiler, needs photos), R2 (agentic storefront, trendy).

## The pick: S1, Presupuesto participativo asistido

Why: it is the only idea where **all three** scores are high *and* the room is
in Rosario. The AI is not bolted on: dedupe, competence check, costing and
rewriting are all judgment tasks a form can't do, and the city demonstrably
can't do them fast by hand. The demo is pure text, so WiFi, photos and audio
can't kill it, and the mock mode in this starter can carry the exact same flow
if the API dies. The pitch has a real number (months of manual filtering) and a
real buyer (municipalities that already run PP and already pay for the process).

Build plan for it with this starter: `buildPrompt` takes the proposal +
neighborhood; the system prompt carries the competence rules and a short
unit-price table; `completeJSON` returns `{ viable, reason, cost, duplicates[],
rewritten }`; the result card streams the explanation and then pins the
structured card to a seeded board (30 proposals in `data/seed.json`, loaded
into SQLite on first request).

### Pitch script (Spanish, ~1 min; expand to 3 with the live demo)

> Rosario inventó el Presupuesto Participativo en Argentina en 2002. Hoy, cada
> año, miles de vecinos proponen plazas, luminarias, rampas. Y cada año el
> municipio tarda meses en filtrarlas a mano: la mitad son duplicadas, un
> tercio no son competencia de la ciudad, y casi ninguna llega con un costo.
> Para cuando se votan, el vecino ya se olvidó de que participó. Construimos
> [NOMBRE]: el vecino escribe su propuesta como la diría en la esquina, y en
> diez segundos la IA la cruza con las demás propuestas del barrio, le dice si
> es competencia municipal, la costea con los precios unitarios de la ciudad y
> la reescribe como un proyecto votable. Si no es viable, le explica por qué y
> qué sí podría pedir. El municipio recibe propuestas limpias, costeadas y
> agrupadas, y el vecino recibe una respuesta en el momento. [DEMO]. Esto se
> implementa sobre el proceso que Rosario ya tiene, sin cambiar la ordenanza,
> y más de cien ciudades de Latinoamérica corren el mismo proceso a mano. El
> siguiente paso es piloto con un distrito en la edición 2027.
