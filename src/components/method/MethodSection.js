import React from 'react'

import TreatmentImage1 from '../../assets/treatment-1.jpg'
import TreatmentImage2 from '../../assets/treatment-2.jpg'


import { FaRegStar } from 'react-icons/fa';

import './MethodSection.css'


const TreatmentSection = () => {
  return (
    <>

{/* SECTION 1 - OVERVIEW */}

    <div className='container treatment-section-overview'>
        <h1>Substance Abuse Treatment Above and Beyond the Norms</h1>
        <p>Here at 20th Street Recovery, we firmly stand that without addressing our physical aspect, the mind cannot successfully recover. We go above and beyond the norms of mental health care, through a thorough and intentional treatment plan that is specific to every kind of individual that addresses not only the mental but also the physical inequalities in the body.
        <br/><br/>
        Methods used by 20th Street Recovery are non-invasive, distinct, and successful in relieving acute symptoms that act as roadblocks to receiving the full therapy. Additionally, to get past more difficult progress barriers, these services are provided on a consistent and ongoing basis which is closely observed in coordination with our clinical team. 
        <br/><br/>
        The physical, mental, and spiritual imbalances have been found to be restored by its healing methods. Our design of mental health treatment is custom-fit to every individual. Compared to the programs which are commonly used, we are a firm believer that we can reach the full potential of our well-being by healing the body, mind and spirit. 
        </p>
    </div>


{/* SECTION 2 - TREATMENT PLAN */}

<div className='treatment-plan'>
        <div className='tile-header container'>
            <h1>Treatment Plan</h1>
            <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and re-assessment of treatment plan progress happen on a weekly basis through the weekly summary. In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director. </p>
        </div>

{/* SECTION 2.1 */}

        <div className='treatment-section-tile'>
            <div className='tile-description'>
                
                <p>
                <h1>Inpatient Programs</h1> <br />
                    <span>DETOX.</span> As the first step before the official treatment phase, our detox program offers immediate and intense support to get clean and stay clean. All services, monitoring, and amenities provided for the entirety of your stay: medication, followed by monitored detox care and group sessions.
                    <br/><br/>
                    <span>RESIDENTIAL.</span> Looking for additional structure during detox? Step into a closely monitored healing environment and stay as long as you need. 24 hour supervision as needed from our staff. Can be the best approach if you are prone to relapse, or your normal life involves the presence of substances that could hinder a successful ongoing recovery.
                    <br/><br/>
                    <span>PARTIAL HOSPITALIZATION PROGRAM.</span> The step between full-time inpatient and outpatient, our Partial Hospitalization Program (or ‘day rehab’) helps you transition smoothly back into your normal life at your pace. Take part in treatment and therapy during the day and spend your nights in the comfort of your own home.
                </p>
            </div>

            <div className='tile-image'>
                <img src={TreatmentImage1} alt="Rehab Team" loading="lazy" />
            </div>
        </div>
</div>


{/* SECTION 3 */}

    <div className='treatment-section-tile wrap-reverse section3'>
        <div className='tile-image'>
            <img src={TreatmentImage2} alt="Rehab Team" loading="lazy" />
        </div>
        
        <div className='tile-description'>
        <p>
                <h1>Outpatient Programs</h1> <br />
                    <span>PHP (Mental Health and Addiction).</span> 
                <ul> 
                    <li>
                        <FaRegStar className='star'/> A more intense, comprehensive treatment approach than IOP, available every day of the week.
                    </li>
                    <li>
                        <FaRegStar className='star'/> For those with families and responsibilities at home who seek ongoing treatment.
                    </li>
                    <li>
                        <FaRegStar className='star'/> Spend your days in recovery with our team your nights at home.
                    </li>                    
                    <li>
                        <FaRegStar className='star'/> One-on-one support available as needed.
                    </li>
            </ul>

                    <br/><br/>
                    <span>IOP (Mental Health and Addiction).</span> 
                    <ul> 
                    <li>
                        <FaRegStar className='star'/> Several hours of group therapy each day along with continued, personalized support and careful monitoring by our in-house physicians.
                    </li>
                    <li>
                        <FaRegStar className='star'/> Take part in our unique jobs program. We equip you with all the tools you need to succeed in finding the right job.
                    </li>
                    </ul>

                    <br/><br/>
                    <span>OP (Mental Health and Addiction).</span> 
                    <ul> 
                    <li>
                        <FaRegStar className='star'/> Get continued support as needed with our outpatient programs.
                    </li>
                    <li>
                        <FaRegStar className='star'/> Attend weekly group and counseling as you move back to your normal life.
                    </li>
                    </ul>
                </p>
        </div>
    </div>


    </>
  )
}

export default TreatmentSection