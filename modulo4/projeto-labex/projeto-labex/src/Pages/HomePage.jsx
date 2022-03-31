import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate()

    const goToLoginPage = () => {
        navigate('/login')
    }

    const goToListsTrip = () => {
        navigate('/trips/list')
    }
    return (
        <div>
            <p>Home Page</p>
            <button onClick={goToLoginPage}>Área Administrativa</button>
            <button onClick={goToListsTrip}>Lista de Viagens</button>
        </div>
    )
}
export default HomePage