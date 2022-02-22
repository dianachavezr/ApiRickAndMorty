import React from 'react'
import './testComponent.css'
import NavbarLightMode from './Sections/NavbarLigthMode/NavbarLightMode'
import NavbarDarkMode from './Sections/NavbarDarkMode/NavbarDarkMode'
import Footer from './Sections/Footer/Footer'
import LandinSec from './Sections/LandingSec/LandinSec'

const TestComponent = () => {
  return (
    <div className='testComponents'>
       
       <NavbarDarkMode/>
       <LandinSec/>
     
     
      
    </div>
  )
}

export default TestComponent