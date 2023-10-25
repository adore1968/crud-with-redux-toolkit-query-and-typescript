import { CurrentId, Task, Tasks } from "@/ts/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  tagTypes: ["tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query<Tasks, null>({
      query: () => "tasks",
      providesTags: ["tasks"],
    }),
    getTask: builder.query<Task, CurrentId>({
      query: (id) => `tasks/${id}`,
      providesTags: ["tasks"],
    }),
    createTask: builder.mutation<null, Task>({
      query: (newTask) => ({
        url: "tasks",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["tasks"],
    }),
    updateTask: builder.mutation<null, Task>({
      query: (newTask) => ({
        url: `tasks/${newTask.id}`,
        method: "PUT",
        body: newTask,
      }),
      invalidatesTags: ["tasks"],
    }),
    deleteTask: builder.mutation<null, CurrentId>({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
export default tasksApi;
