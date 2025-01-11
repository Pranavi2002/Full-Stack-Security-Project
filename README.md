## Full Stack Web Application with enhanced Security to manage user data:

This enhanced Full Stack Web Application builds upon a User Management System with added security features such as authentication, role-based access control, and secure API communication using Spring Security and JWT. The application ensures that data is protected while providing distinct functionalities for Normal Users and Admin roles.

The application uses Spring Boot for the backend and React.js for the frontend, with a MySQL database for storing user information.

## Frontend:

## Technologies:

ReactJS: For building dynamic and responsive user interfaces.
React Router: For handling navigation between different views.
Axios: For making API requests to the backend.
Bootstrap: For responsive and visually appealing UI design.

## Key Functionalities:

Authentication:
Registration and login forms that integrate with the backend for secure JWT-based authentication.
JWT tokens are stored in localStorage and used for authenticated API requests.

Role-Based Features:
Normal Users: Access to personal dashboard to view and update their data.
Admin: Access to the Admin Dashboard to view and delete users.

Conditional Rendering:
Components and routes are displayed based on the user’s role and authentication status.

Secure Routing:
React Router ensures only authenticated users can access specific routes.
Redirection to login if a user tries to access a protected route without authentication.

User Management:
Admins can manage users directly from the Admin Dashboard.
CRUD operations for employee data integrated with the backend.
