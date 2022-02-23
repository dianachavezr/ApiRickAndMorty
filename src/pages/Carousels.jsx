import React from 'react'
import "../components/Sections/Carousel/Carousel.css"
import HeaderCarru from "../components/Sections/headercarru/HeaderCarru"
import CardsCarousel from "../components/Sections/Carousel/CardsCarousel"

const Carousels = () => {
  return (
      <div className='carruBody'>
         <HeaderCarru />
         <CardsCarousel />
      </div>
     
     
  
  )
}

export default Carousels