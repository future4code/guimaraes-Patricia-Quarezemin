import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PokeCard from '././Components/PokeCard/PokeCard.jsx';
import './styles.css';

function App() {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

  const getPoke = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(response => setPokeList(response.data.results))
    .catch(err =>{
      console.log(err)
    })
  }

  useEffect(() =>{
    getPoke()
  }, [])

  const onChangePokeName = (event) =>{
    setPokeName(event.target.value)
  }

  return (
    <div >
      <select onChange={onChangePokeName}>
        <option value={''}>Nenhum</option>
        {pokeList.map(pokemon =>{
          return(
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
