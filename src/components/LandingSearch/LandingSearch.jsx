import './LandingSearch.css';
import React from 'react'
import {FaSistrix} from 'react-icons/fa'
import axios from 'axios';

const apiRickAndMorthy = "https://rickandmortyapi.com/api/character";

class LandingSearch extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        characters:[]
    }
  }
  
componentDidMount(){
    axios.get(apiRickAndMorthy).then(resp => {this.setState({characters:resp.data})});
}
  render(){

      console.log(this.state.characters)

  return (
    <div className="landingSearch">
        <h3 className="searchTitle">Look for your favorite character</h3>
        <div className='inputBox'>
          <input className='searchInput' placeholder="Search.." />
          <a className='searchBtn' href='#'>
           <FaSistrix className='inputicon'/>
          </a>
         
        </div>
    </div>
  );
} 
}

export default LandingSearch;