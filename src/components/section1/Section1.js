import React from 'react'
import './Section1.css'
import img1 from "../../assets/section1-img1.jpg";


const Section1 = () => {
  return (
    <>

    <div className='section1'>
        <div className="section1-content container">
          <div className='section1-left'>
                <h1>What We Do</h1> <br />
                <h2>Substance Abuse Detox and Addiction Treatment Above and Beyond the Norms</h2><br />
                <hr />
                <p>
                Here at 20th Street Recovery, we firmly stand that without addressing our physical aspect, the mind cannot successfully recover. We go above and beyond the norms of mental health care, through a thorough and intentional treatment plan that is specific to every kind of individual that addresses not only the mental but also the physical inequalities in the body.
                <br /> <br />
                Methods used by 20th Street Recovery are non-invasive, distinct, and successful in relieving acute symptoms that act as roadblocks to receiving the full therapy. Additionally, to get past more difficult progress barriers, these services are provided on a consistent and ongoing basis which is closely observed in coordination with our clinical team.<br /> <br />The physical, mental, and spiritual imbalances have been found to be restored by its healing methods. Our design of substance abuse treatment is custom-fit to every individual. Compared to the programs which are commonly used, we are a firm believer that we can reach the full potential of our well-being by healing the body, mind and spirit.
                </p>
          </div>

          <div className='section1-right'>
            <img src={img1} alt="Calm man in front of the sea" loading="lazy" />
          </div>

        </div>
    </div>
    </>
  )
}

export default Section1
