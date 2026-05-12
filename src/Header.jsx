import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <header>
      <img src="./assets/Logos/logo2.png" alt="logo" />
      <nav id="navbar">
        
        <ul className="nav-links">
          <li><Link to="/" className={isActive('/')}>Inicio</Link></li>
          <li><Link to="/servicios" className={isActive('/servicios')}>Servicios</Link></li>
          <li><Link to="/quienes-somos" className={isActive('/quienes-somos')}>Quiénes Somos</Link></li>
          <li><Link to="/novedades" className={isActive('/novedades')}>Novedades</Link></li>
          <li><Link to="/galeria" className={isActive('/galeria')}>Galería</Link></li>
          <li><Link to="/sedes" className={isActive('/sedes')}>Sedes</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;