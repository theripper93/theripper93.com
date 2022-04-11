import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faPatreon, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faDiscord, faPatreon, faGithub, fas);

const ModuleCard = (props) => {
  return (
    <div className="module-card">
      <div className="side-contents">
        <FontAwesomeIcon icon={props.module.icon.split(" ")} size='5x' />
      </div>
      <div className="card-contents">
        <Link
          to={`module/${props.module.name}`}
          key={props.module.name}>
          <h4>{props.module.name}</h4>
        </Link>
        <article>
          <p>{props.module.desc}</p>
        </article>
        <p className={props.module.status}>{props.module.statusText}</p>
      </div>
      <Outlet />
    </div>
  )
}


export default ModuleCard