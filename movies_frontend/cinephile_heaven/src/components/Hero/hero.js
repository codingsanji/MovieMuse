import React, { useEffect, useState } from "react";
import './hero.css';
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

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
        </div>
    )
}

export default hero;
