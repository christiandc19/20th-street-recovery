import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import METH from '../components/Addiction-Meth/Meth'
import MethSection from '../components/Addiction-Meth/MethSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const Meth = () => {
  return (
    <>
    <Navbar /> 
    <METH />
    <MethSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Meth