import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Documentation from './pages/Documentation.js';
import Staff from './pages/Staff.js';

import Nav from './components/Nav';
import Footer from './components/footer.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
        <Footer />
        
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
