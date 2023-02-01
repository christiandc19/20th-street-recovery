import React from 'react'
import Fade from 'react-reveal/Fade';

import './BipolarDisorder.css'

import Wave from '../../assets/waves.svg'


const BipolarDisorder = () => {
    return (
        <div className='BipolarDisorder submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="BipolarDisorder-content">
                    <Fade top>
                    <h1>BIPOLAR DISORDER</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default BipolarDisorder
