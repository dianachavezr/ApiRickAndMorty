import React from 'react'
import { useState, useEffect } from 'react';
import './Card.css'
import ModalCharacter from '../../modals/modalCharacter/ModalCharacter';
import Pagination from '../pagination/Pagination';

const Card = () => {
  const [selectChar, setSelectChar] = useState();
  const [page, setPage] = useState(1);
  const [pageCharacter, setPageCharacter] = useState([]);
  let {info, results=[]}=pageCharacter;
  console.log(info)
  useEffect(() => {
    getCharacter(page);
  }, [page])

  async function getCharacter(num) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${num}`)
    const api = await response.json()
    setPageCharacter(api)
    console.log(pageCharacter)
  }

  function nextPage() {
    if (page == 42) {
      setPage(42)
    } else {
      setPage(page + 1)
    }

  }
  function prevPage() {
    if (page == 1) {
      setPage(1)
    } else {
      setPage(page - 1)
    }
  }


  return (
    <>

      <div className='cardContainer'>

        {//onClick={(item)=>props.function(item)}
          results.map((item) => (
            <div key={item.id} className='cardCharacter'>
              <img src={item.image} alt="imagen" />
              <div className='titleCard' onClick={() => setSelectChar(item)}>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))
        }
        {selectChar && <ModalCharacter changeChar={setSelectChar} character={selectChar} />}
      </div>
      {info && <Pagination info={info} page={page} setPage={setPage}/>}
      
      <div className='pagination'>
        <button onClick={() => prevPage()}>prevPage</button>
        <span> Page {page} of 42 </span>
        <button onClick={() => nextPage()}>NextPage</button>
      </div>
    </>
  )
}

export default Card