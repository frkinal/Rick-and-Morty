import {createSlice} from '@reduxjs/toolkit';
import {getLocation} from '@services';
export const location = createSlice({
  name: 'location',
  initialState: {
    isLoading: true,
    error: {},
    location: {},
  },
  reducers: {
    reseteLocation: state => {
      state.isLoading = true;
      state.error = {};
      state.location = {};
    },
  },
  extraReducers: builder => {
    builder.addCase(getLocation.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getLocation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.location = action.payload || {};
    });
    builder.addCase(getLocation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = {
        ...state.error,
        getLocation: action.error || action.payload,
      };
    });
  },
});
export const {reseteLocation} = location.actions;
export default location.reducer;
