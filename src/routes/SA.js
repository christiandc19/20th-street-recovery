import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SA from '../components/SA/SA'
import Conditions from '../components/conditions/Conditions';
import InsuranceSection from '../components/insurance/InsuranceSection';
import ContactForm from '../components/contact/ContactForm'



const SAbuse = () => {
  return (
    <>
    <Navbar /> 
    <SA />
    <Conditions />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default SAbuse