import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/mainpage/modulegrid.css';

const Searchbar = (props) => {
  const { buttonState, setSearchTerm, setButtonState } = props;

  function getColor(state) {
    if (state === 0) {
      return 'button-all';
    } else if (state === 1) {
      return 'button-paid';
    } else if (state == 2) {
      return 'button-free';
    }
  }

  return (
    <div className='searchbar'>
      <input type="text" label="Searchbar" placeholder="Search for a module" onChange={(event) => {
        setSearchTerm(event.target.value);
      }}></input>

      <button label="Module Filter" className={getColor(buttonState)} onClick={
        () => {
          setButtonState((buttonState + 1) % 3);
        }
      }>
        <FontAwesomeIcon icon="fa-solid fa-filter" size="xl" />
      </button>
    </div>
  )
}

export default Searchbar