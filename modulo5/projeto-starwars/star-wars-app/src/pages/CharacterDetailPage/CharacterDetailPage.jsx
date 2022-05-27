import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import { MainContainer, ButtonCharacterList, CharacterCard, CardContainer, TextCard } from './styled'


const CharacterDetailPage = () => {

    const [characterDetail, setCharacterDetail] = useState([])
    const [planet, setPlanet] = useState([])

    useEffect(() => {
        getCharacterDetail()
    }, [])

    useEffect(() => {
        getPlanet()
    }, [])

    const params = useParams()

    const getCharacterDetail = () => {
        axios
            .get(`${BASE_URL}/people/${params.i}`)
            .then((res) => setCharacterDetail(res.data))
            .catch((err) => console.log(err))
    }

    const getPlanet = () => {
        axios
            .get(`https://swapi.dev/api/planets/${params.i}`)
            .then((res) => setPlanet(res.data))
            .catch((err) => console.log(err))
    }
    console.log(planet)

    const navigate = useNavigate()

    const goToCharacterList = () => {
        navigate('/list-page')
    }

    return (
        <MainContainer>
            <ButtonCharacterList onClick={goToCharacterList}>Character List</ButtonCharacterList>
            <CardContainer>
                <CharacterCard>
                    
                        <h3>{characterDetail.name}</h3>
                        <h4>Age: {characterDetail.height}</h4>
                        <h4>Eye Color: {characterDetail.eye_color}</h4>
                        <h4> Home Planet: {planet.name}</h4>
                    
                </CharacterCard>
            </CardContainer>
        </MainContainer>
    )
}

export default CharacterDetailPage