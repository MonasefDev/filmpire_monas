import { Button, Typography } from '@mui/material';
import React from 'react';
import useStyles from './styles';

const Paginations = ({ currentPage, setPage, totalPages }) => {
  const classes = useStyles();

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button
        onClick={handlePrev}
        variant="contained"
        className={classes.button}
        color="primary"
        type="button"
      >
        Prev
      </Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        onClick={handleNext}
        variant="contained"
        className={classes.button}
        color="primary"
        type="button"
      >
        Next
      </Button>
    </div>
  );
};

export default Paginations;
