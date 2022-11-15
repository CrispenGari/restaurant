package com.example.api.resolvers.products.inputs;


import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ProductInput {
    public String imageURL;
    public String name;
    public String productName;
    public Double productCurrentPrice;
    public Boolean onSpecial;
    public Double previousPrice;
}
