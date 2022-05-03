import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'


const CharacterDetailPage = () => {

    const [characterDetail, setCharacterDetail] = useState([])
    console.log(characterDetail)
    console.log(characterDetail.name)

    useEffect(() => {
        getCharacterDetail()
    }, [])

    const params = useParams()

    const getCharacterDetail = () => {
        axios
            .get(`${BASE_URL}/people/${params.i}`)
            .then((res) => setCharacterDetail(res.data))
            .catch((err) => console.log(err))
    }

    // const characterListDetail = characterDetail.map((character, i) =>{
    //     return <p key={i}>{character.name}</p>
    // })

    return (
        <div>
            <p> Nome: {characterDetail.name}</p>

            <p> Idade: {characterDetail.height}</p>


        </div>
    )
}

export default CharacterDetailPage