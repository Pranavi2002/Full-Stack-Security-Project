import React from 'react';
import '../styling/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to User Management System</h1>
        <h2>Home Page</h2>
      </header>
      <main className="main-content">
        <div className="image-container">
          <img 
            src="https://itsm.tools/wp-content/uploads/2024/04/Shutterstock_2453134321.jpg" 
            alt="User Management System" 
            className="feature-image"
          />
        </div>
        <div className="content-container">
          <h2>About Our System</h2>
          <p>
            Our User Management System is a robust, full-stack application built with Java SpringBoot 
            backend and ReactJS frontend. It offers a comprehensive solution for managing user accounts 
            and permissions with enhanced security features.
          </p>
          <div className="user-types">
            <div className="user-type">
              <h3>Normal Users</h3>
              <ul>
                <li>Register new accounts</li>
                <li>Login securely</li>
                <li>View personalized dashboard</li>
                <li>Update personal information</li>
              </ul>
            </div>
            <div className="user-type">
              <h3>Administrators</h3>
              <ul>
                <li>Access admin dashboard</li>
                <li>View all user accounts</li>
                <li>Delete user accounts</li>
              </ul>
            </div>
          </div>
          <p>
            Experience streamlined user management with our intuitive interface and 
            powerful backend. Whether you're a regular user or an administrator, our 
            system provides the tools you need for efficient account management.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home;
