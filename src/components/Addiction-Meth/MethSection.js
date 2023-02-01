import React from 'react'
import ContactForm from '../contact/ContactForm'

import './MethSection.css'

const MethSection = () => {
  return (
<>
<div className="meth-section-header container">
                <h1>Methamphetamine</h1><br/>
                <p>A highly addictive and extremely dangerous stimulant, meth releases high amounts of dopamine (pleasure/reward chemical in the brain), while simultaneously destroying the receptors in the brain. <br/> <br/>
                This is frequently the first stage of a vicious, addictive cycle in which the user needs higher doses to achieve the same euphoric sensation. The lack of delayed gratification and the intoxicating nature of the drug leads to at least – Meth can be used in several ways, most commonly, either snorting, smoking, or injection.<br/><br/>
                The meth addiction crisis in the United States continues to prove that the long-term effects of meth use can be devastating, and range from dental problems, psychosis, brain damage, organ problems, and even death.
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

export default MethSection
