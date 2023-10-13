import React from 'react'
import Fade from 'react-reveal/Fade';
import './InsuranceSection.css'
import InsuranceLogos from './InsuranceLogos'

import Aetna from '../../assets/aetna.webp'
import Beacon from '../../assets/beacon.webp'
import Bluecross from '../../assets/bluecross.webp'
import Cigna from '../../assets/cigna.webp'
import Horizon from '../../assets/horizon.webp'
import Anthem from '../../assets/anthem.webp'



const InsuranceSection = () => {
    return (
        <>
        <div className='insurance-section'>
            <div className="insurance-section-content">

                <h1>WE WORK WITH MAJOR INSURANCE GROUPS</h1>
                <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>

                <div className="insurance-section-flex">

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Aetna}/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Beacon}/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Bluecross}/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Cigna}/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Horizon}/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Anthem}/>
                                </div>
                            </Fade>
                </div>
            </div>





        </div>
        </>
    )
}

export default InsuranceSection
