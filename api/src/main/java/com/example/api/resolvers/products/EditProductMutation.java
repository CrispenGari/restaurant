package com.example.api.resolvers.products;

import com.example.api.product.Product;
import com.example.api.product.ProductRepository;
import com.example.api.resolvers.products.inputs.ProductInput;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

import java.util.Optional;

@AllArgsConstructor
@Controller
public class EditProductMutation {
    private ProductRepository repository;

    @MutationMapping
    public boolean updateProduct(@Argument ProductInput input, @Argument Long id){
        try {
            Optional<Product> product = this.repository.findById(id);
            if(product.isEmpty()){
                return  false;
            }
            Product _product = product.get();

            _product.setProductName(input.getProductName());
            _product.setProductCurrentPrice(input.getProductCurrentPrice());
            _product.setImageURL(input.getImageURL());
            _product.setPreviousPrice(input.getPreviousPrice());
            _product.setOnSpecial(input.getOnSpecial());
            this.repository.save(_product);

        }catch (Exception e){
            System.out.println(e);
            return  false;
        }
        return true;
    }
}
