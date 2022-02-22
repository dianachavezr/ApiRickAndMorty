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
    const [items, setItems] = useState([
        {"image":'https://rickandmortyapi.com/api/character/avatar/1.jpeg', "name":'Rick Sanchez', "id":1},
        {"image":'https://rickandmortyapi.com/api/character/avatar/2.jpeg', "name":'Morty Smith', "id":2},
        {"image":'https://rickandmortyapi.com/api/character/avatar/242.jpeg', "name":'Mr. Meeseeks', "id":242},
        {"image":'https://rickandmortyapi.com/api/character/avatar/329.jpeg', "name":'Snuffles (Snowball)', "id":329},
        {"image":'https://rickandmortyapi.com/api/character/avatar/353.jpeg', "name":'Tiny Rick', "id":353},
        {"image":'https://rickandmortyapi.com/api/character/avatar/265.jpeg', "name":'Pickle Rick', "id":265},
        {"image":'https://rickandmortyapi.com/api/character/avatar/306.jpeg', "name":'Scary Terry', "id":306},
        {"image":'https://rickandmortyapi.com/api/character/avatar/244.jpeg', "name":'Mr. Poopybutthole', "id":244},
        {"image":'https://rickandmortyapi.com/api/character/avatar/5.jpeg', "name":'Jerry Smith', "id":5},
        {"image":'https://rickandmortyapi.com/api/character/avatar/196.jpeg', "name":'Krombopulos Michael', "id":196}
    ]);

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
        getSpecies('human',setSpecie2)
        getSpecies('alien',setSpecie3)
    },[])

    return (
        <div className="container-carousel">
            <div className="carousel-wrapper">
                <Carousel breakPoints={breakPoints}>
                {items.map((item) => (
                <WideCard key={item.id} idPersonaje={item.id}><img src={item.image} style={{borderRadius: 15 + 'px'}}/><p className="textName">{item.name}</p></WideCard>
                ))}
                </Carousel>
            </div>

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
