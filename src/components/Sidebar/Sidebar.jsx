import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import genreIcons from '../../assets/genres';
import { useGetGenresQuery } from '../../store/apis/TMDB';
import { selectGenre } from '../../store';

const redLogo =
  'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo =
  'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

function Sidebar({ setMobileOpen }) {
  const { data, isFetching } = useGetGenresQuery();
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  if (isFetching)
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Filmpire Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem
              button
              onClick={() => {
                dispatch(selectGenre(value));
              }}
            >
              <ListItemIcon>
                <img
                  className={classes.genreImages}
                  alt={label}
                  src={genreIcons[label.toLowerCase()]}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {data.genres.map(({ name, id }) => (
          <Link key={id} className={classes.links} to="/">
            <ListItem
              button
              onClick={() => {
                dispatch(selectGenre(id));
              }}
            >
              <ListItemIcon>
                <img
                  className={classes.genreImages}
                  alt={name}
                  src={genreIcons[name.toLowerCase()]}
                />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
