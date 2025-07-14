# Backend - User Management System with Security

## Technologies

- **Spring Boot:** Backend framework for RESTful API development  
- **Spring Security:** Provides authentication and role-based access control  
- **JWT (JSON Web Tokens):** Secure and stateless authentication  
- **MySQL:** Relational database for data persistence  
- **BCrypt:** Password hashing algorithm for encryption  

---

## Key Functionalities

### User Authentication
- Secure user registration and login using JWT tokens  
- Passwords encrypted with BCrypt for enhanced security  

### Role-Based Access Control (RBAC)
- **Admins:** View and delete users  
- **Normal Users:** Create, view, and update their own data  
- Endpoint access restricted based on user roles  

### Secure API Endpoints
- All endpoints protected via JWT validation  
- Token validation performed on every request  

### User Management
- Full CRUD operations for employee/user data  
- Admin-specific actions like user deletion  

### Exception Handling
- Meaningful error responses for unauthorized access, invalid credentials, etc.  

---

## API Endpoints

| Method | Endpoint          | Description                  | Access          |
|--------|-------------------|------------------------------|-----------------|
| POST   | `/register`       | User registration            | Public          |
| POST   | `/login`          | User login and JWT generation| Public          |
| GET    | `/dashboard`      | Role-specific dashboard data | Authenticated   |
| GET    | `/users`          | View all users               | Admin only      |
| DELETE | `/users/{id}`     | Delete a user                | Admin only      |
| PUT    | `/users/{id}`     | Update user profile          | User only       |

---

# Summary

This backend project implements a robust and secure user management system with authentication and role-based access control. It ensures safe and efficient handling of user data and is well-suited for applications requiring multi-role access and secure user interactions.
