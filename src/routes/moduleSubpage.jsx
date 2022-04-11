import { moduleData, premiumMods, getGitReadme } from '../moduledata.js';
import { useState } from 'react';

const Subpage = (props) => {

  const [premiumData, setPremiumData] = useState(null);
  const [readme, setReadme] = useState(null);

  const moduleId = window.location.pathname.replace("/module/", "");
  const data = moduleData.find(mod => mod.id === moduleId);
  premiumMods().then((pData)=>{
    if(pData[moduleId]){
      setPremiumData(pData[moduleId]);
    }
  });

  if(data.link) getGitReadme(data.link,data.branch).then((rData)=>{
    setReadme(rData);
  });

  return (
    <section className='module'>
      <h1>{data.name}</h1>
      <p>{JSON.stringify(premiumData)}</p>
      <p>{JSON.stringify(data)}</p>
      <p>{readme}</p>
      <h2>Subheader</h2>
    </section>
  )
}

export default Subpage;