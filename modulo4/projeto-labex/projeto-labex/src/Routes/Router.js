import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage'
import ApplicationFormPage from '../Pages/FormPage/ApplicationFormPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import AdminHomePage from '../Pages/AdmHomePage/AdminHomePage'
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='trips/list' element={<ListTripsPage />} />
                <Route path='trips/application' element={<ApplicationFormPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='admin/trips/list' element={<AdminHomePage />} />
                <Route path='admin/trips/create' element={<CreateTripPage />} />
                <Route path='admin/trips/:id' element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router