import { useState, useEffect } from 'react';
import handleFetch from '../utils/handleFetch';
import PokemonContext from './PokemonContext';

const starterPokemon = [
    // ... your starterPokemon data
];

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState(starterPokemon);
    const [error, setError] = useState('');

    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch('http://localhost:4000/pokemon');
            if (data) setAllPokemon(data);
            if (error) setError(error.message);
        };
        doFetch();
    }, []);

    const addPokemon = async (pokemon) => {
        const [newPokemon, error] = await handleFetch('http://localhost:4000/pokemon', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pokemon),
        });
        if (newPokemon) setAllPokemon((prev) => [...prev, newPokemon]);
        if (error) console.error('Failed to add Pokémon:', error.message);
    };
    console.log(allPokemon)

    let contextValues = { allPokemon, addPokemon, setAllPokemon };

    return (
        <PokemonContext.Provider value={contextValues}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;
