import React from 'react'
import './CharTextImg.css'

const ImgChar = ({image, id}) => {

  const topTen =
    {
        1:'https://raw.githubusercontent.com/sarisp3260/IMG/main/R%26M%20IMG/Rick.png',
        
        21: 'https://raw.githubusercontent.com/sarisp3260/IMG/main/R%26M%20IMG/Morthy2.png',
  
        242:'https://raw.githubusercontent.com/sarisp3260/IMG/main/R%26M%20IMG/Mr._Meeseeks.jpg',

        329: 'https://raw.githubusercontent.com/sarisp3260/IMG/main/R%26M%20IMG/Bola%20de%20nieve.png',

        353: 'https://raw.githubusercontent.com/sarisp3260/IMG/main/R%26M%20IMG/Tiny-Rick.png',

        265: 'https://raw.githubusercontent.com/sarisp3260/IMG/main/R%26M%20IMG/pickle-rick.png',

        306: 'https://raw.githubusercontent.com/sarisp3260/IMG/main/R%26M%20IMG/ScaryTerry.png',

        244: 'https://raw.githubusercontent.com/sarisp3260/IMG/main/R%26M%20IMG/Sr_pantalones_de_popo.png',

        5: 'https://raw.githubusercontent.com/sarisp3260/IMG/main/R%26M%20IMG/Jerry_Smith.png',

        196: 'https://raw.githubusercontent.com/sarisp3260/IMG/main/R%26M%20IMG/Krombopulos_Michael.png'
  
    }

let array1 = [1,21,242,329,353,265,306,244,5,196]/* topTen.map(item => item.id) */

  return (
    <div className='imgChar'>
        {/* <img src={image} alt=""/> */}
        {array1.includes(id) ? <img src={topTen[id]} alt="" className='imgO'/> : <img src={image} alt="" className='roundedImg'/>}
    </div>
  )
}

export default ImgChar