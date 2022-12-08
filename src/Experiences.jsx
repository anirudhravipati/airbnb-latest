import { useState } from 'react'
import React from 'react'
import experienceHost from './assets/host image.png'
import starImage from './assets/Star.svg'
import './Experiences.css'
import experiencesData from './Data'

console.log(experiencesData)



function Experiences() {
  const experienceCardList = experiencesData.map(x =>
    <ExperienceCard 
      key = {x.id}
      coverImg ={x.coverImg}
      rating={x.rating}
      reviewCount = {x.reviewCount}
      location = {x.location}
      title = {x.title}
      price = {x.price}
      openSpots = {x.openSpots}
    />)
    
return (
  <div className="Experiences">
    {experienceCardList}
  </div>
)
}

function ExperienceCard(props) {
  let tagText 
  let tagExists=false;
  if (props.openSpots == 0)
  {
    tagExists=true
    tagText = "SOLD OUT"
  }
  else if(props.location == "Online")
  {
    tagExists=true
    tagText = "ONLINE"
  } 

  return(
  <div className="experience-card">
      { tagExists && <div className="experience-card-tag">{tagText}</div> }
      <img src = {props.coverImg}  className="img-host-card"/>
      <div className="rating-and-country">
        <img src={starImage} className="rating-star"/>
        <p className="primary-text">{props.rating}</p>
        <p className="secondary-text">{props.reviewCount}</p>
        <p className="secondary-text">.</p>
        <p className="secondary-text">{props.location}</p>
      </div>
      <div className="experience-title">
        <p className="primary-text">{props.title}</p>
      </div>
      <div className="experience-cost">
        <p className="emphasis-text">From</p>
        <p className="emphasis-text">{props.price}</p>
        <p className="primary-text">/</p>
        <p className="primary-text"> person</p>
      </div>
    </div>
  )
}

export default Experiences
