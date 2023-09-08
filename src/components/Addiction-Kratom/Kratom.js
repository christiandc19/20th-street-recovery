import React from 'react'
import Fade from 'react-reveal/Fade';

import './Kratom.css'

import Wave from '../../assets/waves.svg'


const Kratom = () => {
    return (
        <>
        <div className='kratom'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="kratom-content">
                    <Fade top>
                    <h1>KRATOM ADDICTION</h1>
                    <h3>SUBSTANCE ABUSE</h3>

                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Kratom
