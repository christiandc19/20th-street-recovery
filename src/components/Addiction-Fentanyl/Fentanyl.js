import React from 'react'
import Fade from 'react-reveal/Fade';

import './Fentanyl.css'

import Wave from '../../assets/waves.svg'


const Fentanyl = () => {
    return (
        <div className='fentanyl submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="fentanyl-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>FENTANYL</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Fentanyl
