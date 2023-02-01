import React from 'react'
import Fade from 'react-reveal/Fade';

import './Heroin.css'

import Wave from '../../assets/waves.svg'


const Heroin = () => {
    return (
        <div className='heroin submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="heroin-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>HEROIN</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Heroin
