import React from 'react';
import './Login.css';

const AdminLogin = () => {
  return (
    <div className="login-container admin">
      <h2>Admin Login</h2>
      <form className="login-form">
        <input type="text" placeholder="Admin ID" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
