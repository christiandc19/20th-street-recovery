import React from 'react'
import './Hero.css'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'
import man from '../../assets/man.webp'


const Hero = () => {
    return (
<>        
<div className='hero'>

<div className='man'>
<img src={ man } alt="Man" loading="lazy"/>
</div>



    <div className="hero-container">
        <div className="content">
            
                <Fade left>
                <h1 className="animate-charcter">20th<br /> Street <br />Recovery</h1>
                </Fade>
                <Fade right>
                <h2 className='subtitle'>Detox and Residential Treatment Center</h2>
                </Fade>


                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/contact">

                        <div className="btn-white">
                            <button>CONTACT US</button>
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