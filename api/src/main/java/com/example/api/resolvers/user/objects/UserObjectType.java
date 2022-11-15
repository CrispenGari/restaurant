package com.example.api.resolvers.user.objects;

import com.example.api.user.RoleType;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class UserObjectType {
    String email;
    RoleType role;
    Long id;
}
