import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import BackgroundImage from '../../assets/Images/star-wars-background.png'
import styled from 'styled-components'
import { LetterText } from './styled'

const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`
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
            <button onClick={goToCharacterList}>Lista de Personagens</button>
            <LetterText> Nome: {characterDetail.name}</LetterText>
            <LetterText> Idade: {characterDetail.height}</LetterText>
            {/* <p> Planeta de origem: {planet.homeworld}</p> */}
        </MainContainer>
    )
}

export default CharacterDetailPage