import { useContext } from 'react';
import PokemonCard from './PokemonCard';
import PokemonContext from '../context/PokemonContext';

// TODO: import the PokemonContext and useContext

const PokemonCollection = () => {
    const contextValues = useContext(PokemonContext)
    // TODO: Replace this to get the pokemon from PokemonContext
    const allPokemon = contextValues.allPokemon;

    return (
        <div className="ui six cards">
            {allPokemon?.map(pokemon => ( 
                <PokemonCard 
                    key={pokemon.id} 
                    name={pokemon.name} 
                    hp={pokemon.hp}
                    front={pokemon.front}
                    back={pokemon.back}
                />

            ))}
        </div>
    )
}

export default PokemonCollection