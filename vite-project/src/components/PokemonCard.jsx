import { useState } from "react";
// TODO: This component should render a single pokemon's stats and image.

const PokemonCard = ({ key, name, hp, front, back}) => {
    const [img, setImg] = useState(front)
    const clickHandle = () => {
        setImg(img === front ? back : front);
        console.log(img)
    }
    return (
        <div className="ui card" onClick={ clickHandle }>
            <div>
                <div className="image">
                    <img alt="pokemon name" src={img} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {hp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard