import React from 'react';
import ReactDOM from 'react-dom/client';
import './resume.css';
// import App from './App';
import Portfolio from './Portfolio';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Experience from "./Experience";
import Project from "./Project";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/project' element={<Project />}></Route>
          <Route path='/' element={<Portfolio />}></Route>
        </Routes>
      </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
