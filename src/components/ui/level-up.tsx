import { motion } from "framer-motion";

export function LevelUp({ level }: { level: number }) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1.2, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center text-white"
    >
      <div className="text-4xl font-bold tracking-widest">LEVEL UP</div>

      <div className="text-xl text-primary mt-2">Level {level}</div>
    </motion.div>
  );
}
