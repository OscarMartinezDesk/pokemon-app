import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/buscadorAction";
import Resultado from "./Resultado";

const Buscador = () => {

    const dispatch = useDispatch();
    const [pokemon_name, set_pokemon_name] = useState('mewtwo');

    return (
        <>
        <div id="buscador">
                <h2 className="pregunta">¿QUE POKEMON ESTAS BUSCANDO?</h2>
                <input type="text" className="input-buscador" id="buscar_pokemon" 
                    value={pokemon_name}
                    onChange={
                        (event) => {
                            set_pokemon_name(event.target.value);
                        }
                    }
                />
                <p>Ejemplo:</p>
                <p>charizard | pikachu | articuno | mewtwo</p>
                <button className="btn-buscar" onClick={
                () => {
                    dispatch(fetchPokemon(pokemon_name));
                }
                }>
                    Buscar
                </button>
        </div>
        <Resultado />
        </>
    )
}

export default Buscador;
