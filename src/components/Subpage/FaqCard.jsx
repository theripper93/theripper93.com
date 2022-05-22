import '../styles/items/card-solid.css';

const FaqCard = (props) => {
  const { question, answer, link, status } = props.faq;
  return (
    <section className='faq'>
      <details className='card-solid'>
        <summary className={` noselect basic-background`}>
          <h3>{question}</h3>
        </summary>
        <article>
          <p>{answer}</p>
        </article>
      </details>
    </section >
  )
}


export default FaqCard