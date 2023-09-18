import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DETOXHEROIN from '../components/Detox-Heroin/DetoxHeroin'
import DETOXHEROINSECTION from '../components/Detox-Heroin/DetoxHeroinSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const DetoxHeroin = () => {
  return (
    <>
    <Navbar /> 
    <DETOXHEROIN />
    <DETOXHEROINSECTION />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default DetoxHeroin