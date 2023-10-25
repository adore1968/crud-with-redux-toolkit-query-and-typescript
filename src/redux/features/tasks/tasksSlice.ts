import {
  HandleTaskChangePayload,
  InitialState,
  SetUpdateStatesPayload,
} from "@/ts/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const taskInitialState = {
  id: 0,
  name: "",
};

const initialState: InitialState = {
  task: taskInitialState,
  currentId: 0,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    handleTaskChange: (
      state,
      action: PayloadAction<HandleTaskChangePayload>
    ) => {
      const { value } = action.payload;
      return { ...state, task: { ...state.task, name: value } };
    },
    resetStates: (state) => {
      return { ...state, task: taskInitialState, currentId: 0 };
    },
    setUpdateStates: (state, action: PayloadAction<SetUpdateStatesPayload>) => {
      const { task, currentId } = action.payload;
      return { ...state, task, currentId };
    },
  },
});

export const { handleTaskChange, resetStates, setUpdateStates } =
  tasksSlice.actions;
export default tasksSlice.reducer;
