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

import CallUs from '../../assets/group.png'


const InsuranceSection = () => {
    return (
        <>

<div className='InsuranceSectionHeader'>
    <h1>WE WORK WITH MAJOR INSURANCE</h1>
    <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
</div>
<Fade bottom>
<div className='insuranceLogosContainer container'>

<InsuranceLogos Image={Aetna} />

<InsuranceLogos Image={Beacon} />

<InsuranceLogos Image={Bluecross} />

<InsuranceLogos Image={Cigna} />

<InsuranceLogos Image={Horizon} />

<InsuranceLogos Image={UMR} />

<InsuranceLogos Image={United} />

<InsuranceLogos Image={Optima} />

<InsuranceLogos Image={Optum} />

<InsuranceLogos Image={Anthem} />

</div>
</Fade>


<div className='call'>
    <Fade bottom>
        <img src={CallUs} alt="Company Team" loading="lazy" />
    </Fade>
</div>



        </>
    )
}

export default InsuranceSection

