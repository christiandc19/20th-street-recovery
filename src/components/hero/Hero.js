import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

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
                <h2 className='subtitle'>Substance Abuse Addiction Treatment Facility</h2>
                
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/contact">
                        <div className='hero-btn'>
                            <button>Contact Us</button>
                        </div>
                    </Link>
                </LinkRoll>
        </div>

    </div>
</div>
</>

    )
}

export default Hero