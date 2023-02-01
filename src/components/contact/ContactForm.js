import React, { useRef } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

import Fade from 'react-reveal/Fade';


import './ContactForm.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        //    Service Id        Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_9v2gipl', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>

<section className="contact-container">

<Fade left>
<div className="contact-cards-container">
    
    <div class="get_form_inner2">
            <h2>CALL US</h2>
            <p><AiOutlinePhone /><a href="tel:3235792196"> +1 (323) 579-2196</a></p>
    </div>

    <div class="get_form_inner2">
            <h2>EMAIL</h2>
            <p><AiOutlineMail /> info@20thStreetDetox.com  </p><br />
    </div>

    <div class="get_form_inner2">
            <h2>LOCATION</h2>
            <p><BsFillPinMapFill /> 1045 20th St, Los Angeles CA 90011</p>
    </div>

</div>
</Fade>


          <div class="get_form_inner">
            <div class="get_form_inner_text">
              <h3>Get In Touch</h3>
              <p><i>We'll keep your contact information strictly confidential.</i></p><br/>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div class="inputs">
                <input type="text" name='name' placeholder='Your Name' required /> <br/>
                <input type="text" name='email' placeholder='Your Email' required /> <br/>
                <input type="tel" name='phone' placeholder='Your Phone' required /> <br/>
                <input type="text" name='subject' placeholder='Subject' required /> <br/>

              </div>
              <div>
                <textarea name="message" placeholder="How can we help?" cols="30" rows="8" required></textarea>
                <input type="submit" value="Submit" />
              </div>
            </form>
</div>

</section>
 

{/* <div className="iframe container">
    <iframe title="map" width="100" height="250" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.243101468974!2d-116.46710449999999!3d33.7802199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db03279aebb10b%3A0xa32a61dfed0153b4!2s68487%20E%20Palm%20Canyon%20Dr%20%2344%2C%20Cathedral%20City%2C%20CA%2092234!5e0!3m2!1sen!2sus!4v1674852246180!5m2!1sen!2sus"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe>
</div> */}



        </>
    )
}

export default ContactForm