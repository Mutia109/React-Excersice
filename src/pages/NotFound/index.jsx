import React from 'react';
import { Link } from 'react-router-dom';

export default NotFound = () => {
  return (
    <div className="container">
      <p>Nothing</p>
      <Link to="/">Go Home</Link>
    </div>
  )
}