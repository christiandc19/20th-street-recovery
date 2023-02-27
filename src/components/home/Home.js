import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import Cards from '../servicesCards/Cards';

import Sample from '../../components/sampleComponent/sample'

const home = () => {
  return (
    <>
    <Cards />
    <Whoweare />
    <Sample />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
