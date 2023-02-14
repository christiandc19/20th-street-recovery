import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from 'react-scroll'
import './MHSection.css'

import Contact2 from '../contact/Contact2'

import SubCardBg from '../../assets/sub-card-bg.jpg'


const MHSection = () => {
  return (
    <>

<div className="mh-cards-header container">
                <h1>20TH STREET RECOVERY TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH PROGRAMS </h1>
                <p>Treatment options for a multitude of substance use disorders. Whether you suffer from alcohol, prescription drugs, or other substance abuse disorders, find better healing with us.</p>
            </div>

<div class="mh-card-wrap">

<div class="mh-tile"> 
  <Fade left>
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="mh-text">
  <h5>MENTAL HEALTH TREATMENT​</h5>
  <h1>Acute Stress Disorder</h1>
    
    <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/acute-stress-disorder">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>



 <div class="mh-tile"> 
  <Fade left>
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="mh-text">
  <h5>MENTAL HEALTH TREATMENT​</h5>
  <h1>ADSD</h1>
    
    <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/adhd">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>
  

 <div class="mh-tile"> 
  <Fade left>
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="mh-text">
  <h5>MENTAL HEALTH TREATMENT​</h5>
  <h1>Anger Disorder</h1>
    
    <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/anger-disorder">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>


 <div class="mh-tile"> 
  <Fade left>
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="mh-text">
  <h5>MENTAL HEALTH TREATMENT​</h5>
  <h1>Anxiety Disorder</h1>
    
    <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/anxiety">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>


 <div class="mh-tile"> 
  <Fade left>
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="mh-text">
  <h5>MENTAL HEALTH TREATMENT​</h5>
  <h1>Bipolar Disorder</h1>
    
    <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/bipolar-disorder">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>

 <div class="mh-tile"> 
  <Fade left>
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="mh-text">
  <h5>MENTAL HEALTH TREATMENT​</h5>
  <h1>Depression</h1>
    
    <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/depression">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>


 <div class="mh-tile"> 
  <Fade left>
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="mh-text">
  <h5>MENTAL HEALTH TREATMENT​</h5>
  <h1>Panic Disorder</h1>
    
    <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/panic-disorder">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>


 <div class="mh-tile"> 
  <Fade left>
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="mh-text">
  <h5>MENTAL HEALTH TREATMENT​</h5>
  <h1>PTSD</h1>
    
    <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/anger-disorder">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>


 <div class="mh-tile"> 
  <Fade left>
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="mh-text">
  <h5>MENTAL HEALTH TREATMENT​</h5>
  <h1>Schizoaffective Disorder</h1>
    
    <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/schizoaffective">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>

 <div class="mh-tile"> 
  <Fade left>
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="mh-text">
  <h5>MENTAL HEALTH TREATMENT​</h5>
  <h1>Schizophrenia Disorder</h1>
    
    <div class="mh-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/schizophrenia">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>


</div>



<Contact2 />

    </>

  )
}

export default MHSection
