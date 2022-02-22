import React from 'react'
import LinkButton from '../../Buttons/linkButton/LinkButton'
import PageConfigButton from '../../Buttons/pageConfigButton/PageConfigButton'



function NavbarDarkLinks(props) {
  return (

    <div className='navbarHamburguerDark'>

        <nav>
       
        <ul>
   
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
                <a href='/'><LinkButton background='var(--transparent)' color='var(--blue)'  text='Home'/></a>
            </li>
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
            <a href='/#characters'><LinkButton background='var(--transparent)' color='var(--blue)'  text='Characters'/></a>
            </li>
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
            <a href='/#shows'><LinkButton background='var(--transparent)' color='var(--blue)'  text='Shows'/></a>
            </li>
            <li  onClick={() =>props.isMobile && props.closeMenu()}>
            <a href='/#games'><LinkButton background='var(--transparent)' color='var(--blue)'  text='Games'/></a>
            </li>
            <PageConfigButton/>
        </ul>
       

    </nav>

    </div>

  )
}

export default NavbarDarkLinks