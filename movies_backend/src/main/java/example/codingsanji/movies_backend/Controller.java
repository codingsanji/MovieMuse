package example.codingsanji.movies_backend;

<<<<<<< HEAD
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController /*marks this class as a controller where each method returns a response body, effectively making it a
REST API. When Spring Boot scans this class, it registers it as a web controller that can handle HTTP requests*/

@RequestMapping("/api/movies") /*used to define a base URL for a controller or method*/
/* check http://localhost:8080/api/movies */
public class Controller {
    @Autowired
    private Service movieService;

=======
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
>>>>>>> 7ed6d6ff396020838580b9e3941feed541df43bd
    @GetMapping /*method will be called when a GET request is made to the base URL*/
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<List<Movie>>(movieService.allMovies() , HttpStatus.OK);
    }

<<<<<<< HEAD
    /* check http://localhost:8080/api/movies/{ObjectId} */
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable ObjectId id){
        /*PathVariable lets framework know that we will be passing the info we get from mapping as path variable*/
        return new ResponseEntity<Optional<Movie>>(movieService.singleMovie(id) , HttpStatus.OK);
    }


=======
>>>>>>> 7ed6d6ff396020838580b9e3941feed541df43bd
}
