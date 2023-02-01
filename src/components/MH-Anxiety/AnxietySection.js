import React from 'react'
import ContactForm from '../contact/ContactForm'

import './AnxietySection.css'

const AnxietySection = () => {
  return (
<>
<div className="anxiety-section-header container">
                <h1>ANXIETY DISORDER</h1><br/>
                <p>As a normal reaction to stress, anxiety generally refers to the worry or fear related to the unknown, the future, or uncertain outcomes of situations<br/> <br/>
                An anxiety disorder is more than just the everyday stress that the average person experiences. Anxiety disorders indicate deeper problems, and <br/><br/>
                When the symptoms of anxiety begin to affect your ability to function and cope with day-to-day life.<br/><br/>
                Those with anxiety disorders look for drugs or alcohol to cope with day-to-day life. This can result in the worsening of symptoms, straining of relationships with others, and the obstruction of performing well at work or school.
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

export default AnxietySection
