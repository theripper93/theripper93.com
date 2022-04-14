import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './App.css';
import './styles/mainpage/mainpage.css';
import './styles/mainpage/cta.css';
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
      <header className="hero" id="">
        <video autoPlay muted loop id="video-bg">
          <source src="./src/assets/videobanner.mp4" type="video/mp4" />
        </video>
        <h1>Heyo, I make <a href="https://foundryvtt.com/" rel="noreferrer" target="_blank">Foundry VTT</a> Modules</h1>
        <HashLink smooth to='/#modules'><FontAwesomeIcon icon="fa-solid fa-arrow-down" size="5x" fixedWidth /></HashLink>
      </header>
      <section className="module list" id="modules">
        <h1>Modules</h1>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} buttonState={buttonState} setButtonState={setButtonState}></Searchbar>
        <ModuleGrid buttonState={buttonState} searchTerm={searchTerm}></ModuleGrid>
      </section>
      <section className="cta" id="hub">
        <div className='card-cta status patreon'>
          <summary>
            <header>
              <h2>Patreon</h2>
              <h4>Access the collection</h4>
            </header>
            <ul>
              <li>Download and use my premium modules</li>
              <li>Join the <strong>Early Access</strong> tier for 3D canvas and other early access modules</li>
              <li>Access priority support for questions and troubleshooting</li>
              <li>Support the development of my free modules</li>
            </ul>
          </summary>
          <a href="https://www.patreon.com/theripper93" rel="noreferrer" target="_blank"><button>View</button></a>
        </div>
        <div className="card-cta status hub">
          <summary>
            <header>
              <h2>Hub</h2>
              <h4>Everything in one place</h4>
            </header>
            <ul>
              <li>Be alerted of critical updates for both free and premium modules</li>
              <li>Notifications directly in Foundry</li>
              <li>Premium module updates in one place</li>
              <li>Works automagically between updates</li>
              <li>It's <strong>free</strong> </li>
            </ul>
          </summary>
          <a href="https://www.foundryvtt-hub.com/package/theripper-premium-hub/" rel="noreferrer" target="_blank"><button>Download</button></a>
        </div>
        <div className='card-cta status discord'>
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
          <a href="https://discord.com/invite/F53gBjR97G" rel="noreferrer" target="_blank"><button>Join</button></a>
        </div>
      </section>
      <footer className="golden" id="contact">
        <summary>
          <main className='header-wrapper'>
            <h1>Need to contact me?</h1>
            <h2>I'm open to do paid projects for Foundry VTT</h2>
          </main>
          <main className='skillset'>
            <h3>My skills are in</h3>
            <figure>
              <SkillCard name="Javascript"></SkillCard>
              <SkillCard name="ThreeJS"></SkillCard>
              <SkillCard name="Foundry API"></SkillCard>
              <SkillCard name="HTML/CSS"></SkillCard>
            </figure>
          </main>
          <main className='contact-info'>
            <h3>You can reach me via</h3>
            <main className="links">
              <a href="https://discordapp.com/users/195152093563191296" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={["fab", "discord"]} size="5x" fixedWidth /></a>
              <a href="mailto:tsplab@gmail.com" rel="noreferrer" target="_blank"><FontAwesomeIcon icon="fa-solid fa-envelope" size="5x" fixedWidth /></a>
            </main>
            <br></br>
            <p>For non-business related inquiries, please write a message on my discord server instead.</p>
          </main>
        </summary>
        <aside>
          <p id="credit">Site designed and developed with love by <a href="https://www.github.com/casanovasekova" rel="noreferrer" target="_blank">
            April Tao </a></p>
        </aside>
      </footer>
    </div>
  )
}

export default App
