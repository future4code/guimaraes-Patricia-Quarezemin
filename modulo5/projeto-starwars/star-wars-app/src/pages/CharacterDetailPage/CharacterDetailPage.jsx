import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constants/urls'


const CharacterDetailPage = () => {

    const [characterDetail, setcharacterDetail] = useState([])

    useEffect(() => {
        goToDetailPage()
    }, [])

    const goToDetailPage = () => {
        axios
            .get(`${BASE_URL}/people`)
            .then((res) => setcharacterDetail(characterDetail, res))
            .catch((err) => console.log(err))
    }

    const DetailCharacter = characterDetail.map((detail, i) => {
        return <li key={i}>
            {detail.name}
            {detail.height}
            {detail.mass}
            {detail.hair_color}
            {detail.skin_color}
            {detail.eye_color}
            {detail.birth_year}
            {detail.gender}
        </li>
    })
    return (
        <div>
            {DetailCharacter}
        </div>
    )
}

export default CharacterDetailPage