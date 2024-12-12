package example.codingsanji.movies_backend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//inspect all requests using http://127.0.0.1:4040/inspect/http

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Applies to all endpoints
                .allowedOrigins(
                        "http://localhost:3000",  // React dev server
<<<<<<< HEAD
                        "https://0fa9-171-250-164-127.ngrok-free.app" // Ngrok URL gotten from running ngrok.exe http 8080
=======
                        "https://2ed3-171-250-165-104.ngrok-free.app" // Ngrok URL
>>>>>>> 5c4cb7fe03ff652749d285c6b7e91f6b0ee61395
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allow these methods
                .allowedHeaders("*") // Allow all headers
                .allowCredentials(true); // Support credentials (e.g., cookies, authorization headers)
    }
}