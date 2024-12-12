import React, { useState, useEffect } from 'react';
import axios from 'axios';

const reviews = ({ imdbId }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewBody, setReviewBody] = useState("");

  // Fetch reviews for the specific movie
  useEffect(() => {
    axios.get(`http://localhost:8080/api/reviews/movie/${imdbId}`)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the reviews!", error);
      });
  }, [imdbId]);

  // Handle new review submission
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/api/reviews', {
      reviewBody,
      imdbId
    })
    .then(response => {
      setReviews([...reviews, response.data]);  // Add new review to the list
      setReviewBody('');
    })
    .catch(error => {
      console.error("There was an error submitting the review!", error);
    });
  };

  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="review">
            <p>{review.body}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet. Be the first to review!</p>
      )}

      {/* Form to submit a new review */}
      <form onSubmit={handleSubmit} className="review-form">
        <textarea
          value={reviewBody}
          onChange={(e) => setReviewBody(e.target.value)}
          placeholder="Write your review..."
          rows="4"
          cols="50"
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default reviews;
