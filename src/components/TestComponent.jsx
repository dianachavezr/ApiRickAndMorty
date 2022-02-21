import React from 'react'
import './testComponent.css'
import NavbarLightMode from './Sections/NavbarLigthMode/NavbarLightMode'
import NavbarDarkMode from './Sections/NavbarDarkMode/NavbarDarkMode'
import Footer from './Sections/Footer/Footer'




const TestComponent = () => {
  return (
    <div className='testComponents'>
       <NavbarLightMode/>
       <NavbarDarkMode/>
      <Footer/> 
     
      
    </div>
  )
}

export default TestComponent