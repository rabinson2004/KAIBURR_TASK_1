import React, { useState } from 'react';
import './Navfile.css';

const Navfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
            <div className="Line"></div>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
            <div className="Line"></div>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
            <div className="Line"></div>
          </li>

          <li className="nav-item dropdown-wrapper">
            <button onClick={toggleList} className="dropdown-button">
              <span>Menu</span>
              <span className={`arrow ${isOpen ? 'rotate' : ''}`}>&#9660;</span>
            </button>
            {isOpen && (
              <ul className="dropdown-list">
                <li className="dropdown-item">Profile</li>
                <li className="dropdown-item">Settings</li>
                <li className="dropdown-item">Logout</li>
              </ul>
            )}
            <div className="Line"></div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navfile;
