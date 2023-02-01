import React from 'react'
import Fade from 'react-reveal/Fade';

import './Residence.css'

import Wave from '../../assets/waves.svg'


const Residence = () => {
    return (
        <div className='residence submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="residence-content">
                    <Fade top>
                    <h1>SOBER LIVING</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Residence
