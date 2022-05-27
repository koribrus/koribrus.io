import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projects';

export default configureStore({
  reducer: {
    projects: projectReducer,
  },
});
