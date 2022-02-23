import React from 'react'
import Card from '../components/cardComponents/card/Card'
import TopTen from '../components/Sections/Carousel/TopTen'

const Characters = () => {
  return (
    <div className='Characters' style={{backgroundColor:"#d3d3d3"}}>
        <TopTen/>
        <h1 style={{color:"#33254C", textAlign:"center", marginBottom:"4%"}}>All Characters</h1>
        <Card/>
    </div>
  )
}

export default Characters