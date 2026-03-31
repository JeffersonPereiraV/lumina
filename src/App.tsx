import { KanbanBoard } from "./components/kanban/kanban-board";
import { useGamification } from "./store/use-gamification";

export default function App() {
  const { addTask } = useGamification();

  return (
    <div>
      <div className="p-4">
        <button
          onClick={() => addTask("Nova tarefa")}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Criar Task
        </button>
      </div>

      <KanbanBoard />
    </div>
  );
}
