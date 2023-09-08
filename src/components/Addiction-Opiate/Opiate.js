import React from 'react'
import Fade from 'react-reveal/Fade';

import './Opiate.css'

import Wave from '../../assets/waves.svg'


const Opiate = () => {
    return (
        <>
        <div className='opiate'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="opiate-content">
                    <Fade top>
                    <h1>OPIATES ADDICTION</h1>
                    <h3>SUBSTANCE ABUSE</h3>

                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Opiate
