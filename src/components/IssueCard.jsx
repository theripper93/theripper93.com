import { Link, Outlet } from "react-router-dom";
import '../styles/items/card-solid.css';

const IssueCard = (props) => {
  const { title, description, link } = props.issue;

  function getDescription(description){
    if(description instanceof Array){
      return (
        <ul>
          {description.map((v,i) => <li key={i}>{v}</li>)}
        </ul>
      )
    }else{
      return (
        <p>{description}</p>
      )
    }

  }
  return (
    <div className="wrapper">
      <div className="card-solid">
          <header className={`paidea-background`}>
            <h4>{title}</h4>
          </header>
          <article>
            {getDescription(description)}
          </article>
          <aside>
            {link && <Link>Link to page</Link>}
          </aside>
      </div>
      <Outlet />
    </div >
  )
}

/* Style to make bug report work

    white-space: pre-line;
    vertical-align: bottom;

*/


export default IssueCard;