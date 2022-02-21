import React, {useState} from 'react'
import WideCard from '../../cardComponents/WideCard/WideCard';

const Carousel = () => {
    const images = ['https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    'https://rickandmortyapi.com/api/character/avatar/242.jpeg',
    'https://rickandmortyapi.com/api/character/avatar/329.jpeg',
    'https://rickandmortyapi.com/api/character/avatar/353.jpeg',
    'https://rickandmortyapi.com/api/character/avatar/265.jpeg',
    'https://rickandmortyapi.com/api/character/avatar/306.jpeg',
    'https://rickandmortyapi.com/api/character/avatar/244.jpeg',
    'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    'https://rickandmortyapi.com/api/character/avatar/196.jpeg']

    const [selectedIndex,setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0])

    const selectNewImage = (index,images,next = true)=>{
        const condicion = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condicion ? selectedIndex + 1 : 0) : condicion ? selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)
    }

    const prev = ()=>{
        selectNewImage(selectedIndex,images,false)
        selectNewName(selectedIndex,names,false)
    }

    const next = ()=>{
        selectNewImage(selectedIndex,images)
        selectNewName(selectedIndex,names)
    }

    const names = ['Rick Sanchez','Morty Smith','Mr. Meeseeks','Snuffles (Snowball)'
    ,'Tiny Rick','Pickle Rick','Scary Terry','Mr. Poopybutthole','Jerry Smith','Krombopulos Michael']

    const [selectedNames, setSelectedName] = useState(names[0])

    const selectNewName = (index,names,next = true)=>{
        const condicion = next ? selectedIndex < names.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condicion ? selectedIndex + 1 : 0) : condicion ? selectedIndex - 1 : names.length - 1;
        setSelectedName(names[nextIndex])
        setSelectedIndex(nextIndex)
    }

    return (
        <>
            <button onClick={prev}>{'<'}</button>
            <WideCard img={selectedImage} names={selectedNames}/>
            <button onClick={next}>{'>'}</button>
        </>
    )
}

export default Carousel 