import { GenerateForm } from "@/components/generate-form";

export default function AppPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{/* TODO */}La app</h1>
        <p className="text-sm text-muted-foreground">
          Formulario → IA (streaming) → resultado guardado. Un solo flujo, pulido.
        </p>
      </div>
      <GenerateForm />
    </div>
  );
}
