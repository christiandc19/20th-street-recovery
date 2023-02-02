import React from 'react'
import ContactForm from '../contact/ContactForm'

import './SchizophreniaSection.css'

const SchizophreniaSection = () => {
  return (
<>
<div className="Schizophrenia-section-header container">
                <h1>SCHIZOPHRENIA DISORDER</h1><br/>
                <p>You can think of schizophrenia as an abnormal interpretation of reality that does not reflect reality. Schizophrenia disorder is typically characterized by a combination of hallucination, delusion, and extremely disordered thinking, which impair daily life and can be extremely disabling.<br/><br/>
                <h1>SIGNS AND SYMPTOMS</h1><br/>
                Anyone can get schizophrenia. Symptoms usually begin to appear in your late 20s. Diagnosis after about age 45 is rare, as is a diagnosis in children.<br/><br/>
                Symptoms will vary in type and severity most of the time. Most complications from schizophrenia begin with cognitive, behavioral, and emotional changes. The sooner you recognize the signs, the quicker you can begin to treat it and prevent long-term effects.
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

export default SchizophreniaSection
