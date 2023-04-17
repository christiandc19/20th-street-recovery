import React from 'react'

import Navbar from '../components/navbar/Navbar'
import METHOD from '../components/method/Method'
import METHODSECTION from '../components/method/MethodSection'

// import Treatment from '../components/treatment/Treatment'
// import TreatmentSection from '../components/treatment/TreatmentSection'
import ContactForm from '../components/contact/ContactForm';

import Footer from '../components/footer/Footer'

const TreatmentPage = () => {
    return (
        <>
           <Navbar /> 
           <METHOD />
           <METHODSECTION />
           {/* <Treatment />
           <TreatmentSection /> */}
           <ContactForm />
           <Footer />
        </>
    )
}

export default TreatmentPage
