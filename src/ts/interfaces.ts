export interface Task {
  id: number;
  name: string;
}

export type Tasks = Task[];

export type CurrentId = number;

export interface HandleTaskChangePayload {
  value: string;
}

export interface SetUpdateStatesPayload {
  task: Task;
  currentId: CurrentId;
}

export interface InitialState {
  task: Task;
  currentId: CurrentId;
}
