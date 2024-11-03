
import React from "react";
import "./styles/Education.css";

function Education() {
  const education = [
    {
      year: "2023-2024",
      title: "Intégrateur-Developpeur Web ",
      institution: "Web@cademie by Epitech",
      description:
        "Formation de deux ans visant à former des professionnels du développement web.",
    },
    {
      year: "2017",
      title: "Bac Pro Gestions Administration",
      institution: "Lycée Eugenie Cotton",
      description: `Le titulaire du baccalauréat professionnel Gestion-Administration est chargé de gérer les activités administratives au sein des entreprises.
`,
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Formations</h2>
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
