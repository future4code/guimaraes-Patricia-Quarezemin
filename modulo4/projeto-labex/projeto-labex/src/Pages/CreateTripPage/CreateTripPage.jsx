import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import BackgroundImage from '../../Images/space.jpg'

const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    height: 100vh;
    width: 100vw;
`
const DivHeader = styled.div`
    border-bottom: 1px solid pink;
    height: 5vh;
    color: pink;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 100px 100px;
`
const Main = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: pink;
`
const DivFooter = styled.div`
    border-top: 1px solid pink;
    height: 5vh;
`

const CreateTripPage = () => {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    const goToAdminHomePage = () => {
        navigate('admin/trips/:id')
    }
    return (
        <MainContainer>
            <DivHeader>
                <h2>LabeX</h2>
                <button onClick={goToAdminHomePage}>Voltar para ADM</button>
                <button onClick={goToHomePage}>Home</button>
            </DivHeader>
            <Main>
            <h2>Crie uma viagem:</h2>
            <h4>Nome:</h4>
            <input placeholder='Nome'/>
            <h4>Planeta:</h4>
            <select placeholder='Escolha'/>
            <h4>Data (dias):</h4>
            <h4>Descrição:</h4>
            <input placeholder='Descrição'/>
            <h4>Duração (dias):</h4>
            <button>Criar Viagem</button>
            </Main>
            <DivFooter />
        </MainContainer>
    )
}
export default CreateTripPage