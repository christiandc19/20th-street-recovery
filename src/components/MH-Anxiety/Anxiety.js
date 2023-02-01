import React from 'react'
import Fade from 'react-reveal/Fade';

import './Anxiety.css'

import Wave from '../../assets/waves.svg'


const Anxiety = () => {
    return (
        <div className='anxiety submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="anxiety-content">
                    <Fade top>
                    <h1>ANXIETY DISORDER</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Anxiety
