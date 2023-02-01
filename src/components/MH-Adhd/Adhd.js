import React from 'react'
import Fade from 'react-reveal/Fade';

import './Adhd.css'

import Wave from '../../assets/waves.svg'


const Adhd = () => {
    return (
        <div className='adhd submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="adhd-content">
                    <Fade top>
                    <h3>- MENTAL HEALTH</h3>
                    <h1>ATTENTION DEFICIT/HYPERACTIVITY DISORDER</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Adhd
