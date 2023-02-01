import React from 'react'
import './TeamSection.css'
import Fade from 'react-reveal/Fade';
import ContactForm from '../contact/ContactForm'

import Team1 from '../../assets/team1-min.jpg'
import Team2 from '../../assets/team2-min.jpg'
import Team3 from '../../assets/team3-min.jpg'
import Team4 from '../../assets/team4-min.jpg'
import Team5 from '../../assets/team5-min.jpg'
import Team6 from '../../assets/team6-min.jpg'



const TeamSection = () => {
    return (
        <>
        <div className='team-section container'>
        <h1>MEET THE CORE</h1>
        <p>We seek to provide the highest quality care for any addiction situation to create long-term sobriety in a safe and effective environment built on love, acceptance, and tolerance. We work every day to create addict programming that gives you the time and tools needed to live a sober life today, and then vigorously push you to fulfill your dreams tomorrow. </p>
            <div>
                <div className="content">

                    <div className='flex-right'>
                    <Fade top>
                    <div className='thumbnail'>
                        <img src={ Team1 } width="300" height="250" alt="Therapy Session" loading="lazy"/>
                        <div>                   
                        <p>Joey<br/>Physical Therapist</p>
                        </div>
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src={ Team2 } width="300" height="250" alt="Clinic Staff" loading="lazy"/>
                    <p>Rachel<br/>Physical Therapist</p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='thumbnail'>
                    <img src={ Team3 } width="300" height="250" alt="Bluecross  Logo" loading="lazy"/>
                    <p>Monica<br/>Physical Therapist</p>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src={ Team4 } width="300" height="250" alt="People in Working Uniform" loading="lazy"/>
                        <p>Ross<br/>Physical Therapist</p>  
                    </div>
                    </Fade>                 

                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src={ Team5 } width="300" height="250" alt="People in Working Uniform" loading="lazy"/>
                        <p>Chandler<br/>Physical Therapist</p>  
                    </div>

                    </Fade>                          
                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src={ Team6 } width="300" height="250" alt="People in Working Uniform" loading="lazy"/>
                        <p>Phoebe<br/>Physical Therapist</p>  
                    </div>
                    </Fade>                          



                    </div>
                </div>
            </div>
        </div>

        <ContactForm />

</>
    )
}

export default TeamSection
