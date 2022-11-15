package com.example.api.resolvers.products.objects;


import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class ProductObjectType {
    public Long id;
    public String imageURL;
    public String productName;
    public Double productCurrentPrice;
    public Boolean onSpecial;
    public Double  previousPrice;
}
