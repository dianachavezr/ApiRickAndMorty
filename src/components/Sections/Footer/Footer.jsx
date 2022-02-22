import React from 'react'
import './Footer.css'

import SocialButton from '../../Buttons/SocialButton/SocialButton'
import Copyright from '../../copyright/Copyright'

const Footer = () => {
  
  return (
    <div className='footer'>
        <SocialButton/>
        <div className="footerCopyRight" >
          <Copyright color="white" />
        </div>
    </div>
  )
}

export default Footer