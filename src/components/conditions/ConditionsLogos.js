import React from 'react'
import './ConditionsLogos.css'


function ConditionsLogos(props) {
  return (
        <div className='conditions-props'>
            <div>
            <img className='image' src= {props.Image} alt="Mental Health" />
            <p>{props.header}</p>
            </div>
        </div>
  )
}

export default ConditionsLogos;