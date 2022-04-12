import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/* CSS */
import './index.css';
import App from './App';

/* Pages */
import ModuleSubpage from './routes/moduleSubpage';
import Faq from './routes/faq';
import Installation from './routes/installation';
import Troubleshooting from './routes/troubleshooting';
import Issues from './routes/issues';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="module" element={< ModuleSubpage />} >
        <Route path=":moduleId" element={< ModuleSubpage />} />
      </Route>
      <Route path="faq" element={<Faq/>} >
        <Route path="troubleshooting" element={<Troubleshooting/>} />
        <Route path="installation" element={<Installation />} />
        <Route path="issues" element={<Issues />} />
      </Route>
      <Route
        path="*"
        element={
          <section className='golden missing'>
            <h1>Nothing here</h1>
          </section>
        }></Route>
    </Routes>
  </Router>,
  rootElement
)
