import React from 'react'
import Fade from 'react-reveal/Fade';

import TreatmentImage1 from '../../assets/treatment-1.jpg'
import TreatmentImage2 from '../../assets/treatment-2.jpg'
import { FaRegStar } from 'react-icons/fa';

import './TreatmentSection.css'


const TreatmentSection = () => {
  return (
    <>
    <div className='container'>
    <h1 className='treatment-section-header'>INPATIENT PROGRAMS</h1>
    </div>
    


{/* WRAP 1 */}
    <div className='ts-wrap'>
        <Fade left>
            <div className="ts-left">
                    <p>
                    <h1 className='ts-header2'>DETOX</h1><br/>
                                   <ul>
                    <li> <FaRegStar className='star'/> As the first step before the official treatment phase, our detox program offers immediate and intense support to get clean and stay clean</li>
                    <li> <FaRegStar className='star'/> All services, monitoring, and amenities provided for the entirety of your stay: medication, followed by monitored detox care and group sessions. 
                    </li>
                    </ul><br/>
                    <h1 className='ts-header2'>RESIDENTIAL</h1><br/>
                    <ul>
                    <li> <FaRegStar className='star'/> Looking for additional structure during detox? Step into a closely monitored healing environment and stay as long as you need.</li>
                    <li> <FaRegStar className='star'/> 24 hour supervision as needed from our staff. </li>
                    <li> <FaRegStar className='star'/> Can be the best approach if you are prone to relapse, or your normal life involves the presence of substances that could hinder a successful ongoing recovery.</li>
                    </ul>
                <br/>
                <h1 className='ts-header2'>PARTIAL HOSPITALIZATION PROGRAM</h1><br/>

                    <ul>
                    <li> <FaRegStar className='star'/> The step between full-time inpatient and outpatient, our Partial Hospitalization Program (or ‘day rehab’) helps you transition smoothly back into your normal life at your pace.</li>
                    <li> <FaRegStar className='star'/> Take part in treatment and therapy during the day and spend your nights in the comfort of your own home.
                    </li>
                    </ul>
                
                </p>
                <br />
            </div>
        </Fade>

        <Fade right>
            <div className="ts-right">
                <img src={TreatmentImage1} alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>
    </div>


    <div className='container'>
    <h1 className='treatment-section-header'>OUTPATIENT PROGRAMS</h1>
    </div>



{/* WRAP 2 */}
    <div className='ts-wrap'>
    <Fade right>
            <div className="ts-right">
                <img src={TreatmentImage2} alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>
        <Fade left>
            <div className="ts-left">
                <br/>
                    <p>
                    <h1 className='ts-header2'>PHP (Mental Health and Addiction)</h1><br/>
                    <ul>
                    <li> <FaRegStar className='star'/> A more intense, comprehensive treatment approach than IOP, available every day of the week.</li>
                    <li> <FaRegStar className='star'/> For those with families and responsibilities at home who seek ongoing treatment.
                    </li>
                    <li> <FaRegStar className='star'/> Spend your days in recovery with our team your nights at home.
                    </li>
                    <li> <FaRegStar className='star'/> One-on-one support available as needed.
                    </li>
                    </ul><br/>
                    <h1 className='ts-header2'>IOP (Mental Health and Addiction)</h1><br/>
                    <ul>
                    <li> <FaRegStar className='star'/> Several hours of group therapy each day along with continued, personalized support and careful monitoring by our in-house physicians.</li>
                    <li> <FaRegStar className='star'/> Take part in our unique jobs program. We equip you with all the tools you need to succeed in finding the right job.
                    </li>
                    </ul><br/>
                    <h1 className='ts-header2'>OP (Mental Health and Addiction)</h1><br/>
                    <ul>
                    <li> <FaRegStar className='star'/> Get continued support as needed with our outpatient programs.</li>
                    <li> <FaRegStar className='star'/> Attend weekly group and counseling as you move back to your normal life.
                    </li>
                    </ul><br/>

                    </p>
                <br />
            </div>
        </Fade>
    </div>








    </>
  )
}

export default TreatmentSection