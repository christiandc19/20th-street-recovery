import React from 'react'
import Fade from 'react-reveal/Fade';

import './Meth.css'

import Wave from '../../assets/waves.svg'


const Meth = () => {
    return (
        <div className='meth submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="meth-content">
                    <Fade top>
                    <h3>- ADDICTION</h3>
                    <h1>METHAMPHETAMINE</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Meth
