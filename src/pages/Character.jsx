import React from 'react'


import CharName from '../components/CharName/CharName'
import CharTextImg from '../components/Sections/CharTextImg/CharTextImg'
import NavbarLightMode from '../components/Sections/NavbarLigthMode/NavbarLightMode'


const Character = () => {
  return (
    <div className='Character'>
        <NavbarLightMode/>
        <CharName/>
        <CharTextImg/>
    </div>
  )
}

export default Character