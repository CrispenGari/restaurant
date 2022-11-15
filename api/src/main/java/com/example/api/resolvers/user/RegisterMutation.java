package com.example.api.resolvers.user;


import com.example.api.RegExpression;
import com.example.api.user.User;
import com.example.api.user.UserRepository;
import com.example.api.resolvers.user.inputs.RegisterInput;
import com.example.api.resolvers.user.objects.AuthResponse;
import com.example.api.resolvers.user.objects.ErrorType;
import com.example.api.resolvers.user.objects.UserObjectType;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;
import javax.servlet.http.Cookie;


@AllArgsConstructor
@Controller
public class RegisterMutation {
//    Argon2PasswordEncoder
    private static final RegExpression regex = new RegExpression();
    private UserRepository repository;
    @MutationMapping
    AuthResponse register(@Argument RegisterInput input){
        if(!regex.isValidEmail(input.getEmail())){
            ErrorType error = ErrorType.builder()
                    .field("email")
                    .message("Invalid email address")
                    .build();
            return AuthResponse.builder()
                    .error(error)
                    .build();
        }
        if(!regex.isValidPassword(input.getPassword())){
            ErrorType error = ErrorType.builder()
                    .field("password")
                    .message("password must contain at least 8 characters with at least one letter and one number")
                    .build();
            return AuthResponse.builder()
                    .error(error)
                    .build();
        }


        try{
            User _user = new User();
            _user.setEmail(input.getEmail().toLowerCase());
            _user.setRole(input.getRole());
            _user.setPassword(input.getPassword());
            System.out.println(_user);
            User user = this.repository.save(_user);
            // setting the cookies

            // https://reflectoring.io/spring-boot-cookies/
            Cookie cookie = new Cookie("uid", "id");
            cookie.setMaxAge(1000*60*60*24);
            cookie.setHttpOnly(true);
            return AuthResponse.builder().user(
                    UserObjectType.builder()
                            .email(user.getEmail())
                            .id(user.getId())
                            .role(user.getRole())
                            .build()
            ).build();
        }catch (Exception e){
            return AuthResponse
                    .builder()
                    .error(ErrorType
                        .builder()
                        .field("email")
                        .message("The email address is already taken.")
                        .build()
                    )
                    .build();
        }
    }
}
