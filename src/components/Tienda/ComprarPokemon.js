import React from "react";
import { useDispatch } from "react-redux";
import { buy_pokemon_action, return_pokemon_action } from '../../redux/actions/gameShopAction';

const ComprarPokemon = () => {

    const dispatch = useDispatch();

    return (
        <div className="buttons-store">
            <button className="btn-buy" onClick={() => {
                dispatch(buy_pokemon_action(1));
            }}>
                Comprar Pokemon
            </button>
            <button className="btn-return" onClick={() => {
                dispatch(return_pokemon_action(1));
            }}>
                Regresar Pokemon
            </button>
        </div>
    );
}

export default ComprarPokemon;