package com.example.api.resolvers.user.objects;
import lombok.*;

@Value
@Builder
public class AuthResponse {
    public UserObjectType user;
    public  ErrorType error;
}
