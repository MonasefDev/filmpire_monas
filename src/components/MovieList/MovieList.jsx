import React from 'react';
import { Movie } from '..';
import { Grid } from '@mui/material';

import useStyles from './styles';

const MovieList = ({ movies, numberOfMovies }) => {
  const classes = useStyles();
  const rendredMovies = movies
    .map((movie, i) => {
      return <Movie key={i} movie={movie} i={i} />;
    })
    .slice(0, numberOfMovies);
  return (
    <Grid container spacing={1} className={classes.moviesContainer}>
      {rendredMovies}
    </Grid>
  );
};

export default MovieList;
