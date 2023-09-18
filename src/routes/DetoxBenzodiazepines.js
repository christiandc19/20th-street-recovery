import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DETOXBENZODIAZEPINES from '../components/Detox-Benzodiazepines/DetoxBenzodiazepines'
import DETOXBENZODIAZEPINESSECTION from '../components/Detox-Benzodiazepines/DetoxBenzodiazepinesSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const DetoxBenzodiazepines = () => {
  return (
    <>
    <Navbar /> 
    <DETOXBENZODIAZEPINES />
    <DETOXBENZODIAZEPINESSECTION />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default DetoxBenzodiazepines