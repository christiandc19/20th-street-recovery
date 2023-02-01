import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import BIPOLARDISORDER from '../components/MH-BipolarDisorder/BipolarDisorder'
import BipolarDisorderSection from '../components/MH-BipolarDisorder/BipolarDisorderSection'


const BipolarDisorder = () => {
  return (
    <>
    <Navbar /> 
    <BIPOLARDISORDER />
    <BipolarDisorderSection />
    <Footer />
     </>
  )
}

export default BipolarDisorder