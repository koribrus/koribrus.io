import { createSlice } from '@reduxjs/toolkit';

// *  display state handles whether site is in desktop mode for conditional rendering based on screen size (mobile vs desktop). menuOpen was a previously used state to control mobile navbar.
const displaySlice = createSlice({
  name: 'display',
  initialState: {
    desktop: null,
    // menuOpen: false,
  },
  reducers: {
    setDesktop: (state, action) => {
      state.desktop = action.payload;
    },
    // setMenuOpen: (state) => {
    //   state.menuOpen = !state.menuOpen;
    // },
  },
});

export const { setDesktop } = displaySlice.actions;
export default displaySlice.reducer;
