import React from 'react'
import './sample.css'
import Fade from 'react-reveal/Fade';

const sample = () => {
  return (
    <>
            <Fade left>
                      <h1 className='sample-header'>WHO WE ARE</h1><br/>
            </Fade>

            <Fade right>

<section className='sampleSection'>
  <div class="sampleContainer">
    
    <div class="sample-left"></div>
    <div class="sample-right">
      <div class="content">
        
      <p className='header2'>At <span>20TH STREET RECOVERY,</span> we provide safe and comfortable medical detox services for those struggling with addiction.</p>
        <p>To ensure that those who attend our rehab facility receive tailored care to meet their individual needs, we conduct a series of evaluations before you begin treatment at our drug and alcohol detox center. <br/> <br/> These evaluations allow us to understand your active addictions, history of substance abuse, mental health disorders, co-occurring disorders, prior drug and alcohol treatment, and how our detox center can help you overcome your substance use disorder.</p>
      </div>
    </div>
  </div>
</section>
</Fade>

    </>
  )
}

export default sample
