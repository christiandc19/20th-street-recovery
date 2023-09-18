import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import STIMULANT from '../components/Addiction-Stimulant/Stimulant'
import STIMULANTSECTION from '../components/Addiction-Stimulant/StimulantSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const Stimulant = () => {
  return (
    <>
    <Navbar /> 
    <STIMULANT />
    <STIMULANTSECTION />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Stimulant