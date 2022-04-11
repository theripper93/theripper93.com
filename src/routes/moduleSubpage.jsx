import { moduleData, premiumMods, getGitReadme } from '../moduledata.js';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  function getColor(status) {
    if (status === "free") {
      return 'var(--free)';
    } else if (status === "paid") {
      return 'var(--patreon)';
    } else if (status === 'paidea') {
      return 'var(--accent)';
    }
  }

  let status = data.status;
  const color = getColor(status);

  return (
    <div className='wrapper'>
      <Navbar></Navbar>
      <section className='module'>
        <main>
          <article>
            <header className='module'>
              <h1>{data.name}</h1>
              <p>{data.fulldesc}</p>
            </header>
            <button>Download</button>
            <footer class="badge">
              <div className='status badge' style={{color: {color}}}>
                {data.status}
              </div>
            </footer>
          </article>
          <aside>
            {data.media && <Video module={data}></Video>}
          </aside>
        </main>
     <section>
          <h2>Guides</h2>
          <p>{JSON.stringify(premiumData)}</p>
          <p>{JSON.stringify(data)}</p>
        </section> 
      </section>
    </div>
  )
}

export default Subpage;