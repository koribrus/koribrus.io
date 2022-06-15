import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projects';
import resumeReducer from './resume';
import booksReducer from './books';
import shelfReducer from './shelves';
import slidesReducer from './slides';
import visibilityReducer from './visibility';

export default configureStore({
  reducer: {
    projects: projectReducer,
    resume: resumeReducer,
    books: booksReducer,
    shelves: shelfReducer,
    slides: slidesReducer,
    visibility: visibilityReducer,
  },
});
