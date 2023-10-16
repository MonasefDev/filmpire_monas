import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategorySlice = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreName: '',
    searchTerm: '',
    page: 1,
  },
  reducers: {
    selectGenre: (state, action) => {
      state.genreName = action.payload;
      state.searchTerm = '';
    },
    searchMovie: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { selectGenre, searchMovie } = genreOrCategorySlice.actions;
export const genreReducer = genreOrCategorySlice.reducer;
