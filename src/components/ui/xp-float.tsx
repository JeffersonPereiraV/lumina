import { motion } from "framer-motion";

export function XPFloat({ amount }: { amount: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -40 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="text-sm font-bold text-primary"
    >
      +{amount} XP
    </motion.div>
  );
}
