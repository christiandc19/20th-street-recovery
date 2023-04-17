import React from 'react'
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
                <h2 className='subtitle'>Substance Abuse Addiction Treatment Facility</h2>


        </div>

    </div>
</div>
</>

    )
}

export default Hero