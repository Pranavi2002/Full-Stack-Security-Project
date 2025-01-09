package com.example.FullStackSecurity.utility;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.security.Key;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String SECRET_KEY; // Secret key for signing tokens

    @Value("${jwt.expiration}")
    private long EXPIRATION_TIME; // Token expiration time

    // Get the signing key for JWT
    private Key getSigningKey() {
        // Ensure the SECRET_KEY is properly trimmed of any extra whitespace
        String cleanedSecretKey = SECRET_KEY.trim();

        // Ensure padding is correct for Base64 (adds padding if necessary)
        if (cleanedSecretKey.length() % 4 != 0) {
            cleanedSecretKey += "=".repeat(4 - cleanedSecretKey.length() % 4);
        }

        // Decode the Base64 string into bytes
        byte[] keyBytes = java.util.Base64.getDecoder().decode(cleanedSecretKey);

        // Return the signing key
        return Keys.hmacShaKeyFor(keyBytes);
    }

    // Generate JWT token
    public String generateToken(String username, String role) {
        return Jwts.builder()
                .setSubject(username)
                .claim("role", role) // Add role to the token
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // Extract username from token
    public String extractUsername(String token) {
        return extractAllClaims(token).getSubject();
    }

    // Extract role from token
    public String extractRole(String token) {
        return extractAllClaims(token).get("role", String.class);
    }

    // Validate JWT token
    public boolean validateToken(String token, String username) {
        try {
            // Verify the token's signature and structure
            Jws<Claims> claimsJws = Jwts.parserBuilder()
                                        .setSigningKey(getSigningKey())
                                        .build()
                                        .parseClaimsJws(token);
            
            Claims claims = claimsJws.getBody();
            
            // Extract the username from the token
            String tokenUsername = claims.getSubject();
            
            // Check if the extracted username matches the provided username
            return username.equals(tokenUsername) && !isTokenExpired(token);
        } catch (Exception e) {
            // If any exception occurs during validation, consider the token invalid
            return false;
        }
    }

    // Check if token is expired
    public boolean isTokenExpired(String token) {
        return extractAllClaims(token).getExpiration().before(new Date());
    }

    // Extract all claims from a given JWT token
    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
