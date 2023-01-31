import React from 'react'
import Fade from 'react-reveal/Fade';
import './Treatment.css'


import Service1 from '../../assets/treatment-1.jpg'
import Service2 from '../../assets/treatment-2.jpg'

import ContactForm from '../contact/ContactForm';

import Wave from '../../assets/waves.svg'


import { FaRegStar } from 'react-icons/fa';

const Treatment = () => {
    return (
        <>


{/* -------------------------------- HERO -------------------------------------- */}

        <div className='treatment main-menu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x/>
            </div>
            <div className="treatment-content">
                <Fade right>
                    <h1>TREATMENT</h1>
                </Fade>
            </div>
        </div>

{/* -------------------------------- SECTION 1 -------------------------------------- */}



    <div className='treatment-wrap'>
        <div className="treatment-box treatment-left">
            <div className='treatment-title'>
                <h1>INPATIENT PROGRAMS</h1>
            </div><br/>
                <p>Our inpatient programs provide a higher level of care, accountability, and structure as you set off on your journey of recovery. 
            <br/><br/>
            <div className='treatment-title'>
                <h4>DETOX</h4> <br/>
            </div>
                <ul>
                    <li> <FaRegStar className='star'/> As the first step before the official treatment phase, our detox program offers immediate and intense support to get clean and stay clean</li> <br/>
                    <li> <FaRegStar className='star'/> All services, monitoring, and amenities provided for the entirety of your stay: medication, followed by monitored detox care and group sessions. </li>
                </ul>
                </p>
            </div>
        <div className="treatment-box box">
            <img src={Service1} width="600px" height="350px" alt="Palm Springs Rehab Logo" loading="lazy" />
        </div>
</div>



<div className='treatment-wrap'>
    
    <div className="treatment-box box">
        <img src={Service2} width="600px" height="400px" alt="Palm Springs Rehab Logo" loading="lazy" />
    </div>


    <div className="treatment-box treatment-left">
        
            <div className='treatment-title'>
                <h4>RESIDENTIAL</h4> <br/>
            </div>
                <ul>
                    <li> <FaRegStar className='star'/> Looking for additional structure during detox? Step into a closely monitored healing environment and stay as long as you need.</li> <br/>
                    <li> <FaRegStar className='star'/> 24 hour supervision as needed from our staff. </li><br/>
                    <li> <FaRegStar className='star'/> Can be the best approach if you are prone to relapse, or your normal life involves the presence of substances that could hinder a successful ongoing recovery. </li>
                </ul><br/>
                <div className='treatment-title'>
                <h4>PARTIAL HOSPITALIZATION PROGRAM</h4> <br/>
            </div>
                <ul>
                    <li> <FaRegStar className='star'/> The step between full-time inpatient and outpatient, our Partial Hospitalization Program (or ‘day rehab’) helps you transition smoothly back into your normal life at your pace.</li> <br/>
                    <li> <FaRegStar className='star'/> Take part in treatment and therapy during the day and spend your nights in the comfort of your own home.</li><br/>
                </ul>
    </div>
</div>



<br/>
<br/>



<div className='treatment-wrap'>
        <div className="treatment-box treatment-left">
            <div className='treatment-title'>
                <h1>OUTPATIENT PROGRAMS</h1>
            </div><br/>
                <p>
            <div className='treatment-title'>
                <h4>PHP (Mental Health and Addiction)</h4> <br/>
            </div>
                <ul>
                    <li> <FaRegStar className='star'/> A more intense, comprehensive treatment approach than IOP, available every day of the week. </li> <br/>
                    <li> <FaRegStar className='star'/> For those with families and responsibilities at home who seek ongoing treatment. </li><br/>
                    <li> <FaRegStar className='star'/> Spend your days in recovery with our team your nights at home. </li><br/>
                    <li> <FaRegStar className='star'/> One-on-one support available as needed. </li>
                </ul>
                </p>
            </div>
        <div className="treatment-box box">
            <img src={Service1} width="600px" height="350px" alt="Palm Springs Rehab Logo" loading="lazy" />
        </div>
</div>






<div className='treatment-wrap'>
    
    <div className="treatment-box box">
        <img src={Service2} width="600px" height="400px" alt="Palm Springs Rehab Logo" loading="lazy" />
    </div>


    <div className="treatment-box treatment-left">
        
            <div className='treatment-title'>
                <h4>IOP (Mental Health and Addiction)</h4> <br/>
            </div>
                <ul>
                    <li> <FaRegStar className='star'/> Several hours of group therapy each day along with continued, personalized support and careful monitoring by our in-house physicians.</li> <br/>
                    <li> <FaRegStar className='star'/> Take part in our unique jobs program. We equip you with all the tools you need to succeed in finding the right job. </li><br/>
                </ul><br/>
                <div className='treatment-title'>
                <h4>OP (Mental Health and Addiction)
</h4> <br/>
            </div>
                <ul>
                    <li> <FaRegStar className='star'/> Get continued support as needed with our outpatient programs.</li> <br/>
                    <li> <FaRegStar className='star'/> Attend weekly group and counseling as you move back to your normal life.</li><br/>
                </ul>
    </div>
</div>











        <ContactForm />
        </>
    )
}

export default Treatment
