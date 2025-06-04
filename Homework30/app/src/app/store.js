import { configureStore } from '@reduxjs/toolkit';
import swapiReducer from '../features/swapi/swapiSlice';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
    todo: todoReducer,
  },
});