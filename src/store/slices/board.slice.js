import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api.js';




export const boardSlice = createSlice({
   name: 'board',
   initialState: [],
   reducers: {},
   extraReducers: (builder) => {
      builder
      .addCase(getProjectsThunk.fulfilled, (state, action) => {
         return action.payload;
      }).addCase(getProjectsThunk.rejected, (state, action) => {
         return action.payload;
      }).addCase(getProjectsThunk.pending, (state) => {
         return state;
      });
   }
});

export const getProjectsThunk = createAsyncThunk(
'board/getProjects',
async (token = localStorage.getItem('TOKEN'), thunkAPI) => {
   try {
      const response = await api.board.getProjects(token);
      return response.data;
   }
   catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
   }
}
);

export default boardSlice.reducer;