import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронный thunk для загрузки JSON
export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    const response = await fetch('/employees.json');
    const data = await response.json();
    return data;
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    data: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null
  },
  reducers: {
    addEmployee: (state, action) => {
      state.data.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      state.data = state.data.filter(emp => emp.id !== action.payload);
    },
    updateEmployee: (state, action) => {
      state.data = state.data.map(emp =>
        emp.id === action.payload.id ? action.payload : emp
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addEmployee, deleteEmployee, updateEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;

