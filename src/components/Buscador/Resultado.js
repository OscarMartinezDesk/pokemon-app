import React from "react";
import { useSelector } from "react-redux";

const Resultado = () => {

    const buscador = useSelector((state) => state.buscador);

    return (
        <div className="resultado">
            <h3 className="titulo-resultado">Resultado: </h3>
            {buscador.loading && <div className="buscando">Buscando...</div>}
            {
                buscador.pokemon.length >= 1 && 
                <div className="encontrado">
                    <img src={buscador.pokemon[0].sprites.front_default} alt="Pokemon" className="img-result" />
                     <span className="name-result">{buscador.pokemon[0].name}</span>
                </div>
            }
            {buscador.error !== '' && <span className="no-encontrado">{buscador.error}</span>}
        </div>
    )
}

export default Resultado;