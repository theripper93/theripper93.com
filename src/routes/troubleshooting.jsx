import { troubleshooting } from '../scripts/helpers.js';
import { useState } from 'react';
import TroubleshootingCard from '../components/TroubleshootingCard.jsx';

import '../styles/subpage/troubleshooting.css';

export default function Troubleshooting() {

  const [troubleshootingData, setTroubleshootingData] = useState(troubleshooting);

  return (
    <div className="subpage-container troubleshooting">
      <div>
      <h1>Troubleshooting</h1>
        <p>Patrons have access to <strong>priority help</strong> with my modules. If you are a patron, please follow Steps 1, 2 and 3, then get back to me in the Discord channel with the information from these steps and I'll assist you.</p>
      </div>
      <div className="troubleshooting-wrapper noselect">
      {troubleshootingData.map((data, index) => <TroubleshootingCard key={index} data={data} troubleshootingData={troubleshootingData} setTroubleshootingData={setTroubleshootingData} />)}
      </div>
    </div>
  )
}