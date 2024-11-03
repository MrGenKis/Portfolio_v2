
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles/Nav.css';

function Nav() {
  return (
    <nav className="cockpit-nav">
      <ul>
        <li><a href="#home"><FontAwesomeIcon icon={faHome} size="3x" /></a></li>
        <li><a href="#about"><FontAwesomeIcon icon={faUser} size="3x" /></a></li>
        <li><a href="#projects"><FontAwesomeIcon icon={faProjectDiagram} size="3x" /></a></li>
        <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} size="3x" /></a></li>
      </ul>
    </nav>
  );
}

export default Nav;
