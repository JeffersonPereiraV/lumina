import { motion } from "framer-motion";

export function Header() {
  return (
    <header
      className="
        h-16
        border-b border-border
        bg-background/50
        backdrop-blur-md
        flex items-center justify-between
        px-6
      "
    >
      {/* LEFT */}
      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col text-right">
          <span className="text-xs text-muted-foreground">Level 5</span>
          <span className="text-sm font-semibold text-primary">1,240 XP</span>
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
