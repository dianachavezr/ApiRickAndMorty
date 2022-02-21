import React from 'react'
import './Card.css'
import ModalCharacter from '../../modals/modalCharacter/ModalCharacter'
const Card = (props) => {

  //const [openModal, setOpenModal]=useState(false);

  return (

    <div className='cardContainer'>

      {//
        props.arrayCharacters.map((item) => (
          <div key={item.id} className='cardCharacter' /*style={{backgroundImage:`url(${item.image})`}}*/>
            <img src={item.image} />
            <div className='titleCard'>
              <h3>{item.name}</h3>

            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Card