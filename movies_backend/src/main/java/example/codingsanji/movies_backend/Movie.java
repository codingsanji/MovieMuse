package example.codingsanji.movies_backend;

import org.springframework.data.mongodb.core.mapping.Document;

/*Annotate this class as a document to let framework note that this class sheet presents each document in the movies collection*/
@Document(collection = "movies")
public class Movie {
}
