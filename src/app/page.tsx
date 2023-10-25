"use client";
import TaskForm from "@/components/TaskForm";
import TasksList from "@/components/TasksList";
import { useGetTasksQuery } from "@/redux/services/tasksApi";

function HomePage() {
  const { isLoading, isSuccess, data } = useGetTasksQuery(null);

  if (isLoading) {
    return (
      <div className="text-center text-2xl sm:text-3xl font-bold flex justify-center items-center h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main className="sm:px-0 px-5">
      <section className="container mx-auto flex justify-center items-center h-screen">
        <div className="bg-slate-50 text-slate-950 flex-auto max-w-2xl rounded">
          <TaskForm />
          {isSuccess && <TasksList tasks={data} />}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
