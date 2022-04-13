import { Link, Outlet } from "react-router-dom";

const FaqCard = (props) => {
  const { question, answer, link } = props.faq;
  return (
    <div className="wrapper">
      <div className="card-solid">
          <header>
            <h4>{question}</h4>
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