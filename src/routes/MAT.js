import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Mat from '../components/Addiction-MAT/Mat'
import MATSection from '../components/Addiction-MAT/MatSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const MAT = () => {
  return (
    <>
    <Navbar /> 
    <Mat />
    <MATSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default MAT