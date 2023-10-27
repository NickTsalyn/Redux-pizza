import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://pizza-project-backend.onrender.com';

export const fetchCategories = createAsyncThunk('categories/getCategories', async () => {
  const response = await axios.get('/categories');
  return response.data;
});


export const filterSlice = createSlice({
  name: 'category',
  initialState: {
    filterItems: []
  },

  reducers: {
    

  },
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      state.filterItems = [];
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.filterItems = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.filterItems = [];
    },
  },
});


export default filterSlice.reducer;