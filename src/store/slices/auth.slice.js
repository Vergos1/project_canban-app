import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api.js';




export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user: null,
      error: null,
      isAuth: false,
      resetPassEmail: null,
      isLoading: false
   },
   reducers: {
      setUserAuth: (state, action) => {
         state.isAuth = action.payload;
         if (!action.payload) {
            state.user = null;
         }
      }
   },
   extraReducers: (builder) => {
      builder
      .addCase(authorizationThunk.pending, (state) => {
         state.isLoading = true;
         state.isAuth = localStorage.getItem('isAuth') === 'true';
      })
      .addCase(authorizationThunk.fulfilled, (state) => {
         state.isLoading = false;
         localStorage.setItem('isAuth', 'true');
      })
      .addCase(authorizationThunk.rejected, (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
         localStorage.setItem('isAuth', 'false');
      })
      .addCase(registrationThunk.pending, (state) => {
         state.isLoading = true;
      })
      .addCase(registrationThunk.fulfilled, (state) => {
         state.isLoading = false;
      })
      .addCase(registrationThunk.rejected, (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
      });
   }
});

export const registrationThunk = createAsyncThunk(
'auth/registration',
async (userData, thunkAPI) => {
   try {
      const response = await api.auth.registration(userData);
      return response.data;
   }
   catch (error) {
      if (!error.response) {
         console.error('Network error:', error);
      }
      else {
         console.error('Registration error:', error.response.data);
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
}
);

export const authorizationThunk = createAsyncThunk(
'auth/authorization',
async (userData, thunkAPI) => {
   try {
      const response = await api.auth.authorization(userData);
      console.log(response);
      if (response?.data) {
         response.data &&
         localStorage.setItem('TOKEN', `${response.data}`);
         await thunkAPI.dispatch(setUserAuth(localStorage.getItem('isAuth') === 'true'));
      }
      return response?.data;
   }
   catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
   }

}
);
export const {
   setUserAuth
} = authSlice.actions;
export default authSlice.reducer;