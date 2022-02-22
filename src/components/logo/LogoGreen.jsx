import React from 'react'
import './logo.css'
import LogoGreen from '../../assets/logoGreen.png'

function Logo({background, text, color}) {
  return (
      <div className='btnLogoGreen'>
        <a  href='#' ><img className='logoRyMGreen' alt="logoBtn" src= {LogoGreen}/></a>
        <p>API</p>

        </div>  
  )
}

export default Logo