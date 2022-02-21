import './LandingImage.css';
import React from 'react'
import rm from "../../assets/Rick and Morty.png"
import rick from "../../assets/r&m.png"


function LandingImage() {
  return (
    <div className="landingImage">
       <img src={rm} className='portal' alt='portal'/>
       <img src={rick} className='personajes' alt='rick and morty' />
    </div>
  );
}

export default LandingImage;