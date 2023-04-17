import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';
import { FaRegStar } from 'react-icons/fa';

import Whoweare1 from '../../assets/slider5.png'
import Whoweare3 from '../../assets/slider2.jpg'

import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'




const Whoweare = () => {
  return (
<>

{/* WRAP 1 */}

    <div className='wrap1'>


        <Fade right>
            <div className="left">
                <h3>WHY CHOOSE US</h3>
                <h1>Focusing on you, with the best therapeutic care.</h1>
                <p> 
                <ul>
                    <li>
                        <FaRegStar className='star'/> A comprehensive medical assessment by a doctor to create an individualized treatment plan.
                    </li>
                    <li>
                        <FaRegStar className='star'/> Urine tests and other lab tests.
                    </li>
                    <li>
                        <FaRegStar className='star'/> The doctor prescribes a series of personalized medications to reduce the severity of withdrawal symptoms, slowly tapering off over time.
                    </li><br />
                </ul>
                </p>
            </div>
        </Fade>

        <Fade left>
            <div className="right">
                <img src={Whoweare1}  alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>



    </div>


{/* WRAP 2 */}

    <div className='wrap2'>


        <Fade right>
            <div className="content">
                <p>
                <h1>A healthier choice for a healthier you. </h1>
                </p><br />
                <p>
 
                We have staff on site 24 hours a day to monitor and help you through this difficult process. To learn more about treatment, contact us today.
                </p>
                </div>
        </Fade>
    </div>




{/* WRAP 3 */}

    <div className='wrap3'>


        <Fade right>
            <div className="left">
                <div className='Whoweare-icon'>
                <p className='icon-header'>ABOUT OUR SERVICES</p><br/>

                    <div className='icons'>
                    <img src={Icon1} width="50px" height="50px" alt="Conselling Session with a patient" loading="lazy" />
                    <p><span>DEDICATED STAFF</span> <br/> The medical professionals on our team are completely dedicated to your recovery. </p>
                    </div>

                    <div className='icons'>
                    <img src={Icon2} width="50px" height="50px" alt="Conselling Session with a patient" loading="lazy" />
                    <p><span>PROVEN METHODS</span> <br/> Our treatment methods are solely based on proven research and science-based evidence.</p>
                    </div>

                    <div className='icons'>
                    <img src={Icon3} width="50px" height="50px" alt="Conselling Session with a patient" loading="lazy" />
                    <p><span>24/7 SUPPORT</span> <br/> Guidance and support are always in reach. We provide care for you whenever needed.</p>
                    </div>
                </div>
                
            </div>
        </Fade>

        <Fade left>
            <div className="right">
                <img src={Whoweare3}  alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>

    </div>











</>
  )
}

export default Whoweare