import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PANICDISORDER from '../components/MH-PanicDisorder/PanicDisorder'
import PanicDisorderSection from '../components/MH-PanicDisorder/PanicDisorderSection'


const PanicDisorder = () => {
  return (
    <>
    <Navbar /> 
    <PANICDISORDER />
    <PanicDisorderSection />
    <Footer />
     </>
  )
}

export default PanicDisorder