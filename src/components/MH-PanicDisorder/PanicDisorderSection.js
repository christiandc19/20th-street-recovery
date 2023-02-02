import React from 'react'
import ContactForm from '../contact/ContactForm'

import './PanicDisorderSection.css'

const KratomSection = () => {
  return (
<>
<div className="PanicDisorder-section-header container">
                <h1>PANIC DISORDER</h1><br/>
                <p>A disorder that often develops in early adulthood, Panic Disorder is when an individual may experience unexpected panic attacks (the feeling of being overwhelmed with anxiety or fear, and/or the onset of trembling or rapid heart rate). It is more common in women than men, and usually becomes an issue around your late teen years. <br/> <br/>
                Anyone can have anxiety, stress, and panic regularly. Panic attacks are notably and often mistaken for heart attacks, as many of the physical symptoms are similar between the two. These attacks can happen at any time and often happen more frequently than that, or as little as a few times. <br/><br/>
                A huge part of what makes panic attack disorder so difficult to cope with is a panic disorder’s psychological byproduct of having to live every day in constant fear of the next attack. 
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

export default KratomSection
