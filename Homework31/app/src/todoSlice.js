import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    load(state, action) {
      state.todos = action.payload;
    },
    add(state, action) {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    remove(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggle(state, action) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    edit(state, action) {
      const { id, newText } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) todo.text = newText;
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
  },
});

export const {
  load,
  add,
  remove,
  toggle,
  edit,
  clearCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
