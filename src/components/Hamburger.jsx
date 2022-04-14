import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hamburger = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='hamburger'>
        <div className={`hamburger-menu${isOpen ? "" : " hidden"}`}>
        {props.children}
        </div>
        <a className='hamburger-toggle' onClick={toggleMenu}><FontAwesomeIcon icon={["fas", "bars"]} size="xl" fixedWidth /></a>
    </div>
  );
};

export default Hamburger;