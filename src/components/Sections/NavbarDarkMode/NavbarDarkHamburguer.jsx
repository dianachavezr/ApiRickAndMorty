import React from 'react'
import './navbarDark.css'
import NavDarkLinks from './NavbarDarkLinks'
import {ImMenu} from 'react-icons/im'
import {IoClose} from 'react-icons/io5'
import { useState } from 'react'
import LogoGreen from '../../logo/LogoGreen'
import Github from '../../../assets/github.png'
import Educamas from '../../../assets/EducamasLogoBlack.png'

function NavbarDarkHamburguer() {
    const [open, setOpen] = useState(false);

    const hamburguerOpenIcon =   
    <ImMenu  className='iconOpenHamburguer' size ='40px' color='white'
    onClick={() => setOpen(!open)}
    />

    const hamburguerCloseIcon =   
    <IoClose  className='iconCloseHamburguer' size ='40px' color='var(--purple)'  onClick={() => setOpen(!open)}
    />

    const closeMenu = () => setOpen(false);

  return (
      <div className='navbarDarkHamburguer'>
        <div className='navbarHamburguerTop'>
        
        <a  href='#' target='_blank' ><img className='navbarHamburguer-Logo'  src= {Github} /></a>
         <a  href='#' target='_blank' ><img className='navbarHamburguer-Logo'  src= {Educamas} /></a>
         </div>
         <LogoGreen className='logoHamburguer'/>
         
         
      <nav >
     { open ? hamburguerCloseIcon : hamburguerOpenIcon}
     { open && <NavDarkLinks isMobile={true} closeMenu = {closeMenu} />}   
      </nav>
      
    </div>
  )
}
export default NavbarDarkHamburguer