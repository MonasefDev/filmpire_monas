import { makeStyles } from '@mui/styles';

//! we put () in fn to return imediately an object
export default makeStyles((theme) => ({
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
  },
}));
