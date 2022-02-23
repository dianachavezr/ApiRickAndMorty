import React from 'react'
import LinkButton from './LinkButton'

const LinksButtons = () => {
  return (
    <div className='linkButtons'>
      {/* BOTONES CARDC CHARACTER*/}
   <LinkButton className='btnHome'  background='var(--black)'  color='var(--gray)'  text='Home'/>
   <LinkButton background='var(--black)'  color='var(--gray)'  text='Docs'/>
   <LinkButton background='var(--black)'  color='var(--gray)'  text='Characters' />

    {/* BOTON FOOTER-LANDING*/}
   <LinkButton background='var(--white)'  color='var(--black)' text='Watch API docs'/>

    {/* BOTONES LANDING PAGE*/}
   <LinkButton background='var(--transparent)' color='var(--blue)'  text='Home'/>
   <LinkButton background='var(--transparent)' color='var(--blue)'  text='Characters'/>
   <LinkButton background='var(--transparent)' color='var(--blue)'  text='Shows'/>
   <LinkButton background='var(--transparent)' color='var(--blue)'  text='Games'/>
  
   </div>
  )
}

export default LinksButtons