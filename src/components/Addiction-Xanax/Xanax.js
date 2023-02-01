import React from 'react'
import Fade from 'react-reveal/Fade';

import './Xanax.css'

import Wave from '../../assets/waves.svg'


const Xanax = () => {
    return (
        <div className='xanax submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="xanax-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>XANAX</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Xanax
