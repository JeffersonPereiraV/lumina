import { motion } from "framer-motion";
import { useGamification } from "../../store/use-gamification";

export function Header() {
  const { xp, level } = useGamification();

  const progress = (xp % 1000) / 10;

  return (
    <header className="h-16 border-b border-border bg-background/50 backdrop-blur-md flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Lumina</h1>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-xs text-muted-foreground">Level {level}</div>
          <div className="text-sm font-semibold text-primary">{xp} XP</div>

          <div className="w-32 h-1 bg-border rounded mt-1 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
          J
        </div>
      </div>
    </header>
  );
}
