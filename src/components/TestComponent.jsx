import React from 'react'
import './testComponent.css'
import NavbarLightMode from './Sections/NavbarLigthMode/NavbarLightMode'
import NavbarDarkMode from './Sections/NavbarDarkMode/NavbarDarkMode'
import Footer from './Sections/Footer/Footer'
import CardsCarousel from './Sections/Carousel/CardsCarousel'

const TestComponent = () => {
  return (
    <div className='testComponents'>
        <NavbarLightMode/>
        <NavbarDarkMode/>
        <Footer/> 
        <CardsCarousel/>
    </div>
  )
}

export default TestComponent