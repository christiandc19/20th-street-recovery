import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';

import Whoweare2 from '../../assets/slider1.jpg'

import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'
import Cards from '../servicesCards/Cards';




const Whoweare = () => {
  return (
<>

    <Cards />

    <div className='wrap'>
        <Fade right>
            <div className="left">
                <div className='Whoweare-icon'>
                <h1 className='icon-header'>ABOUT OUR SERVICES</h1><br/>

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
                <img src={Whoweare2}  alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>
    </div>



</>
  )
}

export default Whoweare