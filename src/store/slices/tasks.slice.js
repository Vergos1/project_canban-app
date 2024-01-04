import { createSlice } from '@reduxjs/toolkit';



export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    createTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { createTask } = tasksSlice.actions;
export default tasksSlice.reducer;