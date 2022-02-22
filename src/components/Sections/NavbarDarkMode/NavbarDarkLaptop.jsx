import React from 'react'
import './navbarDark.css'
import LinkButton from '../../Buttons/linkButton/LinkButton'
import ToggleSwitch from '../../Buttons/pageConfigButton/PageConfigButton'
import LogoGreen from '../../logo/LogoGreen'

function NavbarDarkLaptop({background, text, color}) {
  return (
    <nav className='navbarDark'>

    <div className='leftButtonsDark'>
    <a href='/'><LinkButton background='var(--transparent)' color='var(--blue)'  text='Home'/></a>
    <a href='/#characters'><LinkButton background='var(--transparent)' color='var(--blue)'  text='Characters'/></a>
    </div>
    <div className='logoGreen'>
    <LogoGreen/>
    </div>
    <div className='rightButtonsDark'>
    <a href='/#shows'><LinkButton background='var(--transparent)' color='var(--blue)'  text='Shows'/></a>
    <a href='/#games'><LinkButton background='var(--transparent)' color='var(--blue)'  text='Games'/></a>
    <ToggleSwitch label=" " />
    </div>
    </nav>
  )
}

export default NavbarDarkLaptop