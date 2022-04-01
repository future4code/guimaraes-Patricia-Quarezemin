import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminHomePage = () => {

    const navigate = useNavigate()

    const goToListTrips = () => {
        navigate('/trips/list')
    }
    return(
        <div>
            <p>Admin Home Page</p>
            <button onClick={goToListTrips}>Home</button>
            </div>
    )
}
export default AdminHomePage