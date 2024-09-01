import { useState, useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const Filter = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { allPokemon, setAllPokemon } = useContext(PokemonContext);

    const handleChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        // Filter Pokémon based on the search query
        const filteredPokemon = allPokemon.filter(pokemon =>
            pokemon.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(filteredPokemon)
        // Update the context with the filtered Pokémon
        setAllPokemon(filteredPokemon);
    };

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input
                    className="prompt"
                    placeholder="Search by Name..."
                    value={searchQuery}
                    onChange={handleChange}
                />
                <i className="search icon" />
            </div>
        </div>
    );
}

export default Filter;
