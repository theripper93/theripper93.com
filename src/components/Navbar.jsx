import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { detectNavType } from '../scripts/helpers.js';
import { useState } from 'react';

import Hamburger from './Hamburger';

import '../styles/Navbar.css';

const Navbar = (props) => {

  let location = useLocation();
  const [useHamburger, setUseHamburger] = useState(window.innerWidth < 550);
  window.addEventListener('resize', () => {
      setUseHamburger(window.innerWidth < 550);
  });

  const homeButtons = () => {
    return (
      <div className='home-buttons'>
        <p> / </p>
        <HashLink smooth to='/#modules'>Modules</HashLink>
        <p> / </p>
        <HashLink smooth to='/#hub'>Hub</HashLink>
        <p> / </p>
        <HashLink smooth to='/#contact'>Contact</HashLink>
      </div>
    );
  };

  const faqButtons = () => {
    return (
      <div className='home-buttons'>
        <p> / </p>
        <HashLink smooth to='./installation'>Installation</HashLink>
        <p> / </p>
        <HashLink smooth to='./troubleshooting'>Troubleshooting</HashLink>
        <p> / </p>
        <HashLink smooth to='./issues'>Issues</HashLink>
      </div>
    );
  };

  const linkButtons = () => {
    return (
      <div className='links'>
        <div className='landing'>
          <HashLink smooth to='/#'>Home</HashLink>
          {detectNavType(location) == "" && homeButtons()}
        </div>
        <p>/</p>
        <div className="subpage">
          <Link to='/faq'>FAQ</Link>
          {detectNavType(location) == "faq" && faqButtons()}
        </div>
      </div>
    )
  };

  const hamburgerButtons = () => {
    return (
      <Hamburger>
        {linkButtons()}
      </Hamburger>
    )
  };
  
  return (
    <nav>
      {useHamburger ? hamburgerButtons() : linkButtons()}
      <div className="socials">
        <a href="https://discord.com/invite/F53gBjR97G" target="_blank"><FontAwesomeIcon icon={["fab", "discord"]} size="xl" fixedWidth /></a>
        <a href="https://github.com/theripper93" target="_blank"><FontAwesomeIcon icon={["fab", "github"]} size="xl" fixedWidth /></a>
        <a href="https://www.patreon.com/theripper93" target="_blank"><FontAwesomeIcon icon={["fab", "patreon"]} size="xl" fixedWidth /></a>
      </div>
    </nav>
  )
}

export default Navbar