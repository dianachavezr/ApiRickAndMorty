import React from 'react'


import CharName from '../components/CharName/CharName'
import CharTextImg from '../components/Sections/CharTextImg/CharTextImg'



const Character = () => {
  return (
    <div className='Character'>
        <CharName/>
        <CharTextImg/>
    </div>
  )
}

export default Character