import { useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';

/* Misc Libraries */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Components */
import Navbar from './components/Navbar';
import SkillCard from './components/SkillCard';
import Searchbar from './components/Searchbar';
import ModuleGrid from './components/ModuleGrid';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [buttonState, setButtonState] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="hero" id="start">
        <video autoPlay muted loop id="video-bg">
          <source src="./src/assets/cat.mp4" type="video/mp4" />
        </video>
        <h1>Heyo, I make Foundry VTT Modules</h1>
        <a href='#modulespage'><FontAwesomeIcon icon="fa-solid fa-arrow-down" size="5x" fixedWidth /></a>
      </header>
      <section className="module-list" id="modules">
        <h1>Modules</h1>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} buttonState={buttonState} setButtonState={setButtonState}></Searchbar>
        <ModuleGrid buttonState={buttonState} searchTerm={searchTerm}></ModuleGrid>
      </section>
      <section className="call-to-action">
        <div className='patreon'>
          <summary>
            <header>
              <h2>Patreon</h2>
              <h4>Access the collection</h4>
            </header>
            <ul>
              <li>Download and use my premium modules</li>
              <li>Join the <strong style={{ color: "var(--patreon)", fontWeight: "500" }}>Early Access</strong> tier for 3D canvas and other early access modules</li>
              <li>Access priority support for questions and troubleshooting</li>
              <li>Support the development of my free modules</li>
            </ul>
          </summary>
          <a href="https://www.patreon.com/theripper93" target="_blank"><button>Learn</button></a>
        </div>
        <div className="hub">
          <summary>
            <header>
              <h2>Module Hub</h2>
              <h4>Every update in one place</h4>
            </header>
            <ul>
              <li>Premium module updates in one place</li>
              <li>Be notified directly in Foundry</li>
              <li>Download and update without leaving your client</li>
            </ul>
          </summary>
          <a href="" target="_blank"><button>Download</button></a>
        </div>
        <div className='discord'>
          <summary>
            <header>
              <h2>Discord</h2>
              <h4>Join the community</h4>
            </header>
            <ul>
              <li>Get news and updates on my modules</li>
              <li>Find guides and resources from myself and others</li>
              <li>Updates on releases from partnered creators</li>
              <li>Join an active community of other users</li>
            </ul>
          </summary>
          <a href="https://discord.com/invite/F53gBjR97G" target="_blank"><button>Join</button></a>
        </div>
      </section>
      <footer id="contact">
        <main className='header-wrapper'>
          <h1>Need to contact me?</h1>
          <h4>I'm open to do paid projects for Foundry VTT</h4>
        </main>
        <main>
          <h3>My skills are in</h3>
          <figure>
            <SkillCard name="Javascript"></SkillCard>
            <SkillCard name="ThreeJS"></SkillCard>
            <SkillCard name="Foundry API"></SkillCard>
            <SkillCard name="HTML/CSS"></SkillCard>
          </figure>
        </main>
        <main>
          <h3>You can reach me via</h3>
          <main className="links">
            <a href="https://discordapp.com/users/195152093563191296" target="_blank"><FontAwesomeIcon icon={["fab", "discord"]} size="5x" fixedWidth /></a>
            <a href="mailto:tsplab@gmail.com" target="_blank"><FontAwesomeIcon icon="fa-solid fa-envelope" size="5x" fixedWidth /></a>
          </main>
        </main>
        <br></br>
        <p>For non-business related inquiries, please write a message on my discord server instead.</p>
      </footer>
    </div>
  )
}

export default App
