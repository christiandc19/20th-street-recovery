import React from 'react'
import ContactForm from '../contact/ContactForm'

import './PTSDSection.css'

const PTSDSection = () => {
  return (
<>
<div className="ptsd-section-header container">
                <h1>PTSD</h1><br/>
                <p>Post-traumatic stress disorder, or PTSD, is a mental health disorder that can occur after one experiences a traumatic event. The trauma that causes PTSD can either be direct (happens to you) or indirect (witnessing something happen to a loved one). The effects of PTSD can last weeks, months, or even years if not addressed. <br/> <br/>
                This could involve death, natural disaster, combat, sexual violence, or serious injury. The individual may endure flashbacks or nightmares of the traumatic event, and often have heightened levels of anxiety and depression as a result. Veterans return from war with battle trauma. Because of this, it has been known by many names, including ‘shell shock’ and ‘combat fatigue’.<br/><br/>
                Notable groups often affected by PTSD include combat veterans, victims of sexual or physical assault, and survivors of a natural disasters. <br/><br/>
                PTSD can affect anyone, regardless of external factors like age, race, or gender. It is typically more severe if the traumatic event was unexpected, caused by others in your life, or involved a serious perceived threat to your life.
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

export default PTSDSection
