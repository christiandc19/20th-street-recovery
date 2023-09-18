import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DETOXMethamphetamine from '../components/Detox-Methamphetamine/DetoxMethamphetamine'
import DETOXMethamphetamineSection from '../components/Detox-Methamphetamine/DetoxMethamphetamineSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const DetoxAlcohol = () => {
  return (
    <>
    <Navbar /> 
    <DETOXMethamphetamine />
    <DETOXMethamphetamineSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default DetoxAlcohol