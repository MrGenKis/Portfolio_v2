
import React from 'react';
import './styles/Experience.css';

function Experience() {
  const experiences = [
    {
      date: 'Septembre 2023 - Novembre 2024',
      title: 'Alternant Developpeur Web',
      company: 'Toyo Ink Europe Specialty Chemicals',
      description: `Realisation d'un site aidant au pilotage de l'entereprise. Site permettant d'utiliser leur données pour du monitoring ou du reporting issu de leur logiciel metier `,
    },
    {
      date: 'Juillet 2023 - Septembre 2023',
      title: `Agent d'entretien`,
      company: 'Ophlm de la ville de Montreuil',
      description: `Nettoyage des parties communes des immeubles de la ville de Montreuil`,
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Expériences Professionnelles</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.date}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
