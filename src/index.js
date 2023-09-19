import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import DetoxPage from './routes/DetoxPage'
import AboutPage from './routes/AboutPage'
import ResidencePage from './routes/ResidencePage'
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
import OPIOID from './routes/OPIOID';
import OXYCODONE from './routes/OXYCODONE';
import PRESCRIPTIONS from './routes/PRESCRIPTIONS';
import XANAX from './routes/XANAX';
import BENZODIAZEPINES from './routes/BENZODIAZEPINES';
import STIMULANT from './routes/STIMULANT';

import MAT from './routes/MAT';
import ITA from './routes/ITA';


import DetoxHeroin from './routes/DetoxHeroin';
import DetoxAlcohol from './routes/DetoxAlcohol';
import DetoxCocaine from './routes/DetoxCocaine';
import DetoxBenzodiazepines from './routes/DetoxBenzodiazepines';
import DetoxMethamphetamine  from './routes/DetoxMethamphetamine';
import DetoxMarijuana  from './routes/DetoxMarijuana';



import Jobs from './routes/JOBS';
import SA from './routes/SA';


ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/'element={<App />} />
      <Route exact path='/alcohol' element={<ALCOHOL />} />
      <Route exact path='/cocaine' element={<COCAINE />} />
      <Route exact path='/fentanyl' element={<FENTANYL />} />
      <Route exact path='/heroin' element={<HEROIN />} />
      <Route exact path='/kratom' element={<KRATOM />} />
      <Route exact path='/mdma' element={<MDMA />} />
      <Route exact path='/meth' element={<METH />} />
      <Route exact path='/opiate' element={<OPIATE />} />
      <Route exact path='/opioid' element={<OPIOID />} />
      <Route exact path='/oxycodone' element={<OXYCODONE />} />
      <Route exact path='/prescriptions' element={<PRESCRIPTIONS />} />
      <Route exact path='/xanax' element={<XANAX />} />
      <Route exact path='/benzodiazepines' element={<BENZODIAZEPINES />} />
      <Route exact path='/stimulant' element={<STIMULANT />} />

      <Route exact path='/medication-assisted-treatment' element={<MAT />} />
      <Route exact path='/individualize-treatment-alternatives' element={<ITA />} />


      <Route exact path='/detox-heroin' element={<DetoxHeroin />} />
      <Route exact path='/detox-alcohol' element={<DetoxAlcohol />} />
      <Route exact path='/detox-cocaine' element={<DetoxCocaine />} />
      <Route exact path='/detox-benzodiazepines' element={<DetoxBenzodiazepines />} />
      <Route exact path='/detox-Methamphetamine' element={<DetoxMethamphetamine />} />
      <Route exact path='/detox-Marijuana' element={<DetoxMarijuana />} />



      <Route exact path='/substance-abuse' element={<SA />} />


      <Route exact path='/jobs' element={<Jobs />} />
      <Route exact path='/detox' element={<DetoxPage />} />
      <Route exact path='/about-us' element={<AboutPage />} />

      <Route exact path='/residence' element={<ResidencePage />} />
      <Route exact path='/insurance' element={<InsurancePage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

