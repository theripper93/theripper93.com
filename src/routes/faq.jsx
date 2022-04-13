/* Libraries */
import React from 'react';
import { Outlet } from 'react-router';
import { useLocation } from "react-router-dom";

/* Components */
import Navbar from '../components/Navbar';
import FaqCard from '../components/FaqCard';

import { faqs } from '../scripts/helpers.js';

export default function Info() {

  let location = useLocation();

  const faqCards = () => {
    return (
      <div className="card-container-page">
        {faqs.map((faq, index) => <FaqCard key={index} faq={faq} />)}
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