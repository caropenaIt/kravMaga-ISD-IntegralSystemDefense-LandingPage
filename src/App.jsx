import React from 'react';
import Header from './Header';
import Inicio from './Inicio';
import Servicios from './Servicios';
import QuienesSomos from './QuienesSomos';
import Novedades from './Novedades';
import Galeria from './Galeria';
import Sedes from './Sedes';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
           <Route path="/inicio" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/novedades" element={<Novedades />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/sedes" element={<Sedes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;