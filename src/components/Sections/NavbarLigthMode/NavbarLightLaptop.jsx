import React from 'react'
import './navbarLight.css'
import LinkButton from '../../Buttons/linkButton/LinkButton'
import LinkButtonGame from '../../Buttons/linkButton/LinkButtonGame'
import ToggleSwitch from '../../Buttons/pageConfigButton/PageConfigButton'
import LogoRM from '../../logo/LogoBlue'
import { NavLink } from 'react-router-dom'

function NavbarLightLaptop({background, text, color}) {
  return (
    <nav className='navbar'>

    <div className='leftButtons'>
    <NavLink to="/"><LinkButton background='var(--black)'  color='var(--gray)'  text='Home'/></NavLink>
    <NavLink to="/characters"><LinkButton background='var(--black)'  color='var(--gray)'  text='Characters'/></NavLink>
    </div>
    <div className='logo'>
   <a href='https://rickandmortyapi.com/' target='_blank'> <LogoRM/></a>
    </div>
    <div className='rightButtons'>
    <NavLink to="/carruselpage"><LinkButton background='var(--black)'  color='var(--gray)'  text='Species'/></NavLink>
    <LinkButtonGame background='var(--black)' color='var(--gray)'  text='Games' url="https://www.minijuegos.com/juego/rick-mortys-rushed-licensed-adventure" />
    
    </div>
    </nav>
  )
}

export default NavbarLightLaptop