import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Header.css';
import logoHero from '../assets/Logos/logo 1.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <header>
      <div className="header-container">
        <img src={logoHero} alt="logo" />
        
        
        {/* Botón Hamburguesa */}
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>

      <nav id="navbar" className={isOpen ? 'open' : ''}>
        <ul className="nav-links">
          <li><Link to="/" className={isActive('/')} onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/servicios" className={isActive('/servicios')} onClick={closeMenu}>Servicios</Link></li>
          <li><Link to="/quienes-somos" className={isActive('/quienes-somos')} onClick={closeMenu}>Quiénes Somos</Link></li>
          <li><Link to="/novedades" className={isActive('/novedades')} onClick={closeMenu}>Novedades</Link></li>
          <li><Link to="/galeria" className={isActive('/galeria')} onClick={closeMenu}>Galería</Link></li>
          <li><Link to="/sedes" className={isActive('/sedes')} onClick={closeMenu}>Sedes</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;