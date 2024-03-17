import {createSlice} from '@reduxjs/toolkit';
import {getEpisode, getEpisodes} from '@services';
export const episode = createSlice({
  name: 'episode',
  initialState: {
    isLoading: true,
    error: {},
    episodes: {},
    episode: {},
  },
  reducers: {
    reseteEpisode: state => {
      state.isLoading = true;
      state.error = {};
      state.episodes = {};
      state.episode = {};
    },
  },
  extraReducers: builder => {
    builder.addCase(getEpisodes.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getEpisodes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.episodes = action.payload || {};
    });
    builder.addCase(getEpisodes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = {
        ...state.error,
        getEpisodes: action.error || action.payload,
      };
    });

    builder.addCase(getEpisode.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getEpisode.fulfilled, (state, action) => {
      state.isLoading = false;
      state.episode = action.payload || {};
    });
    builder.addCase(getEpisode.rejected, (state, action) => {
      state.isLoading = false;
      state.error = {
        ...state.error,
        getEpisode: action.error || action.payload,
      };
    });
  },
});
export const {reseteEpisode} = episode.actions;
export default episode.reducer;
