import React from 'react';
import LandingSec from "../components/Sections/LandingSec/LandinSec"

const Landing = ({ onSet, detailCharacter }) => {
  return (
    <>
         <LandingSec onSet={onSet} detailCharacter={detailCharacter}/>
    </>
  )
}

export default Landing