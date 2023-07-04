import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="active-link">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/favorites" className="active-link">Favorites</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/foods/create" className="active-link">Create</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
