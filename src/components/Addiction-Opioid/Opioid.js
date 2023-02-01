import React from 'react'
import Fade from 'react-reveal/Fade';

import './Opioid.css'

import Wave from '../../assets/waves.svg'


const Opioid = () => {
    return (
        <div className='opioid submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="opioid-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>OPIOID</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Opioid
