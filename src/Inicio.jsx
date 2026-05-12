import React from 'react';
import './styles/Inicio.css';
import logoHero from '../assets/Logos/logo 1.png';
import { useNavigate } from 'react-router-dom';


const Inicio = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* HERO */}
    <main className='inicio'>
    <div className='hero'>
      <p className='texto-rojo'>SISTEMA DE DEFENSA PERSONAL · ISRAEL</p>
      <img src={logoHero} alt="krav maga isd" />
      <p>El sistema de defensa personal más efectivo del mundo, desarrollado para responder ante situaciones reales de amenaza con máxima eficiencia.</p>
      <div className='seudoButton'>
        <p className='rojo'>PARA AMBOS SEXOS</p>
        <p className='rojo'>TODAS LAS EDADES</p>
        <p>CIVILES</p>
        <p>FUERZAS DE SEGURIDAD</p>
        <p>INSTRUCTORES</p>
      </div>
      <div className='botones'>
          <button className="boton-principal" onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/servicios');
          }}>CONOCER LOS SERVICIOS</button>
          <button className='boton-negro' onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/sedes');
          }}>ENCONTRAR SEDE</button>
      </div>
      </div>
      <div className='subHero'>
        <div className='datos'>
          <p className='numero'><span>+</span>20</p>
          <p>AÑOS DE EXPERIENCIA</p>
        </div>
        <div className='datos'>
          <p className='numero'><span>%</span>100</p>
          <p>APLICACIÓN REAL</p>
        </div>
        <div className='datos'>
          <p className='numero'>∞</p>
          <p>SIN LÍMITE DE EDAD</p>
        </div>
      </div>
    </main>

{/* QUE ES EL KRAV MAGA */}

    <section className='krav'>
     <article className='def'>
      <p className='texto-rojo'>CONOCÉ EL SISTEMA</p>
      <h1><span>¿QUÉ ES EL </span><span className='texto-rojo'>KRAV MAGA?</span></h1>
      <p>El Krav Maga es un sistema de defensa personal y combate desarrollado originalmente para las Fuerzas de Defensa de Israel (IDF). Su nombre en hebreo significa literalmente "combate de contacto". Fue creado por Imi Lichtenfeld en la década de 1940 y refinado durante décadas de uso en conflictos reales.</p>
      <p>A diferencia de las artes marciales tradicionales, el Krav Maga no es un deporte ni un arte: es un sistema pragmático y eficiente orientado exclusivamente a la supervivencia en situaciones de peligro real. Sus técnicas se aprenden rápidamente y funcionan bajo presión, estrés y en desventaja física.</p>
      <p>En Krav Maga Integral System Defense enseñamos el sistema completo: desde fundamentos para principiantes hasta táctica avanzada para personal de seguridad y fuerzas del orden, con metodología certificada y progresión estructurada en niveles.</p>
     </article>
     <article className='defUno'>
      <div className='hechos'>
      <p>⚡</p>
      <p>EFICIENCIA REAL</p>
      <p>Técnicas probadas en situaciones reales, no en competencia deportiva controlada.</p>
      </div>
      <div className='hechos'>
      <p>🧠</p>
      <p>APRENDIZAJE RÁPIDO</p>
      <p>Sistema diseñado para incorporarse en el menor tiempo posible mediante repetición.</p>
      </div>
      <div className='hechos'>
      <p>🎯</p>
      <p>SIN REGLAS</p>
      <p>Preparación para escenarios reales donde no existen límites de tiempo ni árbitros.</p>
      </div>
      <div className='hechos'>
      <p>🛡️</p>
      <p>INTELIGENCIA TÁCTICA</p>
      <p>Conciencia situacional, prevención y manejo del miedo como herramientas clave.</p>
      </div>
      <div className='hechos'>
      <p>💪</p>
      <p>PARA CUALQUIER CUERPO</p>
      <p>Adaptado a distintos niveles físicos, sin importar talla, fuerza o flexibilidad.</p>
      </div>
      <div className='hechos'>
      <p>🌍</p>
      <p>ORIGEN PROBADO</p>
      <p>Sistema avalado por décadas de uso en conflictos reales por fuerzas élite del mundo.</p>
      </div>
     </article>
    </section>

    {/* PUBLICO */}

    <section className='publico'>
      <article className='publico-item'>
        <p className='icono'>👩‍🦰</p>
        <h3>AMBOS SEXOS</h3>
        <p className='descripcion'>Técnicas adaptadas a la realidad de cada género, con énfasis en situaciones específicas para la mujer.</p>
        <button className='rojo'>GRUPOS MIXTOS</button>
      </article>
      <article className='publico-item'>
        <p className='icono'>👧</p>
        <h3>TODAS LAS EDADES</h3>
        <p className='descripcion'>Desde jóvenes desde los 8 años hasta adultos mayores. El método se adapta a cada etapa vital.</p>
        <button className='rojo'>SIN LÍMITE DE EDAD</button>
      </article>
      <article className='publico-item'>
        <p className='icono'>🏙️</p>
        <h3>CIVILES</h3>
        <p className='descripcion'>Para cualquier persona que quiera aumentar su seguridad personal y la de su familia en el día a día.</p>
        <button className='rojo'>SIN EXPERIENCIA PREVIA</button>
      </article>
      <article className='publico-item'>
        <p className='icono'>🚔</p>
        <h3>FUERZAS DE SEGURIDAD</h3>
        <p className='descripcion'>Policía, prefectura, gendarmería, guardias y personal militar. Contenido específico para uso profesional.</p>
        <button className='rojo'>NIVEL PROFESIONAL</button>
      </article>
    </section>

    {/* SUMATE */}

    <section className='sumate'>
      <p className='texto-rojo'>EMPEZÁ HOY</p>
      <h2><span>ENCONTRÁ TU SEDE </span><span className='texto-rojo'>MÁS CERCANA</span></h2>
      <p>Contamos con múltiples sedes en distintas localidades, con instructores certificados y grupos reducidos para una atención personalizada.</p>
      <div className='botones'>
        <button className='boton-rojo' onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          navigate('/sedes');
        }}>
          VER TODAS LAS SEDES
        </button>
        <button className='boton-negro' onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          navigate('/servicios');
        }}>
          CONOCER LOS SERVICIOS
        </button>
      </div>
    </section>
</div>
  );
};

export default Inicio;