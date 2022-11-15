package com.example.api.product;


import com.example.api.user.RoleType;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name="products")
@NoArgsConstructor
public class Product implements Serializable {
    @SequenceGenerator(
            name="product_sequence",
            allocationSize = 1,
            sequenceName = "product_sequence"
    )
    @GeneratedValue(
            generator = "product_sequence",
            strategy = GenerationType.SEQUENCE
    )
    @Id
    private Long id;

    @Column(nullable = false)
    private  String imageURL;

    @Column(nullable = false)
    private String productName;

    @Column(nullable = false)
    private Double productCurrentPrice;

    @Column(nullable = false)
    private boolean onSpecial = false;

    @Column(nullable=false)
    private Double previousPrice = 0.0;
}
