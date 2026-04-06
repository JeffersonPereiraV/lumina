import { useGamification } from "../../store/use-gamification";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

/* =========================
   XP FLOAT LAYER
========================= */

export function XPLayer() {
  const { xpEvents, removeXPEvent } = useGamification();

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 pointer-events-none z-50">
      <AnimatePresence>
        {xpEvents.map((event) => (
          <XPItem
            key={event.id}
            id={event.id}
            amount={event.amount}
            onDone={removeXPEvent}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

function XPItem({
  id,
  amount,
  onDone,
}: {
  id: string;
  amount: number;
  onDone: (id: string) => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone(id);
    }, 800);

    return () => clearTimeout(timer);
  }, [id, onDone]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0, scale: 0.9 }}
      animate={{ opacity: 1, y: -40, scale: 1 }}
      exit={{ opacity: 0, y: -60, scale: 0.9 }}
      transition={{ duration: 0.8 }}
      className="
        text-sm 
        font-bold 
        text-primary 
        drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]
      "
    >
      +{amount} XP
    </motion.div>
  );
}

/* =========================
   LEVEL UP LAYER
========================= */

export function LevelLayer() {
  const { levelEvents, removeLevelEvent } = useGamification();

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      <AnimatePresence>
        {levelEvents.map((event) => (
          <LevelItem
            key={event.id}
            id={event.id}
            level={event.level}
            onDone={removeLevelEvent}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

function LevelItem({
  id,
  level,
  onDone,
}: {
  id: string;
  level: number;
  onDone: (id: string) => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone(id);
    }, 1200);

    return () => clearTimeout(timer);
  }, [id, onDone]);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1.2, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {/* Glow background */}
      <div className="absolute inset-0 blur-2xl opacity-30 bg-primary rounded-full" />

      {/* Content */}
      <div className="relative flex flex-col items-center">
        <div className="text-4xl font-bold tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          LEVEL UP
        </div>

        <div className="text-xl text-primary mt-2 font-semibold">
          Level {level}
        </div>
      </div>
    </motion.div>
  );
}
