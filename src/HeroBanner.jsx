import React, { useEffect, useRef } from 'react';
import './styles/HeroBanner.css';
import v1 from '../assets/videos/v1.mp4';
import v2 from '../assets/videos/v2.mp4';
import v3 from '../assets/videos/v3.mp4';
import v4 from '../assets/videos/v4.mp4';
import v5 from '../assets/videos/v5.mp4';


const HeroBanner = () => {
  const videoRefs = useRef([]);

  // Sincronización extra para asegurar que todos reinicien su bucle al mismo tiempo
  useEffect(() => {
    const interval = setInterval(() => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(err => console.log("Autoplay bloqueado o video no listo", err));
        }
      });
    }, 10000); // 10 segundos

    return () => clearInterval(interval);
  }, []);

  const videos = [v1, v2, v3, v4, v5];

  return (
    <div className="hero-banner-container">
      {/* Contenedor de Videos en una sola línea */}
      <div className="video-grid">
        {videos.map((videoSrc, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="banner-video"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;