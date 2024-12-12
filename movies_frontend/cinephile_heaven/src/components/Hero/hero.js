<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 5c4cb7fe03ff652749d285c6b7e91f6b0ee61395
import './hero.css';
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

<<<<<<< HEAD
const hero = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch movies from the backend
        const fetchMovies = async () => {
            try {
                const response = await fetch("https://0fa9-171-250-164-127.ngrok-free.app/api/movies");
                const data = await response.json();
                console.log(data);
                setMovies(data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return(
        <div>
            <Carousel>
                {
                    movies.map((movies) =>{
                        return(
                            <Paper key={movies.id}>
                                <div className="card-container">
                                    <div className="movie-card">
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={movies.poster} alt="" />
                                            </div>
                                            <div className="movie-title">
                                                <h4> {movies.title} </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
=======
const hero = ({movies}) => {
    return(
        <div>
            <Carousal>
                {
                    movies.map((movie) => {
                        return(
                            <Paper key={movie.imdbId}>
                        <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    <div className="movie-title">
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                        )
                    })
                }
            </Carousal>
>>>>>>> 5c4cb7fe03ff652749d285c6b7e91f6b0ee61395
        </div>
    )
}

<<<<<<< HEAD
export default hero;
=======
export default hero
>>>>>>> 5c4cb7fe03ff652749d285c6b7e91f6b0ee61395
