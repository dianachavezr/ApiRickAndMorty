import React from 'react'
import CloseBtn from './closeButton.css'
import CloseBtn1 from '../../../assets/close.png'

function CloseButton({background, text, color}) {
        {/* CLOSE BUTTON PARA EL MODAL */}

  return (
    <div>
    <button className='closeButton'><img alt="closeBtn" src= {CloseBtn1}/> </button>
    </div>  
  )
}
export default CloseButton