import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import { MainContainer, CharacterCard, CardsDiv, ButtonHome, CardContainer } from './styled'

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

    const navigate = useNavigate()

    const goToDetailPage = (i) => {
        navigate(`/detail-page/${i}`)
    }

    const goToHomePage = () => {
        navigate('/')
    }

    const characterCards = characterList.map((character, i) => {
        return <CardsDiv>
            <CharacterCard onClick={() => goToDetailPage(i + 1)}>
                <p key={i}>{character.name}</p>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`}
                    width='180px' height='250px'></img>
            </CharacterCard>
        </CardsDiv>
    })

    return (
        <MainContainer>
            <ButtonHome onClick={goToHomePage}>Home</ButtonHome>
            <CardContainer>
                {characterCards}
            </CardContainer>
        </MainContainer>
    )
}

export default CharacterListPage

