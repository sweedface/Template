import { useState, useEffect } from 'react';

const ShowCharacter = () => {
    const [characters, setCharacters] = useState([]);

    function getallCharacters() {

        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                console.log(data.results);
            })
    }

    useEffect(() => {
        getallCharacters()
    }, [] );

    return (
        <>
            <h1>Hola, soy el componente ShowCharacter</h1>
            {
            characters.map((character) =>
            <div key={character.id}>
                <img src={character.image} alt={character.name} />
                <p>Nombre: {character.name}</p>
                <p>Especie: {character.species}</p>
                <p>Estado: {character.status}</p>
            </div>
        )
    }
        </>
    )
    
}

export default ShowCharacter;