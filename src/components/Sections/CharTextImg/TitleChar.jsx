import React from 'react'
import './CharTextImg.css'

const TitleChar = ({name, id}) => {
  return (
    <h1 className='titleH1'>{name} <span style={{color: `red`}}>{id}</span></h1>/* Character name */
    
  )
}

export default TitleChar