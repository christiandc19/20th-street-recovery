import React from 'react'
import Fade from 'react-reveal/Fade';

import './Cocaine.css'

import Wave from '../../assets/waves.svg'


const Cocaine = () => {
    return (
        <div className='cocaine submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="cocaine-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>COCAINE</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Cocaine
