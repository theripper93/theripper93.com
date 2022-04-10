import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Searchbar = (props) => {
  const { searchTerm, buttonState, setSearchTerm, setButtonState } = props;

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
      <input type="text" onChange={(event) => {
        setSearchTerm(event.target.value);
      }}></input>
      <button className={getColor(buttonState)} onClick={
        (event) => {
          setButtonState((buttonState + 1) % 3);
          console.log(buttonState);
        }
      }>
        <FontAwesomeIcon icon="fa-solid fa-filter" size="xl" />
      </button>
    </div>
  )
}

export default Searchbar