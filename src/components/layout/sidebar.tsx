import { LayoutDashboard, Kanban, BarChart3, Timer } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Kanban", icon: Kanban },
  { label: "Analytics", icon: BarChart3 },
  { label: "Pomodoro", icon: Timer },
];

export function Sidebar() {
  const [active, setActive] = useState("Kanban");

  return (
    <div className="flex flex-col gap-2">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`
              flex items-center gap-3
              px-3 py-2
              rounded-lg
              text-sm
              transition-all

              ${
                active === item.label
                  ? "bg-white/10 text-white"
                  : "text-muted-foreground hover:bg-white/5"
              }
            `}
          >
            <Icon size={18} />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
