import React from 'react'
import Fade from 'react-reveal/Fade';
import './Treatment.css'

import Wave from '../../assets/waves.svg'



const Treatment = () => {
    return (
        <>

        <div className='treatment main-menu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" alt='wave divider' repeat-x/>
            </div>
            <div className="treatment-content">
                <Fade right>
                    <h1>TREATMENT</h1>
                </Fade>
            </div>
        </div>

        </>
    )
}

export default Treatment
