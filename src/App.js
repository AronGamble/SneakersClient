import React from 'react';
import About from './components/about/About';
import Team from './components/team/Team';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Process from './components/process/Process';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

import './App.css';

function App() {
  return (
    <>
      <Home></Home>
      <About></About>
      <Team></Team>
      <Services></Services>
      <Work></Work>
      <Process></Process>
      <Skills></Skills>
      <Contact></Contact>     
    </>
  );
}

export default App;