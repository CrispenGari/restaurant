package com.example.api.resolvers.products;

import com.example.api.product.Product;
import com.example.api.product.ProductRepository;
import com.example.api.resolvers.products.inputs.ProductInput;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@AllArgsConstructor
@Controller
public class EditProductMutation {
    private ProductRepository repository;

    @MutationMapping
    public boolean updateProduct(@Argument ProductInput input){
        try {
            Product product = new Product();
            product.setProductName(input.getProductName());
            product.setProductCurrentPrice(input.getProductCurrentPrice());
            product.setImageURL(input.getImageURL());
            product.setPreviousPrice(input.getPreviousPrice());
            product.setOnSpecial(input.getOnSpecial());
            this.repository.save(product);
        }catch (Exception e){
            System.out.println(e);
            return  false;
        }
        return true;
    }
}
