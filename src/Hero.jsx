import { useState } from 'react'
import React from 'react'
import heroSectionMain from './assets/hero section main.png'
import './Hero.css'

function Hero() {
return (
  <div className="Hero">
    <div className = "hero-image-section">
      <img src={heroSectionMain} className="img-hero-main"/>
    </div>
    <div className="hero-copy">
        <h1> Online Experiences</h1>
        <h2>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
      </div>
  </div>
)
}

export default Hero
