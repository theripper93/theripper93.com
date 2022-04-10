import { useState } from 'react';
import './App.css';
import { moduleData } from './moduledata.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import Navlinks from './Components/NavLinks';
import ModuleCard from './Components/ModuleCard';
import SkillCard from './Components/SkillCard';
import Searchbar from './Components/SearchBar';

library.add(fab);

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [buttonState, setButtonState] = useState(0);

  return (
    <div className="App">
      <nav>
        <Navlinks></Navlinks>
        <div className="website">
          <FontAwesomeIcon icon={["fab", "discord"]} size="xl" fixedWidth />
          <FontAwesomeIcon icon={["fab", "github"]} size="xl" fixedWidth />
          <FontAwesomeIcon icon={["fab", "patreon"]} size="xl" fixedWidth />
        </div>
      </nav>
      <section className="hero">
        <video autoPlay muted loop id="video-bg">
          <source src="./src/cat.mp4" type="video/mp4" />
        </video>
        <h1>Heyo, I make Foundry VTT Modules</h1>
        <FontAwesomeIcon icon={faArrowDown} size="5x" fixedWidth />
      </section>
      <section className="module-list">
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} buttonState={buttonState} setButtonState={setButtonState}></Searchbar>
        <main className='module-grid'>
          {moduleData.filter((module) => {
            return module.name.toLowerCase().includes(searchTerm.toLowerCase());
          }).filter((module) => {
            if (buttonState === 0) {
              return true;
            } else if (buttonState === 1) {
              return module.status === 'paid' || module.status === 'paidea';
            } else if (buttonState === 2) {
              return module.status === 'free';
            }
          }).map((module, index) => <ModuleCard module={module} key={index}></ModuleCard>)}
        </main>
      </section>
      <section className="call-to-action">
        <div className='patreon'>
          <h3>Patreon</h3>
          <h4>Access the collection</h4>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className='discord'>
          <h3>Discord</h3>
          <h4>Join the community</h4>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </section>
      <footer>
        <main className='header-wrapper'>
          <h1>Need to contact me?</h1>
          <h4>I'm open to do paid projects for Foundry VTT</h4>
        </main>
        <main>
          <h2>My skills are in</h2>
          <figure>
            <SkillCard name="Javascript"></SkillCard>
            <SkillCard name="ThreeJS"></SkillCard>
            <SkillCard name="Foundry API"></SkillCard>
            <SkillCard name="HTML/CSS"></SkillCard>
          </figure>
        </main>
        <main>
          <h2>You can reach me via</h2>
          <main className="links">
            <FontAwesomeIcon icon={["fab", "discord"]} size="5x" fixedWidth />
            <FontAwesomeIcon icon={faEnvelope} size="5x" fixedWidth />
          </main>
        </main>
        <br></br>
        <p>For non-business related inquiries, please write a message on my discord server instead.</p>
      </footer>
    </div>
  )
}

export default App
