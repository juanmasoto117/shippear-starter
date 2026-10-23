# Shippear #3 — Day plan (Sat 24 Oct 2026, Tecnoteca, Estévez Boero 740)

> **Idea (one sentence):** _______________________________________________
> **Track:** ________   **Demo flow (3 bullets):** 1. ______ 2. ______ 3. ______
>
> Fill this in by 10:15. Nothing else matters until it's filled in.

Hard facts from the organizers: doors 9:00 (be there 8:45), start 9:30 sharp,
lunch 13:00, **first submission call 15:30, hard close 16:00**, 5 finalists
pitch 16:30, winners 17:00, ends 17:30. Rain doesn't cancel anything.
Judging weighs creativity, originality and viability; "evitá los lugares comunes".

## Hour by hour

| Time | Milestone | What actually happens |
|------|-----------|-----------------------|
| **9:00** | Arrive, set up | Breakfast, find a table near power. Laptop open, `npm run dev` already working from last night. Join the WhatsApp group. If solo: do the team-matching activity with the idea bank open, pitch two ideas, listen for who can build/design/pitch. |
| **9:30** | Kickoff | Listen for **sponsor challenges** in Vertical AI. If one matches an idea in `IDEAS.md`, that's a strong tie-breaker (sponsors sit near judges). Write them down. |
| **9:45** | Idea sprint | 20 minutes, no laptops. Each person pitches 1 idea in 60 s. Score each on a napkin: demo-in-6h / original / viable (1–3 each). Discuss only the top two. |
| **10:05** | Decide | Pick one. Say out loud what we will *not* build. Write the sentence + 3-bullet demo flow at the top of this file. |
| **10:15** | **IDEA LOCKED** | No more idea changes after this. Clone the repo on everyone's machine, `.env.local`, `npm run check`, `/app` works for all. Rename the product in the nav. |
| **10:30** | Skeleton of *the* flow | Define the form fields and the output shape (zod schema). Rewrite `prompts.ts` with the domain rules + one worked example. Test the prompt in `/app` with real-ish input before any UI work. |
| **11:00** | Seed data & structure | If the demo needs a board / history / catalog: generate 20–30 realistic rows with Claude into `data/seed.json`, load them in `getStore()`. Landing copy drafted (headline, subtitle, 3 cards) by the non-coder. |
| **11:30** | Wire the flow end to end | Form → route → model → result card → saved → shows in list. Ugly is fine. One person drives, one reviews the model output quality and iterates the prompt. |
| **12:30** | First full run-through | Someone who didn't code it runs the demo from a cold browser. Note every rough edge in a list. Fix only the blockers. |
| **13:00** | **DEMO PATH WORKS** · Lunch | Eat. Talk about the pitch, not the code. Decide the *one* flow to polish; everything else is frozen. Commit + push. |
| **13:45** | Polish the one flow | Loading states, empty states, result formatting, realistic placeholder text, a proper product name, favicon if cheap. Real content on the landing. Nothing new. |
| **14:30** | Demo hardening | Run the exact demo 3 times with the exact inputs you'll use. Save those inputs in a text file. Test `MOCK_AI=1` as the fallback. Screenshot/record a 30 s screen capture as plan C. |
| **15:00** | **PITCH DRAFTED** | Pitch written using the template below, rehearsed once out loud with a timer. Submission form fields prepared (name, one-liner, repo link, demo link/video, track, team). |
| **15:15** | Freeze | `git tag submission`. No more pushes except to fix a crash. Deploy if the form wants a URL (Vercel from the laptop that has the key; otherwise localhost + video). |
| **15:30** | **SUBMIT** on the first call | Not 16:00. The last 30 minutes are for the WiFi dying, not for features. |
| 15:45 | Rehearse x2 | Full pitch with the live demo, 3-minute timer. Decide who clicks and who talks. Close every other tab. Zoom browser to 125%. |
| 16:30 | Pitches | If selected: laptop plugged in, dev server up, demo inputs pasted, mock fallback known. If not: watch the finalists and write down what the judges asked. |

Decision rules for the day:
- A feature that isn't on the demo path doesn't get built. Say "post-hackathon" and move on.
- If the model output is wrong, fix the prompt or constrain the output (zod schema) before touching code.
- If something has been broken for 20 minutes, cut it, mock it, or hardcode it.
- Every hour, someone who didn't write it runs the demo.

## Roles

