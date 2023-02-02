import React from 'react'
import Fade from 'react-reveal/Fade';

import './Schizophrenia.css'

import Wave from '../../assets/waves.svg'


const Schizophrenia = () => {
    return (
        <div className='Schizophrenia submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="Schizophrenia-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>SCHIZOPHRENIA DISORDER</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Schizophrenia
