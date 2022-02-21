import React from 'react'
import './WideCard.css';

const WideCard = ({img, names}) => {
    
    return (
        <div className='WideCard'>
            <img src={img}/>
            <p>{names}</p>
        </div>
    )
}

export default WideCard