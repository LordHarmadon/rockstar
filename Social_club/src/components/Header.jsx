import React from 'react';
import { Link } from 'react-router-dom';
import '/src/index.css'; // Подключаем стили для навигации

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          GameStore 
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link"> Home </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link"> Cart </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}