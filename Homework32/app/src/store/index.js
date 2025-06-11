import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './employeesSlice';
import departmentsReducer from './departmentsSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    departments: departmentsReducer
  }
});