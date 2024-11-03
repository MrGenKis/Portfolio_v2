
import React from 'react';
import './styles/Skills.css';

function Skills() {
  const skills = [
    { name: 'React', image: '/images/skills/react.svg' },
    { name: 'JavaScript', image: '/images/skills/js.svg' },
    { name: 'Html', image: '/images/skills/html.svg' },
    { name: 'Css', image: '/images/skills/css.svg' },
    { name: 'Php', image: '/images/skills/php.svg' },
    { name: 'Symfony', image: '/images/skills/symfony.svg' },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Compétences</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
