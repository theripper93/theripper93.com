import { Link, Outlet } from "react-router-dom";
import '../styles/items/card-solid.css';

const FaqCard = (props) => {
  const { question, answer, link, status } = props.faq;
  return (
    <div>
      <details className="card-solid">
        <summary className={`${status}-background noselect`}>
          <h4>{question}</h4>
        </summary>
        <article>
          <p>{answer}</p>
        </article>
      </details>
    </div >
  )
}


export default FaqCard