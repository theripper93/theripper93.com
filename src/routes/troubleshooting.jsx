import { troubleshooting } from '../scripts/helpers.js';
import { useState } from 'react';
import TroubleshootingCard from '../components/TroubleshootingCard.jsx';

import '../styles/subpage/troubleshooting.css';

export default function Troubleshooting() {

  const [troubleshootingData, setTroubleshootingData] = useState(troubleshooting);

  return (
    <div className="subpage-container troubleshooting">
      <div>
      <h3>Troubleshooting</h3>
      <p>If you are a Patreon supported you get the priority help with my modules. Please follow the Steps 1,2 and 3 then get back to me in the Discord channel with the information acquired and i'll assist you in resolving the issue.</p>
      </div>
      <div className="troubleshooting-wrapper noselect">
      {troubleshootingData.map((data, index) => <TroubleshootingCard key={index} data={data} troubleshootingData={troubleshootingData} setTroubleshootingData={setTroubleshootingData} />)}
      </div>
    </div>
  )
}