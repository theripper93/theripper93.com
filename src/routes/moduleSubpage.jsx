import { moduleData, premiumMods } from '../scripts/helpers.js';
import { useState } from 'react';

import '../styles/subpage/modulepage.css';
import '../styles/items/card-solid.css';
import Video from '../components/Video.jsx';
import Navbar from '../components/Navbar';


const Subpage = () => {

  const [premiumData, setPremiumData] = useState(null);

  const moduleId = window.location.pathname.replace("/module/", "");
  const data = moduleData.find(mod => mod.id === moduleId);
  premiumMods().then((pData) => {
    if (pData[moduleId]) {
      setPremiumData(pData[moduleId]);
    }
  });

  return (
    <div className='wrapper'>
      <Navbar></Navbar>
      <section className='module-page'>
        <main>
          <article className='card-solid'>
            <header className='module-page'>
              <h1 className={`${data.status}-background`}>{data.name}</h1>
              <p>{data.fulldesc}</p>
            </header>
            <a href={premiumData?.downloadURL ?? `https://www.foundryvtt-hub.com/package/${moduleId}/`} rel="noreferrer" target="_blank"><button className={`${data.status}-background`}>Download</button></a> 
            <footer className="badge">
              <div className={data.status}>
                {data.statusText}
              </div>
            </footer>
          </article>
          <aside>
            {data.media && <Video module={data}></Video>}
          </aside>
        </main>
{/*
     <section>
          <h2>Guides</h2>
          <p>{JSON.stringify(premiumData)}</p>
          <p>{JSON.stringify(data)}</p>
        </section> 
*/}
      </section>
    </div>
  )
}

export default Subpage;