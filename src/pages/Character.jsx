

import CharName from '../components/CharName/CharName'
import CharTextImg from '../components/Sections/CharTextImg/CharTextImg'



const Character = ({ detailCharacter }) => {



  return (
    <div className='Character'>
        <CharName name={detailCharacter.name}/>
        <CharTextImg id={detailCharacter.id}/>
    </div>
  )
}

export default Character