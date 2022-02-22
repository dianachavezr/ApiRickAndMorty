import React from 'react'
import './navbarLight.css'
import LinkButton from '../../Buttons/linkButton/LinkButton'
import ToggleSwitch from '../../Buttons/pageConfigButton/PageConfigButton'
import LogoRM from '../../logo/LogoBlue'

function NavbarLightLaptop({background, text, color}) {
  return (
    <nav className='navbar'>

    <div className='leftButtons'>
    <a href='/'><LinkButton background='var(--black)'  color='var(--gray)'  text='Home'/></a>
    <a href='/#characters'><LinkButton background='var(--black)'  color='var(--gray)'  text='Characters'/></a>
    </div>
    <div className='logo'>
    <LogoRM/>
    </div>
    <div className='rightButtons'>
    <a href='/#docs'><LinkButton background='var(--black)'  color='var(--gray)'  text='Docs'/></a>
    <ToggleSwitch label=" " />
    </div>
    </nav>
  )
}

export default NavbarLightLaptop