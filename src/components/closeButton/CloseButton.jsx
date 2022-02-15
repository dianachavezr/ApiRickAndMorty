import React from 'react'
import CloseBtn from './closeButton.css'
import CloseBtn1 from '../../assets/close-icon.svg'

function CloseButton({background, text, color}) {
  return (
    <button className='closeButton'><img alt="closeBtn" src= {CloseBtn1}/> </button>
  )
}

export default CloseButton