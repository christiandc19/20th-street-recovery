import React from 'react'
import Fade from 'react-reveal/Fade';

import './Xanax.css'

import Wave from '../../assets/waves.svg'


const Xanax = () => {
    return (
        <>
        <div className='xanax'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="xanax-content">
                    <Fade top>
                    <h1>XANAX ADDICTION</h1>
                    <h3>SUBSTANCE ABUSE</h3>

                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Xanax
