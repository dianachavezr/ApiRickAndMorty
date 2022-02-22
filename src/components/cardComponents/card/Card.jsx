import React from 'react'
import { useState } from 'react';
import './Card.css'
import ModalCharacter from '../../modals/modalCharacter/ModalCharacter';
const Card = (props) => {
  const [selectChar, setSelectChar]= useState();
  
  console.log(selectChar);
  return (

    <div className='cardContainer'>

      {//onClick={(item)=>props.function(item)}
        props.arrayCharacters.map((item) => (
          <div key={item.id} className='cardCharacter'>
            <img src={item.image} alt="imagen" />
            <div className='titleCard' onClick={()=>setSelectChar(item)}>
              <h3>{item.name}</h3>
                  
            </div>
          </div>
        ))
        
      }
      {selectChar && <ModalCharacter changeChar={setSelectChar} character={selectChar}/>}
    </div>
  )
}

export default Card