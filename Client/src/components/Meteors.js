
import React, { useEffect } from 'react';
import './styles/Meteors.css';

function Meteors() {
  useEffect(() => {
    const createMeteor = () => {
      const meteor = document.createElement("div");
      meteor.className = "meteor";
      document.body.appendChild(meteor);

      meteor.style.left = `${Math.random() * 100}vw`;
      meteor.style.animationDuration = `10s`; 

      meteor.addEventListener("animationend", () => {
        meteor.remove();
      });
    };

    const meteorInterval = setInterval(createMeteor, 5000); 

    return () => clearInterval(meteorInterval);
  }, []);

  return null;
}

export default Meteors;
