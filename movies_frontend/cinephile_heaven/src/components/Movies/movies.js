import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reviews from '../Reviews/reviews';

const movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/movies')  // Adjust URL based on your server configuration
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the movies!", error);
      });
  }, []);

  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.imdbId} className="movie-card">
            <h2>{movie.title}</h2>
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <p>Release Date: {movie.releaseDate}</p>
            <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
              Watch Trailer
            </a>
            <Reviews imdbId={movie.imdbId} />
          </div>
        ))
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
};

export default movies;
