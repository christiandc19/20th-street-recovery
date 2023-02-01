import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import Wave from '../../assets/waves.svg'

const Hero = () => {
    return (
<>        
        <div className='hero'>

        <div class="coverPageSlide">

        <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>

        </div>

            <div className="hero-container">
                <div className="content">
                    <Fade left>
                        <h2 className='subtitle'>SUBSTANCE ABUSE ADDICTION AND MENTAL HEALTH TREATMENT FACILITY</h2>
                    </Fade>
                    <Fade right>
                        <h1>20TH STREET RECOVERY</h1>
                    </Fade>
                    <Fade buttom>
                        <p>Walk the road of recovery with us</p>
                    </Fade>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/treatment">
                        <button>Get an Appointment</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
</>

    )
}

export default Hero