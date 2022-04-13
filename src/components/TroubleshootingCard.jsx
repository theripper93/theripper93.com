import { Link, Outlet } from "react-router-dom";

const TroubleshootingCard = (props) => {
  const { title, description, link } = props.data;
  return (
    <div className="wrapper">
      <div className="card-solid">
        <div className="info-wrapper">
          <header>
            <h3>FAQ Header</h3>
          </header>
          <article>
            <ul>
              <li>{title}</li>
              <li>{description}</li>
            </ul>
          </article>
          <aside>
            {link && <Link>Link to page</Link>}
          </aside>
        </div>
      </div>
      <Outlet />
    </div >
  )
}


export default TroubleshootingCard