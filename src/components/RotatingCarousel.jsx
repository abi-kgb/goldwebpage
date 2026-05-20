import React, { useState, useEffect, useRef } from 'react';

const RotatingCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const AUTOPLAY_TIME = 5000; // 5 seconds per slide

  // Reset and restart the timer whenever the slide changes
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, AUTOPLAY_TIME);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, slides?.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (!slides || slides.length === 0) return null;

  return (
    <>
      {/* Embedded Modern Fade CSS Styles */}
      <style>{`
        .fade-carousel {
          position: relative;
          width: 100%;
          max-width: 900px;
          height: 500px;
          margin: 0 auto;
          overflow: hidden;
          background-color: #000;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        /* Slide Layers */
        .fade-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.8s;
          z-index: 1;
        }

        .fade-slide.active {
          opacity: 1;
          visibility: visible;
          z-index: 2;
        }

        .fade-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.75);
        }

        /* Animated Captions */
        .fade-caption {
          position: absolute;
          bottom: 60px;
          left: 50px;
          right: 50px;
          color: #ffffff;
          z-index: 3;
          transform: translateY(20px);
          opacity: 0;
          transition: transform 0.6s ease 0.3s, opacity 0.6s ease 0.3s;
        }

        .fade-slide.active .fade-caption {
          transform: translateY(0);
          opacity: 1;
        }

        .fade-caption h2 {
          font-size: 32px;
          margin: 0 0 10px 0;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0,0,0,0.4);
        }

        /* Minimalist Controls */
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: background 0.3s, border-color 0.3s;
        }

        .nav-arrow:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .arrow-left { left: 24px; }
        .arrow-right { right: 24px; }

        /* Modern Progress Indicators */
        .progress-nav {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 4;
        }

        .progress-bar-wrapper {
          width: 60px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          cursor: pointer;
          overflow: hidden;
          position: relative;
        }

        .progress-bar-fill {
          height: 100%;
          background: #ffffff;
          width: 0%;
        }

        /* Animate the fill line only on the active bar */
        .progress-bar-wrapper.active .progress-bar-fill {
          animation: fillProgress ${AUTOPLAY_TIME}ms linear forwards;
        }

        @keyframes fillProgress {
          from { width: 0%; }
          to { width: 100%; }
        }

        @media (max-width: 600px) {
          .fade-carousel { height: 350px; }
          .fade-caption { left: 24px; right: 24px; bottom: 50px; }
          .fade-caption h2 { font-size: 22px; }
          .nav-arrow { width: 40px; height: 40px; font-size: 14px; }
          .arrow-left { left: 12px; }
          .arrow-right { right: 12px; }
        }
      `}</style>

      {/* Component Layout */}
      <div className="fade-carousel">
        {/* Navigation Arrows */}
        <button className="nav-arrow arrow-left" onClick={handlePrev}>&#10094;</button>
        <button className="nav-arrow arrow-right" onClick={handleNext}>&#10095;</button>

        {/* Carousel Tracks */}
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`fade-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.title || `Slide ${index}`} />
            {slide.title && (
              <div className="fade-caption">
                <h2>{slide.title}</h2>
              </div>
            )}
          </div>
        ))}

        {/* Bottom Progress Bars */}
        <div className="progress-nav">
          {slides.map((_, index) => (
            <div 
              key={index} 
              className={`progress-bar-wrapper ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="progress-bar-fill" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RotatingCarousel;
