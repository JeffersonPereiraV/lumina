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
  addTask: (title: string) => void;
  moveTask: (id: string, status: TaskStatus) => void;
};

export const useGamification = create<GamificationState>((set, get) => ({
  xp: 0,
  level: 1,
  tasks: [],

  addXP: (amount) => {
    const newXP = get().xp + amount;
    const newLevel = Math.floor(newXP / 1000) + 1;

    set({
      xp: newXP,
      level: newLevel,
    });
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
