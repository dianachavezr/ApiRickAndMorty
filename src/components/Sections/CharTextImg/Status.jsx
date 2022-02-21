import React from 'react'

const Status = ({status}) => {
  return (
    <div className='status'>
        
        <div className="div">
            {status === 'Alive' ? <div className="circleGreen"></div> : status === 'Dead' ? <div className="circleRed"></div> : <div className="circleGray"></div>}
        </div>
        
        <span>{status}</span>
    </div> 
  )
}

export default Status