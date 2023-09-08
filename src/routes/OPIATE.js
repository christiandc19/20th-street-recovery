import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OPIATE from '../components/Addiction-Opiate/Opiate'
import OpiateSection from '../components/Addiction-Opiate/OpiateSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const Fentanyl = () => {
  return (
    <>
    <Navbar /> 
    <OPIATE />
    <OpiateSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Fentanyl