import './LandingSearch.css';
import React from 'react'
import {FaSistrix} from 'react-icons/fa'

function LandingSearch() {
  return (
    <div className="landingSearch">
        <h3 className="searchTitle">Look for your favorite character</h3>
        <div className='inputBox'>
          <input className='searchInput' placeholder="Search.."/>
          <a className='searchBtn' href='#'>
           <FaSistrix className='inputicon'/>
          </a>
         
        </div>
       
      
       
    </div>
  );
}

export default LandingSearch;