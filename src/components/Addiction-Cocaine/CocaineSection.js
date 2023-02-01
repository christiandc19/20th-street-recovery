import React from 'react'
import ContactForm from '../contact/ContactForm'

import './CocaineSection.css'

const CocaineSection = () => {
  return (
<>
<div className="cocaine-section-header container">
                <h1>COCAINE</h1><br/>
                <p>A highly addictive stimulant that affects the brain by elevating levels of dopamine (a chemical associated with reward or pleasure).
                <br/> Cocaine can be consumed by snorting, injection, or smoking. The most common of these is snorting. It is one of the most highly addictive drugs, as it releases high dopamine levels in the brain and reprograms your brain’s reward system. According to AddictionCenter, more people are admitted to emergency rooms for cocaine use than any other drug. 


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

export default CocaineSection
