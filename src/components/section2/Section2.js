import React from 'react'
import './Section2.css'
import Circle1 from '../../assets/circle1.png'
import Circle2 from '../../assets/circle2.png'
import Circle3 from '../../assets/circle3.png'
import Circle4 from '../../assets/circle4.png'
import Circle5 from '../../assets/circle5.png'
import Circle6 from '../../assets/circle6.png'

const Section2 = () => {
  return (
    <>
        <div className='section2'>

                <div className='section2-header container'>
                    <h1>Treatment Planning for Long-Lasting Recovery</h1>
                    <p>We work with you to create a personalized treatment plan based on the information you share with us at intake, during your bio-psych-social assessment, and through ongoing individual sessions and family sessions where we help you identify a few key factors about your situation.</p>
                </div>

            <div className='section2-content container'>



{/* ---------------------------- FLEX 1 --------------------------- */}
{/* 1 */}

                <div className='section2-flex'>
                    <div className='section2-left'>
                    <div className='section2-left-content'>
                            <div className='text'>
                                <h1>Get Treatment That's Right For You</h1>
                                <p>With a higher level of resident support and accountability, our resident-centered approach advances the healing of you. Once you complete detoxification, your treatment starts with a minimum 25 hours of clinical treatment per week.</p>
                            </div>
                            
                            <div className='circle'>
                                <img src={Circle1} alt="Helping Hands Sign" loading="lazy" />
                            </div>
                        </div>
                    </div>

{/* 2 */}
                    <div className='section2-right'>
                        <div className='section2-right-content'>
                            <div className='text'>
                                <h1>Address Your Emotions</h1>
                                <p>Weekly group sessions focused on increasing self-esteem. Stay ready for whatever life throws at you and explore how your thoughts, experiences, and behavior affect your emotions.</p>
                            </div>
                            
                            <div className='circle'>
                                <img src={Circle2} alt="Support Group sign" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>

{/* ------------------------------- FLEX 2 ------------------------- */}
{/* 3 */}

            <div className='section2-flex2'>
                    <div className='section2-left2'>
                        <div className='section2-left-content2'>
                            <div className='circle2'>
                                <img src={Circle3} alt="Replapse sign" loading="lazy" />
                            </div>
                            <div className='text2'>
                                <h1>Prevent Relapse</h1>
                                <p>Ability to recognize the signs and symptoms of relapse is the key to relapse prevention. We help you identify and learn about alternate behavioral patterns to help you avoid situations that could trigger a relapse.</p>
                            </div>
                        </div>
                    </div>

{/* 4 */}
                    <div className='section2-right2'>
                        <div className='section2-right-content2'>
                            <div className='circle2'>
                                <img src={Circle4} alt="Family" loading="lazy" />
                            </div>

                            <div className='text2'>
                                <h1>Strengthen Family Dynamics</h1>
                                <p>20th Street is also a chance for you and your loved ones to process how addiction affects everyone in a support system. At with us, family members and others in your support system are encouraged to participate in group and individual counseling.</p>
                            </div>
                        </div>
                    </div>
                </div>


{/* --------------------- FLEX 3 ------------------------ */}
{/* 5 */}

<div className='section2-flex'>
                    <div className='section2-left'>
                    <div className='section2-left-content'>

                            <div className='text'>
                                <h1>Monitor Your Progress</h1>
                                <p>We store extensive records of your individual treatment plan in a secure digital archive, which gets updated every 30 days, or as you meet your objectives or your needs change.</p>
                            </div>
                            
                            <div className='circle'>
                                <img src={Circle5} alt="Progress sign" loading="lazy" />
                            </div>
                        </div>
                    </div>

{/* 6 */}
                    <div className='section2-right'>
                        <div className='section2-right-content'>
                            <div className='text'>
                                <h1>Incidental Medical Services (IMS)</h1>
                                <p>We offer Access to Incidental Medical Services to address medical issues associated with detoxification and the provision of addiction treatment while you focus on long-term recovery. <br/><br/>*IMS does not include the provision of general primary medical care.</p>
                            </div>
                            
                            <div className='circle'>
                                <img src={Circle6} alt="Medical Sign" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </>
    
  )
}

export default Section2