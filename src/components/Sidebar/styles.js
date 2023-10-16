import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: '70%',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImages: {
    filter: theme.palette.mode === 'light' || 'invert(1)',
    width: '30px',
    marginLeft: '5px',
  },
  bigText: {
    color: 'primary',
    fontSize: 30,
  },
}));
