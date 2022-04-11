import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Installation from './routes/installation';
import ModuleSubpage from './routes/moduleSubpage';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="installation" element={<Installation />} />
      <Route path="module" element={< ModuleSubpage />} >
        <Route path=":moduleId" element={< ModuleSubpage />} />
      </Route>
      <Route
        path="*"
        element={
          <section className='golden no-match'>
            <h1>Nothing here</h1>
          </section>
        }></Route>
    </Routes>
  </BrowserRouter >,
  rootElement
)
