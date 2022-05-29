
const FaqCard = (props) => {
  const { question, answer } = props.faq;
  return (
    <section className='faq'>
      <details className='card-solid'>
        <summary className={` noselect basic-background`}>
          <h4>{question}</h4>
        </summary>
        <article>
          <p>{answer}</p>
        </article>
      </details>
    </section>
  );
};

export default FaqCard;
