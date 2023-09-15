import React, { useRef } from "react";



import './Contact2.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


            // Popup message after send button is clicked
            const feedbackEl = document.querySelector(".feedback");
            feedbackEl.setAttribute("class", "feedback");
            setTimeout(function() {
            feedbackEl.setAttribute("class", "feedback hidden");
            }, 3000);




        //    Service Id        Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_hsunksm', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>

<div className="contactform2">


<div class="contact2-container">

<div className="contact2-header contact2-container">
        <h1>DO YOU NEED URGENT HELP?</h1>
        <p>Our Mental Health and Addiction Support team is available to assist you.</p>
    </div>



    <div class="contact-form-content">

      <div class="left-side">

        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div><br/>
          <div class="text-one">1045 20th St,</div>
          <div class="text-two">Los Angeles CA 90011</div>
        </div>

        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div><br/>
          <div class="text-one"><a href="tel:3235792196"> +1 (323) 579-2196</a></div>
        </div>

        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div><br/>
          <div class="text-one">info@20thstreetdetox.biz</div>
        </div>
      </div>

      <div class="right-side">
        <div class="topic-text">Send us a message</div> <br/>
        <p className="topic-text-p">Please call our admission department if you have any questions.</p>
      <form ref={form} onSubmit={sendEmail}>
        <div class="input-box">
        <input type="text" name='name' placeholder='Your Name' required />
        </div>
        <div class="input-box">
        <input type="text" name='email' placeholder='Your Email' required />
        </div>
        <div class="input-box">
        <input type="text" name='phone' placeholder='Your Phone' required />
        </div>
        <div class="input-box">
        <input type="text" name='subject' placeholder='Subject' required />
        </div>
        <div class="input-box message-box">
        <textarea name="message" rows="4" placeholder="How can we help?" required ></textarea>
        </div>
        <input className="contact-btn" type="submit" value="Submit" />

        <div className="textarea2 feedback hidden">
          <textarea name="message2" cols="30" rows="3" required>Message Sent to 20th Street Detox</textarea>
        </div>




      </form>
    </div>
    </div>
  </div>
  </div>
        </>
    )
}

export default ContactForm