import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/* CSS */
import './index.css';
import App from './App';

/* Pages */
import ModuleSubpage from './routes/moduleSubpage';
import Installation from './routes/installation';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="module" element={< ModuleSubpage />} >
        <Route path=":moduleId" element={< ModuleSubpage />} />
      </Route>
      <Route path="installation" element={<Installation />} />
      <Route
        path="*"
        element={
          <section className='golden missing'>
            <h1>Nothing here</h1>
          </section>
        }></Route>
    </Routes>
  </BrowserRouter >,
  rootElement
)
