import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react/cjs/react.production.min';

function PokeCard() {

    const [pokemon, setPokemon] = useState({})

    const PegaPokemon = pokeName => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                setPokemon(pokemon(response.data))
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        PegaPokemon()
    }, [pokemon])

    return (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight}Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites &&(
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    )
}
export default PokeCard