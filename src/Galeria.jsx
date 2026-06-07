import './styles/Galeria.css';
import React from 'react';
//Fotos
import uno from '../assets/fotos/uno.jpeg';
import dos from '../assets/fotos/dos.jpeg';
import tres from '../assets/fotos/tres.jpg';
import cuatro from '../assets/fotos/cuatro.jpg';
import seis from '../assets/fotos/seis.jpg';
import siete from '../assets/fotos/siete.jpg';
import ocho from '../assets/fotos/ocho.jpg';
import nueve from '../assets/fotos/nueve.jpg';
import diez from '../assets/fotos/diez.jpg';
import once from '../assets/fotos/once.jpg';
import doce from '../assets/fotos/doce.jpg';
import catorce from '../assets/fotos/catorce.jpg';
import quince from '../assets/fotos/quince.jpg';
import dieciseis from '../assets/fotos/dieciseis.jpg';
import diecisiete from '../assets/fotos/diecisiete.jpg';
import dieciocho from '../assets/fotos/diesiocho.jpg';
import diecinueve from '../assets/fotos/diesinueve.jpg';
import veinte from '../assets/fotos/veinte.jpg';
import veintiuno from '../assets/fotos/veintiuno.jpg';
import veintidos from '../assets/fotos/veintidos.jpg';
import veintitres from '../assets/fotos/veintitres.jpg';
import veinticuatro from '../assets/fotos/veinticuatro.jpg';
import veinticinco from '../assets/fotos/veinticinco.jpg';
import veintiseis from '../assets/fotos/veintiseis.jpg';
import veintisiete from '../assets/fotos/veintisiete.jpg';
import veintiocho from '../assets/fotos/veintiocho.jpg';
import veintinueve from '../assets/fotos/veintinueve.jpg';
import treinta from '../assets/fotos/treinta.jpg';
import treintaYUno from '../assets/fotos/treintayuno.jpg';
import treintaYDos from '../assets/fotos/treintaydos.jpg';
import treintaYTres from '../assets/fotos/treintaytres.jpg';
import treintaYCuatro from '../assets/fotos/treintaycuatro.jpg';
import treintaYCinco from '../assets/fotos/treintaycinco.jpg';
import treintaYSeis from '../assets/fotos/treintayseis.jpg';
import treintaYOcho from '../assets/fotos/treintayocho.jpg';
import treintaYNueve from '../assets/fotos/treintaynueve.jpg';
import cuarenta from '../assets/fotos/cuarenta.jpg';
import cuarentaYUno from '../assets/fotos/cuarentayuno.jpeg';
//Videos
import kravPilar from '../assets/videos/kravPilar.mp4';
import bootCamp from '../assets/videos/BootCamp2025.mp4';
import DryFire from '../assets/videos/DryFire.mp4';
import kravHaedo from '../assets/videos/kravHaedo.mp4';
import kravMoron from '../assets/videos/kravMoron.mp4';
import kravOperativo from '../assets/videos/kravOperativo.mp4';
import kravOperativoDos from '../assets/videos/kravOperativo2.mp4';
import operativoCorrientes from '../assets/videos/operativoCorrientes.mp4';
import defFemenino from '../assets/videos/tallerDefMujer.mp4';
import tallerPF from '../assets/videos/tallerPF.mp4';
import instructor from '../assets/videos/trainingInstructor.mp4';
import instructorDos from '../assets/videos/clase-instructor.mp4';

