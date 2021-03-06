import React, { useEffect , useState } from 'react'
import './CharTextImg.css'
import TitleChar from './TitleChar'
import ImgChar from './ImgChar'
import TextChar from './TextChar'
import Copyright from '../../copyright/Copyright'


const CharTextImg = (props) => {

    const [valid, setValid] = useState(true)
    const [character, setCharacter]  = useState({})

    useEffect(() => {
        const getChar = async (id) => {
        let data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)/* https://rickandmortyapi.com/api/character/${id} */
        let resp = await data.json()
        console.log(resp.origin.name)
        console.log(resp)
        setCharacter(resp)
        setValid(false)
    }
      getChar(props.id)
  }, [props.id])
  
  

  return valid ? <div>Loading...</div> : (
    <div className='CharTextImg'>
        <TitleChar name={character.name} id={character.id}/>
        <div className="contChar">
            <ImgChar image={character.image} id={character.id}/>
            <TextChar species={character.species} originChar={character.origin.name} created={character.created} gender={character.gender} status={character.status}/>
        </div>
        <Copyright/>
    </div>
  )
}

export default CharTextImg