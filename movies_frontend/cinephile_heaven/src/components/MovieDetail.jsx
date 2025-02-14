import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = ({ movie, trailer }) => {
  const { id } = useParams();
  const { title, overview, poster_path, release_date, genres } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const trailerUrl = trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;

  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const userEmail = localStorage.getItem("userEmail") || "guest@example.com";

  useEffect(() => {
    fetchReviews();
  }, [id]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/reviews/movie/${id}`);
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const submitReview = async () => {
    if (!reviewText || rating === 0) {
      alert("Please provide a review and select a rating.");
      return;
    }

    try {
      const reviewData = {
        reviewBody: reviewText,
        imdbId: id,
        rating, // Send rating value to backend
      };

      const response = await axios.post("http://localhost:8080/api/reviews", reviewData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Review submitted:", response.data);

      setReviews([...reviews, response.data]);
      setReviewText("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center">
      <img src={posterUrl} alt={title} className="w-full lg:w-1/3 rounded-lg shadow-lg mb-4 lg:mb-0 lg:mr-8" />
      <div className="lg:w-2/3">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 mb-2"><strong>Released:</strong> {release_date}</p>
        <p className="text-gray-600 mb-4">
          <strong>Genres:</strong>
          {genres.map((genre) => (
            <Link key={genre.id} to={`/genre/${genre.id}`} className="text-blue-500 hover:underline mr-2">
              {genre.name}
            </Link>
          ))}
        </p>
        <p className="text-lg mb-6">{overview}</p>

        {trailerUrl && (
          <div className="relative aspect-w-16 aspect-h-9">
            <iframe
              src={trailerUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="movie trailer"
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}

        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
          <textarea
            className="w-full p-2 border rounded mb-2"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>

          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-2xl ${
                  star <= rating ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={submitReview}>
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
