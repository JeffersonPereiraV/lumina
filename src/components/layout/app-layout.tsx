import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr] bg-background">
      {/* Sidebar (placeholder por enquanto) */}
      <aside className="border-r border-border bg-card/30 backdrop-blur-md p-4">
        <Sidebar />
      </aside>

      {/* Conteúdo */}
      <main className="flex flex-col">
        <Header />
        {children}
      </main>
    </div>
  );
}
