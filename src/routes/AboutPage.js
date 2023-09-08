import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import About from '../components/about/About'
import MissionSecttion from '../components/mission/MissionSection'
import ContactForm from '../components/contact/ContactForm'

const AboutPage = () => {
    return (
        <>
           <Navbar /> 
           <About />
           <MissionSecttion /> 
           <ContactForm />
           <Footer />
        </>
    )
}

export default AboutPage