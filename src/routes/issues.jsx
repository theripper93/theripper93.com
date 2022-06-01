import { useState } from 'react';
import IssueCard from '../components/subpage/IssueCard';
import { locData } from '../public/scripts/helpers.js';

export default function BugReport() {
  const [issues, setIssues] = useState([])
  const [bugReport, setBugReport] = useState(undefined)
  locData().then((d) => {
    setIssues(d.issues);
    setBugReport(d.issues[d.issues.length-1])
  })

  const [issueTemplate, setIssueTemplate] = useState({});

  const updateIssueTemplate = (e) => {
    setIssueTemplate({
      ...issueTemplate,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    });
    console.log({ ...issueTemplate });
  };

  const copyToClipboard = () => {
    const textArea = document.createElement('textarea');
    const content = `**${bugReport?.description[0].title}: **True\n**${bugReport?.description[1].title} **${issueTemplate.modules}\n**${bugReport?.description[2].title} **${issueTemplate.conflicts}\n**${bugReport?.description[3].title} **${issueTemplate.versions}\n**${bugReport?.description[4].title} **${issueTemplate.platforms}\n**${bugReport?.description[5].title} **${issueTemplate.description}\n**${bugReport?.description[6].title} **\n\n${issueTemplate.steps}\n\n**${bugReport?.screenerr}**`;
    textArea.value = content;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  };

  return (
    <div className="subpage-container issues">
      <h1>Issues</h1>
      {issues.map((issue, index) => index < issues.length - 1 && <IssueCard key={index} issue={issue} />)}
      <IssueCard issue={bugReport}>
        <ol>
          <li>
            <input onChange={updateIssueTemplate} type="checkbox" name="disabled" id="" defaultChecked={bugReport?.description[0].placeholder} />
            <label>{bugReport?.description[0].title}</label>
          </li>
          <li>
            <label>{bugReport?.description[1].title}</label><br></br>
            <input onChange={updateIssueTemplate} type="text" name="modules" id="" placeholder={bugReport?.description[1].placeholder} />
          </li>
          <li>
            <label>{bugReport?.description[2].title}</label>
            <input onChange={updateIssueTemplate} type="text" name="conflicts" id="" placeholder={bugReport?.description[2].placeholder} />
          </li>
          <li>
            <label>{bugReport?.description[3].title}</label>
            <input onChange={updateIssueTemplate} type="text" name="versions" id="" placeholder={bugReport?.description[3].placeholder} />
          </li>
          <li>
            <label>{bugReport?.description[4].title}</label>
            <input onChange={updateIssueTemplate} type="text" name="platforms" id="" placeholder={bugReport?.description[4].placeholder} />
          </li>
          <li>
            <label>{bugReport?.description[5].title}</label>
            <input onChange={updateIssueTemplate} type="text" name="description" id="" placeholder={bugReport?.description[5].placeholder} />
          </li>
          <li>
            <label>{bugReport?.description[6].title}</label><br></br>
            <textarea onChange={updateIssueTemplate} rows="5" name="steps" id="" placeholder={bugReport?.description[6].placeholder} />
          </li>
          <li>
            <input onChange={updateIssueTemplate} type="checkbox" name="screenshots" id="" defaultChecked={bugReport?.description[7].placeholder} />
            <label>{bugReport?.description[7].title}</label>
          </li>
        </ol>
        <footer className='issues footer'>
          <button id="submit-bug" onClick={copyToClipboard} disabled={!issueTemplate.disabled || !issueTemplate.screenshots}>Copy to Clipboard</button>
          {(!issueTemplate.disabled || !issueTemplate.screenshots) && <p className="paid">{bugReport?.footer}</p>}
        </footer>
      </IssueCard>
    </div>
  )
}