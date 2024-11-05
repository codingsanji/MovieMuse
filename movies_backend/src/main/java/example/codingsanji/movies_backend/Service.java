package example.codingsanji.movies_backend;

<<<<<<< HEAD
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
=======
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
>>>>>>> 7ed6d6ff396020838580b9e3941feed541df43bd

@org.springframework.stereotype.Service
/*Database Access Methods*/
public class Service {
    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> allMovies(){
        return movieRepository.findAll();
    }
<<<<<<< HEAD

    public Optional<Movie> singleMovie(ObjectId id){ /*Optional since if there is no such id itll import null*/
        return movieRepository.findById(id);
    }
=======
>>>>>>> 7ed6d6ff396020838580b9e3941feed541df43bd
}
