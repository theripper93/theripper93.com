/* Libraries */
import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router';
import { useLocation } from "react-router-dom";

/* Components */
import Navbar from '../components/Navbar';
import FaqCard from '../components/FaqCard';

import { locData } from '../scripts/helpers.js';

export default function Info() {

  let location = useLocation();
  window.scrollTo(0, 0);

  const [faqs, setFaqs] = useState([]);

  locData().then((d) => setFaqs(d.faqs))

  const faqCards = () => {
    return (
      <div className="subpage-container">
        <h1>FAQs</h1>
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