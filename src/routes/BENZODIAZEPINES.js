import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import BENZODIAZEPINES from '../components/Addiction-Benzodiazepines/Benzodiazepines'
import BENZODIAZEPINESSECTION from '../components/Addiction-Benzodiazepines/BenzodiazepinesSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const Benzodiazepines = () => {
  return (
    <>
    <Navbar /> 
    <BENZODIAZEPINES />
    <BENZODIAZEPINESSECTION />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Benzodiazepines