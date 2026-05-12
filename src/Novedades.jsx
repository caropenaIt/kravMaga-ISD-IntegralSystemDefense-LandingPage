import './styles/Novedades.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logoHero from '../assets/Logos/logo 1.png';

const Novedades = () => {
    return (
        <div>
        <section id="novedades">
            <div className='titular'>
              <p className='subtitle'>ACTIVIDADES Y EVENTOS</p>
              <h2>NOVEDADES</h2>
              <div className="underline"></div>
              <p className='description'>Seguí de cerca nuestras actividades, seminarios, cursos y eventos. Actualizamos esta sección mensualmente.</p>
            </div>
        </section>
        <section className='eventos'>
          <div className='evento-card'>
            <div className='evento-numero'>
              <p className='numero'>01</p>
              <p>MAYO 2026</p>
            </div>
            <div className='evento-contenido'>
              <p className='texto-rojo'>PRÓXIMAMENTE</p>
              <h3>NUEVOS EVENTOS</h3>
              <p>Estén atentos a nuestras próximas novedades y eventos por venir.</p>
            </div>
            <img src={logoHero} alt="Logo" />
          </div>

          <div className='evento-card'>
            <div className='evento-numero'>
              <p className='numero'>02</p>
              <p>MAYO 2026</p>
            </div>
            <div className='evento-contenido'>
              <p className='texto-rojo'>PRÓXIMAMENTE</p>
              <h3>NUEVOS EVENTOS</h3>
              <p>Estén atentos a nuestras próximas novedades y eventos por venir.</p>
            </div>
            <img src={logoHero} alt="Logo" />
          </div>
        </section>
        </div>
    );
};
export default Novedades;