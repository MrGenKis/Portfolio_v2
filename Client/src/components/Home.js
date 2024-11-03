
import React, { useEffect } from 'react';
import Rellax from 'rellax';
import './styles/Home.css';
import Stars from './Stars';
import StarMap from './StarMap';

import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';

import ContactForm from './ContactForm';

function Home() {
  useEffect(() => {
    new Rellax('.planet', { speed: -2 });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const planets = document.querySelectorAll('.planet');
      planets.forEach((planet) => {
        planet.style.transform = `translateY(${scrollPosition * -0.2}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <Stars />
      <section id="home" className="home-container">
        <div className="intro">
          <br />
          <h1>Idriss ASKRI</h1>
          <br />
          <p>
            Développeur Web passionné par la création de sites web et d'applications web.
          </p>
          <a href="/cv/CV.pdf" download className="download-cv-button">
            Télécharger le CV
          </a>
        </div>
        <div className="astronaut-container">
          <img
            src="/images/astronaut.png"
            alt="Astronaute"
            className="astronaut"
          />
        </div>
        <div className="planet-container">
          <img
            src="/images/planets/planet1.png"
            alt="Planète 1"
            className="planet planet1"
          />
          <img
            src="/images/planets/planet2.png"
            alt="Planète 2"
            className="planet planet2"
          /> <img
          src="/images/planets/planet14.png"
          alt="Planète 3"
          className="planet planet3"
        />
        </div>
      </section>

      <section id="about" className="section">
        <h2>À propos</h2>
        <p>Jeune développeur web passionné. Après avoir exploré différentes voies, j'ai enfin trouvé ma véritable vocation dans le développement web.</p>
      </section>

      <Education />

      <Experience />

      <section id="projects" className="section">
        <Skills />
        <StarMap />
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Vous souhaitez collaborer ou simplement discuter ? N’hésitez pas à me contacter.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}

export default Home;
