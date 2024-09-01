import { useState, useContext } from "react"
import PokemonContext from "../context/PokemonContext"

const PokemonForm = () => {
    const { addPokemon } = useContext(PokemonContext);
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPokemon = {name, hp, front, back}
        console.log(`NEW POKEMON: ${newPokemon}`)
        addPokemon(newPokemon);
    }

    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" onChange={(e) => setHp(e.target.value)}/>
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="front" placeholder="url" onChange={(e) => setFront(e.target.value)}/>
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="back" placeholder="url" onChange={(e) => setBack(e.target.value)}/>
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonForm
