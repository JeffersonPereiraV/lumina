import { useGamification } from "../../store/use-gamification";
import { Column } from "./column";

export function KanbanBoard() {
  const { tasks } = useGamification();

  return (
    <div className="grid grid-cols-3 gap-4">
      <Column
        title="A Iniciar"
        status="todo"
        tasks={tasks.filter((t) => t.status === "todo")}
      />
      <Column
        title="Iniciado"
        status="doing"
        tasks={tasks.filter((t) => t.status === "doing")}
      />
      <Column
        title="Finalizado"
        status="done"
        tasks={tasks.filter((t) => t.status === "done")}
      />
    </div>
  );
}
