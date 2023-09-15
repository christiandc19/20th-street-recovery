import React from 'react'
import TreatmentImage1 from '../../assets/method-section1.jpg'
import TreatmentImage2 from '../../assets/method-section2.jpg'
import { BsDot } from 'react-icons/bs';

import './MethodSection.css'


const MethodSection = () => {
  return (
    <>

        <div className='method-section '>
            <div className='method-section-content container'>

            <div className='method-section-header'>
                  <h1>DETOX PROGRAM OPTIONS</h1>
                  <p>In many cases, medically supervised detox is the right starting point for overcoming addiction to alcohol or dependence of prescription drugs or narcotics. 20th Street Recovery strives to make this step less stressful by focusing on your comfort and safety first. Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment. In the meantime, you’ll receive behavioral health care from experienced counselors to boost your chances for an effective recovery.</p><br/>
                  <p>Detoxing by yourself or going abruptly is often dangerous. 20th Street Recovery lets you taper in a safe, structured manner. We use evidence-based medical practices for controlling withdrawal symptoms and watch over you on a 24-7 basis. Our nursing team is adept at administering medications for gradual tapering. And whenever you feel up to it, you also have the chance to participate in therapy and peer support groups to explore the underlying triggers of addiction and associated mental health disorders.</p>
            </div>


                <div className='method-section-flex'>

                    <div className='method-section-left'>
                        <h1>INPATIENT PROGRAMS</h1>
                        <h5>DETOX</h5>
                        <p>As the first step before the official treatment phase, our detox program offers immediate and intense support to get clean and stay clean. All services, monitoring, and amenities provided for the entirety of your stay: medication, followed by monitored detox care and group sessions.</p>
                        <h5>RESIDENTIAL</h5>
                        <p>Looking for additional structure during detox? Step into a closely monitored healing environment and stay as long as you need. 24 hour supervision as needed from our staff. Can be the best approach if you are prone to relapse, or your normal life involves the presence of substances that could hinder a successful ongoing recovery.</p>

                        <h5>PARTIAL HOSPITALIZATION PROGRAM.</h5>
                        <p>The step between full-time inpatient and outpatient, our Partial Hospitalization Program (or ‘day rehab’) helps you transition smoothly back into your normal life at your pace. Take part in treatment and therapy during the day and spend your nights in the comfort of your own home.</p>
                    </div>

                    < div className='method-section-right'>
                        <img src={TreatmentImage1} alt="Rehab Team" loading="lazy" />
                    </div>

                </div>


                <div className='method-section-flex2'>

                    <div className='method-section-left2'>
                        <img src={TreatmentImage2} alt="Rehab Team" loading="lazy" />
                    </div>

                    < div className='method-section-right2'>

                        <h1>OUTPATIENT PROGRAMS</h1>
                        <h5>PHP (Mental Health and Addiction)</h5>
                        <ul>
                            <li><BsDot/> A more intense, comprehensive treatment approach than IOP, available every day of the week.</li>
                            <li><BsDot/> For those with families and responsibilities at home who seek ongoing treatment.</li>
                            <li><BsDot/> Spend your days in recovery with our team your nights at home.</li>
                            <li><BsDot/> One-on-one support available as needed.</li>
                        </ul>

                        <h5>IOP (Mental Health and Addiction).</h5>
                        <ul>
                            <li><BsDot/> Several hours of group therapy each day along with continued, personalized support and careful monitoring by our in-house physicians.</li>
                            <li><BsDot/>Take part in our unique jobs program. We equip you with all the tools you need to succeed in finding the right job.</li>
                        </ul>

                        <h5>OP (Mental Health and Addiction).</h5>
                        <ul>
                            <li><BsDot/> Get continued support as needed with our outpatient programs.</li>
                            <li><BsDot/>Attend weekly group and counseling as you move back to your normal life.</li>
                        </ul>


                    </div>

                </div>


                <div className='method-section-header'>
                    <h1>Begin Your Journey with Our Comprehensive Addiction Detox Program</h1>
                    <p>It's important to note that detox is just the initial step in the recovery process. Following detox, individuals typically transition to further treatment such as residential rehabilitation, outpatient programs, counseling, and support groups to address the psychological and behavioral aspects of addiction.</p><br/>
                    <p>Remember, the most effective detox program depends on the specific needs and circumstances of the individual. Consulting with our healthcare professionals or addiction specialists can provide tailored recommendations. Always seek professional guidance when considering a detox program.</p>
                </div>


            </div>
        </div>


    </>
  )
}

export default MethodSection;