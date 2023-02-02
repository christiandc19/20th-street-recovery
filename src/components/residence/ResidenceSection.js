import React from 'react'
import ContactForm from '../contact/ContactForm'
import Fade from 'react-reveal/Fade';

import './ResidenceSection.css'


import Home1 from '../../assets/home1.png'
import Home2 from '../../assets/home2.png'
import Home3 from '../../assets/home3.png'
import Home4 from '../../assets/home4.png'
import Home5 from '../../assets/home5.png'
import Home6 from '../../assets/home6.png'
import Home7 from '../../assets/home7.png'
import Home8 from '../../assets/home8.png'




const ResidenceSection = () => {
  return (
<>
<div className="residence-section-header container">
                <h1>OUR HOMES</h1><br/>
                <p>Transitional sober housing focused on healing and long-term recovery
                </p>
</div>




<div className='flex-right container'>
                    <Fade left>
                    <div className='thumbnail'>
                        <img src={ Home1 } width="500" height="400" alt="Home" loading="lazy"/>
                    </div>
                    </Fade>


                    <Fade right>
                    <div className='thumbnail'>
                    <img src={ Home2 } width="500" height="400" alt="Home" loading="lazy"/>
                    </div>
                    </Fade>

                    <Fade left>
                    <div className='thumbnail'>
                    <img src={ Home3 } width="500" height="400" alt="Home" loading="lazy"/>
                    </div>
                    </Fade>

                    <Fade right>
                    <div className='thumbnail'>
                    <img src={ Home4 } width="500" height="400" alt="Home" loading="lazy"/>
                    </div>
                    </Fade>                 

                    <Fade left>
                    <div className='thumbnail'>
                    <img src={ Home5 } width="500" height="400" alt="Home" loading="lazy"/>
                    </div>

                    </Fade>                          
                    <Fade right>
                    <div className='thumbnail'>
                    <img src={ Home6 } width="500" height="400" alt="Home" loading="lazy"/>
                    </div>
                    </Fade>                          

                    <Fade left>
                    <div className='thumbnail'>
                    <img src={ Home7 } width="500" height="400" alt="Home" loading="lazy"/>
                    </div>
                    </Fade>   

                    <Fade right>
                    <div className='thumbnail'>
                    <img src={ Home8 } width="500" height="400" alt="PHome" loading="lazy"/>
                    </div>
                    </Fade>  

                    </div>


<ContactForm />

    </>
  )
}

export default ResidenceSection
