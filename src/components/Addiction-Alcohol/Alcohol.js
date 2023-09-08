import React from 'react'
import Fade from 'react-reveal/Fade';

import './Alcohol.css'

import Wave from '../../assets/waves.svg'


const Alcohol = () => {
    return (
        <>
        <div className='alcohol'>
        <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="alcohol-content">
                    <Fade top>
                        <h1>ALCOHOL ADDICTION</h1>
                        <h3>SUBSTANCE ABUSE</h3>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Alcohol
