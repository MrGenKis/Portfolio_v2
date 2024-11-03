
import React, { useState, useEffect, useRef } from 'react';
import './styles/StarMap.css';

const projects = [
  {
    id: 1,
    title: 'Guesswhat',
    description: `La planète GuessWhat est un équivalent en ligne et simplifié du jeu Pictionary. Le principe est simple, le premier joueur qui devine le mot gagne des points, proportionnels à sa rapidité de réponse.`,
    technologies: ['Go', 'JavaScript', 'HTML', 'CSS'],
    position: { top: '30%', left: '10%' },
    image: '/images/projects/project7.jpg',
    icon: '/images/planets/planet7.png',
    github: 'https://github.com/MrGenKis/Guesswhat'
  },
  {
    id: 2,
    title: 'Préhistold',
    description: `La planète Préhistold est tout droit tirée d'un Rogue-like. Nous jouons un homme bloqué dans une grotte qui doit s'échapper en combattant des monstres.`,
    technologies: ['JavaScript', 'HTML', 'Phaser'],
    position: { top: '20%', left: '50%' },
    image: '/images/projects/Prehisold.png',
    icon: '/images/planets/planet13.png',
    github: 'https://github.com/MrGenKis/Pr-hisold'
  
  },
  {
    id: 3,
    title: 'My Restaurant',
    description: `Outil à destination des restaurateurs qui veulent un site “clé en main”. L’idée est donc de leur proposer un outil sur lequel ils pourraient configurer des éléments visuels de leur site, puis ajouter des produits qui seront disponibles.`,
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    position: { top: '50%', left: '80%' },
    image: '/images/projects/restaurant.png',
    icon: '/images/planets/planet11.png',
     github: 'https://github.com/MrGenKis/My-Restaurant'
  },
];

function StarMap() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [planetPositions, setPlanetPositions] = useState({});
  const starmapRef = useRef(null);
  const hoverInfoRef = useRef(null);

  const calculatePositions = () => {
    const positions = {};
    projects.forEach((project) => {
      const planetElement = document.getElementById(`planet-${project.id}`);
      if (planetElement && starmapRef.current) {
        const rect = planetElement.getBoundingClientRect();
        const containerRect = starmapRef.current.getBoundingClientRect();
        positions[project.id] = {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      }
    });
    setPlanetPositions(positions);
  };

  useEffect(() => {
    calculatePositions();
    window.addEventListener('resize', calculatePositions);
    return () => {
      window.removeEventListener('resize', calculatePositions);
    };
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.classList.add('no-scroll', 'modal-open'); 
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.classList.remove('no-scroll', 'modal-open');
  };

  let hoverInfoStyle = {};
  if (hoveredProject && planetPositions[hoveredProject.id]) {
    const planetPos = planetPositions[hoveredProject.id];
    let top = planetPos.y + 20;
    let left = planetPos.x + 20;

    const container = starmapRef.current;
    const hoverInfo = hoverInfoRef.current;

    if (container && hoverInfo) {
      const containerRect = container.getBoundingClientRect();
      const hoverInfoRect = hoverInfo.getBoundingClientRect();

      if (planetPos.x + hoverInfoRect.width + 20 > containerRect.width) {
        left = planetPos.x - hoverInfoRect.width - 20;
      }

      if (planetPos.y + hoverInfoRect.height + 20 > containerRect.height) {
        top = planetPos.y - hoverInfoRect.height - 20;
      }

      if (left < 0) left = 0;
      if (top < 0) top = 0;

      hoverInfoStyle = {
        top: `${top}px`,
        left: `${left}px`,
      };
    }
  }

  return (
    <section className="starmap-section">
      <h2>Planètes à Projets</h2>
      <div className="starmap-container" ref={starmapRef}>
        {projects.map((project) => (
          <div
            key={project.id}
            id={`planet-${project.id}`}
            className="planet"
            style={{ top: project.position.top, left: project.position.left }}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => openModal(project)} // Ouvre la modal et bloque le défilement
            data-title={project.title}
          >
            <img
              id={`planet-image-${project.id}`}
              src={project.icon}
              alt={project.title}
              onLoad={calculatePositions}
            />
          </div>
        ))}
        <svg className="lines-svg">
          {projects.map((project, index) => {
            if (index === 0) return null;
            const prevProject = projects[index - 1];
            const pos1 = planetPositions[prevProject.id];
            const pos2 = planetPositions[project.id];
            if (pos1 && pos2) {
              return (
                <line
                  key={project.id}
                  x1={pos1.x}
                  y1={pos1.y}
                  x2={pos2.x}
                  y2={pos2.y}
                  stroke="rgba(255, 186, 73, 0.8)"
                  strokeWidth="2"
                />
              );
            }
            return null;
          })}
        </svg>
        {hoveredProject && planetPositions[hoveredProject.id] && (
          <div
            ref={hoverInfoRef}
            className={`hover-info ${hoveredProject ? 'hover-info-active' : ''}`}
            style={hoverInfoStyle} 
          >
            <h3>Planète : {hoveredProject.title}</h3>
            <p>
              <strong>Description :</strong> {hoveredProject.description}
            </p>
            <p>
              <strong>Langage parlé :</strong> {hoveredProject.technologies.join(', ')}
            </p>
          </div>
        )}
      </div>
      {selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="project-image"
            />
            <p>{selectedProject.description}</p>
            <h3>Technologies utilisées :</h3>
            <ul>
              {selectedProject.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <a 
        href={selectedProject.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="github-link"
      >
        Voir sur GitHub
      </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default StarMap;
