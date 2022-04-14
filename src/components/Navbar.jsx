import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { detectNavType } from '../scripts/helpers.js';
import { useState } from 'react';

import Hamburger from './Hamburger';

import '../styles/items/navbar.css';

const Navbar = () => {

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
    const isModPage = detectNavType(location).includes("module/") ? "./faq" : "";
    return (
      <div className='home-buttons'>
        <p> / </p>
        <HashLink smooth to={`.${isModPage}/installation`}>Installation</HashLink>
        <p> / </p>
        <HashLink smooth to={`.${isModPage}/troubleshooting`}>Troubleshooting</HashLink>
        <p> / </p>
        <HashLink smooth to={`.${isModPage}/issues`}>Issues</HashLink>
      </div>
    );
  };

  const linkButtons = () => {
    return (
      <div className='links'>
        <div className='landing'>
          <HashLink smooth to='/#'>Home</HashLink>
          {(detectNavType(location) === "/" || !detectNavType(location).includes("/")) && homeButtons()}
        </div>
        {!detectNavType(location).includes("module/") && <p>/</p>}
        <div className="subpage">
          {!detectNavType(location).includes("module/") && <Link to='/faq'>FAQ</Link>}
          {(detectNavType(location).includes("faq") || detectNavType(location).includes("module/")) && faqButtons()}
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
        <a href="https://discord.com/invite/F53gBjR97G" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "discord"]} size="xl" fixedWidth /></a>
        <a href="https://github.com/theripper93" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "github"]} size="xl" fixedWidth /></a>
        <a href="https://www.patreon.com/theripper93" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "patreon"]} size="xl" fixedWidth /></a>
      </div>
    </nav>
  )
}

export default Navbar