import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

const NavLinks = () => {
  return (
    <nav>
      <div className='links'>
        <a>Home</a>
        <p> / </p>
        <a>Modules</a>
        <p> / </p>
        <a>Installation</a>
      </div>
      <div className="website">
        <a href="https://discord.com/invite/F53gBjR97G"><FontAwesomeIcon icon={["fab", "discord"]} size="xl" fixedWidth /></a>
        <a href="https://github.com/theripper93"><FontAwesomeIcon icon={["fab", "github"]} size="xl" fixedWidth /></a>
        <a href="https://www.patreon.com/theripper93"><FontAwesomeIcon icon={["fab", "patreon"]} size="xl" fixedWidth /></a>
      </div>
    </nav>
  )
}

export default NavLinks