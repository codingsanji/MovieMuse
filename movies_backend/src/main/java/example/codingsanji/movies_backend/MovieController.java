package example.codingsanji.movies_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private TMDBService tmdbService;

    @Autowired
    private ReviewService reviewService;

    // Fetch movie details from TMDB
    @GetMapping("/{imdbId}")
    public ResponseEntity<Movie> getMovieDetails(@PathVariable String imdbId) {
        Movie movie = tmdbService.fetchMovieDetails(imdbId);
        return ResponseEntity.ok(movie);
    }

    // Add a review for a movie
    @PostMapping("/{imdbId}/reviews")
    public ResponseEntity<Review> addReview(@PathVariable String imdbId, @RequestBody Review review) {
        Review createdReview = reviewService.createReview(review.getBody(), imdbId);
        return ResponseEntity.ok(createdReview);
    }

    // Fetch all reviews for a specific movie
    @GetMapping("/{imdbId}/reviews")
    public ResponseEntity<List<Review>> getReviews(@PathVariable String imdbId) {
        List<Review> reviews = reviewService.getReviewsByMovieId(imdbId);
        return ResponseEntity.ok(reviews);
    }

    // Fetch movie recommendations based on genre
    @GetMapping("/recommendations/{genreId}")
    public ResponseEntity<List<Movie>> getRecommendations(@PathVariable String genreId) {
        List<Movie> recommendations = tmdbService.fetchRecommendationsByGenre(genreId);
        return ResponseEntity.ok(recommendations);
    }
}
