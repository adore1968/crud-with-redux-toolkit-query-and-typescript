"use client";
import showAlert from "@/libs/showAlert";
import { setUpdateStates } from "@/redux/features/tasks/tasksSlice";
import { useAppDispatch } from "@/redux/hooks";
import {
  useDeleteTaskMutation,
  useGetTaskQuery,
} from "@/redux/services/tasksApi";
import { Task } from "@/ts/interfaces";
import { FaTrash, FaEdit } from "react-icons/fa";

interface Props {
  task: Task;
  index: number;
}

function TaskCard({ task, index }: Props) {
  const [deleteTask] = useDeleteTaskMutation();
  const { isSuccess, data } = useGetTaskQuery(task.id);
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    await deleteTask(task.id);
    showAlert("Task deleted successfully!", "error");
  };

  const handleUpdate = async () => {
    if (isSuccess) {
      dispatch(setUpdateStates({ task: data, currentId: task.id }));
    }
  };

  return (
    <div className="flex justify-between items-center sm:flex-row flex-col sm:gap-0 gap-2">
      <div className="text-xl sm:text-2xl">
        <h4>
          {index + 1}. {task.name}
        </h4>
      </div>
      <div className="text-lg sm:text-xl flex gap-2">
        <button
          type="button"
          onClick={handleUpdate}
          className="bg-emerald-700 hover:bg-emerald-600 transition-colors ease-in px-4 py-2 rounded text-slate-50"
        >
          <FaEdit />
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="bg-rose-700 hover:bg-rose-600 transition-colors ease-in px-4 py-2 rounded text-slate-50"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
