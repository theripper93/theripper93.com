import { moduleData, premiumMods, getGitReadme } from '../moduledata.js';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import App from '../App';
import Video from '../components/Video.jsx';

const Subpage = (props) => {

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
      <section className='module'>
        <header>
          <article>
            <h1>{data.name}</h1>
            <p>{data.fulldesc}</p>
          </article>
          <aside>
            <Video></Video>
            <p>{JSON.stringify(premiumData)}</p>
            <p>{JSON.stringify(data)}</p>
          </aside>
        </header>
        <section>
          <h2>Guides</h2>
        </section>
      </section>
    </div>
  )
}

export default Subpage;