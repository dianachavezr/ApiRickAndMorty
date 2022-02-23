import React from 'react'
import LinkButton from '../../Buttons/linkButton/LinkButton'
import PageConfigButton from '../../Buttons/pageConfigButton/PageConfigButton'
import { NavLink, link } from 'react-router-dom';


function NavbarLightLinks(props) {
  return (

    <div className='navbarHamburguer1'>

        <nav>
       
        <ul>
   
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
            <NavLink to="/"><LinkButton className='btnHome'  background='var(--black)'  color='var(--gray)'  text='Home'/></NavLink>
            </li>
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
            <NavLink to='#'><LinkButton background='var(--black)'  color='var(--gray)'  text='Characters'/></NavLink>
            </li>
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
            <NavLink to='/carruselpage'><LinkButton background='var(--black)'  color='var(--gray)'  text='Species' /></NavLink>
            </li>
            <PageConfigButton/>
        </ul>
       

    </nav>

    </div>

  )
}

export default NavbarLightLinks