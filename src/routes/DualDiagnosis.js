import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DD from '../components/Addiction-Dual-Diagnosis/DualDiagnosis'
import DDSection from '../components/Addiction-Dual-Diagnosis/DualDiagnosisSection'
import ContactForm from '../components/contact/ContactForm'
import InsuranceSection from '../components/insurance/InsuranceSection';


const DualDiagnosis = () => {
  return (
    <>
    <Navbar /> 
    <DD />
    <DDSection />
    <InsuranceSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default DualDiagnosis