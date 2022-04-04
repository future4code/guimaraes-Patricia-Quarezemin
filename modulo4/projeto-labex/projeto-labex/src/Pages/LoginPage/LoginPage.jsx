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
flex-direction: column;
align-items: center;
color: white;
`
const DivFooter = styled.div`
border-top: 1px solid pink;
height: 5vh;
`

const LoginPage = () => {

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
                <h2>LOGIN</h2>
                <input placeholder='E-mail'></input>
                <input placeholder='Senha'></input>
                <br></br>
                <button>Entrar!</button>
            </Main>
            <DivFooter />
        </MainContainer>
    )
}
export default LoginPage