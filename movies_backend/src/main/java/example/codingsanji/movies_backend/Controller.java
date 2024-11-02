package example.codingsanji.movies_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController /*marks this class as a controller where each method returns a response body, effectively making it a
REST API. When Spring Boot scans this class, it registers it as a web controller that can handle HTTP requests*/
@RequestMapping("/api/v1/movies") /*used to define a base URL for a controller or method*/
public class Controller {
    @Autowired
    private Service movieService;
    @GetMapping /*method will be called when a GET request is made to the base URL*/
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<List<Movie>>(movieService.allMovies() , HttpStatus.OK);
    }

}
