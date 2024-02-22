import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
    id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TIinitialState = {
  todos: TTodo[];
};

const initialState: TIinitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
