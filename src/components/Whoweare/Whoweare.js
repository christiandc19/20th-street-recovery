import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';
import { FaCheck } from 'react-icons/fa';

import Whoweare1 from '../../assets/slider5.png'

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
                        <FaCheck className='star'/> DEDICATED STAFF.
                        The medical professionals on our team are completely dedicated to your recovery.


                    </li><br />
                    <li>
                        <FaCheck className='star'/> PROVEN METHODS. Our treatment methods are solely based on proven research and science-based evidence.


                    </li><br />
                    <li>
                        <FaCheck className='star'/> 24/7 SUPPORT. Guidance and support are always in reach. We provide care for you whenever needed.


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

    <div className="wrap2-container">
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
    </div>


</>
  )
}

export default Whoweare