import React from 'react'
import ContactForm from '../contact/ContactForm'
import { FaRegStar } from 'react-icons/fa';

import './SchizoaffectiveSection.css'

const SchizoaffectiveSection = () => {
  return (
<>
<div className="Schizoaffective-section-header container">
                <h1>SCHIZOAFFECTIVE DISORDER</h1><br/>
                <p>Schizoaffective is a disorder characterized as delusions or hallucinations present, accompanied by mood disorder symptoms, either:<br/> <br/>
                <ul>
                  <li><FaRegStar className='star'/> Bipolar (episodes of mania and occasional depression)</li><br/>
                  <li><FaRegStar className='star'/> Depressive (depression episodes)</li><br/>
                </ul>
                Schizoaffective episodes tend to vary in length, with some people having repeated episodes. If left untreated, schizoaffective can lead to social problems or difficulties at work and school. <br/><br/>
                This can lead to further problems, like a profound sense of loneliness and setbacks in your professional and personal life (difficulty keeping a job, or even performing daily functions).
                </p>
</div>
        <div className="contact2-header contact2-container">
            <h1>DO YOU NEED URGENT HELP?</h1>
            <p>Our Addiction and Recovery Support team is available 24 hours a day 7 Days a week.</p>
        </div>
<ContactForm />

    </>
  )
}

export default SchizoaffectiveSection
