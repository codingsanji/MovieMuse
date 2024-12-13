import React from "react";

const home = ({ movies }) => {
  return (
    <div>
      <h1>Movies</h1>
      <div className="movies-container" style={{ display: "grid", gap: "1rem" }}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.poster}
                alt={`${movie.title} poster`}
                style={{ width: "150px", borderRadius: "8px" }}
              />
              <h2>{movie.title}</h2>
              <p>{movie.releaseDate}</p>
            </div>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
    </div>
  );
};

export default home;
