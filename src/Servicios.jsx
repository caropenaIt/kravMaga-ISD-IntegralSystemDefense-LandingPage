import React from 'react';
import './styles/Servicios.css';
import { useNavigate } from 'react-router-dom';

const Servicios = () => {
  const navigate = useNavigate();
  return (
    <section id="servicios">
      {/* Encabezado */}
      <div className="servicios-header">
        <p className="subtitle">LO QUE OFRECEMOS</p>
        <h2>NUESTROS<br /><span className="red-text">SERVICIOS</span></h2>
        <div className="underline"></div>
        <p className="description">Formación completa en defensa personal para individuos, grupos e instituciones, con metodología certificada y contenido adaptado a cada necesidad.</p>
      </div>

      {/* Servicios Grid */}
      <div className="servicios-grid">
        {/* Servicio 01 */}
        <div className="servicio-card">
          <div className="servicio-number">01</div>
          <h3>CLASES EN LAS SEDES</h3>
          <p>Clases grupales regulares en nuestras sedes distribuidas en distintas localidades. Ambiente de trabajo intenso pero estructurado, con grupos reducidos para garantizar la atención del instructor y el progreso individual de cada alumno.</p>
          <ul>
            <li>Clases semanales con calendario fijo</li>
            <li>Grupos por nivel: principiante, intermedio y avanzado</li>
            <li>Sistema de niveles con progresión certificada</li>
            <li>Trabajo con y sin equipamiento de protección</li>
            <li>Entrenamiento situacional y bajo presión</li>
            <li>Apto para civiles y personal de seguridad</li>
          </ul>
        </div>

        {/* Servicio 02 */}
        <div className="servicio-card">
          <div className="servicio-number">02</div>
          <h3>CLASES PERSONALIZADAS</h3>
          <p>Entrenamiento individual o en grupos muy reducidos con un instructor dedicado. Ideal para quienes buscan progresar rápidamente, tienen horarios especiales, o necesitan trabajar situaciones específicas que no se cubren en el formato grupal.</p>
          <ul>
            <li>Diagnóstico inicial y plan de entrenamiento a medida</li>
            <li>Horarios flexibles acordados con el instructor</li>
            <li>Foco en objetivos individuales del alumno</li>
            <li>Preparación para situaciones de riesgo específicas</li>
            <li>Disponible para mujeres, adultos mayores y deportistas</li>
            <li>Posibilidad de clases a domicilio o en la sede</li>
          </ul>
        </div>

        {/* Servicio 03 */}
        <div className="servicio-card">
          <div className="servicio-number">03</div>
          <h3>TALLERES Y CURSOS PARA INSTITUCIONES</h3>
          <p>Diseñamos y dictamos talleres de defensa personal para empresas, colegios, clubes, fuerzas de seguridad y cualquier organización que quiera capacitar a su personal o comunidad. El contenido se adapta completamente al perfil y necesidades del grupo.</p>
          <ul>
            <li>Talleres desde medio día hasta programas de varios módulos</li>
            <li>Contenido adaptado: mujeres, adultos mayores, jóvenes, uniformados</li>
            <li>Módulos de autoprotección, prevención y manejo del miedo</li>
            <li>Defensa ante situaciones de riesgo en el trabajo</li>
            <li>Intervención policial y control de personas para fuerzas del orden</li>
            <li>Certificado de participación para cada asistente</li>
            <li>Material didáctico y protocolo de evaluación disponibles</li>
            <li>Cobertura en todo el territorio nacional</li>
          </ul>
        </div>

        {/* Servicio 04 */}
        <div className="servicio-card">
          <div className="servicio-number">04</div>
          <h3>CURSO DE INSTRUCTOR</h3>
          <p className="nivel-text"><span className="texto-rojo">NIVEL 1 - DEFENSA PERSONAL</span></p>
          <p>Formación específica para instructores de otras disciplinas deportivas o marciales que desean incorporar el Krav Maga y la defensa personal a su oferta de clases. No requiere experiencia previa en Krav Maga, solo condición física adecuada y experiencia docente en actividad física.</p>
          <ul>
            <li>Fundamentos técnicos del sistema Krav Maga</li>
            <li>Metodología de enseñanza de defensa personal</li>
            <li>Planificación de clases y progresión curricular</li>
            <li>Trabajo con público civil de distintas edades y géneros</li>
            <li>Manejo del grupo, motivación y psicología del alumno</li>
            <li>Técnicas de parate, golpeo, proyecciones y defensa ante armas</li>
            <li>Evaluación y acreditación de alumnos propios</li>
            <li>Certificación oficial nivel 1 al egreso</li>
          </ul>
        </div>
      </div>

      {/* Banner Instituciones */}
      <div className="banner-instituciones">
        <div className="banner-content">
          <h3>¿SOS UNA INSTITUCIÓN O EMPRESA?</h3>
          <p>Contactanos para diseñar un programa a medida para tu organización. Trabajamos con municipios, empresas privadas, colegios y fuerzas de seguridad en todo el país.</p>
          
          <button className="banner-button" onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/sedes');
          }}>VER SEDES Y CONTACTOS</button>
        </div>
      </div>
    </section>
  );
};

export default Servicios;