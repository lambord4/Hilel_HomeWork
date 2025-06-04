import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPeople = createAsyncThunk('swapi/fetchPeople', async () => {
  const response = await fetch('https://swapi.py4e.com/api/people/');
  const data = await response.json();
  return data.results;
});

const swapiSlice = createSlice({
  name: 'swapi',
  initialState: {
    people: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.loading = false;
        state.people = action.payload;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default swapiSlice.reducer;
