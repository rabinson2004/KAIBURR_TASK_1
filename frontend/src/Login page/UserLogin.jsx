import React from 'react';
import './Login.css';

const UserLogin = () => {
  return (
    <div className="login-container user">
      <h2>User Login</h2>
      <form className="login-form">
        <input type="text" placeholder="Email or Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
