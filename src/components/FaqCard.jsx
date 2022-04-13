import { Link, Outlet } from "react-router-dom";

const FaqCard = (props) => {
  const { question, answer, link } = props.faq;
  return (
    <div className="wrapper">
      <div className="card-solid">
        <div className="info-wrapper">
          <header>
            <h3>FAQ Header</h3>
          </header>
          <article>
            <ul>
              <li>{question}</li>
              <li>{answer}</li>
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


export default FaqCard