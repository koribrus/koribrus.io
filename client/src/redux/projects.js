import { createSlice } from '@reduxjs/toolkit';

// * state holding projects pulled from api call to node server for rendering

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
