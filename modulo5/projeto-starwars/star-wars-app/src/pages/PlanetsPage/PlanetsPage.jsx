import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContainer, ButtonHome, ButtonContainer } from './styled'

const PlanetsPage = () => {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    return (
        <MainContainer>
            <ButtonContainer>
                <ButtonHome onClick={goToHomePage}>Home</ButtonHome>
            </ButtonContainer>
            <h2>Planets Page</h2>
        </MainContainer>
    )
}

export default PlanetsPage