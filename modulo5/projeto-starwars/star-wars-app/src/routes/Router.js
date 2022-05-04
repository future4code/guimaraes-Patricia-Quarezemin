import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CharacterDetailPage from '../pages/CharacterDetailPage/CharacterDetailPage'
import CharacterListPage from '../pages/CharacterListPage/CharacterListPage'

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            {/* <Route index element={<CharacterListPage />}/> */}
            <Route path= '/list-page' element={<CharacterListPage />}/>
            <Route path= '/detail-page/:i' element={<CharacterDetailPage />}/>
            
        </Routes>
        </BrowserRouter>
    )
}

export default Router