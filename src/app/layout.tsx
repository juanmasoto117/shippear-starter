import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shippear Starter",
  description: "Hackathon boilerplate: Next.js + Claude streaming + SQLite",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh flex flex-col">
        <header className="border-b">
          <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
            <Link href="/" className="font-semibold tracking-tight">
              {/* TODO: nombre del producto */}
              Shippear Starter
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/app" className="hover:underline">
                App
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">{children}</main>
        <footer className="border-t py-4 text-center text-xs text-muted-foreground">
          Shippear #3 · Rosario · 2026
        </footer>
      </body>
    </html>
  );
}
