import { createSlice } from '@reduxjs/toolkit';

// * state for dropdown menu in 50 apps

const dropdownSlice = createSlice({
  name: 'menu',
  initialState: {
    menuOpen: false,
  },
  reducers: {
    open: (state) => {
      state.menuOpen = true;
    },
    close: (state) => {
      state.menuOpen = false;
    },
  },
});

export const { open, close } = dropdownSlice.actions;
export default dropdownSlice.reducer;
