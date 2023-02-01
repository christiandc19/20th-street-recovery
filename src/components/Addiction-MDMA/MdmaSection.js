import React from 'react'
import ContactForm from '../contact/ContactForm'

import './MdmaSection.css'

const MdmaSection = () => {
  return (
<>
<div className="mdma-section-header container">
                <h1>MDMA</h1><br/>
                <p>Commonly referred to as Ecstasy, ‘E’, or ‘Molly’, MDMA is a prevalent street and party drug that gives the user a heightened sense of euphoria, energy, and sexual excitement. <br/> <br/>
                MDMA became more widely used in the 1970s and 80s, at which point the DEA officially placed it on the list of Schedule 1 drugs. Schedule 1 drugs are those that are most potent. <br/><br/>
                MDMA is an empathogen, that is, a drug that increases one’s empathy and compassion towards others. Continued MDMA use appears to affect the body’s dopamine and serotonin levels associated with substance use disorders.<br/><br/> Several factors determine any individual’s reaction to MDMA intake, including other stimulants present in the body, your body’s metabolism, preexisting conditions, the strength of the batch, and the dosage amount.
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

export default MdmaSection
