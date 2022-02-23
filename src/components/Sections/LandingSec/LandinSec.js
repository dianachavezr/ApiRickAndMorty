import './LandinSec.css';
import React from 'react';
import LandingSearch from "../../LandingSearch/LandingSearch";
import LandingImage from '../../LandingImage/LandingImage';
import ParticleBackground from '../../configparticles/ParticleBackground';


    function LandingSec( { onSet, detailCharacter } ){

        return (
            <div className="landingSec">
                <ParticleBackground />
                    <div className='mainSection'>
                        <LandingImage />
                        <LandingSearch onSet={onSet} detailCharacter={detailCharacter}/>
                    </div>
            </div>
          );
      } 
    export default LandingSec;

