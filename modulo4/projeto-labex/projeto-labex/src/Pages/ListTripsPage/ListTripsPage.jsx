import React from 'react'
import { useNavigate } from 'react-router-dom'

const ListTripsPage = () => {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }
    return (
        <div>
            <p>List Trips Page</p>
            <button onClick={goToHomePage}>Home</button>
        </div>
    )
}
export default ListTripsPage