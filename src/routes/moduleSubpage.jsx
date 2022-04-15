import { useState } from 'react';
import { locData, premiumMods } from '../scripts/helpers.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* CSS */
import '../styles/items/card-solid.css';
import '../styles/modulepage/modulepage.css';
import '../styles/modulepage/intro.css';

/* Components */
import Video from '../components/Video.jsx';
import Navbar from '../components/Navbar';
import FaqCard from '../components/FaqCard';
import ModuleGuide from '../components/ModuleGuide.jsx';


const Subpage = () => {

  const [premiumData, setPremiumData] = useState(null);
  const [data, setData] = useState({});

  const moduleId = window.location.hash.split('/').pop();

  locData().then(d => setData(d.modules.find(mod => mod.id === moduleId)))
  premiumMods().then((pData) => {
    if (pData[moduleId]) {
      setPremiumData(pData[moduleId]);
    }
  });

  const guides = data.guides ?? [];
  const troubleshooting = data.troubleshooting ?? [];

  return (
    <div className={`subpage ${data.status}-wrapper`}>
      <Navbar></Navbar>
      <section className='module-intro'>
        <main>
          <article className='card-solid'>
            <div className='content-wrapper'>
              <header className={`${data.status}-background`}>
                <h1>{data.name}</h1>
              </header>
              <p>{data.fulldesc}</p>
              <a href={premiumData?.downloadURL ?? data.link} rel="noreferrer" target="_blank"><button className={`${data.status}-background`}>{premiumData?.downloadURL ? "Download" : "GitHub"}</button></a>
            </div>
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
        {(troubleshooting.length > 0 || guides.length > 0) && <FontAwesomeIcon onClick={()=>  document.getElementById("info").scrollIntoView({ behavior: 'smooth', block: 'start' })} icon="fa-solid fa-arrow-down" size="5x" fixedWidth />}
      </section>
      <section className='additional content' id="info">
        {troubleshooting.length > 0 && <section className='module-troubleshooting'>
          <h2>Troubleshooting</h2>
          <main>
            {troubleshooting.map((troub, index) => <FaqCard key={index} faq={{ question: troub.title, answer: troub.desc, status: "basic" }}></FaqCard>)}
          </main>
        </section>}
        {guides.length > 0 && <section className='module-guides'>
          <h2>Guides</h2>
          <main>
            {guides.map((guide, index) => <ModuleGuide key={index} title={guide.title} url={guide.url}></ModuleGuide>)}
          </main>
        </section>}
      </section>
    </div>
  )
}

export default Subpage;