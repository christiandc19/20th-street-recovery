import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import Wave from '../../assets/waves.svg'

const Hero = () => {
    return (
<>        
<div className='hero'>

<div className='hero-divider'>
        <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
    </div>


    <div className="hero-container">
        <div className="content">
                <h1 className="animate-charcter">20TH STREET RECOVERY</h1>
            <Fade left>
                <h2 className='subtitle'>Substance Abuse Addiction and Mental Health Treatment Facility</h2>
            </Fade>
                <br />
                <div className='hero-button'>
                <Link to="/contact">
                <button>GET AN APPOINTMENT</button>
            </Link>
            </div>
            <br />
            <Fade bottom>
                <p>Find your happiness and learn to put it first.</p>
            </Fade>
        </div>
    </div>
</div>
</>

    )
}

export default Hero