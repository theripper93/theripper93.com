import { Outlet } from 'react-router';
import App from '../App';
import Navbar from '../components/Navbar';
import { useLocation } from "react-router-dom";
import FaqCard from '../components/FaqCard';

export default function Info() {

  let location = useLocation();

  const faqCards = () => {
    return (
      <div className="wrapper">
        {faqData.map((faq, index) => <FaqCard key={index} faq={faq} />)}
      </div>
    )
  };

  return (
    <div className='wrapper'>
      <Navbar></Navbar>
      <Outlet />
      {location.pathname.endsWith('faq') && faqCards()}
    </div>
  )
}

const faqData = [
  {
    question: 'What is the purpose of this website?',
    answer: 'who knows',
  }
];