import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar__link" id='link'>Home</Link>
        <Link to="/trending" className="navbar__link" id='link'>Trending</Link>
      </div>
    </nav>
  )
}