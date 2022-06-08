import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projects';
import resumeReducer from './resume';

export default configureStore({
  reducer: {
    projects: projectReducer,
    resume: resumeReducer,
  },
});
