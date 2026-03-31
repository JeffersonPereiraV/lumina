type Task = {
  id: string;
  title: string;
  xpReward: number;
};

export function TaskCard({ task }: { task: Task }) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="
        p-3 
        bg-background 
        border 
        rounded-md 
        cursor-grab 
        transition-transform 
        hover:scale-[1.02]
      "
    >
      <div className="text-sm font-medium">{task.title}</div>
      <div className="text-xs text-muted-foreground">+{task.xpReward} XP</div>
    </div>
  );
}
