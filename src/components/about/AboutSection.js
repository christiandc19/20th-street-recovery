import React from 'react'
import './AboutSection.css'

import About from '../../assets/about-section-1.jpg'
import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'


const AboutSection = () => {
    return (
        <>
        <div className='about-section container'>
            <div className='about-section-content'>
                <div className='about-section-left'>
                    <h1>About 20Th Street Detox</h1>
                    <p>At 20th Street Detox, we understand that the path to recovery begins with compassionate care and a supportive environment. Our dedicated team is committed to helping individuals break free from the grips of substance abuse and start on their journey towards a healthier, more fulfilling life.</p>

                    <h1>Our Mission</h1>
                    <p>Our mission at 20th Street Detox is to provide a safe and nurturing space for individuals seeking to overcome substance dependency. We believe in the power of comprehensive detoxification programs that are tailored to the unique needs of each person we serve.</p>

                    <h1>Contact Us Today</h1>
                    <p>If you or a loved one are ready to take the first step towards a brighter, substance-free future, we invite you to reach out to us. Our compassionate team is here to answer any questions and guide you through the admissions process.<br/><br/>Reclaim your life from substance abuse with the help of 20th Street Detox. Together, we can build a foundation for lasting recovery and a brighter tomorrow.</p>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/contact">

                        <div className="about-btn">
                            <button>CONTACT US</button>
                        </div>
                    
                    </Link>
                    </LinkRoll>


                </div>

                <div className='about-section-right'>
                    <img src={ About } alt="Happy Person" loading="lazy"/>
                </div>

            </div>
        </div>



        </>
    )
}

export default AboutSection
