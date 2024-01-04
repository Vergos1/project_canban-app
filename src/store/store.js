import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './slices/tasks.slice';

// const reducers = combineReducers([reducers]);
export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
  devTools: true,
});