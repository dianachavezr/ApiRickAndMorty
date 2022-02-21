import React from 'react'
import './CharTextImg.css'
import Status from './Status'

const TextChar = ({species , originChar, created, gender,status}) => {

  return ( 
    <div>
        <Status status={status}/>
        <div className="apiInfo">
            <span className='bg-black'>Specie: {species}</span>
            <span className='bg-black'>Origin: {originChar}</span>
            <span className='bg-black'>Gender: {gender}</span>
            <span className='bg-black'>Date: {created}</span>
        </div>
    </div>
  )
}

export default TextChar