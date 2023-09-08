import React from 'react'
import Fade from 'react-reveal/Fade';

import './Heroin.css'

import Wave from '../../assets/waves.svg'


const Heroin = () => {
    return (
        <>
        <div className='heroin'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="heroin-content">
                    <Fade top>
                    <h1>HEROIN ADDICTION</h1>
                    <h3>SUBSTANCE ABUSE</h3>

                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Heroin
