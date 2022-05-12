import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContainer, ButtonsContainer, Buttons } from './styled'
import  BackgroundImage  from '../../assets/Images/home.png'

const HomePage = () => {

    const navigate = useNavigate()

    const goToCharacterListPage = () => {
        navigate('/list-page')
    }

    const goToPlanetsPage = () => {
        navigate('/planets-page')
    }
    return (
        <MainContainer>
            <img src={`${BackgroundImage}`} alt='logo star wars - capa'></img>
            <ButtonsContainer>
                <Buttons onClick={goToCharacterListPage}>Characters</Buttons>
                <Buttons onClick={goToPlanetsPage}>Planets</Buttons>
            </ButtonsContainer>
        </MainContainer>
    )
}

export default HomePage
