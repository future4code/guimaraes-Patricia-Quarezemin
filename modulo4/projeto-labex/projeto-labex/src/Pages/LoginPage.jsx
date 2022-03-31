import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }
    return (
        <div>
            <p>Login Page</p>
            <button onClick={goToHomePage}>Home</button>
        </div>
    )
}
export default LoginPage