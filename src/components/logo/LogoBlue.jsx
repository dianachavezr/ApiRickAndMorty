import React from 'react'
import './logo.css'
import LogoBlue from '../../assets/logoBlue.png'

function Logo({background, text, color}) {
  return (
      <div className='btnLogo'>
        <img className='logoRyM' alt="logoBtn" src= {LogoBlue}/>
        </div>  
  )
}

export default Logo