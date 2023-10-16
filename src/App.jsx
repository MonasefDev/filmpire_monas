import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, MovieInfo, Movies, Navbar, Profile } from './components/index';

import useStyles from './styles';
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/approved" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInfo />}>
            Movie Information
          </Route>
          <Route path="/actors/:id" element={<Actors />}>
            Actors
          </Route>
          <Route path="/profile/:id" element={<Profile />}>
            Profile
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
