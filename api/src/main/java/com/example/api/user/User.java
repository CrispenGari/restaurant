package com.example.api.user;

import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name="users")
@NoArgsConstructor
public class User implements Serializable {
    @SequenceGenerator(
            name="user_sequence",
            allocationSize = 1,
            sequenceName = "user_sequence"
    )
    @GeneratedValue(
            generator = "user_sequence",
            strategy = GenerationType.SEQUENCE
    )
    @Id
    private Long id;

    @Column(nullable = false, unique = true)
    private  String email;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RoleType role;

    @Column(nullable = false)
    private String password;

}
