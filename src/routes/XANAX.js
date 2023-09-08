import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import XANAX from '../components/Addiction-Xanax/Xanax'
import XanaxSection from '../components/Addiction-Xanax/XanaxSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const Xanax = () => {
  return (
    <>
    <Navbar /> 
    <XANAX />
    <XanaxSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Xanax