import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload });
    },
    clearTodos: (state) => {
      state.items = [];
    },
  },
});

export const { addTodo, clearTodos } = todoSlice.actions;
export default todoSlice.reducer;
