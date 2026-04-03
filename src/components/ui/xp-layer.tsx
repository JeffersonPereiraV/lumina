import { useGamification } from "../../store/use-gamification";
import { XPFloat } from "./xp-float";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export function XPLayer() {
  const { xpEvents, removeXPEvent } = useGamification();

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 pointer-events-none">
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

  return <XPFloat amount={amount} />;
}
