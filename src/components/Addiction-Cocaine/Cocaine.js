import React from 'react'
import Fade from 'react-reveal/Fade';

import './Cocaine.css'

import Wave from '../../assets/waves.svg'


const Cocaine = () => {
    return (
        <>
        <div className='cocaine'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="cocaine-content">
                    <Fade top>
                    <h1>COCAINE ADDICTION</h1>
                    <h3>SUBSTANCE ABUSE</h3>

                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Cocaine
