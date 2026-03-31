import { LayoutDashboard, Kanban, BarChart3, Timer } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Kanban", icon: Kanban },
  { label: "Analytics", icon: BarChart3 },
  { label: "Pomodoro", icon: Timer },
];

export function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  return (
    <div className="flex flex-col gap-2">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`
                relative flex items-center gap-3
                px-3 py-2
                rounded-lg
                text-sm
                transition-all duration-200

                ${
                  active === item.label
                    ? "bg-white/10 text-white"
                    : "text-muted-foreground hover:bg-white/5 hover:text-white"
                }
            `}
          >
            {active === item.label && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-primary" />
            )}
            <Icon size={18} />
            <span>{item.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
