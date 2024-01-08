import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api.js';



export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    isAuth: false,
    resetPassEmail: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    }).addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
    }).addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.auth.registration(userData);
      return response.data;
    } catch (error) {
      if (!error.response) {
        console.error('Network error:', error);
      } else {
        console.error('Registration error:', error.response.data);
        return rejectWithValue(error.response.data);
      }
    }
  },
);
export default authSlice.reducer;