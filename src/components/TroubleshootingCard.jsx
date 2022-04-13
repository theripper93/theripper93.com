import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TroubleshootingCard = (props) => {
  const { title, description, link, state } = props.data;
  const { setTroubleshootingData, troubleshootingData } = props;

  const toggleState = () => {
    const index = troubleshootingData.findIndex((e) => e.title === title);
    const newState = !troubleshootingData[index].state;
    let newData = [...troubleshootingData];
    newData[index].state = newState;
    setTroubleshootingData(newData);
  }

  return (
    <div className="wrapper" onClick={toggleState}>
      <div className={`connection ${state ? "free-background" : ""}`}></div>
      <div className={`card-solid${state ? " free-border" : " paid-border"}`}>
          <header className={`${state ? "free-background" : "paid-background"}`}>
          <FontAwesomeIcon size="3x" icon={state ? "fas fa-check" : "fas fa-times"} />
            <h3>{title}</h3>
          </header>
          <article>
            <p>{description}</p>
          </article>
          <aside>
            {link && <Link>Link to page</Link>}
          </aside>
      </div>
      <Outlet />
    </div >
  )
}


export default TroubleshootingCard