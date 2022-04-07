import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import BackgroundImage from '../../Images/space.jpg'
import axios from 'axios'
import { useState } from 'react'

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
    display: flex; //talvez aqui tenha que fazer um grid para colocar as viagens
    justify-content: center;
    align-items: center;
`
const DivFooter = styled.div`
    border-top: 1px solid pink;
    height: 5vh;
`

const ListTripsPage = () => {

    const [trips, setTrips] = useState([])

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/patricia-quarezemin/trips')
        .then(res => setTrips(res.data))
        .catch(err => console.log(err.response))


    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }
    return (
        <MainContainer>
            <DivHeader>
                <h2>LabeX</h2>
                {trips.map((trip) => {
                    return <li key={trip}>{trip.name}</li>
                })}
                <button onClick={goToHomePage}>Home</button>
            </DivHeader>
            <Main>

            </Main>
            <DivFooter />
        </MainContainer>
    )
}
export default ListTripsPage