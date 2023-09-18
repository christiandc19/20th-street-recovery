import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DETOXCOCAINE from '../components/Detox-Cocaine/DetoxCocaine'
import DETOXCOCAINESECTION from '../components/Detox-Cocaine/DetoxCocaineSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const DetoxCocaine = () => {
  return (
    <>
    <Navbar /> 
    <DETOXCOCAINE />
    <DETOXCOCAINESECTION />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default DetoxCocaine