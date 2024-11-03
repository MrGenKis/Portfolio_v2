
import React, { useEffect } from 'react';
import './styles/Stars.css';

let starsCreated = false;

function Stars() {
  useEffect(() => {
    const starsContainer = document.getElementById('stars');
    
    if (starsContainer && !starsCreated) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
      }
      starsCreated = true; 
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const opacity = Math.max(1 - scrollPosition / (windowHeight * 0.5), 0);
      const stars = document.querySelectorAll('.star');
      stars.forEach((star) => {
        star.style.opacity = opacity;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div id="stars"></div>;
}

export default Stars;
