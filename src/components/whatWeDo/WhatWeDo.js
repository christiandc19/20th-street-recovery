import React from 'react'
import './WhatWeDoStyles.css'
import Fade from 'react-reveal/Fade';
import { FaRegStar } from 'react-icons/fa';


import WhatWeDoImg from '../../assets/whatwedo.jpg'
import WhatWeDoImg2 from '../../assets/whatwedo2.jpg'


const WhatWeDo = () => {
  return (
<>
    <div className='wrap'>
        <Fade left>
            <div className="box left">
                <h1 className='header'>WHO WE ARE</h1>
                <br/>
                <p>At Rodeo Recovery, we provide safe and comfortable medical detox services for those struggling with addiction to alcohol and drugs, including Fentanyl, cocaine, heroin, opioids, benzos, alcohol, and more. To ensure that those who attend our rehab facility receive tailored care to meet their individual needs, we conduct a series of evaluations before you begin treatment at our drug and alcohol detox center. <br/> <br/> These evaluations allow us to understand your active addictions, history of substance abuse, mental health disorders, co-occurring disorders, prior drug and alcohol treatment, and how our detox center can help you overcome your substance use disorder. An evaluation includes:</p>
                <br />
                <ul>
                    <li>
                        <FaRegStar className='star'/> A comprehensive medical assessment by a doctor to create an individualized treatment plan.
                    </li><br/>
                    <li>
                        <FaRegStar className='star'/> Urine tests and other lab tests.
                    </li><br/>
                    <li>
                        <FaRegStar className='star'/> The doctor prescribes a series of personalized medications to reduce the severity of withdrawal symptoms, slowly tapering off over time.
                    </li>
                </ul>
            </div>
        </Fade>

        <Fade right>
            <div className="box-right">
                <img src={WhatWeDoImg} width="550px" height="470px" alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>
    </div>



    <div className='wrap'>

        <Fade left>
            <div className="box-right">
                <img src={WhatWeDoImg2} width="550px" height="470px" alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>

        <Fade right>
            <div className="box left">
                <br/>
                <p>Once a client is assessed, the drug detox process will occur under stringent medical supervision at our treatment facility. Medical supervision and guidance help clients feel safe and comfortable while the body rids itself of drugs and alcohol and provides physical and mental support throughout the withdrawal process. We have staff on site 24 hours a day to monitor and help you through this difficult process. To learn more about treatment, contact us today.  </p>
                <br />
            </div>
        </Fade>
    </div>




</>
  )
}

export default WhatWeDo
