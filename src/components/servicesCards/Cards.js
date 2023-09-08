import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'


const Cards = () => {
  return (
    <>

    <div className='main-cards-header container'>
      <h1>WELCOME TO 20TH STREET RECOVERY</h1>
      <h2>“Set yourself on the right path moving forward.”</h2>

    </div>



            <div className="cards-header container">

            <div class="card-wrap">
                <div className='cards-header-left'>
                  <h3>20th Street Recovery makes getting treatment <span>possible.</span></h3><br/>
                  <p>At 20th Street Recovery Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
              </div>
            

              <div class="card">
              <img src={Card1} alt="Mental Health" loading="lazy"/>
              <div class="card-body">
                <h5 class="card-title">ADDICTION TREATMENT</h5>
                <p class="card-text">Depending on your needs, we offer treatment for co-occurring disorders that can address both mental health and addiction disorders at the same time.</p>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/substance-abuse">
                        <div className='card-btn'>
                        <button>Learn More</button>
                        </div>
                    </Link>
                </LinkRoll>
              </div>
            </div>


            <div class="card">
              <img src={Card2} alt="Mental Health" loading="lazy"/>
              <div class="card-body">
                <h5 class="card-title">JOB ASSISTANCE</h5>
                <p class="card-text">We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.</p>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/jobs">
                        <div className='card-btn'>
                        <button>Learn More</button>
                        </div>
                    </Link>
                </LinkRoll>
              </div>
            </div>
  </div>
</div>
    </>
  )
}

export default Cards









