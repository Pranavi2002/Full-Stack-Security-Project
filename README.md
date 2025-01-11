## Backend:

## Technologies:

Spring Boot: Backend framework for RESTful API development.
Spring Security: Provides authentication and role-based access control.
JWT (JSON Web Tokens): Used for secure and stateless authentication.
MySQL: Relational database for data persistence.
BCrypt: Hashing algorithm for encrypting passwords.

## Key Functionalities:

User Authentication:
Users can register and log in securely using JWT tokens.
Passwords are encrypted with BCrypt to enhance security.

Role-Based Access Control (RBAC):
Admins can view all users and delete them.
Normal users can create, view, and update their own data.
Access to specific endpoints is restricted based on user roles.

Secure API Endpoints:
All API requests are protected using JWT.
Token validation is handled for every request to ensure security.

User Management:
CRUD operations for employees.
Admin-specific operations like user deletion.

Exception Handling:
Handles errors like unauthorized access and invalid credentials with meaningful responses.

## API Endpoints:

POST /register: User registration.
POST /login: User login and JWT generation.
GET /dashboard: Role-specific dashboard data.
GET /users: (Admin) View all users.
DELETE /users/{id}: (Admin) Delete a user.
PUT /users/{id}: (User) Update their profile.

## Summary:
This project provides a robust and secure user management system with authentication and role-based access control, ensuring a safe and efficient way to manage users and their data. It’s ideal for applications requiring multi-role access and secure user interactions.