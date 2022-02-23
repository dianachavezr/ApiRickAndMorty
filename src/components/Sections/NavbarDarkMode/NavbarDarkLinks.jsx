import React from 'react'
import LinkButton from '../../Buttons/linkButton/LinkButton'
import PageConfigButton from '../../Buttons/pageConfigButton/PageConfigButton'
import { NavLink, link } from 'react-router-dom';



function NavbarDarkLinks(props) {
  return (

    <div className='navbarHamburguerDark'>

        <nav>
       
        <ul>
   
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
                <NavLink to="/"><LinkButton background='var(--transparent)' color='var(--blue)'  text='Home'/></NavLink>
            </li>
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
            <NavLink to="#"><LinkButton background='var(--transparent)' color='var(--blue)'  text='Characters'/></NavLink>
            </li>
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
            <NavLink to="/carruselpage"><LinkButton background='var(--transparent)' color='var(--blue)'  text='Species'/></NavLink>
            </li>
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
            <NavLink to="#"><LinkButton background='var(--transparent)' color='var(--blue)'  text='Games'/></NavLink>
            </li>
            
        </ul>
       

    </nav>

    </div>

  )
}

export default NavbarDarkLinks