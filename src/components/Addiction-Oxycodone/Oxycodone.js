import React from 'react'
import Fade from 'react-reveal/Fade';

import './Oxycodone.css'

import Wave from '../../assets/waves.svg'


const Oxycodone = () => {
    return (
        <div className='oxycodone submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="oxycodone-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>OXYCODONE</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Oxycodone
