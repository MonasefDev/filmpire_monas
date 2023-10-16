import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from './apis/TMDB';
import {
  selectGenre,
  searchMovie,
  genreReducer,
} from './slices/genreOrCategory';
import { userReducer, setUser } from './slices/auth';
export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    genre: genreReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(tmdbApi.middleware);
  },
});

export { selectGenre, searchMovie, setUser };
