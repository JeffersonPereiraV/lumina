import { AppLayout } from "./components/layout/app-layout";
import { KanbanBoard } from "./components/kanban/kanban-board";
import { useGamification } from "./store/use-gamification";

export default function App() {
  const { addTask } = useGamification();

  return (
    <AppLayout>
      <div className="p-6 flex flex-col gap-6">
        <button
          onClick={() => addTask("Nova tarefa")}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Criar Task
        </button>

        <KanbanBoard />
      </div>
    </AppLayout>
  );
}
