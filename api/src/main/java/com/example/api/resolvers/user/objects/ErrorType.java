package com.example.api.resolvers.user.objects;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ErrorType {
    public String field;
    public  String message;
}
