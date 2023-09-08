import React from 'react'
import Fade from 'react-reveal/Fade';

import './Meth.css'

import Wave from '../../assets/waves.svg'


const Meth = () => {
    return (
        <>
        <div className='meth'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="meth-content">
                    <Fade top>
                    <h1>METH ADDICTION</h1>
                    <h3>SUBSTANCE ABUSE</h3>

                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Meth
