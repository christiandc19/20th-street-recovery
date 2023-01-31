import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import ContactForm from '../contact/ContactForm';



const home = () => {
  return (
    <>
    <WhatWeDo />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
