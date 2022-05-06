import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import { MainContainer, ButtonCharacterList, CharacterCard, CardContainer, TextCard } from './styled'


const CharacterDetailPage = () => {

    const [characterDetail, setCharacterDetail] = useState([])
    // const [planet, setPlanet] = useState({})

    useEffect(() => {
        getCharacterDetail()
    }, [])

    // useEffect(() =>{
    //     getPlanet()
    // }, [])

    const params = useParams()

    const getCharacterDetail = () => {
        axios
            .get(`${BASE_URL}/people/${params.i}`)
            .then((res) => setCharacterDetail(res.data))
            .catch((err) => console.log(err))
    }

    // const getPlanet = () => {
    //     axios
    //     .get(`${BASE_URL}/people/${params.l}`)
    //     .then((res) => setPlanet(res.data))
    //     .catch((err) => console.log(err))
    // }

    const navigate = useNavigate()

    const goToCharacterList = () => {
        navigate('/list-page')
    }

    // const characterListDetail = characterDetail.map((character, i) =>{
    //     return <p key={i}>{character.name}</p>
    // })

    return (
        <MainContainer>
            <ButtonCharacterList onClick={goToCharacterList}>Lista de Personagens</ButtonCharacterList>
            <CardContainer>
                <CharacterCard>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`}
                        width='250px' height='350px'></img>
                    <TextCard>
                        <h3>{characterDetail.name}</h3>
                        <h3> Idade: {characterDetail.height}</h3>
                    </TextCard>
                </CharacterCard>
            </CardContainer>
        </MainContainer>
    )
}

export default CharacterDetailPage