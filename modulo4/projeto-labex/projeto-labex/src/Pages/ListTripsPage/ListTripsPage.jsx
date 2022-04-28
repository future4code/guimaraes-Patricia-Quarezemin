import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import BackgroundImage from '../../Images/space.jpg'
import axios from 'axios'
import { useState } from 'react'

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
    display: flex;
    justify-content: space-between;
`
const Main = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const CardsTravel = styled.li`
    border: 2px solid pink;
    border-radius: 2%;
    color: blueviolet;
    background-color: whitesmoke;
    padding: 10px 0px;
    box-shadow: 0px 0px 5px #06d974;
    width: 300px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
`
const DivFooter = styled.div`
    border-top: 1px solid pink;
    height: 5vh;
`

const ListTripsPage = (props) => {

    const [listTrips, setListTrips] = useState([])

    useEffect(() => {
        tripList()
    }, [])

    const tripList = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/patricia-quarezemin/trips')
            .then(res => setListTrips(res.data.trips))
            .catch(err => console.log(err.response))

    }

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    const goToFormPage = () => {
        navigate('/trips/application')
    }


    return (
        <MainContainer>
            <DivHeader>
                <h2>LabeX</h2>
                <button onClick={goToHomePage}>Home</button>
            </DivHeader>

            <Main>
                <button onClick={goToFormPage}>Inscrever-se</button>
                <br />
                {listTrips.map((trip) => {
                    return <CardsTravel>
                        {trip.name}
                        <br />{trip.description}
                        <br />
                        Planeta:{trip.planet}
                        <br />
                        Duração:{trip.durationInDays} dias
                        <br />
                        Data:{trip.date}
                    </CardsTravel>
                })}
            </Main>
            <DivFooter />
        </MainContainer>
    )
}
export default ListTripsPage