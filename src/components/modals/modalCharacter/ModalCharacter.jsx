import React from 'react'
import { useState } from 'react'
import Modal from '../modal/Modal'
import './ModalCharacter.css'
const ModalCharacter = ({ changeChar, character }) => {
    console.log(character)
    console.log(changeChar)
    const fecha = new Date(character.created)
    console.log(fecha);
    function closeModal() {
        changeChar("");
    }
    /*console.log(props.character.id)
    */
    return (
        <Modal close={closeModal}>
            <div className='cardModal'>
                <div className='cardImg' /*style={{backgroundImage: `url(${character.image})`}}*/>
                    <img src={character.image} alt="" />
                </div>
                <div className='cardBody'>
                    <h1>{character.name}</h1>
                    <div className='cardBodyText'>
                        <h3>Specie: {character.species}</h3>
                        <h3>Status: {character.status}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Location: {character.location.name}</h3>
                        <h3>Created: {fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear()}</h3>
                        <h3>Origin: {character.origin.name}</h3>
                    </div>

                </div>
            </div>
        </Modal>
    )
}

export default ModalCharacter