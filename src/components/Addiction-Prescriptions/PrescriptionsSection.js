import React from 'react'
import ContactForm from '../contact/ContactForm'

import './PrescriptionsSection.css'

const PrescriptionsSection = () => {
  return (
<>
<div className="prescriptions-section-header container">
                <h1>PRESCRIPTIONS</h1><br/>
                <p>Medication prescriptions are a common and effective treatment for many conditions and health complications. We all experience procedures, body aches, and other discomforts that require medication to ease the pain. Many forms of pain relief are available over the counter, but prescription medication refers specifically to those prescribed by your medical health professional.<br/> <br/>
                This also means that prescription drugs’ potency and addictive qualities when combined with the availability and prevalence of prescription drugs can create a vicious cycle of addiction and physical dependence, if not taken care of properly. And not all prescriptions are created equal; some are more addictive than others. <br/><br/>
                Abuse of prescription drugs can range from the use of stimulants (prescribed for ADHD patients) to sedatives/hypnotics (anxiety/sleep treatments), or opioids (for pain relief). <br/><br/>
                Abuse of prescription medications can be recreational, due to addiction, or both, and the consequences can be severe or fatal.
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

export default PrescriptionsSection
