import React from 'react'
import Fade from 'react-reveal/Fade';
import './InsuranceSection.css'
import InsuranceLogos from './InsuranceLogos'

import Aetna from '../../assets/aetna.png'
import Beacon from '../../assets/beacon.png'
import Bluecross from '../../assets/bluecross.png'
import Cigna from '../../assets/cigna.png'
import Horizon from '../../assets/horizon.png'
import UMR from '../../assets/umr.png'
import United from '../../assets/united-healthcare.png'
import Optima from '../../assets/optima.png'
import Optum from '../../assets/optum.png'
import Anthem from '../../assets/anthem.png'



const InsuranceSection = () => {
    return (
        <>
        <div className='InsuranceSection'>
            <div className="InsuranceSection-container">
                <div>
                <h1>WE WORK WITH MAJOR INSURANCE GROUPS</h1>
                <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                </div>
                <div className="content container">

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
                                <InsuranceLogos Image={UMR}/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={United}/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Optima}/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Optum}/>
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
