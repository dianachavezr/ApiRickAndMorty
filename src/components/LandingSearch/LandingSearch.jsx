import './LandingSearch.css';
import React, { useState, useEffect } from "react";
import { FaSistrix } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const apiRickAndMorthy = "https://rickandmortyapi.com/api/character";

function LandingSearch({onSet, detailCharacter}) {

  const navigate = useNavigate()
  const [characters, setData] = useState([]);
  const [term, setTerm] = useState("");

  console.log(term)
  useEffect(() => {
    axios.get(apiRickAndMorthy)
      .then(res => {
        const data = res.data;
        setData(data)
      })

  }, []);

  console.log(characters)

  function handleSubmit() {
    const characterSubmit = characters.results.filter(character => character.name === term)
    onSet(characterSubmit[0])
    if(characterSubmit[0]){
      navigate('/character')
    } else{
      onSet({error: `Personaje no se encuentra`})
      setTimeout(()=>{

        onSet({})
      }, 1500)
    }

  }

  return (
    <div className="landingSearch">
      <h3 className="searchTitle">Look for your favorite character</h3>
      <div className='inputBox'>
        <form className='formBox' onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
          <input className='searchInput' placeholder="Type Character.." onChange={e => setTerm(e.target.value)} />
          <button className='searchBtn' href='#' ><FaSistrix className='inputicon' /></button>
        </form>
      </div>
        {detailCharacter.error && <span style={{color: "white"}}>{term} not found</span>}
    </div>

  );


}



export default LandingSearch;
