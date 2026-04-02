export function TaskCard({ task }: any) {
  return (
    <div
      draggable
      onDragStart={(e) => e.dataTransfer.setData("taskId", task.id)}
      className="p-3 bg-background border rounded-md cursor-grab hover:scale-[1.02] transition"
    >
      <div className="text-sm font-medium">{task.title}</div>
      <div className="text-xs text-muted-foreground">+{task.xpReward} XP</div>
    </div>
  );
}
