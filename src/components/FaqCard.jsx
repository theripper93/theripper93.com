import { Link, Outlet, useNavigate } from "react-router-dom";
import { detectNavType } from '../moduledata';

const FaqCard = (props) => {

  const navigate = useNavigate();
  const changeRoute = () => {
    navigate(`module/${props.module.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="wrapper" onClick={changeRoute}>
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
            <Link>Link to page</Link>
          </aside>
        </div>
      </div>
      <Outlet />
    </div >

  )
}


export default FaqCard