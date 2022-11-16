package com.example.api.resolvers.products;


import com.example.api.product.ProductRepository;
import com.example.api.resolvers.products.objects.ProductObjectType;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import java.util.List;


@AllArgsConstructor
@Controller
public class ProductsQuery {
    private ProductRepository repository;
    @QueryMapping
    public List<ProductObjectType> products(){
        return this.repository.findAll().stream().map(product -> ProductObjectType
                .builder()
                .id(product.getId())
                .imageURL(product.getImageURL())
                .productName(product.getProductName())
                .previousPrice(product.getPreviousPrice())
                .productCurrentPrice(product.getProductCurrentPrice())
                .onSpecial(product.isOnSpecial())
                .build()).toList();
    }
}
