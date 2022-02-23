import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./ParticleConfig";

export default function ParticleBackground(){
    return(
        <Particles params={ParticleConfig}></Particles>
    );
}