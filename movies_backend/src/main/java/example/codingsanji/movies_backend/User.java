package example.codingsanji.movies_backend;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "users")
@Data /*takes care of all getters and setters*/
@AllArgsConstructor /*takes all below private fields as arguments*/
@NoArgsConstructor /*takes no parameters*/
public class User {
    @Id       /*to note that below properties are unique identifiers for the movies */
    private ObjectId id;
    
    @Indexed(unique = true)
    private String username;
    private String password;
}
