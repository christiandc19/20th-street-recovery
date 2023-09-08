import React from 'react'
import Fade from 'react-reveal/Fade';

import './Opioid.css'

import Wave from '../../assets/waves.svg'


const Opioid = () => {
    return (
        <>
        <div className='opioid'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="opioid-content">
                    <Fade top>
                    <h1>OPIOID ADDICTION</h1>
                    <h3>SUBSTANCE ABUSE</h3>

                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Opioid
