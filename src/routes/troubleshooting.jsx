import { troubleshooting } from '../scripts/helpers.js';
import TroubleshootingCard from '../components/TroubleshootingCard.jsx';

export default function Troubleshooting() {
  return (
    <div className="wrapper">
    {troubleshooting.map((data, index) => <TroubleshootingCard key={index} data={data} />)}
    </div>
  )
}