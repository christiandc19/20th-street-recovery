import React from 'react'
import './InsuranceLogos.css'


function InsuranceLogos(props) {
  return (
        <div className='insurance-props'>
            <div>
            <img className='image' src= {props.Image} alt="logo" />
            </div>
        </div>
  )
}

export default InsuranceLogos;