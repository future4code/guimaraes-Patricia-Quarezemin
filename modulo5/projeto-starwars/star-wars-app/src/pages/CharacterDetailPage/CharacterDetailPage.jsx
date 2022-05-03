import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'


const CharacterDetailPage = () => {

    const [characterDetail, setCharacterDetail] = useState({})

    useEffect(() =>{
        getCharacterDetail()
    }, [])

    const params = useParams()
    
    const getCharacterDetail = () => {
        axios
            .get(`${BASE_URL}/people/${params.i}`)
            .then((res) => setCharacterDetail(res.data.results))
            .catch((err) => console.log(err))
    }
    
    const characterListDetail = characterDetail.map((character, i) =>{
        return <li>{character.name}</li>
    })

    return (
        <div>
            {characterListDetail}
        </div>
    )
}

export default CharacterDetailPage