import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    загрузить(state, action) {
      state.todos = action.payload;
    },
    добавить(state, action) {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    удалить(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    отметить(state, action) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    редактировать(state, action) {
      const { id, newText } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) todo.text = newText;
    },
    очиститьЗавершённые(state) {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
  },
});

export const {
  загрузить,
  добавить,
  удалить,
  отметить,
  редактировать,
  очиститьЗавершённые,
} = todoSlice.actions;

export default todoSlice.reducer;
