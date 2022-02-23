import React from 'react'
import './logo.css'
import LogoBlue from '../../assets/logoBlue.png'

function Logo({background, text, color}) {
  return (
      <div className='btnLogo'>
        <a href='https://rickandmortyapi.com/' target='_blank'><img className='logoRyM' alt="logoBtn" src= {LogoBlue}/></a>
        </div>  
  )
}

export default Logo