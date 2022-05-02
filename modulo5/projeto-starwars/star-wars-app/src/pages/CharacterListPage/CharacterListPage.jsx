import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constants/urls'
import {CharacterCard} from './styled'

const CharacterListPage = () => {
    const [characterList, setCharacterList] = useState([])

    useEffect(() => {
        getCharacterList()
    }, [])

    const getCharacterList = () => {
        axios
            .get(`${BASE_URL}/people`)
            .then((res) => setCharacterList(res.data.results))
            .catch((err) => console.log('Deu erro', err))
    }

    const characterCards = characterList.map((character, i) => {
        return <CharacterCard>
            <p key={i}>{character.name}</p>
        </CharacterCard>

    })
    return (
        <div>
            <h2>Lista de Personagens</h2>
            {characterCards}
        </div>
    )
}

export default CharacterListPage

