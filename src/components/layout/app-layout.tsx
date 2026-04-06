import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { XPLayer, LevelLayer } from "../ui/xp-layer";

type Props = {
  children: ReactNode;
};

export function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr] bg-background">
      <aside className="border-r border-border bg-card/30 backdrop-blur-md p-4">
        <Sidebar />
      </aside>

      <div className="flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </div>

      {/* 🔥 FEEDBACK VISUAL GLOBAL */}
      <XPLayer />
      <LevelLayer />
    </div>
  );
}
