import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Landing: one headline, one sentence, one CTA, three "how it works" cards.
// Replace the copy; don't add sections. Judges spend <10 s here.
export default function Home() {
  return (
    <div className="space-y-16">
      <section className="space-y-6 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {/* TODO: track */}Vertical AI · Shippear #3
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          {/* TODO: promesa en una línea */}
          El problema, resuelto en una oración.
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          {/* TODO: para quién y qué cambia */}
          Para quién es, y qué hace hoy que ayer era imposible.
        </p>
        <div className="flex justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/app">Probar la demo</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          ["1. Entrada", "Qué carga el usuario (texto, foto, datos)."],
          ["2. IA en el medio", "Qué decide o produce el modelo que un formulario no podría."],
          ["3. Resultado", "Qué sale, y qué pasa después (se guarda, se envía, se cobra)."],
        ].map(([title, desc]) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </section>
    </div>
  );
}
