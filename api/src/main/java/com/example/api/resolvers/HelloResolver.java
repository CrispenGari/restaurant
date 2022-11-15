package com.example.api.resolvers;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;

import org.springframework.stereotype.Controller;
@Controller
public class HelloResolver {
    @QueryMapping
    public String hello(@Argument String name) {
        return "Hello, %s!".formatted(name.length() > 0 ? name: "");
    }

    @MutationMapping
    public String helloWorld(@Argument String name){
        return "Hello, %s!".formatted(name.length() > 0 ? name: "");
    }
}