import { Tasks } from "@/ts/interfaces";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Tasks;
}

function TasksList({ tasks }: Props) {
  if (tasks.length < 1) return;

  return (
    <div className="flex flex-col gap-5 border-t border-black p-5">
      {tasks.map((task, index) => (
        <TaskCard key={task.id} task={task} index={index} />
      ))}
    </div>
  );
}

export default TasksList;
