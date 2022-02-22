import React from 'react'
import './Modal.css'
import CloseBtn1 from '../../../assets/close.png'
const Modal = (props) => {

    /*console.log(props.children)*/
    //{props.children}
    //<button className='modalClose' onClick={()=>props.close()}><img src={CloseBtn1} alt="" /></button>
    return (
        <div className='modal'>
            <div className='modalContainer'>
                <div className='buttonClose'>
                    
                    <a href="#" onClick={()=>props.close()}> <img src={CloseBtn1} alt="" /></a>
                </div>
                {props.children}
            </div>
        </div>
    )
}
export default Modal
