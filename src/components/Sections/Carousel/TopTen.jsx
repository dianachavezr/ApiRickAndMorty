import React from 'react'
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

const TopTen = () => {
    const items = ([
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
    
    return (
        <div className="container-carousel">
            <h1  style={{color:"#33254C", textAlign:"center", marginBottom:"4%"}}>Top Ten Most Popular</h1>
            <div className="carousel-wrapper">
                <Carousel breakPoints={breakPoints}>
                {items.map((item) => (
                <WideCard key={item.id} idPersonaje={item.id}><img src={item.image} style={{borderRadius: 15 + 'px'}}/><p className="textName">{item.name}</p></WideCard>
                ))}
                </Carousel>
            </div>
        </div>
    )
}

export default TopTen