package com.example.api.resolvers.products;

import com.example.api.product.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@AllArgsConstructor
@Controller
public class DeleteProductMutation {
    private ProductRepository repository;
    @MutationMapping
    public boolean deleteProduct(@Argument Long id){
        try {
            this.repository.deleteById(id);
        }catch (Exception e){
            System.out.println(e);
            return  false;
        }
        return true;
    }
}
