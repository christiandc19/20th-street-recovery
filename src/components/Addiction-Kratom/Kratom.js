import React from 'react'
import Fade from 'react-reveal/Fade';

import './Kratom.css'

import Wave from '../../assets/waves.svg'


const Kratom = () => {
    return (
        <div className='kratom submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="kratom-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>KRATOM</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Kratom
