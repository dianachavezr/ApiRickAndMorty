import React from 'react'
import './testComponent.css'
import NavbarLightMode from './Sections/NavbarLigthMode/NavbarLightMode'
import NavbarDarkMode from './Sections/NavbarDarkMode/NavbarDarkMode'
import Footer from './Sections/Footer/Footer'
import LandinSec from './Sections/LandingSec/LandinSec'
import CardsCarousel from './Sections/Carousel/CardsCarousel'
import TopTen from './Sections/Carousel/TopTen'

const TestComponent = () => {
  return (
    <div className='testComponents'>
        <NavbarLightMode/>
        <NavbarDarkMode/>

        <TopTen/>
    </div>
  )
}

export default TestComponent