import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './styles/Footer.css';
const Footer = () => {
  const navigate = useNavigate();
    return(
     <footer>
    <div className="footerTotal">
      <div className="footer-brand">
        <h2>KRAV MAGA <span className="texto-rojo">INTEGRAL SYSTEM DEFENSE</span></h2>
        <p>Red de sedes en Argentina con instructores certificados y metodología israelí.</p>
      </div>
      <div className="footer-nav">
        <h4 className="texto-rojo">Navegación</h4>
        <ul>
          <li><span onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/');
          }} style={{cursor: 'pointer'}}>Inicio</span></li>
          <li><span onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/servicios');
          }} style={{cursor: 'pointer'}}>Servicios</span></li>
          <li><span onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/quienes-somos');
          }} style={{cursor: 'pointer'}}>Quiénes Somos</span></li>
          <li><span onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/novedades');
          }} style={{cursor: 'pointer'}}>Novedades</span></li>
          <li><span onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/galeria');
          }} style={{cursor: 'pointer'}}>Galería</span></li>
          <li><span onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/sedes');
          }} style={{cursor: 'pointer'}}>Sedes</span></li>
        </ul>
      </div>
      <div className="footer-nav">
        <h4 className="texto-rojo">Servicios</h4>
        <ul>
          <li><span onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/servicios');
          }} style={{cursor: 'pointer'}}>Clases en sedes</span></li>
          <li><span onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/servicios');
          }} style={{cursor: 'pointer'}}>Clases personalizadas</span></li>
          <li><span onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/servicios');
          }} style={{cursor: 'pointer'}}>Talleres institucionales</span></li>
          <li><span onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/servicios');
          }} style={{cursor: 'pointer'}}>Curso de instructor Nivel 1</span></li>
        </ul>
      </div>
      <div className="footer-nav">
        <h4 className="texto-rojo">Redes sociales</h4>
        <ul>
          <li><a href="https://instagram.com/isdkravmagainternacional" target="_blank">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2026 Krav Maga <span className="texto-rojo">Integral System Defense</span>— Todos los derechos reservados</p>
      <p>Defensa personal · <span className="texto-rojo">Argentina</span></p>
    </div>
  </footer>
  
)
}

export default Footer;