import { Outlet } from 'react-router';
import App from '../App';
import Navbar from '../components/Navbar';
import { useLocation } from "react-router-dom";

export default function Info() {

  let location = useLocation();

  const faqCards = () => {
    return (
      <section className="info">
      <h1>Hello World</h1>
    </section>
    )
  };

  return (
    <div className='wrapper'>
      <Navbar></Navbar>
      <Outlet />
      {location.endsWith('faq') && faqCards()}
    </div>
  )
}