package com.example.FullStackSecurity.service;

import org.springframework.stereotype.Component;

@Component
public class PasswordValidator {

    // Method to check password strength
    public boolean isPasswordStrong(String password) {
        return password.length() >= 8 &&	// password must have at least 8 characters
                password.matches(".*[A-Z].*") && // At least one uppercase letter
                password.matches(".*[0-9].*");  // At least one digit
    }
}
