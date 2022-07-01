import { createSlice } from '@reduxjs/toolkit';

const displaySlice = createSlice({
  name: 'display',
  initialState: {
    desktop: true,
  },
  reducers: {
    setDesktop: (state, action) => {
      // state.desktop = !state.desktop;
      state.desktop = action.payload;
    },
  },
});

export const { setDesktop } = displaySlice.actions;
export default displaySlice.reducer;
