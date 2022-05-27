import { createSlice } from '@reduxjs/toolkit';

// const initialState = { projectsTest: ['initial state'] };

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: { projects: [] },
  reducers: {
    load: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { load } = projectsSlice.actions;

export default projectsSlice.reducer;
