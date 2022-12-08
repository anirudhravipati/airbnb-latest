import { useState } from 'react'
import React from 'react'
import airbnbLogo from './assets/airbnb logo.svg'
import './Nav.css'

function Nav() {
  return (
    <div className="Nav">
      <nav className = "nav-content">
        <img src={airbnbLogo} className="img-logo" />
      </nav>
    </div>
  )
}

export default Nav
