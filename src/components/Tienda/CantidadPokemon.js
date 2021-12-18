import React from "react";
import { useSelector } from "react-redux";

const CantidadPokemon = () => {

    const game_shop = useSelector((state) => state.game_shop);

    return (
        <React.Fragment>
            <h2 className="cantidad">Unidades: { game_shop.pokemon }</h2>
        </React.Fragment>
    );
}



export default CantidadPokemon;