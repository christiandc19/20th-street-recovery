import React from 'react'
import Fade from 'react-reveal/Fade';

import './Fentanyl.css'

import Wave from '../../assets/waves.svg'


const Fentanyl = () => {
    return (
        <>
        <div className='fentanyl'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="fentanyl-content">
                    <Fade top>
                    <h1>FENTANYL ADDICTION</h1>
                    <h3>SUBSTANCE ABUSE</h3>

                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Fentanyl
