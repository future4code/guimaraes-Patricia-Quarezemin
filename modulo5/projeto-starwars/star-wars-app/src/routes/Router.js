import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CharacterDetailPage from '../pages/CharacterDetailPage/CharacterDetailPage'
import CharacterListPage from '../pages/CharacterListPage/CharacterListPage'
import HomePage from '../pages/HomePage/HomePage'
import PlanetsPage from '../pages/PlanetsPage/PlanetsPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/list-page' element={<CharacterListPage />} />
                <Route path='/detail-page/:i' element={<CharacterDetailPage />} />
                <Route path='/planets-page' element={<PlanetsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router