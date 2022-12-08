import { useState } from 'react'
import React from 'react'
import experienceHost from './assets/host image.png'
import starImage from './assets/Star.svg'
import './Experiences.css'
import experiencesData from './Data'

console.log(experiencesData)

function Hero() {
return (
  <div className="Experiences">
    <div className="experience-card">
      <img src = {experienceHost} className="img-host-card"/>
      <div className="rating-and-country">
        <img src={starImage} className="rating-star"/>
        <p className="primary-text">5.0</p>
        <p className="secondary-text">(6)</p>
        <p className="secondary-text">.</p>
        <p className="secondary-text">USA</p>
      </div>
      <div className="experience-title">
        <p className="primary-text">Life lessons with Katie Zaferes</p>
      </div>
      <div className="experience-cost">
        <p className="emphasis-text">From</p>
        <p className="emphasis-text">136$</p>
        <p className="primary-text">/</p>
        <p className="primary-text"> person</p>
      </div>
    </div>
  </div>
)
}

export default Hero
