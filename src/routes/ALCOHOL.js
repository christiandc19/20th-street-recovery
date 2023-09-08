import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ALCOHOL from '../components/Addiction-Alcohol/Alcohol'
import AlcoholSection from '../components/Addiction-Alcohol/AlcoholSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const Alcohol = () => {
  return (
    <>
    <Navbar /> 
    <ALCOHOL />
    <AlcoholSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Alcohol