import IssueCard from '../components/IssueCard'
import { issues } from '../scripts/helpers.js';
import '../styles/subpage/issues.css';

export default function BugReport() {
  return (
    <div className="subpage-container">
      <h1>Issues</h1>
      {issues.map((issue, index) => <IssueCard key={index} issue={issue} />)}
    </div>
  )
}