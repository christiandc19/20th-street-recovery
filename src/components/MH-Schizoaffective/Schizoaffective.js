import React from 'react'
import Fade from 'react-reveal/Fade';

import './Schizoaffective.css'

import Wave from '../../assets/waves.svg'


const Schizoaffective = () => {
    return (
        <div className='Schizoaffective submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="Schizoaffective-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>SCHIZOAFFECTIVE DISORDER</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Schizoaffective