**2 people**
- **Builder:** owns `src/`, the prompt and the route. Drives the keyboard.
- **Product/Pitch:** owns the idea sentence, landing copy, seed data (generated with Claude), demo script, submission form and pitch. Tests the demo every hour. Pairs with the builder on prompt quality.

**3 people**
- **Backend/AI:** `lib/ai.ts`, `prompts.ts`, the route, the zod schema, seed data, output quality.
- **Frontend:** `generate-form.tsx`, result rendering, landing, states, polish. Owns the look.
- **Product/Pitch:** as above, plus the viability story (who pays, how much, what exists today), the pitch deck if any (max 3 slides), and the submission.

**4 people**
- Same three, plus **Demo/QA & data:** generates and curates seed data, builds the realistic demo inputs, runs the cold-browser test every hour, records the backup video, prepares the Vercel deploy, and takes over the pitch if the Product person is a weaker speaker. Four people on one flow is already crowded: the 4th never touches `generate-form.tsx` or the route.

Whoever talks best gives the pitch. Whoever is calmest clicks the demo. Not necessarily the same person.

## Pitch template (3 minutes max; 2:30 is better)

Structure: **problem → demo → viability → next steps**. Spanish, rioplatense, no slides needed beyond the app itself.

1. **Problem (30 s).** One concrete person, one concrete pain, one number. "En Rosario, X personas tienen Y todas las semanas. Hoy lo resuelven con Z, y Z falla porque…". No "en un mundo donde".
2. **What we built (15 s).** Name + one sentence. "Construimos NOMBRE: hacés A y en 10 segundos obtenés B."
3. **Demo (75 s).** Live. One flow, the inputs you've rehearsed. Narrate what the AI is deciding *while it streams* ("acá está cruzando contra las otras 30 propuestas…"). Land on the saved/structured result. Say explicitly what a form or spreadsheet could not have done here.
4. **Viability (30 s).** Who pays and why they already pay for something worse today. What exists today and why it isn't this. One sentence on data/privacy if relevant. One sentence on why it's buildable (it's running, it's Next.js + Claude, no exotic infra).
5. **Next steps (15 s).** The one thing you'd do Monday with the prize/mentoring. A pilot, a partner, a dataset.
6. **Close (5 s).** Name + one-liner again. Stop talking.

Anticipate the three judge questions: "¿Cómo gana plata?", "¿Por qué no lo hace [incumbente]?", "¿Qué pasa si la IA se equivoca?". Have a one-sentence answer for each written down.

## Packing checklist (tonight)

Hardware
- [ ] Laptop, fully charged, **and** charger
- [ ] Power strip / zapatilla (the organizers bring some, yours is better)
- [ ] Phone + cable (hotspot is plan B for WiFi; check your data plan)
- [ ] USB-C/HDMI adapter in case the pitch is on a projector
- [ ] Headphones, mouse if you use one
- [ ] Mate, yerba, termo (the email says so), water bottle, snacks

Software (do tonight, on venue-free WiFi)
- [ ] `shippear-starter` cloned and pushed to a GitHub repo you can share with strangers (private repo + add collaborators, or public)
- [ ] `npm install` done; `npm run build` passes; `npm run dev` opens `/app` and the mock stream works
- [ ] Optional for bad WiFi: zip `node_modules` (or keep the folder) to copy to teammates via AirDrop/USB
- [ ] `.env.local` with the real `ANTHROPIC_API_KEY`; `npm run check` prints a green line; note the latency
- [ ] Check your Anthropic console: credits / spend limit high enough for a day of demos
- [ ] Vercel account logged in on the laptop (`npx vercel --version` works) in case the submission wants a URL; know that env vars must be added in the Vercel dashboard
- [ ] GitHub logged in, `git config user.name/email` set, SSH key works
- [ ] Node ≥ 22.13 (`node -v`), so `node:sqlite` works; otherwise the store falls back to memory, which is fine for a demo
- [ ] Browser profile for the demo: no extensions, bookmarks bar hidden, zoom 125%
- [ ] Screen recorder tested (QuickTime / Cmd-Shift-5) for the backup video
- [ ] `IDEAS.md` read once more; pick your personal top 3 so you can pitch them at the door
- [ ] WhatsApp group joined (link in the Luma email); Luma ticket on the phone
- [ ] Alarm 7:30; leave to be at Estévez Boero 740 by 8:45
