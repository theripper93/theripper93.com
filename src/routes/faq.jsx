/* Libraries */
import React from 'react';
import { Outlet } from 'react-router';
import { useLocation } from "react-router-dom";

/* CSS */
import App from '../App';

/* Components */
import Navbar from '../components/Navbar';
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
    link: undefined,
  }
];