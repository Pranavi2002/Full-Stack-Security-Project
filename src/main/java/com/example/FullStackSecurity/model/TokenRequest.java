package com.example.FullStackSecurity.model;

import jakarta.validation.constraints.NotNull;

public class TokenRequest {
    @NotNull(message = "Token cannot be null")
    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
