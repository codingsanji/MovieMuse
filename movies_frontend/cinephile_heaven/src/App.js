import React from 'react';
import Movies from './components/Movies/movies';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Movie Reviews</h1>
      <Movies />
    </div>
  );
};

export default App;
