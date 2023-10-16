import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => {
    return {
      //*get Genres
      getGenres: builder.query({
        query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
      }),
      //*get Movies
      getMovies: builder.query({
        query: ({ genreName, page, searchTerm }) => {
          //*get Movie by Search term
          if (searchTerm) {
            return `/search/movie?query=${searchTerm}&page=${page}&api_key=${tmdbApiKey}`;
          }
          //* Get Movies by Category
          if (genreName && typeof genreName === 'string') {
            return `/movie/${genreName}?page=${page}&api_key=${tmdbApiKey}`;
          }

          //* Get Movies by Genre
          if (genreName && typeof genreName === 'number') {
            return `discover/movie?with_genres=${genreName}&page=${page}&api_key=${tmdbApiKey}`;
          }

          //* Get popular movies by default
          return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
        },
      }),
      //* Get movie by Id
      getMovie: builder.query({
        query: (id) =>
          `movie/${id}?api_key=${tmdbApiKey}&&append_to_response=videos,credits`,
      }),
      //* Get recommendeds movies
      getRecomendedsMovis: builder.query({
        query: ({ movie_id }) =>
          `movie/${movie_id}/recommendations?api_key=${tmdbApiKey}`,
      }),
      getActors: builder.query({
        query: (credit_id) => `person/${credit_id}?api_key=${tmdbApiKey}`,
      }),
      getActorsMovies: builder.query({
        query: (actor_id) =>
          `person/${actor_id}/movie_credits?api_key=${tmdbApiKey}`,
      }),
    };
  },
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieQuery,
  useGetRecomendedsMovisQuery,
  useGetActorsQuery,
  useGetActorsMoviesQuery,
} = tmdbApi;

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
