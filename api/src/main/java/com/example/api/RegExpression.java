package com.example.api;

import java.util.regex.Pattern;

public class RegExpression {
    public boolean isValidEmail(String email){
        Pattern pattern = Pattern.compile("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$");
        return pattern.matcher(email).matches();
    }
    public boolean isValidPassword(String password){
        Pattern pattern = Pattern.compile("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$");
        return pattern.matcher(password).matches();
    }
}
