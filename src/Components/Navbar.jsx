import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav>
      <div className='links'>
        <div className='landing'>
          <HashLink smooth to='/#'>Home</HashLink>
          <p> / </p>
          <HashLink smooth to='/#modules'>Modules</HashLink>
          <p> / </p>
          <HashLink smooth to='/#hub'>Hub</HashLink>
          <p> / </p>
          <HashLink smooth to='/#contact'>Contact</HashLink>
        </div>
          <p className="space">•</p>
          <div className="subpage">
            <Link to='/installation'>Installation</Link>
        </div>
      </div>

      <div className="socials">
        <a href="https://discord.com/invite/F53gBjR97G" target="_blank"><FontAwesomeIcon icon={["fab", "discord"]} size="xl" fixedWidth /></a>
        <a href="https://github.com/theripper93" target="_blank"><FontAwesomeIcon icon={["fab", "github"]} size="xl" fixedWidth /></a>
        <a href="https://www.patreon.com/theripper93" target="_blank"><FontAwesomeIcon icon={["fab", "patreon"]} size="xl" fixedWidth /></a>
      </div>
    </nav>
  )
}

export default Navbar