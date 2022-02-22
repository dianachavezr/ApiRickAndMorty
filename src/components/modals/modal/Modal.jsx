import React from 'react'
import './Modal.css'
const Modal = (props) => {
    return (
        <div className='modal isOpen'>
            <div className='modalContainer'>
                <button className='modalClose'>X</button>
                {props.children}
            </div>
        </div>
    )
}
export default Modal
