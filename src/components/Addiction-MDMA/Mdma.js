import React from 'react'
import Fade from 'react-reveal/Fade';

import './Mdma.css'

import Wave from '../../assets/waves.svg'


const Fentanyl = () => {
    return (
        <div className='mdma submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="mdma-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>MDMA</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Fentanyl
