import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FENTANYL from '../components/Addiction-Prescriptions/Prescriptions'
import FentanylSection from '../components/Addiction-Prescriptions/PrescriptionsSection'


const Prescriptions = () => {
  return (
    <>
    <Navbar /> 
    <FENTANYL />
    <FentanylSection />
    <Footer />
     </>
  )
}

export default Prescriptions
