import React from 'react'
import linkButton from './linkButton.css'

function LinkButton({background, text, color}) {
  return (
    <button style={{background: background}}  
     className='btn'><a style={{color:color}}>{text}</a>
    </button>
  )
}

export default LinkButton