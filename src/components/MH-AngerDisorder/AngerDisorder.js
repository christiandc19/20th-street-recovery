import React from 'react'
import Fade from 'react-reveal/Fade';

import './AngerDisorder.css'

import Wave from '../../assets/waves.svg'


const AngerDisorder = () => {
    return (
        <div className='AngerDisorder submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="AngerDisorder-content">
                    <Fade top>
                    <h3>- MENTAL HEALTH</h3>
                    <h1>INTERMITTENT EXPLOSIVE DISORDER</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default AngerDisorder
