import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
// import WhatWeDo from '../whatWeDo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';

import Sample from '../../components/sampleComponent/sample'


const home = () => {
  return (
    <>
    {/* <WhatWeDo /> */}
    <Sample />
    <Whoweare />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
