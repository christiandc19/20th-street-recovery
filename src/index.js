import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import TreatmentPage from './routes/TreatmentPage'
import MissionPage from './routes/MissionPage'
import AboutPage from './routes/AboutPage'
import InsurancePage from './routes/InsurancePage'
import ContactPage from './routes/ContactPage'
import COCAINE from './routes/COCAINE';
import ALCOHOL from './routes/ALCOHOL';

import AcuteStressDisorder from './routes/AcuteStressDisorder';
import Jobs from './routes/JOBS';




ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/alcohol' element={<ALCOHOL />} />
      <Route exact path='/cocaine' element={<COCAINE />} />



      <Route exact path='/acute-stress-disorder' element={<AcuteStressDisorder />} />

      <Route exact path='/jobs' element={<Jobs />} />
      <Route exact path='/treatment' element={<TreatmentPage />} />
      <Route exact path='/mission' element={<MissionPage />} />
      <Route exact path='/about-us' element={<AboutPage />} />
      <Route exact path='/insurance' element={<InsurancePage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

