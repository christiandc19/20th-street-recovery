import React from 'react'
import Fade from 'react-reveal/Fade';

import './ASD.css'

import Wave from '../../assets/waves.svg'


const ASD = () => {
    return (
        <div className='asd submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="cocaine-content">
                    <Fade top>
                    <h3>- MENTAL HEALTH</h3>
                    <h1>ACUTE STRESS DISORDER</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default ASD