const Galeria = () => {
    return(
        <div>
        <section id="galeria">
        <div className='titular'>
          <p className='subtitle'>IMÁGENES Y VÍDEOS</p>
          <h2>GALERÍA<br /><span className='texto-rojo'> MULTIMEDIA</span></h2>
          <div className="underline"></div>
          <p className='description'>Fotos y videos de clases, talleres, cursos y eventos. Conocé el ambiente de entrenamiento y la comunidad de Krav Maga Integral.</p>
          <div className='seudoButton'>
              <p>CLASES</p>
              <p>TALLERES</p>
              <p>CURSOS DE INSTRUCTOR</p>
              <p>INSTITUCIONAL</p>
            </div>
        </div>
      <article className='fotos'>
        <div>
            <p className='texto-rojo'>FOTOS</p>
            <h3>IMÁGENES DE CLASES Y EVENTOS</h3>
        </div>
        <div className='galeria-container'>
            <img src={uno} alt="Uno"/>
            <img src={dos} alt="Dos" />
            <img src={tres} alt="Tres" />
            <img src={cuatro} alt="Cuatro" />
            <img src={seis} alt="Seis" />
            <img src={siete} alt="Siete" />
            <img src={ocho} alt="Ocho" />
            <img src={nueve} alt="Nueve" />
            <img src={diez} alt="Diez" />
            <img src={once} alt="Once" />
            <img src={doce} alt="Doce" />
            <img src={catorce} alt="Catorce" />
            <img src={quince} alt="Quince" />
            <img src={dieciseis} alt="Dieciseis" />
            <img src={diecisiete} alt="Diecisiete" />
            <img src={dieciocho} alt="Dieciocho" />
            <img src={diecinueve} alt="Diecinueve" />
            <img src={veinte} alt="Veinte" />
            <img src={veintiuno} alt="Veintiuno" />
            <img src={veintidos} alt="Veintidos" />
            <img src={veintitres} alt="Veintitres" />
            <img src={veinticuatro} alt="Veinticuatro" />
            <img src={veinticinco} alt="Veinticinco" />
            <img src={veintiseis} alt="Veintiseis" />
            <img src={veintisiete} alt="Veintisiete" />
            <img src={veintiocho} alt="Veintiocho" />
            <img src={veintinueve} alt="Veintinueve" />
            <img src={treinta} alt="Treinta" />
            <img src={treintaYUno} alt="Treinta y uno" />
            <img src={treintaYDos} alt="Treinta y dos" />
            <img src={treintaYTres} alt="Treinta y tres" />
            <img src={treintaYCuatro} alt="Treinta y cuatro" />
            <img src={treintaYCinco} alt="Treinta y cinco" />
            <img src={treintaYSeis} alt="Treinta y seis" />
            <img src={treintaYOcho} alt="Treinta y ocho" />
            <img src={treintaYNueve} alt="Treinta y nueve" />
            <img src={cuarenta} alt="Cuarenta" />
            <img src={cuarentaYUno} alt="Cuarenta y uno" />
        </div>
      </article>
      <article className='videos'>
        <div>
            <p className='texto-rojo'>VÍDEOS</p>
            <h3>CLASES Y DEMOSTRACIONES</h3>
        </div>
        <div className='galeria-container'>
            <video width="350" height="350" controls>
                <source src={kravPilar} type="video/mp4" />
            </video>
            <video width="350" height="350" controls>
                <source src={bootCamp} type="video/mp4" />
            </video>
            <video width="350" height="350" controls>
                <source src={DryFire} type="video/mp4" />
            </video>
            <video width="350" height="350" controls>
                <source src={kravHaedo} type="video/mp4" />
            </video>
            <video width="350" height="350" controls>
                <source src={kravMoron} type="video/mp4" />
            </video>
            <video width="350" height="350" controls>
                <source src={kravOperativo} type="video/mp4" />
            </video>
            <video width="350" height="350" controls>
                <source src={kravOperativoDos} type="video/mp4" />
            </video>
            <video width="350" height="350" controls>
                <source src={operativoCorrientes} type="video/mp4" />
            </video>
            <video width="350" height="350" controls>
                <source src={defFemenino} type="video/mp4" />
            </video>
            <video width="350" height="350" controls>
                <source src={tallerPF} type="video/mp4" />
            </video>
            <video width="350" height="350" controls>
                <source src={instructor} type="video/mp4" />
            </video>
            <video width="350" height="350" controls>
                <source src={instructorDos} type="video/mp4" />
            </video>
        </div>
      </article>
        </section>
        </div>
    );
};
export default Galeria;