import React from 'react'
import './navbarDark.css'
import LinkButton from '../../Buttons/linkButton/LinkButton'
import LinkButtonGame from '../../Buttons/linkButton/LinkButtonGame'
import ToggleSwitch from '../../Buttons/pageConfigButton/PageConfigButton'
import LogoGreen from '../../logo/LogoGreen'
import { NavLink } from 'react-router-dom'

function NavbarDarkLaptop({background, text, color}) {
  return (
    <nav className='navbarDark'>

    <div className='leftButtonsDark'>
    <NavLink to="/"><LinkButton background='var(--transparent)' color='var(--blue)'  text='Home'/></NavLink>
    <NavLink to="/characters"><LinkButton background='var(--transparent)' color='var(--blue)'  text='Characters'/></NavLink>
    </div>
    <div className='logoGreen'>
   <LogoGreen/>
    </div>
    <div className='rightButtonsDark'>
    <NavLink to="/carruselpage"><LinkButton background='var(--transparent)' color='var(--blue)'  text='Species'/></NavLink>
    <LinkButtonGame background='var(--transparent)' color='var(--blue)'  text='Games' url="https://www.minijuegos.com/juego/rick-mortys-rushed-licensed-adventure" />
    
    </div>
    </nav>
  )
}

export default NavbarDarkLaptop