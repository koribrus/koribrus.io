import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosResume from '../apis/resume';

// * asyncThunk for data fetch
export const fetchResume = createAsyncThunk('redux/fetchResume', async () => {
  try {
    const response = await axiosResume.get('resume');
    return response.data.data.resume;
  } catch (err) {
    return err.message;
  }
});

// * resume slice
export const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    resume: {},
    loading: true,
    status: 'idle',
    error: null,
  },
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchResume.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchResume.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.resume = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchResume.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default resumeSlice.reducer;
