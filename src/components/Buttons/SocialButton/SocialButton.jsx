import React from 'react'
import './SocialButton.css'
import {FaGithub, FaReact} from 'react-icons/fa'

import Educamas from '../../../assets/EducamasLogo.png'
import ApiDocs from '../../../assets/ApiDocs.png'

const SocialButton = () => {
  return (
    <div className='socialButton'>
        <div className='contSocial'>
          <FaGithub className='socialIcon'/>
          <FaReact className='socialIcon'/>
          <img src={ApiDocs} alt="" />
          <img src={Educamas} alt="" />
        </div>
    </div>
  )
}

export default SocialButton