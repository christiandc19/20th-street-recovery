import React from 'react'
import Fade from 'react-reveal/Fade';

import './Prescriptions.css'

import Wave from '../../assets/waves.svg'


const Prescriptions = () => {
    return (
        <div className='prescriptions submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="prescriptions-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>PRESCRIPTIONS</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Prescriptions
