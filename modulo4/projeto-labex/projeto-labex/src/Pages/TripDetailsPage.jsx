import React from 'react'
import { useNavigate } from 'react-router-dom'

const TripDetailsPage = () => {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }
    return (
        <div>
            <p>Trip Details Page</p>
            <button onClick={goToHomePage}>Home</button>
        </div>
    )
}
export default TripDetailsPage