import React from 'react'
import ContactForm from '../contact/ContactForm'

import './ASDSection.css'

const ASDSection = () => {
  return (
<>
<div className="ASDSection-header container">
                <h1>ACUTE STRESS DISORDER</h1><br/>
                <p>Acute Stress Disorder (ASD) is your brain’s reaction to a traumatic event. Trauma can be direct or indirect. That is, the trauma that causes disorders like ASD can either be a direct, first-hand experience (ex. violence, harm, and sexual assault), or through indirect involvement in a traumatic event, for example, learning about the abrupt passing of a loved one. Acute Stress Disorder affects not just the individual, but also those nearest and dearest to them. If left untreated for an extended time, ASD can cause further development of other disorders. 
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

export default ASDSection
