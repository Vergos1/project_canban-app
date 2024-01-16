import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth.slice';
import tasksSlice from './slices/tasks.slice';
import boardSlice from './slices/board.slice';




export const store = configureStore({
   reducer: {
      tasks: tasksSlice,
      auth: authSlice,
      board: boardSlice
   },
   devTools: true
});