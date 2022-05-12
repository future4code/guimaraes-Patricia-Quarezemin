import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContainer, ButtonHome, PlanetCard, CardContainer } from './styled'
import axios from 'axios'

const PlanetsPage = () => {

    const [planet, setPlanet] = useState([])

    useEffect(() => {
        getPlanet()
    }, [])

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    const goToPlanetDetailPage = (i) => {
        navigate(`/planet-detail/${i}`)
    }
    const getPlanet = () => {
        axios
            .get('https://swapi.dev/api/planets/')
            .then((res) => setPlanet(res.data.results))
            .catch((err) => console.log(err.message))
    }

    const planetList = planet.map((planet, i) => {
        return <PlanetCard onClick={() => goToPlanetDetailPage(i + 1)} key={i}>{planet.name}</PlanetCard>
    })

    return (
        <MainContainer>
            <ButtonHome onClick={goToHomePage}>Home</ButtonHome>
            <CardContainer>
                {planetList}
            </CardContainer>


        </MainContainer>
    )
}

export default PlanetsPage