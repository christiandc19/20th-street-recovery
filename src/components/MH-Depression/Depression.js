import React from 'react'
import Fade from 'react-reveal/Fade';

import './Depression.css'

import Wave from '../../assets/waves.svg'


const Depression = () => {
    return (
        <div className='depression submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="depression-content">
                    <Fade top>
                    <h3>- MENTAL HEALTH</h3>
                    <h1>DEPRESSION</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Depression
