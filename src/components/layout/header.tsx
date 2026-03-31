import { motion } from "framer-motion";
import { useGamification } from "../../store/use-gamification";

export function Header() {
  const { xp, level } = useGamification();

  // cálculo simples de progresso dentro do nível
  const xpForCurrentLevel = xp % 1000;
  const progress = (xpForCurrentLevel / 1000) * 100;

  return (
    <header className="h-16 border-b border-border bg-background/50 backdrop-blur-md flex items-center justify-between px-6">
      {/* LEFT */}
      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col text-right">
          <span className="text-xs text-muted-foreground">Level {level}</span>

          <span className="text-sm font-semibold text-primary">{xp} XP</span>

          {/* PROGRESS BAR */}
          <div className="w-32 h-1 bg-border rounded mt-1 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold"
        >
          J
        </motion.div>
      </div>
    </header>
  );
}
