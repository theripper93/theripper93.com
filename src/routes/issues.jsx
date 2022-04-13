import IssueCard from '../components/IssueCard'
import { issues } from '../scripts/helpers.js';

export default function BugReport() {
  return (
    <div className="wrapper">
    {issues.map((issue, index) => <IssueCard key={index} issue={issue} />)}
    </div>
  )
}