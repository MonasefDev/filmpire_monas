import { makeStyles } from '@mui/styles';

//! we put () in fn to return imediately an object
export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
    backgroundColor: 'red',
  },
  myclass: {
    width: '150px',
    height: '150px',
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
