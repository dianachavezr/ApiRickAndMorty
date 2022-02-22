import './LandinSec.css';
import React from 'react';
import LandingSearch from "../../LandingSearch/LandingSearch";
import LandingImage from '../../LandingImage/LandingImage';
import ParticleBackground from '../../configparticles/ParticleBackground';


    function LandingSec(){

        return (
            <div className="landingSec">
                <ParticleBackground />
                    <div className='mainSection'>
                        <LandingImage />
                        <LandingSearch />
                    </div>
            </div>
          );
      } 
    export default LandingSec;

