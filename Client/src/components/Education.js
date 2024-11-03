
import React from "react";
import "./styles/Education.css";

function Education() {
  const education = [
    {
      year: "2023-2024",
      title: "Intégrateur-Developpeur Web ",
      institution: "Web@cademie by Epitech",
      description:
        "Formation de 2 ans , permettant a des gens de devenir des professionnel en developpement web",
    },
    {
      year: "2017",
      title: "Bac Pro Gestions Administration",
      institution: "Lycée Eugenie Cotton",
      description: `Le titulaire du baccalauréat professionnel Gestion-Administration a pour mission de prendre en charge les activités relevant de la gestion administrative au sein dentreprises`,
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Formation</h2>
      <div className="timeline">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{edu.year}</h3>
              <h4>{edu.title}</h4>
              <p>{edu.institution}</p>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
