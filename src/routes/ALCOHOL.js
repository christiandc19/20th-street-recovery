import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ALCOHOL from '../components/Alcohol/Alcohol'
import SASection from '../components/Alcohol/SASection'


const Alcohol = () => {
  return (
    <>
    <Navbar /> 
    <ALCOHOL />
    <SASection />
    <Footer />
     </>
  )
}

export default Alcohol