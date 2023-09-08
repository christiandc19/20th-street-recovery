import React from 'react'
import Fade from 'react-reveal/Fade';
import './Conditions.css'

import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'


import ConditionsLogos from './ConditionsLogos'

import ALCOHOL from '../../assets/alcohol.jpg'
import COCAINE from '../../assets/cocaine.jpg'
import FENTANYL from '../../assets/fentanyl.jpg'
import HEROIN from '../../assets/heroin.jpg'
import KRATOM from '../../assets/kratom.jpg'
import MDMA from '../../assets/mdma.jpg'
import METH from '../../assets/meth.jpg'
import OPIATE from '../../assets/opiate.jpg'
import OPIOID from '../../assets/opioid.jpg'
import OXYCODONE from '../../assets/oxycodone.jpg'
import PRESCRIPTIONS from '../../assets/prescription.jpg'
import XANAX from '../../assets/xanax.jpg'


const Conditions = () => {
    return (
        <>


<div className='conditions-bg'>

<div className='conditions'>

<div className='condition-icons-header container'>
    <h1>Detox Program Options and Available Services</h1>
    <p>Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment. In the meantime, you’ll receive behavioral health care from experienced counselors to boost your chances for an effective recovery.</p>
</div>



<div className='ConditionsLogosContainer container'>

<Fade bottom>
<div className='conditions-item'>
    <ConditionsLogos Image={ALCOHOL} />
<div className='conditions-btn'>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/alcohol">
            <button>ALCOHOL ADDICTION</button>
        </Link>
    </LinkRoll>
</div>
</div>
</Fade>

<Fade bottom>
<div className='conditions-item'>
    <ConditionsLogos Image={COCAINE} />
<div className='conditions-btn'>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/cocaine">
            <button>COCAINE ADDICTION</button>
        </Link>
    </LinkRoll>
</div>
</div>
</Fade>

<Fade bottom>
<div className='conditions-item'>
    <ConditionsLogos Image={FENTANYL} />
<div className='conditions-btn'>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/fentanyl">
            <button>FENTANYL ADDICTION</button>
        </Link>
    </LinkRoll>
</div>
</div>
</Fade>

<Fade bottom>
<div className='conditions-item'>
    <ConditionsLogos Image={HEROIN} />
<div className='conditions-btn'>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/heroin">
            <button>HEROIN ADDICTION</button>
        </Link>
    </LinkRoll>
</div>
</div>
</Fade>

<Fade bottom>
<div className='conditions-item'>
    <ConditionsLogos Image={KRATOM} />
<div className='conditions-btn'>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/kratom">
            <button>KRATOM ADDICTION</button>
        </Link>
    </LinkRoll>
</div>
</div>
</Fade>

<Fade bottom>
<div className='conditions-item'>
    <ConditionsLogos Image={MDMA} />
<div className='conditions-btn'>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/mdma">
            <button>MDMA ADDICTION</button>
        </Link>
    </LinkRoll>
</div>
</div>
</Fade>

<Fade bottom>
<div className='conditions-item'>
    <ConditionsLogos Image={METH} />
<div className='conditions-btn'>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/meth">
            <button>METH ADDICTION</button>
        </Link>
    </LinkRoll>
</div>
</div>
</Fade>

<Fade bottom>
<div className='conditions-item'>
    <ConditionsLogos Image={OPIATE} />
<div className='conditions-btn'>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/opiate">
            <button>OPIATE ADDICTION</button>
        </Link>
    </LinkRoll>
</div>
</div>
</Fade>

<Fade bottom>
<div className='conditions-item'>
    <ConditionsLogos Image={OPIOID} />
<div className='conditions-btn'>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/opioid">
            <button>OPIOID ADDICTION</button>
        </Link>
    </LinkRoll>
</div>
</div>
</Fade>

<Fade bottom>
<div className='conditions-item'>
    <ConditionsLogos Image={OXYCODONE} />
<div className='conditions-btn'>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/oxycodone">
            <button>OXYCODONE ADDICTION</button>
        </Link>
    </LinkRoll>
</div>
</div>
</Fade>

<Fade bottom>
<div className='conditions-item'>
    <ConditionsLogos Image={PRESCRIPTIONS} />
<div className='conditions-btn'>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/prescriptions">
            <button>PRESCRIPTIONS ADDICTION</button>
        </Link>
    </LinkRoll>
</div>
</div>
</Fade>

<Fade bottom>
<div className='conditions-item'>
    <ConditionsLogos Image={XANAX} />
<div className='conditions-btn'>
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/xanax">
            <button>XANAX ADDICTION</button>
        </Link>
    </LinkRoll>
</div>
</div>
</Fade>
{/* 














<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={c} />
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/xanax">
            <p>XANAX</p>
        </Link>
    </LinkRoll></div>
</Fade> */}

</div>

</div>

</div>

        </>
    )
}

export default Conditions

