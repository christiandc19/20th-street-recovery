import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HEROIN from '../components/Addiction-Heroin/Heroin'
import HeroinSection from '../components/Addiction-Heroin/HeroinSection'


const Heroin = () => {
  return (
    <>
    <Navbar /> 
    <HEROIN />
    <HeroinSection />
    <Footer />
     </>
  )
}

export default Heroin