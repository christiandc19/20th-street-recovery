import React from 'react'
import ContactForm from '../contact/ContactForm'

import './OpioidSection.css'

const OpioidSection = () => {
  return (
<>
<div className="opioid-section-header container">
                <h1>OPIOID</h1><br/>
                <p>The synthetic version of natural opiates, opioids serve actual medical purposes to relieve acute or temporary pain. When administered properly, opioids relieve physical pain related to ailments, injuries, and medical issues. <br/> 
                <br/> Opioids are a class of drug that includes legal, potent, and frequently misused drugs like fentanyl, illegal drugs like heroin, and legal prescription drugs like hydrocodone, morphine, and oxycodone.<br/> <br/>
                Commonly prescribed and well-known opioids include the drugs Hydrocodone, Oxycodone, Fentanyl, and Methadone, as well as non-prescriptive products such as NyQuil and TheraFlu.
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

export default OpioidSection
