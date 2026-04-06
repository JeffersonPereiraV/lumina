import { create } from "zustand";

type TaskStatus = "todo" | "doing" | "done";

type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  xpReward: number;
};

type XPEvent = {
  id: string;
  amount: number;
};

type LevelUpEvent = {
  id: string;
  level: number;
};

type GamificationState = {
  xp: number;
  level: number;
  tasks: Task[];

  xpEvents: XPEvent[];
  levelEvents: LevelUpEvent[];

  addXP: (amount: number) => void;
  addTask: (title: string) => void;
  moveTask: (id: string, status: TaskStatus) => void;

  addXPEvent: (amount: number) => void;
  removeXPEvent: (id: string) => void;

  addLevelEvent: (level: number) => void;
  removeLevelEvent: (id: string) => void;
};

export const useGamification = create<GamificationState>((set, get) => ({
  xp: 0,
  level: 1,
  tasks: [],
  xpEvents: [],
  levelEvents: [],

  addXP: (amount) => {
    const currentXP = get().xp;
    const newXP = currentXP + amount;

    const oldLevel = get().level;
    const newLevel = Math.floor(newXP / 1000) + 1;

    set({
      xp: newXP,
      level: newLevel,
    });

    if (newLevel > oldLevel) {
      get().addLevelEvent(newLevel);
    }
  },

  addXPEvent: (amount) => {
    const event: XPEvent = {
      id: crypto.randomUUID(),
      amount,
    };

    set((state) => ({
      xpEvents: [...state.xpEvents, event],
    }));
  },

  removeXPEvent: (id) => {
    set((state) => ({
      xpEvents: state.xpEvents.filter((e) => e.id !== id),
    }));
  },

  addLevelEvent: (level) => {
    const event: LevelUpEvent = {
      id: crypto.randomUUID(),
      level,
    };

    set((state) => ({
      levelEvents: [...state.levelEvents, event],
    }));
  },

  removeLevelEvent: (id) => {
    set((state) => ({
      levelEvents: state.levelEvents.filter((e) => e.id !== id),
    }));
  },

  addTask: (title) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      status: "todo",
      xpReward: 100,
    };

    set((state) => ({
      tasks: [...state.tasks, newTask],
    }));
  },

  moveTask: (taskId, newStatus) => {
    set((state) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id !== taskId) return task;

        const wasNotDone = task.status !== "done";
        const willBeDone = newStatus === "done";

        if (wasNotDone && willBeDone) {
          get().addXP(task.xpReward);
          get().addXPEvent(task.xpReward);
        }

        return { ...task, status: newStatus };
      });

      return { tasks: updatedTasks };
    });
  },
}));
