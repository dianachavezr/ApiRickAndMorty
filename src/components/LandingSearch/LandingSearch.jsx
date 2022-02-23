import './LandingSearch.css';
import React, {useState, useEffect} from "react";
import {FaSistrix} from 'react-icons/fa';
import axios from 'axios';

const apiRickAndMorthy = "https://rickandmortyapi.com/api/character";

function LandingSearch(props) {

  const [characters, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState({});

  console.log(term)
  useEffect(() => {
    axios.get(apiRickAndMorthy)
    .then(res =>{
        const data = res.data;
        setData(data)
        
    })
    
    },[]);
   
    console.log(characters)

       function handleSubmit(){
      const characterSubmit = characters.results.filter(character => character.name === term)
       setSelectedCharacter(characterSubmit[0])
     }
   
     return (
      <div className="landingSearch">
          <h3 className="searchTitle">Look for your favorite character</h3>
          <div className='inputBox'>
            <form className='formBox' onSubmit={e =>{e.preventDefault();handleSubmit();}}>
              <input className='searchInput' placeholder="Type Character.." onChange={e => setTerm(e.target.value)}/>
              <button className='searchBtn' href='#' ><FaSistrix className='inputicon' /></button>
            </form>
          </div>
             {selectedCharacter && <h1>{selectedCharacter.name}</h1>}
      </div>
      
    );

 
} 



export default LandingSearch;
