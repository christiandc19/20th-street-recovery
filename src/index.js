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
import FENTANYL from './routes/FENTANYL';
import HEROIN from './routes/HEROIN';
import KRATOM from './routes/KRATOM';
import MDMA from './routes/MDMA';
import METH from './routes/METH';
import OPIATE from './routes/OPIATE';



import AcuteStressDisorder from './routes/AcuteStressDisorder';
import ADHD from './routes/ADHD';

import Jobs from './routes/JOBS';




ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/alcohol' element={<ALCOHOL />} />
      <Route exact path='/cocaine' element={<COCAINE />} />
      <Route exact path='/fentanyl' element={<FENTANYL />} />
      <Route exact path='/heroin' element={<HEROIN />} />
      <Route exact path='/kratom' element={<KRATOM />} />
      <Route exact path='/mdma' element={<MDMA />} />
      <Route exact path='/meth' element={<METH />} />
      <Route exact path='/opiate' element={<OPIATE />} />





      <Route exact path='/acute-stress-disorder' element={<AcuteStressDisorder />} />
      <Route exact path='/adhd' element={<ADHD />} />


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

