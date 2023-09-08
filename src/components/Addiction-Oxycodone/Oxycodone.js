import React from 'react'
import Fade from 'react-reveal/Fade';

import './Oxycodone.css'

import Wave from '../../assets/waves.svg'


const Oxycodone = () => {
    return (
        <>
        <div className='oxycodone'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="oxycodone-content">
                    <Fade top>
                    <h1>OXYCODONE ADDICTION</h1>
                    <h3>SUBSTANCE ABUSE</h3>

                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Oxycodone
