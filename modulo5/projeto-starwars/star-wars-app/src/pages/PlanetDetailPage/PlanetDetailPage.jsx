import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PlanetDetailPage = () => {

    const [planetDetail, setPlanetDetail] = useState([])

    useEffect(() => {
        getDetailPlanet()
    }, [])

    const navigate = useNavigate()

    const goToPlanetsPage = () => {
        navigate('/planets-page')
    }

    const params = useParams()

    const getDetailPlanet = () => {
        axios
        .get(`https://swapi.dev/api/planets/${params.i}`)
        .then((res) => setPlanetDetail(res.data))
        .catch((err) => console.log(err.message))
    }
    
    return(
        <div>
            <button onClick={goToPlanetsPage}>Lista de Planetas</button>
            <p>{planetDetail.climate}</p>
            </div>
    )
}

export default PlanetDetailPage