import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DETOXMarijuana from '../components/Detox-Marijuana/DetoxMarijuana'
import DETOXMarijuanaSection from '../components/Detox-Marijuana/DetoxMarijuanaSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const DetoxMarijuana = () => {
  return (
    <>
    <Navbar /> 
    <DETOXMarijuana />
    <DETOXMarijuanaSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default DetoxMarijuana