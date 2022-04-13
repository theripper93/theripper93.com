import { Link, Outlet } from "react-router-dom";

const FaqCard = (props) => {

  return (
    <div className="wrapper">
      <div className="card-solid">
        <div className="info-wrapper">
          <header>
            <h3>FAQ Header</h3>
          </header>
          <article>
            <ul>
              <li>Question</li>
              <li>Answer</li>
            </ul>
          </article>
          <aside>
            {props.link && <Link>Link to page</Link>}
          </aside>
        </div>
      </div>
      <Outlet />
    </div >
  )
}


export default FaqCard