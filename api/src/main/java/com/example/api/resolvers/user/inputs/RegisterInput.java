package com.example.api.resolvers.user.inputs;

import com.example.api.user.RoleType;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class RegisterInput {
    public String email;
    public RoleType role;
    public String password;
}
