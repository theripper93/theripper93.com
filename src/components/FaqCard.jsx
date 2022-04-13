import { Link, Outlet } from "react-router-dom";
import '../styles/items/card-solid.css';

const FaqCard = (props) => {
  const { question, answer, link, status } = props.faq;
  return (
    <div className="wrapper">
      <div className="card-solid">
          <header className={`${status}-background`}>
            <h3>{question}</h3>
          </header>
          <article>
            <p>{answer}</p>
          </article>
          <aside>
            {link && <Link>Link to page</Link>}
          </aside>
      </div>
      <Outlet />
    </div >
  )
}


export default FaqCard