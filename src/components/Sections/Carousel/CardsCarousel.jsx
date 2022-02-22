import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import WideCard from "../../cardComponents/WideCard/WideCard";
import "../../cardComponents/WideCard/WideCard.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 640, itemsToShow: 5, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1024, itemsToShow: 6 },
    { width: 1280, itemsToShow: 7 },
    { width: 1536, itemsToShow: 7 }
];

function CardsCarousel() {
    const [specie1,setSpecie1] = useState([]);
    const [specie2,setSpecie2] = useState([]);
    const [specie3,setSpecie3] = useState([]);

    const getSpecies = async(type,state)=>{
        let peticion = await fetch(`https://rickandmortyapi.com/api/character/?species=${type}`);
        let respuesta = await peticion.json();
        let data = respuesta.results;
        state(data)
    }

    useEffect(()=>{
        getSpecies('humanoid',setSpecie1)
        getSpecies('robot',setSpecie2)
        getSpecies('alien',setSpecie3)
    },[])

    return (
        <div className="container-carousel">
            <div className="carousel-wrapper">
                <Carousel breakPoints={breakPoints}>
                {specie1.map((s) => (
                <WideCard key={specie1.id}><img src={s.image} style={{borderRadius: 15 + 'px'}}/><p className="textName">{s.name}</p></WideCard>
                ))}
                </Carousel>
            </div>

            <div className="carousel-wrapper">
                <Carousel breakPoints={breakPoints}>
                {specie2.map((s) => (
                <WideCard key={specie2.id}><img src={s.image} style={{borderRadius: 15 + 'px'}}/><p className="textName">{s.name}</p></WideCard>
                ))}
                </Carousel>
            </div>

            <div className="carousel-wrapper">
                <Carousel breakPoints={breakPoints}>
                {specie3.map((s) => (
                <WideCard key={specie3.id}><img src={s.image} style={{borderRadius: 15 + 'px'}}/><p className="textName">{s.name}</p></WideCard>
                ))}
                </Carousel>
            </div>
        </div>
    );
}

export default CardsCarousel;
