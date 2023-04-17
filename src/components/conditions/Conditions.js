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

<div className='conditions'>

<div className='condition-icons-header container'>
    <h1>Types of Substance Addiction Disorder We Treat</h1>
    <p>Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment. In the meantime, you’ll receive behavioral health care from experienced counselors to boost your chances for an effective recovery.</p>
</div>


<div className='ConditionsLogosContainer container'>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={ALCOHOL} />
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/alcohol">
            <p>ALCOHOL</p>
        </Link>
    </LinkRoll>
</div>
</Fade>


<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={COCAINE} />
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/cocaine">
            <p>COCAINE</p>
        </Link>
    </LinkRoll>

</div>
</Fade>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={FENTANYL} />
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/fentanyl">
            <p>FENTANYL</p>
        </Link>
    </LinkRoll>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={HEROIN} />
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/heroin">
            <p>HEROIN</p>
        </Link>
    </LinkRoll>
    </div>
</Fade>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={KRATOM} />
<LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/kratom">
            <p>KRATOM</p>
        </Link>
    </LinkRoll>
    </div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={MDMA} />
<LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/mdma">
            <p>MDMA</p>
        </Link>
    </LinkRoll>
</div>
</Fade>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={METH } />
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/meth">
            <p>METH</p>
        </Link>
    </LinkRoll>
    </div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={OPIATE} />
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/opiate">
            <p>OPIATE</p>
        </Link>
    </LinkRoll></div>
</Fade>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={OPIOID } />
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/opioid">
            <p>OPIOID</p>
        </Link>
    </LinkRoll>
    </div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={OXYCODONE} />
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/oxycodone">
            <p>OXYCODONE</p>
        </Link>
    </LinkRoll></div>
</Fade>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={PRESCRIPTIONS } />
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/prescriptions">
            <p>PRESCRIPTIONS</p>
        </Link>
    </LinkRoll>
    </div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={XANAX} />
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/xanax">
            <p>XANAX</p>
        </Link>
    </LinkRoll></div>
</Fade>

</div>

</div>


        </>
    )
}

export default Conditions

