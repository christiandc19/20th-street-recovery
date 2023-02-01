import React from 'react'
import Fade from 'react-reveal/Fade';

import './Team.css'
import Wave from '../../assets/waves.svg'



const Team = () => {
    return (
        <>
        <div className='team submenu'>
        <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="team-content">
                    <Fade left>
                    <h1>OUR TEAM</h1>
                    </Fade>
                </div>
            </div>

        </>
    )
}

export default Team