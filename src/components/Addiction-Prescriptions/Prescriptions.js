import React from 'react'
import Fade from 'react-reveal/Fade';

import './Prescriptions.css'

import Wave from '../../assets/waves.svg'


const Prescriptions = () => {
    return (
        <>
        <div className='prescriptions'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="prescriptions-content">
                    <Fade top>
                    <h1>PRESCRIPTIONS ADDICTION</h1>
                    <h3>SUBSTANCE ABUSE</h3>

                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Prescriptions
