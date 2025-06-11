import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDepartments = createAsyncThunk(
  'departments/fetchDepartments',
  async () => {
    const response = await fetch('/departments.json');
    const data = await response.json();
    return data;
  }
);

const departmentsSlice = createSlice({
  name: 'departments',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {
    addDepartment: (state, action) => {
      state.data.push(action.payload);
    },
    deleteDepartment: (state, action) => {
      state.data = state.data.filter(dep => dep.id !== action.payload);
    },
    updateDepartment: (state, action) => {
      state.data = state.data.map(dep =>
        dep.id === action.payload.id ? action.payload : dep
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const {
  addDepartment,
  deleteDepartment,
  updateDepartment
} = departmentsSlice.actions;

export default departmentsSlice.reducer;
