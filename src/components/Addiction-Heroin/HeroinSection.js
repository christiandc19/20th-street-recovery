import React from 'react'
import ContactForm from '../contact/ContactForm'

import './HeroinSection.css'

const HeroinSection = () => {
  return (
<>
<div className="heroin-section-header container">
                <h1>HEROIN</h1><br/>
                <p>Heroin is an opioid stimulant created from morphine and the seed of the poppy plant. It usually appears in either powder form or as a sticky tar substance (‘black tar heroin’). <br/> <br/>
                According to the National Institute on Drug Abuse, around 80% of heroin users get begin abusin prescription drugs before they eventually turn to heroin. <br/><br/>
                **In a study of those entering treatment for opioid use disorder, approximately one-third reported heroin as the first opioid they used consistently to get high.
                <br/> <br/>
                And the problem only seems to be growing, as opioids become increasingly more expensive and difficult to acquire. Heroin can be taken in several ways, typically by injection, snorting, or smoking. It can also be combined with other drugs, like crack cocaine (called “Speedballing”).
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

export default HeroinSection
