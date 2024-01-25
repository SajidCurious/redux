import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  initialState: 0,
  name: "todo",
  reducers: {},
});

export const { addTodo, removeTodo } = todoSlice.actions;
