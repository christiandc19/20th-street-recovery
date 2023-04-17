import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import Cards from '../servicesCards/Cards';
import Conditions from '../conditions/Conditions';
import Sample from '../../components/sampleComponent/sample'
import MissionHome from '../mission/MissionHome';

const home = () => {
  return (
    <>
    <Cards />
    <Conditions />
    <Sample />
    <Whoweare />
    <InsuranceSection />
    <MissionHome />
    <ContactForm />
    </>
  )
}

export default home
