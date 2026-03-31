import { useGamification } from "../../store/use-gamification";
import { Column } from "./column";

export function KanbanBoard() {
  const { tasks } = useGamification();

  const todo = tasks.filter((t) => t.status === "todo");
  const doing = tasks.filter((t) => t.status === "doing");
  const done = tasks.filter((t) => t.status === "done");

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <Column title="Todo" status="todo" tasks={todo} />
      <Column title="Doing" status="doing" tasks={doing} />
      <Column title="Done" status="done" tasks={done} />
    </div>
  );
}
