import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';

import Whoweare1 from '../../assets/slider1.jpg'
import Whoweare2 from '../../assets/slider2.jpg'

import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'




const Whoweare = () => {
  return (
<>


    <div className='wrap'>
        <Fade right>
            <div className="left">
                <div className='left1'>
                <p className='header2'>At <span>20TH STREET RECOVERY,</span> we provide safe and comfortable medical detox services for those struggling with addiction.
                To ensure that those who attend our rehab facility receive tailored care to meet their individual needs, we conduct a series of evaluations before you begin treatment at our drug and alcohol detox center. <br/> <br/> These evaluations allow us to understand your active addictions, history of substance abuse, mental health disorders, co-occurring disorders, prior drug and alcohol treatment, and how our detox center can help you overcome your substance use disorder.</p>
                </div>
                
            </div>
        </Fade>

        <Fade left>
            <div className="right">
                <img src={Whoweare1}  alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>
    </div>


    <div className='wrap reverse-wrap'>

        <Fade left>
            <div className="right">
                <img src={Whoweare2}  alt="Conselling Session with a patient" loading="lazy" />
            </div>
        </Fade>

        <Fade right>
            <div className="left">
                <div className='Whoweare-icon left1'>
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

    </div>











</>
  )
}

export default Whoweare