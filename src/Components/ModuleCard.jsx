import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

const ModuleCard = (props) => {
  return (
    <div className="module-card">
      <div className="side-contents">
        <FontAwesomeIcon icon={props.module.icon.split(" ")} size='5x' />
      </div>
      <div className="card-contents">
        <h4>{props.module.name}</h4>
        <article>
          <p>{props.module.desc}</p>
        </article>
        <p className={props.module.status}>{props.module.statusText}</p>
      </div>
    </div>
  )
}


export default ModuleCard