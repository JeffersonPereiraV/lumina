import { TaskCard } from "./task-card";
import { useGamification } from "../../store/use-gamification";

export function Column({ title, status, tasks }: any) {
  const { moveTask } = useGamification();

  return (
    <div
      className="bg-card p-4 rounded-lg min-h-[300px]"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const id = e.dataTransfer.getData("taskId");
        moveTask(id, status);
      }}
    >
      <h2 className="font-semibold mb-4">{title}</h2>

      {tasks.map((task: any) => (
        <TaskCard key={task.id} task={task} />
      ))}

      {tasks.length === 0 && (
        <div className="text-xs text-muted-foreground text-center py-6">
          Nenhuma tarefa
        </div>
      )}
    </div>
  );
}
