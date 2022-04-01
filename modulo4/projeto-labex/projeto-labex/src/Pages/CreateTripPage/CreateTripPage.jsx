import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateTripPage = () => {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }
    return (
        <div>
            <p>Create Trip Page</p>
            <button onClick={goToHomePage}>Home</button>
        </div>
    )
}
export default CreateTripPage