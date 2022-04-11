import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const NavLinks = () => {
  return (
    <nav>
      <div className='links'>
        <div className='landing'>
          <Link to='/'>Home</Link>
          <p> / </p>
          <Link to='/#modules'>Modules</Link>
          <p> / </p>
          <Link to='/#contact'>Contact</Link>
          <p>//</p>
          <Link to='/installation'>Installation</Link>
        </div>
      </div>
      
      <div className="socials">
        <a href="https://discord.com/invite/F53gBjR97G" target="_blank"><FontAwesomeIcon icon={["fab", "discord"]} size="xl" fixedWidth /></a>
        <a href="https://github.com/theripper93" target="_blank"><FontAwesomeIcon icon={["fab", "github"]} size="xl" fixedWidth /></a>
        <a href="https://www.patreon.com/theripper93" target="_blank"><FontAwesomeIcon icon={["fab", "patreon"]} size="xl" fixedWidth /></a>
      </div>
      <Outlet />
    </nav>
  )
}

export default NavLinks