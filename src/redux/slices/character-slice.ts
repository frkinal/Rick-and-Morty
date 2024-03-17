import {createSlice} from '@reduxjs/toolkit';
import {getCharacter, getCharacters} from '@services';
export const character = createSlice({
  name: 'character',
  initialState: {
    isLoading: {},
    error: {},
    character: [],
    characters: [],
    favoriteCharacters: [],
  },
  reducers: {
    resetCharacter: state => {
      state.isLoading = {};
      state.error = {};
      state.character = [];
      state.characters = [];
      state.favoriteCharacters = [];
    },
    addFavoriteCharacter: (state, action) => {
      state.favoriteCharacters = action.payload || [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getCharacters.pending, state => {
      state.isLoading = {...state.isLoading, getCharacters: true};
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, getCharacters: false};
      state.characters = action.payload || [];
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, getCharacters: false};
      state.error = {
        ...state.error,
        getCharacters: action.error || action.payload,
      };
    });

    builder.addCase(getCharacter.pending, state => {
      state.isLoading = {...state.isLoading, getCharacter: true};
    });
    builder.addCase(getCharacter.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, getCharacter: false};
      state.character = [...state.character, action.payload] || [];
    });
    builder.addCase(getCharacter.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, getCharacter: false};
      state.error = {
        ...state.error,
        getCharacter: action.error || action.payload,
      };
    });
  },
});
export const {resetCharacter, addFavoriteCharacter} = character.actions;
export default character.reducer;
