import React, { useEffect , useState } from 'react'
import './CharTextImg.css'
import TitleChar from './TitleChar'
import ImgChar from './ImgChar'
import TextChar from './TextChar'


const CharTextImg = () => {

    const [valid, setValid] = useState(true)
    const [character, setCharacter]  = useState({})

    useEffect(() => {
        const getChar = async (/* id || url */) => {
        let data = await fetch("https://rickandmortyapi.com/api/character/826")/* https://rickandmortyapi.com/api/character/${id} */
        let resp = await data.json()
        console.log(resp.origin.name)
        console.log(resp)
        setCharacter(resp)
        setValid(false)
    }
      getChar()
  }, [])
  
  

  return valid ? <div>Loading...</div> : (
    <div className='CharTextImg'>
        <TitleChar name={character.name} id={character.id}/>
        <div className="contChar">
            <ImgChar image={character.image} id={character.id}/>
            <TextChar species={character.species} originChar={character.origin.name} created={character.created} gender={character.gender} status={character.status}/>
        </div>

    </div>
  )
}

export default CharTextImg