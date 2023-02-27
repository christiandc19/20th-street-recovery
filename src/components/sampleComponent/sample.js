import React from 'react'
import './sample.css'
import Fade from 'react-reveal/Fade';

const sample = () => {
  return (
    <>

<div className='sample'>
            <Fade left>
                <h1 className='sample-header'>THE BEST OUTPATIENT TREATMENT CENTER IN LOS ANGELES CALIFORNIA</h1><br/>
            </Fade>

<Fade right>
<section className='sampleSection'>
  <div class="sampleContainer">
    
    <div class="sample-left"></div>
    <div class="sample-right">
      <div class="content">
        
      <p> You may have lost your way but here you won’t get lost in the crowd. 20th Street Recovery is an inviting, home-like environment where compassionate clinicians and staff members work collaboratively with you to address your unique needs. Rooted in the 12-step philosophy and a trauma-informed, evidence-based approach, we’ll show you how to manage and live with addiction, co-occurring disorders and other underlying issues, like anxiety or depression. Surrounded by a supportive recovery community, you’ll heal internally and, in turn, heal your relationships. Find your footing here and get ready for the next phase of your life. </p>
      </div>
    </div>
  </div>
</section>
</Fade>
</div>
    </>
  )
}

export default sample
