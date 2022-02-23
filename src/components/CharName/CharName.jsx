import React from 'react'
import './CharName.css'

const CharName = ({ name }) => {

  return (
    <div className='contCharName'>
        <div className="lineTop"></div>
        <div className="nameChar">
            {name}
        </div>
        <div className="lineBotton"></div>
    </div>
  )
}

export default CharName