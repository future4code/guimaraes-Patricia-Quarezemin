import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />}/>
            <Route path='error-page' element={<ErrorPage />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router