import { useGamification } from "../../store/use-gamification";
import { Column } from "./column";

export function KanbanBoard() {
  const { tasks } = useGamification();

  return (
    <div className="grid grid-cols-3 gap-4">
      <Column
        title="Todo"
        status="todo"
        tasks={tasks.filter((t) => t.status === "todo")}
      />
      <Column
        title="Doing"
        status="doing"
        tasks={tasks.filter((t) => t.status === "doing")}
      />
      <Column
        title="Done"
        status="done"
        tasks={tasks.filter((t) => t.status === "done")}
      />
    </div>
  );
}
