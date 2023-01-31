import React from 'react'
import Fade from 'react-reveal/Fade';

import './Alcohol.css'

import Wave from '../../assets/waves.svg'


const Alcohol = () => {
    return (
        <div className='sa submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="sa-content">
                    <Fade top>
                    <h2>- ADDICTION</h2>
                    <h1>ALCOHOL</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Alcohol
