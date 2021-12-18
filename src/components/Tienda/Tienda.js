import React from 'react'

import Navbar from '../Navbar/Navbar';
import BtnFlotante from '../BtnFlotante/BtnFlotante';
import ComprarPokemon from './ComprarPokemon';
import CantidadPokemon from './CantidadPokemon';

import pokemon from '../../img/pokemon.png'

export default function Tienda() {
    return (
        <>
            <Navbar />
            <BtnFlotante />

            <div className="tienda">
                <h2 className='title-store'>Tienda</h2>
                <img src={pokemon} className='img-tienda' />
                <CantidadPokemon />
                <ComprarPokemon />
            </div>
        </>
    )
}
