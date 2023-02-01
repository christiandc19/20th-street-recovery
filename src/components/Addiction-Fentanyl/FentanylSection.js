import React from 'react'
import ContactForm from '../contact/ContactForm'

import './FentanylSection.css'

const FentanylSection = () => {
  return (
<>
<div className="fentanyl-section-header container">
                <h1>FENTANYL</h1><br/>
                <p>A highly addictive stimulant that affects the brain by elevating levels of dopamine (a chemical associated with reward or pleasure).
                <br/> Originally created to serve as an effective painkiller for cancer patients, the opioid Fentanyl has since developed into a popular street drug due to its potency and relatively cheap market price. <br/> <br/>
                It is significantly stronger than most other painkillers. like morphine (50-100 times stronger), and can be consumed several different ways. Sometimes it is mixed with heroin,  Often mistaken for heroin, fentanyl overdoses are common. <br/><br/>
                It is up to 50 times stronger than heroin and cheaper to make. It takes very little to produce a euphoric high with fentanyl. The dopamine reward leads to addiction. It is so toxic that withdrawal is much more abrupt and extreme than other opioids like heroin.
                </p>
</div>
<br/>
        <div className="contact2-header contact2-container">
            <h1>DO YOU NEED URGENT HELP?</h1>
            <p>Our Addiction and Recovery Support team is available 24 hours a day 7 Days a week.</p>
        </div>
<ContactForm />
    </>
  )
}

export default FentanylSection
