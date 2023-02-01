import React from 'react'
import ContactForm from '../contact/ContactForm'

import { FaRegStar } from 'react-icons/fa';


import './AdhdSection.css'

const AdhdSection = () => {
  return (
<>
<div className="cocaine-section-header container">
                <h1>ADHD</h1><br/>
                <p>Attention-deficit/hyperactivity disorder (commonly known as ADHD) is a chronic condition characterized by a lack of attention and focus, and increased impulsive behavior. It often begins early in life and can continue into adulthood. ADHD in children can lead to developmental issues and learning complications. 
                <br/> Although the behaviors of one with ADHD may not seem dangerous, there can be very real consequences to a state of mind like this, and ADHD can lead to problems with relationships with friends and family or performance at work or school. <br/> <br/>
                People with ADHD display a persistent pattern of impulsive hyperactivity and/or an inability to focus on any one thing for too long. <br/><br/>The causes of ADHD still aren’t clear, but current research suggests that genetics play a significant role in ADHD cases. There are other possible causes for hyperactivity and inattention wholly unrelated to ADHD:<br/><br/>
                <ul>
                <li><FaRegStar className='star'/> Brain injuries </li><br/>
                <li><FaRegStar className='star'/> Premature birth</li><br/>
                <li><FaRegStar className='star'/> Fatigue</li><br/>
                <li><FaRegStar className='star'/> Exposure to harsh chemicals during pregnancy.</li><br/>
                </ul>
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

export default AdhdSection
