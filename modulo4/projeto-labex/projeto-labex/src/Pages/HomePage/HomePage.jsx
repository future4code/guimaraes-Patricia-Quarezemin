import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import BackgroundImage from '../../Images/space.jpg'

const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`
const DivHeader = styled.div`
    border-bottom: 1px solid pink;
    height: 5vh;
    color: pink;
    padding: 10px;
`
const Main = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const DivFooter = styled.div`
    border-top: 1px solid pink;
    height: 5vh;
`
const Buttons = styled.button`
border-bottom-left-radius: 5px;
border-top-left-radius: 5px;
border-bottom-right-radius: 10px;
border-top-right-radius: 10px;
height: 7%;
width: 15%;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-weight: bold;
font-size: large;
color: blueviolet;
margin-right: 5px;
`

const HomePage = () => {

    const navigate = useNavigate()

    const goToLoginPage = () => {
        navigate('/login')
    }

    const goToListsTrip = () => {
        navigate('/trips/list')
    }
    return (
        <MainContainer>
            <DivHeader>
                <h2>LabeX</h2>
            </DivHeader>
            <Main>
                <Buttons onClick={goToListsTrip}><strong>'Ao infinito ... e além!'</strong></Buttons>
                <Buttons onClick={goToLoginPage}>Área Administrativa</Buttons>
            </Main>
            <DivFooter />
        </MainContainer>
    )
}
export default HomePage