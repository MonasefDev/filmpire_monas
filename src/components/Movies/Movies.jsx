import React, { useState } from 'react';

import { useGetMoviesQuery } from '../../store/apis/TMDB';
import { MovieList, Paginations } from '..';
import { useSelector } from 'react-redux';
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from '@mui/material';

const Movies = () => {
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 16 : 18;
  const [page, setPage] = useState(1);
  const [currentGenre, setCurrrentGenre] = useState('');
  const { genreName, searchTerm } = useSelector((state) => state.genre);
  const { data, error, isFetching } = useGetMoviesQuery({
    genreName,
    page,
    searchTerm,
  });
  if (currentGenre !== genreName) {
    setPage(1);
    setCurrrentGenre(genreName);
  }
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please searh for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured.';
  return (
    <div>
      <MovieList movies={data.results} numberOfMovies={numberOfMovies} />
      <Paginations
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default Movies;
