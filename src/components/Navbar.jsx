import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#3c51c8', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>HomePage</Link>
      <Link to="/movies" style={{ color: '#fff', textDecoration: 'none' }}>All Movies</Link>
      <Link to="/watchlist" style={{ color: '#fff', textDecoration: 'none' }}>Watchlist</Link>
    </nav>
  );
}

export default Navbar;