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
import ModuleCard from './components/ModuleCard';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="installation" element={<Installation />} />
      <Route path="module" element={< ModuleCard />} />
      <Route
        path="*"
        element={
          <p>Nothing here</p>
        }></Route>
    </Routes>
  </BrowserRouter >,
  rootElement
)
