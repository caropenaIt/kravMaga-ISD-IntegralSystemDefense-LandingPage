import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Sedes.css';
import marce from '../assets/fotos/instruct/marceloOlmos.png';
import nahuel from '../assets/fotos/instruct/nahuelSussini.png';
import cris from '../assets/fotos/instruct/cristianFron.png';
import gaston from '../assets/fotos/instruct/gastonSzurin.png';
import alex from '../assets/fotos/instruct/instructor-uruguay.png';
import luis from '../assets/fotos/instruct/instructor-chile.png';
import daniel from '../assets/fotos/instruct/instructor-daniel.png';

const Sedes = () => {
  const navigate = useNavigate();

  return (
    <section className="sedes">
      <div className='titular'>
        <p className='subtitle'>DÓNDE ENCONTRARNOS</p>
        <h2>NUESTRAS<br /><span className='texto-rojo'> SEDES</span></h2>
        <div className="underline"></div>
        <p className='description'>Cada sede cuenta con un instructor certificado por Krav Maga Integral System Defense. Encontrá la más cercana y comenzá tu entrenamiento.</p>
      </div>
      <div className="sedes-container">
        {/* SEDE 1 */}
        <article className="tarjeta-sede">
          <p className="texto-rojo">SEDE 01 <br />SEDE CENTRAL</p>
          <h3>MORENO, BUENOS AIRES, ARGENTINA</h3>
          <img src={marce} alt="Marcelo Olmos" />
          <p className="zona">MARCELO ALEJANDRO OLMOS</p>
          <div className="info-sede">
            <p className='icono'>🎖️ Director Krav Maga ISD Internacional</p>
          </div>
          <div className="info-sede">
            <p className='icono'>📱 +54 9 11 3322-8114</p>
          </div>
          <div className="info-sede">
            <p className='icono'>📸 @isdkravmagainternacional - Instagram</p>
          </div>
          <div className="botones-sede">
            <button><a className="boton-whatsapp" href="https://wa.me/5491133228114" target='_blank'>💬 WHATSAPP</a></button>
            <button><a className="boton-instagram" href="https://instagram.com/isdkravmagainternacional" target='_blank'>📸 INSTAGRAM</a></button>
          </div>
        </article>

{/* SEDE 2 */}
        <article className="tarjeta-sede">
          <p className="texto-rojo">SEDE 02</p>
          <h3>MORÓN, BUENOS AIRES, ARGENTINA</h3>
          <img src={marce} alt="Marcelo Olmos" />
          <p className="zona">MARCELO ALEJANDRO OLMOS</p>
          <div className="info-sede">
            <p className='icono'>🎖️ Director Krav Maga ISD Internacional</p>
          </div>
          <div className="info-sede">
            <p className='icono'>📱+54 9 11 3322-8114</p>
          </div>
          <div className="info-sede">
            <p className='icono'>📸 @kravmaga_moron - Instagram</p>
          </div>
          <div className="botones-sede">
            <button><a className="boton-whatsapp"href="https://wa.me/5491133228114" target='_blank'>💬 WHATSAPP</a></button>
            <button><a className="boton-instagram"href="https://instagram.com/kravmaga_moron" target='_blank'>📸 INSTAGRAM</a></button>
          </div>
        </article>

{/* SEDE 3 */}
        <article className="tarjeta-sede">
          <p className="texto-rojo">SEDE 03</p>
          <h3>PILAR, BUENOS AIRES, ARGENTINA</h3>
          <img src={cris} alt="Cristian Frontanilla" />
          <p className="zona">CRISTIAN FRONTANILLA</p>
          <div className="info-sede">
            <p className='icono'> 🎖️ Instructor Certificado</p>
          </div>
          <div className="info-sede">
            <p className='icono'>📱+54 9 230-4556047</p>
          </div>
          <div className="info-sede">
            <p className="icono">📸 @kravmagapilar - Instagram</p>
          </div>
          <div className="botones-sede">
            <button><a className="boton-whatsapp" href="https://wa.me/5492304556047" target='_blank'>💬 WHATSAPP</a></button>
            <button><a className="boton-instagram" href="https://instagram.com/kravmagapilar" target='_blank'>📸 INSTAGRAM</a></button>
          </div>
        </article>
        {/* SEDE 4 */}
                <article className="tarjeta-sede">
          <p className="texto-rojo">SEDE 04</p>
          <h3>BENAVÍDEZ, BUENOS AIRES, ARGENTINA</h3>
          <img src={gaston} alt="Gastón Szurin" />
          <p className="zona">Gastón Szurin</p>
          <div className="info-sede">
            <p className='icono'>🎖️ Instructor Certificado</p>
          </div>
          <div className="info-sede">
            <p className='icono'>📱+54 9 11 7103-6130</p>
          </div>
          <div className="botones-sede">
            <button><a className="boton-whatsapp" href="https://wa.me/5491171036130" target='_blank'>💬 WHATSAPP</a></button>
          </div>
        </article>
        {/* SEDE 5 */}
          <article className="tarjeta-sede">
          <p className="texto-rojo">SEDE 05</p>
          <h3>PASO DE LOS LIBRES, CORRIENTES, ARGENTINA</h3>
          <img src={daniel} alt="Daniel Verón" />
          <p className="zona">DANIEL VERÓN</p>
          <div className="info-sede">
            <p className='icono'> 🎖️ Instructor Certificado</p>
          </div>
          <div className="info-sede">
            <p className='icono'>📱 +54 9 11 5561-9137</p>
          </div>
          <div className="info-sede">
            <p className="icono">📸 @kravmagaenlibres - Instagram</p>
          </div>
          <div className="botones-sede">
            <button><a className="boton-whatsapp" href="https://wa.me/5491155619137" target='_blank'>💬 WHATSAPP</a></button>
            <button><a className="boton-instagram" href="https://www.instagram.com/kravmagaenlibres?igsh=MTBvdHVtaHB6Mm9kMw==" target='_blank'>📸 INSTAGRAM</a></button>
          </div>
        </article>
        {/* SEDE 6 */}
          <article className="tarjeta-sede">
          <p className="texto-rojo">SEDE 06</p>
          <h3>SAN MIGUEL, BUENOS AIRES, ARGENTINA</h3>
          <img src={nahuel} alt="Nahuel Sussini" />
          <p className="zona">NAHUEL SUSSINI</p>
          <div className="info-sede">
            <p className='icono'> 🎖️ Instructor Certificado</p>
          </div>
          <div className="info-sede">
            <p className='icono'>📱 +54 9 11 3865-3757</p>
          </div>
          <div className="info-sede">
            <p className="icono">📸 @isdkm.sanmiguel - Instagram</p>
          </div>
          <div className="botones-sede">
            <button><a className="boton-whatsapp" href="https://wa.me/5491138653757" target='_blank'>💬 WHATSAPP</a></button>
            <button><a className="boton-instagram" href="https://www.instagram.com/isdkm.sanmiguel" target='_blank'>📸 INSTAGRAM</a></button>
          </div>
        </article>
        {/* SEDE 7 */}
          <article className="tarjeta-sede">
          <p className="texto-rojo">SEDE 07</p>
          <h3>CHILE</h3>
          <img src={luis} alt="Luis Gonzalez Castro" />
          <p className="zona">LUIS GONZALEZ CASTRO</p>
          <div className="info-sede">
            <p className='icono'> 🎖️ Instructor Certificado</p>
          </div>
          <div className="info-sede">
            <p className='icono'>📱+56 9 7476 7681</p>
          </div>
          <div className="info-sede">
            <p className="icono">📸 @isdkravmagachile - Instagram</p>
          </div>
          <div className="botones-sede">
            <button><a className="boton-whatsapp" href="https://wa.me/56974767681" target='_blank'>💬 WHATSAPP</a></button>
            <button><a className="boton-instagram" href="https://instagram.com/isdkravmagachile" target='_blank'>📸 INSTAGRAM</a></button>
          </div>
        </article>
        {/* SEDE 8 */}
          <article className="tarjeta-sede">
          <p className="texto-rojo">SEDE 08</p>
          <h3>URUGUAY</h3>
          <img src={alex} alt="Alexander Ripoll" />
          <p className="zona">ALEXANDER RIPOLL</p>
          <div className="info-sede">
            <p className='icono'> 🎖️ Instructor Certificado</p>
          </div>
          {/* <div className="info-sede">
            <p className='icono'>📱+54 9 230-4556047</p>
          </div> */}
          <div className="info-sede">
            <p className="icono">📸 @alexanderripoll_ - Instagram</p>
          </div>
          <div className="botones-sede">
            {/* <button><a className="boton-whatsapp" href="https://wa.me/5492304556047" target='_blank'>💬 WHATSAPP</a></button> */}
            <button><a className="boton-instagram" href="https://instagram.com/alexanderripoll_" target='_blank'>📸 INSTAGRAM</a></button>
          </div>
        </article>
      </div>

      {/* SECCIÓN - ¿QUERÉS SUMARТЕ? */}
      <article className="tarjeta-alternativa">
        <div className="contenido-izquierdo">
          <p className="texto-rojo">¿QUERÉS SUMARTE?</p>
          <h2>¿NO ENCONTRÁS UNA SEDE <span className='texto-rojo'>CERCA TUYO?</span></h2>
          <p className="descripcion-alternativa">Si no hay una sede en tu zona pero querés empezar a entrenar, contáctanos. También podés consultar por el programa de formación para abrir tu propia sede o convertirte en instructor certificado.</p>
          <button className="boton-principal" onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/servicios');
          }}>VER CURSO DE INSTRUCTOR</button>
        </div>

        <div className="contenido-derecho">
          <div className="opcion-alternativa">
            <p className="texto-rojo">CLASES PERSONALIZADAS</p>
            <p>Si no hay sede en tu ciudad, podés solicitar clases personalizadas con un instructor disponible en tu área.</p>
          </div>
          <div className="opcion-alternativa">
            <p className="texto-rojo">FORMACIÓN DE INSTRUCTORES</p>
            <p>Abrí tu propia sede con nuestro programa de certificación. Ideal para instructores de otras disciplinas.</p>
          </div>
          <div className="opcion-alternativa">
            <p className="texto-rojo">TALLERES ITINERANTES</p>
            <p>Organizamos talleres en cualquier punto del país para grupos e instituciones. Consultanos por disponibilidad.</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Sedes;
