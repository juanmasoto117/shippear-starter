# START HERE (for Leon, no technical background needed)

## What this folder is

A ready-made starting point for a web app, built last night. A programmer can
open it and have a working screen with a form, an AI answer and a saved
result in about two minutes. You don't need to touch anything inside `src/`.
The three files that matter to **you** are:

- `IDEAS.md`: fifteen ideas, the top five, the recommended one, and a pitch script in Spanish.
- `PLAN.md`: the hour-by-hour plan for the day, who does what, how to pitch, what to pack.
- `README.md`: instructions for the programmers. Hand it to them, don't read it.

## Your role tomorrow

Teams of 2 to 4 need one person who is **not** coding. That person owns:

1. **The idea.** You arrive with a ranked list and a recommendation. Most teams waste the first hour on this.
2. **The demo script.** The exact story and the exact inputs the team will type on stage.
3. **The pitch.** Three minutes, in Spanish, structure already written in `PLAN.md`.
4. **Testing.** Once an hour, you open the app cold and try to use it as a real user. Report what confused you. This is extremely valuable and programmers rarely do it.
5. **The submission.** The form, the team names, the one-line description, the link. Submitted at 15:30, not 16:00.

That is a full-time job for six hours. Nobody will ask you to code.

## What to say at the door (team-matching activity)

> "No programo, pero vengo con una idea rankeada, un plan de la jornada y un
> proyecto base ya armado y andando en mi compu: formulario, IA que responde
> en vivo y base de datos. Busco una o dos personas que sepan programar en
> web. Yo me encargo del pitch, el guion de la demo y de probar el producto."

Pick people who nod at "Next.js" or "React", or who say they've built a website.
Avoid teams that want to build a mobile app or hardware: six hours is not enough.

## What to say to your programmers (first 10 minutes)

Hand them your laptop or AirDrop the folder (Finder → right-click the folder
`shippear-starter` → Share → AirDrop). Then say:

> "Está en `~/dev/shippear-starter`. Con `npm install && npm run dev` corre.
> El README tiene una checklist de 30 minutos. Sin API key funciona en modo
> simulado, así que podés ver la pantalla ya."

Then open `IDEAS.md` on your own screen and start the 20-minute idea sprint
described in `PLAN.md`.

## Tonight (three things, nothing technical)

1. **Read `IDEAS.md`**, especially the recommended idea and the pitch script.
   Read the pitch out loud twice. Decide your own personal top 3 so you can
   pitch them at the door.
2. **Read the "Pitch template" and "Packing checklist" in `PLAN.md`.** Pack the
   bag tonight. Charge the laptop and the phone.
3. **Optional: an API key.** This is a password-like code that lets the app
   talk to Claude (the AI). Without it, the app still works in "mock" mode
   (it shows a fake, pre-written answer so the screen can be built). Your
   programmers will almost certainly have their own key. If you want one
   anyway: create an account at console.anthropic.com, add a small amount of
   credit, create a key, and tomorrow ask a teammate to paste it into a file
   called `.env.local`. Do not paste it into a chat or a WhatsApp group.

## Words you will hear tomorrow

| Word | What it means |
|------|---------------|
| Repo | The project folder. This one. |
| Next.js / React | The technology this folder is built with. The one the v0 prizes point at. |
| Run / dev server | Starting the app on a laptop so you can see it in a browser. |
| API key | The code that lets the app use Claude. Treat it like a password. |
| Mock mode | The app pretending to call the AI. Looks identical. Our safety net if WiFi dies. |
| Streaming | The answer appearing word by word instead of all at once. Already works. |
| Prompt | The instructions given to the AI. Lives in one file; you can help write it in plain Spanish. |
| Commit / push | Saving a version of the code / uploading it to GitHub. |
| Deploy / Vercel | Putting the app on the internet with a public link. Only needed if the submission form asks for a URL. |
| v0 | A tool that generates React screens from a text description. The 2nd and 3rd prizes are credits for it. |

## The one thing to protect

The judging rewards originality and viability, not code volume. The team that
shows **one** flow that works, tells a clear story about **who** has the
problem and **who pays**, and submits on time, beats the team with five
half-built features. Your job is to keep the team on one flow. The plan has
alarms at 10:15, 13:00, 15:00 and 15:30 for exactly that.
