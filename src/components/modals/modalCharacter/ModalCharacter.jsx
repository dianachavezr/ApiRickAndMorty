import React from 'react'
import { useState } from 'react'
import Modal from '../modal/Modal'

const ModalCharacter = (props) => {

    
    console.log(props.character)
    return (
        <Modal>
            <p>{props.character.id}</p>
            <p>{props.character.name}</p>
        </Modal>
    )
}

export default ModalCharacter