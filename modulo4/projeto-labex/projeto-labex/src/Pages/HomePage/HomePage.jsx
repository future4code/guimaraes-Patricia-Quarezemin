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
                <button onClick={goToListsTrip}>'Ao infinito ... e além!'</button>
                <button onClick={goToLoginPage}>Área Administrativa</button>
            </Main>
            <DivFooter />
        </MainContainer>
    )
}
export default HomePage