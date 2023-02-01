import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
// import WhatWeDo from '../whatWeDo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';



const home = () => {
  return (
    <>
    {/* <WhatWeDo /> */}
    <Whoweare />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
