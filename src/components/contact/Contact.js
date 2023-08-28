import React from "react";
import Fade from 'react-reveal/Fade';

import ContactForm from "./ContactForm";
import './Contact.css'

const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>
            <div className="contact-hero-content">
            <Fade top>
                    <h1>HAVE SOME QUESTIONS?</h1>
            </Fade>
            <Fade right>
                  <p>Our Addiction and Recovery Support team is available to assist you. </p>
            </Fade>
            </div>
     </div>

      <ContactForm />

      </>
    )
}

export default Contact