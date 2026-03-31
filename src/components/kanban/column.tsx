import { TaskCard } from "./task-card";
import { useGamification } from "../../store/use-gamification";

export function Column({ title, status, tasks }: any) {
  const { moveTask } = useGamification();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const taskId = e.dataTransfer.getData("taskId");
    moveTask(taskId, status);
  };

  return (
    <div
      className="bg-card p-4 rounded-lg min-h-[300px]"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2 className="font-semibold mb-4">{title}</h2>

      <div className="space-y-2">
        {tasks.map((task: any) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
