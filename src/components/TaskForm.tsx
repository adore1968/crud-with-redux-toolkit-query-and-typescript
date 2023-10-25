"use client";
import showToast from "@/libs/ShowToast";
import {
  handleTaskChange,
  resetStates,
} from "@/redux/features/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  useCreateTaskMutation,
  useUpdateTaskMutation,
} from "@/redux/services/tasksApi";
import { ChangeEvent, FormEvent } from "react";

function TasksForm() {
  const { task, currentId } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const [createTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    dispatch(handleTaskChange({ value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentId) {
      await createTask(task);
      showToast("Task created successfully!", "success");
    } else {
      await updateTask(task);
      showToast("Task updated successfully!", "success");
    }
    dispatch(resetStates());
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-5">
      <h1
        className={`text-center text-2xl sm:text-3xl font-bold ${
          currentId ? "text-emerald-800" : "text-rose-800"
        }`}
      >
        {currentId ? "Update Task!" : "Create Task!"}
      </h1>
      <div className="flex text-lg sm:text-xl flex-wrap sm:gap-0 gap-1">
        <input
          type="text"
          placeholder="Enter the name"
          value={task.name}
          onChange={handleChange}
          className="text-slate-50 bg-slate-950 px-4 py-2 sm:rounded-l flex-1"
        />
        <button
          type="submit"
          className={`${
            currentId
              ? "bg-emerald-700 hover:bg-emerald-600"
              : "bg-rose-700 hover:bg-rose-600"
          } transition-colors ease-in text-gray-50 px-4 rounded-r sm:w-fit w-full sm:py-0 py-2`}
        >
          {currentId ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}

export default TasksForm;
