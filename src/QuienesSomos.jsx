import React from 'react';
import './styles/QuienesSomos.css';
import marceloImg from '../assets/fotos/treintaysiete.jpg';
import bleedTres from '../assets/logos/bleed3.png';
import bleedCuatro from '../assets/logos/bleed4.png';
import combatCare from '../assets/logos/cccrp.png';

const QuienesSomos = () => {
  return (
    <section className="quienes-somos">
        <div className='titular'>
          <p className='subtitle'>SOBRE NOSOTROS</p>
          <h2>QUIÉNES<br /><span className='red-text'> SOMOS</span></h2>
          <div className="underline"></div>
          <p className='description'>Institución reconocida por su trayectoria y profesionalismo, con sedes en varios países y en continuo crecimiento.</p>
          <p className='description'>Tambien somos formadores de Instructores STOP THE BLEED® certificados y avalados por el Departamento de Defensa de los Estados Unidos, Agencia de Salud de la Defensa.</p>
          <div className='bleedLogos'>
            <img className='bleedTres' src={bleedTres} alt="Logo STOP THE BLEED" />
            <img src={bleedCuatro} alt="Logo STOP THE BLEED" />
            <img src={combatCare} alt="Logo COMBAT CARE" />
          </div>
        </div>
<div className="director-section">

        <div className="director-imagen">
          <img src={marceloImg} alt="Marcelo Alejandro Olmos" />
        </div>
        <div className="director-info">
          <p className="subtitulo-director texto-rojo">NUESTRO DIRECTOR</p>
          <h2 className="nombre-director">MARCELO ALEJANDRO <span className="texto-rojo">OLMOS</span></h2>
          <div className="linea-roja"></div>
          <p className="descripcion-director">
            18 años de experiencia en Artes Marciales y Sistemas de Defensa Personal y más de 300 seminarios y cursos realizados que fortalecen la experiencia lograda.
          </p>
          <div className="logros-director">
            <div className="logro-item">
              <span className="icono-logro">🥋</span>
              <p>Instructor de <strong>KRAV MAGA</strong></p>
            </div>
            <div className="logro-item">
              <span className="icono-logro">⚫</span>
              <p><strong>Black Belt</strong> Hapkido</p>
            </div>
            <div className="logro-item">
              <span className="icono-logro">🩺</span>
              <p>Instructor <strong>Stop the Bleed</strong> · RCP · DEA</p>
            </div>
            <div className="logro-item">
              <span className="icono-logro">🏛️</span>
              <p>Directivo <strong>Zona Oeste - ASAMA</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* PARTE 1: CREDENCIALES */}
      <div className="credenciales">
        <article className="columna-credencial">
          <h3 className="titulo-credencial texto-rojo">EXPERIENCIA</h3>
          <div className="items-credencial">
            <div className="item-credencial">Instructor Nivel 1° Kapap</div>
            <div className="item-credencial">Black Belt 2° degree Krav Amiti</div>
            <div className="item-credencial">Instructor Krav Hagana</div>
            <div className="item-credencial">Instructor Cuchillo</div>
            <div className="item-credencial">Instructor Bastón Defensivo</div>
            <div className="item-credencial">Instructor Protección Ejecutiva</div>
          </div>
        </article>

        <article className="columna-credencial">
          <h3 className="titulo-credencial texto-rojo">CONOCIMIENTOS</h3>
          <div className="items-credencial">
            <div className="item-credencial">Defensa Personal Operativa</div>
            <div className="item-credencial">Tiro Defensivo</div>
            <div className="item-credencial">Tiro Vehicular</div>
            <div className="item-credencial">CQB (Close Quarters Battle)</div>
            <div className="item-credencial">Combate con Cuchillo</div>
            <div className="item-credencial">PR 24 Tonfa</div>
            <div className="item-credencial">Bastón Extensible</div>
          </div>
        </article>

        <article className="columna-credencial">
          <h3 className="titulo-credencial texto-rojo">CURSOS & SEMINARIOS DICTADOS</h3>
          <div className="items-credencial">
            <div className="item-credencial">Sem. PFA Escuela de Cadetes</div>
            <div className="item-credencial">Sem. PER - Policía Entre Ríos Gualeguaychú</div>
            <div className="item-credencial">Curso Batallón de Intendencia</div>
            <div className="item-credencial">Curso Batallón de Ingenieros 601</div>
            <div className="item-credencial">Curso Batallón Buzos del Ejército</div>
            <div className="item-credencial">Sem. Regimiento Buin - Santiago de Chile</div>
            <div className="item-credencial">Curso Protección Ejecutiva</div>
            <div className="item-credencial">Curso Formación para Instructor</div>
            <div className="item-credencial">Curso Operador de Tonfa</div>
            <div className="item-credencial">Sem. Defensa Personal Transporte Público</div>
            <div className="item-credencial">Sem. Defensa Personal en Vehículo</div>
            <div className="item-credencial">Curso Boot Camp</div>
            <div className="item-credencial">Sem. Defensa Personal Femenina</div>
            <div className="item-credencial">Sem. Defensa Personal para Niños</div>
          </div>
        </article>
      </div>

      {/* PARTE 2: NUESTRO DIRECTOR */}
      
    </section>
  );
};

export default QuienesSomos;