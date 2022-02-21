import React from 'react'
import LinkButton from '../../Buttons/linkButton/LinkButton'
import PageConfigButton from '../../Buttons/pageConfigButton/PageConfigButton'



function NavbarLightLinks(props) {
  return (

    <div className='navbarHamburguer1'>

        <nav>
       
        <ul>
   
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
                <a href='/'><LinkButton className='btnHome'  background='var(--black)'  color='var(--gray)'  text='Home'/></a>
            </li>
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
            <a href='/#characters'><LinkButton background='var(--black)'  color='var(--gray)'  text='Characters'/></a>
            </li>
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
            <a href='/#docs'><LinkButton background='var(--black)'  color='var(--gray)'  text='Docs' /></a>
            </li>
            <PageConfigButton/>
        </ul>
       

    </nav>

    </div>

  )
}

export default NavbarLightLinks