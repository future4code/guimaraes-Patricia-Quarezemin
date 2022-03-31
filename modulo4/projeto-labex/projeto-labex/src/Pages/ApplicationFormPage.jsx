import React from 'react'
import { useNavigate } from 'react-router-dom'

const ApplicationFormPage = () => {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }
    return (
        <div>
            <p>Application Form Page</p>
            <button onClick={goToHomePage}>Home</button>
        </div>
    )
}
export default ApplicationFormPage