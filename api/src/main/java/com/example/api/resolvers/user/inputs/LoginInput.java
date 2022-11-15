package com.example.api.resolvers.user.inputs;


import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class LoginInput {
    public String email;
    public String password;
}
