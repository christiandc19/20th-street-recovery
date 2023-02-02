import React from 'react'
import Fade from 'react-reveal/Fade';

import './PTSD.css'

import Wave from '../../assets/waves.svg'


const PTSD = () => {
    return (
        <div className='Ptsd submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="Ptsd-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>POST-TRAUMATIC STRESS DISORDER</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default PTSD
