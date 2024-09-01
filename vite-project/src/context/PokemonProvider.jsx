import { useState, useEffect } from "react";
import handleFetch from '../utils/handleFetch';

// TODO: Import the PokemonContext
import PokemonContext from "./PokemonContext";

const starterPokemon = [
    {
        id: 0,
        name: "butterfree 1",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 1,
        name: "butterfree 2",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 2,
        name: "butterfree 3",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    }
]

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState(starterPokemon);
    const [error,setError] = useState('')
    // const [query, setQuery] = useState('');
    
    // TODO: use useEffect to fetch data from the local JSON server (remember to start JSON server!)
    useEffect(() => {
        const doFetch = async () => {
        const [data, error] = await handleFetch('http://localhost:4000/pokemon')
        // console.log(data.data);
        if(data) setAllPokemon(data);
        if(error) setError(error.message);
        }
        doFetch();
        
    }, [])

    const addPokemon = async (pokemon) => {
        const [newPokemon, error] = await handleFetch('http://localhost:4000/pokemon', {
            method: 'POST' , headers: {'Content-Type':'application/json'}, body: JSON.stringify(pokemon)
        })
        if(newPokemon) setAllPokemon((prev) => [...prev, newPokemon])
        if(error) console.error('Failed to add pokemon:', error.message)
    }

    console.log(allPokemon)
    // TODO: Add values to be included in the context here
    let contextValues = { allPokemon, setAllPokemon, addPokemon}

    // TODO: Wrap the {children} in the PokemonContext.Provider and provide the values above
    return (
        <PokemonContext.Provider value = { contextValues }>
            { children }
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;