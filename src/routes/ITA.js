import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Ita from '../components/Addiction-ITA/Ita'
import ITASection from '../components/Addiction-ITA/ItaSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const ITA = () => {
  return (
    <>
    <Navbar /> 
    <Ita />
    <ITASection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default ITA