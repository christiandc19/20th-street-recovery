import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';

import Sample from '../../components/sampleComponent/sample'

const home = () => {
  return (
    <>
    <Sample />
    <Whoweare />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
