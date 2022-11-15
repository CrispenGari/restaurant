package com.example.api.resolvers.user;
import com.example.api.user.User;
import com.example.api.user.UserRepository;
import com.example.api.resolvers.user.inputs.*;
import com.example.api.resolvers.user.objects.*;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

import java.util.Optional;

@AllArgsConstructor
@Controller
public class LoginMutation {
    private UserRepository repository;
    @MutationMapping
    AuthResponse login(@Argument LoginInput input){
        try{
            Optional<User> user = this.repository.findByEmail(input.email.toLowerCase());
            if(user.isEmpty()){
                return AuthResponse
                        .builder()
                        .error(
                                ErrorType
                                        .builder()
                                        .field("password")
                                        .message("The email address is invalid.")
                                        .build()
                        )
                        .build();
            }
            if(!user.get().getPassword().equals(input.getPassword())){
                return AuthResponse
                        .builder()
                        .error(
                            ErrorType
                                .builder()
                                .field("password")
                                .message("The password is invalid")
                                .build()
                        )
                        .build();
            }
            return AuthResponse.builder().user(
                    UserObjectType.builder()
                            .email(user.get().getEmail())
                            .id(user.get().getId())
                            .role(user.get().getRole())
                            .build()
            ).build();
        }catch (Exception e){
            return AuthResponse
                    .builder()
                    .error(ErrorType
                            .builder()
                            .field("email")
                            .message("Something went wrong on the server.")
                            .build()
                    )
                    .build();
        }
    }
}
