import React from 'react'

import Navbar from '../components/navbar/Navbar'
import METHOD from '../components/method/Method'
import METHODSECTION from '../components/method/MethodSection'
import InsuranceSection from '../components/insurance/InsuranceSection';
import ContactForm from '../components/contact/ContactForm';
import Footer from '../components/footer/Footer'

const DetoxPage = () => {
    return (
        <>
           <Navbar /> 
           <METHOD />
           <METHODSECTION />
           <InsuranceSection />
           <ContactForm />
           <Footer />
        </>
    )
}

export default DetoxPage
