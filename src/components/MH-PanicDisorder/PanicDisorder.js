import React from 'react'
import Fade from 'react-reveal/Fade';

import './PanicDisorder.css'

import Wave from '../../assets/waves.svg'


const PanicDisorder = () => {
    return (
        <div className='PanicDisorder submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="PanicDisorder-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>PANIC DISORDER</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default PanicDisorder
