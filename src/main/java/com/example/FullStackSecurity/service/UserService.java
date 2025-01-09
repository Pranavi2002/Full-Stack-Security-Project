package com.example.FullStackSecurity.service;

import com.example.FullStackSecurity.exception.UserAlreadyExistsException;
import com.example.FullStackSecurity.exception.InvalidPasswordException;
import com.example.FullStackSecurity.model.UserEntity;
import com.example.FullStackSecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private PasswordValidator passwordValidator;

    public boolean userExists(String username) {
        return userRepository.existsByUsernameIgnoreCase(username);
    }

    public UserEntity registerUser(UserEntity user) {
        if (userExists(user.getUsername())) {
            throw new UserAlreadyExistsException("User already exists with username: " + user.getUsername());
        }

        if (!passwordValidator.isPasswordStrong(user.getPassword())) {
            throw new InvalidPasswordException("Password does not meet the required strength criteria.");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("ROLE_USER");
        return userRepository.save(user);
    }

    public UserEntity updateUser(String currentUsername, UserEntity updatedUser) {
        UserEntity existingUser = userRepository.findByUsername(currentUsername)
                .orElseThrow(() -> new IllegalArgumentException("User not found with username: " + currentUsername));

        boolean isUsernameUpdated = false;
        boolean isPasswordUpdated = false;

        if (updatedUser.getUsername() != null && !updatedUser.getUsername().isEmpty() &&
                !updatedUser.getUsername().equalsIgnoreCase(currentUsername)) {
            if (userExists(updatedUser.getUsername())) {
                throw new UserAlreadyExistsException("Username already taken: " + updatedUser.getUsername());
            }
            existingUser.setUsername(updatedUser.getUsername());
            isUsernameUpdated = true;
        }

        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
            if (!passwordValidator.isPasswordStrong(updatedUser.getPassword())) {
                throw new InvalidPasswordException("Password does not meet the required strength criteria.");
            }
            existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
            isPasswordUpdated = true;
        }

        if (!isUsernameUpdated && !isPasswordUpdated) {
            throw new IllegalArgumentException("No updates provided");
        }

        return userRepository.save(existingUser);
    }

    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new IllegalArgumentException("User not found with ID: " + userId);
        }
        userRepository.deleteById(userId);
    }
}
