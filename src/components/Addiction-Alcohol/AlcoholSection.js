import React from 'react'
import ContactForm from '../contact/ContactForm'

import './AlcoholSection.css'

const AlcoholSection = () => {
  return (
<>
<div className="alcohol-section-header container">
                <h1>ALCOHOLISM</h1><br/>
                <p>Alcoholism (‘alcohol use disorder’ (AUD)) is the inability to manage one’s drinking habits. It is the most acute form of alcohol abuse. If left untreated,  alcohol abuse can quickly spiral out of control.
                <br/> <br/> Alcoholism is a disease, and consistent alcohol abuse over time can negatively impact career goals, personal relationships, and responsibilities, not to mention your physical health.
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

export default AlcoholSection
