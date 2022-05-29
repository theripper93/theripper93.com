import { locData } from '../public/scripts/helpers.js';
import { useState } from 'react';
import TroubleshootingCard from '../components/Subpage/TroubleshootingCard.jsx';

import '../styles/subpage/troubleshooting.css';

export default function Troubleshooting() {

  const [troubleshootingData, setTroubleshootingData] = useState([]);

  locData().then((d) => setTroubleshootingData(d.troubleshooting))

  return (
    <div className="subpage-container troubleshooting">
      <header>
        <h1>Troubleshooting</h1>
        <h4>Patrons have access to <strong>priority help</strong> with my modules.</h4>
        <p>If you are a patron, please follow Steps 1, 2 and 3 then get back to me in #troubleshooting on Discord with the information from these steps and I'll assist you.</p>
      </header>
      <div className="troubleshooting-wrapper noselect">
        {troubleshootingData.map((data, index) => index < 5 && <TroubleshootingCard key={index} data={data} troubleshootingData={troubleshootingData} setTroubleshootingData={setTroubleshootingData} />)}
        <div className='step6'>
        {troubleshootingData.map((data, index) => index >= 5 && <TroubleshootingCard noarrow={true} key={index} data={data} troubleshootingData={troubleshootingData} setTroubleshootingData={setTroubleshootingData} />)}
        </div>
      </div>
    </div>
  )
}