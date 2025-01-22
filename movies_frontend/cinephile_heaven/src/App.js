import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD

import LogUp from './pages/Logup';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import GenrePage from './pages/GenrePage';
=======
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
>>>>>>> 248f88310de50a967f65244d5021f836c6d9d0c6

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="/login&signup" element={<LogUp />} />
        <Route path="/search/:query" element={<SearchResultsPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/genre/:genreId" element={<GenrePage />} />
=======
        <Route path="/search/:query" element={<SearchResultsPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
>>>>>>> 248f88310de50a967f65244d5021f836c6d9d0c6
      </Routes>
    </Router>
  );
};

export default App;
