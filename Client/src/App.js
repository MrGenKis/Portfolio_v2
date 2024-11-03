// frontend/src/App.js

import React from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import AudioPlayer from './components/AudioPlayer';
import Meteors from './components/Meteors';
import StarMap from './components/StarMap';


function App() {
  return (
    <div className="App">
      <Meteors /> 
      <AudioPlayer />
      <Home />
      <Nav />
    </div>
  );
}

export default App;
