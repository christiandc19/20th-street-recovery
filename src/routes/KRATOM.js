import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import KRATOM from '../components/Addiction-Kratom/Kratom'
import KratomSection from '../components/Addiction-Kratom/KratomSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const Fentanyl = () => {
  return (
    <>
    <Navbar /> 
    <KRATOM />
    <KratomSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Fentanyl