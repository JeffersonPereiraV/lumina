import { create } from "zustand";

type TaskStatus = "todo" | "doing" | "done";

type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  xpReward: number;
};

type GamificationState = {
  xp: number;
  level: number;

  tasks: Task[];

  addXP: (amount: number) => void;
  setXP: (xp: number) => void;

  addTask: (title: string) => void;
  moveTask: (taskId: string, status: TaskStatus) => void;
};

export const useGamification = create<GamificationState>((set, get) => ({
  xp: 0,
  level: 1,
  tasks: [],

  addXP: (amount) => {
    const currentXP = get().xp + amount;
    const newLevel = Math.floor(currentXP / 1000) + 1;

    set({
      xp: currentXP,
      level: newLevel,
    });
  },

  setXP: (xp) => {
    const level = Math.floor(xp / 1000) + 1;
    set({ xp, level });
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
        }

        return { ...task, status: newStatus };
      });

      return { tasks: updatedTasks };
    });
  },
}));
