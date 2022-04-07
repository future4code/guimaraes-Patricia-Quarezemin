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
    display: flex;
    justify-content: space-between;
`
const Main = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
`
const DivFooter = styled.div`
    border-top: 1px solid pink;
    height: 5vh;
`
const ApplicationFormPage = () => {


    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }
    return (
        <MainContainer>
            <DivHeader>
                <h2>LabeX</h2>
                <button onClick={goToHomePage}>Home</button>
            </DivHeader>
           <Main>
               <h2><strong>Candidate-se a uma viagem espacial:</strong></h2>
               <h3>Seu nome completo:</h3>
               <input placeholder='Nome'/>
               <h3>Sua idade:</h3>
               <input placeholder='Idade'/>
               <h3>Sua Profissão:</h3>
               <input placeholder='Profissão'/>
               <h3>Por que escolher VOCÊ:</h3>
               <input placeholder='Nome'/>
               <h3>Escolha a viagem:</h3>
               <select placeholder='Nome'/>
               <h3>País que reside:</h3>
               <select placeholder='Nome'/>
               <br></br>
               <button>ENVIAR</button>
           </Main>
           <DivFooter />
        </MainContainer>
    )
}
export default ApplicationFormPage