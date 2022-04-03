import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Documentation from './pages/Documentation.js';
import Staff from './pages/Staff.js';

import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav';
import GitHubLink from './components/GitHubLink.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <div className='min-h-screen bg-gray-5'>
      <Router>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/documentation" element={<Documentation />}/>
            <Route path="/staff" element={<Staff />}/>
          </Routes>
        <GitHubLink />
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
