
/* React Router */
import { Link, Outlet, useNavigate } from "react-router-dom";
import { detectNavType } from '../../public/scripts/helpers.js';

/* Font Awesome*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faPatreon, faGithub } from '@fortawesome/free-brands-svg-icons';

/* CSS */
import '../../styles/items/card-hollow.css';


library.add(faDiscord, faPatreon, faGithub, fas);

const ModuleCard = (props) => {
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate(`module/${props.module.id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div className="wrapper" onClick={changeRoute}>
      <div className="card-hollow">
        <figure className="icon-wrapper">
          <FontAwesomeIcon icon={props.module.icon.split(" ")} size='5x' />
        </figure>
        <div className="info-wrapper">
          <hgroup>
            <h4>{props.module.name}</h4>
            <article>
              <p>{props.module.desc}</p>
            </article>
          </hgroup>
          <p className={`status ${props.module.status}`}>{props.module.statusText}</p>
        </div>
      </div>
      <Outlet />
    </div >

  )
}


export default ModuleCard