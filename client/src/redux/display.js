import { createSlice } from '@reduxjs/toolkit';

const displaySlice = createSlice({
  name: 'display',
  initialState: {
    desktop: true,
    menuOpen: false,
  },
  reducers: {
    setDesktop: (state, action) => {
      state.desktop = action.payload;
    },
    setMenuOpen: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { setDesktop, setMenuOpen } = displaySlice.actions;
export default displaySlice.reducer;
