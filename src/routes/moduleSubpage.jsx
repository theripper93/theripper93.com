import { useState } from 'react';
import { locData, premiumMods } from '../public/scripts/helpers.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Components */
import Navbar from '../components/navbar/Navbar';
import FaqCard from '../components/subpage/FaqCard';
import VideoCard from '../components/Subpage/VideoCard.jsx';
import Video from '../components/subpage/Video.jsx';

const Subpage = () => {
  const [premiumData, setPremiumData] = useState(null);
  const [data, setData] = useState({});

  const moduleId = window.location.hash.split('/').pop();

  locData().then((d) => setData(d.modules.find((mod) => mod.id === moduleId)));
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
      <section className={`module`}>
        <main className={`module wrapper`}>
          <main className={`intro${!data.media ? ' no-video' : ''}`}>
            <article className='card-solid'>
              <div className='content-wrapper'>
                <header className={`${data.status}-background`}>
                  <h1>{data.name}</h1>
                </header>
                <p>{data.fulldesc}</p>
                <a
                  href={premiumData?.downloadURL ?? data.link}
                  rel='noreferrer'
                  target='_blank'
                >
                  <button className={`${data.status}-background`}>
                    {premiumData?.downloadURL ? 'Download' : 'GitHub'}
                  </button>
                </a>
              </div>
              <footer className='badge'>
                <div className={data.status}>{data.statusText}</div>
              </footer>
            </article>
            {data.media && (
              <aside>
                <Video module={data}></Video>
              </aside>
            )}
          </main>
        </main>
        {(troubleshooting.length > 0 || guides.length > 0) && (
          <>
            <FontAwesomeIcon
              onClick={() =>
                document
                  .getElementById('info')
                  .scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
              icon='fa-solid fa-arrow-down'
              size='5x'
              fixedWidth
            />
            <section className='additional' id='info'>
              {troubleshooting.length > 0 && (
                <section className='troubleshooting'>
                  <h2>Troubleshooting</h2>
                  <main>
                    {troubleshooting.map((troub, index) => (
                      <FaqCard
                        key={index}
                        faq={{
                          question: troub.title,
                          answer: troub.desc,
                          status: 'basic',
                        }}
                      ></FaqCard>
                    ))}
                  </main>
                </section>
              )}
              {guides.length > 0 && (
                <section className='guides'>
                  <h2>Guides</h2>
                  <main className='guides-grid'>
                    {guides.map((guide, index) => (
                      <VideoCard
                        key={index}
                        title={guide.title}
                        url={guide.url}
                      />
                    ))}
                  </main>
                </section>
              )}
            </section>
          </>
        )}
      </section>
    </div>
  );
};

export default Subpage;
